﻿/* http://j2s.sf.net/ */$_L(["$wt.widgets.Item"],"$wt.widgets.TreeItem",["$wt.graphics.Color","$.Rectangle","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Event"],function(){
c$=$_C(function(){
this.parent=null;
this.strings=null;
this.images=null;
this.parentItem=null;
this.items=null;
this.index=0;
this.depth=0;
this.expandStatus=false;
this.selected=false;
this.checkElement=null;
this.hAnchorToggle=null;
this.hCheckSelection=null;
this.hTextSelection=null;
this.hTextDefaultSelection=null;
this.hNoTextSelection=null;
this.anchorElement=null;
$_Z(this,arguments);
},$wt.widgets,"TreeItem",$wt.widgets.Item);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.TreeItem,[parent,style]);
this.parent=parent;
this.items=new Array(0);
parent.createItem(this,null,-1);
this.configureItem();
},"$wt.widgets.Tree,~N");
$_K(c$,
function(parent,style,index){
$_R(this,$wt.widgets.TreeItem,[parent,style]);
this.parent=parent;
this.items=new Array(0);
parent.createItem(this,null,index);
this.configureItem();
},"$wt.widgets.Tree,~N,~N");
$_K(c$,
function(parentItem,style){
$_R(this,$wt.widgets.TreeItem,[$wt.widgets.TreeItem.checkNull(parentItem).parent,style]);
this.parent=parentItem.parent;
this.parentItem=parentItem;
this.items=new Array(0);
this.parent.createItem(this,parentItem,-1);
this.configureItem();
},"$wt.widgets.TreeItem,~N");
$_K(c$,
function(parentItem,style,index){
$_R(this,$wt.widgets.TreeItem,[$wt.widgets.TreeItem.checkNull(parentItem).parent,style]);
this.parent=parentItem.parent;
this.items=new Array(0);
this.parentItem=parentItem;
this.parent.createItem(this,parentItem,index);
this.configureItem();
},"$wt.widgets.TreeItem,~N,~N");
$_M(c$,"configureItem",
function(){
var innerChildren=this.handle.childNodes[0].childNodes[0].childNodes[0].childNodes;
for(var i=0;i<innerChildren.length-1;i++){
var hAnchor=innerChildren[i];
var css=hAnchor.childNodes[1].className;
if(css.indexOf("plus")!=-1||css.indexOf("minus")!=-1){
this.anchorElement=hAnchor;
this.hAnchorToggle=$_Q((($_D("$wt.widgets.TreeItem$1")?0:org.eclipse.swt.widgets.TreeItem.$TreeItem$1$()),$_N($wt.widgets.TreeItem$1,this,null)));
Clazz.addEvent(hAnchor,"click",this.hAnchorToggle);
break;
}}
if((this.parent.style&32)!=0){
this.hCheckSelection=$_Q((($_D("$wt.widgets.TreeItem$2")?0:org.eclipse.swt.widgets.TreeItem.$TreeItem$2$()),$_N($wt.widgets.TreeItem$2,this,null)));
Clazz.addEvent(this.checkElement,"click",this.hCheckSelection);
}var text=innerChildren[innerChildren.length-1];
this.hTextSelection=$_Q((($_D("$wt.widgets.TreeItem$3")?0:org.eclipse.swt.widgets.TreeItem.$TreeItem$3$()),$_N($wt.widgets.TreeItem$3,this,null)));
Clazz.addEvent(text,"click",this.hTextSelection);
this.hTextDefaultSelection=$_Q((($_D("$wt.widgets.TreeItem$4")?0:org.eclipse.swt.widgets.TreeItem.$TreeItem$4$()),$_N($wt.widgets.TreeItem$4,this,null)));
Clazz.addEvent(text,"dblclick",this.hTextDefaultSelection);
this.hNoTextSelection=O$.setTextSelection(text,false);
});
c$.checkNull=$_M(c$,"checkNull",
function(item){
return item;
},"$wt.widgets.TreeItem");
$_M(c$,"getBackground",
function(){
return new $wt.graphics.Color(this.display,this.handle.style.backgroundColor);
});
$_M(c$,"getBackground",
function(index){
var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return this.getBackground();
return new $wt.graphics.Color(this.display,this.handle.style.backgroundColor);
},"~N");
$_M(c$,"getBounds",
function(){
return new $wt.graphics.Rectangle(0,0,0,0);
});
$_M(c$,"getBounds",
function(index){
return new $wt.graphics.Rectangle(0,0,0,0);
},"~N");
$_M(c$,"getChecked",
function(){
if((this.parent.style&32)==0)return false;
if(this.checkElement!=null){
return this.checkElement.checked;
}return false;
});
$_M(c$,"getExpanded",
function(){
return this.expandStatus;
});
$_M(c$,"getFont",
function(){
return this.display.getSystemFont();
});
$_M(c$,"getFont",
function(index){
var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return this.getFont();
return this.display.getSystemFont();
},"~N");
$_M(c$,"getForeground",
function(){
return new $wt.graphics.Color(this.display,this.parent.handle.style.color);
});
$_M(c$,"getForeground",
function(index){
var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return this.getForeground();
return new $wt.graphics.Color(this.display,this.handle.style.color);
},"~N");
$_M(c$,"getGrayed",
function(){
if((this.parent.style&32)==0)return false;
if(this.checkElement!=null){
return this.checkElement.checked;
}return true;
});
$_M(c$,"getItem",
function(index){
return this.items[index];
},"~N");
$_M(c$,"getItemCount",
function(){
return this.items.length;
});
$_M(c$,"getItems",
function(){
return this.items;
});
$_M(c$,"getImage",
function(index){
if(index==0)return this.getImage();
if(this.images!=null){
if(0<=index&&index<this.images.length)return this.images[index];
}return null;
},"~N");
$_M(c$,"getImageBounds",
function(index){
return new $wt.graphics.Rectangle(0,0,0,0);
},"~N");
$_M(c$,"getParent",
function(){
return this.parent;
});
$_M(c$,"getParentItem",
function(){
return this.parentItem;
});
$_M(c$,"getText",
function(index){
if(index==0)return this.getText();
if(this.strings!=null){
if(0<=index&&index<this.strings.length){
var string=this.strings[index];
return string!=null?string:"";
}}return"";
},"~N");
$_M(c$,"indexOf",
function(item){
return this.parent.indexOf(this.index,item);
},"$wt.widgets.TreeItem");
$_M(c$,"redraw",
function(){
if(this.parent.drawCount>0)return;
});
$_M(c$,"redraw",
function(column,drawText,drawImage){
if(this.parent.drawCount>0)return;
},"~N,~B,~B");
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.TreeItem,"releaseChild",[]);
var children=this.getItems();
for(var i=0;i<children.length;i++){
children[i].dispose();
}
this.parent.destroyItem(this);
if(this.parentItem!=null){
this.parentItem.destroyItem(this);
}});
$_M(c$,"destroyItem",
($fz=function(item){
var length=this.items.length;
var index=-1;
for(var i=0;i<length;i++){
if(this.items[i].equals(item)){
index=i;
}}
if(index>-1){
var newItems=new Array(0);
System.arraycopy(this.items,0,newItems,0,index);
System.arraycopy(this.items,index+1,newItems,index,this.items.length-index-1);
this.items=newItems;
}},$fz.isPrivate=true,$fz),"$wt.widgets.TreeItem");
$_M(c$,"releaseHandle",
function(){
if(this.text!=null){
if(this.hNoTextSelection!=null){
Clazz.removeEvent(this.text,"selectstart",this.hNoTextSelection);
this.hNoTextSelection=null;
}if(this.hTextSelection!=null){
Clazz.removeEvent(this.text,"click",this.hTextSelection);
this.hTextSelection=null;
}if(this.hTextDefaultSelection!=null){
Clazz.removeEvent(this.text,"dblclick",this.hTextDefaultSelection);
this.hTextDefaultSelection=null;
}O$.destroyHandle(this.text);
this.text=null;
}if(this.hCheckSelection!=null){
Clazz.removeEvent(this.checkElement,"click",this.hCheckSelection);
this.hCheckSelection=null;
}if(this.anchorElement!=null&&this.hAnchorToggle!=null){
Clazz.removeEvent(this.anchorElement,"click",this.hAnchorToggle);
this.anchorElement=null;
this.hAnchorToggle=null;
}if(this.checkElement!=null){
O$.destroyHandle(this.checkElement);
this.checkElement=null;
}if(this.handle!=null){
O$.deepClearChildren(this.handle);
}$_U(this,$wt.widgets.TreeItem,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.TreeItem,"releaseWidget",[]);
this.parent=null;
this.parentItem=null;
this.items=null;
});
$_M(c$,"removeAll",
function(){
var items=this.getItems();
var length=items.length;
for(var i=0;i<length;i++){
items[i].dispose();
}
this.items=new Array(0);
O$.replaceCSSClassInDepth(this.handle,"tree-anchor-plus","tree-anchor-line");
O$.replaceCSSClassInDepth(this.handle,"tree-anchor-minus","tree-anchor-line");
});
$_M(c$,"setBackground",
function(color){
if(color!=null){
this.handle.style.backgroundColor=color.getCSSHandle();
}},"$wt.graphics.Color");
$_M(c$,"setBackground",
function(index,color){
var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return;
if(color!=null){
this.handle.childNodes[index].style.backgroundColor=color.getCSSHandle();
}this.redraw(index,true,true);
},"~N,$wt.graphics.Color");
$_M(c$,"setChecked",
function(checked){
if((this.parent.style&32)==0)return;
if(this.checkElement!=null){
this.checkElement.checked=checked;
}},"~B");
$_M(c$,"setExpanded",
function(expanded){
this.expandStatus=expanded;
var items=this.parent.getDescendantItems(this.index);
for(var i=0;i<items.length;i++){
if(items[i]==null)continue;if(items[i].parentItem===this){
items[i].expandStatus=this.expandStatus;
}if(items[i].expandStatus){
items[i].handle.style.display=expanded?"":"none";
}else{
items[i].handle.style.display="none";
}}
var innerChildren=this.handle.childNodes[0].childNodes[0].childNodes[0].childNodes;
var hAnchor=innerChildren[innerChildren.length-2].childNodes[1];
if(expanded){
hAnchor.className="tree-anchor-h tree-anchor-minus";
}else{
hAnchor.className="tree-anchor-h tree-anchor-plus";
}},"~B");
$_M(c$,"setFont",
function(font){
},"$wt.graphics.Font");
$_M(c$,"setFont",
function(index,font){
var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return;
},"~N,$wt.graphics.Font");
$_M(c$,"setForeground",
function(color){
if(color!=null){
this.handle.style.color=color.getCSSHandle();
}},"$wt.graphics.Color");
$_M(c$,"setForeground",
function(index,color){
var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return;
if(color!=null){
this.handle.childNodes[index].style.color=color.getCSSHandle();
}},"~N,$wt.graphics.Color");
$_M(c$,"setGrayed",
function(grayed){
if((this.parent.style&32)==0)return;
if(this.checkElement!=null){
this.checkElement.checked=grayed;
}},"~B");
$_M(c$,"setImage",
function(images){
for(var i=0;i<images.length;i++){
this.setImage(i,images[i]);
}
},"~A");
$_M(c$,"setImage",
function(index,image){
if(index==0){
if(image!=null&&image.type==1){
if(image.equals(this.image))return;
}$_U(this,$wt.widgets.TreeItem,"setImage",[image]);
}var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return;
if(this.images==null&&index!=0)this.images=new Array(count);
if(this.images!=null){
if(image!=null&&image.type==1){
if(image.equals(this.images[index]))return;
}this.images[index]=image;
}if(index==0){
if(this.image.handle==null&&this.image.url!=null&&this.image.url.length!=0){
var innerChildren=this.handle.childNodes[index].childNodes;
if(index==0){
innerChildren=innerChildren[0].childNodes[0].childNodes;
}var text=innerChildren[innerChildren.length-1];
var els=text.childNodes;
var handleStyle=this.handle.style;
if(els.length==1||!O$.existedCSSClass(els[els.length-2],"tree-image-icon")){
var div=d$.createElement("DIV");
div.className="tree-image-icon image-p-4 image-n-5";
text.insertBefore(div,els[els.length-1]);
handleStyle=div.style;
}else{
handleStyle=els[els.length-2].style;
}if(O$.isIENeedPNGFix&&image.url.toLowerCase().endsWith(".png")&&handleStyle.filter!=null){
handleStyle.backgroundImage="";
handleStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+this.image.url+"\", sizingMethod=\"image\")";
}else{
if(O$.isIENeedPNGFix&&handleStyle.filter!=null)handleStyle.filter="";
handleStyle.backgroundImage="url(\""+this.image.url+"\")";
}}O$.addCSSClass(this.handle.parentNode,"tree-image");
}},"~N,$wt.graphics.Image");
$_M(c$,"setImage",
function(image){
this.setImage(0,image);
},"$wt.graphics.Image");
$_M(c$,"setText",
function(strings){
for(var i=0;i<strings.length;i++){
var string=strings[i];
if(string!=null)this.setText(i,string);
}
},"~A");
$_M(c$,"setText",
function(index,string){
if(index==0){
if(string.equals(this.text))return;
$_U(this,$wt.widgets.TreeItem,"setText",[string]);
}var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return;
if(this.strings==null&&index!=0)this.strings=new Array(count);
if(this.strings!=null){
if(string.equals(this.strings[index]))return;
this.strings[index]=string;
}if(index==0){
}var innerChildren=this.handle.childNodes[index].childNodes;
if(index==0){
innerChildren=innerChildren[0].childNodes[0].childNodes;
}var text0=innerChildren[innerChildren.length-1];
if(index==0){
text0=text0.childNodes[text0.childNodes.length-1];
}O$.clearChildren(text0);
text0.appendChild(d$.createTextNode(string));
},"~N,~S");
$_M(c$,"setText",
function(string){
this.setText(0,string);
},"~S");
$_M(c$,"showSelection",
function(selected){
this.selected=selected;
O$.updateCSSClass(this.handle,"tree-item-selected",selected);
if(O$.isIE){
var tmpDiv=d$.createElement("DIV");
tmpDiv.style.width="1px";
tmpDiv.style.height="1px";
var tempElem=this.handle.childNodes[0].childNodes[0].childNodes[0];
var innerEl=tempElem.childNodes[tempElem.childNodes.length-1].childNodes[0];
innerEl.style.hasLayout=true;
innerEl.appendChild(tmpDiv);
O$.destroyHandle(tmpDiv);
innerEl.style.display="inline-block";
if((this.style&67108864)!=0){
innerEl.style.left="0px";
tempElem.childNodes[tempElem.childNodes.length-1].style.left="0px";
}}},"~B");
$_M(c$,"toggleExpandStatus",
function(){
var innerChildren=this.handle.childNodes[0].childNodes[0].childNodes[0].childNodes;
var clazzName=innerChildren[innerChildren.length-2].childNodes[1].className;
var type=0;
if(clazzName==null){
type=0;
}else if(clazzName.indexOf("minus")!=-1){
type=-1;
}else if(clazzName.indexOf("plus")!=-1){
type=1;
}if(type==0){
return;
}var toExpand=type>=0;
this.setExpanded(toExpand);
var e=new $wt.widgets.Event();
e.type=toExpand?17:18;
e.display=this.display;
e.item=this;
e.widget=this;
this.parent.sendEvent(e);
});
$_M(c$,"addItem",
function(item,index){
if(index==-1||index==this.items.length){
this.items[this.items.length]=item;
}else{
var newItem=new Array(0);
System.arraycopy(this.items,0,newItem,0,index);
System.arraycopy(this.items,index,newItem,index+1,this.items.length-index);
newItem[index]=item;
this.items=newItem;
}},"$wt.widgets.TreeItem,~N");
$_M(c$,"isSelected",
function(){
return this.selected;
});
$_M(c$,"enableWidget",
function(enabled){
this.handle.disabled=!enabled;
if(this.checkElement!=null){
this.checkElement.disabled=!enabled;
}},"~B");
c$.$TreeItem$1$=function(){
$_H();
c$=$_W($wt.widgets,"TreeItem$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.TreeItem"].toggleExpandStatus();
});
c$=$_P();
};
c$.$TreeItem$2$=function(){
$_H();
c$=$_W($wt.widgets,"TreeItem$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=new $wt.widgets.Event();
e.display=this.b$["$wt.widgets.TreeItem"].display;
e.type=13;
e.detail=32;
e.item=this.b$["$wt.widgets.TreeItem"];
e.widget=this.b$["$wt.widgets.TreeItem"];
this.b$["$wt.widgets.TreeItem"].parent.sendEvent(e);
});
c$=$_P();
};
c$.$TreeItem$3$=function(){
$_H();
c$=$_W($wt.widgets,"TreeItem$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var evt=this.getEvent();
this.b$["$wt.widgets.TreeItem"].parent.toggleSelection(this.b$["$wt.widgets.TreeItem"],evt.ctrlKey,evt.shiftKey);
var e=new $wt.widgets.Event();
e.display=this.b$["$wt.widgets.TreeItem"].display;
e.type=13;
e.detail=0;
e.item=this.b$["$wt.widgets.TreeItem"];
e.widget=this.b$["$wt.widgets.TreeItem"];
this.b$["$wt.widgets.TreeItem"].parent.sendEvent(e);
this.toReturn(false);
});
c$=$_P();
};
c$.$TreeItem$4$=function(){
$_H();
c$=$_W($wt.widgets,"TreeItem$4",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.TreeItem"].toggleExpandStatus();
var e=new $wt.widgets.Event();
e.display=this.b$["$wt.widgets.TreeItem"].display;
e.type=14;
e.detail=0;
e.item=this.b$["$wt.widgets.TreeItem"];
e.widget=this.b$["$wt.widgets.TreeItem"];
this.b$["$wt.widgets.TreeItem"].parent.sendEvent(e);
e=new $wt.widgets.Event();
e.display=this.b$["$wt.widgets.TreeItem"].display;
e.type=8;
e.detail=0;
e.item=this.b$["$wt.widgets.TreeItem"];
e.widget=this.b$["$wt.widgets.TreeItem"];
this.b$["$wt.widgets.TreeItem"].parent.sendEvent(e);
this.toReturn(false);
});
c$=$_P();
};
});
$_L(["$wt.widgets.Item"],"$wt.widgets.TreeColumn",["$wt.internal.browser.OS","$wt.widgets.TypedListener"],function(){
c$=$_C(function(){
this.parent=null;
this.resizable=false;
this.colWidth=0;
this.cachedWidth=0;
$_Z(this,arguments);
},$wt.widgets,"TreeColumn",$wt.widgets.Item);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.TreeColumn,[parent,$wt.widgets.TreeColumn.checkStyle(style)]);
this.resizable=true;
this.parent=parent;
parent.createItem(this,parent.getColumnCount());
},"$wt.widgets.Tree,~N");
$_K(c$,
function(parent,style,index){
$_R(this,$wt.widgets.TreeColumn,[parent,$wt.widgets.TreeColumn.checkStyle(style)]);
this.resizable=true;
this.parent=parent;
parent.createItem(this,index);
},"$wt.widgets.Tree,~N,~N");
$_M(c$,"addControlListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(11,typedListener);
this.addListener(10,typedListener);
},"$wt.events.ControlListener");
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
return $wt.widgets.Widget.checkBits(style,16384,16777216,131072,0,0,0);
},"~N");
$_M(c$,"getAlignment",
function(){
if((this.style&16384)!=0)return 16384;
if((this.style&16777216)!=0)return 16777216;
if((this.style&131072)!=0)return 131072;
return 16384;
});
$_V(c$,"getNameText",
function(){
return this.getText();
});
$_M(c$,"getParent",
function(){
return this.parent;
});
$_M(c$,"getResizable",
function(){
return this.resizable;
});
$_M(c$,"getWidth",
function(){
var index=this.parent.indexOf(this);
if(index==-1)return 0;
var items=this.parent.items;
var maxWidth=0;
for(var i=0;i<items.length;i++){
var width=0;
if(index==0){
width=(19)*items[i].depth;
}var innerChildren=items[i].handle.childNodes[index].childNodes;
if(index==0){
innerChildren=innerChildren[0].childNodes[0].childNodes;
}if(items[i].text==null||items[i].text.length==0){
width+=(index==0?5:0);
}else{
var text0=innerChildren[innerChildren.length-1];
width+=O$.getContainerWidth(text0);
}maxWidth=Math.max(maxWidth,width);
}
if(!this.parent.headerVisible){
if(this.colWidth<=0||(index==0&&this.parent.columns.length==1)){
return Math.max(this.colWidth,maxWidth-1);
}else{
return this.colWidth;
}}if(this.handle.style.width!=null&&this.handle.style.width.length!=0){
var styleWidth=Integer.parseInt(this.handle.style.width);
return this.text!=null?Math.max(O$.getStringPlainWidth(this.text),styleWidth):styleWidth;
}return maxWidth;
});
$_M(c$,"pack",
function(){
var index=this.parent.indexOf(this);
if(index==-1)return;
});
$_M(c$,"releaseHandle",
function(){
if(this.handle!=null){
O$.deepClearChildren(this.handle);
}$_U(this,$wt.widgets.TreeColumn,"releaseHandle",[]);
});
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.TreeColumn,"releaseChild",[]);
this.parent.destroyItem(this);
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.TreeColumn,"releaseWidget",[]);
this.parent=null;
});
$_M(c$,"removeControlListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(10,listener);
this.eventTable.unhook(11,listener);
},"$wt.events.ControlListener");
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"setAlignment",
function(alignment){
if((alignment&(16924672))==0)return;
var index=this.parent.indexOf(this);
if(index==-1||index==0)return;
this.style&=-16924673;
this.style|=alignment&(16924672);
},"~N");
$_M(c$,"setImage",
function(image){
var index=this.parent.indexOf(this);
if(index==-1)return;
$_U(this,$wt.widgets.TreeColumn,"setImage",[image]);
},"$wt.graphics.Image");
$_M(c$,"setResizable",
function(resizable){
this.resizable=resizable;
},"~B");
$_M(c$,"setText",
function(string){
var index=this.parent.indexOf(this);
if(index==-1)return;
$_U(this,$wt.widgets.TreeColumn,"setText",[string]);
var text=this.handle.childNodes[0];
O$.clearChildren(text);
if(string.length==0)string="\u00a0";
text.appendChild(d$.createTextNode(string));
},"~S");
$_M(c$,"setWidth",
function(width){
var index=this.parent.indexOf(this);
if(index==-1)return;
this.colWidth=width;
this.cachedWidth=width;
if(this.text!=null){
this.cachedWidth=Math.max(O$.getStringPlainWidth(this.text),width);
}this.handle.style.width=this.cachedWidth+"px";
if(O$.isIE){
for(var i=0;i<this.parent.items.length;i++){
this.parent.items[i].handle.childNodes[0].childNodes[0].style.width=this.cachedWidth+"px";
}
}},"~N");
});
$_L(["$wt.widgets.Composite"],"$wt.widgets.Tree",["$wt.graphics.Point","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Event","$.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.Tree", ".tree-default, .tree-default table, .tree-default tr, .tree-default td, .tree-text {\nfont-family:Tahoma, Arial,sans-serif;\nfont-size:8pt;\nmargin:0;\npadding:0;\nbackground-color:white;\n}\n.tree-default {\npadding-left:1px;\n_padding-left:2px;\n_padding-top:1px;\n}\n.tree-content {\npadding:0;\nmargin:0;\nborder-collapse:collapse;\n}\n.tree-v-scroll {\noverflow:scroll;\noverflow-x:hidden;\n}\n.tree-h-scroll {\noverflow:scroll;\noverflow-y:hidden;\n}\n.tree-default thead td {\noverflow:hidden;\npadding:0 !important;\n}\nthead .tree-head-text {\nbackground-color:buttonface;\nborder-style:solid;\nborder-width:1px 2px 2px 1px;\nborder-color:#666 white white #666;\nborder-color:white #666 #666 white;\ncursor:default;\npadding:1px 2px;\nwhite-space:nowrap;\n}\n.tree-column-last .tree-head-text {\nborder-width:1px 0 2px 1px;\n}\n.tree-default tbody td {\ncursor:default;\nwhite-space:nowrap;\n}\n.tree-grid-line tbody td {\nborder-style:solid;\nborder-color:menu;\nborder-width:1px 1px 0 0;\n}\n.tree-column-last {\nwidth:16px;\npadding-right:2px;\nbackground-color:white\n}\n.tree-grid-line tbody .tree-column-last {\nborder-width:1px 0 0 0;\n}\n.tree-grid-line .tree-row-first td {\n}\n.tree-full-selection tr.tree-item-selected td {\nbackground-color:ActiveCaption;\ncolor:highlighttext;\nmin-height:1px;\n}\n.tree-blur .tree-full-selection tr.tree-item-selected td {\nbackground-color:gray;\n}\n/*\n.tree-full-selection tr.tree-item-selected td.tree-column-first {\ncolor:black;\nbackground-color:white;\n}\n*/\n.tree-full-selection tr.tree-item-selected td.tree-column-last {\ncolor:black;\nbackground-color:white;\n}\n.tree-line {\nposition:relative;\nmargin:0;\npadding:0;\nheight:1.39em;\nline-height:1.39em;\noverflow:hidden;\n}\n.tree-line-wrapper {\nposition:relative;\nwidth:1024px;\nwhite-space:nowrap;\nmargin:0;\npadding:0;\nheight:100%;\nline-height:100%;\noverflow:hidden;\n}\n.tree-check-box {\nmargin:0;\npadding:0;\nposition:absolute;\ndisplay:none;\nleft:-14px !important;\nmin-height:13px;\n_height:1em;\nwidth:13px;\n_width:14px;\n}\n.tree-check .tree-check-box {\ndisplay:block;\n}\n@media all and (min-width:0px){/* opera */\n.tree-check-box {\ntop:50%;\nmargin-top:-8px;\nleft:-16px !important;\n}\n}\n.tree-text {\nmin-height:16px;\nheight:1.39em;\nline-height:1.39em;\nmargin-left:2px;\nleft:-1px;\n_left:-3px;\nwhite-space:nowrap;\nfloat:left;\npadding-bottom:1px;\nposition:relative;\n}\n/*\nposition:relative;\n*/\n.tree-text-rtl {\nfloat:right;\nmargin-left:auto;\nmargin-right:2px;\n}\n/*\nright:0px !important;\n*/\ntree-image-icon {\n_padding-bottom:2px;\n_height:16px;\ndisplay:none;\n}\ntree-image tree-image-icon {\ndisplay:block;\n}\n.tree-image .tree-text {\npadding-left:18px;\n}\n.tree-check .tree-text {\nmargin-left:16px;\n}\n.tree-column-first {\ncolor:black;\nbackground-color:white;\nwhite-space:nowrap;\nheight:1em;\noverflow:hidden;\n}\n.tree-text-inner {\n/*padding:2px 3px 1px 2px;*/\nmin-height:14px;\n_height:14px;\n_width:1px;\noverflow-x:visible;\nwhite-space:nowrap;\npadding:0 3px 2px 2px;\n}\n.tree-grid-line tbody .tree-text-inner {\npadding-top:1px;\npadding-right:2px;\n}\n.tree-column-last .tree-text-inner {\nwidth:1px;\nheight:1px;\n}\n.tree-no-columns .tree-column-last {\nwidth:1px;\noverflow-x:hidden;\npadding-left:0;\npadding-right:0;\nmargin-left:0;\nmargin-right:0;\nborder-left:0 none transparent;\nborder-right:0 none transparent;\n}\n.tree-item-selected .tree-column-first .tree-text-inner {\nbackground:ActiveCaption !important;\ncolor:highlighttext;\nmin-height:1px;\n}\n.tree-blur .tree-item-selected .tree-column-first .tree-text-inner {\nbackground-color:gray;\n}\n.tree-item-selected .tree-column-first .tree-text {\nbackground-color:ActiveCaption !important;\n}\n.tree-default {\noverflow:hidden;\nposition:absolute;\nbackground-color:white;\n}\n.tree-default td {\noverflow:hidden;\n}\n.tree-item-default {\ncursor:default;\nwhite-space:nowrap;\nfont-size:9pt;\nfont-family:Arial,sans-serif;\n}\n.tree-column-resize {\ntop:1px;\nposition:absolute;\ncursor:e-resize;\nwidth:3px;\nfont-size:0;\nz-index:100;\nfloat:right;\n}\n.tree-item-focus {\nbackground-color:#E8F2FE;\n}\n.tree-anchor {\nposition:relative;\nfloat:left;\ntop:0;\nleft:0;\nright:0;\nmargin-left:3px;\nwidth:16px;\nmin-height:16px;\nheight:1.39em;\nline-height:1.39em;\noverflow:hidden;\n}\n* html .tree-anchor {\nmargin-left:1px;\n}\n.tree-anchor-rtl {\nfloat:right;\nleft:auto;\nright:0px;\n}\n.tree-anchor-v {\nposition:absolute;\ntop:0;\nleft:5px;\nwidth:1px;\nheight:100%;\nfont-size:0;\n/*\nborder-left:1px dotted #777;\n}\n* html .tree-anchor-v {\n*/\n/*border-left:0 none transparent;*/\nwidth:16px;\nleft:0;\nright:0;\nbackground-repeat:repeat-y;\nbackground-position:center center;\nbackground-image:url(\'images/tree-packed.gif\');\n}\n.tree-anchor-rtl .tree-anchor-v{\nright:5px;\nleft:auto;\n}\n.tree-anchor-single .tree-anchor-v {\nbackground-image:none;\n}\n.tree-anchor-begin .tree-anchor-v {\nheight:50%;\ntop:50%;\n}\n.tree-anchor-end .tree-anchor-v {\nheight:50%;\n}\n.tree-anchor-h {\nposition:absolute;\nleft:0;\nright:0;\ntop:50%;\nmargin-top:-8px;\nwidth:15px;\nmargin-right:1px;\nfont-size:0;\nheight:16px;\nbackground-repeat:no-repeat;\n}\n.tree-anchor-rtl .tree-anchor-h{\nleft:auto;\nright:0;\n}\n.tree-image .tree-anchor-h {\nwidth:16px;\nmargin-right:0;\n}\n.tree-anchor-minus {\nbackground-position:left top;\nbackground-image:url(\'images/tree-packed.gif\');\n}\n.tree-anchor-plus {\nbackground-position:left center;\nbackground-image:url(\'images/tree-packed.gif\');\n}\n.tree-anchor-line {\nbackground-position:left bottom;\nbackground-image:url(\'images/tree-packed.gif\');\n}\n.tree-grid-line .tree-anchor-v {\nbackground-image:none;\n}\n.tree-grid-line .tree-anchor-minus {\nbackground-position:right top;\n}\n.tree-grid-line .tree-anchor-plus {\nbackground-position:right center;\n}\n.tree-grid-line .tree-anchor-line {\nbackground-position:right bottom;\n}\n/*\n* Common image position from Composite.css\n*/\n.image-p-4, .image-p-5 {\nposition:absolute;\n/*top:50%;\nmargin-top:-0.5em;\n*/\nbottom:50%;\nmargin-bottom:-0.5em;\n}\n.image-p-4 {\nleft:0;\n}\n.image-p-5 {\nleft:50%;\nmargin-left:-0.5em;\n}\n@media all and (-webkit-min-device-pixel-ratio:0){/* safari only */\n.image-p-4, .image-p-5 {\nmargin-bottom:-0.48em;\n}\n}\n*:first-child+html .image-p-4, *:first-child+html .image-p-5 { /* IE7 */\nmargin-bottom:-0.4em;\n}\n* html .image-p-4, * html .image-p-5 { /* IE6 */\nmargin-bottom:-0.4em;\n}\n/* default icon size 16x16 */\n.image-n-4, .image-n-5 {\nwidth:16px;\nheight:16px;\nfont-size:16px;\n_font-size:14px;\noverflow:hidden;\n}\n.swt-widgets-tree {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.items=null;
this.columns=null;
this.imageList=null;
this.dragStarted=false;
this.gestureCompleted=false;
this.insertAfter=false;
this.ignoreSelect=false;
this.ignoreExpand=false;
this.ignoreDeselect=false;
this.ignoreResize=false;
this.lockSelection=false;
this.oldSelected=false;
this.newSelected=false;
this.linesVisible=false;
this.customDraw=false;
this.printClient=false;
this.selections=null;
this.lastSelection=null;
this.directChildrens=null;
this.headerVisible=false;
this.lineVisible=false;
this.focusIndex=-1;
this.focusItem=null;
this.tableHandle=null;
this.theadHandle=null;
this.tbody=null;
this.hTreeKeyDown=null;
$_Z(this,arguments);
},$wt.widgets,"Tree",$wt.widgets.Composite);
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
style|=768;
return $wt.widgets.Widget.checkBits(style,4,2,0,0,0,0);
},"~N");
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
$_M(c$,"addTreeListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(17,typedListener);
this.addListener(18,typedListener);
},"$wt.events.TreeListener");
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var width=0;
var height=0;
if(this.items.length==0&&this.columns.length==0&&!this.headerVisible){
}else if(this.columns.length==0&&!this.headerVisible){
width=23;
height=2;
height+=14*this.items.length+2*(this.items.length-1);
height+=(this.getHeaderVisible()?14:0);
var maxWidth=1;
for(var i=0;i<this.items.length;i++){
var text=this.items[i].getText();
if(text!=null){
maxWidth=Math.max(1+O$.getStringPlainWidth(text),maxWidth);
}}
width+=maxWidth-1;
}else{
width=0;
for(var i=0;i<this.columns.length;i++){
var colWidth=this.columns[i].getWidth();
width+=colWidth;
}
height=2;
height+=14*this.items.length+2*(this.items.length-1);
height+=(this.getHeaderVisible()?17:0);
}if(width==0)width=64;
if(height==0)height=64;
if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
var border=this.getBorderWidth();
width+=border*2;
height+=border*2;
if((this.style&512)!=0){
width+=16;
}if((this.style&256)!=0){
height+=16;
}return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_M(c$,"createHandle",
function(){
this.selections=new Array(0);
this.items=new Array(0);
$_U(this,$wt.widgets.Tree,"createHandle",[]);
this.state&=-3;
this.handle.className+=" tree-default";
if((this.style&512)!=0&&(this.style&256)!=0){
this.handle.style.overflow="auto";
}else{
if((this.style&512)!=0){
this.handle.className+=" tree-v-scroll";
}else if((this.style&256)!=0){
this.handle.className+=" tree-h-scroll";
}}this.tableHandle=d$.createElement("TABLE");
var cssTable="tree-content tree-no-columns";
if((this.style&65536)!=0){
cssTable+=" tree-full-selection";
}if((this.style&32)!=0){
cssTable+=" tree-check";
}this.tableHandle.className=cssTable;
this.handle.appendChild(this.tableHandle);
this.hTreeKeyDown=$_Q((($_D("$wt.widgets.Tree$1")?0:org.eclipse.swt.widgets.Tree.$Tree$1$()),$_N($wt.widgets.Tree$1,this,null)));
Clazz.addEvent(this.handle,"keydown",this.hTreeKeyDown);
});
$_M(c$,"setFocusIndex",
function(index){
if(index<0)return;
if(index==this.focusIndex){
return;
}var item=this.getItem(index);
if(item==null){
return;
}if(this.focusItem!=null){
O$.removeCSSClass(this.focusItem.handle,"tree-item-focus");
}this.focusItem=item;
this.focusIndex=index;
O$.addCSSClass(item.handle,"tree-item-focus");
},"~N");
$_M(c$,"createItem",
function(column,index){
if(this.columns==null){
this.columns=new Array(0);
}if(this.handle==null){
return;
}var table=this.handle.childNodes[0];
O$.removeCSSClass(this.handle,"tree-no-columns");
this.theadHandle=null;
for(var i=0;i<table.childNodes.length;i++){
if("THEAD".equals(table.childNodes[i].nodeName)){
this.theadHandle=table.childNodes[i];
break;
}}
if(this.theadHandle==null){
this.theadHandle=d$.createElement("THEAD");
table.appendChild(this.theadHandle);
}var theadTR=null;
if(this.theadHandle.childNodes!=null&&this.theadHandle.childNodes.length!=0){
for(var i=0;i<this.theadHandle.childNodes.length;i++){
if(this.theadHandle.childNodes[i]!=null&&"TR".equals(this.theadHandle.childNodes[i].nodeName)){
theadTR=this.theadHandle.childNodes[i];
}}
}if(theadTR==null){
theadTR=d$.createElement("TR");
this.theadHandle.appendChild(theadTR);
var theadTD=d$.createElement("TD");
theadTD.className="tree-column-last";
theadTR.appendChild(theadTD);
this.createCSSElement(theadTD,"tree-head-text").appendChild(d$.createTextNode("\u00a0"));
}var theadTD=d$.createElement("TD");
theadTR.insertBefore(theadTD,theadTR.childNodes[theadTR.childNodes.length-1]);
this.createCSSElement(theadTD,"tree-head-text").appendChild(d$.createTextNode("\u00a0"));
if(index<0||index>=theadTR.childNodes.length){
theadTR.appendChild(theadTD);
this.columns[index]=column;
}else{
theadTR.insertBefore(theadTD,theadTR.childNodes[index]);
for(var i=this.columns.length;i>index;i--){
this.columns[i]=this.columns[i-1];
}
this.columns[index]=column;
for(var i=0;i<this.items.length;i++){
}
}column.handle=theadTD;
},"$wt.widgets.TreeColumn,~N");
$_M(c$,"createCSSElement",
($fz=function(parent,css){
var div=d$.createElement("DIV");
div.className=css;
if(parent!=null){
(parent).appendChild(div);
}return div;
},$fz.isPrivate=true,$fz),"~O,~S");
$_M(c$,"createItem",
function(item,hParent,index){
if(this.items==null){
this.items=new Array(0);
}var itemList=(hParent==null?this.directChildrens:item.parentItem.items);
var idx=-1;
if(index<0||index>=itemList.length){
if(hParent==null){
idx=this.items.length;
}else{
if(itemList.length==0){
idx=item.parentItem.index+1;
}else{
idx=this.findSiblingNextItem(item.parentItem.index);
if(idx!=-1){
}else{
idx=this.items.length;
}}}index=itemList.length;
itemList[index]=item;
}else{
idx=this.findSiblingNextItem(itemList[index].index);
if(idx!=-1){
}else{
idx=this.items.length;
}for(var i=itemList.length;i>index;i--){
itemList[i]=itemList[i-1];
}
itemList[index]=item;
}for(var i=this.items.length-1;i>=idx;i--){
this.items[i+1]=this.items[i];
this.items[i+1].index=i+1;
}
this.items[idx]=item;
item.index=idx;
var table=this.handle.childNodes[0];
if(this.tbody==null){
this.tbody=d$.createElement("TBODY");
table.appendChild(this.tbody);
}var tbodyTR=d$.createElement("TR");
item.handle=tbodyTR;
if(idx==0){
tbodyTR.className="tree-row-first";
if(this.tbody.childNodes.length!=0){
this.tbody.childNodes[0].className="";
}}if(idx>=this.tbody.childNodes.length||this.tbody.childNodes[idx]==null){
this.tbody.appendChild(tbodyTR);
}else{
this.tbody.insertBefore(tbodyTR,this.tbody.childNodes[idx]);
}var td=d$.createElement("TD");
td.className="tree-column-first";
tbodyTR.appendChild(td);
var treeLine=this.createCSSElement(td,"tree-line");
if(O$.isIE&&this.columns!=null&&this.columns[0]!=null&&this.columns[0].cachedWidth!=0){
treeLine.style.width=this.columns[0].cachedWidth+"px";
}var lineWrapper=this.createCSSElement(treeLine,"tree-line-wrapper");
var chains=new Array(0);
chains[0]=item;
var parentItem=item.getParentItem();
while(parentItem!=null){
chains[chains.length]=parentItem;
parentItem=parentItem.getParentItem();
}
item.depth=chains.length;
var lastItem=null;
for(var i=chains.length-1;i>=0;i--){
var currentItem=chains[i];
var cssClass="tree-anchor";
if((this.style&67108864)!=0){
cssClass+=" tree-anchor-rtl";
}var listItems=(lastItem==null?this.directChildrens:lastItem.items);
if(listItems.length>1){
var j=0;
var isNoBreak=true;
for(;j<listItems.length;j++){
if(listItems[j]===currentItem){
isNoBreak=false;
break;
}}
if(isNoBreak){
}if(j==listItems.length-1){
if(i==0){
cssClass+=" tree-anchor-end";
}else{
cssClass+=" tree-anchor-single";
}}else if(j==0){
if(i==0){
cssClass+=" tree-anchor-begin";
}else if(listItems.length==1){
cssClass+=" tree-anchor-single";
}else{
cssClass+=" tree-anchor-middle";
}}else{
cssClass+=" tree-anchor-middle";
}}else if(hParent!=null&&i==0){
cssClass+=" tree-anchor-end";
}else{
cssClass+=" tree-anchor-single";
}var anchor=this.createCSSElement(lineWrapper,cssClass);
if(O$.isIE&&(this.style&67108864)!=0){
anchor.style.position="static";
}this.createCSSElement(anchor,"tree-anchor-v");
cssClass="tree-anchor-h";
if(i==0){
if(currentItem.items==null||currentItem.items.length==0){
cssClass+=" tree-anchor-line";
}else{
cssClass+=" tree-anchor-plus";
}}this.createCSSElement(anchor,cssClass);
lastItem=currentItem;
}
var textEl=this.createCSSElement(lineWrapper,"tree-text");
if((this.style&67108864)!=0)textEl.className+=" tree-text-rtl";
if((this.style&32)!=0){
var input=d$.createElement("INPUT");
input.type="checkbox";
input.className="tree-check-box image-p-4";
textEl.appendChild(input);
item.checkElement=input;
}this.createCSSElement(textEl,"tree-text-inner");
var length=Math.max(1,this.columns.length);
for(var i=1;i<length;i++){
td=d$.createElement("TD");
this.createCSSElement(td,"tree-text-inner");
tbodyTR.appendChild(td);
}
td=d$.createElement("TD");
td.className="tree-column-last";
this.createCSSElement(td,"tree-text-inner");
tbodyTR.appendChild(td);
if(item.parentItem!=null){
}var elIndex=chains.length-1;
if(index==itemList.length-1){
var prevIndex=0;
if(itemList.length==1){
prevIndex=(hParent==null?0:item.parentItem.index+1);
}else{
prevIndex=itemList[index-1].index;
}for(var k=prevIndex;k<item.index;k++){
var ti=this.items[k];
var anchor=ti.handle.childNodes[0].childNodes[0].childNodes[0].childNodes[elIndex];
var cssClass="tree-anchor";
if((this.style&67108864)!=0){
cssClass+=" tree-anchor-rtl";
}if(ti.parentItem===item.parentItem){
var i=0;
for(i=0;i<itemList.length;i++){
if(ti===itemList[i]){
break;
}}
if(i==0){
if(ti.parentItem==null){
cssClass+=" tree-anchor-begin";
}else if(itemList.length>1){
cssClass+=" tree-anchor-middle";
}else{
cssClass+=" tree-anchor-end";
}}else if(i==itemList.length-1){
cssClass+=" tree-anchor-end";
}else{
cssClass+=" tree-anchor-middle";
}}else{
cssClass+=" tree-anchor-middle";
}anchor.className=cssClass;
}
if(itemList.length==1&&hParent!=null){
var parentInnerChildren=item.parentItem.handle.childNodes[0].childNodes[0].childNodes[0].childNodes;
var anchorV=parentInnerChildren[elIndex-1];
anchorV.childNodes[1].className=item.parentItem.expandStatus?"tree-anchor-h tree-anchor-minus":"tree-anchor-h tree-anchor-plus";
}}var visible=true;
while(item.parentItem!=null&&(visible=item.parentItem.getExpanded())){
item=item.parentItem;
}
if(!visible){
tbodyTR.style.display="none";
}},"$wt.widgets.TreeItem,~O,~N");
$_M(c$,"toggleSelection",
function(item,isCtrlKeyHold,isShiftKeyHold){
if(item==null){
return false;
}if((this.style&2)!=0&&(isCtrlKeyHold||isShiftKeyHold)){
if(isCtrlKeyHold){
for(var i=0;i<this.selections.length;i++){
if(item===this.selections[i]){
var newSelections=new Array(this.selections.length);
for(var j=0;j<i;j++){
newSelections[j]=this.selections[j];
}
for(var j=i;j<this.selections.length-1;j++){
newSelections[j]=this.selections[j+1];
}
this.selections=newSelections;
item.showSelection(false);
this.lastSelection=item;
return false;
}}
this.selections[this.selections.length]=item;
this.lastSelection=item;
item.showSelection(true);
}else{
for(var i=0;i<this.selections.length;i++){
if(this.selections[i]!=null){
this.selections[i].showSelection(false);
}}
if(this.lastSelection!=null){
var idx1=Math.min(this.lastSelection.index,item.index);
var idx2=Math.max(this.lastSelection.index,item.index);
this.selections=new Array(0);
for(var i=idx1;i<=idx2;i++){
var ti=this.items[i];
if(ti.handle.style.display!=="none"){
this.selections[this.selections.length]=ti;
ti.showSelection(true);
}}
return true;
}else{
if(this.selections.length!=1){
this.selections=new Array(1);
}this.selections[0]=item;
}}}else{
item.showSelection(true);
for(var i=0;i<this.selections.length;i++){
if(this.selections[i]!=null&&this.selections[i]!==item){
this.selections[i].showSelection(false);
}}
if(this.selections.length!=1){
this.selections=new Array(1);
}this.selections[0]=item;
}this.lastSelection=item;
return true;
},"$wt.widgets.TreeItem,~B,~B");
$_M(c$,"skipItems",
function(index){
var parentItem=this.items[index];
index++;
while(this.items[index]!=null){
var item=this.items[index];
if(item.parentItem!==parentItem){
if(item.parentItem===this.items[index-1]){
index=this.skipItems(index-1);
if(index==-1){
return-1;
}var ti=this.items[index];
var outOfHierarchies=true;
while(ti!=null){
ti=ti.parentItem;
if(ti===parentItem){
outOfHierarchies=false;
break;
}}
if(outOfHierarchies){
return index;
}}else{
return index;
}}index++;
}
return-1;
},"~N");
$_M(c$,"createParent",
function(){
this.forceResize();
this.register();
});
$_M(c$,"createWidget",
function(){
$_U(this,$wt.widgets.Tree,"createWidget",[]);
this.items=new Array(0);
this.columns=new Array(0);
this.directChildrens=new Array(0);
});
$_M(c$,"deselectAll",
function(){
for(var i=0;i<this.selections.length;i++){
this.selections[i].showSelection(false);
}
});
$_M(c$,"destroyItem",
function(column){
},"$wt.widgets.TreeColumn");
$_M(c$,"destroyItem",
function(item){
var length=this.selections.length;
var index=-1;
for(var i=0;i<length;i++){
if(this.selections[i].equals(item)){
index=i;
break;
}}
if(index!=-1){
var oldSelection=this.selections;
this.selections=new Array(length-1);
System.arraycopy(oldSelection,0,this.selections,0,index);
System.arraycopy(oldSelection,index+1,this.selections,index,length-index-1);
}var found=false;
length=this.items.length;
for(var i=0;i<length;i++){
if(found){
this.items[i-1]=this.items[i];
this.items[i-1].index=i-1;
}if(this.items[i].equals(item)){
found=true;
}}
{
this.items.length=length-1;
}this.updateScrollBar();
},"$wt.widgets.TreeItem");
$_M(c$,"findItem",
function(id){
return null;
},"~N");
$_M(c$,"getGridLineWidth",
function(){
return 1;
});
$_M(c$,"getHeaderHeight",
function(){
return 16;
});
$_M(c$,"getHeaderVisible",
function(){
return this.headerVisible;
});
$_M(c$,"getImageSize",
function(){
if(this.imageList!=null)return this.imageList.getImageSize();
return new $wt.graphics.Point(0,this.getItemHeight());
});
$_M(c$,"getColumn",
function(index){
return this.columns[index];
},"~N");
$_M(c$,"getColumnCount",
function(){
return this.columns.length;
});
$_M(c$,"getColumns",
function(){
return this.columns;
});
$_M(c$,"getDescendantItems",
function(index){
var nextSiblingIdx=this.findNextSiblingItem(index);
if(nextSiblingIdx==-1){
nextSiblingIdx=this.items.length;
}var children=new Array(nextSiblingIdx-index-1);
for(var i=index+1;i<nextSiblingIdx;i++){
children[i-index-1]=this.items[i];
}
return children;
},"~N");
$_M(c$,"findItem",
function(parentIndex,index){
if(parentIndex<0){
for(var i=0;i<this.items.length;i++){
if(this.items[i].parentItem==null){
if(index==0){
return i;
}index--;
}}
return-1;
}var parentItem=this.items[parentIndex];
parentIndex++;
while(this.items[parentIndex]!=null){
var item=this.items[parentIndex];
if(item.parentItem!==parentItem){
if(item.parentItem===this.items[parentIndex-1]){
parentIndex=this.skipItems(parentIndex-1);
if(parentIndex==-1){
return-1;
}}else{
return-1;
}}else{
if(index==0){
return parentIndex;
}index--;
}parentIndex++;
}
return-1;
},"~N,~N");
$_M(c$,"findNextSiblingItem",
function(parentIndex){
if(parentIndex<0){
parentIndex=0;
}var parentItem=this.items[parentIndex];
parentIndex++;
if(this.items[parentIndex]!=null){
var item=this.items[parentIndex];
if(item.parentItem!==parentItem.parentItem){
if(item.parentItem===this.items[parentIndex-1]){
parentIndex=this.skipItems(parentIndex-1);
if(parentIndex==-1){
return-1;
}var ti=this.items[parentIndex];
var outOfHierarchies=true;
while(ti!=null){
ti=ti.parentItem;
if(ti===parentItem){
outOfHierarchies=false;
break;
}}
if(outOfHierarchies){
return parentIndex;
}}else{
return-1;
}}else{
return parentIndex;
}}return-1;
},"~N");
$_M(c$,"findSiblingNextItem",
function(parentIndex){
if(parentIndex<0){
parentIndex=0;
}var parentItem=this.items[parentIndex];
parentIndex++;
if(this.items[parentIndex]!=null){
var item=this.items[parentIndex];
if(item.parentItem!==parentItem.parentItem){
if(item.parentItem===this.items[parentIndex-1]){
parentIndex=this.skipItems(parentIndex-1);
if(parentIndex==-1){
return-1;
}var ti=this.items[parentIndex];
var outOfHierarchies=true;
while(ti!=null){
ti=ti.parentItem;
if(ti===parentItem){
outOfHierarchies=false;
break;
}}
if(outOfHierarchies){
return parentIndex;
}}else{
return parentIndex;
}}else{
return parentIndex;
}}return-1;
},"~N");
$_M(c$,"indexOf",
function(parentIndex,ti){
var index=0;
if(parentIndex<0){
if(ti.parentItem!=null){
return-1;
}for(var i=0;i<this.items.length;i++){
if(this.items[i]===ti){
return index;
}else if(this.items[i].parentItem==null){
index++;
}}
return-1;
}var parentItem=this.items[parentIndex];
parentIndex++;
while(this.items[parentIndex]!=null){
var item=this.items[parentIndex];
if(item.parentItem!==parentItem){
if(item.parentItem===this.items[parentIndex-1]){
parentIndex=this.skipItems(parentIndex-1);
if(parentIndex==-1){
return-1;
}if(this.items[parentIndex].parentItem===parentItem.parentItem){
return-1;
}else{
if(this.items[parentIndex]===ti){
return index;
}index++;
}}else{
return-1;
}}else{
if(item===ti){
return index;
}index++;
}parentIndex++;
}
return-1;
},"~N,$wt.widgets.TreeItem");
$_M(c$,"getItem",
function(index){
return this.getItems()[index];
},"~N");
$_M(c$,"getItem",
function(point){
return null;
},"$wt.graphics.Point");
$_M(c$,"getItemCount",
function(){
return this.getItems().length;
});
$_M(c$,"getItemCount",
function(hItem){
return this.items.length;
},"~N");
$_M(c$,"getItemHeight",
function(){
return 16;
});
$_M(c$,"getItems",
function(){
var copiedItems=new Array(0);
for(var i=0;i<this.items.length;i++){
if(this.items[i]!=null&&this.items[i].parentItem==null){
copiedItems[copiedItems.length]=this.items[i];
}}
return copiedItems;
});
$_M(c$,"getItems",
function(hTreeItem){
var children=new Array(0);
if(hTreeItem<0){
hTreeItem=0;
}var parentItem=this.items[hTreeItem];
hTreeItem++;
while(this.items[hTreeItem]!=null){
var item=this.items[hTreeItem];
if(item.parentItem!==parentItem){
if(item.parentItem===this.items[hTreeItem-1]){
hTreeItem=this.skipItems(hTreeItem-1);
if(hTreeItem==-1){
return children;
}if(this.items[hTreeItem].parentItem===parentItem.parentItem){
return children;
}else{
children[children.length]=this.items[hTreeItem];
}}else{
return children;
}}else{
children[children.length]=item;
}hTreeItem++;
}
return children;
},"~N");
$_M(c$,"getLinesVisible",
function(){
return this.linesVisible;
});
$_M(c$,"getParentItem",
function(){
return null;
});
$_M(c$,"getSelection",
function(){
return this.selections;
});
$_M(c$,"getSelectionCount",
function(){
return this.selections.length;
});
$_M(c$,"getTopItem",
function(){
return this.items[0];
});
$_M(c$,"indexOf",
function(column){
var count=this.columns.length;
for(var i=0;i<count;i++){
if(this.columns[i]===column)return i;
}
return-1;
},"$wt.widgets.TreeColumn");
$_M(c$,"indexOf",
function(item){
for(var i=0;i<this.items.length;i++){
if(this.items[i]===item){
return i;
}}
return-1;
},"$wt.widgets.TreeItem");
$_M(c$,"releaseHandle",
function(){
if(this.hTreeKeyDown!=null){
Clazz.removeEvent(this.handle,"keydown",this.hTreeKeyDown);
this.hTreeKeyDown=null;
}if(this.theadHandle!=null){
O$.deepClearChildren(this.theadHandle);
O$.destroyHandle(this.theadHandle);
this.theadHandle=null;
}if(this.tbody!=null){
O$.deepClearChildren(this.tbody);
O$.destroyHandle(this.tbody);
this.tbody=null;
}if(this.tableHandle!=null){
O$.deepClearChildren(this.tableHandle);
O$.destroyHandle(this.tableHandle);
this.tableHandle=null;
}this.focusItem=null;
this.lastSelection=null;
this.directChildrens=null;
this.selections=null;
$_U(this,$wt.widgets.Tree,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
var columnCount=this.columns.length;
for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null&&!item.isDisposed()){
item.releaseResources();
}}
this.items=null;
for(var i=0;i<columnCount;i++){
var column=this.columns[i];
if(!column.isDisposed())column.releaseResources();
}
this.columns=null;
$_U(this,$wt.widgets.Tree,"releaseWidget",[]);
});
$_M(c$,"removeAll",
function(){
this.ignoreDeselect=this.ignoreSelect=true;
var items=this.getItems();
var length=items.length;
for(var i=0;i<length;i++){
items[i].dispose();
}
this.items=new Array(0);
this.updateScrollBar();
});
$_M(c$,"removeSelectionListener",
function(listener){
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"removeTreeListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(17,listener);
this.eventTable.unhook(18,listener);
},"$wt.events.TreeListener");
$_M(c$,"setInsertMark",
function(item,before){
},"$wt.widgets.TreeItem,~B");
$_M(c$,"setLinesVisible",
function(show){
if(this.linesVisible==show)return;
this.linesVisible=show;
},"~B");
$_M(c$,"selectAll",
function(){
if((this.style&4)!=0)return;
});
$_M(c$,"setCheckboxImageList",
function(){
if((this.style&32)==0)return;
});
$_M(c$,"setHeaderVisible",
function(show){
this.headerVisible=show;
if(this.theadHandle!=null){
this.theadHandle.style.display=(show?"":"none");
}var table=this.handle.childNodes[0];
O$.updateCSSClass(table,"tree-no-columns",!show||this.columns==null||this.columns.length==0);
this.setScrollWidth();
this.updateScrollBar();
},"~B");
$_V(c$,"setRedraw",
function(redraw){
},"~B");
$_M(c$,"setScrollWidth",
function(){
});
$_M(c$,"setSelection",
function(item){
this.setSelection([item]);
},"$wt.widgets.TreeItem");
$_M(c$,"setSelection",
function(items){
var length=items.length;
if(length==0||((this.style&4)!=0&&length>1)){
this.deselectAll();
return;
}this.selections=items;
for(var i=0;i<items.length;i++){
items[i].showSelection(true);
}
},"~A");
$_M(c$,"setTopItem",
function(item){
this.updateScrollBar();
},"$wt.widgets.TreeItem");
$_M(c$,"SetWindowPos",
function(hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags){
if(O$.isIE&&(this.columns==null||this.columns[0]==null||this.columns[0].cachedWidth<=0)){
var cachedWidth=cx-8;
if(this.columns==null||this.columns[0]==null){
}else if(this.columns[0].cachedWidth==0){
var w=cx-10;
var count=1;
for(var i=1;i<this.columns.length;i++){
if(this.columns[i]!=null&&this.columns[i].cachedWidth>0){
w-=this.columns[i].cachedWidth;
}else{
count++;
}}
cachedWidth=Math.floor(w/count);
}for(var i=0;i<this.items.length;i++){
this.items[i].handle.childNodes[0].childNodes[0].style.width=cachedWidth+"px";
}
}return $_U(this,$wt.widgets.Tree,"SetWindowPos",[hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags]);
},"~O,~O,~N,~N,~N,~N,~N");
$_M(c$,"showItem",
function(hItem){
this.updateScrollBar();
},"Element");
$_M(c$,"showColumn",
function(column){
if(column.parent!==this)return;
var index=this.indexOf(column);
if(index==-1)return;
},"$wt.widgets.TreeColumn");
$_M(c$,"showItem",
function(item){
this.showItem(item.handle);
},"$wt.widgets.TreeItem");
$_M(c$,"showSelection",
function(){
});
$_M(c$,"updateScrollBar",
function(){
});
$_V(c$,"useNativeScrollBar",
function(){
return true;
});
c$.$Tree$1$=function(){
$_H();
c$=$_W($wt.widgets,"Tree$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var evt=this.getEvent();
var index=this.b$["$wt.widgets.Tree"].focusIndex;
switch(evt.keyCode){
case 13:
var item=this.b$["$wt.widgets.Tree"].getItem(index);
if(item==null)return;
this.b$["$wt.widgets.Tree"].toggleSelection(item,evt.ctrlKey,evt.shiftKey);
if(item.isSelected()){
var e=new $wt.widgets.Event();
e.display=this.b$["$wt.widgets.Tree"].display;
e.type=14;
e.detail=0;
e.item=item;
e.widget=item;
this.b$["$wt.widgets.Tree"].sendEvent(e);
this.toReturn(false);
}break;
case 32:
var item2=this.b$["$wt.widgets.Tree"].getItem(index);
if(item2==null)return;
this.b$["$wt.widgets.Tree"].toggleSelection(item2,evt.ctrlKey,evt.shiftKey);
if(item2.isSelected()){
var eDefault=new $wt.widgets.Event();
eDefault.display=this.b$["$wt.widgets.Tree"].display;
eDefault.type=13;
eDefault.detail=0;
eDefault.item=item2;
eDefault.widget=item2;
this.b$["$wt.widgets.Tree"].sendEvent(eDefault);
this.toReturn(false);
}break;
case 38:
if(index>0){
this.b$["$wt.widgets.Tree"].setFocusIndex(index-1);
this.toReturn(false);
}break;
case 40:
if(index<this.b$["$wt.widgets.Tree"].getItemCount()-1){
this.b$["$wt.widgets.Tree"].setFocusIndex(index+1);
this.toReturn(false);
}break;
default:
this.toReturn(true);
}
});
c$=$_P();
};
$_S(c$,
"INSET",3,
"GRID_WIDTH",1,
"HEADER_MARGIN",10);
});
