﻿/* http://j2s.sf.net/ */$_L(["$wt.internal.dnd.DragListener"],"$wt.internal.dnd.SashDND",["$wt.graphics.Point","$wt.internal.browser.OS","$wt.internal.dnd.DNDUtils"],function(){
c$=$_C(function(){
this.sourceX=0;
this.sourceY=0;
this.thumb=null;
this.isHorizontal=false;
this.overFrameHandle=null;
this.hSelectStart=null;
$_Z(this,arguments);
},$wt.internal.dnd,"SashDND",null,$wt.internal.dnd.DragListener);
$_V(c$,"dragBegan",
function(e){
this.thumb=d$.createElement("DIV");
var cssName=e.sourceElement.className;
this.thumb.className=cssName;
if(cssName!=null&&cssName.indexOf("sash-mouse-down")==-1){
this.thumb.className+=" sash-mouse-down";
}if(cssName.indexOf("horizontal")!=-1){
this.isHorizontal=true;
}else{
this.isHorizontal=false;
}this.thumb.style.left=e.sourceElement.style.left;
this.thumb.style.top=e.sourceElement.style.top;
this.thumb.style.width=e.sourceElement.style.width;
this.thumb.style.height=e.sourceElement.style.height;
if(this.hSelectStart==null){
this.hSelectStart=$wt.internal.dnd.DNDUtils.$onselectstart;
Clazz.addEvent(this.thumb,"selectstart",this.hSelectStart);
}if(e.sourceElement.nextSibling!=null){
e.sourceElement.parentNode.insertBefore(this.thumb,e.sourceElement.nextSibling);
}else{
e.sourceElement.parentNode.appendChild(this.thumb);
}var style=e.sourceElement.style;
this.sourceX=style.left.length>0?Integer.parseInt(style.left):0;
this.sourceY=style.top.length>0?Integer.parseInt(style.top):0;
e.startX=e.currentX;
e.startY=e.currentY;
var frames=d$.getElementsByTagName("IFRAME");
var needOverIFrameLayer=false;
for(var i=0;i<frames.length;i++){
if(frames[i].style.display!=="none"){
needOverIFrameLayer=true;
break;
}}
if(needOverIFrameLayer){
this.overFrameHandle=d$.createElement("DIV");
this.overFrameHandle.className="over-iframe-layer";
this.overFrameHandle.style.zIndex=w$.currentTopZIndex;
d$.body.appendChild(this.overFrameHandle);
}return true;
},"$wt.internal.dnd.DragEvent");
$_V(c$,"dragCanceled",
function(e){
this.clean();
return true;
},"$wt.internal.dnd.DragEvent");
$_V(c$,"dragEnded",
function(e){
this.clean();
return true;
},"$wt.internal.dnd.DragEvent");
$_M(c$,"clean",
function(){
this.thumb.style.display="none";
d$.body.style.cursor="auto";
if(this.hSelectStart!=null){
Clazz.removeEvent(this.thumb,"selectstart",this.hSelectStart);
this.hSelectStart=null;
}O$.destroyHandle(this.thumb);
if(this.overFrameHandle!=null){
O$.destroyHandle(this.overFrameHandle);
this.overFrameHandle=null;
}});
$_M(c$,"currentLocation",
function(e){
var xx=this.sourceX+e.deltaX();
var yy=this.sourceY+e.deltaY();
var gHeight=0;
var parentStyle=e.sourceElement.parentNode.style;
if(parentStyle.height.length>0){
gHeight=Integer.parseInt(parentStyle.height);
}var gWidth=0;
if(parentStyle.width.length>0){
gWidth=Integer.parseInt(parentStyle.width);
}var style=e.sourceElement.style;
var dWidth=style.width.length>0?Integer.parseInt(style.width):0;
var dHeight=style.height.length>0?Integer.parseInt(style.height):0;
if(xx<0){
xx=0;
}else if(xx>gWidth-dWidth-2){
xx=gWidth-dWidth-2;
}if(yy<0){
yy=0;
}else if(yy>gHeight-dHeight-2){
yy=gHeight-dHeight-2;
}return new $wt.graphics.Point(xx,yy);
},"$wt.internal.dnd.DragEvent");
$_V(c$,"dragging",
function(e){
if(this.isHorizontal){
d$.body.style.cursor="e-resize";
this.thumb.style.cursor="e-resize";
}else{
d$.body.style.cursor="s-resize";
this.thumb.style.cursor="s-resize";
}if(this.isHorizontal){
this.thumb.style.left=this.currentLocation(e).x+"px";
}else{
this.thumb.style.top=this.currentLocation(e).y+"px";
}return true;
},"$wt.internal.dnd.DragEvent");
$_V(c$,"isDraggable",
function(e){
return true;
},"$wt.internal.dnd.HTMLEventWrapper");
});
$_L(["$wt.widgets.Control"],"$wt.widgets.Sash",["$wt.graphics.Point","$wt.internal.dnd.DragAndDrop","$.SashDND","$wt.widgets.Event","$.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.Sash", ".sash-horizontal-default {\nposition:absolute;\ncursor:e-resize;\nwidth:4px;\nfont-size:0;\nz-index:100;\n}\n.sash-vertical-default {\nposition:absolute;\ncursor:s-resize;\nheight:4px;\nfont-size:0;\nz-index:100;\n}\n.sash-border {\nborder: 1px inset white;\n}\n.sash-mouse-down {\nbackground-color:gray;\nz-index:100;\n}\n.swt-widgets-sash {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.dragging=false;
this.lastX=0;
this.lastY=0;
this.dnd=null;
$_Z(this,arguments);
},$wt.widgets,"Sash",$wt.widgets.Control);
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
return $wt.widgets.Widget.checkBits(style,256,512,0,0,0,0);
},"~N");
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var border=this.getBorderWidth();
var width=border*2;
var height=border*2;
if((this.style&256)!=0){
width+=64;
height+=3;
}else{
width+=3;
height+=64;
}if(wHint!=-1)width=wHint+(border*2);
if(hHint!=-1)height=hHint+(border*2);
return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_V(c$,"createHandle",
function(){
this.handle=d$.createElement("DIV");
if((this.style&256)!=0){
this.handle.className="sash-vertical-default";
}else{
this.handle.className="sash-horizontal-default";
}if((this.style&2048)!=0){
this.handle.className+=" sash-border";
}if(this.parent!=null){
var parentHandle=this.parent.containerHandle();
if(parentHandle!=null){
parentHandle.appendChild(this.handle);
}}this.dnd=new $wt.internal.dnd.DragAndDrop();
this.dnd.addDragListener((($_D("$wt.widgets.Sash$1")?0:org.eclipse.swt.widgets.Sash.$Sash$1$()),$_N($wt.widgets.Sash$1,this,null)));
this.dnd.bind(this.handle);
});
$_M(c$,"releaseHandle",
function(){
if(this.dnd!=null){
this.dnd.unbind();
this.dnd=null;
}$_U(this,$wt.widgets.Sash,"releaseHandle",[]);
});
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"windowClass",
function(){
return"DIV";
});
c$.$Sash$1$=function(){
$_H();
c$=$_W($wt.widgets,"Sash$1",$wt.internal.dnd.SashDND);
$_M(c$,"dragEnded",
function(e){
$_U(this,$wt.widgets.Sash$1,"dragEnded",[e]);
var event=new $wt.widgets.Event();
event.x=this.b$["$wt.widgets.Sash"].lastX;
event.y=this.b$["$wt.widgets.Sash"].lastY;
var size=this.b$["$wt.widgets.Sash"].getSize();
var delta=0;
var width=size.x+delta;
if(width<2){
width=2;
}event.width=width;
var height=size.y+delta;
if(height<2){
height=2;
}event.height=height;
event.widget=this.b$["$wt.widgets.Sash"];
event.item=this.b$["$wt.widgets.Sash"];
this.b$["$wt.widgets.Sash"].sendEvent(13,event);
if(event.doit){
if((this.b$["$wt.widgets.Sash"].style&65536)!=0){
if(this.isHorizontal){
this.b$["$wt.widgets.Sash"].handle.style.left=this.b$["$wt.widgets.Sash"].lastX+"px";
}else{
this.b$["$wt.widgets.Sash"].handle.style.top=this.b$["$wt.widgets.Sash"].lastY+"px";
}}}return true;
},"$wt.internal.dnd.DragEvent");
$_M(c$,"dragging",
function(e){
$_U(this,$wt.widgets.Sash$1,"dragging",[e]);
var event=new $wt.widgets.Event();
var p=this.currentLocation(e);
if(this.isHorizontal){
event.x=p.x;
event.y=Integer.parseInt(this.b$["$wt.widgets.Sash"].handle.style.top);
}else{
event.x=Integer.parseInt(this.b$["$wt.widgets.Sash"].handle.style.left);
event.y=p.y;
}var size=this.b$["$wt.widgets.Sash"].getSize();
var delta=0;
var width=size.x+delta;
if(width<2){
width=2;
}event.width=width;
var height=size.y+delta;
if(height<2){
height=2;
}event.height=height;
event.widget=this.b$["$wt.widgets.Sash"];
event.item=this.b$["$wt.widgets.Sash"];
if((this.b$["$wt.widgets.Sash"].style&65536)==0){
event.detail=1;
}this.b$["$wt.widgets.Sash"].sendEvent(13,event);
if(event.doit){
this.b$["$wt.widgets.Sash"].lastX=event.x;
this.b$["$wt.widgets.Sash"].lastY=event.y;
}if((this.b$["$wt.widgets.Sash"].style&65536)!=0){
if(this.isHorizontal){
this.b$["$wt.widgets.Sash"].handle.style.left=this.b$["$wt.widgets.Sash"].lastX+"px";
}else{
this.b$["$wt.widgets.Sash"].handle.style.top=this.b$["$wt.widgets.Sash"].lastY+"px";
}}return true;
},"$wt.internal.dnd.DragEvent");
c$=$_P();
};
$_S(c$,
"INCREMENT",1,
"PAGE_INCREMENT",9);
});
c$=$_C(function(){
this.weight=0;
$_Z(this,arguments);
},$wt.custom,"SashFormData");
$_M(c$,"getName",
function(){
var string=this.getClass().getName();
var index=string.lastIndexOf('.');
if(index==-1)return string;
return string.substring(index+1,string.length);
});
$_V(c$,"toString",
function(){
return this.getName()+" {weight="+this.weight+"}";
});
$_L(["$wt.widgets.Layout"],"$wt.custom.SashFormLayout",["$wt.custom.SashFormData","$wt.graphics.Point","$wt.widgets.Sash"],function(){
c$=$_T($wt.custom,"SashFormLayout",$wt.widgets.Layout);
$_V(c$,"computeSize",
function(composite,wHint,hHint,flushCache){
var sashForm=composite;
var cArray=sashForm.getControls(true);
var width=0;
var height=0;
if(cArray.length==0){
if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
return new $wt.graphics.Point(width,height);
}var vertical=sashForm.getOrientation()==512;
var maxIndex=0;
var maxValue=0;
for(var i=0;i<cArray.length;i++){
if(vertical){
var size=cArray[i].computeSize(wHint,-1,flushCache);
if(size.y>maxValue){
maxIndex=i;
maxValue=size.y;
}width=Math.max(width,size.x);
}else{
var size=cArray[i].computeSize(-1,hHint,flushCache);
if(size.x>maxValue){
maxIndex=i;
maxValue=size.x;
}height=Math.max(height,size.y);
}}
var ratios=$_A(cArray.length,0);
var total=0;
for(var i=0;i<cArray.length;i++){
var data=cArray[i].getLayoutData();
if(data!=null&&$_O(data,$wt.custom.SashFormData)){
ratios[i]=(data).weight;
}else{
data=new $wt.custom.SashFormData();
cArray[i].setLayoutData(data);
(data).weight=ratios[i]=13108;
}total+=ratios[i];
}
if(ratios[maxIndex]>0){
var sashwidth=sashForm.sashes.length>0?sashForm.SASH_WIDTH+sashForm.sashes[0].getBorderWidth()*2:sashForm.SASH_WIDTH;
if(vertical){
height+=(Math.floor(total*maxValue/ratios[maxIndex]))+(cArray.length-1)*sashwidth;
}else{
width+=(Math.floor(total*maxValue/ratios[maxIndex]))+(cArray.length-1)*sashwidth;
}}width+=sashForm.getBorderWidth()*2;
height+=sashForm.getBorderWidth()*2;
if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
return new $wt.graphics.Point(width,height);
},"$wt.widgets.Composite,~N,~N,~B");
$_V(c$,"flushCache",
function(control){
return true;
},"$wt.widgets.Control");
$_V(c$,"layout",
function(composite,flushCache){
var sashForm=composite;
var area=sashForm.getClientArea();
if(area.width<=1||area.height<=1)return;
var newControls=sashForm.getControls(true);
if(sashForm.controls.length==0&&newControls.length==0)return;
sashForm.controls=newControls;
var controls=sashForm.controls;
if(sashForm.maxControl!=null&&!sashForm.maxControl.isDisposed()){
for(var i=0;i<controls.length;i++){
if(controls[i]!==sashForm.maxControl){
controls[i].setBounds(-200,-200,0,0);
}else{
controls[i].setBounds(area);
}}
return;
}if(sashForm.sashes.length<controls.length-1){
var newSashes=new Array(controls.length-1);
System.arraycopy(sashForm.sashes,0,newSashes,0,sashForm.sashes.length);
for(var i=sashForm.sashes.length;i<newSashes.length;i++){
newSashes[i]=new $wt.widgets.Sash(sashForm,sashForm.sashStyle);
newSashes[i].setBackground(sashForm.$background);
newSashes[i].setForeground(sashForm.$foreground);
newSashes[i].addListener(13,sashForm.sashListener);
}
sashForm.sashes=newSashes;
}if(sashForm.sashes.length>controls.length-1){
if(controls.length==0){
for(var i=0;i<sashForm.sashes.length;i++){
sashForm.sashes[i].dispose();
}
sashForm.sashes=new Array(0);
}else{
var newSashes=new Array(controls.length-1);
System.arraycopy(sashForm.sashes,0,newSashes,0,newSashes.length);
for(var i=controls.length-1;i<sashForm.sashes.length;i++){
sashForm.sashes[i].dispose();
}
sashForm.sashes=newSashes;
}}if(controls.length==0)return;
var sashes=sashForm.sashes;
var ratios=$_A(controls.length,0);
var total=0;
for(var i=0;i<controls.length;i++){
var data=controls[i].getLayoutData();
if(data!=null&&$_O(data,$wt.custom.SashFormData)){
ratios[i]=(data).weight;
}else{
data=new $wt.custom.SashFormData();
controls[i].setLayoutData(data);
(data).weight=ratios[i]=13108;
}total+=ratios[i];
}
var sashwidth=sashes.length>0?sashForm.SASH_WIDTH+sashes[0].getBorderWidth()*2:sashForm.SASH_WIDTH;
if(sashForm.getOrientation()==256){
var width=(Math.floor(ratios[0]*(area.width-sashes.length*sashwidth)/total));
var x=area.x;
controls[0].setBounds(x,area.y,width,area.height);
x+=width;
for(var i=1;i<controls.length-1;i++){
sashes[i-1].setBounds(x,area.y,sashwidth,area.height);
x+=sashwidth;
width=(Math.floor(ratios[i]*(area.width-sashes.length*sashwidth)/total));
controls[i].setBounds(x,area.y,width,area.height);
x+=width;
}
if(controls.length>1){
sashes[sashes.length-1].setBounds(x,area.y,sashwidth,area.height);
x+=sashwidth;
width=area.width-x;
controls[controls.length-1].setBounds(x,area.y,width,area.height);
}}else{
var height=(Math.floor(ratios[0]*(area.height-sashes.length*sashwidth)/total));
var y=area.y;
controls[0].setBounds(area.x,y,area.width,height);
y+=height;
for(var i=1;i<controls.length-1;i++){
sashes[i-1].setBounds(area.x,y,area.width,sashwidth);
y+=sashwidth;
height=(Math.floor(ratios[i]*(area.height-sashes.length*sashwidth)/total));
controls[i].setBounds(area.x,y,area.width,height);
y+=height;
}
if(controls.length>1){
sashes[sashes.length-1].setBounds(area.x,y,area.width,sashwidth);
y+=sashwidth;
height=area.height-y;
controls[controls.length-1].setBounds(area.x,y,area.width,height);
}}},"$wt.widgets.Composite,~B");
});
$_L(["$wt.widgets.Composite"],"$wt.custom.SashForm",["$wt.custom.SashFormData","$.SashFormLayout","$wt.widgets.Listener","$.Sash"],function(){
c$=$_C(function(){
this.SASH_WIDTH=3;
this.sashStyle=0;
this.sashes=null;
this.$background=null;
this.$foreground=null;
this.controls=null;
this.maxControl=null;
this.sashListener=null;
$_Z(this,arguments);
},$wt.custom,"SashForm",$wt.widgets.Composite);
$_Y(c$,function(){
this.sashes=new Array(0);
this.controls=new Array(0);
});
$_K(c$,
function(parent,style){
$_R(this,$wt.custom.SashForm,[parent,$wt.custom.SashForm.checkStyle(style)]);
$_U(this,$wt.custom.SashForm,"setLayout",[new $wt.custom.SashFormLayout()]);
this.sashStyle=((style&512)!=0)?256:512;
if((style&2048)!=0)this.sashStyle|=2048;
if((style&65536)!=0)this.sashStyle|=65536;
this.sashListener=(($_D("$wt.custom.SashForm$1")?0:org.eclipse.swt.custom.SashForm.$SashForm$1$()),$_N($wt.custom.SashForm$1,this,null));
},"$wt.widgets.Composite,~N");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
var mask=100665344;
return style&mask;
},"~N");
$_M(c$,"getOrientation",
function(){
return(this.sashStyle&512)!=0?256:512;
});
$_M(c$,"getStyle",
function(){
var style=$_U(this,$wt.custom.SashForm,"getStyle",[]);
style|=this.getOrientation()==512?512:256;
if((this.sashStyle&65536)!=0)style|=65536;
return style;
});
$_M(c$,"getMaximizedControl",
function(){
return this.maxControl;
});
$_M(c$,"getWeights",
function(){
var cArray=this.getControls(false);
var ratios=$_A(cArray.length,0);
for(var i=0;i<cArray.length;i++){
var data=cArray[i].getLayoutData();
if(data!=null&&$_O(data,$wt.custom.SashFormData)){
ratios[i]=((data).weight*1000>>16);
}else{
ratios[i]=200;
}}
return ratios;
});
$_M(c$,"getControls",
function(onlyVisible){
var children=this.getChildren();
var result=new Array(0);
for(var i=0;i<children.length;i++){
if($_O(children[i],$wt.widgets.Sash))continue;if(onlyVisible&&!children[i].getVisible())continue;var newResult=new Array(result.length+1);
System.arraycopy(result,0,newResult,0,result.length);
newResult[result.length]=children[i];
result=newResult;
}
return result;
},"~B");
$_M(c$,"onDragSash",
function(event){
var sash=event.widget;
var sashIndex=-1;
for(var i=0;i<this.sashes.length;i++){
if(this.sashes[i]===sash){
sashIndex=i;
break;
}}
if(sashIndex==-1)return;
var c1=this.controls[sashIndex];
var c2=this.controls[sashIndex+1];
var b1=c1.getBounds();
var b2=c2.getBounds();
var sashBounds=sash.getBounds();
var area=this.getClientArea();
var correction=false;
if(this.getOrientation()==256){
correction=b1.width<20||b2.width<20;
var totalWidth=b2.x+b2.width-b1.x;
var shift=event.x-sashBounds.x;
b1.width+=shift;
b2.x+=shift;
b2.width-=shift;
if(b1.width<20){
b1.width=20;
b2.x=b1.x+b1.width+sashBounds.width;
b2.width=totalWidth-b2.x;
event.x=b1.x+b1.width;
event.doit=false;
}if(b2.width<20){
b1.width=totalWidth-20-sashBounds.width;
b2.x=b1.x+b1.width+sashBounds.width;
b2.width=20;
event.x=b1.x+b1.width;
event.doit=false;
}var data1=c1.getLayoutData();
if(data1==null||!($_O(data1,$wt.custom.SashFormData))){
data1=new $wt.custom.SashFormData();
c1.setLayoutData(data1);
}var data2=c2.getLayoutData();
if(data2==null||!($_O(data2,$wt.custom.SashFormData))){
data2=new $wt.custom.SashFormData();
c2.setLayoutData(data2);
}(data1).weight=Math.floor(((b1.width<<16)+area.width-1)/area.width);
(data2).weight=Math.floor(((b2.width<<16)+area.width-1)/area.width);
}else{
correction=b1.height<20||b2.height<20;
var totalHeight=b2.y+b2.height-b1.y;
var shift=event.y-sashBounds.y;
b1.height+=shift;
b2.y+=shift;
b2.height-=shift;
if(b1.height<20){
b1.height=20;
b2.y=b1.y+b1.height+sashBounds.height;
b2.height=totalHeight-b2.y;
event.y=b1.y+b1.height;
event.doit=false;
}if(b2.height<20){
b1.height=totalHeight-20-sashBounds.height;
b2.y=b1.y+b1.height+sashBounds.height;
b2.height=20;
event.y=b1.y+b1.height;
event.doit=false;
}var data1=c1.getLayoutData();
if(data1==null||!($_O(data1,$wt.custom.SashFormData))){
data1=new $wt.custom.SashFormData();
c1.setLayoutData(data1);
}var data2=c2.getLayoutData();
if(data2==null||!($_O(data2,$wt.custom.SashFormData))){
data2=new $wt.custom.SashFormData();
c2.setLayoutData(data2);
}(data1).weight=Math.floor(((b1.height<<16)+area.height-1)/area.height);
(data2).weight=Math.floor(((b2.height<<16)+area.height-1)/area.height);
}if(correction||(event.doit&&event.detail!=1)){
c1.setBounds(b1);
sash.setBounds(event.x,event.y,event.width,event.height);
c2.setBounds(b2);
}},"$wt.widgets.Event");
$_M(c$,"setOrientation",
function(orientation){
if(this.getOrientation()==orientation)return;
this.sashStyle&=-769;
this.sashStyle|=orientation==512?256:512;
for(var i=0;i<this.sashes.length;i++){
this.sashes[i].dispose();
this.sashes[i]=new $wt.widgets.Sash(this,this.sashStyle);
this.sashes[i].setBackground(this.$background);
this.sashes[i].setForeground(this.$foreground);
this.sashes[i].addListener(13,this.sashListener);
}
this.layout(false);
},"~N");
$_M(c$,"setBackground",
function(color){
$_U(this,$wt.custom.SashForm,"setBackground",[color]);
this.$background=color;
for(var i=0;i<this.sashes.length;i++){
this.sashes[i].setBackground(this.$background);
}
},"$wt.graphics.Color");
$_M(c$,"setForeground",
function(color){
$_U(this,$wt.custom.SashForm,"setForeground",[color]);
this.$foreground=color;
for(var i=0;i<this.sashes.length;i++){
this.sashes[i].setForeground(this.$foreground);
}
},"$wt.graphics.Color");
$_M(c$,"setLayout",
function(layout){
return;
},"$wt.widgets.Layout");
$_M(c$,"setMaximizedControl",
function(control){
if(control==null){
if(this.maxControl!=null){
this.maxControl=null;
this.layout(false);
for(var i=0;i<this.sashes.length;i++){
this.sashes[i].setVisible(true);
}
}return;
}for(var i=0;i<this.sashes.length;i++){
this.sashes[i].setVisible(false);
}
this.maxControl=control;
this.layout(false);
},"$wt.widgets.Control");
$_M(c$,"setWeights",
function(weights){
var cArray=this.getControls(false);
var total=0;
for(var i=0;i<weights.length;i++){
total+=weights[i];
}
for(var i=0;i<cArray.length;i++){
var data=cArray[i].getLayoutData();
if(data==null||!($_O(data,$wt.custom.SashFormData))){
data=new $wt.custom.SashFormData();
cArray[i].setLayoutData(data);
}(data).weight=Math.floor(((weights[i]<<16)+total-1)/total);
}
this.layout(false);
},"~A");
c$.$SashForm$1$=function(){
$_H();
c$=$_W($wt.custom,"SashForm$1",null,$wt.widgets.Listener);
$_V(c$,"handleEvent",
function(e){
this.b$["$wt.custom.SashForm"].onDragSash(e);
},"$wt.widgets.Event");
c$=$_P();
};
$_S(c$,
"DRAG_MINIMUM",20);
});
