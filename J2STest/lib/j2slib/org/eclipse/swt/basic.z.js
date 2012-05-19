﻿/* http://j2s.sf.net/ */$_L(["java.util.EventListener"],"$wt.internal.SWTEventListener",null,function(){
$_I($wt.internal,"SWTEventListener",java.util.EventListener);
});
$_L(["java.util.EventObject"],"$wt.internal.SWTEventObject",null,function(){
c$=$_T($wt.internal,"SWTEventObject",java.util.EventObject);
});
$_L(null,"$wt.widgets.Event",["$wt.graphics.Rectangle"],function(){
c$=$_C(function(){
this.display=null;
this.widget=null;
this.type=0;
this.detail=0;
this.item=null;
this.gc=null;
this.x=0;
this.y=0;
this.width=0;
this.height=0;
this.count=0;
this.time=0;
this.button=0;
this.character=0;
this.keyCode=0;
this.stateMask=0;
this.start=0;
this.end=0;
this.text=null;
this.doit=true;
this.data=null;
$_Z(this,arguments);
},$wt.widgets,"Event");
$_M(c$,"getBounds",
function(){
return new $wt.graphics.Rectangle(this.x,this.y,this.width,this.height);
});
$_M(c$,"setBounds",
function(rect){
this.x=rect.x;
this.y=rect.y;
this.width=rect.width;
this.height=rect.height;
},"$wt.graphics.Rectangle");
$_V(c$,"toString",
function(){
return"Event {type="+this.type+",widget="+this.widget+",x="+this.x+",y="+this.y+",width="+this.width+",height="+this.height+"}";
});
$_M(c$,"releaseResource",
function(){
this.gc=null;
this.data=null;
this.item=null;
this.widget=null;
this.display=null;
});
});
$_L(["$wt.internal.SWTEventObject"],"$wt.events.TypedEvent",null,function(){
c$=$_C(function(){
this.display=null;
this.widget=null;
this.time=0;
this.data=null;
$_Z(this,arguments);
},$wt.events,"TypedEvent",$wt.internal.SWTEventObject);
$_K(c$,
function(e){
$_R(this,$wt.events.TypedEvent,[e.widget]);
this.display=e.display;
this.widget=e.widget;
this.time=e.time;
this.data=e.data;
},"$wt.widgets.Event");
$_M(c$,"getName",
function(){
var string=this.getClass().getName();
var index=string.lastIndexOf('.');
if(index==-1)return string;
return string.substring(index+1,string.length);
});
$_V(c$,"toString",
function(){
return this.getName()+"{"+this.widget+" time="+this.time+" data="+this.data+"}";
});
});
$_L(["$wt.events.TypedEvent"],"$wt.events.ArmEvent",null,function(){
c$=$_T($wt.events,"ArmEvent",$wt.events.TypedEvent);
});
$_L(["$wt.events.TypedEvent"],"$wt.events.ControlEvent",null,function(){
c$=$_T($wt.events,"ControlEvent",$wt.events.TypedEvent);
});
$_L(["$wt.events.TypedEvent"],"$wt.events.DisposeEvent",null,function(){
c$=$_T($wt.events,"DisposeEvent",$wt.events.TypedEvent);
});
$_L(["$wt.events.TypedEvent"],"$wt.events.FocusEvent",null,function(){
c$=$_T($wt.events,"FocusEvent",$wt.events.TypedEvent);
});
$_L(["$wt.events.TypedEvent"],"$wt.events.HelpEvent",null,function(){
c$=$_T($wt.events,"HelpEvent",$wt.events.TypedEvent);
});
$_L(["$wt.events.TypedEvent"],"$wt.events.KeyEvent",null,function(){
c$=$_C(function(){
this.character=0;
this.keyCode=0;
this.stateMask=0;
this.doit=false;
$_Z(this,arguments);
},$wt.events,"KeyEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.KeyEvent,[e]);
this.character=e.character;
this.keyCode=e.keyCode;
this.stateMask=e.stateMask;
this.doit=e.doit;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.KeyEvent,"toString",[]);
return string.substring(0,string.length-1)+" character='"+(((this.character).charCodeAt(0)==0)?"\\0":""+this.character)+"'"+" keyCode="+this.keyCode+" stateMask="+this.stateMask+" doit="+this.doit+"}";
});
});
$_L(["$wt.events.TypedEvent"],"$wt.events.MenuEvent",null,function(){
c$=$_T($wt.events,"MenuEvent",$wt.events.TypedEvent);
});
$_L(["$wt.events.TypedEvent"],"$wt.events.MenuDetectEvent",null,function(){
c$=$_C(function(){
this.x=0;
this.y=0;
this.doit=false;
$_Z(this,arguments);
},$wt.events,"MenuDetectEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.MenuDetectEvent,[e]);
this.x=e.x;
this.y=e.y;
this.doit=e.doit;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.MenuDetectEvent,"toString",[]);
return string.substring(0,string.length-1)+" x="+this.x+" y="+this.y+" doit="+this.doit+"}";
});
});
$_L(["$wt.events.TypedEvent"],"$wt.events.ModifyEvent",null,function(){
c$=$_T($wt.events,"ModifyEvent",$wt.events.TypedEvent);
});
$_L(["$wt.events.TypedEvent"],"$wt.events.MouseEvent",null,function(){
c$=$_C(function(){
this.button=0;
this.stateMask=0;
this.x=0;
this.y=0;
$_Z(this,arguments);
},$wt.events,"MouseEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.MouseEvent,[e]);
this.x=e.x;
this.y=e.y;
this.button=e.button;
this.stateMask=e.stateMask;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.MouseEvent,"toString",[]);
return string.substring(0,string.length-1)+" button="+this.button+" stateMask="+this.stateMask+" x="+this.x+" y="+this.y+"}";
});
});
$_L(["$wt.events.TypedEvent"],"$wt.events.PaintEvent",null,function(){
c$=$_C(function(){
this.gc=null;
this.x=0;
this.y=0;
this.width=0;
this.height=0;
this.count=0;
$_Z(this,arguments);
},$wt.events,"PaintEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.PaintEvent,[e]);
this.gc=e.gc;
this.x=e.x;
this.y=e.y;
this.width=e.width;
this.height=e.height;
this.count=e.count;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.PaintEvent,"toString",[]);
return string.substring(0,string.length-1)+" gc="+this.gc+" x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+" count="+this.count+"}";
});
});
$_L(["$wt.events.TypedEvent"],"$wt.events.SelectionEvent",null,function(){
c$=$_C(function(){
this.item=null;
this.detail=0;
this.x=0;
this.y=0;
this.width=0;
this.height=0;
this.stateMask=0;
this.text=null;
this.doit=false;
$_Z(this,arguments);
},$wt.events,"SelectionEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.SelectionEvent,[e]);
this.item=e.item;
this.x=e.x;
this.y=e.y;
this.width=e.width;
this.height=e.height;
this.detail=e.detail;
this.stateMask=e.stateMask;
this.text=e.text;
this.doit=e.doit;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.SelectionEvent,"toString",[]);
return string.substring(0,string.length-1)+" item="+this.item+" detail="+this.detail+" x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+" stateMask="+this.stateMask+" text="+this.text+" doit="+this.doit+"}";
});
});
$_L(["$wt.events.TypedEvent"],"$wt.events.ShellEvent",null,function(){
c$=$_C(function(){
this.doit=false;
$_Z(this,arguments);
},$wt.events,"ShellEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.ShellEvent,[e]);
this.doit=e.doit;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.ShellEvent,"toString",[]);
return string.substring(0,string.length-1)+" doit="+this.doit+"}";
});
});
$_L(["$wt.events.KeyEvent"],"$wt.events.TraverseEvent",null,function(){
c$=$_C(function(){
this.detail=0;
$_Z(this,arguments);
},$wt.events,"TraverseEvent",$wt.events.KeyEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.TraverseEvent,[e]);
this.detail=e.detail;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.TraverseEvent,"toString",[]);
return string.substring(0,string.length-1)+" detail="+this.detail+"}";
});
});
$_L(["$wt.events.SelectionEvent"],"$wt.events.TreeEvent",null,function(){
c$=$_T($wt.events,"TreeEvent",$wt.events.SelectionEvent);
});
$_L(["$wt.events.KeyEvent"],"$wt.events.VerifyEvent",null,function(){
c$=$_C(function(){
this.start=0;
this.end=0;
this.text=null;
$_Z(this,arguments);
},$wt.events,"VerifyEvent",$wt.events.KeyEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.VerifyEvent,[e]);
this.character=e.character;
this.keyCode=e.keyCode;
this.stateMask=e.stateMask;
this.start=e.start;
this.end=e.end;
this.text=e.text;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.VerifyEvent,"toString",[]);
return string.substring(0,string.length-1)+" start="+this.start+" end="+this.end+" text="+this.text+"}";
});
});
$_I($wt.widgets,"Listener");
$_L(["$wt.widgets.Listener"],"$wt.widgets.TypedListener",["$wt.events.ArmEvent","$.ControlEvent","$.DisposeEvent","$.FocusEvent","$.HelpEvent","$.KeyEvent","$.MenuDetectEvent","$.MenuEvent","$.ModifyEvent","$.MouseEvent","$.PaintEvent","$.SelectionEvent","$.ShellEvent","$.TraverseEvent","$.TreeEvent","$.VerifyEvent"],function(){
c$=$_C(function(){
this.eventListener=null;
$_Z(this,arguments);
},$wt.widgets,"TypedListener",null,$wt.widgets.Listener);
$_K(c$,
function(listener){
this.eventListener=listener;
},"$wt.internal.SWTEventListener");
$_M(c$,"getEventListener",
function(){
return this.eventListener;
});
$_V(c$,"handleEvent",
function(e){
var eventListener=this.eventListener;
switch(e.type){
case 9:
{
var event=new $wt.events.PaintEvent(e);
(eventListener).paintControl(event);
e.gc=event.gc;
break;
}case 13:
{
var event=new $wt.events.SelectionEvent(e);
(eventListener).widgetSelected(event);
e.x=event.x;
e.y=event.y;
e.doit=event.doit;
break;
}case 14:
{
(eventListener).widgetDefaultSelected(new $wt.events.SelectionEvent(e));
break;
}case 12:
{
(eventListener).widgetDisposed(new $wt.events.DisposeEvent(e));
break;
}case 15:
{
(eventListener).focusGained(new $wt.events.FocusEvent(e));
break;
}case 16:
{
(eventListener).focusLost(new $wt.events.FocusEvent(e));
break;
}case 23:
{
(eventListener).menuHidden(new $wt.events.MenuEvent(e));
break;
}case 22:
{
(eventListener).menuShown(new $wt.events.MenuEvent(e));
break;
}case 1:
{
var event=new $wt.events.KeyEvent(e);
(eventListener).keyPressed(event);
e.doit=event.doit;
break;
}case 2:
{
var event=new $wt.events.KeyEvent(e);
(eventListener).keyReleased(event);
e.doit=event.doit;
break;
}case 35:
{
var event=new $wt.events.MenuDetectEvent(e);
(eventListener).menuDetected(event);
e.x=event.x;
e.y=event.y;
e.doit=event.doit;
break;
}case 3:
{
(eventListener).mouseDown(new $wt.events.MouseEvent(e));
break;
}case 4:
{
(eventListener).mouseUp(new $wt.events.MouseEvent(e));
break;
}case 8:
{
(eventListener).mouseDoubleClick(new $wt.events.MouseEvent(e));
break;
}case 5:
{
(eventListener).mouseMove(new $wt.events.MouseEvent(e));
return;
}case 11:
{
(eventListener).controlResized(new $wt.events.ControlEvent(e));
break;
}case 10:
{
(eventListener).controlMoved(new $wt.events.ControlEvent(e));
break;
}case 21:
{
var event=new $wt.events.ShellEvent(e);
(eventListener).shellClosed(event);
e.doit=event.doit;
break;
}case 26:
{
(eventListener).shellActivated(new $wt.events.ShellEvent(e));
break;
}case 27:
{
(eventListener).shellDeactivated(new $wt.events.ShellEvent(e));
break;
}case 19:
{
(eventListener).shellIconified(new $wt.events.ShellEvent(e));
break;
}case 20:
{
(eventListener).shellDeiconified(new $wt.events.ShellEvent(e));
break;
}case 17:
{
(eventListener).treeExpanded(new $wt.events.TreeEvent(e));
break;
}case 18:
{
(eventListener).treeCollapsed(new $wt.events.TreeEvent(e));
break;
}case 24:
{
(eventListener).modifyText(new $wt.events.ModifyEvent(e));
break;
}case 25:
{
var event=new $wt.events.VerifyEvent(e);
(eventListener).verifyText(event);
e.text=event.text;
e.doit=event.doit;
break;
}case 28:
{
(eventListener).helpRequested(new $wt.events.HelpEvent(e));
break;
}case 30:
{
(eventListener).widgetArmed(new $wt.events.ArmEvent(e));
break;
}case 7:
{
(eventListener).mouseExit(new $wt.events.MouseEvent(e));
break;
}case 6:
{
(eventListener).mouseEnter(new $wt.events.MouseEvent(e));
break;
}case 32:
{
(eventListener).mouseHover(new $wt.events.MouseEvent(e));
break;
}case 31:
{
var event=new $wt.events.TraverseEvent(e);
(eventListener).keyTraversed(event);
e.detail=event.detail;
e.doit=event.doit;
break;
}}
},"$wt.widgets.Event");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.ArmListener",null,function(){
$_I($wt.events,"ArmListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.ControlListener",null,function(){
$_I($wt.events,"ControlListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.events.ControlListener"],"$wt.events.ControlAdapter",null,function(){
c$=$_T($wt.events,"ControlAdapter",null,$wt.events.ControlListener);
$_V(c$,"controlMoved",
function(e){
},"$wt.events.ControlEvent");
$_V(c$,"controlResized",
function(e){
},"$wt.events.ControlEvent");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.DisposeListener",null,function(){
$_I($wt.events,"DisposeListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.FocusListener",null,function(){
$_I($wt.events,"FocusListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.events.FocusListener"],"$wt.events.FocusAdapter",null,function(){
c$=$_T($wt.events,"FocusAdapter",null,$wt.events.FocusListener);
$_V(c$,"focusGained",
function(e){
},"$wt.events.FocusEvent");
$_V(c$,"focusLost",
function(e){
},"$wt.events.FocusEvent");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.HelpListener",null,function(){
$_I($wt.events,"HelpListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.KeyListener",null,function(){
$_I($wt.events,"KeyListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.events.KeyListener"],"$wt.events.KeyAdapter",null,function(){
c$=$_T($wt.events,"KeyAdapter",null,$wt.events.KeyListener);
$_V(c$,"keyPressed",
function(e){
},"$wt.events.KeyEvent");
$_V(c$,"keyReleased",
function(e){
},"$wt.events.KeyEvent");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.MenuListener",null,function(){
$_I($wt.events,"MenuListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.events.MenuListener"],"$wt.events.MenuAdapter",null,function(){
c$=$_T($wt.events,"MenuAdapter",null,$wt.events.MenuListener);
$_V(c$,"menuHidden",
function(e){
},"$wt.events.MenuEvent");
$_V(c$,"menuShown",
function(e){
},"$wt.events.MenuEvent");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.MenuDetectListener",null,function(){
$_I($wt.events,"MenuDetectListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.ModifyListener",null,function(){
$_I($wt.events,"ModifyListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.MouseListener",null,function(){
$_I($wt.events,"MouseListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.events.MouseListener"],"$wt.events.MouseAdapter",null,function(){
c$=$_T($wt.events,"MouseAdapter",null,$wt.events.MouseListener);
$_V(c$,"mouseDoubleClick",
function(e){
},"$wt.events.MouseEvent");
$_V(c$,"mouseDown",
function(e){
},"$wt.events.MouseEvent");
$_V(c$,"mouseUp",
function(e){
},"$wt.events.MouseEvent");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.MouseMoveListener",null,function(){
$_I($wt.events,"MouseMoveListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.MouseTrackListener",null,function(){
$_I($wt.events,"MouseTrackListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.events.MouseTrackListener"],"$wt.events.MouseTrackAdapter",null,function(){
c$=$_T($wt.events,"MouseTrackAdapter",null,$wt.events.MouseTrackListener);
$_V(c$,"mouseEnter",
function(e){
},"$wt.events.MouseEvent");
$_V(c$,"mouseExit",
function(e){
},"$wt.events.MouseEvent");
$_V(c$,"mouseHover",
function(e){
},"$wt.events.MouseEvent");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.PaintListener",null,function(){
$_I($wt.events,"PaintListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.SelectionListener",null,function(){
$_I($wt.events,"SelectionListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.events.SelectionListener"],"$wt.events.SelectionAdapter",null,function(){
c$=$_T($wt.events,"SelectionAdapter",null,$wt.events.SelectionListener);
$_V(c$,"widgetSelected",
function(e){
},"$wt.events.SelectionEvent");
$_V(c$,"widgetDefaultSelected",
function(e){
},"$wt.events.SelectionEvent");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.ShellListener",null,function(){
$_I($wt.events,"ShellListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.events.ShellListener"],"$wt.events.ShellAdapter",null,function(){
c$=$_T($wt.events,"ShellAdapter",null,$wt.events.ShellListener);
$_V(c$,"shellActivated",
function(e){
},"$wt.events.ShellEvent");
$_V(c$,"shellClosed",
function(e){
},"$wt.events.ShellEvent");
$_V(c$,"shellDeactivated",
function(e){
},"$wt.events.ShellEvent");
$_V(c$,"shellDeiconified",
function(e){
},"$wt.events.ShellEvent");
$_V(c$,"shellIconified",
function(e){
},"$wt.events.ShellEvent");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.TraverseListener",null,function(){
$_I($wt.events,"TraverseListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.TreeListener",null,function(){
$_I($wt.events,"TreeListener",$wt.internal.SWTEventListener);
});
$_L(["$wt.events.TreeListener"],"$wt.events.TreeAdapter",null,function(){
c$=$_T($wt.events,"TreeAdapter",null,$wt.events.TreeListener);
$_V(c$,"treeCollapsed",
function(e){
},"$wt.events.TreeEvent");
$_V(c$,"treeExpanded",
function(e){
},"$wt.events.TreeEvent");
});
$_L(["$wt.internal.SWTEventListener"],"$wt.events.VerifyListener",null,function(){
$_I($wt.events,"VerifyListener",$wt.internal.SWTEventListener);
});
c$=$_C(function(){
this.types=null;
this.listeners=null;
this.level=0;
$_Z(this,arguments);
},$wt.widgets,"EventTable");
$_M(c$,"hook",
function(eventType,listener){
if(this.types==null)this.types=$_A(4,0);
if(this.listeners==null)this.listeners=new Array(4);
var length=this.types.length;
var index=length-1;
while(index>=0){
if(this.types[index]!=0)break;
--index;
}
index++;
if(index==length){
var newTypes=$_A(length+4,0);
System.arraycopy(this.types,0,newTypes,0,length);
this.types=newTypes;
var newListeners=new Array(length+4);
System.arraycopy(this.listeners,0,newListeners,0,length);
this.listeners=newListeners;
}this.types[index]=eventType;
this.listeners[index]=listener;
},"~N,$wt.widgets.Listener");
$_M(c$,"hooks",
function(eventType){
if(this.types==null)return false;
for(var i=0;i<this.types.length;i++){
if(this.types[i]==eventType)return true;
}
return false;
},"~N");
$_M(c$,"sendEvent",
function(event){
if(this.types==null)return;
this.level+=this.level>=0?1:-1;
try{
for(var i=0;i<this.types.length;i++){
if(event.type==0)return;
if(this.types[i]==event.type){
var listener=this.listeners[i];
if(listener!=null)listener.handleEvent(event);
}}
}finally{
var compact=this.level<0;
this.level-=this.level>=0?1:-1;
if(compact&&this.level==0){
var index=0;
for(var i=0;i<this.types.length;i++){
if(this.types[i]!=0){
this.types[index]=this.types[i];
this.listeners[index]=this.listeners[i];
index++;
}}
for(var i=index;i<this.types.length;i++){
this.types[i]=0;
this.listeners[i]=null;
}
}}
},"$wt.widgets.Event");
$_M(c$,"size",
function(){
if(this.types==null)return 0;
var count=0;
for(var i=0;i<this.types.length;i++){
if(this.types[i]!=0)count++;
}
return count;
});
$_M(c$,"remove",
function(index){
if(this.level==0){
var end=this.types.length-1;
System.arraycopy(this.types,index+1,this.types,index,end-index);
System.arraycopy(this.listeners,index+1,this.listeners,index,end-index);
index=end;
}else{
if(this.level>0)this.level=-this.level;
}this.types[index]=0;
this.listeners[index]=null;
},"~N");
$_M(c$,"unhook",
function(eventType,listener){
if(this.types==null)return;
for(var i=0;i<this.types.length;i++){
if(this.types[i]==eventType&&this.listeners[i]===listener){
this.remove(i);
return;
}}
},"~N,$wt.widgets.Listener");
$_M(c$,"unhook",
function(eventType,listener){
if(this.types==null)return;
for(var i=0;i<this.types.length;i++){
if(this.types[i]==eventType){
if($_O(this.listeners[i],$wt.widgets.TypedListener)){
var typedListener=this.listeners[i];
if(typedListener.getEventListener()===listener){
this.remove(i);
return;
}}}}
},"~N,$wt.internal.SWTEventListener");
$_M(c$,"releaseResource",
function(){
if(this.listeners!=null){
for(var i=0;i<this.listeners.length;i++){
this.listeners[i]=null;
}
this.listeners=null;
}});
$_I($wt.internal,"SerializableCompatibility",java.io.Serializable);
$_I($wt.internal,"CloneableCompatibility",Cloneable);
c$=$_C(function(){
this.returnSet=0;
this.returnBoolean=false;
this.returnNumber=0;
this.returnObject=null;
this.event=null;
$_Z(this,arguments);
},$wt.internal,"RunnableCompatibility",null,Runnable);
$_M(c$,"getEvent",
function(){
return this.event;
});
$_M(c$,"setEvent",
function(event){
this.event=event;
},"~O");
$_M(c$,"toReturn",
function(val){
this.returnSet=1;
this.returnNumber=val;
this.returnObject=null;
},"~N");
$_M(c$,"toReturn",
function(val){
this.returnSet=2;
this.returnBoolean=val;
this.returnNumber=0;
this.returnObject=null;
},"~B");
$_M(c$,"toReturn",
function(val){
this.returnSet=3;
this.returnObject=val;
this.returnNumber=0;
this.returnBoolean=false;
},"~O");
$_M(c$,"isReturned",
function(){
return this.returnSet!=0;
});
c$=$_C(function(){
this.target=null;
this.x=0;
this.y=0;
this.leftButtonHold=false;
this.event=null;
this.type=0;
$_Z(this,arguments);
},$wt.internal.dnd,"HTMLEventWrapper");
$_K(c$,
function(event){
this.event=event;
this.wrapEvent(event);
},"~O");
$_M(c$,"wrapEvent",
function(a){
var e=a;
this.target=null;
this.x=0;
this.y=0;
this.leftButtonHold=true;
this.event=null;
this.type=0;


if(!e||(window["O$"]!=null&&O$.isIE)){
e=window.event;
this.stopPropagation=function(){
this.event.cancelBubble=true;
};
this.preventDefault=function(){
this.event.returnValue=false;
};
}else{
this.stopPropagation=function(){
this.event.stopPropagation();
};
this.preventDefault=function(){
this.event.preventDefault();
};
}
this.event=e;
this.type=e.type;
if(e.target){
this.target=e.target;
}else if(e.srcElement){
this.target=e.srcElement;
}
if(e.pageX||e.pageY){
this.x=e.pageX;
this.y=e.pageY;
}else if(e.clientX||e.clientY){
this.x=e.clientX+document.body.scrollLeft;
this.y=e.clientY+document.body.scrollTop;
}
if(e.which){
this.leftButtonHold=(e.which==1);
if(e.which==19||e.which==65536||e.which>8){
this.leftButtonHold=(org.eclipse.swt.internal.dnd.HTMLEventWrapper.mozLastButton==1);
}else{
org.eclipse.swt.internal.dnd.HTMLEventWrapper.mozLastButton=e.which;
}
}else if(e.button){
this.leftButtonHold=(e.button==1);
}
},"~O");
$_M(c$,"stopPropagation",
function(){
});
$_M(c$,"preventDefault",
function(){
});

org.eclipse.swt.internal.dnd.HTMLEventWrapper.mozLastButton=0;
$_I($wt.internal.dnd,"DragListener");
$_L(["$wt.internal.dnd.DragListener"],"$wt.internal.dnd.DragAdapter",null,function(){
c$=$_T($wt.internal.dnd,"DragAdapter",null,$wt.internal.dnd.DragListener);
$_V(c$,"dragBegan",
function(e){
return true;
},"$wt.internal.dnd.DragEvent");
$_V(c$,"dragCanceled",
function(e){
return true;
},"$wt.internal.dnd.DragEvent");
$_V(c$,"dragEnded",
function(e){
return true;
},"$wt.internal.dnd.DragEvent");
$_V(c$,"dragging",
function(e){
return true;
},"$wt.internal.dnd.DragEvent");
$_V(c$,"isDraggable",
function(e){
return true;
},"$wt.internal.dnd.HTMLEventWrapper");
});
c$=$_C(function(){
this.event=null;
this.sourceElement=null;
this.startX=0;
this.startY=0;
this.currentX=0;
this.currentY=0;
$_Z(this,arguments);
},$wt.internal.dnd,"DragEvent");
$_K(c$,
function(evt,src,x,y){
this.event=evt;
this.sourceElement=src;
this.startX=x;
this.startY=y;
},"$wt.internal.dnd.HTMLEventWrapper,Element,~N,~N");
$_M(c$,"deltaX",
function(){
return this.currentX-this.startX;
});
$_M(c$,"deltaY",
function(){
return this.currentY-this.startY;
});
$_M(c$,"mouseMoveTo",
function(currentX,currentY){
this.currentX=currentX;
this.currentY=currentY;
},"~N,~N");
$_V(c$,"toString",
function(){
return"DragEvent {"+this.sourceElement+"#"+"("+this.startX+","+this.startY+")->"+"("+this.currentX+","+this.currentY+")}";
});
c$=$_C(function(){
this.hwnd=null;
this.hwndInsertAfter=null;
this.x=0;
this.y=0;
this.cx=0;
this.cy=0;
this.flags=0;
$_Z(this,arguments);
},$wt.internal.struct,"WINDOWPOS");
$_S(c$,
"sizeof",28);
c$=$_C(function(){
this.defer=false;
this.control=null;
this.type=0;
this.data=null;
$_Z(this,arguments);
},$wt.internal.struct,"MESSAGE");
$_K(c$,
function(control,type,data){
this.control=control;
this.type=type;
this.data=data;
},"$wt.widgets.Control,~N,~O");
$_S(c$,
"CONTROL_RESIZE",1,
"CONTROL_LAYOUT",2);
c$=$_C(function(){
this.accessibleListeners=null;
this.accessibleControlListeners=null;
this.textListeners=null;
this.control=null;
$_Z(this,arguments);
},$wt.accessibility,"Accessible");
$_Y(c$,function(){
this.accessibleListeners=new Array(0);
this.accessibleControlListeners=new Array(0);
this.textListeners=new Array(0);
});
$_K(c$,
function(control){
this.control=control;
},"$wt.widgets.Control");
$_M(c$,"addElement",
($fz=function(arr,element){
for(var i=0;i<arr.length;i++){
if(arr[i]===element){
return;
}}
for(var i=0;i<arr.length;i++){
if(arr[i]==null){
arr[i]=element;
return;
}}
arr[arr.length]=element;
},$fz.isPrivate=true,$fz),"~A,~O");
$_M(c$,"removeElement",
($fz=function(arr,element){
for(var i=0;i<arr.length;i++){
if(arr[i]===element){
arr[i]=null;
return;
}}
},$fz.isPrivate=true,$fz),"~A,~O");
$_M(c$,"addAccessibleListener",
function(listener){
this.addElement(this.accessibleListeners,listener);
},"$wt.accessibility.AccessibleListener");
$_M(c$,"addAccessibleControlListener",
function(listener){
this.addElement(this.accessibleControlListeners,listener);
},"$wt.accessibility.AccessibleControlListener");
$_M(c$,"addAccessibleTextListener",
function(listener){
this.addElement(this.textListeners,listener);
},"$wt.accessibility.AccessibleTextListener");
$_M(c$,"getControl",
function(){
return this.control;
});
$_M(c$,"removeAccessibleListener",
function(listener){
this.removeElement(this.accessibleListeners,listener);
},"$wt.accessibility.AccessibleListener");
$_M(c$,"removeAccessibleControlListener",
function(listener){
this.removeElement(this.accessibleControlListeners,listener);
},"$wt.accessibility.AccessibleControlListener");
$_M(c$,"removeAccessibleTextListener",
function(listener){
this.removeElement(this.textListeners,listener);
},"$wt.accessibility.AccessibleTextListener");
$_M(c$,"selectionChanged",
function(){
});
$_M(c$,"setFocus",
function(childID){
},"~N");
$_M(c$,"textCaretMoved",
function(index){
},"~N");
$_M(c$,"textChanged",
function(type,startIndex,length){
},"~N,~N,~N");
$_M(c$,"textSelectionChanged",
function(){
});
$_L(["$wt.internal.SerializableCompatibility"],"$wt.graphics.Point",null,function(){
c$=$_C(function(){
this.x=0;
this.y=0;
$_Z(this,arguments);
},$wt.graphics,"Point",null,$wt.internal.SerializableCompatibility);
$_K(c$,
function(x,y){
this.x=x;
this.y=y;
},"~N,~N");
$_V(c$,"equals",
function(object){
if(object===this)return true;
if(!($_O(object,$wt.graphics.Point)))return false;
var p=object;
return(p.x==this.x)&&(p.y==this.y);
},"~O");
$_V(c$,"hashCode",
function(){
return this.x^this.y;
});
$_V(c$,"toString",
function(){
return"Point {"+this.x+", "+this.y+"}";
});
});
$_L(["$wt.internal.SerializableCompatibility"],"$wt.graphics.Rectangle",null,function(){
c$=$_C(function(){
this.x=0;
this.y=0;
this.width=0;
this.height=0;
$_Z(this,arguments);
},$wt.graphics,"Rectangle",null,$wt.internal.SerializableCompatibility);
$_K(c$,
function(x,y,width,height){
this.x=x;
this.y=y;
this.width=width;
this.height=height;
},"~N,~N,~N,~N");
$_M(c$,"add",
function(rect){
var left=this.x<rect.x?this.x:rect.x;
var top=this.y<rect.y?this.y:rect.y;
var lhs=this.x+this.width;
var rhs=rect.x+rect.width;
var right=lhs>rhs?lhs:rhs;
lhs=this.y+this.height;
rhs=rect.y+rect.height;
var bottom=lhs>rhs?lhs:rhs;
this.x=left;
this.y=top;
this.width=right-left;
this.height=bottom-top;
},"$wt.graphics.Rectangle");
$_M(c$,"contains",
function(x,y){
return(x>=this.x)&&(y>=this.y)&&((x-this.x)<this.width)&&((y-this.y)<this.height);
},"~N,~N");
$_M(c$,"contains",
function(pt){
return this.contains(pt.x,pt.y);
},"$wt.graphics.Point");
$_V(c$,"equals",
function(object){
if(object===this)return true;
if(!($_O(object,$wt.graphics.Rectangle)))return false;
var r=object;
return(r.x==this.x)&&(r.y==this.y)&&(r.width==this.width)&&(r.height==this.height);
},"~O");
$_V(c$,"hashCode",
function(){
return this.x^this.y^this.width^this.height;
});
$_M(c$,"intersect",
function(rect){
if(this===rect)return;
var left=this.x>rect.x?this.x:rect.x;
var top=this.y>rect.y?this.y:rect.y;
var lhs=this.x+this.width;
var rhs=rect.x+rect.width;
var right=lhs<rhs?lhs:rhs;
lhs=this.y+this.height;
rhs=rect.y+rect.height;
var bottom=lhs<rhs?lhs:rhs;
this.x=right<left?0:left;
this.y=bottom<top?0:top;
this.width=right<left?0:right-left;
this.height=bottom<top?0:bottom-top;
},"$wt.graphics.Rectangle");
$_M(c$,"intersection",
function(rect){
if(this===rect)return new $wt.graphics.Rectangle(this.x,this.y,this.width,this.height);
var left=this.x>rect.x?this.x:rect.x;
var top=this.y>rect.y?this.y:rect.y;
var lhs=this.x+this.width;
var rhs=rect.x+rect.width;
var right=lhs<rhs?lhs:rhs;
lhs=this.y+this.height;
rhs=rect.y+rect.height;
var bottom=lhs<rhs?lhs:rhs;
return new $wt.graphics.Rectangle(right<left?0:left,bottom<top?0:top,right<left?0:right-left,bottom<top?0:bottom-top);
},"$wt.graphics.Rectangle");
$_M(c$,"intersects",
function(x,y,width,height){
return(x<this.x+this.width)&&(y<this.y+this.height)&&(x+width>this.x)&&(y+height>this.y);
},"~N,~N,~N,~N");
$_M(c$,"intersects",
function(rect){
return rect===this||this.intersects(rect.x,rect.y,rect.width,rect.height);
},"$wt.graphics.Rectangle");
$_M(c$,"isEmpty",
function(){
return(this.width<=0)||(this.height<=0);
});
$_V(c$,"toString",
function(){
return"Rectangle {"+this.x+", "+this.y+", "+this.width+", "+this.height+"}";
});
$_M(c$,"union",
function(rect){
var left=this.x<rect.x?this.x:rect.x;
var top=this.y<rect.y?this.y:rect.y;
var lhs=this.x+this.width;
var rhs=rect.x+rect.width;
var right=lhs>rhs?lhs:rhs;
lhs=this.y+this.height;
rhs=rect.y+rect.height;
var bottom=lhs>rhs?lhs:rhs;
return new $wt.graphics.Rectangle(left,top,right-left,bottom-top);
},"$wt.graphics.Rectangle");
});
$_L(["$wt.internal.SerializableCompatibility"],"$wt.graphics.RGB",null,function(){
c$=$_C(function(){
this.red=0;
this.green=0;
this.blue=0;
$_Z(this,arguments);
},$wt.graphics,"RGB",null,$wt.internal.SerializableCompatibility);
$_K(c$,
function(red,green,blue){
this.red=red;
this.green=green;
this.blue=blue;
},"~N,~N,~N");
$_V(c$,"equals",
function(object){
if(object===this)return true;
if(!($_O(object,$wt.graphics.RGB)))return false;
var rgb=object;
return(rgb.red==this.red)&&(rgb.green==this.green)&&(rgb.blue==this.blue);
},"~O");
$_V(c$,"hashCode",
function(){
return(this.blue<<16)|(this.green<<8)|this.red;
});
$_V(c$,"toString",
function(){
return"RGB {"+this.red+", "+this.green+", "+this.blue+"}";
});
});
c$=$_C(function(){
this.device=null;
$_Z(this,arguments);
},$wt.graphics,"Resource");
$_L(["$wt.graphics.Resource"],"$wt.graphics.Color",["$wt.graphics.Device","$.RGB"],function(){
c$=$_C(function(){
this.handle=0;
this.cssHandle=null;
$_Z(this,arguments);
},$wt.graphics,"Color",$wt.graphics.Resource);
$_K(c$,
function(device,red,green,blue){
$_R(this,$wt.graphics.Color,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.init(device,red,green,blue);
},"$wt.graphics.Device,~N,~N,~N");
$_K(c$,
function(device,rgb){
$_R(this,$wt.graphics.Color,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.init(device,rgb.red,rgb.green,rgb.blue);
},"$wt.graphics.Device,$wt.graphics.RGB");
$_V(c$,"dispose",
function(){
if(this.handle==-1)return;
if(this.device.isDisposed())return;
this.handle=-1;
this.cssHandle=null;
this.device=null;
});
$_V(c$,"equals",
function(object){
if(object===this)return true;
if(!($_O(object,$wt.graphics.Color)))return false;
var color=object;
if(this.device!==color.device)return false;
if(this.cssHandle!=null&&color.cssHandle!=null){
return this.cssHandle===color.cssHandle;
}else if(this.cssHandle!=null){
return(this.rgbHandleFromCSS(this.cssHandle)&0xFFFFFF)==(color.handle&0xFFFFFF);
}else if(color.cssHandle!=null){
return(this.rgbHandleFromCSS(color.cssHandle)&0xFFFFFF)==(this.handle&0xFFFFFF);
}else{
return(this.handle&0xFFFFFF)==(color.handle&0xFFFFFF);
}},"~O");
$_M(c$,"getBlue",
function(){
if(this.handle<0)this.handle=this.rgbHandleFromCSS(this.cssHandle);
return(this.handle&0xFF0000)>>16;
});
$_M(c$,"getGreen",
function(){
if(this.handle<0)this.handle=this.rgbHandleFromCSS(this.cssHandle);
return(this.handle&0xFF00)>>8;
});
$_M(c$,"getRed",
function(){
if(this.handle<0)this.handle=this.rgbHandleFromCSS(this.cssHandle);
return this.handle&0xFF;
});
$_M(c$,"getRGB",
function(){
if(this.handle<0)this.handle=this.rgbHandleFromCSS(this.cssHandle);
return new $wt.graphics.RGB(this.handle&0xFF,(this.handle&0xFF00)>>8,(this.handle&0xFF0000)>>16);
});
$_V(c$,"hashCode",
function(){
return this.handle;
});
$_M(c$,"init",
function(device,red,green,blue){
this.device=device;
this.handle=0x02000000|(red&0xFF)|((green&0xFF)<<8)|((blue&0xFF)<<16);
this.cssHandle=null;
},"$wt.graphics.Device,~N,~N,~N");
$_V(c$,"isDisposed",
function(){
return this.handle==-1;
});
$_V(c$,"toString",
function(){
if(this.isDisposed())return"Color {*DISPOSED*}";
if(this.cssHandle!=null)return"Color {\""+this.cssHandle+"\"}";
return"Color {"+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+"}";
});
$_K(c$,
function(device,handle){
$_R(this,$wt.graphics.Color,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.cssHandle=handle;
this.handle=-2;
this.device=device;
},"$wt.graphics.Device,~S");
$_M(c$,"rgbHandleFromCSS",
($fz=function(cssHandle){
if(cssHandle==null)return 0x02000000;
var red=-1;
var green=-1;
var blue=-1;
{
cssHandle.replace(/rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,function($0,$1,$2,$3){
red=parseInt($1);
green=parseInt($2);
blue=parseInt($3);
return $0;
});
}if(red!=-1&&green!=-1&&blue!=-1){
return 0x02000000|(red&0xFF)|((green&0xFF)<<8)|((blue&0xFF)<<16);
}else{
var intHandle=-2;
{
cssHandle.replace(/#([0-9a-fA-F]{3,6})/,function($0,$1){
if($1.length==3){
var r=$1.charAt(0);
var g=$1.charAt(1);
var b=$1.charAt(2);
intHandle=eval("0x"+b+b+g+g+r+r);
}else if($1.length==6){
intHandle=eval("0x"+$1.substring(4,6)+$1.substring(2,4)+$1.substring(0,2));
}else{


throw"SWT.error (4)";
}
});
}if(intHandle!=-2){
return 0x02000000|intHandle;
}else{
return 0x0F000000;
}}},$fz.isPrivate=true,$fz),"~S");
$_M(c$,"getCSSHandle",
function(){
if(this.cssHandle!=null)return this.cssHandle;
return"rgb("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+")";
});
$_M(c$,"isPlatformSpecific",
function(){
if((this.handle<0||this.handle==0x0F000000)&&this.cssHandle!=null){
return this.rgbHandleFromCSS(this.cssHandle)==0x0F000000;
}return false;
});
});
$_L(["$wt.graphics.Resource"],"$wt.graphics.Cursor",["$wt.graphics.Device"],function(){
c$=$_C(function(){
this.handle=null;
$_Z(this,arguments);
},$wt.graphics,"Cursor",$wt.graphics.Resource);
$_K(c$,
function(device,style){
$_R(this,$wt.graphics.Cursor,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.device=device;
switch(style){
case 21:
this.handle="pointer";
break;
case 0:
this.handle="default";
break;
case 1:
this.handle="wait";
break;
case 2:
this.handle="crosshair";
break;
case 3:
this.handle="progress";
break;
case 4:
this.handle="help";
break;
case 5:
this.handle="move";
break;
case 6:
this.handle="move";
break;
case 7:
this.handle="s-resize";
break;
case 8:
this.handle="move";
break;
case 9:
this.handle="e-resize";
break;
case 10:
this.handle="n-resize";
break;
case 11:
this.handle="s-resize";
break;
case 12:
this.handle="e-resize";
break;
case 13:
this.handle="w-resize";
break;
case 14:
this.handle="ne-resize";
break;
case 15:
this.handle="se-resize";
break;
case 16:
this.handle="sw-resize";
break;
case 17:
this.handle="nw-resize";
break;
case 18:
this.handle="default";
break;
case 19:
this.handle="text";
break;
case 20:
this.handle="auto";
break;
default:
;}
},"$wt.graphics.Device,~N");
$_K(c$,
function(device,source,mask,hotspotX,hotspotY){
$_R(this,$wt.graphics.Cursor,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.device=device;
if(source.url!=null){
this.handle="url(\'"+source.url+"\'),default";
}else{
this.handle="default";
}},"$wt.graphics.Device,$wt.graphics.ImageData,$wt.graphics.ImageData,~N,~N");
$_K(c$,
function(device,source,hotspotX,hotspotY){
$_R(this,$wt.graphics.Cursor,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.device=device;
if(source.url!=null){
this.handle="url(\'"+source.url+"\'),default";
}else{
this.handle="default";
}},"$wt.graphics.Device,$wt.graphics.ImageData,~N,~N");
$_V(c$,"dispose",
function(){
if(this.handle==null)return;
if(this.device.isDisposed())return;
this.handle=null;
this.device=null;
});
$_V(c$,"equals",
function(object){
if(object===this)return true;
if(!($_O(object,$wt.graphics.Cursor)))return false;
var cursor=object;
return this.device===cursor.device&&this.handle===cursor.handle;
},"~O");
$_V(c$,"hashCode",
function(){
return this.handle.hashCode();
});
$_V(c$,"isDisposed",
function(){
return this.handle==null;
});
$_V(c$,"toString",
function(){
if(this.isDisposed())return"Cursor {*DISPOSED*}";
return"Cursor {"+this.handle+"}";
});
$_K(c$,
function(device,handle){
$_R(this,$wt.graphics.Cursor,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.handle=handle;
this.device=device;
},"$wt.graphics.Device,~S");
$_M(c$,"getCSSHandle",
function(){
return this.handle;
});
});
$_I($wt.graphics,"Drawable");
$_L(["$wt.graphics.Drawable"],"$wt.graphics.Device",["$wt.graphics.Color","$.DeviceData","$.Font","$.Point","$.Rectangle"],function(){
c$=$_C(function(){
this.disposed=false;
$_Z(this,arguments);
},$wt.graphics,"Device",null,$wt.graphics.Drawable);
c$.getDevice=$_M(c$,"getDevice",
function(){
return $wt.widgets.Display.getDefault();
});
$_K(c$,
function(){
this.construct(null);
});
$_K(c$,
function(data){
this.create(data);
this.init();
},"$wt.graphics.DeviceData");
$_M(c$,"create",
function(data){
},"$wt.graphics.DeviceData");
$_M(c$,"destroy",
function(){
});
$_M(c$,"dispose",
function(){
if(this.isDisposed())return;
this.release();
this.destroy();
this.disposed=true;
});
$_M(c$,"getBounds",
function(){
var width=w$.screen.availWidth;
var height=w$.screen.availHeight;
return new $wt.graphics.Rectangle(0,0,width,height);
});
$_M(c$,"getDeviceData",
function(){
var data=new $wt.graphics.DeviceData();
return data;
});
$_M(c$,"getClientArea",
function(){
return this.getBounds();
});
$_M(c$,"getDepth",
function(){
return 32;
});
$_M(c$,"getDPI",
function(){
return new $wt.graphics.Point(96,96);
});
$_M(c$,"getFontList",
function(faceName,scalable){
return new Array(0);
},"~S,~B");
$_M(c$,"getSystemColor",
function(id){
var pixel=0x02000000;
switch(id){
case 1:
pixel=0x02FFFFFF;
break;
case 2:
pixel=0x02000000;
break;
case 3:
pixel=0x020000FF;
break;
case 4:
pixel=0x02000080;
break;
case 5:
pixel=0x0200FF00;
break;
case 6:
pixel=0x02008000;
break;
case 7:
pixel=0x0200FFFF;
break;
case 8:
pixel=0x02008080;
break;
case 9:
pixel=0x02FF0000;
break;
case 10:
pixel=0x02800000;
break;
case 11:
pixel=0x02FF00FF;
break;
case 12:
pixel=0x02800080;
break;
case 13:
pixel=0x02FFFF00;
break;
case 14:
pixel=0x02808000;
break;
case 15:
pixel=0x02C0C0C0;
break;
case 16:
pixel=0x02808080;
break;
}
return new $wt.graphics.Color(this,pixel&0x000000FF,(pixel&0x0000FF00)>>8,(pixel&0x00FF0000)>>16);
},"~N");
$_M(c$,"getSystemFont",
function(){
return new $wt.graphics.Font(this,"Tahoma,Arial",10,0);
});
$_M(c$,"getWarnings",
function(){
return false;
});
$_M(c$,"init",
function(){
});
$_M(c$,"isDisposed",
function(){
return this.disposed;
});
$_M(c$,"release",
function(){
});
$_M(c$,"setWarnings",
function(warnings){
},"~B");
});
c$=$_C(function(){
this.debug=false;
this.tracking=false;
this.errors=null;
this.objects=null;
$_Z(this,arguments);
},$wt.graphics,"DeviceData");
$_L(null,"$wt.widgets.Monitor",["$wt.graphics.Rectangle"],function(){
c$=$_C(function(){
this.handle=null;
this.x=0;
this.y=0;
this.width=0;
this.height=0;
this.clientX=0;
this.clientY=0;
this.clientWidth=0;
this.clientHeight=0;
$_Z(this,arguments);
},$wt.widgets,"Monitor");
$_K(c$,
function(){
});
$_V(c$,"equals",
function(object){
if(object===this)return true;
if(!($_O(object,$wt.widgets.Monitor)))return false;
var monitor=object;
return this.handle===monitor.handle;
},"~O");
$_M(c$,"getBounds",
function(){
return new $wt.graphics.Rectangle(this.x,this.y,this.width,this.height);
});
$_M(c$,"getClientArea",
function(){
return new $wt.graphics.Rectangle(this.clientX,this.clientY,this.clientWidth,this.clientHeight);
});
$_V(c$,"hashCode",
function(){
if(this.handle.id==null||this.handle.id.length==0){
var random=Math.random();
var code=Math.round(random)*1000000;
this.handle.id=""+code;
return code;
}else{
var code=Integer.parseInt(this.handle.id);
if(this.handle.id===""+code){
return code;
}else{
return this.handle.id.hashCode();
}}});
});
$_L(["$wt.graphics.Resource"],"$wt.graphics.Font",["$wt.graphics.Device","$.FontData"],function(){
c$=$_C(function(){
this.data=null;
$_Z(this,arguments);
},$wt.graphics,"Font",$wt.graphics.Resource);
$_K(c$,
function(){
$_R(this,$wt.graphics.Font,[]);
});
$_K(c$,
function(device,fd){
$_R(this,$wt.graphics.Font,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.init(device,fd);
},"$wt.graphics.Device,$wt.graphics.FontData");
$_K(c$,
function(device,fds){
$_R(this,$wt.graphics.Font,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
for(var i=0;i<fds.length;i++){
}
this.init(device,fds[0]);
},"$wt.graphics.Device,~A");
$_K(c$,
function(device,name,height,style){
$_R(this,$wt.graphics.Font,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.init(device,new $wt.graphics.FontData(name,height,style));
},"$wt.graphics.Device,~S,~N,~N");
$_V(c$,"dispose",
function(){
this.data=null;
this.device=null;
});
$_V(c$,"equals",
function(object){
if(object===this)return true;
if(!($_O(object,$wt.graphics.Font)))return false;
var font=object;
return font.data.equals(this.data);
},"~O");
$_M(c$,"getFontData",
function(){
var datum=new Array(1);
datum[0]=this.data;
return datum;
});
$_V(c$,"hashCode",
function(){
return this.data.hashCode();
});
$_M(c$,"init",
function(device,fd){
this.data=fd;
this.device=device;
},"$wt.graphics.Device,$wt.graphics.FontData");
$_V(c$,"isDisposed",
function(){
return this.data==null;
});
$_V(c$,"toString",
function(){
if(this.isDisposed())return"Font {*DISPOSED*}";
return"Font {"+this.data+"}";
});
});
c$=$_C(function(){
this.isUnderline=false;
this.isStrikeout=false;
this.height=0;
this.style=0;
this.name=null;
this.lang=null;
this.country=null;
this.variant=null;
$_Z(this,arguments);
},$wt.graphics,"FontData");
$_K(c$,
function(){
this.name="Arial";
this.style=0;
this.height=12;
});
$_K(c$,
function(string){
this.name=string;
this.style=0;
this.height=10;
},"~S");
$_K(c$,
function(name,height,style){
this.setName(name);
this.setHeight(height);
this.setStyle(style);
},"~S,~N,~N");
$_V(c$,"equals",
function(object){
if(object===this)return true;
if(!($_O(object,$wt.graphics.FontData)))return false;
var fd=object;
return this.height==fd.height&&this.style==fd.style&&(this.getName()==null&&fd.getName()==null)||(this.getName()!=null&&this.getName().equals(fd.getName()));
},"~O");
$_M(c$,"getHeight",
function(){
return this.height;
});
$_M(c$,"getLocale",
function(){
var result="";
var sep='_';
if(this.lang!=null){
result+=this.lang;
result+=(sep).charCodeAt(0);
}if(this.country!=null){
result+=this.country;
result+=(sep).charCodeAt(0);
}if(this.variant!=null){
result+=this.variant;
}var length=result.length;
if(length>0){
if((result.charAt(length-1)).charCodeAt(0)==(sep).charCodeAt(0)){
result=result.substring(0,length-1);
}}return result;
});
$_M(c$,"getName",
function(){
return this.name;
});
$_M(c$,"getStyle",
function(){
var style=0;
return style;
});
$_V(c$,"hashCode",
function(){
return this.height^this.style^this.getName().hashCode();
});
$_M(c$,"setHeight",
function(height){
this.height=height;
},"~N");
$_M(c$,"setLocale",
function(locale){
this.lang=this.country=this.variant=null;
if(locale!=null){
var sep='_';
var length=locale.length;
var firstSep;
var secondSep;
firstSep=locale.indexOf(sep);
if(firstSep==-1){
firstSep=secondSep=length;
}else{
secondSep=locale.indexOf(sep,firstSep+1);
if(secondSep==-1)secondSep=length;
}if(firstSep>0)this.lang=locale.substring(0,firstSep);
if(secondSep>firstSep+1)this.country=locale.substring(firstSep+1,secondSep);
if(length>secondSep+1)this.variant=locale.substring(secondSep+1);
}},"~S");
$_M(c$,"setName",
function(name){
this.name=name;
},"~S");
$_M(c$,"setStyle",
function(style){
this.style=style;
},"~N");
$_V(c$,"toString",
function(){
var str="1|";
str+=this.getName();
str+="|";
str+=this.getHeight();
str+="|";
str+=this.getStyle();
str+="|";
str+="WINDOWS|1|";
str+=this.getName();
return str;
});
c$=$_T($wt.graphics,"FontMetrics");
$_K(c$,
function(){
});
$_V(c$,"equals",
function(object){
if(object===this)return true;
if(!($_O(object,$wt.graphics.FontMetrics)))return false;
return false;
},"~O");
$_M(c$,"getAscent",
function(){
return 0;
});
$_M(c$,"getAverageCharWidth",
function(){
return 9;
});
$_M(c$,"getDescent",
function(){
return 0;
});
$_M(c$,"getHeight",
function(){
return 16;
});
$_M(c$,"getLeading",
function(){
return 0;
});
$_L(null,"$wt.internal.ResizeHandler",["$wt.internal.browser.OS"],function(){
c$=$_C(function(){
this.monitor=null;
this.shell=null;
this.status=0;
$_Z(this,arguments);
},$wt.internal,"ResizeHandler");
$_K(c$,
function(monitor){
this.monitor=monitor;
},"$wt.widgets.Monitor");
$_K(c$,
function(shell,status){
this.shell=shell;
this.status=status;
},"$wt.widgets.Decorations,~N");
$_M(c$,"updateMinimized",
function(){
var tb=null;
{
tb=this.shell.titleBar;
}var h=((this.shell.getStyle()&32)!=0)?O$.getContainerHeight(tb):0;
this.shell.setLocation(-1,this.shell.getMonitor().getClientArea().height-h-6);
});
$_M(c$,"updateMaximized",
function(){
var monitor=this.shell.getMonitor();
var area=monitor.getClientArea();
var height=area.height;
var width=area.width;
var isBodyMonitor=false;
{
isBodyMonitor=monitor.handle==document.body;
}if(isBodyMonitor){
width=d$.body.parentNode.clientWidth;
height=O$.getFixedBodyClientHeight();
}var tb=null;
{
tb=this.shell.titleBar;
}var titleHeight=((this.shell.getStyle()&32)!=0)?O$.getContainerHeight(tb):0;
this.shell.setBounds(this.shell.computeTrim(0,-titleHeight,width,height));
});
$_M(c$,"updateCentered",
function(){
var tb=null;
{
tb=this.shell.titleBar;
}var h=((this.shell.getStyle()&32)!=0)?O$.getContainerHeight(tb):20;
var monitor=this.shell.getMonitor();
var size=this.shell.getSize();
var y=Math.floor((monitor.getClientArea().height-size.y)/2)-h;
if(y<0){
y=0;
}this.shell.setLocation(Math.floor((monitor.getClientArea().width-size.x)/2),y);
});
$_M(c$,"updateMonitor",
function(){
this.monitor.clientWidth=document.body.parentNode.clientWidth;
this.monitor.clientHeight=O$.getFixedBodyClientHeight();
});
$_M(c$,"getStatus",
function(){
return this.status;
});
});
$_L(null,"$wt.internal.ResizeSystem",["$wt.internal.ResizeHandler","$wt.widgets.Display"],function(){
c$=$_T($wt.internal,"ResizeSystem");
c$.register=$_M(c$,"register",
function(shell,status){
for(var i=0;i<$wt.internal.ResizeSystem.handlers.length;i++){
if($wt.internal.ResizeSystem.handlers[i]!=null&&$wt.internal.ResizeSystem.handlers[i].shell===shell&&$wt.internal.ResizeSystem.handlers[i].status==status){
return;
}}
for(var i=0;i<$wt.internal.ResizeSystem.handlers.length;i++){
if($wt.internal.ResizeSystem.handlers[i]==null){
$wt.internal.ResizeSystem.handlers[i]=new $wt.internal.ResizeHandler(shell,status);
return;
}}
$wt.internal.ResizeSystem.handlers[$wt.internal.ResizeSystem.handlers.length]=new $wt.internal.ResizeHandler(shell,status);
return;
},"$wt.widgets.Decorations,~N");
c$.unregister=$_M(c$,"unregister",
function(shell,status){
for(var i=0;i<$wt.internal.ResizeSystem.handlers.length;i++){
if($wt.internal.ResizeSystem.handlers[i]!=null&&$wt.internal.ResizeSystem.handlers[i].shell===shell&&$wt.internal.ResizeSystem.handlers[i].status==status){
$wt.internal.ResizeSystem.handlers[i]=null;
return;
}}
},"$wt.widgets.Decorations,~N");
c$.register=$_M(c$,"register",
function(monitor){
for(var i=0;i<$wt.internal.ResizeSystem.handlers.length;i++){
if($wt.internal.ResizeSystem.handlers[i]!=null&&$wt.internal.ResizeSystem.handlers[i].monitor===monitor){
return;
}}
for(var i=0;i<$wt.internal.ResizeSystem.handlers.length;i++){
if($wt.internal.ResizeSystem.handlers[i]==null){
$wt.internal.ResizeSystem.handlers[i]=new $wt.internal.ResizeHandler(monitor);
return;
}}
$wt.internal.ResizeSystem.handlers[$wt.internal.ResizeSystem.handlers.length]=new $wt.internal.ResizeHandler(monitor);
return;
},"$wt.widgets.Monitor");
c$.unregister=$_M(c$,"unregister",
function(monitor){
for(var i=0;i<$wt.internal.ResizeSystem.handlers.length;i++){
if($wt.internal.ResizeSystem.handlers[i]!=null&&$wt.internal.ResizeSystem.handlers[i].monitor===monitor){
$wt.internal.ResizeSystem.handlers[i]=null;
return;
}}
},"$wt.widgets.Monitor");
c$.reset=$_M(c$,"reset",
function(){
for(var i=0;i<$wt.internal.ResizeSystem.handlers.length;i++){
if($wt.internal.ResizeSystem.handlers[i]!=null){
$wt.internal.ResizeSystem.handlers[i].shell=null;
$wt.internal.ResizeSystem.handlers[i].monitor=null;
$wt.internal.ResizeSystem.handlers[i]=null;
return;
}}
($t$=$wt.internal.ResizeSystem.handlers=new Array(0),$wt.internal.ResizeSystem.prototype.handlers=$wt.internal.ResizeSystem.handlers,$t$);
});
c$.updateResize=$_M(c$,"updateResize",
function(){
for(var i=0;i<$wt.internal.ResizeSystem.handlers.length;i++){
var hdl=$wt.internal.ResizeSystem.handlers[i];
if(hdl!=null&&hdl.shell!=null&&hdl.shell.handle!=null){
hdl.shell._updateMonitorSize();
var status=hdl.getStatus();
if(status==1024){
hdl.updateMaximized();
}else if(status==128){
hdl.updateMinimized();
}else if(status==16777216){
hdl.updateCentered();
}}else if(hdl!=null&&hdl.monitor!=null){
hdl.updateMonitor();
}}
$wt.widgets.Display.updateMonitor();
});
c$.handlers=c$.prototype.handlers=new Array(0);

var $browserResizingHandle=null;
$browserLayoutResize=function(){
if($browserResizingHandle!=null){
window.clearTimeout($browserResizingHandle);
}
$browserResizingHandle=window.setTimeout(function(){
org.eclipse.swt.internal.ResizeSystem.updateResize();
},50);
};
if(document.addEventListener){
window.addEventListener('resize',$browserLayoutResize,true);
}else if(document.attachEvent){
window.attachEvent('onresize',$browserLayoutResize);
}
});
$_L(null,"$wt.internal.dnd.DragAndDrop",["$wt.internal.dnd.DNDUtils"],function(){
c$=$_C(function(){
this.status=0;
this.element=null;
this.startX=0;
this.startY=0;
this.listeners=null;
this.hSelectStart=null;
this.hMouseDown=null;
this.hMouseUp=null;
this.hMouseMove=null;
this.hKeyUp=null;
$_Z(this,arguments);
},$wt.internal.dnd,"DragAndDrop");
$_Y(c$,function(){
this.listeners=new Array(0);
});
$_M(c$,"reset",
function(){
this.status=0;
if(this.hMouseMove!=null){
Clazz.removeEvent(document,"mousemove",this.hMouseMove);
this.hMouseMove=null;
}if(this.hMouseUp!=null){
Clazz.removeEvent(document,"mouseup",this.hMouseUp);
this.hMouseUp=null;
}if(this.hKeyUp!=null){
Clazz.removeEvent(document,"keyup",this.hKeyUp);
this.hKeyUp=null;
}if(this.element!=null&&this.hSelectStart!=null){
Clazz.removeEvent(this.element,"selectstart",this.hSelectStart);
}if(this.hSelectStart!=null){
Clazz.removeEvent(document,"selectstart",this.hSelectStart);
this.hSelectStart=null;
}});
$_M(c$,"bind",
function(el){
this.element=el;
if(this.hMouseDown==null){
this.hMouseDown=$wt.internal.dnd.DNDUtils.bindFunctionWith($wt.internal.dnd.DNDUtils.$onmousedown,this);
Clazz.addEvent(el,"mousedown",this.hMouseDown);
}},"Element");
$_M(c$,"unbind",
function(){
if(this.hMouseDown!=null){
Clazz.removeEvent(this.element,"mouseover",this.hMouseDown);
this.hMouseDown=null;
}this.element=null;
});
$_M(c$,"checkDraggable",
function(e){
for(var i=0;i<this.listeners.length;i++){
if(!this.listeners[i].isDraggable(e)){
return false;
}}
return true;
},"$wt.internal.dnd.HTMLEventWrapper");
$_M(c$,"notifyDragBegan",
function(e){
for(var i=0;i<this.listeners.length;i++){
if(!this.listeners[i].dragBegan(e)){
return false;
}}
return true;
},"$wt.internal.dnd.DragEvent");
$_M(c$,"notifyDragging",
function(e){
for(var i=0;i<this.listeners.length;i++){
this.listeners[i].dragging(e);
}
return true;
},"$wt.internal.dnd.DragEvent");
$_M(c$,"notifyDragEnded",
function(e){
for(var i=0;i<this.listeners.length;i++){
this.listeners[i].dragEnded(e);
}
return true;
},"$wt.internal.dnd.DragEvent");
$_M(c$,"notifyDragCanceled",
function(e){
for(var i=0;i<this.listeners.length;i++){
this.listeners[i].dragCanceled(e);
}
return true;
},"$wt.internal.dnd.DragEvent");
$_M(c$,"addDragListener",
function(listener){
for(var i=0;i<this.listeners.length;i++){
if(this.listeners[i]===listener){
return;
}}
this.listeners[this.listeners.length]=listener;
},"$wt.internal.dnd.DragListener");
$_M(c$,"removeDragListener",
function(listener){
for(var i=0;i<this.listeners.length;i++){
if(this.listeners[i]===listener){
for(var j=i+1;j<this.listeners.length;j++){
this.listeners[j-1]=this.listeners[j];
}
var oldListeners=this.listeners;
this.listeners=new Array(oldListeners.length-1);
for(var j=0;j<oldListeners.length-1;j++){
this.listeners[j]=oldListeners[j];
}
return listener;
}}
return null;
},"$wt.internal.dnd.DragListener");
});
$_L(null,"$wt.internal.dnd.DNDUtils",["$wt.internal.dnd.DragEvent","$.HTMLEventWrapper"],function(){
c$=$_T($wt.internal.dnd,"DNDUtils");
c$.bindFunctionWith=$_M(c$,"bindFunctionWith",
function(aFun,obj){
var xFun=null;
eval("xFun = "+aFun+";");
return(function(yFun,o){
return function(e){
return yFun(e,o);
}
})(xFun,obj);
},"~O,~O");
c$.onselectstart=$_M(c$,"onselectstart",
function(e){
var evt=new $wt.internal.dnd.HTMLEventWrapper(e);
evt.preventDefault();
evt.stopPropagation();
return false;
},"~O");
c$.onmousemove=$_M(c$,"onmousemove",
function(e,oThis){
var evt=new $wt.internal.dnd.HTMLEventWrapper(e);
if(!evt.leftButtonHold){
if(oThis.status!=0){
var dndEvt=new $wt.internal.dnd.DragEvent(evt,oThis.element,oThis.startX,oThis.startY);
dndEvt.mouseMoveTo(evt.x,evt.y);
oThis.notifyDragEnded(dndEvt);
oThis.status=0;
}oThis.reset();
return false;
}var dndEvt=new $wt.internal.dnd.DragEvent(evt,oThis.element,oThis.startX,oThis.startY);
if(oThis.status==0){
oThis.status=1;
dndEvt.startX=oThis.startX;
dndEvt.startY=oThis.startY;
dndEvt.mouseMoveTo(evt.x,evt.y);
oThis.notifyDragBegan(dndEvt);
}dndEvt.mouseMoveTo(evt.x,evt.y);
oThis.notifyDragging(dndEvt);
return true;
},"~O,$wt.internal.dnd.DragAndDrop");
c$.onmousedown=$_M(c$,"onmousedown",
function(e,oThis){
var evt=new $wt.internal.dnd.HTMLEventWrapper(e);
if(!oThis.checkDraggable(evt)){
return true;
}if(oThis.hSelectStart==null){
oThis.hSelectStart=$wt.internal.dnd.DNDUtils.$onselectstart;
Clazz.addEvent(document,"selectstart",oThis.hSelectStart);
Clazz.addEvent(evt.target,"selectstart",oThis.hSelectStart);
}oThis.startX=evt.x;
oThis.startY=evt.y;
if(oThis.hMouseMove==null){
oThis.hMouseMove=$wt.internal.dnd.DNDUtils.bindFunctionWith($wt.internal.dnd.DNDUtils.$onmousemove,oThis);
Clazz.addEvent(document,"mousemove",oThis.hMouseMove);
}if(oThis.hKeyUp==null){
oThis.hKeyUp=$wt.internal.dnd.DNDUtils.bindFunctionWith($wt.internal.dnd.DNDUtils.$onkeyup,oThis);
Clazz.addEvent(document,"keyup",oThis.hKeyUp);
}if(oThis.hMouseUp==null){
oThis.hMouseUp=$wt.internal.dnd.DNDUtils.bindFunctionWith($wt.internal.dnd.DNDUtils.$onmouseup,oThis);
Clazz.addEvent(document,"mouseup",oThis.hMouseUp);
}var isOpera=false;
{
var dua=navigator.userAgent;
isOpera=dua.indexOf("Opera")>=0;
}if(isOpera){
evt.preventDefault();
evt.stopPropagation();
return false;
}return true;
},"~O,$wt.internal.dnd.DragAndDrop");
c$.onkeyup=$_M(c$,"onkeyup",
function(e,oThis){
var evt=new $wt.internal.dnd.HTMLEventWrapper(e);
if((evt.event).keyCode==27){
if(oThis.status!=0){
var dndEvt=new $wt.internal.dnd.DragEvent(evt,oThis.element,oThis.startX,oThis.startY);
dndEvt.mouseMoveTo(evt.x,evt.y);
oThis.notifyDragCanceled(dndEvt);
oThis.status=0;
}oThis.reset();
return false;
}return true;
},"~O,$wt.internal.dnd.DragAndDrop");
c$.onmouseup=$_M(c$,"onmouseup",
function(e,oThis){
if(oThis.status!=0){
var evt=new $wt.internal.dnd.HTMLEventWrapper(e);
var dndEvt=new $wt.internal.dnd.DragEvent(evt,oThis.element,oThis.startX,oThis.startY);
dndEvt.mouseMoveTo(evt.x,evt.y);
oThis.notifyDragEnded(dndEvt);
oThis.status=0;
}oThis.reset();
var evt=new $wt.internal.dnd.HTMLEventWrapper(e);
evt.preventDefault();
evt.stopPropagation();
return false;
},"~O,$wt.internal.dnd.DragAndDrop");
$_S(c$,
"$onselectstart",null,
"$onmousemove",null,
"$onmousedown",null,
"$onmouseup",null,
"$onkeyup",null);

var methods=["onmousedown","onmouseup","onmousemove",
"onkeyup","onselectstart"];
for(var i=0;i<methods.length;i++){
org.eclipse.swt.internal.dnd.DNDUtils["$"+methods[i]]=
org.eclipse.swt.internal.dnd.DNDUtils[methods[i]];
}
});
$_L(["$wt.internal.dnd.DragListener"],"$wt.internal.dnd.ShellFrameDND",["$wt.internal.browser.OS"],function(){
c$=$_C(function(){
this.sourceX=0;
this.sourceY=0;
this.sourceWidth=0;
this.sourceHeight=0;
this.resize=null;
this.frame=null;
this.overFrameHandle=null;
$_Z(this,arguments);
},$wt.internal.dnd,"ShellFrameDND",null,$wt.internal.dnd.DragListener);
$_V(c$,"isDraggable",
function(e){
var cssName=e.target.className;
if(cssName!=null){
if(cssName.indexOf("shell")==0&&(cssName.indexOf("top")!=-1||cssName.indexOf("middle")!=-1||cssName.indexOf("bottom")!=-1)){
this.resize=cssName.substring(6);
return true;
}else if(cssName.indexOf("shell-title-text")!=-1){
return true;
}}return false;
},"$wt.internal.dnd.HTMLEventWrapper");
$_V(c$,"dragBegan",
function(e){
var firstTime=false;
if(this.frame==null){
this.frame=d$.createElement("DIV");
this.frame.className="shell-handle shell-opacity";
this.frame.style.backgroundColor="menu";
this.frame.style.left=this.sourceX+"px";
this.frame.style.top=this.sourceY+"px";
this.frame.style.zIndex=w$.currentTopZIndex+100;
d$.body.appendChild(this.frame);
var existedTitleBar=false;
var els=e.sourceElement.getElementsByTagName("DIV");
for(var i=0;i<els.length;i++){
if(els[i].className.indexOf("shell-title-bar")!=-1){
existedTitleBar=true;
break;
}}
if(existedTitleBar){
var titleBar=d$.createElement("DIV");
titleBar.className="shell-title-bar";
titleBar.style.margin="4px 0";
titleBar.style.width="100%";
this.frame.appendChild(titleBar);
}firstTime=true;
}else{
this.frame.style.left=this.sourceX+"px";
this.frame.style.top=this.sourceY+"px";
this.frame.style.display="block";
}var style=e.sourceElement.style;
this.sourceX=style.left.length>0?Integer.parseInt(style.left):0;
this.sourceY=style.top.length>0?Integer.parseInt(style.top):0;
this.sourceWidth=style.width.length>0?Integer.parseInt(style.width):0;
this.sourceHeight=style.height.length>0?Integer.parseInt(style.height):0;
e.startX=e.currentX;
e.startY=e.currentY;
if(firstTime){
this.initFrameBounds(this.sourceX,this.sourceY,this.sourceWidth,this.sourceHeight);
}this.frame.style.width=this.sourceWidth+"px";
this.frame.style.height=this.sourceHeight+"px";
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
$_V(c$,"dragging",
function(e){
var gHeight=O$.getFixedBodyClientHeight();
var gWidth=O$.getFixedBodyClientWidth();
var noScroll=(d$.body.style.overflow==="hidden");
{
noScroll=noScroll||document.body.style.overflowX=="hidden";
}if(noScroll){
gWidth=d$.body.parentNode.clientWidth;
}var style=e.sourceElement.style;
var dWidth=style.width.length>0?Integer.parseInt(style.width):0;
var dHeight=style.height.length>0?Integer.parseInt(style.height):0;
var dX=style.left.length>0?Integer.parseInt(style.left):0;
var dY=style.top.length>0?Integer.parseInt(style.top):0;
if(this.resize!=null){
var xx=this.sourceX;
var yy=this.sourceY;
var ww=this.sourceWidth;
var hh=this.sourceHeight;
if(this.resize==="left-top"){
xx+=e.deltaX();
yy+=e.deltaY();
ww-=e.deltaX();
hh-=e.deltaY();
d$.body.style.cursor="nw-resize";
}else if(this.resize==="center-top"){
yy+=e.deltaY();
hh-=e.deltaY();
d$.body.style.cursor="n-resize";
}else if(this.resize==="right-top"){
yy+=e.deltaY();
ww+=e.deltaX();
hh-=e.deltaY();
d$.body.style.cursor="ne-resize";
}else if(this.resize==="left-middle"){
xx+=e.deltaX();
ww-=e.deltaX();
d$.body.style.cursor="w-resize";
}else if(this.resize==="right-middle"){
ww+=e.deltaX();
d$.body.style.cursor="e-resize";
}else if(this.resize==="left-bottom"){
xx+=e.deltaX();
ww-=e.deltaX();
hh+=e.deltaY();
d$.body.style.cursor="sw-resize";
}else if(this.resize==="center-bottom"){
hh+=e.deltaY();
d$.body.style.cursor="s-resize";
}else if(this.resize==="right-bottom"){
ww+=e.deltaX();
hh+=e.deltaY();
d$.body.style.cursor="se-resize";
}xx=this.adjustX(e,xx,gWidth,dWidth);
yy=this.adjustY(e,yy,gHeight,dHeight);
ww=this.adjustW(e,ww,gWidth,dX);
hh=this.adjustH(e,hh,gHeight,dY);
this.frame.style.left=xx+"px";
this.frame.style.top=yy+"px";
this.frame.style.width=((ww>16)?ww:16)+"px";
this.frame.style.height=((hh>16)?hh:16)+"px";
return true;
}var xx=this.sourceX+e.deltaX();
var yy=this.sourceY+e.deltaY();
xx=this.adjustX(e,xx,gWidth,dWidth);
yy=this.adjustY(e,yy,gHeight,dHeight);
this.frame.style.left=xx+"px";
this.frame.style.top=yy+"px";
return true;
},"$wt.internal.dnd.DragEvent");
$_M(c$,"adjustY",
($fz=function(e,yy,gHeight,dHeight){
if(yy<0){
yy=0;
}if(!(e.event.event).ctrlKey){
var dTop=Math.abs(yy);
var dBottom=Math.abs(yy-gHeight+dHeight+2);
if(dBottom<10){
if(dBottom<dTop){
yy=gHeight-dHeight-2;
}else{
yy=0;
}}else if(dTop<10){
yy=0;
}}return yy;
},$fz.isPrivate=true,$fz),"$wt.internal.dnd.DragEvent,~N,~N,~N");
$_M(c$,"adjustX",
($fz=function(e,xx,gWidth,dWidth){
if(xx<-dWidth){
xx=-dWidth;
}if(!(e.event.event).ctrlKey){
var dLeft=Math.abs(xx);
var dRight=Math.abs(xx-gWidth+dWidth+2);
if(dRight<10){
if(dRight<dLeft){
xx=gWidth-dWidth-2;
}else{
xx=0;
}}else if(dLeft<10){
xx=0;
}}return xx;
},$fz.isPrivate=true,$fz),"$wt.internal.dnd.DragEvent,~N,~N,~N");
$_M(c$,"adjustH",
($fz=function(e,hh,gHeight,dY){
if(hh<0){
hh=16;
}if(!(e.event.event).ctrlKey){
var dBottom=Math.abs(dY+hh-gHeight+2);
if(dBottom<10){
hh=gHeight-dY-2;
}}return hh;
},$fz.isPrivate=true,$fz),"$wt.internal.dnd.DragEvent,~N,~N,~N");
$_M(c$,"adjustW",
($fz=function(e,ww,gWidth,dX){
if(ww<16){
ww=16;
}if(!(e.event.event).ctrlKey){
var dRight=Math.abs(dX+ww-gWidth+2);
if(dRight<10){
ww=gWidth-dX-2;
}}return ww;
},$fz.isPrivate=true,$fz),"$wt.internal.dnd.DragEvent,~N,~N,~N");
$_V(c$,"dragEnded",
function(e){
var style=this.frame.style;
var x=Integer.parseInt(style.left);
var y=Integer.parseInt(style.top);
var width=Integer.parseInt(style.width);
var height=Integer.parseInt(style.height);
var shell=e.sourceElement;
shell.style.zIndex=w$.currentTopZIndex=w$.currentTopZIndex+2;
this.updateShellBounds(x,y,width,height);
this.clean();
return true;
},"$wt.internal.dnd.DragEvent");
$_M(c$,"clean",
($fz=function(){
if(this.frame!=null){
this.frame.style.display="none";
}d$.body.style.cursor="auto";
this.resize=null;
if(this.overFrameHandle!=null){
O$.destroyHandle(this.overFrameHandle);
this.overFrameHandle=null;
}},$fz.isPrivate=true,$fz));
$_M(c$,"dispose",
function(){
this.clean();
if(this.frame!=null){
O$.destroyHandle(this.frame);
this.frame=null;
}});
$_M(c$,"initFrameBounds",
function(x,y,width,height){
return true;
},"~N,~N,~N,~N");
$_M(c$,"updateShellBounds",
function(x,y,width,height){
return true;
},"~N,~N,~N,~N");
$_V(c$,"dragCanceled",
function(e){
this.clean();
return true;
},"$wt.internal.dnd.DragEvent");
c$.fixShellHeight=$_M(c$,"fixShellHeight",
function(shell){
var style=(shell).style;
var height=style.height.length>0?Integer.parseInt(style.height):0;
var divs=(shell).getElementsByTagName("DIV");
for(var i=0;i<divs.length;i++){
var div=divs[i];
if(div.className!=null){
if(div.className.indexOf("middle")!=-1){
if(height-40>=0){
div.style.height=(height-40)+"px";
}else{
div.style.height="0px";
}}else if(div.className.indexOf("shell-content")!=-1){
div.style.height=((height-30>=0)?height-30:0)+"px";
}}}
},"~O");
c$.fixShellWidth=$_M(c$,"fixShellWidth",
function(shell){
var needToFixedWidth=true;
var style=(shell).style;
var width=style.width.length>0?Integer.parseInt(style.width)-6:0;
var divs=(shell).getElementsByTagName("DIV");
for(var i=0;i<divs.length;i++){
var div=divs[i];
var cssName=div.className;
if(cssName!=null){
if(cssName.indexOf("shell-center-")!=-1){
if(needToFixedWidth){
div.style.width=(width-46)+"px";
}}else if(cssName.indexOf("shell-content")!=-1){
div.style.width=width+"px";
}else if(cssName.indexOf("shell-title-bar")!=-1){
div.style.width=width+"px";
}}}
},"~O");
});
$_L(null,"$wt.internal.browser.OS",["$wt.graphics.Point","$wt.internal.dnd.HTMLEventWrapper"],function(){
O$=c$=$_T($wt.internal.browser,"OS");
c$.destroyHandle=$_M(c$,"destroyHandle",
function(handle){
if(handle==null){
return;
}var el=handle;
if(el.parentNode!=null){
try{
el.parentNode.removeChild(el);
}catch(e){
if($_O(e,Error)){
}else{
throw e;
}
}
}if(O$.isIE){
O$.initGC();
O$.gcContainer.appendChild(el);
el=null;
O$.gcContainer.innerHTML="";
}},"~O");
c$.clearChildren=$_M(c$,"clearChildren",
function(handle){
if(handle==null||(handle).nodeType!=1){
return;
}O$.initGC();
var el=handle;
for(var i=el.childNodes.length-1;i>=0;i--){
var child=el.childNodes[i];
el.removeChild(child);
if(O$.isIE){
O$.gcContainer.appendChild(child);
child=null;
}}
if(O$.isIE){
O$.gcContainer.innerHTML="";
}},"~O");
c$.deepClearChildren=$_M(c$,"deepClearChildren",
function(handle){
if(handle==null){
return;
}O$.initGC();
var el=handle;
for(var i=el.childNodes.length-1;i>=0;i--){
var child=el.childNodes[i];
if(child.nodeType==1){
O$.deepClearChildren(child);
O$.destroyHandle(child);
}else{
el.removeChild(child);
if(O$.isIE){
O$.gcContainer.appendChild(child);
child=null;
}}}
if(O$.isIE){
O$.gcContainer.innerHTML="";
}},"~O");
c$.SetWindowPos=$_M(c$,"SetWindowPos",
function(handle,x,y,w,h,flags){
if(handle==null){
return;
}},"~O,~N,~N,~N,~N,~N");
c$.init=$_M(c$,"init",
($fz=function(){
if(O$.invisibleContainer==null){
var el=d$.createElement("DIV");
el.id="swt-invisible-container";
d$.body.appendChild(el);
var s=el.style;
s.position="absolute";
s.left="-4000px";
s.top="-300px";
s.width="3000px";
s.height="100px";
s.overflow="scroll";
s.lineHeight="16px";
($t$=O$.invisibleContainer=el,O$.prototype.invisibleContainer=O$.invisibleContainer,$t$);
O$.setTextSelection(el,false);
($t$=O$.containers=new JavaObject(),O$.prototype.containers=O$.containers,$t$);
el=d$.createElement("DIV");
O$.invisibleContainer.appendChild(el);
el.className="system-default";
el.style.whiteSpace="nowrap";
el.style.overflow="visible";
($t$=O$.lineContainer=el,O$.prototype.lineContainer=O$.lineContainer,$t$);
el=d$.createElement("DIV");
O$.invisibleContainer.appendChild(el);
el.style.overflow="visible";
el.style.whiteSpace="normal";
($t$=O$.blockContainer=el,O$.prototype.blockContainer=O$.blockContainer,$t$);
}},$fz.isPrivate=true,$fz));
c$.initGC=$_M(c$,"initGC",
($fz=function(){
if(O$.isIE){
if(O$.gcContainer==null){
var gc=d$.createElement("DIV");
gc.style.display="none";
gc.id="gc";
d$.body.appendChild(gc);
($t$=O$.gcContainer=gc,O$.prototype.gcContainer=O$.gcContainer,$t$);
}}},$fz.isPrivate=true,$fz));
c$.dispose=$_M(c$,"dispose",
function(){
if(O$.blockContainer!=null){
O$.deepClearChildren(O$.blockContainer);
O$.destroyHandle(O$.blockContainer);
($t$=O$.blockContainer=null,O$.prototype.blockContainer=O$.blockContainer,$t$);
}if(O$.lineContainer!=null){
O$.deepClearChildren(O$.lineContainer);
O$.destroyHandle(O$.lineContainer);
($t$=O$.lineContainer=null,O$.prototype.lineContainer=O$.lineContainer,$t$);
}if(O$.invisibleContainer!=null){
O$.deepClearChildren(O$.invisibleContainer);
O$.destroyHandle(O$.invisibleContainer);
($t$=O$.invisibleContainer=null,O$.prototype.invisibleContainer=O$.invisibleContainer,$t$);
}if(O$.containers!=null){
var c=O$.containers;
{
for(var p in c){
try{
c[p]=null;
delete c[p];
}catch(e){}
}
}}if(O$.gcContainer!=null){
O$.gcContainer.parentNode.removeChild(O$.gcContainer);
($t$=O$.gcContainer=null,O$.prototype.gcContainer=O$.gcContainer,$t$);
}});
c$.checkScrollBar=$_M(c$,"checkScrollBar",
($fz=function(){
var el=d$.createElement("DIV");
var s=el.style;
s.position="absolute";
s.left="-4000px";
s.top="-1000px";
s.overflow="scroll";
s.width="324px";
s.height="324px";
d$.body.appendChild(el);
($t$=O$.wScrollBar=el.offsetWidth-el.clientWidth,O$.prototype.wScrollBar=O$.wScrollBar,$t$);
($t$=O$.hScrollBar=el.offsetHeight-el.clientHeight,O$.prototype.hScrollBar=O$.hScrollBar,$t$);
O$.destroyHandle(el);
},$fz.isPrivate=true,$fz));
c$.getScrollBarWidth=$_M(c$,"getScrollBarWidth",
function(){
if(O$.wScrollBar==-1){
O$.checkScrollBar();
}return O$.wScrollBar;
});
c$.getScrollBarHeight=$_M(c$,"getScrollBarHeight",
function(){
if(O$.hScrollBar==-1){
O$.checkScrollBar();
}return O$.hScrollBar;
});
c$.getContainerWidth=$_M(c$,"getContainerWidth",
function(container){
var el=container;
return Math.max(el.offsetWidth,Math.max(el.clientWidth,el.scrollWidth));
},"~O");
c$.getContainerHeight=$_M(c$,"getContainerHeight",
function(container){
var el=container;
var max=Math.max(el.offsetHeight,Math.max(el.clientHeight,el.scrollHeight));
if(O$.isIE){
max--;
}return max;
},"~O");
c$.insertText=$_M(c$,"insertText",
function(el,text){
var lines=null;
var handle=el;
{
if(!((/[\r\n\t&]/).test(text))){
handle.style.display="inline";
handle.appendChild(document.createTextNode(text));
return text;
}
var c160=String.fromCharCode(160);
var c160x8=c160+c160+c160+c160+c160+c160+c160+c160;
var s=text.replace(/\t/g,c160x8);
if(window["Console"]!=null&&Console.splitNeedFixed){
try{
lines=Console.splitIntoLines(s);
}catch(e){
lines=s.split(/\r\n|\r|\n/g);
}
}else{
lines=s.split(/\r\n|\r|\n/g);
}
}for(var i=0;i<lines.length;i++){
if(i>0){
handle.appendChild(d$.createElement("BR"));
}var line=lines[i];
if(line.length==0){
line=c160;
}var lastIndex=0;
var idx=line.indexOf('&');
var lineEl=d$.createElement("SPAN");
handle.appendChild(lineEl);
while(idx!=-1){
if(idx<line.length-1){
var c=line.charAt(idx+1);
if((c).charCodeAt(0)==('&').charCodeAt(0)){
idx=line.indexOf('&',idx+2);
continue;}else{
var chs=line.substring(lastIndex,idx);
if(chs.length!=0){
lineEl.appendChild(d$.createTextNode(chs));
}var span=d$.createElement("SPAN");
lineEl.appendChild(span);
span.appendChild(d$.createTextNode(""+c));
text=""+c;
lastIndex=idx+2;
idx=line.indexOf('&',lastIndex);
}}else{
break;
}}
var s=null;
{
if(lastIndex==0){
s=lines[i].replace(/&&/g,'&');
}else{
s=lines[i].substring(lastIndex,lines[i].length).replace(/&&/g,'&');
}
}lineEl.appendChild(d$.createTextNode(s));
}
return text;
},"~O,~S");
c$.wrapCSS=$_M(c$,"wrapCSS",
($fz=function(a){
if(a==null){
return null;
}else{
a=a.replace(/(^|[^-])(left|top|right|bottom|height|width)\s*:\s*[\+\-]?\d+(cm|mm|em|px|pt)?(\s*;|$)/ig,'$1');
a=a.replace(/background(-[^:]+)?\s*:\s*[^;]+(\s*;|$)/ig,'');
a=a.replace(/visibility(-[^:]+)?\s*:\s*[^;]+(\s*;|$)/ig,'');
a=a.trim();
return a;
}},$fz.isPrivate=true,$fz),"~S");
c$.setupAsPlain=$_M(c$,"setupAsPlain",
($fz=function(str,wrappedWidth){
O$.init();
var c=null;
if(wrappedWidth>0){
c=O$.blockContainer;
c.style.width=wrappedWidth+"px";
}else{
c=O$.lineContainer;
}O$.clearChildren(c);
c.style.display="inline";
O$.insertText(c,str);
return c;
},$fz.isPrivate=true,$fz),"~S,~N");
c$.setupAsStyled=$_M(c$,"setupAsStyled",
($fz=function(str,className,cssText,wrappedWidth){
O$.init();
cssText=O$.wrapCSS(cssText);
var e=O$.containers;
var f=null;
var g=null;
if(wrappedWidth>0){
g="+"+className+"|"+cssText;
}else{
g="~"+className+"|"+cssText;
}{
f=e[g];
}if(f!=null){
O$.clearChildren(f);
}else{
f=d$.createElement("DIV");
O$.invisibleContainer.appendChild(f);
var x=f.style;
f.className=className;
x.cssText=cssText;
if(wrappedWidth>0){
x.whiteSpace="normal";
}else{
x.whiteSpace="nowrap";
}x.overflow="visible";
{
e[g]=f;
}}if(wrappedWidth>0){
f.style.width=wrappedWidth+"px";
}var childNodes=O$.invisibleContainer.childNodes;
for(var i=0;i<childNodes.length;i++){
var s=childNodes[i].style;
if(childNodes[i]!==f){
if(s.display!=="none"){
O$.oldDisplays[i]=s.display;
s.display="none";
}}else{
if(O$.oldDisplays[i]!=null){
s.display=O$.oldDisplays[i];
}}}
O$.insertText(f,str);
return f;
},$fz.isPrivate=true,$fz),"~S,~S,~S,~N");
c$.getStringPlainWidth=$_M(c$,"getStringPlainWidth",
function(str){
var c=O$.setupAsPlain(str,-1);
return O$.getContainerWidth(c);
},"~S");
c$.getStringStyledWidth=$_M(c$,"getStringStyledWidth",
function(str,className,cssText){
{
var r=/display\s*:\s*none/ig;
if(r.test(cssText)){
return 0;
}
}var c=O$.setupAsStyled(str,className,cssText,-1);
return O$.getContainerWidth(c);
},"~S,~S,~S");
c$.getStringPlainHeight=$_M(c$,"getStringPlainHeight",
function(str){
var c=O$.setupAsPlain(str,-1);
return O$.getContainerHeight(c);
},"~S");
c$.getStringPlainWrappedHeight=$_M(c$,"getStringPlainWrappedHeight",
function(str,wrappedWidth){
var c=O$.setupAsPlain(str,wrappedWidth);
return O$.getContainerHeight(c);
},"~S,~N");
c$.getStringStyledHeight=$_M(c$,"getStringStyledHeight",
function(str,className,cssText){
{
var r=/display\s*:\s*none/ig;
if(r.test(cssText)){
return 0;
}
}var c=O$.setupAsStyled(str,className,cssText,-1);
return O$.getContainerHeight(c);
},"~S,~S,~S");
c$.getStringStyledWrappedHeight=$_M(c$,"getStringStyledWrappedHeight",
function(str,className,cssText,wrappedWidth){
{
var r=/display\s*:\s*none/ig;
if(r.test(cssText)){
return 0;
}
}var c=O$.setupAsStyled(str,className,cssText,wrappedWidth);
return O$.getContainerHeight(c);
},"~S,~S,~S,~N");
c$.getStringPlainSize=$_M(c$,"getStringPlainSize",
function(str){
var c=O$.setupAsPlain(str,-1);
return new $wt.graphics.Point(O$.getContainerWidth(c),O$.getContainerHeight(c));
},"~S");
c$.getStringStyledSize=$_M(c$,"getStringStyledSize",
function(str,className,cssText){
{
var r=/display\s*:\s*none/ig;
if(r.test(cssText)){
return new org.eclipse.swt.graphics.Point(0,0);
}
}var c=O$.setupAsStyled(str,className,cssText,-1);
return new $wt.graphics.Point(O$.getContainerWidth(c),O$.getContainerHeight(c));
},"~S,~S,~S");
c$.calcuateRelativePosition=$_M(c$,"calcuateRelativePosition",
function(el,relativeEl){
var srcEl=el;
var left=0;
var top=0;
while(el!=null&&el!==relativeEl){
left+=el.offsetLeft-el.scrollLeft;
top+=el.offsetTop-el.scrollTop;
if(el!==srcEl){
var style=null;
if(document.defaultView!=null){
style=document.defaultView.getComputedStyle(el,null);
}else if(el.currentStyle!=null){
style=el.currentStyle;
}
if(!O$.isOpera&&style!=null){
var w=0;
var bw=style.borderLeftWidth;
if(bw.length!=0){
w=parseInt(bw);
if(!isNaN(w)){
left+=w;
}
}
bw=style.borderTopWidth;
if(bw.length!=0){
w=parseInt(bw);
if(!isNaN(w)){
top+=w;
}
}
}
}el=el.offsetParent;
}
return new $wt.graphics.Point(left,top);
},"Element,Element");
c$.updateArrowSize=$_M(c$,"updateArrowSize",
function(el,style,cx,cy){
var xx=Math.floor(Math.min(cx,cy)/4);
var s=(el).style;
s.borderWidth=(xx>0?xx:0)+"px";
if((style&16384)!=0){
s.borderLeftWidth="0";
}else if((style&131072)!=0){
s.borderRightWidth="0";
}else if((style&128)!=0){
s.borderTopWidth="0";
}else if((style&1024)!=0){
if(xx>1){
s.borderWidth=(xx-1)+"px";
}s.borderBottomWidth="0";
}else{
s.borderTopWidth="0";
}var x=Math.floor(cy/6);
xx=Math.floor(cy/3);
s.position="relative";
if((style&(147456))!=0){
s.top=(x-2)+"px";
if((style&131072)!=0){
s.left="1px";
}}else{
if((style&128)!=0){
s.top=(xx-3)+"px";
}else if((style&1024)!=0){
s.top=(xx-2)+"px";
}}if(O$.isMozilla&&!O$.isFirefox){
if((style&128)!=0){
s.left="-2px";
}else if((style&1024)!=0){
s.left="-1px";
}}if(O$.isFirefox){
if((style&(147456))!=0){
s.top="-2px";
if((style&131072)!=0){
s.left="1px";
}}else{
if((style&128)!=0){
if(Math.min(cx,cy)<=12){
s.left="-1px";
}else{
s.left="-2px";
}s.top="-1px";
}else if((style&1024)!=0){
s.left="-1px";
s.top="-1px";
}}}else if(O$.isSafari||O$.isIE80){
if((style&(147456))!=0){
s.top="1px";
if((style&131072)!=0){
s.left="1px";
}}else{
if((style&128)!=0){
s.left="-1px";
s.top="0";
}else if((style&1024)!=0){
s.left="0";
s.top="1px";
}}}},"~O,~N,~N,~N");
c$.existedCSSClass=$_M(c$,"existedCSSClass",
function(el,cssClazz){
var e=el;
var className=e.className;
if(className==null||className.length==0){
return false;
}var clazz=className.$plit("\\s");
for(var i=0;i<clazz.length;i++){
if(clazz[i]===cssClazz){
return true;
}}
return false;
},"~O,~S");
c$.replaceCSSClassInDepth=$_M(c$,"replaceCSSClassInDepth",
function(el,toBeRemovedCSSClazz,toBeInsertedCSSClazz){
var e=el;
if(toBeRemovedCSSClazz==null||toBeRemovedCSSClazz.length==0||toBeInsertedCSSClazz==null){
return false;
}O$.replaceCSSClass(el,toBeRemovedCSSClazz,toBeInsertedCSSClazz);
var length=e.childNodes.length;
var replaced=false;
for(var i=0;i<length;i++){
replaced=replaced||O$.replaceCSSClassInDepth(e.childNodes[i],toBeRemovedCSSClazz,toBeInsertedCSSClazz);
}
return replaced;
},"~O,~S,~S");
c$.replaceCSSClass=$_M(c$,"replaceCSSClass",
function(el,toBeRemovedCSSClazz,toBeInsertedCSSClazz){
var e=el;
var className=e.className;
if(className==null||className.length==0){
return false;
}var clazz=className.$plit("\\s");
var existed=false;
for(var i=0;i<clazz.length;i++){
if(clazz[i]===toBeRemovedCSSClazz){
existed=true;
clazz[i]=toBeInsertedCSSClazz;
break;
}}
if(existed){
e.className=clazz.join(" ");
}return existed;
},"~O,~S,~S");
c$.removeCSSClassInDepth=$_M(c$,"removeCSSClassInDepth",
function(el,cssClazz){
var e=el;
if(cssClazz==null||cssClazz.length==0){
return false;
}O$.removeCSSClass(el,cssClazz);
var length=e.childNodes.length;
var removed=false;
for(var i=0;i<length;i++){
removed=removed||O$.removeCSSClassInDepth(e.childNodes[i],cssClazz);
}
return removed;
},"~O,~S");
c$.removeCSSClass=$_M(c$,"removeCSSClass",
function(el,cssClazz){
var e=el;
var className=e.className;
if(className==null||className.length==0){
return false;
}var clazz=className.$plit("\\s");
var existed=false;
for(var i=0;i<clazz.length;i++){
if(clazz[i]===cssClazz){
existed=true;
for(var j=i;j<clazz.length-1;j++){
clazz[j]=clazz[j+1];
}
{
clazz.length--;
}break;
}}
if(existed){
e.className=clazz.join(" ");
}return existed;
},"~O,~S");
c$.addCSSClass=$_M(c$,"addCSSClass",
function(el,cssClazz){
var e=el;
var className=e.className;
if(className==null||className.length==0){
e.className=cssClazz;
return true;
}var clazz=className.$plit("\\s");
for(var i=0;i<clazz.length;i++){
if(clazz[i]===cssClazz){
return false;
}}
clazz[clazz.length]=cssClazz;
{
e.className=clazz.join(" ");
}return true;
},"~O,~S");
c$.toggleCSSClass=$_M(c$,"toggleCSSClass",
function(el,cssClazz){
var e=el;
var className=e.className;
if(className==null||className.length==0){
e.className=cssClazz;
return;
}var clazz=className.$plit("\\s");
for(var i=0;i<clazz.length;i++){
if(clazz[i]===cssClazz){
for(var j=i;j<clazz.length-1;j++){
clazz[j]=clazz[j+1];
}
{
clazz.length--;
e.className=clazz.join(" ");
}return;
}}
clazz[clazz.length]=cssClazz;
{
e.className=clazz.join(" ");
}},"~O,~S");
c$.updateCSSClass=$_M(c$,"updateCSSClass",
function(el,cssClazz,kept){
var e=el;
var className=e.className;
if(className==null||className.length==0){
if(kept){
e.className=cssClazz;
}return;
}var clazz=className.$plit("\\s");
for(var i=0;i<clazz.length;i++){
if(clazz[i]===cssClazz){
if(kept){
return;
}for(var j=i;j<clazz.length-1;j++){
clazz[j]=clazz[j+1];
}
{
clazz.length--;
e.className=clazz.join(" ");
}return;
}}
if(kept){
clazz[clazz.length]=cssClazz;
{
e.className=clazz.join(" ");
}}},"~O,~S,~B");
c$.getFixedBodyClientWidth=$_M(c$,"getFixedBodyClientWidth",
function(){
var b=d$.body;
var p=b.parentNode;
var bcWidth=b.clientWidth;
var pcWidth=p.clientWidth;
if(O$.isIE){
return(pcWidth==0)?bcWidth:pcWidth;
}else if(O$.isFirefox||O$.isSafari||O$.isOpera){
return pcWidth;
}return bcWidth;
});
c$.getFixedBodyClientHeight=$_M(c$,"getFixedBodyClientHeight",
function(){
var b=d$.body;
var p=b.parentNode;
var bcHeight=b.clientHeight;
var pcHeight=p.clientHeight;
if(O$.isIE){
return(pcHeight==0)?bcHeight:pcHeight;
}else if(O$.isFirefox||O$.isSafari){
return(pcHeight==p.offsetHeight&&pcHeight==p.scrollHeight)?bcHeight:pcHeight;
}else if(O$.isOpera){
return pcHeight;
}return bcHeight;
});
c$.getFixedBodyOffsetTop=$_M(c$,"getFixedBodyOffsetTop",
function(){
var b=d$.body;
var p=b.parentNode;
var pcHeight=p.clientHeight;
var bcScrollTop=b.scrollTop+b.offsetTop;
var pcScrollTop=p.scrollTop+p.offsetTop;
if(O$.isIE){
return(pcHeight==0)?bcScrollTop:pcScrollTop;
}else if(O$.isFirefox){
return(pcHeight==p.offsetHeight&&pcHeight==p.scrollHeight)?bcScrollTop:pcScrollTop;
}return bcScrollTop;
});
c$.getFixedBodyOffsetLeft=$_M(c$,"getFixedBodyOffsetLeft",
function(){
var b=d$.body;
var p=b.parentNode;
var pcHeight=p.clientHeight;
var bcScrollLeft=b.scrollLeft+b.offsetLeft;
var pcScrollLeft=p.scrollLeft+p.offsetLeft;
if(O$.isIE){
return(pcHeight==0)?bcScrollLeft:pcScrollLeft;
}else if(O$.isFirefox){
return(pcHeight==p.offsetHeight&&pcHeight==p.scrollHeight)?bcScrollLeft:pcScrollLeft;
}return bcScrollLeft;
});
c$.getImageSize=$_M(c$,"getImageSize",
function(image){
var w=16;
var h=16;
if(image.width==0&&image.height==0){
if(image.url!=null&&image.url.length!=0){
var img=null;
{
img=O$.imageCaches[image.url];
}if(img==null){
img=new Image();
img.src=image.url;
}image.width=img.width;
image.height=img.height;
w=img.width;
h=img.height;
{
O$.imageCaches[image.url]=img;
}}}else{
w=image.width;
h=image.height;
}return new $wt.graphics.Point(w,h);
},"$wt.graphics.Image");
c$.SetFocus=$_M(c$,"SetFocus",
function(handle){
try{
handle.focus();
}catch(e){}
},"Element");
c$.getInputCharacter=$_M(c$,"getInputCharacter",
function(keyCode,shiftKey){
var ch='\0';
if(keyCode==10||keyCode==13||keyCode==9||keyCode==32){
ch=String.fromCharCode(keyCode);
}else if(keyCode>=48&&keyCode<58){
if(!shiftKey){
ch=String.fromCharCode(keyCode);
}else{
var chs=[')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
ch=chs[keyCode-48];
}}else if(keyCode==61){
if(!shiftKey){
ch='=';
}else{
ch='+';
}}else if(keyCode==59){
if(!shiftKey){
ch=';';
}else{
ch=':';
}}else if(keyCode>=65&&keyCode<=90){
if((shiftKey&&O$.isCapsLockOn)||(!shiftKey&&!O$.isCapsLockOn)){
ch=String.fromCharCode((keyCode+('a').charCodeAt (0) - ('A').charCodeAt(0)));
}else{
ch=String.fromCharCode(keyCode);
}}else if(keyCode>=96&&keyCode<=105){
ch=String.fromCharCode((keyCode-96+('0').charCodeAt(0)));
}else if(keyCode>=106&&keyCode<=111&&keyCode!=108){
var chs=['*', '+', '?', '-', '.', '/'];
ch=chs[keyCode-106];
}else if(keyCode>=186&&keyCode<=192){
if(!shiftKey){
var chs=[';', '=', ',', '-', '.', '/', '`'];
ch=chs[keyCode-186];
}else{
var chs=[':', '+', '<', '_', '>', '?', '~'];
ch=chs[keyCode-186];
}}else if(keyCode>=219&&keyCode<=222){
if(!shiftKey){
var chs=['[', '\\', ']', '\''];
ch=chs[keyCode-219];
}else{
var chs=['{', '|', '}', '\"'];
ch=chs[keyCode-219];
}}else{
ch=String.fromCharCode(keyCode);
}return ch;
},"~N,~B");
c$.isInputCharacter=$_M(c$,"isInputCharacter",
function(keyCode,shiftKey,altKey,ctrlKey){
if(altKey||ctrlKey){
return false;
}if(keyCode==10||keyCode==13||keyCode==9||keyCode==32||keyCode==8||keyCode==46||(keyCode>=48&&keyCode<=57)||keyCode==59||keyCode==61||(keyCode>=65&&keyCode<=90)||(keyCode>=96&&keyCode<=111&&keyCode!=108)||(keyCode>=186&&keyCode<=192)||(keyCode>=218&&keyCode<=222)){
return true;
}return false;
},"~N,~B,~B,~B");
c$.setTextSelection=$_M(c$,"setTextSelection",
function(handle,enabled){
if(O$.isMozilla||O$.isFirefox){
handle.style.MozUserSelect=enabled?"all":"none";
}else if(typeof handle.style.KhtmlUserSelect!="undefined"){
handle.style.KhtmlUserSelect="none";
}else if(typeof handle.onselectstart!="undefined"){
handle.onselectstart=enabled?null:O$.noReturnCallbackFunction;
return O$.noReturnCallbackFunction;
}
return null;
},"Element,~B");
c$.noReturnCallbackFunction=$_M(c$,"noReturnCallbackFunction",
function(e){
var evt=new $wt.internal.dnd.HTMLEventWrapper(e);
evt.preventDefault();
evt.stopPropagation();
return false;
},"~O");
$_S(c$,
"isIE",false,
"isIE90",false,
"isIE80",false,
"isIE70",false,
"isIE60",false,
"isIE55",false,
"isIE50",false,
"isIENeedPNGFix",false,
"isMozilla",false,
"isFirefox",false,
"isFirefox10",false,
"isFirefox20",false,
"isFirefox30",false,
"isSafari",false,
"isOpera",false,
"isChrome",false,
"isChrome10",false,
"isChrome20",false,
"isChrome30",false,
"isCapsLockOn",false,
"noReturnCallback",null);
{
var os=$wt.internal.browser.OS;
var dua=navigator.userAgent;
os.isOpera=dua.indexOf("Opera")>=0;
var isKHTML=dua.indexOf("Konqueror")>=0||dua.indexOf("Safari")>=0;
os.isSafari=dua.indexOf("Safari")>=0;
os.isChrome=dua.indexOf("Chrome")>=0;
os.isChrome10=dua.indexOf("Chrome/1.")>=0||dua.indexOf("Chrome/0.")>=0;
os.isChrome20=dua.indexOf("Chrome/2.")>=0;
os.isChrome30=dua.indexOf("Chrome/3.")>=0;
var geckoPos=dua.indexOf("Gecko");
os.isMozilla=geckoPos>=0&&!isKHTML;
os.isFirefox=os.isMozilla&&dua.indexOf("Firefox")!=-1;
os.isFirefox10=os.isFirefox&&(dua.indexOf("Firefox/1.")!=-1||dua.indexOf("Firefox/0.")!=-1);
os.isFirefox20=os.isFirefox&&dua.indexOf("Firefox/2.")!=-1;
os.isFirefox30=os.isFirefox&&dua.indexOf("Firefox/3.")!=-1;
os.isIE=document.all!=null&&!os.isOpera;
os.isIE50=os.isIE&&dua.indexOf("MSIE 5.0")>=0;
os.isIE55=os.isIE&&dua.indexOf("MSIE 5.5")>=0;
os.isIE60=os.isIE&&dua.indexOf("MSIE 6.0")>=0;
os.isIE70=os.isIE&&dua.indexOf("MSIE 7.0")>=0;
os.isIE80=os.isIE&&dua.indexOf("MSIE 8.0")>=0;
os.isIE90=os.isIE&&dua.indexOf("MSIE 9.0")>=0;
os.isIENeedPNGFix=os.isIE50||os.isIE55||os.isIE60;
os.noReturnCallback=os.noReturnCallbackFunction;
}$_S(c$,
"gcContainer",null,
"invisibleContainer",null,
"containers",null,
"lineContainer",null,
"blockContainer",null,
"wScrollBar",-1,
"hScrollBar",-1);
c$.oldDisplays=c$.prototype.oldDisplays=new Array(0);
c$.imageCaches=c$.prototype.imageCaches=new JavaObject();
});
$_L(null,"$wt.internal.browser.Popup",["$wt.graphics.Rectangle"],function(){
c$=$_T($wt.internal.browser,"Popup");
c$.popupList=$_M(c$,"popupList",
function(bounds,rect,height){
if(height<=0){
return null;
}var x;
var y;
var w;
var h=height;
if(bounds==null){
if(rect==null){
x=y=0;
w=100;
}else{
x=rect.x;
y=rect.y+height;
w=rect.width;
}}else{
if(rect==null){
x=bounds.x+Math.floor(bounds.width/4);
y=bounds.y+Math.floor((bounds.height-height)/2);
w=Math.floor(bounds.width/2);
}else{
x=rect.x;
w=rect.width;
if(rect.y+rect.height+height>bounds.y+bounds.height){
if(rect.y-height>=bounds.y){
y=rect.y-height;
}else{
if(bounds.height<height){
y=bounds.y;
h=bounds.height;
}else{
if(Math.abs(bounds.y+bounds.height-height-rect.y)>Math.abs(bounds.y+height-rect.y-rect.height)){
y=bounds.y;
}else{
y=bounds.y+bounds.height-height;
}}}}else{
y=rect.y+rect.height;
}}}return new $wt.graphics.Rectangle(x,y,w,h);
},"$wt.graphics.Rectangle,$wt.graphics.Rectangle,~N");
c$.popupMenu=$_M(c$,"popupMenu",
function(bounds,rect,width,height,preferredDirection){
if(height<=0||width<=0){
return null;
}var x;
var y;
var w=width;
var h=height;
if(bounds==null){
if(rect==null){
x=y=0;
}else{
x=rect.x;
y=rect.y+height;
}}else{
if(rect==null){
x=bounds.x+Math.floor(bounds.width/4);
y=bounds.y+Math.floor((bounds.height-height)/2);
}else{
if(rect.y+rect.height+height>bounds.y+bounds.height){
if(rect.y-height>=bounds.y){
y=rect.y-height;
}else{
if(bounds.height<height){
y=bounds.y;
h=bounds.height;
}else{
if(Math.abs(bounds.y+bounds.height-height-rect.y)>Math.abs(bounds.y+height-rect.y-rect.height)){
y=bounds.y;
}else{
y=bounds.y+bounds.height-height;
}}}}else{
y=rect.y+rect.height;
}if(rect.x+rect.width+width>bounds.x+bounds.width){
if(rect.x-width>=bounds.x){
x=rect.x-width;
}else{
if(bounds.width<width){
x=bounds.x;
w=bounds.width;
}else{
if(Math.abs(bounds.x+bounds.width-width-rect.x)>Math.abs(bounds.x+width-rect.x-rect.width)){
x=bounds.x;
}else{
x=bounds.x+bounds.width-width;
}}}}else{
x=rect.x;
}}}return new $wt.graphics.Rectangle(x,y,w,h);
},"$wt.graphics.Rectangle,$wt.graphics.Rectangle,~N,~N,~N");
});
$_L(["$wt.graphics.Drawable","$.Resource"],"$wt.graphics.Image",["$wt.graphics.Color","$.Device","$.ImageData","$.Rectangle","$wt.internal.browser.OS"],function(){
c$=$_C(function(){
this.url=null;
this.hash=0;
this.width=0;
this.height=0;
this.type=0;
this.handle=null;
this.gcDrawn=false;
this.drawings=null;
this.transparentPixel=-1;
this.memGC=null;
this.alphaData=null;
this.alpha=-1;
this.data=null;
$_Z(this,arguments);
},$wt.graphics,"Image",$wt.graphics.Resource,$wt.graphics.Drawable);
$_K(c$,
function(){
$_R(this,$wt.graphics.Image,[]);
});
$_K(c$,
function(device,width,height){
$_R(this,$wt.graphics.Image,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.init(device,width,height);
this.width=width;
this.height=height;
},"$wt.graphics.Device,~N,~N");
$_M(c$,"init",
function(device,width,height){
this.type=0;
this.width=width;
this.height=height;
this.handle=d$.createElement("DIV");
this.handle.style.width=width+"px";
this.handle.style.height=height+"px";
},"$wt.graphics.Device,~N,~N");
$_M(c$,"setSize",
function(width,height){
this.width=width;
this.height=height;
},"~N,~N");
$_K(c$,
function(device,srcImage,flag){
$_R(this,$wt.graphics.Image,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.device=device;
this.url=srcImage.url;
this.hash=srcImage.hash;
this.width=srcImage.width;
this.height=srcImage.height;
},"$wt.graphics.Device,$wt.graphics.Image,~N");
$_K(c$,
function(device,bounds){
$_R(this,$wt.graphics.Image,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.width=bounds.width;
this.height=bounds.height;
},"$wt.graphics.Device,$wt.graphics.Rectangle");
$_K(c$,
function(device,data){
$_R(this,$wt.graphics.Image,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.url=data.url;
this.hash=data.hash;
this.width=data.width;
this.height=data.height;
},"$wt.graphics.Device,$wt.graphics.ImageData");
$_K(c$,
function(device,source,mask){
$_R(this,$wt.graphics.Image,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.url=source.url;
this.hash=source.hash;
this.width=source.width;
this.height=source.height;
},"$wt.graphics.Device,$wt.graphics.ImageData,$wt.graphics.ImageData");
$_K(c$,
function(device,stream){
$_R(this,$wt.graphics.Image,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
var url=null;
if(stream!=null){
url=stream.url;
}this.url=url;
},"$wt.graphics.Device,java.io.InputStream");
$_K(c$,
function(device,filename){
$_R(this,$wt.graphics.Image,[]);
if(device==null)device=$wt.graphics.Device.getDevice();
this.url=filename;
},"$wt.graphics.Device,~S");
$_V(c$,"dispose",
function(){
});
$_V(c$,"equals",
function(object){
if(object===this)return true;
if(!($_O(object,$wt.graphics.Image)))return false;
var image=object;
return this.device===image.device&&this.handle===image.handle;
},"~O");
$_M(c$,"getBackground",
function(){
return new $wt.graphics.Color(this.device,"white");
});
$_M(c$,"getBounds",
function(){
if(this.width==0||this.height==0){
return new $wt.graphics.Rectangle(0,0,16,16);
}return new $wt.graphics.Rectangle(0,0,this.width,this.height);
});
$_M(c$,"getImageData",
function(){
return new $wt.graphics.ImageData(this.url);
});
$_V(c$,"hashCode",
function(){
return this.handle.toString().hashCode();
});
$_V(c$,"isDisposed",
function(){
return false;
});
$_M(c$,"setBackground",
function(color){
},"$wt.graphics.Color");
$_M(c$,"toString",
function(){
if(this.isDisposed())return"Image {*DISPOSED*}";
return"Image {"+this.handle+"}";
});
$_M(c$,"draw",
function(handle){
O$.clearChildren(handle);
if(this.drawings!=null){
var rect=null;
for(var i=0;i<this.drawings.length;i++){
var drawing=this.drawings[i];
var type=drawing[0];
switch(type){
case 1:
rect=d$.createElement("DIV");
rect.style.position="absolute";
rect.style.fontSize="0";
rect.style.left=drawing[1]+"px";
if(O$.isFirefox&&handle.nodeName==="BUTTON"){
rect.style.top=(drawing[2]-Math.floor(drawing[4]/2)-3)+"px";
}else{
rect.style.top=drawing[2]+"px";
}rect.style.width=drawing[3]+"px";
rect.style.height=drawing[4]+"px";
rect.style.borderColor=""+drawing[5];
rect.style.borderStyle="solid";
rect.style.borderWidth="1px";
handle.appendChild(rect);
break;
case 2:
rect=d$.createElement("DIV");
rect.style.position="absolute";
rect.style.fontSize="0";
rect.style.left=drawing[1]+"px";
if(O$.isFirefox){
rect.style.top=(drawing[2]-Math.floor(drawing[4]/2)-1)+"px";
}else{
rect.style.top=drawing[2]+"px";
}rect.style.width=drawing[3]+"px";
rect.style.height=drawing[4]+"px";
rect.style.backgroundColor=""+drawing[5];
handle.appendChild(rect);
break;
default:
;}
}
}else{
var rect=d$.createElement("DIV");
rect.style.position="absolute";
rect.style.fontSize="0";
rect.style.left="0px";
rect.style.top="0px";
rect.style.width=this.width+"px";
rect.style.height=this.height+"px";
rect.style.backgroundColor="black";
handle.appendChild(rect);
}},"Element");
$_S(c$,
"DEFAULT_SCANLINE_PAD",4);
});
$_L(["$wt.internal.CloneableCompatibility"],"$wt.graphics.ImageData",null,function(){
c$=$_C(function(){
this.width=0;
this.height=0;
this.depth=0;
this.scanlinePad=0;
this.bytesPerLine=0;
this.data=null;
this.palette=null;
this.transparentPixel=0;
this.maskData=null;
this.maskPad=0;
this.alphaData=null;
this.alpha=0;
this.type=0;
this.x=0;
this.y=0;
this.disposalMethod=0;
this.url=null;
this.hash=0;
this.delayTime=0;
$_Z(this,arguments);
},$wt.graphics,"ImageData",null,$wt.internal.CloneableCompatibility);
$_K(c$,
function(width,height,depth,palette){
this.construct(width,height,depth,palette,4,null,0,null,null,-1,-1,-1,0,0,0,0);
},"~N,~N,~N,$wt.graphics.PaletteData");
$_K(c$,
function(width,height,depth,palette,scanlinePad,data){
},"~N,~N,~N,$wt.graphics.PaletteData,~N,~A");
$_K(c$,
function(stream){
var url=null;
if(stream!=null){
url=stream.url;
}this.url=url;
},"java.io.InputStream");
$_K(c$,
function(filename){
this.url=filename;
},"~S");
$_K(c$,
function(){
});
$_K(c$,
function(width,height,depth,palette,scanlinePad,data,maskPad,maskData,alphaData,alpha,transparentPixel,type,x,y,disposalMethod,delayTime){
},"~N,~N,~N,$wt.graphics.PaletteData,~N,~A,~N,~A,~A,~N,~N,~N,~N,~N,~N,~N");
$_M(c$,"setAllFields",
function(width,height,depth,scanlinePad,bytesPerLine,data,palette,transparentPixel,maskData,maskPad,alphaData,alpha,type,x,y,disposalMethod,delayTime){
},"~N,~N,~N,~N,~N,~A,$wt.graphics.PaletteData,~N,~A,~N,~A,~N,~N,~N,~N,~N,~N");
$_V(c$,"clone",
function(){
return this.clone();
});
$_M(c$,"getAlpha",
function(x,y){
return 0;
},"~N,~N");
$_M(c$,"getAlphas",
function(x,y,getWidth,alphas,startIndex){
},"~N,~N,~N,~A,~N");
$_M(c$,"getPixel",
function(x,y){
return 0;
},"~N,~N");
$_M(c$,"getPixels",
function(x,y,getWidth,pixels,startIndex){
},"~N,~N,~N,~A,~N");
$_M(c$,"getPixels",
function(x,y,getWidth,pixels,startIndex){
},"~N,~N,~N,~A,~N");
$_M(c$,"getRGBs",
function(){
return this.palette.getRGBs();
});
$_M(c$,"getTransparencyMask",
function(){
return new $wt.graphics.ImageData(this.url);
});
$_M(c$,"getTransparencyType",
function(){
if(this.maskData!=null)return 2;
if(this.transparentPixel!=-1)return 4;
if(this.alphaData!=null)return 1;
return 0;
});
$_M(c$,"scaledTo",
function(width,height){
return null;
},"~N,~N");
$_M(c$,"setAlpha",
function(x,y,alpha){
},"~N,~N,~N");
$_M(c$,"setAlphas",
function(x,y,putWidth,alphas,startIndex){
},"~N,~N,~N,~A,~N");
$_M(c$,"setPixel",
function(x,y,pixelValue){
},"~N,~N,~N");
$_M(c$,"setPixels",
function(x,y,putWidth,pixels,startIndex){
},"~N,~N,~N,~A,~N");
$_M(c$,"setPixels",
function(x,y,putWidth,pixels,startIndex){
},"~N,~N,~N,~A,~N");
});
$_L(["$wt.widgets.Widget"],"$wt.widgets.Item",null,function(){
c$=$_C(function(){
this.text=null;
this.image=null;
$_Z(this,arguments);
},$wt.widgets,"Item",$wt.widgets.Widget);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.Item,[parent,style]);
this.text="";
},"$wt.widgets.Widget,~N");
$_K(c$,
function(parent,style,index){
this.construct(parent,style);
},"$wt.widgets.Widget,~N,~N");
$_M(c$,"getImage",
function(){
return this.image;
});
$_V(c$,"getNameText",
function(){
return this.getText();
});
$_M(c$,"getText",
function(){
return this.text;
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.Item,"releaseWidget",[]);
this.text=null;
this.image=null;
});
$_M(c$,"setImage",
function(image){
this.image=image;
},"$wt.graphics.Image");
$_M(c$,"setText",
function(string){
this.text=string;
},"~S");
});
c$=$_T($wt.widgets,"Layout");
$_M(c$,"flushCache",
function(control){
return false;
},"$wt.widgets.Control");
