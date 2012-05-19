﻿/* http://j2s.sf.net/ */$_L(null,"$wt.dnd.DND",["$wt.SWTError","$.SWTException"],function(){
c$=$_T($wt.dnd,"DND");
c$.error=$_M(c$,"error",
function(code){
$wt.dnd.DND.error(code,0);
},"~N");
c$.error=$_M(c$,"error",
function(code,hresult){
switch(code){
case 2000:
{
var msg="Cannot initialize Drag";
if(hresult!=0)msg+=" result = "+hresult;
throw new $wt.SWTError(code,msg);
}case 2001:
{
var msg="Cannot initialize Drop";
if(hresult!=0)msg+=" result = "+hresult;
throw new $wt.SWTError(code,msg);
}case 2002:
{
var msg="Cannot set data in clipboard";
if(hresult!=0)msg+=" result = "+hresult;
throw new $wt.SWTError(code,msg);
}case 2003:
{
var msg="Data does not have correct format for type";
if(hresult!=0)msg+=" result = "+hresult;
throw new $wt.SWTException(code,msg);
}}
{
throw"SWT.error ("+code+")";
}},"~N,~N");
$_S(c$,
"CLIPBOARD",1,
"SELECTION_CLIPBOARD",2,
"DROP_NONE",0,
"DROP_COPY",1,
"DROP_MOVE",2,
"DROP_LINK",4,
"DROP_TARGET_MOVE",8,
"DROP_DEFAULT",16,
"DragEnd",2000,
"DragSetData",2001,
"DragEnter",2002,
"DragLeave",2003,
"DragOver",2004,
"DragOperationChanged",2005,
"Drop",2006,
"DropAccept",2007,
"DragStart",2008,
"FEEDBACK_NONE",0,
"FEEDBACK_SELECT",1,
"FEEDBACK_INSERT_BEFORE",2,
"FEEDBACK_INSERT_AFTER",4,
"FEEDBACK_SCROLL",8,
"FEEDBACK_EXPAND",16,
"ERROR_CANNOT_INIT_DRAG",2000,
"ERROR_CANNOT_INIT_DROP",2001,
"ERROR_CANNOT_SET_CLIPBOARD",2002,
"ERROR_INVALID_DATA",2003,
"INIT_DRAG_MESSAGE","Cannot initialize Drag",
"INIT_DROP_MESSAGE","Cannot initialize Drop",
"CANNOT_SET_CLIPBOARD_MESSAGE","Cannot set data in clipboard",
"INVALID_DATA_MESSAGE","Data does not have correct format for type");
});
$_L(["$wt.widgets.Event"],"$wt.dnd.DNDEvent",null,function(){
c$=$_C(function(){
this.dataType=null;
this.dataTypes=null;
this.operations=0;
this.feedback=0;
$_Z(this,arguments);
},$wt.dnd,"DNDEvent",$wt.widgets.Event);
});
$_L(["$wt.widgets.TypedListener"],"$wt.dnd.DNDListener",["$wt.dnd.DragSourceEvent","$.DropTargetEvent"],function(){
c$=$_T($wt.dnd,"DNDListener",$wt.widgets.TypedListener);
$_V(c$,"handleEvent",
function(e){
switch(e.type){
case 2008:
{
var event=new $wt.dnd.DragSourceEvent(e);
(this.eventListener).dragStart(event);
event.updateEvent(e);
break;
}case 2000:
{
var event=new $wt.dnd.DragSourceEvent(e);
(this.eventListener).dragFinished(event);
event.updateEvent(e);
break;
}case 2001:
{
var event=new $wt.dnd.DragSourceEvent(e);
(this.eventListener).dragSetData(event);
event.updateEvent(e);
break;
}case 2002:
{
var event=new $wt.dnd.DropTargetEvent(e);
(this.eventListener).dragEnter(event);
event.updateEvent(e);
break;
}case 2003:
{
var event=new $wt.dnd.DropTargetEvent(e);
(this.eventListener).dragLeave(event);
event.updateEvent(e);
break;
}case 2004:
{
var event=new $wt.dnd.DropTargetEvent(e);
(this.eventListener).dragOver(event);
event.updateEvent(e);
break;
}case 2006:
{
var event=new $wt.dnd.DropTargetEvent(e);
(this.eventListener).drop(event);
event.updateEvent(e);
break;
}case 2007:
{
var event=new $wt.dnd.DropTargetEvent(e);
(this.eventListener).dropAccept(event);
event.updateEvent(e);
break;
}case 2005:
{
var event=new $wt.dnd.DropTargetEvent(e);
(this.eventListener).dragOperationChanged(event);
event.updateEvent(e);
break;
}}
},"$wt.widgets.Event");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.dnd.DragSourceListener",null,function(){
$_I($wt.dnd,"DragSourceListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.dnd.DragSourceListener"],"$wt.dnd.DragSourceAdapter",null,function(){
c$=$_T($wt.dnd,"DragSourceAdapter",null,$wt.dnd.DragSourceListener);
$_V(c$,"dragStart",
function(event){
},"$wt.dnd.DragSourceEvent");
$_V(c$,"dragFinished",
function(event){
},"$wt.dnd.DragSourceEvent");
$_V(c$,"dragSetData",
function(event){
},"$wt.dnd.DragSourceEvent");
});
$_L(["$wt.events.TypedEvent"],"$wt.dnd.DragSourceEvent",null,function(){
c$=$_C(function(){
this.detail=0;
this.doit=false;
this.dataType=null;
$_Z(this,arguments);
},$wt.dnd,"DragSourceEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.dnd.DragSourceEvent,[e]);
this.data=e.data;
this.detail=e.detail;
this.doit=e.doit;
this.dataType=e.dataType;
},"$wt.dnd.DNDEvent");
$_M(c$,"updateEvent",
function(e){
e.widget=this.widget;
e.time=this.time;
e.data=this.data;
e.detail=this.detail;
e.doit=this.doit;
e.dataType=this.dataType;
},"$wt.dnd.DNDEvent");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.dnd.DropTargetListener",null,function(){
$_I($wt.dnd,"DropTargetListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.dnd.DropTargetListener"],"$wt.dnd.DropTargetAdapter",null,function(){
c$=$_T($wt.dnd,"DropTargetAdapter",null,$wt.dnd.DropTargetListener);
$_V(c$,"dragEnter",
function(event){
},"$wt.dnd.DropTargetEvent");
$_V(c$,"dragLeave",
function(event){
},"$wt.dnd.DropTargetEvent");
$_V(c$,"dragOperationChanged",
function(event){
},"$wt.dnd.DropTargetEvent");
$_V(c$,"dragOver",
function(event){
},"$wt.dnd.DropTargetEvent");
$_V(c$,"drop",
function(event){
},"$wt.dnd.DropTargetEvent");
$_V(c$,"dropAccept",
function(event){
},"$wt.dnd.DropTargetEvent");
});
$_L(["$wt.events.TypedEvent"],"$wt.dnd.DropTargetEvent",null,function(){
c$=$_C(function(){
this.x=0;
this.y=0;
this.detail=0;
this.operations=0;
this.feedback=0;
this.item=null;
this.currentDataType=null;
this.dataTypes=null;
$_Z(this,arguments);
},$wt.dnd,"DropTargetEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.dnd.DropTargetEvent,[e]);
this.data=e.data;
this.x=e.x;
this.y=e.y;
this.detail=e.detail;
this.currentDataType=e.dataType;
this.dataTypes=e.dataTypes;
this.operations=e.operations;
this.feedback=e.feedback;
this.item=e.item;
},"$wt.dnd.DNDEvent");
$_M(c$,"updateEvent",
function(e){
e.widget=this.widget;
e.time=this.time;
e.data=this.data;
e.x=this.x;
e.y=this.y;
e.detail=this.detail;
e.dataType=this.currentDataType;
e.dataTypes=this.dataTypes;
e.operations=this.operations;
e.feedback=this.feedback;
e.item=this.item;
},"$wt.dnd.DNDEvent");
});
c$=$_C(function(){
this.type=0;
this.result=0;
this.pIDataObject=0;
$_Z(this,arguments);
},$wt.dnd,"TransferData");
c$.sameType=$_M(c$,"sameType",
function(data1,data2){
if(data1===data2)return true;
if(data1==null||data2==null)return false;
return(data1.type==data2.type);
},"$wt.dnd.TransferData,$wt.dnd.TransferData");
c$=$_T($wt.dnd,"Transfer");
c$.registerType=$_M(c$,"registerType",
function(formatName){
return 0;
},"~S");
$_M(c$,"validate",
function(object){
return true;
},"~O");
$_L(["$wt.widgets.Widget","$wt.dnd.Transfer"],"$wt.dnd.DragSource",["$wt.dnd.DND","$.DNDListener","$wt.widgets.Listener"],function(){
c$=$_C(function(){
this.control=null;
this.controlListener=null;
this.transferAgents=null;
this.refCount=0;
this.dataEffect=0;
$_Z(this,arguments);
},$wt.dnd,"DragSource",$wt.widgets.Widget);
$_Y(c$,function(){
this.transferAgents=new Array(0);
});
$_K(c$,
function(control,style){
$_R(this,$wt.dnd.DragSource,[control,$wt.dnd.DragSource.checkStyle(style)]);
this.control=control;
if(control.getData("DragSource")!=null){
$wt.dnd.DND.error(2000);
}control.setData("DragSource",this);
this.AddRef();
this.controlListener=(($_D("$wt.dnd.DragSource$1")?0:org.eclipse.swt.dnd.DragSource.$DragSource$1$()),$_N($wt.dnd.DragSource$1,this,null));
control.addListener(12,this.controlListener);
control.addListener(29,this.controlListener);
this.addListener(12,(($_D("$wt.dnd.DragSource$2")?0:org.eclipse.swt.dnd.DragSource.$DragSource$2$()),$_N($wt.dnd.DragSource$2,this,null)));
},"$wt.widgets.Control,~N");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
if(style==0)return 2;
return style;
},"~N");
$_M(c$,"addDragListener",
function(listener){
if(listener==null)$wt.dnd.DND.error(4);
var typedListener=new $wt.dnd.DNDListener(listener);
this.addListener(2008,typedListener);
this.addListener(2001,typedListener);
this.addListener(2000,typedListener);
},"$wt.dnd.DragSourceListener");
$_M(c$,"AddRef",
($fz=function(){
this.refCount++;
return this.refCount;
},$fz.isPrivate=true,$fz));
$_M(c$,"drag",
($fz=function(){
},$fz.isPrivate=true,$fz));
$_M(c$,"getControl",
function(){
return this.control;
});
$_M(c$,"getTransfer",
function(){
return this.transferAgents;
});
$_M(c$,"onDispose",
($fz=function(){
if(this.control==null)return;
if(this.controlListener!=null){
this.control.removeListener(12,this.controlListener);
this.control.removeListener(29,this.controlListener);
}this.controlListener=null;
this.control.setData("DragSource",null);
this.control=null;
this.transferAgents=null;
},$fz.isPrivate=true,$fz));
$_M(c$,"removeDragListener",
function(listener){
if(listener==null)$wt.dnd.DND.error(4);
this.removeListener(2008,listener);
this.removeListener(2001,listener);
this.removeListener(2000,listener);
},"$wt.dnd.DragSourceListener");
$_M(c$,"setTransfer",
function(transferAgents){
this.transferAgents=transferAgents;
},"~A");
c$.$DragSource$1$=function(){
$_H();
c$=$_W($wt.dnd,"DragSource$1",null,$wt.widgets.Listener);
$_V(c$,"handleEvent",
function(event){
if(event.type==12){
if(!this.b$["$wt.dnd.DragSource"].isDisposed()){
this.b$["$wt.dnd.DragSource"].dispose();
}}if(event.type==29){
if(!this.b$["$wt.dnd.DragSource"].isDisposed()){
this.b$["$wt.dnd.DragSource"].drag();
}}},"$wt.widgets.Event");
c$=$_P();
};
c$.$DragSource$2$=function(){
$_H();
c$=$_W($wt.dnd,"DragSource$2",null,$wt.widgets.Listener);
$_V(c$,"handleEvent",
function(e){
this.b$["$wt.dnd.DragSource"].onDispose();
},"$wt.widgets.Event");
c$=$_P();
};
$_S(c$,
"DRAGSOURCEID","DragSource");
c$.CFSTR_PERFORMEDDROPEFFECT=c$.prototype.CFSTR_PERFORMEDDROPEFFECT=$wt.dnd.Transfer.registerType("Performed DropEffect");
});
$_L(["$wt.widgets.Widget"],"$wt.dnd.DropTarget",["java.util.Date","$wt.dnd.DND","$.DNDEvent","$.DNDListener","$.TransferData","$wt.graphics.Point","$wt.widgets.Listener"],function(){
c$=$_C(function(){
this.control=null;
this.controlListener=null;
this.transferAgents=null;
this.selectedDataType=null;
this.selectedOperation=0;
this.keyOperation=-1;
this.iDataObject=0;
this.refCount=0;
$_Z(this,arguments);
},$wt.dnd,"DropTarget",$wt.widgets.Widget);
$_Y(c$,function(){
this.transferAgents=new Array(0);
});
$_K(c$,
function(control,style){
$_R(this,$wt.dnd.DropTarget,[control,$wt.dnd.DropTarget.checkStyle(style)]);
this.control=control;
if(control.getData("DropTarget")!=null){
$wt.dnd.DND.error(2001);
}control.setData("DropTarget",this);
this.AddRef();
this.controlListener=(($_D("$wt.dnd.DropTarget$1")?0:org.eclipse.swt.dnd.DropTarget.$DropTarget$1$()),$_N($wt.dnd.DropTarget$1,this,null));
control.addListener(12,this.controlListener);
this.addListener(12,(($_D("$wt.dnd.DropTarget$2")?0:org.eclipse.swt.dnd.DropTarget.$DropTarget$2$()),$_N($wt.dnd.DropTarget$2,this,null)));
},"$wt.widgets.Control,~N");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
if(style==0)return 2;
return style;
},"~N");
$_M(c$,"addDropListener",
function(listener){
if(listener==null)$wt.dnd.DND.error(4);
var typedListener=new $wt.dnd.DNDListener(listener);
this.addListener(2002,typedListener);
this.addListener(2003,typedListener);
this.addListener(2004,typedListener);
this.addListener(2005,typedListener);
this.addListener(2006,typedListener);
this.addListener(2007,typedListener);
},"$wt.dnd.DropTargetListener");
$_M(c$,"AddRef",
($fz=function(){
this.refCount++;
return this.refCount;
},$fz.isPrivate=true,$fz));
$_M(c$,"getControl",
function(){
return this.control;
});
$_M(c$,"getTransfer",
function(){
return this.transferAgents;
});
$_M(c$,"notifyListeners",
function(eventType,event){
var coordinates=new $wt.graphics.Point(event.x,event.y);
coordinates=this.control.toControl(coordinates);
if($_O(this.control,$wt.widgets.Tree)){
var tree=this.control;
event.item=tree.getItem(coordinates);
if(event.item==null){
var area=tree.getClientArea();
if(area.contains(coordinates)){
for(var x1=area.x;x1<area.x+area.width;x1++){
var pt=new $wt.graphics.Point(x1,coordinates.y);
event.item=tree.getItem(pt);
if(event.item!=null){
break;
}}
}}}if($_O(this.control,$wt.widgets.Table)){
var table=this.control;
event.item=table.getItem(coordinates);
if(event.item==null){
var area=table.getClientArea();
if(area.contains(coordinates)){
for(var x1=area.x;x1<area.x+area.width;x1++){
var pt=new $wt.graphics.Point(x1,coordinates.y);
event.item=table.getItem(pt);
if(event.item!=null){
break;
}}
}}}$_U(this,$wt.dnd.DropTarget,"notifyListeners",[eventType,event]);
},"~N,$wt.widgets.Event");
$_M(c$,"onDispose",
($fz=function(){
if(this.control==null)return;
if(this.controlListener!=null)this.control.removeListener(12,this.controlListener);
this.controlListener=null;
this.control.setData("DropTarget",null);
this.transferAgents=null;
this.control=null;
},$fz.isPrivate=true,$fz));
$_M(c$,"removeDropListener",
function(listener){
if(listener==null)$wt.dnd.DND.error(4);
this.removeListener(2002,listener);
this.removeListener(2003,listener);
this.removeListener(2004,listener);
this.removeListener(2005,listener);
this.removeListener(2006,listener);
this.removeListener(2007,listener);
},"$wt.dnd.DropTargetListener");
$_M(c$,"setTransfer",
function(transferAgents){
if(transferAgents==null)$wt.dnd.DND.error(4);
this.transferAgents=transferAgents;
},"~A");
c$.$DropTarget$1$=function(){
$_H();
c$=$_W($wt.dnd,"DropTarget$1",null,$wt.widgets.Listener);
$_V(c$,"handleEvent",
function(event){
if(!this.b$["$wt.dnd.DropTarget"].isDisposed()){
this.b$["$wt.dnd.DropTarget"].dispose();
}},"$wt.widgets.Event");
c$=$_P();
};
c$.$DropTarget$2$=function(){
$_H();
c$=$_W($wt.dnd,"DropTarget$2",null,$wt.widgets.Listener);
$_V(c$,"handleEvent",
function(event){
this.b$["$wt.dnd.DropTarget"].onDispose();
},"$wt.widgets.Event");
c$=$_P();
};
$_S(c$,
"DROPTARGETID","DropTarget");
});
