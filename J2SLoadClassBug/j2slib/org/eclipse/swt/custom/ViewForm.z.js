﻿/* http://j2s.sf.net/ */$_L(["$wt.widgets.Layout"],"$wt.custom.ViewFormLayout",["$wt.custom.CLayoutData","$wt.graphics.Point","$.Rectangle"],function(){
c$=$_T($wt.custom,"ViewFormLayout",$wt.widgets.Layout);
$_V(c$,"computeSize",
function(composite,wHint,hHint,flushCache){
var form=composite;
var left=form.topLeft;
var center=form.topCenter;
var right=form.topRight;
var content=form.content;
var leftSize=new $wt.graphics.Point(0,0);
if(left!=null){
leftSize=this.computeChildSize(left,-1,-1,flushCache);
}var centerSize=new $wt.graphics.Point(0,0);
if(center!=null){
centerSize=this.computeChildSize(center,-1,-1,flushCache);
}var rightSize=new $wt.graphics.Point(0,0);
if(right!=null){
rightSize=this.computeChildSize(right,-1,-1,flushCache);
}var size=new $wt.graphics.Point(0,0);
if(form.separateTopCenter||(wHint!=-1&&leftSize.x+centerSize.x+rightSize.x>wHint)){
size.x=leftSize.x+rightSize.x;
if(leftSize.x>0&&rightSize.x>0)size.x+=form.horizontalSpacing;
size.x=Math.max(centerSize.x,size.x);
size.y=Math.max(leftSize.y,rightSize.y);
if(center!=null){
size.y+=centerSize.y;
if(left!=null||right!=null)size.y+=form.verticalSpacing;
}}else{
size.x=leftSize.x+centerSize.x+rightSize.x;
var count=-1;
if(leftSize.x>0)count++;
if(centerSize.x>0)count++;
if(rightSize.x>0)count++;
if(count>0)size.x+=count*form.horizontalSpacing;
size.y=Math.max(leftSize.y,Math.max(centerSize.y,rightSize.y));
}if(content!=null){
if(left!=null||right!=null||center!=null)size.y+=1;
var contentSize=new $wt.graphics.Point(0,0);
contentSize=this.computeChildSize(content,-1,-1,flushCache);
size.x=Math.max(size.x,contentSize.x);
size.y+=contentSize.y;
if(size.y>contentSize.y)size.y+=form.verticalSpacing;
}size.x+=2*form.marginWidth;
size.y+=2*form.marginHeight;
if(wHint!=-1)size.x=wHint;
if(hHint!=-1)size.y=hHint;
return size;
},"$wt.widgets.Composite,~N,~N,~B");
$_M(c$,"computeChildSize",
function(control,wHint,hHint,flushCache){
var data=control.getLayoutData();
if(data==null||!($_O(data,$wt.custom.CLayoutData))){
data=new $wt.custom.CLayoutData();
control.setLayoutData(data);
}return(data).computeSize(control,wHint,hHint,flushCache);
},"$wt.widgets.Control,~N,~N,~B");
$_M(c$,"computeTrim",
function(c){
if($_O(c,$wt.widgets.Scrollable)){
var rect=(c).computeTrim(0,0,0,0);
return rect.width;
}return c.getBorderWidth()*2;
},"$wt.widgets.Control");
$_V(c$,"flushCache",
function(control){
var data=control.getLayoutData();
if(data!=null&&$_O(data,$wt.custom.CLayoutData))(data).flushCache();
return true;
},"$wt.widgets.Control");
$_V(c$,"layout",
function(composite,flushCache){
var form=composite;
var left=form.topLeft;
var center=form.topCenter;
var right=form.topRight;
var content=form.content;
var rect=composite.getClientArea();
var leftSize=new $wt.graphics.Point(0,0);
if(left!=null&&!left.isDisposed()){
leftSize=this.computeChildSize(left,-1,-1,flushCache);
}var centerSize=new $wt.graphics.Point(0,0);
if(center!=null&&!center.isDisposed()){
centerSize=this.computeChildSize(center,-1,-1,flushCache);
}var rightSize=new $wt.graphics.Point(0,0);
if(right!=null&&!right.isDisposed()){
rightSize=this.computeChildSize(right,-1,-1,flushCache);
}var minTopWidth=leftSize.x+centerSize.x+rightSize.x+2*form.marginWidth+2*form.highlight;
var count=-1;
if(leftSize.x>0)count++;
if(centerSize.x>0)count++;
if(rightSize.x>0)count++;
if(count>0)minTopWidth+=count*form.horizontalSpacing;
var x=rect.x+rect.width-form.marginWidth-form.highlight;
var y=rect.y+form.marginHeight+form.highlight;
var top=false;
if(form.separateTopCenter||minTopWidth>rect.width){
var topHeight=Math.max(rightSize.y,leftSize.y);
if(right!=null&&!right.isDisposed()){
top=true;
x-=rightSize.x;
right.setBounds(x,y,rightSize.x,topHeight);
x-=form.horizontalSpacing;
}if(left!=null&&!left.isDisposed()){
top=true;
var trim=this.computeTrim(left);
var leftW=x-rect.x-form.marginWidth-form.highlight-trim;
leftSize=this.computeChildSize(left,leftW,-1,false);
left.setBounds(rect.x+form.marginWidth+form.highlight,y,leftSize.x,topHeight);
}if(top)y+=topHeight+form.verticalSpacing;
if(center!=null&&!center.isDisposed()){
top=true;
var trim=this.computeTrim(center);
var w=rect.width-2*form.marginWidth-2*form.highlight-trim;
centerSize=this.computeChildSize(center,w,-1,false);
center.setBounds(rect.x+rect.width-form.marginWidth-form.highlight-centerSize.x,y,centerSize.x,centerSize.y);
y+=centerSize.y+form.verticalSpacing;
}}else{
var topHeight=Math.max(rightSize.y,Math.max(centerSize.y,leftSize.y));
if(right!=null&&!right.isDisposed()){
top=true;
x-=rightSize.x;
right.setBounds(x,y,rightSize.x,topHeight);
x-=form.horizontalSpacing;
}if(center!=null&&!center.isDisposed()){
top=true;
x-=centerSize.x;
center.setBounds(x,y,centerSize.x,topHeight);
x-=form.horizontalSpacing;
}if(left!=null&&!left.isDisposed()){
top=true;
var trim=$_O(left,$wt.widgets.Composite)?(left).computeTrim(0,0,0,0):new $wt.graphics.Rectangle(0,0,0,0);
var w=x-rect.x-form.marginWidth-form.highlight-trim.width;
var h=topHeight-trim.height;
leftSize=this.computeChildSize(left,w,h,false);
left.setBounds(rect.x+form.marginWidth+form.highlight,y,leftSize.x,topHeight);
}if(top)y+=topHeight+form.verticalSpacing;
}var oldSeperator=form.separator;
form.separator=-1;
if(content!=null&&!content.isDisposed()){
if(left!=null||right!=null||center!=null){
form.separator=y;
y++;
}content.setBounds(rect.x+form.marginWidth+form.highlight,y,rect.width-2*form.marginWidth-2*form.highlight,rect.y+rect.height-y-form.marginHeight-form.highlight);
}if(oldSeperator!=-1&&form.separator!=-1){
var t=Math.min(form.separator,oldSeperator);
var b=Math.max(form.separator,oldSeperator);
form.redraw(form.borderLeft,t,form.getSize().x-form.borderLeft-form.borderRight,b-t,false);
}},"$wt.widgets.Composite,~B");
});
$_L(["$wt.widgets.Composite","$wt.graphics.RGB"],"$wt.custom.ViewForm",["$wt.custom.ViewFormLayout","$wt.graphics.Rectangle","$wt.widgets.Listener"],function(){
c$=$_C(function(){
this.marginWidth=0;
this.marginHeight=0;
this.horizontalSpacing=1;
this.verticalSpacing=1;
this.topLeft=null;
this.topCenter=null;
this.topRight=null;
this.content=null;
this.separateTopCenter=false;
this.showBorder=false;
this.separator=-1;
this.borderTop=0;
this.borderBottom=0;
this.borderLeft=0;
this.borderRight=0;
this.highlight=0;
this.oldSize=null;
this.selectionBackground=null;
$_Z(this,arguments);
},$wt.custom,"ViewForm",$wt.widgets.Composite);
$_K(c$,
function(parent,style){
$_R(this,$wt.custom.ViewForm,[parent,$wt.custom.ViewForm.checkStyle(style)]);
$_U(this,$wt.custom.ViewForm,"setLayout",[new $wt.custom.ViewFormLayout()]);
this.setBorderVisible((style&2048)!=0);
var listener=(($_D("$wt.custom.ViewForm$1")?0:org.eclipse.swt.custom.ViewForm.$ViewForm$1$()),$_N($wt.custom.ViewForm$1,this,null));
var events=[12,9,11];
for(var i=0;i<events.length;i++){
this.addListener(events[i],listener);
}
},"$wt.widgets.Composite,~N");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
var mask=109051904;
return style&mask|1048576;
},"~N");
$_V(c$,"computeTrim",
function(x,y,width,height){
var trimX=x-this.borderLeft-this.highlight;
var trimY=y-this.borderTop-this.highlight;
var trimWidth=width+this.borderLeft+this.borderRight+2*this.highlight;
var trimHeight=height+this.borderTop+this.borderBottom+2*this.highlight;
return new $wt.graphics.Rectangle(trimX,trimY,trimWidth,trimHeight);
},"~N,~N,~N,~N");
$_M(c$,"getClientArea",
function(){
var clientArea=$_U(this,$wt.custom.ViewForm,"getClientArea",[]);
clientArea.x+=this.borderLeft;
clientArea.y+=this.borderTop;
clientArea.width-=this.borderLeft+this.borderRight;
clientArea.height-=this.borderTop+this.borderBottom;
return clientArea;
});
$_M(c$,"getContent",
function(){
return this.content;
});
$_M(c$,"getTopCenter",
function(){
return this.topCenter;
});
$_M(c$,"getTopLeft",
function(){
return this.topLeft;
});
$_M(c$,"getTopRight",
function(){
return this.topRight;
});
$_M(c$,"onDispose",
function(){
this.topLeft=null;
this.topCenter=null;
this.topRight=null;
this.content=null;
this.oldSize=null;
this.selectionBackground=null;
});
$_M(c$,"onPaint",
function(gc){
var gcForeground=gc.getForeground();
var size=this.getSize();
var border=this.getDisplay().getSystemColor(18);
if(this.showBorder){
gc.setForeground(border);
gc.drawRectangle(0,0,size.x-1,size.y-1);
if(this.highlight>0){
var x1=1;
var y1=1;
var x2=size.x-1;
var y2=size.y-1;
var shape=[x1,y1,x2,y1,x2,y2,x1,y2,x1,y1+this.highlight,x1+this.highlight,y1+this.highlight,x1+this.highlight,y2-this.highlight,x2-this.highlight,y2-this.highlight,x2-this.highlight,y1+this.highlight,x1,y1+this.highlight];
var highlightColor=this.getDisplay().getSystemColor(26);
gc.setBackground(highlightColor);
}}if(this.separator>-1){
gc.setForeground(border);
gc.drawLine(this.borderLeft+this.highlight,this.separator,size.x-this.borderLeft-this.borderRight-this.highlight,this.separator);
}gc.setForeground(gcForeground);
},"$wt.graphics.GC");
$_M(c$,"onResize",
function(){
var size=this.getSize();
if(this.oldSize==null||this.oldSize.x==0||this.oldSize.y==0){
this.redraw();
}else{
var width=0;
if(this.oldSize.x<size.x){
width=size.x-this.oldSize.x+this.borderRight+this.highlight;
}else if(this.oldSize.x>size.x){
width=this.borderRight+this.highlight;
}this.redraw(size.x-width,0,width,size.y,false);
var height=0;
if(this.oldSize.y<size.y){
height=size.y-this.oldSize.y+this.borderBottom+this.highlight;
}if(this.oldSize.y>size.y){
height=this.borderBottom+this.highlight;
}this.redraw(0,size.y-height,size.x,height,false);
}this.oldSize=size;
});
$_M(c$,"setContent",
function(content){
if(this.content!=null&&!this.content.isDisposed()){
this.content.setBounds(-200,-200,0,0);
}this.content=content;
this.layout(false);
},"$wt.widgets.Control");
$_M(c$,"setLayout",
function(layout){
return;
},"$wt.widgets.Layout");
$_M(c$,"setSelectionBackground",
function(color){
if(this.selectionBackground===color)return;
if(color==null)color=this.getDisplay().getSystemColor(25);
this.selectionBackground=color;
this.redraw();
},"$wt.graphics.Color");
$_M(c$,"setTopCenter",
function(topCenter){
if(this.topCenter!=null&&!this.topCenter.isDisposed()){
var size=this.topCenter.getSize();
this.topCenter.setLocation(-200-size.x,-200-size.y);
}this.topCenter=topCenter;
this.layout(false);
},"$wt.widgets.Control");
$_M(c$,"setTopLeft",
function(c){
if(this.topLeft!=null&&!this.topLeft.isDisposed()){
var size=this.topLeft.getSize();
this.topLeft.setLocation(-200-size.x,-200-size.y);
}this.topLeft=c;
this.layout(false);
},"$wt.widgets.Control");
$_M(c$,"setTopRight",
function(c){
if(this.topRight!=null&&!this.topRight.isDisposed()){
var size=this.topRight.getSize();
this.topRight.setLocation(-200-size.x,-200-size.y);
}this.topRight=c;
this.layout(false);
},"$wt.widgets.Control");
$_M(c$,"setBorderVisible",
function(show){
if(this.showBorder==show)return;
this.showBorder=show;
if(this.showBorder){
this.borderLeft=this.borderTop=this.borderRight=this.borderBottom=1;
if((this.getStyle()&8388608)==0)this.highlight=2;
}else{
this.borderBottom=this.borderTop=this.borderLeft=this.borderRight=0;
this.highlight=0;
}this.layout(false);
this.redraw();
},"~B");
$_M(c$,"setTopCenterSeparate",
function(show){
this.separateTopCenter=show;
this.layout(false);
},"~B");
c$.$ViewForm$1$=function(){
$_H();
c$=$_W($wt.custom,"ViewForm$1",null,$wt.widgets.Listener);
$_V(c$,"handleEvent",
function(e){
switch(e.type){
case 12:
this.b$["$wt.custom.ViewForm"].onDispose();
break;
case 9:
this.b$["$wt.custom.ViewForm"].onPaint(e.gc);
break;
case 11:
this.b$["$wt.custom.ViewForm"].onResize();
break;
}
},"$wt.widgets.Event");
c$=$_P();
};
c$.borderInsideRGB=c$.prototype.borderInsideRGB=new $wt.graphics.RGB(132,130,132);
c$.borderMiddleRGB=c$.prototype.borderMiddleRGB=new $wt.graphics.RGB(143,141,138);
c$.borderOutsideRGB=c$.prototype.borderOutsideRGB=new $wt.graphics.RGB(171,168,165);
$_S(c$,
"OFFSCREEN",-200,
"BORDER1_COLOR",18,
"SELECTION_BACKGROUND",25);
});
