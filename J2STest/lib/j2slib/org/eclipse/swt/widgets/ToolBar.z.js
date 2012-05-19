﻿/* http://j2s.sf.net/ */$_L(["$wt.widgets.Item"],"$wt.widgets.ToolItem",["$wt.graphics.Image","$.Point","$.Rectangle","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.internal.dnd.HTMLEventWrapper","$wt.widgets.Event","$.TypedListener"],function(){
c$=$_C(function(){
this.parent=null;
this.control=null;
this.toolTipText=null;
this.disabledImage=null;
this.hotImage=null;
this.disabledImage2=null;
this.id=0;
this.cachedTextWidth=0;
this.cachedTextHeight=0;
this.isInnerBounds=false;
this.seperatorWidth=0;
this.dropDownEl=null;
this.hItemSelection=null;
this.hItemMouseDown=null;
this.hItemMouseUp=null;
this.hArrowSelection=null;
this.hToolMouseDown=null;
this.hToolMouseUp=null;
$_Z(this,arguments);
},$wt.widgets,"ToolItem",$wt.widgets.Item);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.ToolItem,[parent,$wt.widgets.ToolItem.checkStyle(style)]);
this.parent=parent;
parent.createItem(this,parent.getItemCount());
this.configureItem();
},"$wt.widgets.ToolBar,~N");
$_K(c$,
function(parent,style,index){
$_R(this,$wt.widgets.ToolItem,[parent,$wt.widgets.ToolItem.checkStyle(style)]);
this.parent=parent;
parent.createItem(this,index);
this.configureItem();
},"$wt.widgets.ToolBar,~N,~N");
$_M(c$,"configureItem",
function(){
this.hItemSelection=$_Q((($_D("$wt.widgets.ToolItem$1")?0:org.eclipse.swt.widgets.ToolItem.$ToolItem$1$()),$_N($wt.widgets.ToolItem$1,this,null)));
Clazz.addEvent(this.handle,"click",this.hItemSelection);
Clazz.addEvent(this.handle,"dblclick",this.hItemSelection);
if((this.style&2)==0){
if(this.dropDownEl!=null){
var arrow=this.dropDownEl.childNodes[0];
this.hItemMouseDown=$_Q((($_D("$wt.widgets.ToolItem$2")?0:org.eclipse.swt.widgets.ToolItem.$ToolItem$2$()),$_N($wt.widgets.ToolItem$2,this,null)));
Clazz.addEvent(this.handle,"mousedown",this.hItemMouseDown);
Clazz.addEvent(arrow,"mousedown",this.hItemMouseDown);
Clazz.addEvent(this.dropDownEl,"mousedown",this.hItemMouseDown);
this.hItemMouseUp=$_Q((($_D("$wt.widgets.ToolItem$3")?0:org.eclipse.swt.widgets.ToolItem.$ToolItem$3$()),$_N($wt.widgets.ToolItem$3,this,null)));
Clazz.addEvent(this.handle,"mouseup",this.hItemMouseUp);
Clazz.addEvent(arrow,"mouseup",this.hItemMouseUp);
Clazz.addEvent(this.dropDownEl,"mouseup",this.hItemMouseUp);
Clazz.addEvent(this.handle,"mouseout",this.hItemMouseUp);
Clazz.addEvent(arrow,"mouseout",this.hItemMouseUp);
Clazz.addEvent(this.dropDownEl,"mouseout",this.hItemMouseUp);
this.hArrowSelection=$_Q((($_D("$wt.widgets.ToolItem$4")?0:org.eclipse.swt.widgets.ToolItem.$ToolItem$4$()),$_N($wt.widgets.ToolItem$4,this,null)));
Clazz.addEvent(arrow,"click",this.hArrowSelection);
Clazz.addEvent(this.dropDownEl,"click",this.hArrowSelection);
}else{
this.hToolMouseDown=$_Q((($_D("$wt.widgets.ToolItem$5")?0:org.eclipse.swt.widgets.ToolItem.$ToolItem$5$()),$_N($wt.widgets.ToolItem$5,this,null)));
Clazz.addEvent(this.handle,"mousedown",this.hToolMouseDown);
this.hToolMouseUp=$_Q((($_D("$wt.widgets.ToolItem$6")?0:org.eclipse.swt.widgets.ToolItem.$ToolItem$6$()),$_N($wt.widgets.ToolItem$6,this,null)));
Clazz.addEvent(this.handle,"mouseup",this.hToolMouseUp);
Clazz.addEvent(this.handle,"mouseout",this.hToolMouseUp);
}}});
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
return $wt.widgets.Widget.checkBits(style,8,32,16,2,4,0);
},"~N");
$_M(c$,"click",
function(dropDown){
},"~B");
$_M(c$,"createDisabledImage",
function(image,color){
return new $wt.graphics.Image(this.display,image,1);
},"$wt.graphics.Image,$wt.graphics.Color");
$_M(c$,"getBounds",
function(){
var pt=this.getLocation();
var x=pt.x;
var y=pt.y;
var p=this.parent;
var w=0;
var h=0;
if(p.containsImage&&p.imgMaxHeight==0&&p.imgMaxWidth==0){
p.calculateImagesMaxSize();
}if(p.containsText&&p.txtMaxHeight==0&&p.txtMaxWidth==0){
p.calculateTextsMaxSize();
}var hasText=this.text!=null&&this.text.length!=0;
var hasImage=this.image!=null;
var border=3;
if((p.style&8388608)!=0){
border=2;
}if(p.containsImage){
if(p.containsText){
if((p.style&131072)!=0){
h=Math.max(p.imgMaxHeight,p.txtMaxHeight)+5+border;
if(hasImage&&hasText){
w=p.imgMaxWidth+this.cachedTextWidth+8+border;
}else if(!hasImage&&hasText){
w=this.cachedTextWidth+8+border;
}else if(hasImage&&!hasText){
w=p.imgMaxWidth+4+border;
}else{
if((this.style&2)!=0){
if((p.style&512)!=0){
w=-1;
}else{
w=8;
}}else{
w=p.imgMaxWidth+p.txtMaxWidth+8+border;
}}}else{
h=p.imgMaxHeight+p.txtMaxHeight+4+border;
if(hasImage&&hasText){
w=Math.max(p.imgMaxWidth,this.cachedTextWidth)+8+border;
}else if(!hasImage&&hasText){
w=this.cachedTextWidth+8+border;
}else if(hasImage&&!hasText){
w=p.imgMaxWidth+4+border;
}else{
if((this.style&2)!=0){
if((p.style&512)!=0){
w=-1;
}else{
w=8;
}}else{
w=Math.max(p.imgMaxWidth,p.txtMaxWidth)+8+border;
}}}}else{
w=p.imgMaxWidth+4+border;
h=p.imgMaxHeight+3+border;
if((p.style&512)!=0){
w+=4;
}if((this.style&2)!=0){
if((p.style&512)!=0){
h=8;
}else{
w=8;
}}}}else{
if(p.containsText){
if(hasText){
w=this.cachedTextWidth+8+border;
h=this.cachedTextHeight+5+border;
}else{
if((this.style&2)!=0){
if((p.style&512)!=0){
w=p.txtMaxWidth+8+border;
w+=p.getBorderWidth()*2;
;if(this.control!=null){
h=21;
}else{
h=8;
}}else{
w=8;
h=p.txtMaxHeight+5+border;
}}else{
w=p.txtMaxWidth+4+border;
h=p.txtMaxHeight+5+border;
if((this.style&4)!=0){
if((p.style&512)!=0){
w+=4;
}}}}}else{
w=21;
h=21;
}}if((this.style&2)!=0&&this.control!=null){
var ww=(this.seperatorWidth!=-1)?-1:w;
if(ww==-1){
var computeSize=this.control.computeSize(ww,h);
w=computeSize.x-1;
}}if((this.style&4)!=0){
w+=8+2+border;
}if((p.style&8388608)!=0){
if((p.style&512)==0||(this.style&2)==0){
h+=1;
}if((this.style&2)==0){
w+=1;
}if((this.style&4)!=0){
w+=1;
}}if((p.style&512)!=0){
if((this.style&4)!=0){
w+=1;
}w-=4;
if(!this.isInnerBounds){
w=this.parent.cachedMaxItemWidth;
if((this.style&2)!=0){
w+=p.getBorderWidth()*2;
}}y+=x;
x=0;
}return new $wt.graphics.Rectangle(x,y,w,h);
});
$_M(c$,"getLocation",
function(){
var p=this.parent;
var x=0;
var y=0;
var pos=O$.calcuateRelativePosition(this.handle,this.parent.handle);
if((this.parent.style&8388608)!=0){
var idx=p.indexOf(this);
pos.x+=idx;
}x=pos.x;
y=pos.y;
if((this.parent.style&8)!=0){
y-=O$.isIE?4:2;
}if((this.parent.style&2048)!=0){
if(O$.isOpera){
x-=2;
y-=2;
}else if(!O$.isIE){
x+=2;
y+=2;
}}if((this.style&2)!=0){
if(this.control==null){
if((this.parent.style&512)!=0){
y-=3;
}else{
x-=3;
}}else{
}}return new $wt.graphics.Point(x,y);
});
$_M(c$,"updateItemBounds",
function(w,h){
var p=this.parent;
var hasText=this.text!=null&&this.text.length!=0;
var hasImage=this.image!=null;
var border=3;
if((p.style&8388608)!=0){
border=2;
}var s=this.handle.style;
s.width=Math.max(0,w-8-border)+"px";
s.height=Math.max(0,h-5-border)+"px";
if((this.style&2)!=0){
if(this.control!=null){
s.width=w+"px";
s.height=h+"px";
this.control.setSize(w,h);
var pt=this.getLocation();
this.control.left=pt.x;
this.control.top=pt.y;
}else{
s.height=(h-6)+"px";
}}else if(!hasText){
s.width=Math.max(0,w-8-border)+"px";
s.height=Math.max(0,h-5-border)+"px";
if(O$.isIE&&(p.style&131072)==0){
if(p.containsImage){
s.fontSize="0";
if(hasImage&&p.containsText){
s.height=Math.max(0,h-5-border-2)+"px";
}else{
s.height=Math.max(0,h-5-border-1)+"px";
}}else{
s.fontSize="0";
s.height=Math.max(0,h-5-border+1)+"px";
}}if(!p.containsText){
s.backgroundPosition="center center";
}else if((this.parent.style&131072)==0){
s.backgroundPosition="center top";
}else{
s.backgroundPosition="left center";
}}if(O$.isIE&&this.dropDownEl!=null){
this.dropDownEl.style.height=(h-border+1)+"px";
if(hasImage&&(p.style&131072)==0){
this.dropDownEl.style.height=Math.max(0,h-2-border)+"px";
}}},"~N,~N");
$_M(c$,"getControl",
function(){
return this.control;
});
$_M(c$,"getDisabledImage",
function(){
return this.disabledImage;
});
$_M(c$,"getEnabled",
function(){
if((this.style&2)!=0){
return(this.state&8)==0;
}return!O$.existedCSSClass(this.handle,"tool-item-disabled");
});
$_M(c$,"getHotImage",
function(){
return this.hotImage;
});
$_M(c$,"getParent",
function(){
return this.parent;
});
$_M(c$,"getSelection",
function(){
if((this.style&(48))==0)return false;
return O$.existedCSSClass(this.handle,"tool-item-selected");
});
$_M(c$,"getToolTipText",
function(){
return this.toolTipText;
});
$_M(c$,"getWidth",
function(){
return 24;
});
$_M(c$,"isEnabled",
function(){
return this.getEnabled()&&this.parent.isEnabled();
});
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.ToolItem,"releaseChild",[]);
this.parent.destroyItem(this);
});
$_M(c$,"releaseHandle",
function(){
if(this.dropDownEl!=null){
var arrow=this.dropDownEl.childNodes[0];
if(this.hItemMouseDown!=null){
Clazz.removeEvent(this.dropDownEl,"mousedown",this.hItemMouseDown);
Clazz.removeEvent(arrow,"mousedown",this.hItemMouseDown);
}if(this.hItemMouseUp!=null){
Clazz.removeEvent(this.dropDownEl,"mouseup",this.hItemMouseUp);
Clazz.removeEvent(this.dropDownEl,"mouseout",this.hItemMouseUp);
Clazz.removeEvent(arrow,"mouseup",this.hItemMouseUp);
Clazz.removeEvent(arrow,"mouseout",this.hItemMouseUp);
}if(this.hArrowSelection!=null){
Clazz.removeEvent(this.dropDownEl,"click",this.hArrowSelection);
Clazz.removeEvent(arrow,"click",this.hArrowSelection);
this.hArrowSelection=null;
}O$.destroyHandle(this.dropDownEl);
this.dropDownEl=null;
}if(this.handle!=null){
if(this.hItemSelection!=null){
Clazz.removeEvent(this.handle,"click",this.hItemSelection);
Clazz.removeEvent(this.handle,"dblclick",this.hItemSelection);
this.hItemSelection=null;
}if(this.hItemMouseDown!=null){
Clazz.removeEvent(this.handle,"mousedown",this.hItemMouseDown);
}if(this.hItemMouseUp!=null){
Clazz.removeEvent(this.handle,"mouseup",this.hItemMouseUp);
Clazz.removeEvent(this.handle,"mouseout",this.hItemMouseUp);
}if(this.hToolMouseDown!=null){
Clazz.removeEvent(this.handle,"mousedown",this.hToolMouseDown);
this.hToolMouseDown=null;
}if(this.hToolMouseUp!=null){
Clazz.removeEvent(this.handle,"mouseup",this.hToolMouseUp);
Clazz.removeEvent(this.handle,"mouseout",this.hToolMouseUp);
this.hToolMouseUp=null;
}this.hItemMouseDown=null;
this.hItemMouseUp=null;
}$_U(this,$wt.widgets.ToolItem,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.ToolItem,"releaseWidget",[]);
this.parent=null;
this.control=null;
this.toolTipText=null;
this.disabledImage=this.hotImage=null;
if(this.disabledImage2!=null)this.disabledImage2.dispose();
this.disabledImage2=null;
});
$_M(c$,"releaseImages",
function(){
});
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"resizeControl",
function(){
if(this.control!=null&&!this.control.isDisposed()){
var itemRect=this.getBounds();
this.control.setSize(itemRect.width,itemRect.height);
var rect=this.control.getBounds();
rect.x=itemRect.x+Math.floor((itemRect.width-rect.width)/2);
rect.y=itemRect.y+Math.floor((itemRect.height-rect.height)/2);
this.control.setLocation(rect.x,rect.y);
if((this.style&4)!=0){
this.handle.style.width=(itemRect.width-8-4-1)+"px";
}else{
this.handle.style.width=itemRect.width+"px";
}this.handle.style.height=itemRect.height+"px";
}});
$_M(c$,"selectRadio",
function(){
var index=0;
var items=this.parent.getItems();
while(index<items.length&&items[index]!==this)index++;

var i=index-1;
while(i>=0&&items[i].setRadioSelection(false))--i;

var j=index+1;
while(j<items.length&&items[j].setRadioSelection(false))j++;

this.setSelection(true);
});
$_M(c$,"setControl",
function(control){
if(control!=null){
}if((this.style&2)==0)return;
this.control=control;
if(control!=null){
O$.removeCSSClass(this.handle,"tool-item-seperator");
O$.addCSSClass(this.handle,"tool-item-inner-control");
this.handle.appendChild(control.handle);
}else{
O$.addCSSClass(this.handle,"tool-item-seperator");
O$.removeCSSClass(this.handle,"tool-item-inner-control");
}if((this.parent.style&(576))!=0){
}this.resizeControl();
},"$wt.widgets.Control");
$_M(c$,"setEnabled",
function(enabled){
O$.updateCSSClass(this.handle,"tool-item-disabled",!enabled);
if(this.image!=null)this.updateImages(enabled&&this.parent.getEnabled());
},"~B");
$_M(c$,"setDisabledImage",
function(image){
if((this.style&2)!=0)return;
this.disabledImage=image;
this.updateImages(this.getEnabled()&&this.parent.getEnabled());
},"$wt.graphics.Image");
$_M(c$,"setHotImage",
function(image){
if((this.style&2)!=0)return;
this.hotImage=image;
this.updateImages(this.getEnabled()&&this.parent.getEnabled());
},"$wt.graphics.Image");
$_M(c$,"setImage",
function(image){
if((this.style&2)!=0)return;
$_U(this,$wt.widgets.ToolItem,"setImage",[image]);
this.parent.imgMaxHeight=0;
this.parent.imgMaxWidth=0;
this.parent.containsImage=this.image!=null;
if(!this.parent.containsImage){
for(var i=0;i<this.parent.items.length;i++){
if(this.parent.items[i].image!=null){
this.parent.containsImage=true;
break;
}}
}this.updateImages(this.getEnabled()&&this.parent.getEnabled());
},"$wt.graphics.Image");
$_M(c$,"setRadioSelection",
function(value){
if((this.style&16)==0)return false;
if(this.getSelection()!=value){
this.setSelection(value);
this.postEvent(13);
}return true;
},"~B");
$_M(c$,"setSelection",
function(selected){
if((this.style&(48))==0)return;
O$.updateCSSClass(this.handle,"tool-item-selected",selected);
if((this.style&(48))!=0){
if(!this.getEnabled()||!this.parent.getEnabled()){
this.updateImages(false);
}}},"~B");
$_M(c$,"setText",
function(string){
if((this.style&2)!=0)return;
$_U(this,$wt.widgets.ToolItem,"setText",[string]);
this.cachedTextHeight=0;
this.cachedTextWidth=0;
this.parent.txtMaxHeight=0;
this.parent.txtMaxWidth=0;
this.parent.containsText=string!=null&&string.length!=0;
if(!this.parent.containsText){
for(var i=0;i<this.parent.items.length;i++){
var txt=this.parent.items[i].text;
if(txt!=null&&txt.length!=0){
this.parent.containsImage=true;
break;
}}
}if(this.handle!=null){
var textEl=null;
if(this.handle.childNodes.length==0){
textEl=d$.createElement("DIV");
textEl.className="tool-item-text";
this.handle.appendChild(textEl);
}else{
if(O$.existedCSSClass(this.handle.childNodes[0],"tool-item-text")){
textEl=this.handle.childNodes[0];
}else{
textEl=d$.createElement("DIV");
textEl.className="tool-item-text";
this.handle.insertBefore(textEl,this.handle.childNodes[0]);
}O$.clearChildren(textEl);
}textEl.appendChild(d$.createTextNode(string));
O$.setTextSelection(textEl,false);
}this.parent.layoutItems();
},"~S");
$_M(c$,"setToolTipText",
function(string){
this.toolTipText=string;
},"~S");
$_M(c$,"setWidth",
function(width){
if((this.style&2)==0)return;
if(width<0)return;
this.seperatorWidth=width;
this.parent.layoutItems();
},"~N");
$_M(c$,"updateImages",
function(enabled){
if(this.image!=null){
O$.addCSSClass(this.parent.handle,"tool-item-enable-image");
O$.addCSSClass(this.handle,"tool-item-enable-image");
}else{
var existedImage=false;
for(var i=0;i<this.parent.items.length;i++){
if(this.parent.items[i].image!=null){
existedImage=true;
break;
}}
if(!existedImage){
O$.removeCSSClass(this.parent.handle,"tool-item-enable-image");
}O$.removeCSSClass(this.handle,"tool-item-enable-image");
}if(this.image!=null){
if(this.image.handle==null&&this.image.url!=null&&this.image.url.length!=0){
var handleStyle=this.handle.style;
if(O$.isIENeedPNGFix&&this.image.url.toLowerCase().endsWith(".png")&&handleStyle.filter!=null){
handleStyle.backgroundImage="";
handleStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+this.image.url+"\", sizingMethod=\"image\")";
}else{
if(O$.isIENeedPNGFix&&handleStyle.filter!=null)handleStyle.filter="";
handleStyle.backgroundImage="url(\""+this.image.url+"\")";
}}}else{
var handleStyle=this.handle.style;
if(O$.isIENeedPNGFix&&handleStyle.filter!=null)handleStyle.filter="";
handleStyle.backgroundImage="";
}this.parent.layoutItems();
},"~B");
c$.$ToolItem$1$=function(){
$_H();
c$=$_W($wt.widgets,"ToolItem$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.ToolItem"].isEnabled()){
this.toReturn(false);
return;
}if((this.b$["$wt.widgets.ToolItem"].style&32)!=0){
this.b$["$wt.widgets.ToolItem"].setSelection(!this.b$["$wt.widgets.ToolItem"].getSelection());
}else{
if((this.b$["$wt.widgets.ToolItem"].style&16)!=0){
if((this.b$["$wt.widgets.ToolItem"].parent.getStyle()&4194304)!=0){
this.b$["$wt.widgets.ToolItem"].setSelection(!this.b$["$wt.widgets.ToolItem"].getSelection());
}else{
this.b$["$wt.widgets.ToolItem"].selectRadio();
}}}this.b$["$wt.widgets.ToolItem"].postEvent(13);
});
c$=$_P();
};
c$.$ToolItem$2$=function(){
$_H();
c$=$_W($wt.widgets,"ToolItem$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.ToolItem"].isEnabled()){
this.toReturn(false);
return;
}O$.addCSSClass(this.b$["$wt.widgets.ToolItem"].handle,"tool-item-down");
O$.addCSSClass(this.b$["$wt.widgets.ToolItem"].dropDownEl,"tool-item-drop-down-button-down");
});
c$=$_P();
};
c$.$ToolItem$3$=function(){
$_H();
c$=$_W($wt.widgets,"ToolItem$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.ToolItem"].isEnabled()){
this.toReturn(false);
return;
}O$.removeCSSClass(this.b$["$wt.widgets.ToolItem"].handle,"tool-item-down");
O$.removeCSSClass(this.b$["$wt.widgets.ToolItem"].dropDownEl,"tool-item-drop-down-button-down");
});
c$=$_P();
};
c$.$ToolItem$4$=function(){
$_H();
c$=$_W($wt.widgets,"ToolItem$4",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.ToolItem"].isEnabled()){
this.toReturn(false);
return;
}var event=new $wt.widgets.Event();
event.detail=4;
var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
event.x=e.x;
event.y=e.y;
this.b$["$wt.widgets.ToolItem"].postEvent(13,event);
});
c$=$_P();
};
c$.$ToolItem$5$=function(){
$_H();
c$=$_W($wt.widgets,"ToolItem$5",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.ToolItem"].isEnabled()){
this.toReturn(false);
return;
}O$.addCSSClass(this.b$["$wt.widgets.ToolItem"].handle,"tool-item-down");
});
c$=$_P();
};
c$.$ToolItem$6$=function(){
$_H();
c$=$_W($wt.widgets,"ToolItem$6",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.ToolItem"].isEnabled()){
this.toReturn(false);
return;
}O$.removeCSSClass(this.b$["$wt.widgets.ToolItem"].handle,"tool-item-down");
});
c$=$_P();
};
});
$_L(["$wt.widgets.Composite"],"$wt.widgets.ToolBar",["$wt.graphics.Point","$wt.internal.browser.OS"],function(){
$WTC$$.registerCSS ("$wt.widgets.ToolBar", ".tool-bar-default {\nposition:absolute;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\noverflow:hidden;\n}\n.tool-item-default {\nposition:relative;\n/*border:2px outset white;*/\ntop:2px;\ncursor:default;\nmargin:0;\npadding:1px 0;\nwhite-space:nowrap;\nbackground-position:center 2px;\nbackground-repeat:no-repeat;\n}\n.tool-bar-flat .tool-item-default {\ntop:0 !important;\n}\nDIV.tool-item-default {\nborder-width:1px 2px 2px 1px;\nborder-style:solid;\nborder-color:white #666 #666 white;\npadding:3px 4px 2px 4px;\n}\n.tool-bar-vertical DIV.tool-item-default {\npadding-left:4px;\npadding-right:4px;\n}\nDIV.tool-item-selected {\nborder-color:#666 white white #666 !important;\nborder-width:2px 1px 1px 2px !important;\npadding:2px 4px 3px 4px;\nbackground-color:#eee7e0;\n}\n.tool-bar-flat DIV.tool-item-selected {\nborder:1px inset white !important;\npadding:3px 4px 2px 4px !important;\n}\nDIV.tool-item-down {\nborder-color:#666 white white #666 !important;\nborder-width:2px 1px 1px 2px !important;\npadding:2px 4px 3px 4px;\n}\n.tool-bar-flat DIV.tool-item-down {\nborder:1px inset white !important;\npadding:3px 4px 2px 4px !important;\n}\n.tool-item-text {\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\ntext-align:center;\n}\n.tool-bar-flat .tool-item-default {\nborder:1px solid buttonface;\n}\n.tool-bar-flat .tool-item-default:hover {\nborder:1px outset white;\n}\n.tool-bar-vertical .tool-item-default {\nfloat:left;\nclear:both;\n}\n.tool-bar-horizontal .tool-item-default {\nfloat:left;\n}\n.tool-bar-focus {\nposition:absolute;\nwidth:1px;\nheight:1px;\noverflow:hidden;\nfont-size:0;\nmargin:0;\npadding:0;\nborder:0 none transparent;\nbackground-color:transparent;\n}\n.tool-item-drop-down {\nmargin-right:13px;\n}\n.tool-item-seperator {\nmargin:0;\npadding:0 !important;\nfont-size:0;\noverflow:hidden !important;\nfont-size:0;\n}\n.tool-bar-vertical .tool-item-seperator {\nfont-size:0;\nheight:0;\nwidth:100%;\nborder:0 solid buttonface !important;\nborder-top-width:2px;\nmargin:3px 0;\n}\n.tool-bar-horizontal .tool-item-seperator {\nfont-size:0;\nwidth:0;\nheight:100%;\nborder:0 solid buttonface;\nborder-left-width:2px;\nmargin:0 3px;\n}\n.tool-bar-horizontal .tool-item-seperator:hover {\nborder:0 solid buttonface !important;\nborder-left-width:2px !important;\n}\n.tool-bar-flat .tool-item-seperator {\nborder-style:groove;\nborder-color:white;\n}\n.tool-bar-flat .tool-item-seperator:hover {\nborder-style:groove !important;\nborder-color:white !important;\n}\n.tool-bar-shadow {\ndisplay:none;\nposition:relative;\nmargin:0;\npadding:0;\nfont-size:0;\nheight:0;\nwidth:100%;\nborder-top:2px groove white;\n}\n.tool-bar-shadow-out .tool-bar-shadow {\ndisplay:block;\n}\n.tool-item-enable-image .tool-item-text {\nmargin-top:15px;\n}\n.tool-bar-right .tool-item-enable-image .tool-item-text {\nmargin-top:0;\nmargin-left:16px;\ntext-align:left;\n}\n.tool-bar-right .tool-item-default {\nbackground-position:2px center;\n}\n.tool-item-drop-down-button {\nposition:absolute;\ntop:-1px;\nright:-14px;\nmargin:0;\npadding:0;\nwidth:10px;\nheight:100%;\n}\n.tool-bar-flat .tool-item-drop-down-button {\nborder:1px solid buttonface;\ntop:-1px !important;\n}\n.tool-bar-flat .tool-item-drop-down-button:hover {\nborder:1px outset white;\n}\nDIV.tool-item-drop-down-button {\nborder-width:1px 2px 2px 1px;\nborder-style:solid;\nborder-color:white #666 #666 white;\n}\nDIV.tool-item-drop-down-button-down {\ntop:-2px;\nborder-color:#666 white white #666 !important;\nborder-width:2px 1px 1px 2px !important;\n}\n.tool-bar-flat DIV.tool-item-drop-down-button-down {\ntop:-1px;\nborder:1px inset white !important;\n}\n.tool-bar-horizontal .tool-item-drop-down-button {\nfloat:left;\n}\n.tool-item-button-arrow-down {\nmargin:auto;\nheight:0;\nwidth:0;\nfont-size:0;\nline-height:0;\nborder-style:solid solid none solid;\nborder-color:buttonface;\nborder-top-color:black;\nborder-bottom-width:0;\n}\n.tool-item-disabled .tool-item-button-arrow-down {\nborder-top-color:gray;\n}\n.tool-item-button-arrow-down {\nposition:relative;\ntop:50%;\nmargin-top:-2px;\n}\n* html .tool-item-button-arrow-down {\n/*margin-top:-2px;*/\nborder-width:3px;\n}\n.tool-item-disabled {\n/*border-color:gray;*/\n}\n.tool-item-disabled .tool-item-text {\ncolor:gray;\n}\n.tool-item-disabled .tool-item-drop-down-button {\n/*border-color:gray;*/\n}\n.tool-item-disabled .tool-item-button-arrow-down {\nborder-top-color:gray;\n}\n.tool-bar-disabled .tool-item-default {\n/*border-color:gray;*/\n}\n.tool-bar-disabled .tool-item-text {\ncolor:gray;\n}\n.tool-bar-disabled .tool-item-drop-down-button {\n/*border-color:gray;*/\n}\n.tool-bar-disabled .tool-item-button-arrow-down {\nborder-top-color:gray;\n}\n.tool-bar-disabled .tool-item-default:hover {\nborder-style:solid;\n}\n.tool-bar-disabled .tool-item-drop-down-button:hover {\nborder-style:solid;\n}\n.tool-item-inner-control {\nmargin:0 !important;\npadding:0 !important;\nborder-style:none !important;\nborder-width:0 !important;\n}\ntool-bar-default .tool-item-inner-control:hover {\nmargin:0 !important;\npadding:0 !important;\nborder-style:none !important;\nborder-width:0 !important;\n}\n.tool-bar-vertical .tool-item-seperator:hover {\nborder:0 solid buttonface !important;\nborder-top-width:0px !important;\n}\n.swt-widgets-toolbar {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.lastFocusId=0;
this.items=null;
this.ignoreResize=false;
this.ignoreMouse=false;
this.imageList=null;
this.disabledImageList=null;
this.hotImageList=null;
this.btnFocus=null;
this.containsImage=false;
this.containsText=false;
this.imgMaxHeight=0;
this.imgMaxWidth=0;
this.txtMaxHeight=0;
this.txtMaxWidth=0;
this.cachedMaxItemWidth=0;
$_Z(this,arguments);
},$wt.widgets,"ToolBar",$wt.widgets.Composite);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.ToolBar,[parent,$wt.widgets.ToolBar.checkStyle(style)]);
if((style&512)!=0){
if(O$.existedCSSClass(this.handle,"tool-bar-horizontal")){
O$.removeCSSClass(this.handle,"tool-bar-horizontal");
}this.style|=512;
O$.addCSSClass(this.handle,"tool-bar-vertical");
}else{
this.style|=256;
}},"$wt.widgets.Composite,~N");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
if((style&8388608)==0)style|=524288;
if((style&512)!=0)style&=-65;
return style&-769;
},"~N");
$_M(c$,"calculateImagesMaxSize",
function(){
if(!this.containsImage){
return new $wt.graphics.Point(0,0);
}var w=0;
var h=0;
for(var i=0;i<this.items.length;i++){
if(this.items[i]!=null&&this.items[i].image!=null){
var imageSize=O$.getImageSize(this.items[i].image);
w=Math.max(w,imageSize.x);
h=Math.max(h,imageSize.y);
}}
this.imgMaxHeight=h;
this.imgMaxWidth=w;
return new $wt.graphics.Point(w,h);
});
$_M(c$,"calculateTextsMaxSize",
function(){
if(!this.containsText){
return new $wt.graphics.Point(0,0);
}var w=0;
var h=0;
for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null&&item.text!=null&&item.text.length!=0){
var textSize=O$.getStringStyledSize(item.text,"tool-item-text",null);
w=Math.max(w,textSize.x);
item.cachedTextWidth=textSize.x;
h=Math.max(h,textSize.y);
item.cachedTextHeight=textSize.y;
}}
this.txtMaxHeight=h;
this.txtMaxWidth=w;
return new $wt.graphics.Point(w,h);
});
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var width=0;
var height=0;
this.calculateImagesMaxSize();
this.calculateTextsMaxSize();
if((this.style&512)!=0){
var count=this.items.length;
this.cachedMaxItemWidth=0;
for(var i=0;i<count;i++){
var item=this.items[i];
item.isInnerBounds=true;
var rect=item.getBounds();
item.isInnerBounds=false;
if((item.style&2)!=0){
this.cachedMaxItemWidth=Math.max(this.cachedMaxItemWidth,rect.width-this.getBorderWidth()*2);
}else{
this.cachedMaxItemWidth=Math.max(this.cachedMaxItemWidth,rect.width);
}height+=rect.height;
if((item.style&2)!=0){
width=Math.max(width,24);
}else{
width=Math.max(width,rect.width);
}}
if((this.style&8388608)==0)height+=2;
}else{
var count=this.items.length;
for(var i=0;i<count;i++){
this.items[i].isInnerBounds=true;
var rect=this.items[i].getBounds();
this.items[i].isInnerBounds=false;
if((this.style&8388608)!=0){
height=Math.max(height,rect.height);
}else{
height=Math.max(height,rect.height+2);
}width+=rect.width;
}
}if(width==0)width=24;
if(height==0)height=22;
if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
var trim=this.computeTrim(0,0,width,height);
width=trim.width;
height=trim.height;
return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_M(c$,"computeTrim",
function(x,y,width,height){
var trim=$_U(this,$wt.widgets.ToolBar,"computeTrim",[x,y,width,height]);
if((this.style&8)!=0)trim.height+=2;
return trim;
},"~N,~N,~N,~N");
$_M(c$,"createHandle",
function(){
$_U(this,$wt.widgets.ToolBar,"createHandle",[]);
this.state&=-3;
this.items=new Array(0);
this.lastFocusId=-1;
var css=new Array(0);
css[0]=" tool-bar-default";
if((this.style&512)!=0){
css[css.length]="tool-bar-vertical";
}else{
css[css.length]="tool-bar-horizontal";
}if((this.style&8388608)!=0){
css[css.length]="tool-bar-flat";
}if((this.style&8)!=0){
css[css.length]="tool-bar-shadow-out";
}if((this.style&64)!=0){
css[css.length]="tool-bar-wrap";
}if((this.style&131072)!=0){
css[css.length]="tool-bar-right";
}var s="";
{
s=css.join(" ");
}this.handle.className+=s;
var shadow=d$.createElement("DIV");
shadow.className="tool-bar-shadow";
this.handle.appendChild(shadow);
this.btnFocus=d$.createElement("BUTTON");
this.btnFocus.className="tool-bar-focus";
this.handle.appendChild(shadow);
});
$_M(c$,"createItem",
function(item,index){
var count=this.items.length;
var id=this.items.length;
this.items[item.id=id]=item;
var cssName="tool-item-default";
var el=null;
if((item.style&2)!=0){
el=d$.createElement("DIV");
this.handle.appendChild(el);
cssName+=" tool-item-seperator";
item.seperatorWidth=-1;
}else if((item.style&4)!=0){
el=d$.createElement("DIV");
this.handle.appendChild(el);
item.dropDownEl=d$.createElement("DIV");
item.dropDownEl.className="tool-item-drop-down-button";
el.appendChild(item.dropDownEl);
var btnArrow=d$.createElement("DIV");
btnArrow.className="tool-item-button-arrow-down";
item.dropDownEl.appendChild(btnArrow);
cssName+=" tool-item-drop-down";
}else{
el=d$.createElement("DIV");
this.handle.appendChild(el);
}el.className=cssName;
item.handle=el;
if((this.style&512)!=0)this.setRowCount(count+1);
this.layoutItems();
},"$wt.widgets.ToolItem,~N");
$_M(c$,"destroyItem",
function(item){
item.releaseResources();
for(var i=0;i<this.items.length;i++){
if(this.items[i]===item){
this.items[i]=null;
}}
this.layoutItems();
},"$wt.widgets.ToolItem");
$_M(c$,"enableWidget",
function(enabled){
$_U(this,$wt.widgets.ToolBar,"enableWidget",[enabled]);
for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null){
if((item.style&(48))!=0){
item.updateImages(enabled&&item.getEnabled());
}}}
O$.updateCSSClass(this.handle,"tool-bar-disabled",!enabled);
},"~B");
$_M(c$,"getDisabledImageList",
function(){
return this.disabledImageList;
});
$_M(c$,"getHotImageList",
function(){
return this.hotImageList;
});
$_M(c$,"getImageList",
function(){
return this.imageList;
});
$_M(c$,"getItem",
function(index){
var count=this.items.length;
return this.items[index];
},"~N");
$_M(c$,"getItem",
function(point){
var items=this.getItems();
for(var i=0;i<items.length;i++){
var rect=items[i].getBounds();
if(rect.contains(point))return items[i];
}
return null;
},"$wt.graphics.Point");
$_M(c$,"getItemCount",
function(){
return this.items.length;
});
$_M(c$,"getItems",
function(){
return this.items;
});
$_M(c$,"getRowCount",
function(){
return 1;
});
$_M(c$,"indexOf",
function(item){
var idx=-1;
for(var i=0;i<this.items.length;i++){
if(this.items[i]!=null){
idx++;
if(this.items[i]===item){
break;
}}}
return idx;
},"$wt.widgets.ToolItem");
$_M(c$,"layoutItems",
function(){
if((this.style&64)!=0){
try{
this.handle.style.whiteSpace="wrap";
}catch(e){
if($_O(e,Exception)){
}else{
throw e;
}
}
}if((this.style&512)!=0){
}for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null)item.resizeControl();
}
});
$_V(c$,"mnemonicHit",
function(ch){
return true;
},"~N");
$_V(c$,"mnemonicMatch",
function(ch){
return false;
},"~N");
$_M(c$,"releaseWidget",
function(){
for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null&&!item.isDisposed()){
item.releaseImages();
item.releaseResources();
}}
this.items=null;
if(this.btnFocus!=null){
O$.destroyHandle(this.btnFocus);
this.btnFocus=null;
}this.imageList=this.hotImageList=this.disabledImageList=null;
$_U(this,$wt.widgets.ToolBar,"releaseWidget",[]);
});
$_M(c$,"removeControl",
function(control){
$_U(this,$wt.widgets.ToolBar,"removeControl",[control]);
for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null&&item.control===control){
item.setControl(null);
}}
},"$wt.widgets.Control");
$_M(c$,"setBounds",
function(x,y,width,height,flags){
if(this.parent.lpwp!=null){
}$_U(this,$wt.widgets.ToolBar,"setBounds",[x,y,width,height,flags]);
},"~N,~N,~N,~N,~N");
$_M(c$,"setDisabledImageList",
function(imageList){
if(this.disabledImageList===imageList)return;
},"$wt.widgets.ImageList");
$_M(c$,"setFont",
function(font){
$_U(this,$wt.widgets.ToolBar,"setFont",[font]);
var index=0;
var mask=60;
while(index<this.items.length){
var item=this.items[index];
if(item!=null&&(item.style&mask)!=0)break;
index++;
}
if(index==this.items.length){
}this.layoutItems();
},"$wt.graphics.Font");
$_M(c$,"setHotImageList",
function(imageList){
if(this.hotImageList===imageList)return;
},"$wt.widgets.ImageList");
$_M(c$,"setImageList",
function(imageList){
if(this.imageList===imageList)return;
},"$wt.widgets.ImageList");
$_M(c$,"setParent",
function(parent){
if(!$_U(this,$wt.widgets.ToolBar,"setParent",[parent]))return false;
return true;
},"$wt.widgets.Composite");
$_M(c$,"setRowCount",
function(count){
},"~N");
$_M(c$,"setTabItemFocus",
function(){
var index=0;
while(index<this.items.length){
var item=this.items[index];
if(item!=null&&(item.style&2)==0){
if(item.getEnabled())break;
}index++;
}
if(index==this.items.length)return false;
return $_U(this,$wt.widgets.ToolBar,"setTabItemFocus",[]);
});
$_M(c$,"SetWindowPos",
function(hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags){
var border=3;
if((this.style&8388608)!=0){
border=2;
}for(var i=0;i<this.items.length;i++){
var item=this.items[i];
var bounds=item.getBounds();
var w=bounds.width;
var h=bounds.height;
if((item.style&4)!=0){
w-=8+2+border;
}if((this.style&8388608)!=0){
h-=1;
if((item.style&2)==0){
w-=1;
}if((item.style&4)!=0){
w-=1;
}}item.updateItemBounds(w,h);
}
if($_O(this.parent,$wt.widgets.CoolBar)){
X=0;
Y=0;
}var set=$_U(this,$wt.widgets.ToolBar,"SetWindowPos",[hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags]);
return set;
},"~O,~O,~N,~N,~N,~N,~N");
$_S(c$,
"$DEFAULT_WIDTH",24,
"$DEFAULT_HEIGHT",22);
});
