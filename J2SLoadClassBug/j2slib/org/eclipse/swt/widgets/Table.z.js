﻿/* http://j2s.sf.net/ */$_L(["$wt.widgets.Item"],"$wt.widgets.TableItem",["$wt.graphics.Color","$.Rectangle","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Event"],function(){
c$=$_C(function(){
this.parent=null;
this.strings=null;
this.images=null;
this.checked=false;
this.grayed=false;
this.cached=false;
this.imageIndent=0;
this.background=-1;
this.foreground=-1;
this.font=-1;
this.cellBackground=null;
this.cellForeground=null;
this.cellFont=null;
this.index=0;
this.selected=false;
this.check=null;
this.hCheckSelection=null;
this.hItemDefaultSelection=null;
this.hItemSelection=null;
$_Z(this,arguments);
},$wt.widgets,"TableItem",$wt.widgets.Item);
$_K(c$,
function(parent,style){
this.construct(parent,style,$wt.widgets.TableItem.checkNull(parent).getItemCount(),true);
},"$wt.widgets.Table,~N");
$_K(c$,
function(parent,style,index){
this.construct(parent,style,index,true);
},"$wt.widgets.Table,~N,~N");
$_K(c$,
function(parent,style,index,create){
$_R(this,$wt.widgets.TableItem,[parent,style]);
this.parent=parent;
if(create)parent.createItem(this,index);
this.configureItem();
},"$wt.widgets.Table,~N,~N,~B");
$_M(c$,"configureItem",
($fz=function(){
if((this.parent.style&32)!=0&&this.check!=null){
this.hCheckSelection=$_Q((($_D("$wt.widgets.TableItem$1")?0:org.eclipse.swt.widgets.TableItem.$TableItem$1$()),$_N($wt.widgets.TableItem$1,this,null)));
Clazz.addEvent(this.check,"click",this.hCheckSelection);
}this.hItemSelection=$_Q((($_D("$wt.widgets.TableItem$2")?0:org.eclipse.swt.widgets.TableItem.$TableItem$2$()),$_N($wt.widgets.TableItem$2,this,null)));
Clazz.addEvent(this.handle,"click",this.hItemSelection);
this.hItemDefaultSelection=$_Q((($_D("$wt.widgets.TableItem$3")?0:org.eclipse.swt.widgets.TableItem.$TableItem$3$()),$_N($wt.widgets.TableItem$3,this,null)));
Clazz.addEvent(this.handle,"dblclick",this.hItemDefaultSelection);
},$fz.isPrivate=true,$fz));
c$.checkNull=$_M(c$,"checkNull",
function(control){
return control;
},"$wt.widgets.Table");
$_M(c$,"clear",
function(){
this.text="";
this.image=null;
this.strings=null;
this.images=null;
this.imageIndent=0;
this.checked=this.grayed=false;
if((this.parent.style&268435456)!=0)this.cached=false;
});
$_M(c$,"getBackground",
function(){
return new $wt.graphics.Color(this.display,this.handle.style.backgroundColor);
});
$_M(c$,"getBackground",
function(index){
var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return this.getBackground();
return new $wt.graphics.Color(this.display,this.handle.childNodes[index].style.backgroundColor);
},"~N");
$_M(c$,"getBounds",
function(){
var itemIndex=this.parent.indexOf(this);
if(itemIndex==-1)return new $wt.graphics.Rectangle(0,0,0,0);
return new $wt.graphics.Rectangle(0,0,0,0);
});
$_M(c$,"getBounds",
function(index){
var itemIndex=this.parent.indexOf(this);
if(itemIndex==-1)return new $wt.graphics.Rectangle(0,0,0,0);
return new $wt.graphics.Rectangle(0,0,0,0);
},"~N");
$_M(c$,"getChecked",
function(){
if((this.parent.style&32)==0)return false;
return this.checked;
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
return new $wt.graphics.Color(this.display,this.handle.style.color);
});
$_M(c$,"getForeground",
function(index){
var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return this.getForeground();
return new $wt.graphics.Color(null,this.handle.childNodes[index].style.backgroundColor);
},"~N");
$_M(c$,"getGrayed",
function(){
if((this.parent.style&32)==0)return false;
return this.grayed;
});
$_M(c$,"getImage",
function(){
return $_U(this,$wt.widgets.TableItem,"getImage",[]);
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
var itemIndex=this.parent.indexOf(this);
if(itemIndex==-1)return new $wt.graphics.Rectangle(0,0,0,0);
return new $wt.graphics.Rectangle(0,0,0,0);
},"~N");
$_M(c$,"getImageIndent",
function(){
return this.imageIndent;
});
$_M(c$,"getNameText",
function(){
if((this.parent.style&268435456)!=0){
if(!this.cached)return"*virtual*";
}return $_U(this,$wt.widgets.TableItem,"getNameText",[]);
});
$_M(c$,"getParent",
function(){
return this.parent;
});
$_M(c$,"getText",
function(){
return $_U(this,$wt.widgets.TableItem,"getText",[]);
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
$_M(c$,"redraw",
function(){
if((this.parent.style&268435456)!=0)this.cached=true;
if(this.parent.currentItem===this||this.parent.drawCount!=0)return;
var index=this.parent.indexOf(this);
if(index==-1)return;
});
$_M(c$,"redraw",
function(column,drawText,drawImage){
if((this.parent.style&268435456)!=0)this.cached=true;
if(this.parent.currentItem===this||this.parent.drawCount!=0)return;
var index=this.parent.indexOf(this);
if(index==-1)return;
},"~N,~B,~B");
$_M(c$,"releaseHandle",
function(){
if(this.check!=null){
if(this.hCheckSelection!=null){
Clazz.removeEvent(this.check,"click",this.hCheckSelection);
this.hCheckSelection=null;
}O$.destroyHandle(this.check);
this.check=null;
}if(this.handle!=null){
if(this.hItemSelection!=null){
Clazz.removeEvent(this.handle,"click",this.hItemSelection);
this.hItemSelection=null;
}if(this.hItemDefaultSelection!=null){
Clazz.removeEvent(this.handle,"dblclick",this.hItemDefaultSelection);
this.hItemDefaultSelection=null;
}O$.deepClearChildren(this.handle);
}$_U(this,$wt.widgets.TableItem,"releaseHandle",[]);
});
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.TableItem,"releaseChild",[]);
this.parent.destroyItem(this);
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.TableItem,"releaseWidget",[]);
this.parent=null;
this.strings=null;
this.images=null;
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
}},"~N,$wt.graphics.Color");
$_M(c$,"setChecked",
function(checked){
if((this.parent.style&32)==0)return;
if(this.checked==checked)return;
this.setChecked(checked,false);
},"~B");
$_M(c$,"setChecked",
function(checked,notify){
this.checked=checked;
if(this.check!=null){
this.check.checked=this.checked;
}if(notify){
var event=new $wt.widgets.Event();
event.item=this;
event.detail=32;
this.parent.postEvent(13,event);
}this.redraw();
},"~B,~B");
$_M(c$,"setFont",
function(font){
var hFont=-1;
if(font!=null){
this.parent.customDraw=true;
}if(this.font==hFont)return;
this.font=hFont;
this.parent.setScrollWidth(this,false);
this.redraw();
},"$wt.graphics.Font");
$_M(c$,"setFont",
function(index,font){
var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return;
if(font!=null){
this.parent.customDraw=true;
}if(this.cellFont==null){
this.cellFont=$_A(count,0);
for(var i=0;i<count;i++){
this.cellFont[i]=-1;
}
}this.redraw(index,true,false);
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
if(this.grayed==grayed)return;
this.grayed=grayed;
this.redraw();
},"~B");
$_M(c$,"setImage",
function(images){
for(var i=0;i<images.length;i++){
this.setImage(i,images[i]);
}
},"~A");
$_M(c$,"setText",
function(string){
this.setText(0,string);
},"~S");
$_M(c$,"setImage",
function(index,image){
if(index==0){
if(image!=null&&image.type==1){
if(image.equals(this.image))return;
}$_U(this,$wt.widgets.TableItem,"setImage",[image]);
}var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return;
if(this.images==null&&index!=0)this.images=new Array(count);
if(this.images!=null){
if(image!=null&&image.type==1){
if(image.equals(this.images[index]))return;
}this.images[index]=image;
}if(index==0){
if(this.image.handle==null&&this.image.url!=null&&this.image.url.length!=0){
var text=this.handle.childNodes[index].childNodes[0];
var els=text.childNodes;
var handleStyle=this.handle.style;
if(els.length==1||!O$.existedCSSClass(els[els.length-2],"table-image")){
var div=d$.createElement("DIV");
div.className="table-image image-p-4 image-n-5";
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
}}O$.addCSSClass(this.handle.parentNode,"table-image");
}this.redraw(index,false,true);
},"~N,$wt.graphics.Image");
$_M(c$,"setImage",
function(image){
this.setImage(0,image);
},"$wt.graphics.Image");
$_M(c$,"setImageIndent",
function(indent){
if(indent<0)return;
if(this.imageIndent==indent)return;
this.imageIndent=indent;
if((this.parent.style&268435456)==0){
var index=this.parent.indexOf(this);
if(index!=-1){
}}this.parent.setScrollWidth(this,false);
this.redraw();
},"~N");
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
$_U(this,$wt.widgets.TableItem,"setText",[string]);
}var count=Math.max(1,this.parent.getColumnCount());
if(0>index||index>count-1)return;
if(this.strings==null&&index!=0)this.strings=new Array(count);
if(this.strings!=null){
if(string.equals(this.strings[index]))return;
this.strings[index]=string;
}var text=this.handle.childNodes[index].childNodes[0];
if(index==0){
text=text.childNodes[text.childNodes.length-1];
}text.innerHTML=string;
var columnMaxWidth=this.parent.columnMaxWidth;
var width=O$.getContainerWidth(text.parentNode);
if(columnMaxWidth.length>index){
if(columnMaxWidth[index]<width){
this.parent.lineWidth=this.parent.lineWidth+width-columnMaxWidth[index];
columnMaxWidth[index]=width;
}}else{
this.parent.lineWidth=this.parent.lineWidth+width;
columnMaxWidth[index]=width;
}},"~N,~S");
$_M(c$,"showSelection",
function(selected){
this.selected=selected;
O$.updateCSSClass(this.handle,"table-item-selected",selected);
if(O$.isIE){
var tmpDiv=d$.createElement("DIV");
tmpDiv.style.width="1px";
this.handle.childNodes[0].appendChild(tmpDiv);
O$.destroyHandle(tmpDiv);
}},"~B");
$_M(c$,"isSelected",
function(){
return this.selected;
});
$_M(c$,"enableWidget",
function(enabled){
this.handle.disabled=!enabled;
if(this.check!=null){
this.check.disabled=!enabled;
}},"~B");
c$.$TableItem$1$=function(){
$_H();
c$=$_W($wt.widgets,"TableItem$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=new $wt.widgets.Event();
e.display=this.b$["$wt.widgets.TableItem"].display;
e.type=13;
e.detail=32;
e.item=this.b$["$wt.widgets.TableItem"];
e.widget=this.b$["$wt.widgets.TableItem"];
this.b$["$wt.widgets.TableItem"].parent.sendEvent(e);
this.b$["$wt.widgets.TableItem"].setChecked(!this.b$["$wt.widgets.TableItem"].checked);
});
c$=$_P();
};
c$.$TableItem$2$=function(){
$_H();
c$=$_W($wt.widgets,"TableItem$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.TableItem"].handle.disabled){
return;
}O$.SetFocus(this.b$["$wt.widgets.TableItem"].parent.handle);
var evt=this.getEvent();
this.b$["$wt.widgets.TableItem"].parent.toggleSelection(this.b$["$wt.widgets.TableItem"],evt.ctrlKey,evt.shiftKey);
var e=new $wt.widgets.Event();
e.display=this.b$["$wt.widgets.TableItem"].display;
e.type=13;
e.detail=0;
e.item=this.b$["$wt.widgets.TableItem"];
e.widget=this.b$["$wt.widgets.TableItem"];
this.b$["$wt.widgets.TableItem"].parent.sendEvent(e);
this.b$["$wt.widgets.TableItem"].parent.setFocusIndex(this.b$["$wt.widgets.TableItem"].parent.indexOf(this.b$["$wt.widgets.TableItem"]));
this.toReturn(false);
});
c$=$_P();
};
c$.$TableItem$3$=function(){
$_H();
c$=$_W($wt.widgets,"TableItem$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.TableItem"].handle.disabled){
return;
}var evt=this.getEvent();
this.b$["$wt.widgets.TableItem"].parent.toggleSelection(this.b$["$wt.widgets.TableItem"],evt.ctrlKey,evt.shiftKey);
var e=new $wt.widgets.Event();
e.display=this.b$["$wt.widgets.TableItem"].display;
e.type=14;
e.detail=0;
e.item=this.b$["$wt.widgets.TableItem"];
e.widget=this.b$["$wt.widgets.TableItem"];
this.b$["$wt.widgets.TableItem"].parent.sendEvent(e);
this.toReturn(false);
});
c$=$_P();
};
});
$_L(["$wt.widgets.Item"],"$wt.widgets.TableColumn",["$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.TypedListener"],function(){
c$=$_C(function(){
this.colWidth=0;
this.parent=null;
this.resizable=false;
this.moveable=false;
this.resizeHandle=null;
this.hColumnSelection=null;
$_Z(this,arguments);
},$wt.widgets,"TableColumn",$wt.widgets.Item);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.TableColumn,[parent,$wt.widgets.TableColumn.checkStyle(style)]);
this.resizable=true;
this.parent=parent;
parent.createItem(this,parent.getColumnCount());
this.configureColumn();
},"$wt.widgets.Table,~N");
$_M(c$,"configureColumn",
($fz=function(){
this.hColumnSelection=$_Q((($_D("$wt.widgets.TableColumn$1")?0:org.eclipse.swt.widgets.TableColumn.$TableColumn$1$()),$_N($wt.widgets.TableColumn$1,this,null)));
Clazz.addEvent(this.handle,"dblclick",this.hColumnSelection);
},$fz.isPrivate=true,$fz));
$_K(c$,
function(parent,style,index){
$_R(this,$wt.widgets.TableColumn,[parent,$wt.widgets.TableColumn.checkStyle(style)]);
this.resizable=true;
this.parent=parent;
parent.createItem(this,index);
this.configureColumn();
},"$wt.widgets.Table,~N,~N");
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
$_M(c$,"getMoveable",
function(){
return this.moveable;
});
$_M(c$,"getResizable",
function(){
return this.resizable;
});
$_M(c$,"getWidth",
function(){
var index=this.parent.indexOf(this);
if(index==-1)return 0;
if(!this.parent.headerVisible){
return this.colWidth;
}if(this.handle.style.width!=null&&this.handle.style.width.length!=0){
var styleWidth=Integer.parseInt(this.handle.style.width);
return this.text!=null?Math.max(O$.getStringPlainWidth(this.text),styleWidth):styleWidth;
}return O$.getContainerWidth(this.handle);
});
$_M(c$,"pack",
function(){
var index=this.parent.indexOf(this);
if(index==-1)return;
});
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.TableColumn,"releaseChild",[]);
this.parent.destroyItem(this);
});
$_M(c$,"releaseHandle",
function(){
if(this.resizeHandle!=null){
O$.destroyHandle(this.resizeHandle);
this.resizeHandle=null;
}if(this.handle!=null){
if(this.hColumnSelection!=null){
Clazz.removeEvent(this.handle,"click",this.hColumnSelection);
this.hColumnSelection=null;
}O$.deepClearChildren(this.handle);
O$.destroyHandle(this.handle);
this.handle=null;
}$_U(this,$wt.widgets.TableColumn,"releaseHandle",[]);
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
$_U(this,$wt.widgets.TableColumn,"setImage",[image]);
},"$wt.graphics.Image");
$_M(c$,"setMoveable",
function(moveable){
this.moveable=moveable;
this.parent.updateMoveable();
},"~B");
$_M(c$,"setResizable",
function(resizable){
this.resizable=resizable;
},"~B");
$_M(c$,"setText",
function(string){
var index=this.parent.indexOf(this);
if(index==-1)return;
$_U(this,$wt.widgets.TableColumn,"setText",[string]);
var text=this.handle.childNodes[0];
O$.clearChildren(text);
if(string.length==0)string="\u00a0";
text.appendChild(d$.createTextNode(string));
var columnMaxWidth=this.parent.columnMaxWidth;
var width=O$.getContainerWidth(this.handle);
if(columnMaxWidth.length>index){
if(columnMaxWidth[index]<width){
this.parent.lineWidth+=width-columnMaxWidth[index];
columnMaxWidth[index]=width;
}}else{
this.parent.lineWidth+=width;
columnMaxWidth[index]=width;
}},"~S");
$_M(c$,"setWidth",
function(width){
var index=this.parent.indexOf(this);
if(index==-1)return;
this.colWidth=width;
var tempWidth=width;
if(this.text!=null){
tempWidth=Math.max(O$.getStringPlainWidth(this.text),width);
}this.handle.style.width=tempWidth+"px";
},"~N");
c$.$TableColumn$1$=function(){
$_H();
c$=$_W($wt.widgets,"TableColumn$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.TableColumn"].sendEvent(14);
});
c$=$_P();
};
});
$_L(["$wt.widgets.Composite"],"$wt.widgets.Table",["$wt.graphics.Point","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Event","$.TableItem","$.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.Table", "/*\n* FIXME: The following css rule breaks the whole page\'s CSS!\n*/\n.table-default table, .table-default tr, .table-default td {\nfont-family:Tahoma, Arial,sans-serif;\nfont-size:8pt;\nmargin:0;\npadding:0;\n}\n.table-content {\npadding:0;\nmargin:0;\nborder-collapse:collapse;\n}\n.table-v-scroll {\noverflow:scroll;\noverflow-x:hidden;\n}\n.table-h-scroll {\noverflow:scroll;\noverflow-y:hidden;\n}\n.table-default thead td {\noverflow:hidden;\nbackground-color:red;\npadding:0 !important;\n}\nthead .table-head-text {\nbackground-color:buttonface;\nborder-style:solid;\nborder-width:1px 2px 2px 1px;\nborder-color:#666 white white #666;\nborder-color:white #666 #666 white;\ncursor:default;\npadding:1px 2px;\nwhite-space:nowrap;\n}\n.table-column-last .table-head-text {\nborder-width:1px 0 2px 1px;\n}\n.table-default tbody td {\ncursor:default;\nwhite-space:nowrap;\n}\n.table-grid-line tbody td {\nborder-style:solid;\nborder-color:buttonface;\nborder-width:1px 1px 0 0;\n}\n.table-column-last {\nwidth:16px;\npadding-right:2px;\nbackground-color:white\n}\n.table-grid-line tbody .table-column-last {\nborder-width:1px 0 0 0;\n}\n.table-grid-line .table-row-first td {\n}\n.table-full-selection tr.table-item-selected td {\ncolor:highlighttext;\nbackground-color:highlight;\n}\n.table-blur .table-full-selection tr.table-item-selected td {\nbackground-color:gray;\n}\n.table-full-selection tr.table-item-selected td.table-column-first {\ncolor:black;\nbackground-color:white;\n}\n.table-full-selection tr.table-item-selected td.table-column-last {\ncolor:black;\nbackground-color:white;\n}\n.table-check-box {\nmargin:0;\npadding:0;\nposition:absolute;\ndisplay:block;\nleft:-14px !important;\n_left:-18px !important;\nmin-height:13px;\n_height:1em;\n}\n@media all and (min-width:0px){/* opera */\n.table-check-box {\ntop:50%;\nmargin-top:-8px;\nleft:-16px !important;\n}\n}\n.table-check-box-rtl {\nmargin:0;\npadding:0;\ndisplay:block;\nright:-14px !important;\n_right:-18px !important;\nmin-height:13px;\n_height:1em;\n}\n.table-text {\nmin-height:16px;\nheight:100%;\nposition:relative;\nmargin-left:2px;\nwhite-space:nowrap;\n/*border:1px solid red;*/\n}\ndiv.table-image {\n_padding-bottom:2px;\n_height:16px;\n}\n.table-image .table-text {\npadding-left:18px;\n}\n.table-check .table-text {\nmargin-left:16px;\n}\n.table-column-first {\ncolor:black;\nbackground-color:white;\n}\n.table-item-focus .table-column-first {\nbackground-color:#E8F2FE;\n}\n.table-text-inner {\npadding:2px 3px 1px 2px;\nmin-height:14px;\n_height:14px;\n}\n.table-grid-line tbody .table-text-inner {\npadding-top:1px;\npadding-right:2px;\n}\n.table-column-last .table-text-inner {\nwidth:1px;\nheight:1px;\n}\n.table-item-selected .table-column-first .table-text-inner {\ncolor:highlighttext;\nbackground-color:highlight;\n}\n.table-blur .table-item-selected .table-column-first .table-text-inner {\nbackground-color:gray;\n}\n.table-default {\noverflow:hidden;\nposition:absolute;\nbackground-color:white;\n}\n.table-default td {\noverflow:hidden;\n}\n.table-item-default {\ncursor:default;\nwhite-space:nowrap;\nfont-size:9pt;\nfont-family:Arial,sans-serif;\n}\n.table-column-resize {\ntop:1px;\nposition:absolute;\ncursor:e-resize;\nwidth:3px;\nfont-size:0;\nz-index:100;\nbackground-color:red;\nfloat:right;\n}\n.table-full-selection .table-item-focus {\nbackground-color:#E8F2FE;\n}\n.image-p-4, .image-p-5 {\nposition:absolute;\n/*top:50%;\nmargin-top:-0.5em;\n*/\nbottom:50%;\nmargin-bottom:-0.5em;\n}\n.image-p-4 {\nleft:0;\n}\n.image-p-5 {\nleft:50%;\nmargin-left:-0.5em;\n}\n/* default icon size 16x16 */\n.image-n-4, .image-n-5 {\nwidth:16px;\nheight:16px;\nfont-size:16px;\n_font-size:14px;\noverflow:hidden;\n}\n.swt-widgets-table {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.items=null;
this.columns=null;
this.imageList=null;
this.currentItem=null;
this.tbody=null;
this.lastSelection=null;
this.selection=null;
this.lastIndexOf=0;
this.lastWidth=0;
this.customDraw=false;
this.cancelMove=false;
this.dragStarted=false;
this.fixScrollWidth=false;
this.tipRequested=false;
this.wasSelected=false;
this.ignoreActivate=false;
this.ignoreSelect=false;
this.ignoreShrink=false;
this.ignoreResize=false;
this.headerVisible=false;
this.lineVisible=false;
this.tbodyTRTemplate=null;
this.lineWidth=0;
this.focusIndex=-1;
this.focusItem=null;
this.columnMaxWidth=null;
this.tableHandle=null;
this.theadHandle=null;
this.hTableKeyDown=null;
$_Z(this,arguments);
},$wt.widgets,"Table",$wt.widgets.Composite);
$_M(c$,"_getItem",
function(index){
if(this.items[index]!=null)return this.items[index];
return this.items[index]=new $wt.widgets.TableItem(this,0,-1,false);
},"~N");
$_M(c$,"enableWidget",
function(enabled){
$_U(this,$wt.widgets.Table,"enableWidget",[enabled]);
for(var i=0;i<this.items.length;i++){
this.items[i].enableWidget(enabled);
}
},"~B");
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
style|=768;
return $wt.widgets.Widget.checkBits(style,4,2,0,0,0,0);
},"~N");
$_M(c$,"checkData",
function(item,redraw){
if(item.cached)return true;
if((this.style&268435456)!=0){
item.cached=true;
var event=new $wt.widgets.Event();
event.display=this.display;
event.item=item;
this.currentItem=item;
this.sendEvent(36,event);
this.currentItem=null;
if(this.isDisposed()||item.isDisposed())return false;
if(redraw){
if(!this.setScrollWidth(item,false)){
item.redraw();
}}}return true;
},"$wt.widgets.TableItem,~B");
$_M(c$,"clear",
function(index){
var count=this.items.length;
},"~N");
$_M(c$,"clear",
function(start,end){
if(start>end)return;
},"~N,~N");
$_M(c$,"clear",
function(indices){
if(indices.length==0)return;
},"~A");
$_M(c$,"clearAll",
function(){
});
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var width=0;
var height=0;
if(this.items.length==0&&this.columns.length==0){
width=10;
height=2;
}else if(this.columns.length==0){
width=10;
height=2;
height+=14*this.items.length;
height+=(this.getHeaderVisible()?14:0);
var maxWidth=1;
for(var i=0;i<this.items.length;i++){
var text=this.items[i].getText();
if(text!=null){
maxWidth=Math.max(O$.getStringPlainWidth(text),maxWidth);
}}
width+=maxWidth-1;
}else{
width=0;
for(var i=0;i<this.columns.length;i++){
width+=this.columns[i].getWidth();
}
height=2;
height+=14*this.items.length;
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
this.selection=new Array(0);
this.items=new Array(0);
this.columns=new Array(0);
this.columnMaxWidth=$_A(0,0);
this.lineWidth=0;
this.tbody=null;
$_U(this,$wt.widgets.Table,"createHandle",[]);
this.state&=-3;
this.handle.className+=" table-default";
if((this.style&512)!=0&&(this.style&256)!=0){
this.handle.style.overflow="auto";
}else{
if((this.style&512)!=0){
this.handle.className+=" table-v-scroll";
}else if((this.style&256)!=0){
this.handle.className+=" table-h-scroll";
}}this.tableHandle=d$.createElement("TABLE");
var cssTable="table-content";
if((this.style&65536)!=0){
cssTable+=" table-full-selection";
}if((this.style&32)!=0){
cssTable+=" table-check";
}this.tableHandle.className=cssTable;
this.handle.appendChild(this.tableHandle);
this.hTableKeyDown=$_Q((($_D("$wt.widgets.Table$1")?0:org.eclipse.swt.widgets.Table.$Table$1$()),$_N($wt.widgets.Table$1,this,null)));
Clazz.addEvent(this.handle,"keydown",this.hTableKeyDown);
});
$_M(c$,"createCSSElement",
($fz=function(parent,css){
var div=d$.createElement("DIV");
div.className=css;
if(parent!=null){
(parent).appendChild(div);
}return div;
},$fz.isPrivate=true,$fz),"~O,~S");
$_M(c$,"createItem",
function(column,index){
if(this.columns==null){
this.columns=new Array(0);
}if(this.handle==null){
return;
}var table=this.handle.childNodes[0];
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
theadTD.className="table-column-last";
theadTR.appendChild(theadTD);
this.createCSSElement(theadTD,"table-head-text").appendChild(d$.createTextNode("\u00a0"));
}var theadTD=d$.createElement("TD");
theadTD.innerHTML="<div class=\"table-head-text\">&#160;</div>";
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
},"$wt.widgets.TableColumn,~N");
$_M(c$,"createItem",
function(item,index){
if(this.items==null){
this.items=new Array(0);
}item.index=index;
this.items[index]=item;
if(this.handle==null){
return;
}var table=this.handle.childNodes[0];
if(this.tbody==null)for(var i=0;i<table.childNodes.length;i++){
if("TBODY".equals(table.childNodes[i].nodeName)){
this.tbody=table.childNodes[i];
break;
}}
if(this.tbody==null){
this.tbody=d$.createElement("TBODY");
table.appendChild(this.tbody);
}if(this.tbodyTRTemplate==null){
this.tbodyTRTemplate=d$.createElement("TR");
var length=Math.max(1,this.columns.length);
var td=d$.createElement("TD");
td.className="table-column-first";
var str="<div class=\"table-text\">";
var isRTL=(this.style&67108864)!=0;
if((this.style&32)!=0){
var checkClass=(isRTL&&false)?"table-check-box-rtl image-p-4":"table-check-box image-p-4";
str+="<input class=\""+checkClass+"\" type=\"checkbox\"/>";
}str+="<div class=\"table-text-inner\"></div>";
str+="</div>";
this.tbodyTRTemplate.appendChild(td);
td.innerHTML=str;
str="";
for(var i=1;i<length;i++){
td=d$.createElement("TD");
td.innerHTML="<div class=\"table-text-inner\"></div>";
this.tbodyTRTemplate.appendChild(td);
}
td=d$.createElement("TD");
td.className="table-column-last";
td.innerHTML="<div class=\"table-text-inner\"></div>";
this.tbodyTRTemplate.appendChild(td);
}var tbodyTR=this.tbodyTRTemplate.cloneNode(true);
if((this.style&32)!=0){
var nl=tbodyTR.getElementsByTagName("INPUT");
item.check=nl[0];
}if(index==0){
O$.addCSSClass(tbodyTR,"table-row-first");
}if(index<0||index>=this.tbody.childNodes.length){
this.tbody.appendChild(tbodyTR);
this.items[index]=item;
}else{
this.tbody.insertBefore(tbodyTR,this.tbody.childNodes[index]);
for(var i=this.items.length;i>index;i--){
this.items[i]=this.items[i-1];
this.items[i].index=i;
}
this.items[index]=item;
}item.handle=tbodyTR;
},"$wt.widgets.TableItem,~N");
$_M(c$,"createWidget",
function(){
$_U(this,$wt.widgets.Table,"createWidget",[]);
this.items=new Array(0);
this.columns=new Array(0);
if((this.style&268435456)!=0)this.customDraw=true;
});
$_M(c$,"deselect",
function(indices){
if(indices.length==0)return;
for(var i=0;i<indices.length;i++){
if(indices[i]>=0){
this.items[indices[i]].showSelection(false);
}}
this.removeFromSelection(indices);
},"~A");
$_M(c$,"deselect",
function(index){
if(index<0)return;
this.items[index].showSelection(false);
this.removeFromSelection([index]);
},"~N");
$_M(c$,"deselect",
function(start,end){
var count=this.items.length;
if(start==0&&end==count-1){
this.deselectAll();
}else{
start=Math.max(0,start);
var indices=$_A(end-start+1,0);
for(var i=start;i<=end;i++){
this.items[i].showSelection(false);
indices[i-start]=i;
}
this.removeFromSelection(indices);
}},"~N,~N");
$_M(c$,"deselectAll",
function(){
var items=this.getSelection();
for(var i=0;i<items.length;i++){
items[i].showSelection(false);
}
this.selection=new Array(0);
});
$_M(c$,"destroyItem",
function(column){
},"$wt.widgets.TableColumn");
$_M(c$,"destroyItem",
function(item){
},"$wt.widgets.TableItem");
$_M(c$,"fixCheckboxImageList",
function(){
if((this.style&32)==0)return;
});
$_M(c$,"getTextWidth",
function(t){
var columnWidth=0;
if(t==null||t.length==0){
columnWidth=0;
}else{
columnWidth=O$.getStringPlainWidth(t);
}return columnWidth;
},"~S");
$_M(c$,"getColumn",
function(index){
return this.columns[index];
},"~N");
$_M(c$,"getColumnCount",
function(){
if(this.columns==null){
return 0;
}return this.columns.length;
});
$_M(c$,"getColumnOrder",
function(){
return $_A(0,0);
});
$_M(c$,"getColumns",
function(){
var count=this.columns.length;
if(count==1&&this.columns[0]==null)count=0;
var result=new Array(count);
System.arraycopy(this.columns,0,result,0,count);
return result;
});
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
$_M(c$,"getItem",
function(index){
var count=this.items.length;
return this._getItem(index);
},"~N");
$_M(c$,"getItem",
function(point){
return null;
},"$wt.graphics.Point");
$_M(c$,"getItemCount",
function(){
if(this.items==null){
return 0;
}return this.items.length;
});
$_M(c$,"getItemHeight",
function(){
return 16;
});
$_M(c$,"getItems",
function(){
var count=this.items.length;
var result=new Array(count);
if((this.style&268435456)!=0){
for(var i=0;i<count;i++){
result[i]=this._getItem(i);
}
}else{
System.arraycopy(this.items,0,result,0,count);
}return result;
});
$_M(c$,"getLinesVisible",
function(){
return this.lineVisible;
});
$_M(c$,"getSelection",
function(){
return this.selection;
});
$_M(c$,"getSelectionCount",
function(){
return this.selection.length;
});
$_M(c$,"getSelectionIndex",
function(){
if(this.selection.length==0){
return-1;
}return this.indexOf(this.selection[0]);
});
$_M(c$,"getSelectionIndices",
function(){
var result=$_A(this.selection.length,0);
for(var i=0;i<this.selection.length;i++){
result[i]=this.indexOf(this.selection[i]);
}
return result;
});
$_M(c$,"getTopIndex",
function(){
return 0;
});
$_M(c$,"indexOf",
function(column){
var count=this.columns.length;
for(var i=0;i<count;i++){
if(this.columns[i]===column)return i;
}
return-1;
},"$wt.widgets.TableColumn");
$_M(c$,"indexOf",
function(item){
var count=this.items.length;
if(1<=this.lastIndexOf&&this.lastIndexOf<count-1){
if(this.items[this.lastIndexOf]===item)return this.lastIndexOf;
if(this.items[this.lastIndexOf+1]===item)return++this.lastIndexOf;
if(this.items[this.lastIndexOf-1]===item)return--this.lastIndexOf;
}if(this.lastIndexOf<Math.floor(count/2)){
for(var i=0;i<count;i++){
if(this.items[i]===item)return this.lastIndexOf=i;
}
}else{
for(var i=count-1;i>=0;--i){
if(this.items[i]===item)return this.lastIndexOf=i;
}
}return-1;
},"$wt.widgets.TableItem");
$_M(c$,"isSelected",
function(index){
return false;
},"~N");
$_M(c$,"removeItems",
function(indices){
if(indices==null&&indices.length>this.items.length)return;
var table=this.handle.childNodes[0];
var tbody=null;
for(var i=0;i<table.childNodes.length;i++){
if("TBODY".equals(table.childNodes[i].nodeName)){
tbody=table.childNodes[i];
break;
}}
var count=this.items.length;
if(tbody==null)return;
for(var i=0;i<indices.length;i++){
var index=i;
if(index<0||index>=this.items.length)return;
var item=this.items[index];
if(item==null)return;
if(item!=null){
System.arraycopy(this.items,index+1,this.items,index,--count-index);
this.items[count]=null;
}O$.destroyHandle(item.handle);
}
},"~A");
$_M(c$,"releaseHandle",
function(){
if(this.hTableKeyDown!=null){
Clazz.removeEvent(this.handle,"keydown",this.hTableKeyDown);
this.hTableKeyDown=null;
}if(this.tbodyTRTemplate!=null){
O$.deepClearChildren(this.tbodyTRTemplate);
O$.destroyHandle(this.tbodyTRTemplate);
this.tbodyTRTemplate=null;
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
this.currentItem=null;
this.lastSelection=null;
this.selection=null;
$_U(this,$wt.widgets.Table,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
var columnCount=this.columns.length;
if(columnCount==1&&this.columns[0]==null)columnCount=0;
var itemCount=this.items.length;
for(var i=0;i<itemCount;i++){
var item=this.items[i];
if(item!=null&&!item.isDisposed())item.releaseResources();
}
this.customDraw=false;
this.currentItem=null;
this.items=null;
for(var i=0;i<columnCount;i++){
var column=this.columns[i];
if(!column.isDisposed())column.releaseResources();
}
this.columns=null;
if(this.imageList!=null){
this.display.releaseImageList(this.imageList);
}this.imageList=null;
$_U(this,$wt.widgets.Table,"releaseWidget",[]);
});
$_M(c$,"remove",
function(indices){
if(indices.length==0)return;
var newIndices=$_A(indices.length,0);
System.arraycopy(indices,0,newIndices,0,indices.length);
var table=this.handle.childNodes[0];
var tbody=null;
for(var i=0;i<table.childNodes.length;i++){
if("TBODY".equals(table.childNodes[i].nodeName)){
tbody=table.childNodes[i];
break;
}}
if(tbody==null)return;
var start=newIndices[newIndices.length-1];
var end=newIndices[0];
var count=this.items.length;
if(!(0<=start&&start<=end&&end<count)){
return;
}this.deselect(indices);
var newItems=new Array(count-1);
var last=-1;
for(var i=0;i<newIndices.length;i++){
var index=newIndices[i];
if(index!=last){
var item=this.items[index];
if(item!=null){
item.releaseHandle();
System.arraycopy(this.items,0,newItems,0,index);
System.arraycopy(this.items,index+1,newItems,index,--count-index);
this.items=newItems;
last=index;
}}}
},"~A");
$_M(c$,"remove",
function(index){
this.remove([index]);
},"~N");
$_M(c$,"remove",
function(start,end){
if(start>end)return;
var count=this.items.length;
if(!(0<=start&&start<=end&&end<count)){
return;
}var table=this.handle.childNodes[0];
var tbody=null;
for(var i=0;i<table.childNodes.length;i++){
if("TBODY".equals(table.childNodes[i].nodeName)){
tbody=table.childNodes[i];
break;
}}
if(tbody==null)return;
this.deselect(start,end);
var index=start;
while(index<=end){
var item=this.items[index];
if(item!=null&&!item.isDisposed()){
item.releaseHandle();
}index++;
}
var newItems=new Array(count-(index-start));
System.arraycopy(this.items,0,newItems,0,start);
System.arraycopy(this.items,index,newItems,start,count-index);
this.items=newItems;
},"~N,~N");
$_M(c$,"removeAll",
function(){
this.remove(0,this.items.length-1);
});
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"select",
function(indices){
var length=indices.length;
if(length==0||((this.style&4)!=0&&length>1))return;
this.deselectAll();
this.selection=new Array(length);
for(var i=0;i<length;i++){
var index=indices[i];
this.items[index].showSelection(true);
this.selection[i]=this.items[index];
}
var focusIndex=indices[0];
if(focusIndex!=-1)this.setFocusIndex(focusIndex);
},"~A");
$_M(c$,"select",
function(index){
if(index<0)return;
this.deselectAll();
this.items[index].showSelection(true);
this.selection=new Array(1);
this.selection[0]=this.items[index];
this.setFocusIndex(index);
},"~N");
$_M(c$,"select",
function(start,end){
if(end<0||start>end||((this.style&4)!=0&&start!=end))return;
var count=this.items.length;
if(count==0||start>=count)return;
this.deselectAll();
start=Math.max(0,start);
end=Math.min(end,count-1);
if(start==0&&end==count-1){
this.selectAll();
}else{
this.selection=new Array(end-start+1);
for(var i=start;i<=end;i++){
this.items[i].showSelection(true);
this.selection[i-start]=this.items[i];
}
}this.setFocusIndex(start);
},"~N,~N");
$_M(c$,"selectAll",
function(){
if((this.style&4)!=0)return;
this.selection=new Array(this.items.length);
for(var i=0;i<this.items.length;i++){
this.items[i].showSelection(true);
this.selection[i]=this.items[i];
}
});
$_M(c$,"setBounds",
function(x,y,width,height,flags){
var fixResize=false;
if(fixResize)this.setRedraw(false);
$_U(this,$wt.widgets.Table,"setBounds",[x,y,width,height,flags]);
if(fixResize)this.setRedraw(true);
},"~N,~N,~N,~N,~N");
$_M(c$,"setColumnOrder",
function(order){
},"~A");
$_M(c$,"setCheckboxImageListColor",
function(){
if((this.style&32)==0)return;
});
$_M(c$,"setCheckboxImageList",
function(width,height){
if((this.style&32)==0)return;
},"~N,~N");
$_M(c$,"setFocusIndex",
function(index){
if(index<0)return;
if(index==this.focusIndex){
return;
}var item=this.getItem(index);
if(item==null){
return;
}if(this.focusItem!=null){
O$.removeCSSClass(this.focusItem.handle,"table-item-focus");
}this.focusItem=item;
this.focusIndex=index;
O$.addCSSClass(item.handle,"table-item-focus");
},"~N");
$_M(c$,"setFont",
function(font){
var topIndex=this.getTopIndex();
this.setRedraw(false);
this.setTopIndex(0);
$_U(this,$wt.widgets.Table,"setFont",[font]);
this.setTopIndex(topIndex);
this.setScrollWidth(null,true);
this.setRedraw(true);
this.setItemHeight();
},"$wt.graphics.Font");
$_M(c$,"setHeaderVisible",
function(show){
this.headerVisible=show;
if(this.theadHandle!=null){
this.theadHandle.style.display=(show?"":"none");
}},"~B");
$_M(c$,"setItemCount",
function(count){
count=Math.max(0,count);
},"~N");
$_M(c$,"setItemHeight",
function(){
});
$_M(c$,"setLinesVisible",
function(show){
this.lineVisible=show;
O$.updateCSSClass(this.tableHandle,"table-grid-line",show);
},"~B");
$_V(c$,"setRedraw",
function(redraw){
},"~B");
$_M(c$,"setScrollWidth",
function(item,force){
if(this.currentItem!=null){
if(this.currentItem!==item)this.fixScrollWidth=true;
return false;
}return false;
},"$wt.widgets.TableItem,~B");
$_M(c$,"setSelection",
function(indices){
this.deselectAll();
var length=indices.length;
if(length==0||((this.style&4)!=0&&length>1))return;
this.select(indices);
this.showSelection();
},"~A");
$_M(c$,"setSelection",
function(items){
this.deselectAll();
var length=items.length;
if(length==0||((this.style&4)!=0&&length>1))return;
var focusIndex=-1;
this.selection=items;
for(var i=length-1;i>=0;--i){
var index=this.indexOf(items[i]);
items[i].showSelection(true);
if(index!=-1){
focusIndex=index;
}}
if(focusIndex!=-1)this.setFocusIndex(focusIndex);
this.showSelection();
},"~A");
$_M(c$,"setSelection",
function(index){
this.deselectAll();
this.select(index);
},"~N");
$_M(c$,"setSelection",
function(start,end){
this.deselectAll();
if(end<0||start>end||((this.style&4)!=0&&start!=end))return;
var count=this.items.length;
if(count==0||start>=count)return;
start=Math.max(0,start);
end=Math.min(end,count-1);
this.select(start,end);
this.selection=new Array(end-start+1);
for(var i=start;i<=end;i++){
this.selection[i-start]=this.items[i];
}
this.showSelection();
},"~N,~N");
$_M(c$,"setTableEmpty",
function(){
});
$_M(c$,"removeFromSelection",
($fz=function(indices){
if(this.selection.length<indices.length){
return;
}var newSelection=new Array(this.selection.length-indices.length);
var j=0;
for(var i=0;i<indices.length;i++){
if(this.selection[i].isSelected()){
newSelection[j++]=this.selection[i];
}}
this.selection=newSelection;
},$fz.isPrivate=true,$fz),"~A");
$_M(c$,"toggleSelection",
function(item,isCtrlKeyHold,isShiftKeyHold){
if(item==null){
return false;
}if((this.style&2)!=0&&(isCtrlKeyHold||isShiftKeyHold)){
if(isCtrlKeyHold){
for(var i=0;i<this.selection.length;i++){
if(item===this.selection[i]){
var newSelections=new Array(this.selection.length);
for(var j=0;j<i;j++){
newSelections[j]=this.selection[j];
}
for(var j=i;j<this.selection.length-1;j++){
newSelections[j]=this.selection[j+1];
}
this.selection=newSelections;
item.showSelection(false);
this.lastSelection=item;
return false;
}}
this.selection[this.selection.length]=item;
this.lastSelection=item;
item.showSelection(true);
}else{
for(var i=0;i<this.selection.length;i++){
if(this.selection[i]!=null){
this.selection[i].showSelection(false);
}}
if(this.lastSelection!=null){
var idx1=Math.min(this.indexOf(this.lastSelection),this.indexOf(item));
var idx2=Math.max(this.indexOf(this.lastSelection),this.indexOf(item));
this.selection=new Array(0);
for(var i=idx1;i<=idx2;i++){
var ti=this.items[i];
this.selection[this.selection.length]=ti;
ti.showSelection(true);
}
return true;
}else{
if(this.selection.length!=1){
this.selection=new Array(1);
}this.selection[0]=item;
}}}else{
item.showSelection(true);
for(var i=0;i<this.selection.length;i++){
if(this.selection[i]!=null&&this.selection[i]!==item){
this.selection[i].showSelection(false);
}}
if(this.selection.length!=1){
this.selection=new Array(1);
}this.selection[0]=item;
}this.lastSelection=item;
return true;
},"$wt.widgets.TableItem,~B,~B");
$_M(c$,"setTopIndex",
function(index){
},"~N");
$_M(c$,"showColumn",
function(column){
if(column.parent!==this)return;
var index=this.indexOf(column);
if(index==-1)return;
},"$wt.widgets.TableColumn");
$_M(c$,"showItem",
function(index){
},"~N");
$_M(c$,"showItem",
function(item){
var index=this.indexOf(item);
if(index!=-1)this.showItem(index);
},"$wt.widgets.TableItem");
$_M(c$,"showSelection",
function(){
});
$_M(c$,"updateMoveable",
function(){
});
$_V(c$,"_getChildren",
function(){
return new Array(0);
});
$_V(c$,"useNativeScrollBar",
function(){
return true;
});
c$.$Table$1$=function(){
$_H();
c$=$_W($wt.widgets,"Table$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var evt=this.getEvent();
var index=this.b$["$wt.widgets.Table"].focusIndex;
switch(evt.keyCode){
case 13:
var item=this.b$["$wt.widgets.Table"].getItem(index);
if(item==null)return;
this.b$["$wt.widgets.Table"].toggleSelection(item,evt.ctrlKey,evt.shiftKey);
if(item.isSelected()){
var e=new $wt.widgets.Event();
e.display=this.b$["$wt.widgets.Table"].display;
e.type=14;
e.detail=0;
e.item=item;
e.widget=item;
this.b$["$wt.widgets.Table"].sendEvent(e);
this.toReturn(false);
}break;
case 32:
var item2=this.b$["$wt.widgets.Table"].getItem(index);
if(item2==null)return;
this.b$["$wt.widgets.Table"].toggleSelection(item2,evt.ctrlKey,evt.shiftKey);
if(item2.isSelected()){
var eDefault=new $wt.widgets.Event();
eDefault.display=this.b$["$wt.widgets.Table"].display;
eDefault.type=13;
eDefault.detail=0;
eDefault.item=item2;
eDefault.widget=item2;
this.b$["$wt.widgets.Table"].sendEvent(eDefault);
this.toReturn(false);
}break;
case 38:
if(index>0){
this.b$["$wt.widgets.Table"].setFocusIndex(index-1);
this.toReturn(false);
}break;
case 40:
if(index<this.b$["$wt.widgets.Table"].getItemCount()-1){
this.b$["$wt.widgets.Table"].setFocusIndex(index+1);
this.toReturn(false);
}break;
default:
this.toReturn(true);
}
});
c$=$_P();
};
$_S(c$,
"INSET",4,
"GRID_WIDTH",1,
"HEADER_MARGIN",10);
});
$_L(["$wt.internal.dnd.DragAdapter"],"$wt.internal.dnd.TableColumnDND",["$wt.graphics.Point","$wt.internal.browser.OS","$wt.internal.dnd.DNDUtils"],function(){
c$=$_C(function(){
this.sourceX=0;
this.thumb=null;
this.hSelectStart=null;
$_Z(this,arguments);
},$wt.internal.dnd,"TableColumnDND",$wt.internal.dnd.DragAdapter);
$_V(c$,"dragBegan",
function(e){
this.thumb=d$.createElement("DIV");
var cssName=e.sourceElement.className;
this.thumb.className=cssName;
if(cssName!=null&&cssName.indexOf("sash-mouse-down")==-1){
this.thumb.className+=" sash-mouse-down";
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
e.startX=e.currentX;
return true;
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
if(this.hSelectStart!=null){
Clazz.removeEvent(this.thumb,"selectstart",this.hSelectStart);
this.hSelectStart=null;
}d$.body.style.cursor="auto";
O$.destroyHandle(this.thumb);
});
$_M(c$,"currentLocation",
function(e){
var xx=this.sourceX+e.deltaX();
var parentStyle=e.sourceElement.parentNode.style;
var gWidth=parentStyle.width.length>0?Integer.parseInt(parentStyle.width):0;
var style=e.sourceElement.style;
var dWidth=style.width.length>0?Integer.parseInt(style.width):0;
if(xx<0){
xx=0;
}else if(xx>gWidth-dWidth-2){
xx=gWidth-dWidth-2;
}return new $wt.graphics.Point(xx,0);
},"$wt.internal.dnd.DragEvent");
$_V(c$,"dragging",
function(e){
d$.body.style.cursor="e-resize";
this.thumb.style.cursor="e-resize";
this.thumb.style.left=this.currentLocation(e).x+"px";
return true;
},"$wt.internal.dnd.DragEvent");
});
