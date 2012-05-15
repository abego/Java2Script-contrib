﻿/* http://j2s.sf.net/ */$_L(["java.util.Date"],"$wt.widgets.DesktopItem",null,function(){
c$=$_C(function(){
this.display=null;
this.handle=null;
this.isAutoHide=true;
this.lastUpdated=0;
this.isJustUpdated=false;
this.mouseAlreadyMoved=false;
this.layerZIndex=-1;
this.leaving=null;
this.leavingTimeoutHandle=0;
$_Z(this,arguments);
},$wt.widgets,"DesktopItem");
$_Y(c$,function(){
this.lastUpdated=new java.util.Date().getTime();
});
$_M(c$,"updateLastModified",
function(){
this.lastUpdated=new java.util.Date().getTime();
this.mouseAlreadyMoved=false;
if(this.isAutoHide){
if(this.leavingTimeoutHandle!=0){
w$.clearTimeout(this.leavingTimeoutHandle);
this.leavingTimeoutHandle=0;
}if(this.leaving==null){
this.leaving=$_Q((($_D("$wt.widgets.DesktopItem$1")?0:org.eclipse.swt.widgets.DesktopItem.$DesktopItem$1$()),$_N($wt.widgets.DesktopItem$1,this,null)));
}this.leavingTimeoutHandle=w$.setTimeout(this.leaving,2000);
}});
c$.$DesktopItem$1$=function(){
$_H();
c$=$_W($wt.widgets,"DesktopItem$1",null,Runnable);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.DesktopItem"].mouseAlreadyMoved){
this.b$["$wt.widgets.DesktopItem"].handleLeaving();
}this.b$["$wt.widgets.DesktopItem"].leavingTimeoutHandle=0;
});
c$=$_P();
};
});
$_L(["$wt.widgets.DesktopItem"],"$wt.widgets.TaskBar",["java.util.Date","$wt.internal.ResizeSystem","$.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Decorations","$.Dialog","$.Display"],function(){
$WTC$$.registerCSS ("$wt.widgets.TaskBar", ".shell-manager-sidebar {\nposition:absolute;\ntop:0;\nleft:0;\n/*z-index:3690;*/\n}\n.shell-manager-bar {\nposition:absolute;\nleft:0;\nwidth:48px;\nbackground-color:rgb(57,61,254);\nborder-style:solid solid solid none;\nborder-width:1px;\nborder-color:buttonshadow;\nfont-size:0;\nmargin:0;\npadding:0;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n}\n.shell-manager-bar-minimized {\nposition:absolute;\nleft:0;\nwidth:8px;\nfont-size:0;\nmargin:0;\npadding:0;\nbackground-color:rgb(57,61,254);\nborder-style:solid solid solid none;\nborder-width:1px;\nborder-color:buttonshadow;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n}\n.shell-item, a.shell-item {\ndisplay:block;\ntext-decoration:none;\ncursor:default;\nposition:absolute;\nleft:16px;\nwidth:150px;\nheight:26px;\nfont-size:0;\nmargin:0;\npadding:0;\nbackground-color:buttonface;\nborder:1px solid navy;\nopacity:0.75;\nfilter:Alpha(Opacity=75);\n}\n.shell-item:hover, a.shell-item:hover {\nbackground-color:highlight;\ncolor:highlighttext;\nborder:1px solid navy;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n}\n.shell-top-item {\n/*border:1px solid darkred;*/\nopacity:1;\nfilter:Alpha(Opacity=100);\n}\n.shell-top-item:hover, a.shell-top-item:hover {\n/*border:1px solid navy;*/\nbackground-color:highlight;\ncolor:highlighttext;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n/*opacity:0.75;\nfilter:Alpha(Opacity=75);*/\n}\na.shell-item:focus {\nbackground-color:buttonhighlight;\n}\n.shell-item-icon {\nfloat:left;\n/*background-color:buttonface;*/\nbackground-repeat:no-repeat;\nbackground-position:center center;\nbackground-image:url(\'images/shell-packed.gif\');\nwidth:16px;\nheight:16px;\nposition:relative;\nleft:8px;\ntop:50%;\nmargin-top:-7px;\n_margin-top:-8px;\n}\n.shell-item-icon-console {\nbackground-position:bottom left !important;\n}\n*:first-child+html .shell-item-icon { /* IE7 */\nmargin-top:-8px;\n}\n.shell-item-text {\nposition:relative;\ntext-align:left;\nfont-family:Arial, sans-serif;\nfont-size:10pt;\ncolor:buttontext;\n/*width:108px;*/\noverflow:hidden;\nheight:1.5em;\nwhite-space:nowrap;\ntop:50%;\nleft:36px;\n_left:18px;\nmargin-top:-0.6em;\n}\n*:first-child+html .shell-item-text { /* IE7 */\nleft:18px;\n}\n.swt-widgets-taskbar {\nwidth:324px;\n}");
c$=$_C(function(){
this.barEl=null;
this.items=null;
this.hBarToggle=null;
this.hBarClick=null;
this.hBarMouesEnter=null;
$_Z(this,arguments);
},$wt.widgets,"TaskBar",$wt.widgets.DesktopItem);
$_Y(c$,function(){
this.items=new Array(0);
});
$_K(c$,
function(display){
$_R(this,$wt.widgets.TaskBar);
this.display=display;
},"$wt.widgets.Display");
$_M(c$,"setTasksVisible",
function(visible){
if(this.items.length<=0){
return;
}for(var i=0;i<this.items.length;i++){
var itemDiv=this.items[i].itemHandle;
itemDiv.style.display=visible?"":"none";
}
},"~B");
$_V(c$,"bringToTop",
function(zIdx){
if(this.items.length<=0){
return;
}var zIndex=-1;
if(zIdx==-1){
w$.currentTopZIndex++;
zIndex=w$.currentTopZIndex;
if($wt.widgets.Display.getTopMaximizedShell()==null){
this.layerZIndex=zIndex;
}}else{
zIndex=zIdx;
}if(zIndex==-1&&!O$.isIE){
zIndex="";
}this.handle.style.zIndex=zIndex;
},"~N");
$_V(c$,"updateLayout",
function(){
this.updateItems();
});
$_M(c$,"createShellItem",
function(shell){
for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null&&item.shell===shell){
return;
}}
if($wt.widgets.Dialog.isDialog(shell)){
return;
}if(this.handle==null){
this.initialize();
}var text=null;
{
if(window["swt.task.bar"]==false){
return;
}
if(typeof shell=="string"){
text=shell;
shell=null;
}else{
text=shell.getText();
}
}if(text==null){
text="Java2Script";
}var tag="A";
if(!O$.isIENeedPNGFix){
tag="DIV";
}var si=d$.createElement(tag);
si.className="shell-item";
if(tag==="A"){
si.href="#";
}si.title=text;
if(this.barEl.style.display==="none"){
this.barEl.style.display="";
}if(this.barEl.className.indexOf("minimized")!=-1){
si.style.display="none";
}Clazz.addEvent(si,"mouseover",this.hBarMouesEnter);
this.handle.appendChild(si);
var icon=d$.createElement("DIV");
icon.className="shell-item-icon";
si.appendChild(icon);
var div=d$.createElement("DIV");
div.className="shell-item-text";
var hNoTextSelection=O$.setTextSelection(div,false);
si.appendChild(div);
div.appendChild(d$.createTextNode(text));
var w=O$.getStringStyledWidth(text,"shell-item-text","")+8;
if(w>120){
w=120;
}div.style.width=w+"px";
si.style.width=(w+48)+"px";
if(O$.isIE80){
div.style.top="1em";
div.style.left="20px";
}var hShellItemClick=null;
if(shell!=null){
hShellItemClick=$_Q((($_D("$wt.widgets.TaskBar$1")?0:org.eclipse.swt.widgets.TaskBar.$TaskBar$1$()),$_N($wt.widgets.TaskBar$1,this,$_F("shell",shell))));
Clazz.addEvent(si,"click",hShellItemClick);
}this.items[this.items.length]=new $wt.widgets.TaskBar.TaskItem(shell,text,si,div,icon,hShellItemClick,hNoTextSelection);
var supportShadow=false;
{
supportShadow=window["swt.disable.shadow"]!=true;
}if(supportShadow){
$wt.widgets.Decorations.createNarrowShadowHandles(si);
}this.updateItems();
this.keepAutoHide();
},"$wt.widgets.Shell");
$_M(c$,"keepAutoHide",
function(){
var taskBar=this.display.taskBar;
if(taskBar!=null&&taskBar.isAutoHide){
var createdTime=new java.util.Date().getTime();
taskBar.lastUpdated=createdTime;
this.display.timerExec(2000,(($_D("$wt.widgets.TaskBar$2")?0:org.eclipse.swt.widgets.TaskBar.$TaskBar$2$()),$_N($wt.widgets.TaskBar$2,this,$_F("createdTime",createdTime))));
}});
$_M(c$,"removeShellItem",
function(shell){
if(this.items==null){
return;
}for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null&&item.shell===shell){
item.releaseFromBar(this);
this.items[i]=null;
break;
}}
if(shell.getMaximized()&&this.display.topBar!=null){
this.display.topBar.hide();
}{
if(window["swt.task.bar"]==false){return;}
}this.syncItems();
this.updateItems();
if(this.items.length==0){
this.handle.style.display="none";
this.barEl.style.display="none";
}this.keepAutoHide();
},"$wt.widgets.Shell");
$_M(c$,"syncItems",
function(){
if(this.barEl==null){
return;
}var delta=0;
for(var i=0;i<this.items.length-delta;i++){
while(this.items[i+delta]==null&&i+delta<this.items.length){
delta++;
}
this.items[i]=this.items[i+delta];
}
{
this.items.length-=delta;
}});
$_M(c$,"isAround",
function(x,y){
var barHeight=0;
this.syncItems();
var length=this.items.length;
if(length==0){
barHeight=36;
}else{
var si=this.items[0].itemHandle;
var hh=Math.max(Math.max(si.scrollHeight,si.offsetHeight),si.clientHeight)+12;
barHeight=(length*hh+36);
}var height=O$.getFixedBodyClientHeight();
var offset=O$.getFixedBodyOffsetTop()+Math.round(Math.floor((height-barHeight)/2));
var y1=offset-72;
var y2=offset+barHeight+72;
return(y>=y1&&y<=y2);
},"~N,~N");
$_M(c$,"updateItems",
function(){
if(this.barEl==null){
return;
}this.syncItems();
{
if(window["swt.task.bar"]==false){
return;
}
}var length=this.items.length;
if(length==0){
this.barEl.style.height="36px";
var offset=0;
var height=O$.getFixedBodyClientHeight();
offset=O$.getFixedBodyOffsetTop()+Math.round(Math.floor((height-36)/2));
this.barEl.style.top=offset+"px";
return;
}var si=this.items[0].itemHandle;
var alreadyHidden=false;
if(si.style.display==="none"){
si.style.display="";
alreadyHidden=true;
}var hh=Math.max(Math.max(si.scrollHeight,si.offsetHeight),si.clientHeight)+12;
if(alreadyHidden){
si.style.display="none";
}var height=O$.getFixedBodyClientHeight();
var offset=O$.getFixedBodyOffsetTop()+Math.round(Math.floor((height-(length*hh+36))/2));
var topShell=$wt.widgets.Display.getTopShell();
for(var i=0;i<length;i++){
var item=this.items[i];
item.itemHandle.style.top=offset+(i*hh+24)+"px";
if(item.shell!=null){
var text=item.shell.getText();
if(text!==item.text){
O$.clearChildren(item.textHandle);
item.textHandle.appendChild(d$.createTextNode(text));
item.itemHandle.title=text;
item.text=text;
}var image=item.shell.getImage();
var handleStyle=item.iconHandle.style;
if(image!=null){
if(O$.isIENeedPNGFix&&image.url!=null&&image.url.toLowerCase().endsWith(".png")&&handleStyle.filter!=null){
handleStyle.backgroundImage="url(\"about:blank\")";
handleStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+image.url+"\", sizingMethod=\"image\")";
}else{
if(O$.isIENeedPNGFix&&handleStyle.filter!=null)handleStyle.filter="";
handleStyle.backgroundImage="url(\""+image.url+"\")";
}}else{
var cssClazzName=null;
if(item.shell.shellIcon!=null){
cssClazzName=item.shell.shellIcon.className;
}if(cssClazzName!=null&&cssClazzName.indexOf("shell-title-icon-console")!=-1){
O$.addCSSClass(item.iconHandle,"shell-item-icon-console");
}handleStyle.backgroundImage="";
if(O$.isIENeedPNGFix&&handleStyle.filter!=null){
handleStyle.filter="";
}}item.itemHandle.style.borderColor=item.shell.getMinimized()?"buttonshadow":"";
var isTopShell=item.shell===topShell;
var sh=topShell;
while(!isTopShell&&sh!=null){
isTopShell=item.shell===sh;
sh=sh.parent;
}
if(isTopShell){
O$.addCSSClass(item.itemHandle,"shell-top-item");
}else{
O$.removeCSSClass(item.itemHandle,"shell-top-item");
}}}
this.barEl.style.height=(length*hh+36)+"px";
this.barEl.style.top=offset+"px";
offset=O$.getFixedBodyOffsetLeft();
this.handle.style.left=offset+"px";
});
$_V(c$,"initialize",
function(){
{
if(window["swt.task.bar"]==false){
return;
}
}if($wt.widgets.Display.bodyOverflow==null){
var body=d$.body;
($t$=$wt.widgets.Display.bodyOverflow=body.style.overflow,$wt.widgets.Display.prototype.bodyOverflow=$wt.widgets.Display.bodyOverflow,$t$);
($t$=$wt.widgets.Display.bodyHeight=body.style.height,$wt.widgets.Display.prototype.bodyHeight=$wt.widgets.Display.bodyHeight,$t$);
($t$=$wt.widgets.Display.htmlOverflow=body.parentNode.style.overflow,$wt.widgets.Display.prototype.htmlOverflow=$wt.widgets.Display.htmlOverflow,$t$);
($t$=$wt.widgets.Display.bodyScrollLeft=body.scrollLeft,$wt.widgets.Display.prototype.bodyScrollLeft=$wt.widgets.Display.bodyScrollLeft,$t$);
($t$=$wt.widgets.Display.bodyScrollTop=body.scrollTop,$wt.widgets.Display.prototype.bodyScrollTop=$wt.widgets.Display.bodyScrollTop,$t$);
($t$=$wt.widgets.Display.htmlScrollLeft=body.parentNode.scrollLeft,$wt.widgets.Display.prototype.htmlScrollLeft=$wt.widgets.Display.htmlScrollLeft,$t$);
($t$=$wt.widgets.Display.htmlScrollTop=body.parentNode.scrollTop,$wt.widgets.Display.prototype.htmlScrollTop=$wt.widgets.Display.htmlScrollTop,$t$);
body.parentNode.scrollLeft=0;
body.parentNode.scrollTop=0;
body.scrollLeft=0;
body.scrollTop=0;
if(body.style.overflow!=="hidden"){
body.style.overflow="hidden";
}if(body.style.height!=="100%"){
body.style.height="100%";
}if(body.parentNode.style.overflow!=="hidden"){
body.parentNode.style.overflow="hidden";
}}if(this.handle!=null)return;
var sb=d$.createElement("DIV");
sb.className="shell-manager-sidebar";
sb.style.lineHeight="16px";
sb.style.display="none";
d$.body.appendChild(sb);
this.handle=sb;
var bb=d$.createElement("DIV");
bb.className="shell-manager-bar";
sb.appendChild(bb);
this.barEl=bb;
this.hBarMouesEnter=$_Q((($_D("$wt.widgets.TaskBar$3")?0:org.eclipse.swt.widgets.TaskBar.$TaskBar$3$()),$_N($wt.widgets.TaskBar$3,this,null)));
Clazz.addEvent(this.barEl,"mouseover",this.hBarMouesEnter);
this.hBarClick=$_Q((($_D("$wt.widgets.TaskBar$4")?0:org.eclipse.swt.widgets.TaskBar.$TaskBar$4$()),$_N($wt.widgets.TaskBar$4,this,null)));
Clazz.addEvent(this.barEl,"click",this.hBarClick);
this.hBarToggle=$_Q((($_D("$wt.widgets.TaskBar$5")?0:org.eclipse.swt.widgets.TaskBar.$TaskBar$5$()),$_N($wt.widgets.TaskBar$5,this,null)));
Clazz.addEvent(this.barEl,"dblclick",this.hBarToggle);
this.barEl.title="Doubleclick to set taskbar auto-hide";
var supportShadow=false;
{
supportShadow=window["swt.disable.shadow"]!=true;
}if(supportShadow){
$wt.widgets.Decorations.appendShadowHandles(this.barEl,true,true,true,false);
}});
$_M(c$,"setMinimized",
function(minimized){
var alreadyMinimized=this.barEl.className.indexOf("minimized")!=-1;
if(alreadyMinimized==minimized)return false;
this.barEl.className="shell-manager-bar"+(minimized?"-minimized":"");
this.setTasksVisible(!minimized);
return true;
},"~B");
$_M(c$,"handleApproaching",
function(){
if(this.barEl==null){
return;
}if(this.items.length!=0){
this.handle.style.display="block";
var zIndex=w$.currentTopZIndex+1;
if(this.handle.style.zIndex!=zIndex){
this.layerZIndex=this.handle.style.zIndex;
this.bringToTop(zIndex);
}this.updateItems();
}});
$_V(c$,"handleLeaving",
function(){
if(this.barEl==null){
return;
}if(this.items.length==0){
this.handle.style.display="none";
}if(this.layerZIndex!=-1){
this.bringToTop(this.layerZIndex);
this.layerZIndex=-1;
}if(this.isAutoHide){
this.setMinimized(true);
}});
$_M(c$,"isApproaching",
function(now,x,y,ctrlKey){
return!ctrlKey&&x<=8&&this.isAround(x,y);
},"~N,~N,~N,~B");
$_M(c$,"isLeaving",
function(now,x,y,ctrlKey){
return ctrlKey||x>200||!this.isAround(x,y);
},"~N,~N,~N,~B");
$_V(c$,"releaseWidget",
function(){
if(this.items!=null){
for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null){
item.releaseFromBar(this);
this.items[i]=null;
break;
}}
this.items=null;
}if(this.barEl!=null){
if(this.hBarClick!=null){
Clazz.removeEvent(this.barEl,"click",this.hBarClick);
this.hBarClick=null;
}if(this.hBarToggle!=null){
Clazz.removeEvent(this.barEl,"dblclick",this.hBarToggle);
this.hBarToggle=null;
}if(this.hBarMouesEnter!=null){
Clazz.removeEvent(this.barEl,"mouseover",this.hBarMouesEnter);
this.hBarMouesEnter=null;
}O$.destroyHandle(this.barEl);
this.barEl=null;
}if(this.handle!=null){
O$.destroyHandle(this.handle);
this.handle=null;
}});
$_M(c$,"toggleAutoHide",
function(){
this.isAutoHide=!this.isAutoHide;
this.barEl.title=this.isAutoHide?"Doubleclick to set taskbar always-visible":"Doubleclick to set taskbar auto-hide";
this.setMinimized(this.isAutoHide);
if(this.isJustUpdated){
return;
}this.bringToTop(-1);
});
c$.$TaskBar$1$=function(){
$_H();
c$=$_W($wt.widgets,"TaskBar$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.f$.shell.getMinimized()){
this.f$.shell.setMinimized(false);
this.f$.shell.bringToTop();
}else{
var lastShell=$wt.widgets.Display.getTopShell();
if(this.f$.shell===lastShell){
$wt.internal.ResizeSystem.unregister(this.f$.shell,128);
this.f$.shell.setMinimized(true);
if(this.b$["$wt.widgets.TaskBar"].display.topBar!=null){
this.b$["$wt.widgets.TaskBar"].display.topBar.returnTopMaximized(this.f$.shell);
}}else{
this.f$.shell.bringToTop();
}}this.b$["$wt.widgets.TaskBar"].updateItems();
this.toReturn(false);
});
c$=$_P();
};
c$.$TaskBar$2$=function(){
$_H();
c$=$_W($wt.widgets,"TaskBar$2",null,Runnable);
$_V(c$,"run",
function(){
var taskBar=this.b$["$wt.widgets.TaskBar"].display.taskBar;
if(Math.abs(taskBar.lastUpdated-this.f$.createdTime)<250){
taskBar.setMinimized(taskBar.isAutoHide);
}});
c$=$_P();
};
c$.$TaskBar$3$=function(){
$_H();
c$=$_W($wt.widgets,"TaskBar$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.TaskBar"].isAutoHide){
this.b$["$wt.widgets.TaskBar"].setMinimized(false);
}var zIndex=w$.currentTopZIndex+1;
if(this.b$["$wt.widgets.TaskBar"].handle.style.zIndex!=zIndex){
this.b$["$wt.widgets.TaskBar"].layerZIndex=this.b$["$wt.widgets.TaskBar"].handle.style.zIndex;
this.b$["$wt.widgets.TaskBar"].bringToTop(zIndex);
}});
c$=$_P();
};
c$.$TaskBar$4$=function(){
$_H();
c$=$_W($wt.widgets,"TaskBar$4",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.TaskBar"].setMinimized(false)){
this.b$["$wt.widgets.TaskBar"].isJustUpdated=true;
w$.setTimeout($_Q((($_D("$wt.widgets.TaskBar$4$1")?0:org.eclipse.swt.widgets.TaskBar.$TaskBar$4$1$()),$_N($wt.widgets.TaskBar$4$1,this,null))),500);
}this.b$["$wt.widgets.TaskBar"].bringToTop(-1);
});
c$=$_P();
};
c$.$TaskBar$4$1$=function(){
$_H();
c$=$_W($wt.widgets,"TaskBar$4$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.TaskBar"].isJustUpdated=false;
});
c$=$_P();
};
c$.$TaskBar$5$=function(){
$_H();
c$=$_W($wt.widgets,"TaskBar$5",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.TaskBar"].toggleAutoHide();
});
c$=$_P();
};
$_H();
c$=$_C(function(){
this.shell=null;
this.text=null;
this.itemHandle=null;
this.textHandle=null;
this.iconHandle=null;
this.hShellItemClick=null;
this.hTextSelection=null;
$_Z(this,arguments);
},$wt.widgets.TaskBar,"TaskItem");
$_K(c$,
function(a,b,c,d,e,f,g){
this.shell=a;
this.text=b;
this.itemHandle=c;
this.textHandle=d;
this.iconHandle=e;
this.hShellItemClick=f;
this.hTextSelection=g;
},"$wt.widgets.Shell,~S,Element,Element,Element,~O,~O");
$_M(c$,"releaseFromBar",
function(a){
this.shell=null;
if(this.hShellItemClick!=null){
Clazz.removeEvent(this.itemHandle,"click",this.hShellItemClick);
this.hShellItemClick=null;
}if(this.hTextSelection!=null){
Clazz.removeEvent(this.textHandle,"selectstart",this.hTextSelection);
this.hTextSelection=null;
}if(a.hBarMouesEnter!=null){
Clazz.removeEvent(this.itemHandle,"mouseover",a.hBarMouesEnter);
}if(this.textHandle!=null){
O$.destroyHandle(this.textHandle);
this.textHandle=null;
}if(this.iconHandle!=null){
O$.destroyHandle(this.iconHandle);
this.iconHandle=null;
}if(this.itemHandle!=null){
O$.destroyHandle(this.itemHandle);
this.itemHandle=null;
}},"$wt.widgets.TaskBar");
c$=$_P();
});
$_L(["$wt.widgets.DesktopItem"],"$wt.widgets.MaximizedTitle",["$wt.internal.browser.OS","$wt.widgets.Decorations","$.Display"],function(){
$WTC$$.registerCSS ("$wt.widgets.MaximizedTitle", ".shell-manager-topbar-container {\nposition:absolute;\nleft:0;\ntop:0;\nborder:1px solid windowframe;\nborder-top:0 none transparent;\nbackground-color:buttonface;\npadding:2px;\nheight:24px;\n/*font-size:10pt;\nheight:1.6em;\nmin-height:24px;\n_height:1.7em;*/\nwidth:320px;\nz-index:6174;\ntext-align:left;\nfont-size:0;\nmargin:0;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n}\n*:first-child+html .shell-manager-topbar-container { /* IE7 */\n/*height:1.7em;*/\n}\n.swt-widgets-maximizedtitle {\nwidth:324px;\n}");
c$=$_C(function(){
this.lastMaximizedShell=null;
this.topbarEl=null;
this.hMaxClick=null;
$_Z(this,arguments);
},$wt.widgets,"MaximizedTitle",$wt.widgets.DesktopItem);
$_K(c$,
function(display){
$_R(this,$wt.widgets.MaximizedTitle);
this.display=display;
},"$wt.widgets.Display");
$_V(c$,"updateLayout",
function(){
var lastShell=$wt.widgets.Display.getTopMaximizedShell();
if(lastShell==null||lastShell.titleBar==null)return;
this.lastMaximizedShell=lastShell;
var els=new Array(0);
for(var i=0;i<lastShell.titleBar.childNodes.length;i++){
els[i]=lastShell.titleBar.childNodes[i];
}
for(var i=0;i<els.length;i++){
lastShell.titleBar.removeChild(els[i]);
this.topbarEl.appendChild(els[i]);
}
this.handle.style.left=Math.round(Math.floor((O$.getFixedBodyClientWidth()-320)/2))+"px";
this.topbarEl.style.width="316px";
if(O$.isIE){
this.topbarEl.style.left="1px";
}else{
this.topbarEl.style.left="2px";
}this.topbarEl.style.top="1px";
this.hMaxClick=lastShell.hMaxClick;
if(this.hMaxClick!=null){
Clazz.addEvent(this.handle,"dblclick",this.hMaxClick);
}lastShell.updateShellTitle(324);
});
$_M(c$,"returnTopMaximized",
function(shell){
var lastShell=this.lastMaximizedShell;
if(shell!=null&&lastShell!==shell)return;
if(lastShell==null||lastShell.titleBar==null)return;
var els=new Array(0);
for(var i=0;i<this.topbarEl.childNodes.length;i++){
els[i]=this.topbarEl.childNodes[i];
}
for(var i=0;i<els.length;i++){
lastShell.titleBar.appendChild(els[i]);
}
if(shell!=null){
this.handle.style.display="none";
}},"$wt.widgets.Shell");
$_V(c$,"initialize",
function(){
if(this.handle!=null)return;
var tbc=d$.createElement("DIV");
tbc.className="shell-manager-topbar-container";
d$.body.appendChild(tbc);
tbc.style.lineHeight="16px";
tbc.style.display="none";
this.handle=tbc;
var supportShadow=false;
{
supportShadow=window["swt.disable.shadow"]!=true;
}if(supportShadow){
$wt.widgets.Decorations.appendShadowHandles(this.handle,false,true,true,true);
}var tb=d$.createElement("DIV");
tb.className="shell-title-bar shell-maximized";
this.handle.appendChild(tb);
this.topbarEl=tb;
});
$_M(c$,"isAround",
function(now,x,y){
if(now-this.lastUpdated<1000){
return true;
}var barWidth=320;
var width=O$.getFixedBodyClientWidth();
var offset=Math.round(Math.floor((width-barWidth)/2));
var x1=offset-72;
var x2=offset+barWidth+72;
return(x>=x1&&x<=x2);
},"~N,~N,~N");
$_M(c$,"hide",
function(){
var smStyle=this.handle.style;
if(smStyle.display==="block"){
smStyle.display="none";
}});
$_M(c$,"handleApproaching",
function(){
var topbar=this.handle;
if(topbar==null)return;
if(topbar.style.display!=="block"){
var lastShell=$wt.widgets.Display.getTopMaximizedShell();
if(lastShell!=null&&lastShell.titleBar!=null){
topbar.style.display="block";
this.updateLayout();
}}});
$_V(c$,"handleLeaving",
function(){
var topbar=this.handle;
if(topbar==null)return;
if(topbar.style.display!=="none"){
topbar.style.display="none";
this.returnTopMaximized(null);
}});
$_M(c$,"isApproaching",
function(now,x,y,ctrlKey){
return(y<=8&&!ctrlKey)&&this.isAround(now,x,y);
},"~N,~N,~N,~B");
$_M(c$,"isLeaving",
function(now,x,y,ctrlKey){
var topShell=$wt.widgets.Display.getTopMaximizedShell();
if(topShell==null)return false;
return!this.isAround(now,x,y)||ctrlKey||y>12+((topShell.titleBar!=null)?O$.getContainerHeight(topShell.titleBar):20);
},"~N,~N,~N,~B");
$_V(c$,"bringToTop",
function(index){
},"~N");
$_M(c$,"isVisible",
function(){
return this.handle.style.display!=="none";
});
$_V(c$,"releaseWidget",
function(){
if(this.handle!=null){
if(this.hMaxClick!=null){
Clazz.removeEvent(this.handle,"dblclick",this.hMaxClick);
this.hMaxClick=null;
}O$.destroyHandle(this.handle);
this.handle=null;
}if(this.topbarEl!=null){
O$.destroyHandle(this.topbarEl);
this.topbarEl=null;
}});
});
$_L(["$wt.widgets.DesktopItem"],"$wt.widgets.QuickLaunch",["$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Decorations","$.Display"],function(){
$WTC$$.registerCSS ("$wt.widgets.QuickLaunch", ".shortcut-bar {\nposition:absolute;\nbottom:0;\nheight:32px;\nbackground-color:rgb(57,61,254);\nmargin:0;\npadding:0;\nfont-size:0;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n}\n.shortcut-item {\nposition:absolute;\nbottom:12px;\nheight:40px;\nwidth:40px;\nbackground-color:menu;\nbackground-repeat:no-repeat;\nbackground-position:center center;\nbackground-image: url(\'images/z-logo.png\');\nborder:1px solid buttonshadow;\nmargin:0;\npadding:0;\nfont-size:0;\nopacity:0.6;\nfilter:Alpha(Opacity=60);\ntext-align:left;\n}\n* html .shortcut-item {\nwidth:42px;\nheight:42px;\n}\n.shortcut-bar-minimized {\nposition:absolute;\nbottom:0;\nheight:8px;\nbackground-color:rgb(57,61,254);\nmargin:0;\npadding:0;\nfont-size:0;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n}\n* html .shortcut-bar {\nbottom:-1px;\n}\n* html .shortcut-bar-minimized {\nbottom:-1px;\n}\n.shortcut-item:hover, a.shortcut-item:hover .shortcut-item-highlight {\nborder:1px solid navy;\nbackground-color:highlight;\ncolor:highlighttext;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n}\n.shortcut-active-item {\n/*border:1px solid darkred;*/\nopacity:1;\nfilter:Alpha(Opacity=100);\n}\n.shortcut-active-item:hover, a.shortcut-active-item:hover {\n/*border:1px solid navy;*/\nbackground-color:highlight;\ncolor:highlighttext;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n}\n.swt-widgets-quicklaunch {\nwidth:324px;\n}");
c$=$_C(function(){
this.shortcutCount=0;
this.shortcutItems=null;
this.alreadyInitialized=false;
this.hLaunchMouseEnter=null;
this.hLaunchClick=null;
this.hLaunchToggle=null;
$_Z(this,arguments);
},$wt.widgets,"QuickLaunch",$wt.widgets.DesktopItem);
$_Y(c$,function(){
this.shortcutItems=new Array(0);
});
$_K(c$,
function(display){
$_R(this,$wt.widgets.QuickLaunch);
this.display=display;
this.isAutoHide=false;
},"$wt.widgets.Display");
$_V(c$,"initialize",
function(){
if(this.alreadyInitialized){
return;
}this.alreadyInitialized=true;
if($wt.widgets.Display.bodyOverflow==null){
var body=d$.body;
($t$=$wt.widgets.Display.bodyOverflow=body.style.overflow,$wt.widgets.Display.prototype.bodyOverflow=$wt.widgets.Display.bodyOverflow,$t$);
($t$=$wt.widgets.Display.bodyHeight=body.style.height,$wt.widgets.Display.prototype.bodyHeight=$wt.widgets.Display.bodyHeight,$t$);
($t$=$wt.widgets.Display.htmlOverflow=body.parentNode.style.overflow,$wt.widgets.Display.prototype.htmlOverflow=$wt.widgets.Display.htmlOverflow,$t$);
($t$=$wt.widgets.Display.bodyScrollLeft=body.scrollLeft,$wt.widgets.Display.prototype.bodyScrollLeft=$wt.widgets.Display.bodyScrollLeft,$t$);
($t$=$wt.widgets.Display.bodyScrollTop=body.scrollTop,$wt.widgets.Display.prototype.bodyScrollTop=$wt.widgets.Display.bodyScrollTop,$t$);
($t$=$wt.widgets.Display.htmlScrollLeft=body.parentNode.scrollLeft,$wt.widgets.Display.prototype.htmlScrollLeft=$wt.widgets.Display.htmlScrollLeft,$t$);
($t$=$wt.widgets.Display.htmlScrollTop=body.parentNode.scrollTop,$wt.widgets.Display.prototype.htmlScrollTop=$wt.widgets.Display.htmlScrollTop,$t$);
body.parentNode.scrollLeft=0;
body.parentNode.scrollTop=0;
body.scrollLeft=0;
body.scrollTop=0;
if(body.style.overflow!=="hidden"){
body.style.overflow="hidden";
}if(body.style.height!=="100%"){
body.style.height="100%";
}if(body.parentNode.style.overflow!=="hidden"){
body.parentNode.style.overflow="hidden";
}}this.handle=d$.createElement("DIV");
this.handle.className="shortcut-bar";
d$.body.appendChild(this.handle);
this.hLaunchMouseEnter=$_Q((($_D("$wt.widgets.QuickLaunch$1")?0:org.eclipse.swt.widgets.QuickLaunch.$QuickLaunch$1$()),$_N($wt.widgets.QuickLaunch$1,this,null)));
Clazz.addEvent(this.handle,"mouseover",this.hLaunchMouseEnter);
this.hLaunchClick=$_Q((($_D("$wt.widgets.QuickLaunch$2")?0:org.eclipse.swt.widgets.QuickLaunch.$QuickLaunch$2$()),$_N($wt.widgets.QuickLaunch$2,this,null)));
Clazz.addEvent(this.handle,"click",this.hLaunchClick);
this.handle.title="Doubleclick to hide shortcuts";
this.hLaunchToggle=$_Q((($_D("$wt.widgets.QuickLaunch$3")?0:org.eclipse.swt.widgets.QuickLaunch.$QuickLaunch$3$()),$_N($wt.widgets.QuickLaunch$3,this,null)));
Clazz.addEvent(this.handle,"dblclick",this.hLaunchToggle);
var supportShadow=false;
{
supportShadow=window["swt.disable.shadow"]!=true;
}if(supportShadow){
$wt.widgets.Decorations.appendShadowHandles(this.handle,true,true,false,true);
}var childNodes=d$.body.childNodes;
var children=new Array(childNodes.length);
for(var i=0;i<childNodes.length;i++){
children[i]=childNodes[i];
}
var panel=d$.getElementById("swt-desktop-panel");
if(panel!=null){
var offset=children.length;
childNodes=panel.childNodes;
for(var i=0;i<childNodes.length;i++){
children[offset+i]=childNodes[i];
}
}var qlContainer=d$.getElementById("quick-launch");
if(qlContainer!=null){
childNodes=qlContainer.childNodes;
var length=children.length;
for(var i=0;i<childNodes.length;i++){
children[i+length]=childNodes[i];
}
}var existed=false;
for(var i=0;i<children.length;i++){
var child=children[i];
if(child.nodeName==="A"&&child.className!=null&&child.className.indexOf("alaa")!=-1&&child.className.indexOf("ignored")==-1){
existed=true;
var icon=null;
for(var j=0;j<child.childNodes.length;j++){
var item=child.childNodes[j];
if(item!=null&&item.className!=null&&item.className.indexOf("alaa-icon")!=-1){
icon=item.style.backgroundImage;
if(icon!=null){
if(icon.indexOf("url(")==0){
icon=icon.substring(4,icon.length-1);
}var ch=icon.charAt(0);
if((ch).charCodeAt(0)==('\'').charCodeAt (0) || (ch).charCodeAt (0) == ('\"').charCodeAt(0)){
icon=icon.substring(1,icon.length-1);
}}break;
}}
var shortcut=this.addShortcut(child.text!=null?child.text:child.innerText,icon,child.href);
var id=child.id;
O$.destroyHandle(child);
if(id!=null&&id.length>0){
shortcut.id=id;
}}}
if(existed){
($t$=$wt.widgets.QuickLaunch.defaultQuickLaunch=this,$wt.widgets.QuickLaunch.prototype.defaultQuickLaunch=$wt.widgets.QuickLaunch.defaultQuickLaunch,$t$);
}else{
this.handle.style.display="none";
}});
$_M(c$,"setMinimized",
function(minimized){
var alreadyMinimized=this.handle.className.indexOf("minimized")!=-1;
if(alreadyMinimized==minimized)return false;
this.handle.className="shortcut-bar"+(minimized?"-minimized":"");
this.setShortcutsVisible(!minimized);
return true;
},"~B");
$_M(c$,"setShortcutsVisible",
function(visible){
if(this.shortcutCount<=0){
return;
}for(var i=0;i<this.shortcutCount;i++){
this.shortcutItems[i].style.display=visible?"":"none";
}
},"~B");
$_V(c$,"bringToTop",
function(zIdx){
if(this.shortcutCount<=0){
return;
}var zIndex=-1;
if(zIdx==-1){
w$.currentTopZIndex++;
zIndex=w$.currentTopZIndex;
if($wt.widgets.Display.getTopMaximizedShell()==null){
this.layerZIndex=zIndex;
}}else{
zIndex=zIdx;
}if(zIndex==-1&&!O$.isIE){
zIndex="";
}this.handle.style.zIndex=zIndex;
for(var i=0;i<this.shortcutCount;i++){
this.shortcutItems[i].style.zIndex=zIndex;
}
},"~N");
$_V(c$,"updateLayout",
function(){
if(this.shortcutCount<=0){
return;
}var barWidth=20+this.shortcutCount*60;
var barOffset=Math.floor((O$.getFixedBodyClientWidth()-barWidth)/2);
if(this.handle!=null){
this.handle.style.left=barOffset+10+"px";
this.handle.style.width=barWidth+"px";
}for(var i=0;i<this.shortcutCount;i++){
this.shortcutItems[i].style.left=(barOffset+20+10+i*60)+"px";
}
});
$_M(c$,"addShortcut",
function(name,icon,href){
{
if(window["swt.shortcut.bar"]==false){
return false;
}
}if(this.handle==null){
this.initialize();
}var tag="A";
var itemDiv=d$.createElement(tag);
itemDiv.className="shortcut-item";
if(O$.isIENeedPNGFix){
if(icon!=null&&icon.length!=0){
itemDiv.style.backgroundImage="url('"+icon+"')";
}itemDiv.href=href;
}else{
if(icon!=null&&icon.length!=0){
itemDiv.style.backgroundImage="url('"+icon+"')";
}itemDiv.href=href;
}itemDiv.title=name;
d$.body.appendChild(itemDiv);
Clazz.addEvent(itemDiv,"mouseover",this.hLaunchMouseEnter);
var supportShadow=false;
{
supportShadow=window["swt.disable.shadow"]!=true;
}if(supportShadow){
$wt.widgets.Decorations.createNarrowShadowHandles(itemDiv);
}this.shortcutItems[this.shortcutCount]=itemDiv;
this.shortcutCount++;
this.bringToTop(-1);
this.updateLayout();
this.setMinimized(false);
this.updateLastModified();
return itemDiv;
},"~S,~S,~S");
$_M(c$,"markActiveItem",
function(item){
if(this.shortcutCount<=0||item==null){
return;
}for(var i=0;i<this.shortcutCount;i++){
var itemDiv=this.shortcutItems[i];
if(item===itemDiv){
O$.addCSSClass(itemDiv,"shortcut-active-item");
}else{
O$.removeCSSClass(itemDiv,"shortcut-active-item");
}}
},"Element");
$_M(c$,"isAround",
function(x,y){
var barWidth=20+this.shortcutCount*60;
var width=O$.getFixedBodyClientWidth();
var offset=Math.round(Math.floor((width-barWidth)/2));
var x1=offset-72;
var x2=offset+barWidth+72;
return(x>=x1&&x<=x2);
},"~N,~N");
$_M(c$,"isApproaching",
function(now,x,y,ctrlKey){
return(!ctrlKey&&y>=O$.getFixedBodyClientHeight()-8&&this.isAround(x,y));
},"~N,~N,~N,~B");
$_M(c$,"isLeaving",
function(now,x,y,ctrlKey){
return(y<=O$.getFixedBodyClientHeight()-70||!this.isAround(x,y));
},"~N,~N,~N,~B");
$_M(c$,"handleApproaching",
function(){
var zIndex=w$.currentTopZIndex+1;
if(this.handle.style.zIndex!=zIndex){
this.layerZIndex=this.handle.style.zIndex;
this.bringToTop(zIndex);
}});
$_V(c$,"handleLeaving",
function(){
if(this.layerZIndex!=-1){
this.bringToTop(this.layerZIndex);
this.layerZIndex=-1;
}if(this.isAutoHide){
this.setMinimized(true);
}});
$_V(c$,"releaseWidget",
function(){
if($wt.widgets.QuickLaunch.defaultQuickLaunch!=null){
return;
}if(this.shortcutItems!=null){
for(var i=0;i<this.shortcutItems.length;i++){
var item=this.shortcutItems[i];
if(item!=null){
Clazz.removeEvent(item,"mouseover",this.hLaunchMouseEnter);
O$.destroyHandle(item);
}}
this.shortcutItems=null;
this.shortcutCount=0;
}if(this.handle!=null){
if(this.hLaunchToggle!=null){
Clazz.removeEvent(this.handle,"dblclick",this.hLaunchToggle);
this.hLaunchToggle=null;
}if(this.hLaunchClick!=null){
Clazz.removeEvent(this.handle,"click",this.hLaunchClick);
this.hLaunchClick=null;
}if(this.hLaunchMouseEnter!=null){
Clazz.removeEvent(this.handle,"mouseover",this.hLaunchMouseEnter);
this.hLaunchMouseEnter=null;
}O$.destroyHandle(this.handle);
this.handle=null;
}});
$_M(c$,"toggleAutoHide",
function(){
this.isAutoHide=!this.isAutoHide;
this.handle.title=this.isAutoHide?"Doubleclick to set quicklaunch always-visible":"Doubleclick to set quicklaunch auto-hide";
this.setMinimized(this.isAutoHide);
if(this.isJustUpdated){
return;
}this.bringToTop(-1);
});
c$.$QuickLaunch$1$=function(){
$_H();
c$=$_W($wt.widgets,"QuickLaunch$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.QuickLaunch"].isAutoHide){
this.b$["$wt.widgets.QuickLaunch"].setMinimized(false);
}var zIndex=w$.currentTopZIndex+1;
if(this.b$["$wt.widgets.QuickLaunch"].handle.style.zIndex!=zIndex){
this.b$["$wt.widgets.QuickLaunch"].layerZIndex=this.b$["$wt.widgets.QuickLaunch"].handle.style.zIndex;
this.b$["$wt.widgets.QuickLaunch"].bringToTop(zIndex);
}});
c$=$_P();
};
c$.$QuickLaunch$2$=function(){
$_H();
c$=$_W($wt.widgets,"QuickLaunch$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.QuickLaunch"].setMinimized(false)){
this.b$["$wt.widgets.QuickLaunch"].isJustUpdated=true;
w$.setTimeout($_Q((($_D("$wt.widgets.QuickLaunch$2$1")?0:org.eclipse.swt.widgets.QuickLaunch.$QuickLaunch$2$1$()),$_N($wt.widgets.QuickLaunch$2$1,this,null))),500);
}this.b$["$wt.widgets.QuickLaunch"].bringToTop(-1);
});
c$=$_P();
};
c$.$QuickLaunch$2$1$=function(){
$_H();
c$=$_W($wt.widgets,"QuickLaunch$2$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.QuickLaunch"].isJustUpdated=false;
});
c$=$_P();
};
c$.$QuickLaunch$3$=function(){
$_H();
c$=$_W($wt.widgets,"QuickLaunch$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.QuickLaunch"].toggleAutoHide();
});
c$=$_P();
};
$_S(c$,
"defaultQuickLaunch",null);
});
$_L(["$wt.widgets.DesktopItem"],"$wt.widgets.NotificationCorner",["$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Display","$.Tray"],function(){
c$=$_C(function(){
this.tray=null;
this.mouseClick=null;
this.mouseOver=null;
this.mouseDoubleClick=null;
this.hLogoClick=null;
this.minimizedEl=null;
this.alreadyInitialized=false;
this.currentZIndex=0;
$_Z(this,arguments);
},$wt.widgets,"NotificationCorner",$wt.widgets.DesktopItem);
$_K(c$,
function(display){
$_R(this,$wt.widgets.NotificationCorner);
this.display=display;
this.isAutoHide=false;
this.alreadyInitialized=false;
},"$wt.widgets.Display");
$_V(c$,"initialize",
function(){
var existed=false;
var containers=new Array(2);
containers[0]=d$.body;
containers[1]=d$.getElementById("swt-desktop-panel");
for(var k=0;k<containers.length;k++){
var container=containers[k];
if(containers[k]==null){
continue;}var divs=container.childNodes;
for(var i=0;i<divs.length;i++){
if(divs[i].className==="powered"){
O$.destroyHandle(divs[i]);
existed=true;
{
if(window["swt.notification.corner.float"]==null){
window["swt.notification.corner.float"]=true;
}
}break;
}}
if(existed){
break;
}}
if(existed){
($t$=$wt.widgets.NotificationCorner.defaultNotificationCorner=this,$wt.widgets.NotificationCorner.prototype.defaultNotificationCorner=$wt.widgets.NotificationCorner.defaultNotificationCorner,$t$);
}if(this.tray==null){
{
this.tray=new Object();
}this.tray=$wt.widgets.Display.getDefault().getSystemTray();
}if(this.alreadyInitialized){
this.handle.style.display="block";
d$.body.removeChild(this.minimizedEl);
d$.body.removeChild(this.handle);
d$.body.appendChild(this.minimizedEl);
d$.body.appendChild(this.handle);
return;
}this.alreadyInitialized=true;
this.minimizedEl=d$.createElement("DIV");
this.minimizedEl.className="tray-cell tray-minimized";
this.minimizedEl.title="Doubleclick to set notification area always-visible";
this.minimizedEl.style.display="none";
var lineColor=$wt.widgets.Tray.trayLineColor(3);
this.minimizedEl.style.borderColor=lineColor+" transparent transparent transparent";
if(O$.isIENeedPNGFix){
this.minimizedEl.style.borderRightColor="rgb(0,255,0)";
this.minimizedEl.style.filter="Chroma(Color=#00ff00);";
}d$.body.appendChild(this.minimizedEl);
this.handle=d$.createElement("DIV");
this.handle.className="tray-logo-item";
this.handle.title="Powered by Java2Script";
var needFixing=O$.isFirefox;
{
needFixing&=(navigator.userAgent.indexOf("Firefox/2.0")!=-1);
}if(needFixing){
this.handle.style.backgroundColor="white";
}d$.body.appendChild(this.handle);
this.hLogoClick=$_Q((($_D("$wt.widgets.NotificationCorner$1")?0:org.eclipse.swt.widgets.NotificationCorner.$NotificationCorner$1$()),$_N($wt.widgets.NotificationCorner$1,this,null)));
Clazz.addEvent(this.handle,"click",this.hLogoClick);
if(this.mouseOver==null){
this.mouseOver=$_Q((($_D("$wt.widgets.NotificationCorner$2")?0:org.eclipse.swt.widgets.NotificationCorner.$NotificationCorner$2$()),$_N($wt.widgets.NotificationCorner$2,this,null)));
}if(this.mouseClick==null){
this.mouseClick=$_Q((($_D("$wt.widgets.NotificationCorner$3")?0:org.eclipse.swt.widgets.NotificationCorner.$NotificationCorner$3$()),$_N($wt.widgets.NotificationCorner$3,this,null)));
}if(this.mouseDoubleClick==null){
this.mouseDoubleClick=$_Q((($_D("$wt.widgets.NotificationCorner$4")?0:org.eclipse.swt.widgets.NotificationCorner.$NotificationCorner$4$()),$_N($wt.widgets.NotificationCorner$4,this,null)));
}if(this.handle!=null){
Clazz.addEvent(this.handle,"mouseover",this.mouseOver);
}this.updateEvents();
this.bringToTop(w$.currentTopZIndex);
});
c$.openAbout=$_M(c$,"openAbout",
function(){
ClazzLoader.loadClass("org.eclipse.swt.widgets.About",(function(){return function(){
$wt.widgets.About.openAbout(null);
};})());
});
$_M(c$,"updateEvents",
function(){
for(var i=0;i<this.tray.allCells.length;i++){
var cell=this.tray.allCells[i];
if(cell!=null){
this.bindEvents(cell);
}}
this.bindEvents(this.minimizedEl);
});
$_M(c$,"unbindAllEvents",
($fz=function(){
if(this.tray!=null&&this.tray.allCells!=null){
for(var i=0;i<this.tray.allCells.length;i++){
var cell=this.tray.allCells[i];
if(cell!=null){
this.unbindEvents(cell);
}}
}if(this.minimizedEl!=null){
this.unbindEvents(this.minimizedEl);
}},$fz.isPrivate=true,$fz));
$_M(c$,"bindEvents",
function(cell){
if(this.mouseClick!=null){
Clazz.addEvent(cell,"click",this.mouseClick);
}if(this.mouseOver!=null){
Clazz.addEvent(cell,"mouseover",this.mouseOver);
}if(this.mouseDoubleClick!=null){
Clazz.addEvent(cell,"dblclick",this.mouseDoubleClick);
}},"Element");
$_M(c$,"unbindEvents",
function(cell){
if(cell==null){
return;
}Clazz.removeEvent(cell,"click",this.mouseClick);
Clazz.removeEvent(cell,"mouseover",this.mouseOver);
Clazz.removeEvent(cell,"dblclick",this.mouseDoubleClick);
},"Element");
$_M(c$,"handleApproaching",
function(){
if(this.handle==null){
return;
}var zIndex=w$.currentTopZIndex+1;
if(this.handle.style.zIndex!=zIndex){
this.layerZIndex=this.handle.style.zIndex;
if(!this.isAutoHide){
this.setMinimized(false);
}this.bringToTop(zIndex);
}});
$_V(c$,"handleLeaving",
function(){
if(this.handle==null){
return;
}if(this.layerZIndex!=-1){
this.bringToTop(this.layerZIndex);
this.layerZIndex=-1;
}if(this.isAutoHide){
this.setMinimized(true);
}});
$_M(c$,"isApproaching",
function(now,x,y,ctrlKey){
return!ctrlKey&&this.isAround(x,y);
},"~N,~N,~N,~B");
$_M(c$,"isLeaving",
function(now,x,y,ctrlKey){
return!this.isAroundCorner(x,y);
},"~N,~N,~N,~B");
$_M(c$,"isAround",
function(x,y){
var range=32;
if(x+y<range){
return true;
}return false;
},"~N,~N");
$_M(c$,"isAroundCorner",
function(x,y){
var range=32;
var tray=$wt.widgets.Display.getTray();
if(tray!=null){
range=this.getRange()+16;
}if(x+y<range){
return true;
}return false;
},"~N,~N");
$_M(c$,"setZIndex",
function(zIdx){
if(this.currentZIndex==zIdx){
return;
}this.currentZIndex=zIdx;
if(zIdx==-1&&!O$.isIE){
zIdx="";
}if(this.isMinimized()){
this.minimizedEl.style.zIndex=zIdx;
return;
}for(var i=0;i<this.tray.allCells.length;i++){
var cell=this.tray.allCells[i];
if(cell!=null){
cell.style.zIndex=zIdx;
}}
for(var i=0;i<this.tray.allItems.length;i++){
var item=this.tray.allItems[i];
if(item!=null){
item.style.zIndex=zIdx;
}}
if(this.tray.supportShadow&&this.tray.outerShadows!=null){
for(var i=0;i<this.tray.outerShadows.length;i++){
var item=this.tray.outerShadows[i];
if(item!=null){
item.style.zIndex=zIdx;
}}
}if(this.handle!=null){
this.handle.style.zIndex=zIdx;
}if(this.minimizedEl!=null){
this.minimizedEl.style.zIndex=zIdx;
}},"~N");
$_M(c$,"isMinimized",
function(){
return this.minimizedEl.style.display!=="none";
});
$_M(c$,"setMinimized",
function(minimized){
if(minimized==this.isMinimized()){
return false;
}this.minimizedEl.style.display=!minimized?"none":"block";
for(var i=0;i<this.tray.allCells.length;i++){
var cell=this.tray.allCells[i];
if(cell!=null){
cell.style.display=minimized?"none":"block";
}}
for(var i=0;i<this.tray.allFloats.length;i++){
var divFloat=this.tray.allFloats[i];
if(divFloat!=null){
divFloat.style.display=minimized?"none":"block";
}}
for(var i=0;i<this.tray.allItems.length;i++){
var item=this.tray.allItems[i];
if(item!=null){
item.style.display=minimized?"none":"block";
}}
if(this.tray.supportShadow){
for(var i=0;i<this.tray.outerShadows.length;i++){
var cell=this.tray.outerShadows[i];
if(cell!=null){
if(minimized){
cell.style.left=(-i*36-21)+"px";
}else{
cell.style.left=((this.tray.cellLines-i-1)*36-1)+"px";
}}}
}this.handle.style.display=minimized?"none":"block";
return true;
},"~B");
$_M(c$,"getRange",
function(){
return this.tray.cellLines*36;
});
$_V(c$,"bringToTop",
function(zIdx){
if(this.tray==null){
return;
}var zIndex=-1;
if(zIdx==-1){
w$.currentTopZIndex++;
zIndex=w$.currentTopZIndex;
if($wt.widgets.Display.getTopMaximizedShell()==null){
this.layerZIndex=zIndex;
}}else{
zIndex=zIdx;
}this.setZIndex(zIndex);
},"~N");
$_V(c$,"updateLayout",
function(){
});
$_V(c$,"releaseWidget",
function(){
this.tray=null;
if($wt.widgets.NotificationCorner.defaultNotificationCorner!=null){
return;
}this.unbindAllEvents();
if(this.minimizedEl!=null){
O$.destroyHandle(this.minimizedEl);
this.minimizedEl=null;
}if(this.handle!=null){
if(this.hLogoClick!=null){
Clazz.removeEvent(this.handle,"click",this.hLogoClick);
this.hLogoClick=null;
}Clazz.removeEvent(this.handle,"mouseover",this.mouseOver);
O$.destroyHandle(this.handle);
this.handle=null;
}this.mouseOver=null;
this.mouseClick=null;
this.mouseDoubleClick=null;
});
$_M(c$,"toggleAutoHide",
function(){
this.isAutoHide=!this.isAutoHide;
this.minimizedEl.title=this.isAutoHide?"Doubleclick to set notification area always-visible":"Doubleclick to set notification area auto-hide";
this.setMinimized(this.isAutoHide);
if(this.isJustUpdated){
return;
}this.bringToTop(-1);
});
c$.$NotificationCorner$1$=function(){
$_H();
c$=$_W($wt.widgets,"NotificationCorner$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.NotificationCorner"].display!=null&&!this.b$["$wt.widgets.NotificationCorner"].display.isDisposed()){
if(this.b$["$wt.widgets.NotificationCorner"].display.trayCorner!=null){
this.b$["$wt.widgets.NotificationCorner"].display.trayCorner.bringToTop(-1);
}var shell=this.b$["$wt.widgets.NotificationCorner"].display.getActiveShell();
if(shell!=null){
shell.openAboutJava2Script();
return;
}else{
var shells=this.b$["$wt.widgets.NotificationCorner"].display.getShells();
for(var i=0;i<shells.length;i++){
if(shells[i]!=null&&!shells[i].isDisposed()){
shells[i].openAboutJava2Script();
return;
}}
}}$wt.widgets.NotificationCorner.openAbout();
});
c$=$_P();
};
c$.$NotificationCorner$2$=function(){
$_H();
c$=$_W($wt.widgets,"NotificationCorner$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.NotificationCorner"].isAutoHide){
this.b$["$wt.widgets.NotificationCorner"].setMinimized(false);
}var zIndex=w$.currentTopZIndex+1;
if(this.b$["$wt.widgets.NotificationCorner"].handle.style.zIndex!=zIndex){
this.b$["$wt.widgets.NotificationCorner"].layerZIndex=this.b$["$wt.widgets.NotificationCorner"].handle.style.zIndex;
this.b$["$wt.widgets.NotificationCorner"].bringToTop(zIndex);
}});
c$=$_P();
};
c$.$NotificationCorner$3$=function(){
$_H();
c$=$_W($wt.widgets,"NotificationCorner$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.NotificationCorner"].setMinimized(false)){
this.b$["$wt.widgets.NotificationCorner"].isJustUpdated=true;
w$.setTimeout($_Q((($_D("$wt.widgets.NotificationCorner$3$1")?0:org.eclipse.swt.widgets.NotificationCorner.$NotificationCorner$3$1$()),$_N($wt.widgets.NotificationCorner$3$1,this,null))),500);
}this.b$["$wt.widgets.NotificationCorner"].bringToTop(-1);
});
c$=$_P();
};
c$.$NotificationCorner$3$1$=function(){
$_H();
c$=$_W($wt.widgets,"NotificationCorner$3$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.NotificationCorner"].isJustUpdated=false;
});
c$=$_P();
};
c$.$NotificationCorner$4$=function(){
$_H();
c$=$_W($wt.widgets,"NotificationCorner$4",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.NotificationCorner"].toggleAutoHide();
});
c$=$_P();
};
$_S(c$,
"defaultNotificationCorner",null);
});
$_L(["$wt.graphics.Device","$wt.widgets.Tray"],"$wt.widgets.Display",["$wt.events.SelectionAdapter","$wt.graphics.Color","$.Cursor","$.Font","$.Image","$.Point","$.Rectangle","$wt.internal.ResizeSystem","$.RunnableCompatibility","$wt.internal.browser.OS","$wt.internal.dnd.HTMLEventWrapper","$wt.widgets.Event","$.EventTable","$.MaximizedTitle","$.Monitor","$.NotificationCorner","$.QuickLaunch","$.TaskBar","$.TrayItem"],function(){
c$=$_C(function(){
this.eventQueue=null;
this.eventTable=null;
this.filterTable=null;
this.freeSlot=0;
this.indexTable=null;
this.controlTable=null;
this.focusEvent=0;
this.focusControl=null;
this.bars=null;
this.popups=null;
this.items=null;
this.thread=null;
this.disposeList=null;
this.tray=null;
this.nextTrayId=0;
this.timerIds=null;
this.timerList=null;
this.nextTimerId=0;
this.lastKey=0;
this.lastAscii=0;
this.lastMouse=0;
this.lastVirtual=false;
this.lastNull=false;
this.lastDead=false;
this.keyboard=null;
this.accelKeyHit=false;
this.mnemonicKeyHit=false;
this.lockActiveWindow=false;
this.captureChanged=false;
this.ignoreRestoreFocus=false;
this.lastHittestControl=null;
this.lastHittest=0;
this.cursors=null;
this.imageList=null;
this.toolImageList=null;
this.toolHotImageList=null;
this.toolDisabledImageList=null;
this.lpCustColors=0;
this.data=null;
this.keys=null;
this.values=null;
this.msgs=null;
this.messageProc=0;
this.currentMonitor=null;
this.modalShells=null;
this.modalDialogShell=null;
this.taskBar=null;
this.topBar=null;
this.shortcutBar=null;
this.trayCorner=null;
this.hitCount=0;
this.mouseMoveListener=null;
$_Z(this,arguments);
},$wt.widgets,"Display",$wt.graphics.Device);
$_Y(c$,function(){
this.keyboard=$_A(256,0);
this.cursors=new Array(22);
});
$_K(c$,
function(){
this.construct(null);
});
$_K(c$,
function(data){
$_R(this,$wt.widgets.Display,[data]);
},"$wt.graphics.DeviceData");
$_M(c$,"addBar",
function(menu){
if(this.bars==null)this.bars=new Array(4);
var length=this.bars.length;
for(var i=0;i<length;i++){
if(this.bars[i]===menu)return;
}
var index=0;
while(index<length){
if(this.bars[index]==null)break;
index++;
}
if(index==length){
var newBars=new Array(length+4);
System.arraycopy(this.bars,0,newBars,0,length);
this.bars=newBars;
}this.bars[index]=menu;
},"$wt.widgets.Menu");
$_M(c$,"addControl",
function(handle,control){
if(control==null)return;
this.controlTable[this.controlTable.length]=control;
},"~O,$wt.widgets.Control");
$_M(c$,"addFilter",
function(eventType,listener){
if(this.filterTable==null)this.filterTable=new $wt.widgets.EventTable();
this.filterTable.hook(eventType,listener);
},"~N,$wt.widgets.Listener");
$_M(c$,"addListener",
function(eventType,listener){
if(this.eventTable==null)this.eventTable=new $wt.widgets.EventTable();
this.eventTable.hook(eventType,listener);
},"~N,$wt.widgets.Listener");
$_M(c$,"addMenuItem",
function(item){
if(this.items==null)this.items=new Array(64);
for(var i=0;i<this.items.length;i++){
if(this.items[i]==null){
item.id=i+108;
this.items[i]=item;
return;
}}
item.id=this.items.length+108;
var newItems=new Array(this.items.length+64);
newItems[this.items.length]=item;
System.arraycopy(this.items,0,newItems,0,this.items.length);
this.items=newItems;
},"$wt.widgets.MenuItem");
$_M(c$,"addPopup",
function(menu){
if(this.popups==null)this.popups=new Array(4);
var length=this.popups.length;
for(var i=0;i<length;i++){
if(this.popups[i]===menu)return;
}
var index=0;
while(index<length){
if(this.popups[index]==null)break;
index++;
}
if(index==length){
var newPopups=new Array(length+4);
System.arraycopy(this.popups,0,newPopups,0,length);
this.popups=newPopups;
}this.popups[index]=menu;
},"$wt.widgets.Menu");
$_M(c$,"asciiKey",
function(key){
return 0;
},"~N");
$_M(c$,"asyncExec",
function(runnable){
w$.setTimeout($_Q(runnable),10);
},"Runnable");
$_M(c$,"beep",
function(){
});
$_M(c$,"checkSubclass",
function(){
});
c$.checkDisplay=$_M(c$,"checkDisplay",
function(thread,multiple){
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
if($wt.widgets.Display.Displays[i]!=null){
}}
},"Thread,~B");
$_M(c$,"clearModal",
function(shell){
if(this.modalShells==null)return;
var index=0;
var length=this.modalShells.length;
while(index<length){
if(this.modalShells[index]===shell)break;
if(this.modalShells[index]==null)return;
index++;
}
if(index==length)return;
System.arraycopy(this.modalShells,index+1,this.modalShells,index,--length-index);
this.modalShells[length]=null;
if(index==0&&this.modalShells[0]==null)this.modalShells=null;
var shells=this.getShells();
for(var i=0;i<shells.length;i++)shells[i].updateModal();

},"$wt.widgets.Shell");
$_M(c$,"close",
function(){
var event=new $wt.widgets.Event();
this.sendEvent(21,event);
if(event.doit)this.dispose();
});
$_V(c$,"create",
function(data){
this.checkSubclass();
this.createDisplay(data);
$wt.widgets.Display.register(this);
if($wt.widgets.Display.Default==null)($t$=$wt.widgets.Display.Default=this,$wt.widgets.Display.prototype.Default=$wt.widgets.Display.Default,$t$);
},"$wt.graphics.DeviceData");
$_M(c$,"createDisplay",
function(data){
},"$wt.graphics.DeviceData");
c$.deregister=$_M(c$,"deregister",
function(display){
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
if(display===$wt.widgets.Display.Displays[i])$wt.widgets.Display.Displays[i]=null;
}
},"$wt.widgets.Display");
$_V(c$,"destroy",
function(){
if(this===$wt.widgets.Display.Default)($t$=$wt.widgets.Display.Default=null,$wt.widgets.Display.prototype.Default=$wt.widgets.Display.Default,$t$);
$wt.widgets.Display.deregister(this);
this.destroyDisplay();
});
$_M(c$,"destroyDisplay",
function(){
});
$_M(c$,"dispose",
function(){
if($wt.widgets.Display.disposing){
$_U(this,$wt.widgets.Display,"dispose",[]);
return;
}var shells=this.getShells();
if(shells==null||shells.length==0){
if(this.shortcutBar==null||this.shortcutBar.shortcutCount==0){
$_U(this,$wt.widgets.Display,"dispose",[]);
}}});
$_M(c$,"disposeExec",
function(runnable){
if(this.disposeList==null)this.disposeList=new Array(4);
for(var i=0;i<this.disposeList.length;i++){
if(this.disposeList[i]==null){
this.disposeList[i]=runnable;
return;
}}
var newDisposeList=new Array(this.disposeList.length+4);
System.arraycopy(this.disposeList,0,newDisposeList,0,this.disposeList.length);
newDisposeList[this.disposeList.length]=runnable;
this.disposeList=newDisposeList;
},"Runnable");
$_M(c$,"drawMenuBars",
function(){
if(this.bars==null)return;
for(var i=0;i<this.bars.length;i++){
var menu=this.bars[i];
if(menu!=null&&!menu.isDisposed())menu.update();
}
this.bars=null;
});
$_M(c$,"error",
function(code){
throw"SWT.error ("+code+")";
},"~N");
$_M(c$,"filterEvent",
function(event){
if(this.filterTable!=null)this.filterTable.sendEvent(event);
return false;
},"$wt.widgets.Event");
$_M(c$,"filters",
function(eventType){
if(this.filterTable==null)return false;
return this.filterTable.hooks(eventType);
},"~N");
$_M(c$,"findControl",
function(handle){
if(handle==0)return null;
return null;
},"~N");
$_M(c$,"findWidget",
function(handle){
return null;
},"~N");
$_M(c$,"findWidget",
function(handle,id){
return null;
},"~N,~N");
c$.findDisplay=$_M(c$,"findDisplay",
function(thread){
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
var display=$wt.widgets.Display.Displays[i];
if(display!=null&&display.thread===thread){
return display;
}}
return null;
},"Thread");
$_M(c$,"getActiveShell",
function(){
return $wt.widgets.Display.getTopShell();
});
c$.getCurrent=$_M(c$,"getCurrent",
function(){
return $wt.widgets.Display.getDefault();
});
$_M(c$,"getControl",
function(handle){
if(handle==null)return null;
for(var i=0;i<this.controlTable.length;i++){
if(this.controlTable[i]!=null&&handle===this.controlTable[i].handle){
return this.controlTable[i];
}}
return null;
},"~O");
$_M(c$,"getCursorControl",
function(){
return null;
});
$_M(c$,"getCursorLocation",
function(){
return new $wt.graphics.Point(0,0);
});
$_M(c$,"getCursorSizes",
function(){
return[new $wt.graphics.Point(16,16)];
});
c$.getDefault=$_M(c$,"getDefault",
function(){
if($wt.widgets.Display.Default==null)($t$=$wt.widgets.Display.Default=new $wt.widgets.Display(),$wt.widgets.Display.prototype.Default=$wt.widgets.Display.Default,$t$);
return $wt.widgets.Display.Default;
});
c$.isValidClass=$_M(c$,"isValidClass",
function(clazz){
var name=clazz.getName();
var index=name.lastIndexOf('.');
return name.substring(0,index+1).equals("org.eclipse.swt.widgets.");
},"Class");
$_M(c$,"getData",
function(key){
if(this.keys==null)return null;
for(var i=0;i<this.keys.length;i++){
if(this.keys[i].equals(key))return this.values[i];
}
return null;
},"~S");
$_M(c$,"getData",
function(){
return this.data;
});
$_M(c$,"getDismissalAlignment",
function(){
return 16384;
});
$_M(c$,"getDoubleClickTime",
function(){
return 20;
});
$_M(c$,"getFocusControl",
function(){
if(this.focusControl!=null&&!this.focusControl.isDisposed()){
return this.focusControl;
}return null;
});
$_M(c$,"getHighContrast",
function(){
return false;
});
$_M(c$,"getIconDepth",
function(){
return 32;
});
$_M(c$,"getIconSizes",
function(){
return[new $wt.graphics.Point(16,16),new $wt.graphics.Point(32,32)];
});
$_M(c$,"getLastEventTime",
function(){
return System.currentTimeMillis();
});
$_M(c$,"getMenuItem",
function(id){
if(this.items==null)return null;
id=id-108;
if(0<=id&&id<this.items.length)return this.items[id];
return null;
},"~N");
$_M(c$,"getModalShell",
function(){
if(this.modalShells==null)return null;
var index=this.modalShells.length;
while(--index>=0){
var shell=this.modalShells[index];
if(shell!=null)return shell;
}
return null;
});
$_M(c$,"getModalDialogShell",
function(){
if(this.modalDialogShell!=null&&this.modalDialogShell.isDisposed())this.modalDialogShell=null;
return this.modalDialogShell;
});
$_M(c$,"getMonitors",
function(){
if($wt.widgets.Display.monitors==null){
var monitor=new $wt.widgets.Monitor();
monitor.handle=d$.body;
monitor.clientWidth=O$.getFixedBodyClientWidth();
var parentWidth=O$.getContainerWidth(d$.body.parentNode);
if(parentWidth-8>monitor.clientWidth&&parentWidth<=w$.screen.availWidth){
monitor.clientWidth=parentWidth;
}monitor.width=w$.screen.availWidth;
monitor.clientHeight=O$.getFixedBodyClientHeight();
monitor.height=w$.screen.availHeight;
monitor.clientX=monitor.x=0;
monitor.clientY=monitor.y=0;
($t$=$wt.widgets.Display.monitors=[monitor],$wt.widgets.Display.prototype.monitors=$wt.widgets.Display.monitors,$t$);
($t$=$wt.widgets.Display.monitorCount=1,$wt.widgets.Display.prototype.monitorCount=$wt.widgets.Display.monitorCount,$t$);
}return $wt.widgets.Display.monitors;
});
c$.registerElementAsMonitor=$_M(c$,"registerElementAsMonitor",
function(el){
if(el==null){
return;
}if($wt.widgets.Display.monitors!=null){
for(var i=0;i<$wt.widgets.Display.monitors.length;i++){
if($wt.widgets.Display.monitors[i].handle===el){
return;
}}
}else{
var monitor=new $wt.widgets.Monitor();
monitor.handle=d$.body;
monitor.clientWidth=O$.getFixedBodyClientWidth();
monitor.width=w$.screen.availWidth;
monitor.clientHeight=O$.getFixedBodyClientHeight();
monitor.height=w$.screen.availHeight;
monitor.clientX=monitor.x=0;
monitor.clientY=monitor.y=0;
($t$=$wt.widgets.Display.monitors=[monitor],$wt.widgets.Display.prototype.monitors=$wt.widgets.Display.monitors,$t$);
($t$=$wt.widgets.Display.monitorCount=1,$wt.widgets.Display.prototype.monitorCount=$wt.widgets.Display.monitorCount,$t$);
}var monitor=new $wt.widgets.Monitor();
monitor.handle=el;
monitor.clientX=0;
monitor.clientY=0;
if(el===d$.body){
monitor.clientWidth=O$.getFixedBodyClientWidth();
monitor.clientHeight=O$.getFixedBodyClientHeight();
monitor.x=0;
monitor.y=0;
monitor.width=w$.screen.availWidth;
monitor.height=w$.screen.availHeight;
}else{
var pt=O$.calcuateRelativePosition(el,d$.body);
el.style.position="absolute";
monitor.x=pt.x;
monitor.y=pt.y;
monitor.width=monitor.clientWidth=O$.getContainerWidth(el);
monitor.height=monitor.clientHeight=O$.getContainerHeight(el);
}$wt.widgets.Display.monitors[$wt.widgets.Display.monitors.length]=monitor;
($t$=$wt.widgets.Display.monitorCount=$wt.widgets.Display.monitors.length,$wt.widgets.Display.prototype.monitorCount=$wt.widgets.Display.monitorCount,$t$);
},"Element");
$_M(c$,"getPrimaryMonitor",
function(){
if(this.currentMonitor!=null){
return this.currentMonitor;
}{
var ms=this.getMonitors();
var key="current.monitor.id";
if(window[key]!=null){
var x=parseInt(window[key]);
if(""+x==window[key]){
if(x<0||x>=ms.length){
x=0;
}
this.bindMonitor(ms[x]);
return ms[x];
}else{
var el=document.getElementById(window[key]);
if(el!=null){
for(var i=0;i<ms.length;i++){
if(ms[i].handle==el){
this.bindMonitor(ms[i]);
return ms[i];
}
}
}
}
}
}this.bindMonitor(this.getMonitors()[0]);
return this.getMonitors()[0];
});
$_M(c$,"bindMonitor",
function(m){
this.currentMonitor=m;
$wt.internal.ResizeSystem.register(m);
},"$wt.widgets.Monitor");
$_M(c$,"getShells",
function(){
if(this.controlTable==null){
return null;
}var count=0;
for(var i=0;i<this.controlTable.length;i++){
var control=this.controlTable[i];
if(control!=null&&$_O(control,$wt.widgets.Shell))count++;
}
var index=0;
var result=new Array(count);
for(var i=0;i<this.controlTable.length;i++){
var control=this.controlTable[i];
if(control!=null&&$_O(control,$wt.widgets.Shell)){
result[index++]=control;
}}
return result;
});
$_M(c$,"getSyncThread",
function(){
return null;
});
$_M(c$,"getSystemColor",
function(id){
var pixel="#000000";
switch(id){
case 17:
pixel="ThreeDDarkShadow";
break;
case 18:
pixel="ThreeDShadow";
break;
case 19:
pixel="ThreeDLightShadow";
break;
case 20:
pixel="ThreeDHighlight";
break;
case 22:
pixel="ThreeDFace";
break;
case 23:
pixel="WindowFrame";
break;
case 21:
case 24:
pixel="WindowText";
break;
case 25:
pixel="Window";
break;
case 26:
pixel="Highlight";
break;
case 27:
pixel="HighlightText";
break;
case 28:
pixel="InfoText";
break;
case 29:
pixel="InfoBackground";
break;
case 30:
pixel="CaptionText";
break;
case 31:
pixel="ActiveCaption";
break;
case 32:
pixel="ActiveCaption";
break;
case 33:
pixel="InactiveCaptionText";
break;
case 34:
pixel="InactiveCaption";
break;
case 35:
pixel="InactiveCaption";
break;
default:
return $_U(this,$wt.widgets.Display,"getSystemColor",[id]);
}
return new $wt.graphics.Color(null,pixel);
},"~N");
$_M(c$,"getSystemCursor",
function(id){
if(!(0<=id&&id<this.cursors.length))return null;
if(this.cursors[id]==null){
this.cursors[id]=new $wt.graphics.Cursor(this,id);
}return this.cursors[id];
},"~N");
$_V(c$,"getSystemFont",
function(){
return new $wt.graphics.Font(this,"Tahoma,Arial",10,0);
});
$_M(c$,"getSystemImage",
function(id){
var iconName=null;
switch(id){
case 1:
iconName="error";
break;
case 16:
case 2:
iconName="information";
break;
case 4:
iconName="question";
break;
case 8:
iconName="warning";
break;
}
if(iconName==null)return null;
return new $wt.graphics.Image(this,$wt.widgets.Display.getResourceAsStream("images/"+iconName+".png"));
},"~N");
$_M(c$,"getSystemTray",
function(){
if(this.tray!=null)return this.tray;
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
var disp=$wt.widgets.Display.Displays[i];
if(disp!=null&&disp.tray!=null&&!disp.tray.isDisposed()){
this.tray=disp.tray;
if(disp.trayCorner!=null){
disp.trayCorner.tray=this.tray;
}return this.tray;
}}
this.tray=new $wt.widgets.Tray(this,0);
if(this.trayCorner!=null){
this.trayCorner.tray=this.tray;
this.trayCorner.initialize();
}return this.tray;
});
$_M(c$,"getThread",
function(){
return this.thread;
});
$_M(c$,"init",
function(){
$_U(this,$wt.widgets.Display,"init",[]);
this.indexTable=$_A(1024,0);
this.controlTable=new Array(1024);
for(var i=0;i<1023;i++)this.indexTable[i]=i+1;

this.indexTable[1023]=-1;
this.msgs=new Array(0);
this.messageProc=0;
{
FontSizeSystem.monitorFontSize();
}$wt.widgets.Display.initializeZOrdering();
this.initializeDekstop();
});
$_M(c$,"initializeDekstop",
function(){
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
var disp=$wt.widgets.Display.Displays[i];
if(disp!==this&&disp!=null&&!disp.isDisposed()&&disp.taskBar!=null&&disp.topBar!=null){
this.taskBar=disp.taskBar;
this.topBar=disp.topBar;
this.shortcutBar=disp.shortcutBar;
this.trayCorner=disp.trayCorner;
return;
}}
if(this.taskBar!=null)return;
var panel=d$.getElementById("swt-desktop-panel");
var needScrolling=false;
var injecting=false;
if(panel==null){
var forceInsertingPanel=true;
{
forceInsertingPanel=(window["swt.desktop.panel"]!=false);
}if(forceInsertingPanel){
injecting=true;
panel=d$.createElement("DIV");
panel.id="swt-desktop-panel";
{
panel.style.overflowX="hidden";
}var childNodes=d$.body.childNodes;
if(childNodes.length>0){
d$.body.insertBefore(panel,childNodes[0]);
}else{
d$.body.appendChild(panel);
}childNodes=d$.body.childNodes;
var removedChildren=new Array(0);
for(var i=childNodes.length-1;i>=0;i--){
var child=childNodes[i];
var okToMove=false;
if(child.nodeName==null){
okToMove=true;
}else if(!"SCRIPT".equalsIgnoreCase(child.nodeName)){
okToMove=true;
var id=child.id;
if(id!=null){
if("swt-desktop-panel".equalsIgnoreCase(id)){
okToMove=false;
}else if("xss-cookie".equalsIgnoreCase(id)){
okToMove=false;
}else if("clazzloader-status".equalsIgnoreCase(id)){
okToMove=false;
}else if("swt-font-monitor".equalsIgnoreCase(id)){
okToMove=false;
}else if("swt-invisible-container".equalsIgnoreCase(id)){
okToMove=false;
}else if("_console_".equalsIgnoreCase(id)){
okToMove=false;
}else if(id.startsWith("alaa-")){
okToMove=false;
}}else{
var cssClass=child.className;
if(cssClass!=null){
var allSWTClasses=["tray-cell","tray-item","tray-logo-item","shell-manager","shortcut-bar","shell-default","shell-trim"];
for(var j=0;j<allSWTClasses.length;j++){
if(cssClass.indexOf(allSWTClasses[j])!=-1){
okToMove=false;
break;
}}
}}}if(okToMove){
removedChildren[removedChildren.length]=child;
d$.body.removeChild(child);
}}
for(var i=removedChildren.length-1;i>=0;i--){
panel.appendChild(removedChildren[i]);
}
d$.body.style.overflow="hidden";
d$.body.style.padding="0";
d$.body.style.margin="0";
needScrolling=true;
}}if(panel!=null){
d$.body.style.overflow="hidden";
var height=O$.getFixedBodyClientHeight();
var width=O$.getFixedBodyClientWidth();
panel.style.position="absolute";
if(!injecting){
panel.style.backgroundColor="white";
}{
var vsb=window["swt.desktop.vscrollbar"];
if(vsb!=null&&(vsb==true||vsb=="true"||vsb=="enable")){
panel.style.overflowY="auto";
}
var hsb=window["swt.desktop.hscrollbar"];
if(hsb!=null&&(hsb==true||hsb=="true"||hsb=="enable")){
panel.style.overflowX="auto";
}
}panel.style.paddingBottom="80px";
if(!O$.isIE||O$.isIE70||O$.isIE80||O$.isIE90){
var div=d$.createElement("DIV");
div.id="page-bottom-end";
if(O$.isIE){
div.style.styleFloat="left";
}else{
div.style.cssFloat="left";
}div.style.height="80px";
div.style.width="1px";
div.style.marginLeft="-1px";
panel.appendChild(div);
}panel.style.left="0";
panel.style.top="0";
panel.style.width=width+"px";
panel.style.height=(height-80)+"px";
if(needScrolling){
panel.scrollTop=panel.scrollHeight;
}}this.taskBar=new $wt.widgets.TaskBar(this);
this.topBar=new $wt.widgets.MaximizedTitle(this);
if($wt.widgets.QuickLaunch.defaultQuickLaunch!=null){
this.shortcutBar=$wt.widgets.QuickLaunch.defaultQuickLaunch;
}else{
this.shortcutBar=new $wt.widgets.QuickLaunch(this);
}if($wt.widgets.NotificationCorner.defaultNotificationCorner!=null){
this.trayCorner=$wt.widgets.NotificationCorner.defaultNotificationCorner;
}else{
this.trayCorner=new $wt.widgets.NotificationCorner(this);
}this.taskBar.initialize();
this.topBar.initialize();
this.shortcutBar.initialize();
this.trayCorner.initialize();
{
var autoHide=window["swt.notification.corner.autohide"];
if(autoHide!=null&&(autoHide==true||autoHide=="true")){
this.trayCorner.toggleAutoHide();
}
autoHide=window["swt.quick.launch.autohide"];
if(autoHide!=null&&(autoHide==true||autoHide=="true")){
this.shortcutBar.toggleAutoHide();
}
autoHide=window["swt.task.bar.autohide"];
if(autoHide!=null&&(autoHide==false||autoHide=="false")){
this.taskBar.toggleAutoHide();
}
}this.mouseMoveListener=$_Q((($_D("$wt.widgets.Display$1")?0:org.eclipse.swt.widgets.Display.$Display$1$()),$_N($wt.widgets.Display$1,this,null)));
Clazz.addEvent(document,"mousemove",this.mouseMoveListener);
var el=d$.getElementById("_console_");
if(el!=null){
el.style.display="none";
{
window.setTimeout(org.eclipse.swt.widgets.Display.insertOpenConsoleLink,500);
}}else{
if(window["C_$"]==null&&Console!=null){
C_$=Console;
C_$.createC_$Window=Console.createConsoleWindow;
}
if(Console==null)Console=C_$;
if(C_$.createC_$Window.wrapped==null){
C_$.createC_$Window_=Console.createC_$Window;
C_$.createConsoleWindow=C_$.createC_$Window=function(parentEl){
var console=C_$.createC_$Window_(parentEl);
if(O$.isIE){
var consoleStyle=console.style;
consoleStyle.display="block"
consoleStyle.position="absolute";
consoleStyle.width="200px";
consoleStyle.height="200px";
consoleStyle.left="-400px";
consoleStyle.top="-400px";
consoleStyle.overflow="hidden";
}else{
console.style.display="none";
}
$wt.widgets.Display.insertOpenConsoleLink(console);
return console;
};
C_$.createC_$Window.wrapped=true;
}
}});
c$.insertOpenConsoleLink=$_M(c$,"insertOpenConsoleLink",
function(){
var t=$wt.widgets.Display.getTray();
if(t==null||t.isDisposed()){
t=$wt.widgets.Display.Default.getSystemTray();
}var item=new $wt.widgets.TrayItem(t,0);
item.setText("Console");
item.handle.className="tray-item tray-item-console";
item.setToolTipText("Console");
item.addSelectionListener((($_D("$wt.widgets.Display$2")?0:org.eclipse.swt.widgets.Display.$Display$2$()),$_N($wt.widgets.Display$2,this,null)));
});
$_M(c$,"isValidThread",
function(){
return true;
});
$_M(c$,"map",
function(from,to,point){
return this.map(from,to,point.x,point.y);
},"$wt.widgets.Control,$wt.widgets.Control,$wt.graphics.Point");
$_M(c$,"map",
function(from,to,x,y){
if(from===to)return new $wt.graphics.Point(x,y);
var hwndFrom=from!=null?from.handle:d$.body;
var hwndTo=to!=null?to.handle:d$.body;
var p=O$.calcuateRelativePosition(hwndFrom,hwndTo);
p.x+=x;
p.y+=y;
return p;
},"$wt.widgets.Control,$wt.widgets.Control,~N,~N");
$_M(c$,"map",
function(from,to,rectangle){
return this.map(from,to,rectangle.x,rectangle.y,rectangle.width,rectangle.height);
},"$wt.widgets.Control,$wt.widgets.Control,$wt.graphics.Rectangle");
$_M(c$,"map",
function(from,to,x,y,width,height){
if(from===to)return new $wt.graphics.Rectangle(x,y,width,height);
var hwndFrom=from!=null?from.handle:d$.body;
var hwndTo=to!=null?to.handle:d$.body;
var p=O$.calcuateRelativePosition(hwndFrom,hwndTo);
p.x+=x;
p.y+=y;
return new $wt.graphics.Rectangle(p.x+x,p.y+y,O$.getContainerWidth(hwndTo),O$.getContainerHeight(hwndTo));
},"$wt.widgets.Control,$wt.widgets.Control,~N,~N,~N,~N");
$_M(c$,"post",
function(event){
var type=event.type;
switch(type){
case 1:
case 2:
{
}case 3:
case 5:
case 4:
{
}}
{
window.setTimeout(function(disp){
return function(){
disp.runDeferredEvents();
};
}(this),1);
}return false;
},"$wt.widgets.Event");
$_M(c$,"postEvent",
function(event){
if(this.eventQueue==null)this.eventQueue=new Array(4);
var index=0;
var length=this.eventQueue.length;
while(index<length){
if(this.eventQueue[index]==null)break;
index++;
}
if(index==length){
var newQueue=new Array(length+4);
System.arraycopy(this.eventQueue,0,newQueue,0,length);
this.eventQueue=newQueue;
}this.eventQueue[index]=event;
{
window.setTimeout(function(disp){
return function(){
disp.runDeferredEvents();
};
}(this),1);
}},"$wt.widgets.Event");
$_M(c$,"readAndDispatch",
function(){
this.drawMenuBars();
this.runPopups();
if(this.messageProc!=0){
return true;
}this.messageProc=w$.setInterval($_Q((($_D("$wt.widgets.Display$3")?0:org.eclipse.swt.widgets.Display.$Display$3$()),$_N($wt.widgets.Display$3,this,null))),100);
return true;
});
c$.register=$_M(c$,"register",
function(display){
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
if($wt.widgets.Display.Displays[i]==null){
$wt.widgets.Display.Displays[i]=display;
return;
}}
var newDisplays=new Array($wt.widgets.Display.Displays.length+4);
System.arraycopy($wt.widgets.Display.Displays,0,newDisplays,0,$wt.widgets.Display.Displays.length);
newDisplays[$wt.widgets.Display.Displays.length]=display;
($t$=$wt.widgets.Display.Displays=newDisplays,$wt.widgets.Display.prototype.Displays=$wt.widgets.Display.Displays,$t$);
},"$wt.widgets.Display");
$_M(c$,"release",
function(){
this.sendEvent(12,new $wt.widgets.Event());
var shells=this.getShells();
for(var i=0;i<shells.length;i++){
var shell=shells[i];
if(!shell.isDisposed())shell.dispose();
}
var trayRefs=1;
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
var disp=$wt.widgets.Display.Displays[i];
if(disp!==this&&disp!=null&&!disp.isDisposed()){
if(disp.tray!=null){
trayRefs++;
}}}
if(this.tray!=null&&trayRefs<2)this.tray.dispose();
this.tray=null;
if(this.disposeList!=null){
for(var i=0;i<this.disposeList.length;i++){
if(this.disposeList[i]!=null)this.disposeList[i].run();
}
}this.disposeList=null;
if(this.timerIds!=null){
for(var i=0;i<this.timerIds.length;i++){
if(this.timerIds[i]!=0)w$.clearInterval(this.timerIds[i]);
}
}this.timerIds=null;
if(this.timerList!=null){
for(var i=0;i<this.timerList.length;i++){
if(this.timerList[i]!=null)this.timerList[i]=null;
}
}this.timerList=null;
if($wt.widgets.NotificationCorner.defaultNotificationCorner!=null){
($t$=$wt.widgets.NotificationCorner.defaultNotificationCorner=null,$wt.widgets.NotificationCorner.prototype.defaultNotificationCorner=$wt.widgets.NotificationCorner.defaultNotificationCorner,$t$);
}if($wt.widgets.QuickLaunch.defaultQuickLaunch!=null){
($t$=$wt.widgets.QuickLaunch.defaultQuickLaunch=null,$wt.widgets.QuickLaunch.prototype.defaultQuickLaunch=$wt.widgets.QuickLaunch.defaultQuickLaunch,$t$);
}if($wt.widgets.NotificationCorner.defaultNotificationCorner==null&&$wt.widgets.QuickLaunch.defaultQuickLaunch==null){
if($wt.widgets.Display.htmlOverflow!=null){
d$.body.parentNode.style.overflow=$wt.widgets.Display.htmlOverflow;
($t$=$wt.widgets.Display.htmlOverflow=null,$wt.widgets.Display.prototype.htmlOverflow=$wt.widgets.Display.htmlOverflow,$t$);
}if($wt.widgets.Display.bodyOverflow!=null){
d$.body.style.overflow=$wt.widgets.Display.bodyOverflow;
($t$=$wt.widgets.Display.bodyOverflow=null,$wt.widgets.Display.prototype.bodyOverflow=$wt.widgets.Display.bodyOverflow,$t$);
}if($wt.widgets.Display.bodyHeight!=null){
d$.body.style.height=$wt.widgets.Display.bodyHeight;
($t$=$wt.widgets.Display.bodyHeight=null,$wt.widgets.Display.prototype.bodyHeight=$wt.widgets.Display.bodyHeight,$t$);
}d$.body.parentNode.scrollLeft=$wt.widgets.Display.htmlScrollLeft;
d$.body.parentNode.scrollTop=$wt.widgets.Display.htmlScrollTop;
d$.body.scrollLeft=$wt.widgets.Display.bodyScrollLeft;
d$.body.scrollTop=$wt.widgets.Display.bodyScrollTop;
}this.releaseDesktop();
this.releaseDisplay();
$_U(this,$wt.widgets.Display,"release",[]);
});
$_M(c$,"releaseDesktop",
function(){
var existed=false;
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
var disp=$wt.widgets.Display.Displays[i];
if(disp!==this&&disp!=null&&!disp.isDisposed()){
existed=true;
break;
}}
if(existed){
existed=false;
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
var disp=$wt.widgets.Display.Displays[i];
if(disp!==this&&disp!=null&&!disp.isDisposed()&&disp.tray!=null&&!disp.tray.isDisposed()){
existed=true;
break;
}}
if(!existed&&this.trayCorner.handle!=null){
this.trayCorner.handle.style.display="none";
}}var trayRefs=1;
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
var disp=$wt.widgets.Display.Displays[i];
if(disp!==this&&disp!=null&&!disp.isDisposed()){
if(disp.tray!=null){
trayRefs++;
}}}
if(this.taskBar!=null){
this.taskBar.releaseWidget();
this.taskBar=null;
}if(this.topBar!=null){
this.topBar.releaseWidget();
this.topBar=null;
}if(this.shortcutBar!=null){
this.shortcutBar.releaseWidget();
this.shortcutBar=null;
}if(this.trayCorner!=null){
if(trayRefs<=1)this.trayCorner.releaseWidget();
this.trayCorner=null;
}if(this.mouseMoveListener!=null){
Clazz.removeEvent(document,"mousemove",this.mouseMoveListener);
this.mouseMoveListener=null;
}});
$_M(c$,"releaseDisplay",
function(){
for(var i=0;i<this.cursors.length;i++){
if(this.cursors[i]!=null)this.cursors[i].dispose();
}
this.cursors=null;
this.keyboard=null;
this.modalDialogShell=null;
this.modalShells=null;
this.data=null;
this.keys=null;
this.values=null;
this.bars=this.popups=null;
this.indexTable=null;
this.controlTable=null;
this.lastHittestControl=null;
this.imageList=this.toolImageList=this.toolHotImageList=this.toolDisabledImageList=null;
this.eventQueue=null;
this.eventTable=null;
this.filterTable=null;
if(this.messageProc!=0){
w$.clearInterval(this.messageProc);
this.messageProc=0;
}this.msgs=null;
});
$_M(c$,"releaseImageList",
function(list){
{}
},"$wt.widgets.ImageList");
$_M(c$,"removeFilter",
function(eventType,listener){
if(this.filterTable==null)return;
this.filterTable.unhook(eventType,listener);
if(this.filterTable.size()==0)this.filterTable=null;
},"~N,$wt.widgets.Listener");
$_M(c$,"removeListener",
function(eventType,listener){
if(this.eventTable==null)return;
this.eventTable.unhook(eventType,listener);
},"~N,$wt.widgets.Listener");
$_M(c$,"removeBar",
function(menu){
if(this.bars==null)return;
for(var i=0;i<this.bars.length;i++){
if(this.bars[i]===menu){
this.bars[i]=null;
return;
}}
},"$wt.widgets.Menu");
$_M(c$,"removeControl",
function(handle){
if(handle==null)return null;
var control=null;
var index=-1;
for(var i=0;i<this.controlTable.length;i++){
var ctrl=this.controlTable[i];
if(ctrl!=null&&ctrl.handle===handle){
index=i;
break;
}}
if(0<=index&&index<this.controlTable.length){
control=this.controlTable[index];
this.controlTable[index]=null;
this.indexTable[index]=this.freeSlot;
this.freeSlot=index;
}return control;
},"~O");
$_M(c$,"removeMenuItem",
function(item){
if(this.items==null)return;
this.items[item.id-108]=null;
item.id=-1;
},"$wt.widgets.MenuItem");
$_M(c$,"removePopup",
function(menu){
if(this.popups==null)return;
for(var i=0;i<this.popups.length;i++){
if(this.popups[i]===menu){
this.popups[i]=null;
return;
}}
},"$wt.widgets.Menu");
$_M(c$,"runDeferredEvents",
function(){
while(this.eventQueue!=null){
var event=this.eventQueue[0];
if(event==null)break;
var length=this.eventQueue.length;
System.arraycopy(this.eventQueue,1,this.eventQueue,0,--length);
this.eventQueue[length]=null;
var widget=event.widget;
if(widget!=null&&!widget.isDisposed()){
var item=event.item;
if(item==null||!item.isDisposed()){
widget.sendEvent(event);
}}}
this.eventQueue=null;
return true;
});
$_M(c$,"runPopups",
function(){
if(this.popups==null)return false;
var result=false;
while(this.popups!=null){
var menu=this.popups[0];
if(menu==null)break;
var length=this.popups.length;
System.arraycopy(this.popups,1,this.popups,0,--length);
this.popups[length]=null;
this.runDeferredEvents();
menu._setVisible(true);
result=true;
}
this.popups=null;
return result;
});
$_M(c$,"sendEvent",
function(eventType,event){
if(this.eventTable==null&&this.filterTable==null){
return;
}if(event==null)event=new $wt.widgets.Event();
event.display=this;
event.type=eventType;
if(event.time==0)event.time=this.getLastEventTime();
if(!this.filterEvent(event)){
if(this.eventTable!=null)this.eventTable.sendEvent(event);
}},"~N,$wt.widgets.Event");
$_M(c$,"sendMessage",
function(msg){
this.msgs[this.msgs.length]=msg;
},"$wt.internal.struct.MESSAGE");
$_M(c$,"setCursorLocation",
function(x,y){
},"~N,~N");
$_M(c$,"setCursorLocation",
function(point){
this.setCursorLocation(point.x,point.y);
},"$wt.graphics.Point");
$_M(c$,"setData",
function(key,value){
if(value==null){
if(this.keys==null)return;
var index=0;
while(index<this.keys.length&&!this.keys[index].equals(key))index++;

if(index==this.keys.length)return;
if(this.keys.length==1){
this.keys=null;
this.values=null;
}else{
var newKeys=new Array(this.keys.length-1);
var newValues=new Array(this.values.length-1);
System.arraycopy(this.keys,0,newKeys,0,index);
System.arraycopy(this.keys,index+1,newKeys,index,newKeys.length-index);
System.arraycopy(this.values,0,newValues,0,index);
System.arraycopy(this.values,index+1,newValues,index,newValues.length-index);
this.keys=newKeys;
this.values=newValues;
}return;
}if(this.keys==null){
this.keys=[key];
this.values=[value];
return;
}for(var i=0;i<this.keys.length;i++){
if(this.keys[i].equals(key)){
this.values[i]=value;
return;
}}
var newKeys=new Array(this.keys.length+1);
var newValues=new Array(this.values.length+1);
System.arraycopy(this.keys,0,newKeys,0,this.keys.length);
System.arraycopy(this.values,0,newValues,0,this.values.length);
newKeys[this.keys.length]=key;
newValues[this.values.length]=value;
this.keys=newKeys;
this.values=newValues;
},"~S,~O");
$_M(c$,"setData",
function(data){
this.data=data;
},"~O");
c$.setAppName=$_M(c$,"setAppName",
function(name){
},"~S");
$_M(c$,"setModalDialogShell",
function(modalDailog){
if(this.modalDialogShell!=null&&this.modalDialogShell.isDisposed())this.modalDialogShell=null;
this.modalDialogShell=modalDailog;
var shells=this.getShells();
for(var i=0;i<shells.length;i++)shells[i].updateModal();

},"$wt.widgets.Shell");
$_M(c$,"setModalShell",
function(shell){
if(this.modalShells==null)this.modalShells=new Array(4);
var index=0;
var length=this.modalShells.length;
while(index<length){
if(this.modalShells[index]===shell)return;
if(this.modalShells[index]==null)break;
index++;
}
if(index==length){
var newModalShells=new Array(length+4);
System.arraycopy(this.modalShells,0,newModalShells,0,length);
this.modalShells=newModalShells;
}this.modalShells[index]=shell;
var shells=this.getShells();
for(var i=0;i<shells.length;i++)shells[i].updateModal();

},"$wt.widgets.Shell");
$_M(c$,"setSynchronizer",
function(synchronizer){
},"$wt.widgets.Synchronizer");
$_M(c$,"sleep",
function(){
return false;
});
$_M(c$,"syncExec",
function(runnable){
runnable.run();
},"Runnable");
$_M(c$,"timerExec",
function(milliseconds,runnable){
if(this.timerList==null)this.timerList=new Array(4);
if(this.timerIds==null)this.timerIds=$_A(4,0);
var index=0;
while(index<this.timerList.length){
if(this.timerList[index]===runnable)break;
index++;
}
var timerId=0;
if(index!=this.timerList.length){
timerId=this.timerIds[index];
if(milliseconds<0&&this.timerIds[index]!=0){
w$.clearTimeout(timerId);
this.timerList[index]=null;
this.timerIds[index]=0;
return;
}}else{
if(milliseconds<0)return;
index=0;
while(index<this.timerList.length){
if(this.timerList[index]==null)break;
index++;
}
this.nextTimerId++;
timerId=this.nextTimerId;
if(index==this.timerList.length){
var newTimerList=new Array(this.timerList.length+4);
System.arraycopy(this.timerList,0,newTimerList,0,this.timerList.length);
this.timerList=newTimerList;
var newTimerIds=$_A(this.timerIds.length+4,0);
System.arraycopy(this.timerIds,0,newTimerIds,0,this.timerIds.length);
this.timerIds=newTimerIds;
}}var fun=null;
{
fun=(function(jsr,idx,disp){
return function(){
try{
jsr.run();
}finally{
disp.timerList[idx]=null;
disp.timerIds[idx]=0;
}
};
})(runnable,index,this);
}var newTimerID=w$.setTimeout(fun,milliseconds);
if(newTimerID!=0){
this.timerList[index]=runnable;
this.timerIds[index]=newTimerID;
}},"~N,Runnable");
$_M(c$,"update",
function(){
var shells=this.getShells();
for(var i=0;i<shells.length;i++){
var shell=shells[i];
if(!shell.isDisposed())shell.update(true);
}
});
$_M(c$,"wake",
function(){
});
c$.getTray=$_M(c$,"getTray",
function(){
var tray=null;
if($wt.widgets.Display.Default!=null){
tray=$wt.widgets.Display.Default.tray;
}if(tray==null||tray.isDisposed()){
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
var disp=$wt.widgets.Display.Displays[i];
if(disp!=null&&disp.tray!=null&&!disp.tray.isDisposed()){
tray=disp.tray;
break;
}}
}return tray;
});
c$.getAllVisibleShells=$_M(c$,"getAllVisibleShells",
function(){
var shells=new Array(0);
var orders=$_A(0,0);
var disps=$wt.widgets.Display.Displays;
for(var k=0;k<disps.length;k++){
if(disps[k]==null)continue;var ss=disps[k].getShells();
for(var i=0;i<ss.length;i++){
if(!ss[i].isDisposed()&&ss[i].isVisible()&&ss[i].handle.style.display!=="none"){
shells[shells.length]=ss[i];
var idx=""+ss[i].handle.style.zIndex;
var zidx=0;
if(idx==null||idx.length==0){
zidx=0;
}else{
zidx=Integer.parseInt(idx);
}orders[orders.length]=zidx;
}}
}
for(var i=0;i<shells.length;i++){
for(var j=i+1;j<shells.length;j++){
if(orders[i]<orders[j]){
var s=shells[i];
shells[i]=shells[j];
shells[j]=s;
var idx=orders[i];
orders[i]=orders[j];
orders[j]=idx;
}}
}
return shells;
});
c$.getTopShell=$_M(c$,"getTopShell",
function(){
var lastShell=null;
var lastZIndex=0;
var disps=$wt.widgets.Display.Displays;
for(var k=0;k<disps.length;k++){
if(disps[k]==null)continue;var ss=disps[k].getShells();
for(var i=0;i<ss.length;i++){
if(!ss[i].isDisposed()&&ss[i].isVisible()&&ss[i].handle.style.display!=="none"){
var idx=""+ss[i].handle.style.zIndex;
var zidx=0;
if(idx==null||idx.length==0){
zidx=0;
}else{
zidx=Integer.parseInt(idx);
}if(zidx>lastZIndex){
lastZIndex=zidx;
lastShell=ss[i];
}}}
}
return lastShell;
});
c$.deactivateAllTitleBarShells=$_M(c$,"deactivateAllTitleBarShells",
function(){
var disps=$wt.widgets.Display.Displays;
for(var k=0;k<disps.length;k++){
if(disps[k]==null)continue;var ss=disps[k].getShells();
for(var i=0;i<ss.length;i++){
if(!ss[i].isDisposed()&&ss[i].titleBar!=null&&ss[i].handle.style.display!=="none"){
ss[i].titleBar.style.backgroundColor="inactivecaption";
ss[i].shellTitle.style.color="inactivecaptiontext";
}}
}
});
c$.getTopMaximizedShell=$_M(c$,"getTopMaximizedShell",
function(){
if(!$wt.widgets.Display.topMaxShellNeedUpdated){
return $wt.widgets.Display.topMaxShell;
}var lastShell=null;
var lastMaxZIndex=0;
var disps=$wt.widgets.Display.Displays;
for(var k=0;k<disps.length;k++){
if(disps[k]==null)continue;var ss=disps[k].getShells();
for(var i=0;i<ss.length;i++){
if(!ss[i].isDisposed()&&ss[i].getMaximized()&&ss[i].handle.style.display!=="none"){
var idx=""+ss[i].handle.style.zIndex;
var zidx=0;
if(idx==null||idx.length==0){
zidx=0;
}else{
zidx=Integer.parseInt(idx);
}if(zidx>lastMaxZIndex){
lastMaxZIndex=zidx;
lastShell=ss[i];
}}}
}
($t$=$wt.widgets.Display.topMaxShell=lastShell,$wt.widgets.Display.prototype.topMaxShell=$wt.widgets.Display.topMaxShell,$t$);
($t$=$wt.widgets.Display.topMaxShellNeedUpdated=false,$wt.widgets.Display.prototype.topMaxShellNeedUpdated=$wt.widgets.Display.topMaxShellNeedUpdated,$t$);
return lastShell;
});
$_M(c$,"updateLayout",
function(){
if(this.taskBar!=null){
this.taskBar.updateLayout();
this.topBar.updateLayout();
this.shortcutBar.updateLayout();
this.trayCorner.updateLayout();
var panel=d$.getElementById("swt-desktop-panel");
if(panel!=null){
var height=O$.getFixedBodyClientHeight();
var width=O$.getFixedBodyClientWidth();
panel.style.width=width+"px";
panel.style.height=(height-80)+"px";
}}});
c$.updateMonitor=$_M(c$,"updateMonitor",
function(){
var disp=$wt.widgets.Display.Default;
if(disp==null||disp.isDisposed()){
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
disp=$wt.widgets.Display.Displays[i];
if(disp!=null&&!disp.isDisposed()){
break;
}}
}if(disp!=null){
disp.updateLayout();
}});
c$.releaseAllDisplays=$_M(c$,"releaseAllDisplays",
function(){
($t$=$wt.widgets.Display.disposing=true,$wt.widgets.Display.prototype.disposing=$wt.widgets.Display.disposing,$t$);
var first=true;
if($wt.widgets.Display.Displays!=null){
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
var d=$wt.widgets.Display.Displays[i];
if(d!=null){
d.dispose();
if(first){
first=false;
if(d.trayCorner!=null){
d.trayCorner.releaseWidget();
d.trayCorner=null;
}if(d.taskBar!=null){
d.taskBar.releaseWidget();
d.taskBar=null;
}if(d.shortcutBar!=null){
d.shortcutBar.releaseWidget();
d.shortcutBar=null;
}if(d.topBar!=null){
d.topBar.releaseWidget();
d.topBar=null;
}if(d.tray!=null){
d.tray.dispose();
d.tray=null;
}}$wt.widgets.Display.Displays[i]=null;
}}
}($t$=$wt.widgets.Display.Default=null,$wt.widgets.Display.prototype.Default=$wt.widgets.Display.Default,$t$);
($t$=$wt.widgets.Display.topMaxShell=null,$wt.widgets.Display.prototype.topMaxShell=$wt.widgets.Display.topMaxShell,$t$);
if($wt.widgets.Display.hShellZOrdering!=null){
Clazz.removeEvent(document,"click",$wt.widgets.Display.hShellZOrdering);
($t$=$wt.widgets.Display.hShellZOrdering=null,$wt.widgets.Display.prototype.hShellZOrdering=$wt.widgets.Display.hShellZOrdering,$t$);
}O$.dispose();
});
c$.updateAllShellLayouts=$_M(c$,"updateAllShellLayouts",
function(){
if($wt.widgets.Display.Displays!=null){
for(var i=0;i<$wt.widgets.Display.Displays.length;i++){
var display=$wt.widgets.Display.Displays[i];
if(display!=null&&!display.isDisposed()){
var existedMaximized=false;
var shells=display.getShells();
for(var j=0;j<shells.length;j++){
var shell=shells[j];
if(shell!=null&&!shell.isDisposed()){
if((shell.style&(1248))!=0){
var bounds=shell.getBounds();
if(shell.getMaximized()&&shell.titleBar!=null){
shell.setMaximized(true);
existedMaximized=true;
continue;}else{
shell.SetWindowPos(shell.handle,null,bounds.x,bounds.y,bounds.width,bounds.height,0);
}}shell.layout(true,true);
}}
if(existedMaximized&&display.topBar!=null){
var topBar=display.topBar;
if(topBar.isVisible()){
topBar.returnTopMaximized(null);
topBar.updateLayout();
}}}}
}});
c$.initializeZOrdering=$_M(c$,"initializeZOrdering",
function(){
if($wt.widgets.Display.hShellZOrdering!=null){
return;
}($t$=$wt.widgets.Display.hShellZOrdering=$_Q((($_D("$wt.widgets.Display$4")?0:org.eclipse.swt.widgets.Display.$Display$4$()),$_N($wt.widgets.Display$4,this,null))),$wt.widgets.Display.prototype.hShellZOrdering=$wt.widgets.Display.hShellZOrdering,$t$);
Clazz.addEvent(document,"click",$wt.widgets.Display.hShellZOrdering);
});
c$.$Display$1$=function(){
$_H();
c$=$_W($wt.widgets,"Display$1",$wt.internal.RunnableCompatibility);
$_M(c$,"run",
function(){
var e=this.getEvent();
var bottom=this.b$["$wt.widgets.Display"].getPrimaryMonitor().clientHeight-128;
var x=e.clientX;
var y=e.clientY;
if(x>264&&y>=100&&y<=bottom){
return;
}var now=System.currentTimeMillis();
var ctrlKey=e.ctrlKey;
this.b$["$wt.widgets.Display"].taskBar.mouseAlreadyMoved=true;
this.b$["$wt.widgets.Display"].shortcutBar.mouseAlreadyMoved=true;
this.b$["$wt.widgets.Display"].trayCorner.mouseAlreadyMoved=true;
this.b$["$wt.widgets.Display"].topBar.mouseAlreadyMoved=true;
var inDelay=(now-this.b$["$wt.widgets.Display"].taskBar.lastUpdated<=2000);
if(this.b$["$wt.widgets.Display"].taskBar.barEl!=null&&x<264){
if(this.b$["$wt.widgets.Display"].taskBar.isApproaching(now,x,y,ctrlKey)){
this.b$["$wt.widgets.Display"].taskBar.handleApproaching();
}else if(!inDelay&&this.b$["$wt.widgets.Display"].taskBar.isLeaving(now,x,y,ctrlKey)){
this.b$["$wt.widgets.Display"].taskBar.handleLeaving();
}}if(y>bottom){
if(this.b$["$wt.widgets.Display"].shortcutBar.isApproaching(now,x,y,ctrlKey)){
this.b$["$wt.widgets.Display"].shortcutBar.handleApproaching();
}else if(!inDelay&&this.b$["$wt.widgets.Display"].shortcutBar.isLeaving(now,x,y,ctrlKey)){
this.b$["$wt.widgets.Display"].shortcutBar.handleLeaving();
}}if(x+y<200){
if(this.b$["$wt.widgets.Display"].trayCorner.isApproaching(now,x,y,ctrlKey)){
this.b$["$wt.widgets.Display"].trayCorner.handleApproaching();
}else if(!inDelay&&this.b$["$wt.widgets.Display"].trayCorner.isLeaving(now,x,y,ctrlKey)){
this.b$["$wt.widgets.Display"].trayCorner.handleLeaving();
}}if(y<100){
if(this.b$["$wt.widgets.Display"].topBar.isApproaching(now,x,y,ctrlKey)){
this.b$["$wt.widgets.Display"].topBar.handleApproaching();
}else if(!inDelay&&this.b$["$wt.widgets.Display"].topBar.isLeaving(now,x,y,ctrlKey)){
this.b$["$wt.widgets.Display"].topBar.handleLeaving();
}}});
c$=$_P();
};
c$.$Display$2$=function(){
$_H();
c$=$_W($wt.widgets,"Display$2",$wt.events.SelectionAdapter);
$_V(c$,"widgetSelected",
function(e){
ClazzLoader.loadClass('org.eclipse.swt.widgets.Console',function(){$wt.widgets.Console.openConsole();});
},"$wt.events.SelectionEvent");
c$=$_P();
};
c$.$Display$3$=function(){
$_H();
c$=$_C(function(){
$_B(this,arguments);
this.messageLoop=false;
$_Z(this,arguments);
},$wt.widgets,"Display$3",$wt.internal.RunnableCompatibility);
$_M(c$,"run",
function(){
this.b$["$wt.widgets.Display"].runPopups();
var msgs=this.b$["$wt.widgets.Display"].msgs;
if(msgs.length==0&&this.messageLoop){
var layoutFinished=window["j2s.swt.shell.finish.layout"];
if(layoutFinished!=null){
layoutFinished();
}
this.messageLoop=false;
}if(msgs.length!=0){
this.messageLoop=true;
var idx=0;
for(var i=msgs.length-1;i>=0;i--){
var m1=msgs[i];
if(m1==null){
continue;}m1.defer=false;
for(var j=i-1;j>=0;j--){
var m2=msgs[j];
if(m2!=null&&m2.control===m1.control&&m2.type==m1.type){
msgs[j]=null;
}}
if(m1.type==2){
var p=m1.control.parent;
if(p!=null&&p.waitingForLayout){
m1.defer=true;
}}}
var time=0;
var deferred=false;
for(var i=0;i<msgs.length;i++){
var m=msgs[i];
if(m!=null&&m.defer){
deferred=true;
continue;}msgs[i]=null;
if(m!=null&&m.type==2){
m.control.waitingForLayout=false;
if(!m.control.isVisible()){
continue;}var d=System.currentTimeMillis();
var c=m.control;
if(c.waitingForLayoutWithResize){
c.setResizeChildren(false);
}if(c.$layout!=null){
c.$layout.layout(c,(c.state&64)!=0);
c.state&=-97;
}if(c.waitingForLayoutWithResize){
c.setResizeChildren(true);
c.waitingForLayoutWithResize=false;
}if(m.data!=null){
var bs=m.data;
c.updateLayout(bs[0],bs[1]);
}else{
c.layout();
}time+=System.currentTimeMillis()-d;
if(time>200){
idx=0;
if(deferred){
for(var j=0;j<i+1;j++){
m=msgs[j];
if(m!=null&&m.defer){
msgs[idx++]=m;
}msgs[j]=null;
}
}for(var j=i+1;j<msgs.length;j++){
msgs[idx++]=msgs[j];
msgs[j]=null;
}
{
msgs.length=idx;
}return;
}}}
idx=0;
if(deferred){
for(var j=0;j<msgs.length;j++){
var m=msgs[j];
if(m!=null&&m.defer){
msgs[idx++]=m;
}}
}{
msgs.length=idx;
}}});
c$=$_P();
};
c$.$Display$4$=function(){
$_H();
c$=$_W($wt.widgets,"Display$4",$wt.internal.RunnableCompatibility);
$_M(c$,"run",
function(){
var evt=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
var src=evt.target;
while(src!=null){
var className=src.className;
if(className!=null&&className.indexOf("shadow-")!=-1){
var allVisibleShells=$wt.widgets.Display.getAllVisibleShells();
for(var i=0;i<allVisibleShells.length;i++){
var bounds=allVisibleShells[i].getBounds();
if(evt.x>=bounds.x+2&&evt.x<=bounds.x+bounds.width-4&&evt.y>=bounds.y+2&&evt.y<=bounds.y+bounds.height-4){
allVisibleShells[i].bringToTop();
return;
}}
}if(O$.existedCSSClass(src,"shell-default")){
var displs=$wt.widgets.Display.Displays;
if(displs!=null){
for(var i=0;i<displs.length;i++){
var disp=displs[i];
if(disp!=null&&!disp.isDisposed()){
var ctrl=disp.getControl(src);
if(ctrl!=null&&$_O(ctrl,$wt.widgets.Shell)&&ctrl.isVisible()){
(ctrl).bringToTop();
}}}
}break;
}src=src.parentNode;
}
});
c$=$_P();
};
$_S(c$,
"GROW_SIZE",1024,
"ID_START",108,
"Default",null);
c$.Displays=c$.prototype.Displays=new Array(4);
$_S(c$,
"disposing",false,
"monitors",null,
"monitorCount",0,
"TrimEnabled",false,
"bodyHeight",null,
"bodyOverflow",null,
"htmlOverflow",null,
"bodyScrollTop",0,
"bodyScrollLeft",0,
"htmlScrollTop",0,
"htmlScrollLeft",0,
"AUTO_HIDE_DELAY",2000,
"topMaxShellNeedUpdated",true,
"topMaxShell",null,
"PACKAGE_PREFIX","org.eclipse.swt.widgets.",
"hShellZOrdering",null);


var cleanUpObject=new Object();
var f=function(){
try{
org.eclipse.swt.widgets.Display.releaseAllDisplays();
}catch(e){
}
O$.deepClearChildren(FontSizeSystem.monitorEl);
O$.destroyHandle(FontSizeSystem.monitorEl);
FontSizeSystem.monitorEl=null;
Clazz.removeEvent(window,"unload",cleanUpObject.f);
return true;
};
cleanUpObject.f=f;
Clazz.addEvent(window,"unload",f);
FontSizeSystem=new Object();
var fss=FontSizeSystem;
fss.monitorEl=null;
fss.cachedFontSize=10;
fss.isMonitoring=false;
fss.initialize=function(){
this.monitorEl=document.createElement("DIV");
this.monitorEl.id="swt-font-monitor";
this.monitorEl.style.cssText="position:absolute;top:-1000px;left:-1000px;font-family:Arial, sans-serif;font-size:10pt;overflow:visible;";
document.body.appendChild(this.monitorEl);
this.monitorEl.appendChild(document.createTextNode("Java2Script"));
this.cachedFontSize=this.getActualFontSize();
};
fss.getActualFontSize=function(){
var el=this.monitorEl;
return Math.max(el.offsetHeight,Math.max(el.clientHeight,el.scrollHeight));
};
fss.monitorFontSize=function(looping){
if(looping!=true&&this.isMonitoring){
return;
}
var el=this.monitorEl;
if(el==null){
this.initialize();
}else{
var width=this.getActualFontSize();
if(width!=this.cachedFontSize){
this.cachedFontSize=width;
org.eclipse.swt.widgets.Display.updateAllShellLayouts();
}
}
this.isMonitoring=true;
window.setTimeout(function(){
FontSizeSystem.monitorFontSize(true)
},250);
};
window.currentTopZIndex=1000;
});
$_L(null,"$wt.widgets.Widget",["$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.internal.dnd.HTMLEventWrapper","$wt.widgets.Display","$.Event","$.EventTable","$.TypedListener"],function(){
c$=$_C(function(){
this.handle=null;
this.style=0;
this.state=0;
this.display=null;
this.eventTable=null;
this.data=null;
this.dragStatus=false;
this.hoverTime=0;
this.hoverTimerID=0;
this.waitingForLayout=false;
this.hookedStatus=null;
this.styleChecked=false;
this.hKeyPress=null;
this.hKeyDown=null;
this.hKeyUp=null;
this.hFocusIn=null;
this.hFocusOut=null;
this.hMouseMove=null;
this.hMouseDown=null;
this.hMouseUp=null;
this.hMouseEnter=null;
this.hMouseExit=null;
this.hMouseDoubleClick=null;
this.hMouseWheel=null;
this.hSelection=null;
this.hModify=null;
this.hMenuDetect=null;
this.hHelp=null;
$_Z(this,arguments);
},$wt.widgets,"Widget");
$_K(c$,
function(parent,style){
this.checkParent(parent);
this.style=style;
{
if(!this.styleChecked&&this.checkStyle!=null
&&this.checkStyle.funParams=="\Number"){
this.style=this.checkStyle(this.style);
this.styleChecked=true;
}
}this.display=parent.display;
this.waitingForLayout=true;
},"$wt.widgets.Widget,~N");
$_M(c$,"addListener",
function(eventType,listener){
if(this.eventTable==null)this.eventTable=new $wt.widgets.EventTable();
this.eventTable.hook(eventType,listener);
this.checkHookType(eventType);
},"~N,$wt.widgets.Listener");
$_M(c$,"addDisposeListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(12,typedListener);
},"$wt.events.DisposeListener");
$_M(c$,"callWindowProc",
function(hwnd,msg,wParam,lParam){
return 0;
},"~N,~N,~N,~N");
c$.checkBits=$_M(c$,"checkBits",
function(style,int0,int1,int2,int3,int4,int5){
var mask=int0|int1|int2|int3|int4|int5;
if((style&mask)==0)style|=int0;
if((style&int0)!=0)style=(style&~mask)|int0;
if((style&int1)!=0)style=(style&~mask)|int1;
if((style&int2)!=0)style=(style&~mask)|int2;
if((style&int3)!=0)style=(style&~mask)|int3;
if((style&int4)!=0)style=(style&~mask)|int4;
if((style&int5)!=0)style=(style&~mask)|int5;
return style;
},"~N,~N,~N,~N,~N,~N,~N");
$_M(c$,"checkHookType",
function(eventType){
if(this.hookedStatus==null){
this.hookedStatus=$_A(38,false);
}var hooked=false;
if(eventType>=0&&eventType<=37){
hooked=this.hookedStatus[eventType];
}if(hooked||this.handle==null){
return;
}switch(eventType){
case 1:
this.hookKeyDown();
break;
case 2:
this.hookKeyUp();
break;
case 3:
this.hookMouseDown();
break;
case 4:
this.hookMouseUp();
break;
case 5:
this.hookMouseMove();
break;
case 6:
this.hookMouseEnter();
break;
case 7:
this.hookMouseExit();
break;
case 8:
this.hookMouseDoubleClick();
break;
case 13:
this.hookSelection();
break;
case 15:
this.hookFocusIn();
break;
case 16:
this.hookFocusOut();
break;
case 24:
this.hookModify();
break;
case 25:
if(!this.hookedStatus[1])this.hookKeyDown();
this.hookedStatus[1]=true;
break;
case 28:
this.hookHelp();
break;
case 29:
if(!this.hookedStatus[4])this.hookMouseUp();
if(!this.hookedStatus[3])this.hookMouseDown();
if(!this.hookedStatus[5])this.hookMouseMove();
this.hookedStatus[4]=true;
this.hookedStatus[3]=true;
this.hookedStatus[5]=true;
break;
case 30:
this.hookArm();
break;
case 31:
this.hookTraverse();
break;
case 32:
if(!this.hookedStatus[6])this.hookMouseEnter();
if(!this.hookedStatus[7])this.hookMouseExit();
if(!this.hookedStatus[4])this.hookMouseUp();
if(!this.hookedStatus[3])this.hookMouseDown();
if(!this.hookedStatus[5])this.hookMouseMove();
this.hookedStatus[6]=true;
this.hookedStatus[7]=true;
this.hookedStatus[4]=true;
this.hookedStatus[3]=true;
this.hookedStatus[5]=true;
break;
case 35:
this.hookMenuDetect();
break;
case 37:
this.hookMouseWheel();
break;
}
this.hookedStatus[eventType]=true;
},"~N");
$_M(c$,"checkOrientation",
function(parent){
this.style&=-134217729;
if((this.style&(100663296))==0){
if(parent!=null){
if((parent.style&33554432)!=0)this.style|=33554432;
if((parent.style&67108864)!=0)this.style|=67108864;
}}this.style=$wt.widgets.Widget.checkBits(this.style,33554432,67108864,0,0,0,0);
},"$wt.widgets.Widget");
$_M(c$,"_updateOrientation",
function(){
if((this.style&67108864)!=0){
this.handle.style.direction="rtl";
}else{
this.handle.style.direction="ltr";
}});
$_M(c$,"checkOpened",
function(){
});
$_M(c$,"checkParent",
function(parent){
parent.checkOpened();
},"$wt.widgets.Widget");
$_M(c$,"destroyWidget",
function(){
this.releaseHandle();
if(this.hoverTimerID!=0){
w$.clearTimeout(this.hoverTimerID);
}});
$_M(c$,"dispose",
function(){
if(this.isDisposed())return;
this.releaseChild();
this.releaseWidget();
this.destroyWidget();
});
$_M(c$,"error",
function(code){
throw"SWT.error ("+code+")";
},"~N");
$_M(c$,"filters",
function(eventType){
return this.display.filters(eventType);
},"~N");
$_M(c$,"findItem",
function(id){
return null;
},"~N");
$_M(c$,"fixMnemonic",
function(string){
var buffer=$_A(string.length,'\0');
string.getChars(0,string.length,buffer,0);
var i=0;
var j=0;
while(i<buffer.length){
if((buffer[i]).charCodeAt(0)==('&').charCodeAt(0)){
if(i+1<buffer.length&&(buffer[i+1]).charCodeAt(0)==('&').charCodeAt(0)){
buffer[j++]=' ';
i++;
}i++;
}else{
buffer[j++]=buffer[i++];
}}
while(j<buffer.length)buffer[j++]=String.fromCharCode(0);

return buffer;
},"~S");
$_M(c$,"getData",
function(){
return(this.state&4)!=0?(this.data)[0]:this.data;
});
$_M(c$,"getData",
function(key){
if((this.state&4)!=0){
var table=this.data;
for(var i=1;i<table.length;i+=2){
if(key.equals(table[i]))return table[i+1];
}
}return null;
},"~S");
$_M(c$,"getDisplay",
function(){
var display=this.display;
return display;
});
$_M(c$,"getMenu",
function(){
return null;
});
$_M(c$,"getName",
function(){
var string=this.getClass().getName();
var index=string.lastIndexOf('.');
if(index==-1)return string;
return string.substring(index+1,string.length);
});
$_M(c$,"getNameText",
function(){
return"";
});
$_M(c$,"getStyle",
function(){
return this.style;
});
$_M(c$,"hookKeyDown",
function(){
if(this.hKeyDown!=null){
return;
}this.hKeyDown=$_Q((($_D("$wt.widgets.Widget$1")?0:org.eclipse.swt.widgets.Widget.$Widget$1$()),$_N($wt.widgets.Widget$1,this,null)));
Clazz.addEvent(this.handle,"keydown",this.hKeyDown);
this.hookKeyPress();
});
$_M(c$,"hookKeyPress",
($fz=function(){
if(this.hKeyPress!=null){
return;
}this.hKeyPress=$_Q((($_D("$wt.widgets.Widget$2")?0:org.eclipse.swt.widgets.Widget.$Widget$2$()),$_N($wt.widgets.Widget$2,this,null)));
Clazz.addEvent(this.handle,"keypress",this.hKeyPress);
},$fz.isPrivate=true,$fz));
$_M(c$,"hookKeyUp",
function(){
if(this.hKeyUp!=null){
return;
}this.hKeyUp=$_Q((($_D("$wt.widgets.Widget$3")?0:org.eclipse.swt.widgets.Widget.$Widget$3$()),$_N($wt.widgets.Widget$3,this,null)));
Clazz.addEvent(this.handle,"keyup",this.hKeyUp);
this.hookKeyPress();
});
$_M(c$,"mouseHoverProc",
function(clear){
var hoverHooked=false;
if(this.hoverTimerID!=0&&clear){
hoverHooked=true;
w$.clearTimeout(this.hoverTimerID);
this.hoverTimerID=0;
}if(hoverHooked||this.hooks(32)){
hoverHooked=true;
if(this.hoverTimerID==0){
this.hoverTimerID=w$.setTimeout($_Q((($_D("$wt.widgets.Widget$4")?0:org.eclipse.swt.widgets.Widget.$Widget$4$()),$_N($wt.widgets.Widget$4,this,null))),400);
}}return hoverHooked;
},"~B");
$_M(c$,"hookMouseDown",
function(){
if(this.hMouseDown!=null){
return;
}this.hMouseDown=$_Q((($_D("$wt.widgets.Widget$5")?0:org.eclipse.swt.widgets.Widget.$Widget$5$()),$_N($wt.widgets.Widget$5,this,null)));
Clazz.addEvent(this.handle,"mousedown",this.hMouseDown);
});
$_M(c$,"hookMouseUp",
function(){
if(this.hMouseUp!=null){
return;
}this.hMouseUp=$_Q((($_D("$wt.widgets.Widget$6")?0:org.eclipse.swt.widgets.Widget.$Widget$6$()),$_N($wt.widgets.Widget$6,this,null)));
Clazz.addEvent(this.handle,"mouseup",this.hMouseUp);
});
$_M(c$,"hookMouseMove",
function(){
if(this.hMouseMove!=null){
return;
}this.hMouseMove=$_Q((($_D("$wt.widgets.Widget$7")?0:org.eclipse.swt.widgets.Widget.$Widget$7$()),$_N($wt.widgets.Widget$7,this,null)));
Clazz.addEvent(this.handle,"mousemove",this.hMouseMove);
});
$_M(c$,"hookMouseEnter",
function(){
if(this.hMouseEnter!=null){
return;
}this.hMouseEnter=$_Q((($_D("$wt.widgets.Widget$8")?0:org.eclipse.swt.widgets.Widget.$Widget$8$()),$_N($wt.widgets.Widget$8,this,null)));
Clazz.addEvent(this.handle,"mouseover",this.hMouseEnter);
});
$_M(c$,"hookMouseExit",
function(){
if(this.hMouseExit!=null){
return;
}this.hMouseExit=$_Q((($_D("$wt.widgets.Widget$9")?0:org.eclipse.swt.widgets.Widget.$Widget$9$()),$_N($wt.widgets.Widget$9,this,null)));
Clazz.addEvent(this.handle,"mouseout",this.hMouseExit);
});
$_M(c$,"hookMouseDoubleClick",
function(){
if(this.hMouseDoubleClick!=null){
return;
}this.hMouseDoubleClick=$_Q((($_D("$wt.widgets.Widget$10")?0:org.eclipse.swt.widgets.Widget.$Widget$10$()),$_N($wt.widgets.Widget$10,this,null)));
Clazz.addEvent(this.handle,"dblclick",this.hMouseDoubleClick);
});
$_M(c$,"hookSelection",
function(){
if(this.hSelection!=null){
return;
}this.hSelection=$_Q((($_D("$wt.widgets.Widget$11")?0:org.eclipse.swt.widgets.Widget.$Widget$11$()),$_N($wt.widgets.Widget$11,this,null)));
Clazz.addEvent(this.handle,"click",this.hSelection);
});
$_M(c$,"hookFocusIn",
function(){
if(this.hFocusIn!=null){
return;
}this.hFocusIn=$_Q((($_D("$wt.widgets.Widget$12")?0:org.eclipse.swt.widgets.Widget.$Widget$12$()),$_N($wt.widgets.Widget$12,this,null)));
Clazz.addEvent(this.handle,"focus",this.hFocusIn);
});
$_M(c$,"hookFocusOut",
function(){
if(this.hFocusOut!=null){
return;
}this.hFocusOut=$_Q((($_D("$wt.widgets.Widget$13")?0:org.eclipse.swt.widgets.Widget.$Widget$13$()),$_N($wt.widgets.Widget$13,this,null)));
Clazz.addEvent(this.handle,"blur",this.hFocusOut);
});
$_M(c$,"hookModify",
function(){
if(this.hModify!=null){
return;
}this.hModify=$_Q((($_D("$wt.widgets.Widget$14")?0:org.eclipse.swt.widgets.Widget.$Widget$14$()),$_N($wt.widgets.Widget$14,this,null)));
Clazz.addEvent(this.handle,"change",this.hModify);
});
$_M(c$,"hookHelp",
function(){
if(this.hHelp!=null){
return;
}this.hHelp=$_Q((($_D("$wt.widgets.Widget$15")?0:org.eclipse.swt.widgets.Widget.$Widget$15$()),$_N($wt.widgets.Widget$15,this,null)));
Clazz.addEvent(this.handle,"help",this.hHelp);
});
$_M(c$,"hookArm",
function(){
});
$_M(c$,"hookTraverse",
function(){
});
$_M(c$,"hookMenuDetect",
function(){
if(this.hMenuDetect!=null){
return;
}this.hMenuDetect=$_Q((($_D("$wt.widgets.Widget$16")?0:org.eclipse.swt.widgets.Widget.$Widget$16$()),$_N($wt.widgets.Widget$16,this,null)));
Clazz.addEvent(this.handle,"contextmenu",this.hMenuDetect);
});
$_M(c$,"hookMouseWheel",
function(){
});
$_M(c$,"hooks",
function(eventType){
if(this.eventTable==null)return false;
return this.eventTable.hooks(eventType);
},"~N");
$_M(c$,"isDisposed",
function(){
return(this.state&1)!=0;
});
$_M(c$,"isListening",
function(eventType){
return this.hooks(eventType);
},"~N");
$_M(c$,"isValidSubclass",
function(){
return $wt.widgets.Display.isValidClass(this.getClass());
});
$_M(c$,"isValidThread",
function(){
return true;
});
$_M(c$,"mapEvent",
function(hwnd,event){
},"~N,$wt.widgets.Event");
$_M(c$,"notifyListeners",
function(eventType,event){
if(event==null)event=new $wt.widgets.Event();
this.sendEvent(eventType,event);
},"~N,$wt.widgets.Event");
$_M(c$,"postEvent",
function(eventType){
this.sendEvent(eventType,null,false);
},"~N");
$_M(c$,"postEvent",
function(eventType,event){
this.sendEvent(eventType,event,false);
},"~N,$wt.widgets.Event");
$_M(c$,"releaseChild",
function(){
});
$_M(c$,"releaseHandle",
function(){
this.state|=1;
this.display=null;
if(this.handle!=null){
if(this.hFocusIn!=null){
Clazz.removeEvent(this.handle,"focus",this.hFocusIn);
this.hFocusIn=null;
}if(this.hFocusOut!=null){
Clazz.removeEvent(this.handle,"blur",this.hFocusOut);
this.hFocusOut=null;
}if(this.hKeyDown!=null){
Clazz.removeEvent(this.handle,"keydown",this.hKeyDown);
this.hKeyDown=null;
}if(this.hKeyUp!=null){
Clazz.removeEvent(this.handle,"keyup",this.hKeyUp);
this.hKeyUp=null;
}if(this.hKeyPress!=null){
Clazz.removeEvent(this.handle,"keypress",this.hKeyPress);
this.hKeyPress=null;
}if(this.hMouseDown!=null){
Clazz.removeEvent(this.handle,"mousedown",this.hMouseDown);
this.hMouseDown=null;
}if(this.hMouseUp!=null){
Clazz.removeEvent(this.handle,"mouseup",this.hMouseUp);
this.hMouseUp=null;
}if(this.hMouseEnter!=null){
Clazz.removeEvent(this.handle,"mouseover",this.hMouseEnter);
this.hMouseEnter=null;
}if(this.hMouseExit!=null){
Clazz.removeEvent(this.handle,"mouseout",this.hMouseExit);
this.hMouseExit=null;
}if(this.hMouseDoubleClick!=null){
Clazz.removeEvent(this.handle,"dblclick",this.hMouseDoubleClick);
this.hMouseDoubleClick=null;
}if(this.hMouseMove!=null){
Clazz.removeEvent(this.handle,"mousemove",this.hMouseMove);
this.hMouseMove=null;
}if(this.hMouseWheel!=null){
Clazz.removeEvent(this.handle,"scroll",this.hMouseWheel);
this.hMouseWheel=null;
}if(this.hSelection!=null){
Clazz.removeEvent(this.handle,"click",this.hSelection);
this.hSelection=null;
}if(this.hMenuDetect!=null){
Clazz.removeEvent(this.handle,"contextmenu",this.hMenuDetect);
this.hMenuDetect=null;
}if(this.hModify!=null){
Clazz.removeEvent(this.handle,"change",this.hModify);
this.hModify=null;
}if(this.hHelp!=null){
Clazz.removeEvent(this.handle,"help",this.hHelp);
this.hHelp=null;
}O$.destroyHandle(this.handle);
this.handle=null;
}});
$_M(c$,"releaseResources",
function(){
this.releaseWidget();
this.releaseHandle();
});
$_M(c$,"releaseWidget",
function(){
this.sendEvent(12);
this.eventTable=null;
this.data=null;
});
$_M(c$,"removeListener",
function(eventType,listener){
if(this.eventTable==null)return;
this.eventTable.unhook(eventType,listener);
},"~N,$wt.widgets.Listener");
$_M(c$,"removeListener",
function(eventType,listener){
if(this.eventTable==null)return;
this.eventTable.unhook(eventType,listener);
},"~N,$wt.internal.SWTEventListener");
$_M(c$,"removeDisposeListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(12,listener);
},"$wt.events.DisposeListener");
$_M(c$,"sendEvent",
function(event){
var display=event.display;
if(display==null){
event.display=display=this.display;
}if(!display.filterEvent(event)){
if(this.eventTable!=null)this.eventTable.sendEvent(event);
}},"$wt.widgets.Event");
$_M(c$,"sendEvent",
function(eventType){
this.sendEvent(eventType,null,true);
},"~N");
$_M(c$,"sendEvent",
function(eventType,event){
this.sendEvent(eventType,event,true);
},"~N,$wt.widgets.Event");
$_M(c$,"sendEvent",
function(eventType,event,send){
if(this.eventTable==null&&!this.display.filters(eventType)){
return;
}if(event==null)event=new $wt.widgets.Event();
event.type=eventType;
event.display=this.display;
event.widget=this;
if(event.time==0){
event.time=this.display.getLastEventTime();
}if(send){
this.sendEvent(event);
}else{
this.display.postEvent(event);
}},"~N,$wt.widgets.Event,~B");
$_M(c$,"sendKeyEvent",
function(type,msg,wParam,lParam){
var event=new $wt.widgets.Event();
return this.sendKeyEvent(type,msg,wParam,lParam,event);
},"~N,~N,~N,~N");
$_M(c$,"sendKeyEvent",
function(type,msg,wParam,lParam,event){
this.sendEvent(type,event);
if(this.isDisposed())return false;
return event.doit;
},"~N,~N,~N,~N,$wt.widgets.Event");
$_M(c$,"sendMouseEvent",
function(type,button,hwnd,x,y){
return this.sendMouseEvent(type,button,0,0,false,hwnd,x,y);
},"~N,~N,~O,~N,~N");
$_M(c$,"sendMouseEvent",
function(type,button,count,detail,send,hwnd,x,y){
if(!this.hooks(type)&&!this.filters(type))return true;
var event=new $wt.widgets.Event();
event.button=button;
event.detail=detail;
event.count=count;
event.x=x;
event.y=y;
switch(type){
case 3:
case 8:
if(event.button==1)event.stateMask&=-524289;
if(event.button==2)event.stateMask&=-1048577;
if(event.button==3)event.stateMask&=-2097153;
if(event.button==4)event.stateMask&=-8388609;
if(event.button==5)event.stateMask&=-33554433;
break;
case 4:
if(event.button==1)event.stateMask|=524288;
if(event.button==2)event.stateMask|=1048576;
if(event.button==3)event.stateMask|=2097152;
if(event.button==4)event.stateMask|=8388608;
if(event.button==5)event.stateMask|=33554432;
break;
}
if(send){
this.sendEvent(type,event);
if(this.isDisposed())return false;
}else{
this.postEvent(type,event);
}return event.doit;
},"~N,~N,~N,~N,~B,~O,~N,~N");
$_M(c$,"setData",
function(data){
if((this.state&4)!=0){
(this.data)[0]=data;
}else{
this.data=data;
}},"~O");
$_M(c$,"setData",
function(key,value){
var index=1;
var table=null;
if((this.state&4)!=0){
table=this.data;
if(table==null)return;
while(index<table.length){
if(key.equals(table[index]))break;
index+=2;
}
}if(value!=null){
if((this.state&4)!=0){
if(table==null)return;
if(index==table.length){
var newTable=new Array(table.length+2);
System.arraycopy(table,0,newTable,0,table.length);
this.data=table=newTable;
}}else{
table=new Array(3);
table[0]=this.data;
this.data=table;
this.state|=4;
}table[index]=key;
table[index+1]=value;
}else{
if((this.state&4)!=0){
if(table==null)return;
if(index!=table.length){
var length=table.length-2;
if(length==1){
this.data=table[0];
this.state&=-5;
}else{
var newTable=new Array(length);
System.arraycopy(table,0,newTable,0,index);
System.arraycopy(table,index+2,newTable,index,length-index);
this.data=newTable;
}}}}},"~S,~O");
$_M(c$,"sendFocusEvent",
function(type){
this.sendEvent(type);
return true;
},"~N");
$_M(c$,"SetWindowPos",
function(hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags){
if(hWnd==null)return true;
var el=hWnd;
el.style.left=X+"px";
el.style.top=Y+"px";
el.style.width=(cx>0?cx:0)+"px";
el.style.height=(cy>0?cy:0)+"px";
return true;
},"~O,~O,~N,~N,~N,~N,~N");
$_M(c$,"showMenu",
function(x,y){
var event=new $wt.widgets.Event();
event.x=x;
event.y=y;
this.sendEvent(35,event);
if(!event.doit)return true;
var menu=this.getMenu();
if(menu!=null&&!menu.isDisposed()){
if(x!=event.x||y!=event.y){
menu.setLocation(event.x,event.y);
}menu.setVisible(true);
return true;
}return false;
},"~N,~N");
$_V(c$,"toString",
function(){
var string="*Disposed*";
if(!this.isDisposed()){
string="*Wrong Thread*";
if(this.isValidThread())string=this.getNameText();
}return this.getName()+" {"+string+"}";
});
c$.$Widget$1$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
var evt=e.event;
var keyCode=evt.keyCode;
if(keyCode==27){
this.b$["$wt.widgets.Widget"].dragStatus=false;
}var event=new $wt.widgets.Event();
event.character=O$.getInputCharacter(evt.keyCode,evt.shiftKey);
event.keyCode=(event.character).charCodeAt(0);
event.type=1;
event.display=this.b$["$wt.widgets.Widget"].display;
event.stateMask=(evt.altKey?65536:0)|(evt.shiftKey?131072:0)|(evt.ctrlKey?262144:0);
event.widget=this.b$["$wt.widgets.Widget"];
if(event.time==0){
event.time=this.b$["$wt.widgets.Widget"].display.getLastEventTime();
}this.b$["$wt.widgets.Widget"].sendEvent(event);
});
c$=$_P();
};
c$.$Widget$2$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var evt=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
var e=evt.event;
var kc=0;
{
if(e.which){
kc=e.which;
}else{
kc=e.keyCode;
}
}($t$=O$.isCapsLockOn=(kc>64&&kc<91&&!e.shiftKey)||(kc>=97&&kc<=122&&e.shiftKey),O$.prototype.isCapsLockOn=O$.isCapsLockOn,$t$);
});
c$=$_P();
};
c$.$Widget$3$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
var evt=e.event;
var keyCode=evt.keyCode;
if(keyCode==27){
this.b$["$wt.widgets.Widget"].dragStatus=false;
}var event=new $wt.widgets.Event();
event.character=O$.getInputCharacter(evt.keyCode,evt.shiftKey);
event.keyCode=(event.character).charCodeAt(0);
event.type=2;
event.display=this.b$["$wt.widgets.Widget"].display;
event.stateMask=(evt.altKey?65536:0)|(evt.shiftKey?131072:0)|(evt.ctrlKey?262144:0);
event.widget=this.b$["$wt.widgets.Widget"];
if(event.time==0){
event.time=this.b$["$wt.widgets.Widget"].display.getLastEventTime();
}this.b$["$wt.widgets.Widget"].sendEvent(event);
});
c$=$_P();
};
c$.$Widget$4$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$4",null,Runnable);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.Widget"].isDisposed()){
this.b$["$wt.widgets.Widget"].sendEvent(32);
}this.b$["$wt.widgets.Widget"].hoverTimerID=0;
});
c$=$_P();
};
c$.$Widget$5$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$5",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var hoverHooked=this.b$["$wt.widgets.Widget"].mouseHoverProc(true);
var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
if(e.leftButtonHold){
this.b$["$wt.widgets.Widget"].dragStatus=true;
}if(!hoverHooked||this.b$["$wt.widgets.Widget"].hooks(3)){
this.b$["$wt.widgets.Widget"].sendMouseEvent(3,(this.getEvent()).button,e.target,e.x,e.y);
}});
c$=$_P();
};
c$.$Widget$6$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$6",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var hoverHooked=this.b$["$wt.widgets.Widget"].mouseHoverProc(true);
this.b$["$wt.widgets.Widget"].dragStatus=false;
if(!hoverHooked||this.b$["$wt.widgets.Widget"].hooks(4)){
var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
this.b$["$wt.widgets.Widget"].sendMouseEvent(4,(this.getEvent()).button,e.target,e.x,e.y);
}});
c$=$_P();
};
c$.$Widget$7$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$7",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
var widgetThis=this.b$["$wt.widgets.Widget"];
{
if(O$.isIE){
if(e.x==widgetThis.lastMouseMoveX&&e.y==widgetThis.lastMouseMoveY){
return true;
}
widgetThis.lastMouseMoveX=e.x;
widgetThis.lastMouseMoveY=e.y;
}
}var hoverHooked=this.b$["$wt.widgets.Widget"].mouseHoverProc(false);
var dragHooked=false;
if(this.b$["$wt.widgets.Widget"].dragStatus&&e.leftButtonHold&&this.b$["$wt.widgets.Widget"].hooks(29)){
dragHooked=true;
this.b$["$wt.widgets.Widget"].sendEvent(29);
this.b$["$wt.widgets.Widget"].dragStatus=false;
}if((!dragHooked&&!hoverHooked)||this.b$["$wt.widgets.Widget"].hooks(5)){
this.b$["$wt.widgets.Widget"].sendMouseEvent(5,(this.getEvent()).button,e.target,e.x,e.y);
}this.toReturn(true);
});
c$=$_P();
};
c$.$Widget$8$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$8",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var hoverHooked=this.b$["$wt.widgets.Widget"].mouseHoverProc(true);
if(!hoverHooked||this.b$["$wt.widgets.Widget"].hooks(6)){
var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
this.b$["$wt.widgets.Widget"].sendMouseEvent(6,(this.getEvent()).button,e.target,e.x,e.y);
}});
c$=$_P();
};
c$.$Widget$9$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$9",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var hoverHooked=false;
if(this.b$["$wt.widgets.Widget"].hoverTimerID!=0){
hoverHooked=true;
w$.clearTimeout(this.b$["$wt.widgets.Widget"].hoverTimerID);
this.b$["$wt.widgets.Widget"].hoverTimerID=0;
}if(!hoverHooked||this.b$["$wt.widgets.Widget"].hooks(7)){
var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
this.b$["$wt.widgets.Widget"].sendMouseEvent(7,(this.getEvent()).button,e.target,e.x,e.y);
}});
c$=$_P();
};
c$.$Widget$10$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$10",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
this.b$["$wt.widgets.Widget"].sendMouseEvent(8,(this.getEvent()).button,e.target,e.x,e.y);
});
c$=$_P();
};
c$.$Widget$11$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$11",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Widget"].sendEvent(13);
});
c$=$_P();
};
c$.$Widget$12$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$12",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Widget"].sendEvent(15);
});
c$=$_P();
};
c$.$Widget$13$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$13",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Widget"].sendEvent(16);
});
c$=$_P();
};
c$.$Widget$14$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$14",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Widget"].sendEvent(24);
});
c$=$_P();
};
c$.$Widget$15$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$15",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Widget"].sendEvent(28);
});
c$=$_P();
};
c$.$Widget$16$=function(){
$_H();
c$=$_W($wt.widgets,"Widget$16",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Widget"].sendEvent(35);
});
c$=$_P();
};
$_S(c$,
"DISPOSED",1,
"CANVAS",2,
"KEYED_DATA",4,
"DISABLED",8,
"HIDDEN",16,
"LAYOUT_NEEDED",32,
"LAYOUT_CHANGED",64,
"DEFAULT_WIDTH",64,
"DEFAULT_HEIGHT",64);
});
$_L(["$wt.graphics.Drawable","$wt.widgets.Widget"],"$wt.widgets.Control",["$wt.accessibility.Accessible","$wt.graphics.Color","$.Font","$.Point","$.Rectangle","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$.Popup","$wt.internal.dnd.HTMLEventWrapper","$wt.internal.struct.MESSAGE","$.WINDOWPOS","$wt.widgets.Event","$.TypedListener"],function(){
c$=$_C(function(){
this.parent=null;
this.cursor=null;
this.menu=null;
this.toolTipText=null;
this.layoutData=null;
this.accessible=null;
this.drawCount=0;
this.foreground=0;
this.background=0;
this.left=0;
this.top=0;
this.height=0;
this.width=0;
this.locationSet=false;
this.hOperaMouseUp=null;
this.hControlMenuDetect=null;
$_Z(this,arguments);
},$wt.widgets,"Control",$wt.widgets.Widget,$wt.graphics.Drawable);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.Control,[parent,style]);
this.parent=parent;
this.createWidget();
},"$wt.widgets.Composite,~N");
$_M(c$,"addControlListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(11,typedListener);
this.addListener(10,typedListener);
},"$wt.events.ControlListener");
$_M(c$,"addFocusListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(15,typedListener);
this.addListener(16,typedListener);
},"$wt.events.FocusListener");
$_M(c$,"addHelpListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(28,typedListener);
},"$wt.events.HelpListener");
$_M(c$,"addKeyListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(2,typedListener);
this.addListener(1,typedListener);
},"$wt.events.KeyListener");
$_M(c$,"addMouseListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(3,typedListener);
this.addListener(4,typedListener);
this.addListener(8,typedListener);
},"$wt.events.MouseListener");
$_M(c$,"addMouseTrackListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(6,typedListener);
this.addListener(7,typedListener);
this.addListener(32,typedListener);
},"$wt.events.MouseTrackListener");
$_M(c$,"addMouseMoveListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(5,typedListener);
},"$wt.events.MouseMoveListener");
$_M(c$,"addPaintListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(9,typedListener);
},"$wt.events.PaintListener");
$_M(c$,"addTraverseListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(31,typedListener);
},"$wt.events.TraverseListener");
$_M(c$,"borderHandle",
function(){
return this.handle;
});
$_M(c$,"checkBorder",
function(){
if(this.getBorderWidth()==0)this.style&=-2049;
});
$_M(c$,"checkBuffered",
function(){
this.style&=-536870913;
});
$_M(c$,"checkHandle",
function(hwnd){
return hwnd===this.handle;
},"Element");
$_M(c$,"checkMirrored",
function(){
if((this.style&67108864)!=0){
}});
$_M(c$,"computeSize",
function(wHint,hHint){
return this.computeSize(wHint,hHint,true);
},"~N,~N");
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var width=64;
var height=64;
if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
var border=this.getBorderWidth();
width+=border*2;
height+=border*2;
return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_M(c$,"computeTabGroup",
function(){
if(this.isTabGroup())return this;
return this.parent.computeTabGroup();
});
$_M(c$,"computeTabRoot",
function(){
var tabList=this.parent._getTabList();
if(tabList!=null){
var index=0;
while(index<tabList.length){
if(tabList[index]===this)break;
index++;
}
if(index==tabList.length){
if(this.isTabGroup())return this;
}}return this.parent.computeTabRoot();
});
$_M(c$,"computeTabList",
function(){
if(this.isTabGroup()){
if(this.getVisible()&&this.getEnabled()){
return[this];
}}return new Array(0);
});
$_M(c$,"createHandle",
function(){
this.handle=d$.createElement("DIV");
});
$_M(c$,"createWidget",
function(){
this.foreground=this.background=-1;
this.checkOrientation(this.parent);
this.createHandle();
this.checkBuffered();
this.register();
this.setDefaultFont();
this.checkMirrored();
this.checkBorder();
this._updateOrientation();
});
$_M(c$,"deregister",
function(){
this.display.removeControl(this.handle);
});
$_V(c$,"destroyWidget",
function(){
var hwnd=this.topHandle();
this.releaseHandle();
if(hwnd!=null){
O$.destroyHandle(hwnd);
}});
$_M(c$,"enableWidget",
function(enabled){
this.handle.disabled=!enabled;
},"~B");
$_M(c$,"findBrush",
function(pixel){
return this.parent.findBrush(pixel);
},"~N");
$_M(c$,"findCursor",
function(){
if(this.cursor!=null)return this.cursor;
return this.parent.findCursor();
});
$_M(c$,"findThemeControl",
function(){
return this.background==-1?this.parent.findThemeControl():null;
});
$_M(c$,"findMenus",
function(control){
if(this.menu!=null&&this!==control)return[this.menu];
return new Array(0);
},"$wt.widgets.Control");
$_M(c$,"findMnemonic",
function(string){
var index=0;
var length=string.length;
do{
while(index<length&&(string.charAt(index)).charCodeAt(0)!=('&').charCodeAt(0))index++;

if(++index>=length)return'\0';
if((string.charAt(index)).charCodeAt(0)!=('&').charCodeAt(0))return string.charAt(index);
index++;
}while(index<length);
return'\0';
},"~S");
$_M(c$,"fixChildren",
function(newShell,oldShell,newDecorations,oldDecorations,menus){
oldShell.fixShell(newShell,this);
oldDecorations.fixDecorations(newDecorations,this,menus);
},"$wt.widgets.Shell,$wt.widgets.Shell,$wt.widgets.Decorations,$wt.widgets.Decorations,~A");
$_M(c$,"fixFocus",
function(focusControl){
var shell=this.getShell();
var control=this;
while(control!==shell&&(control=control.parent)!=null){
if(control.setFixedFocus())return;
}
shell.setSavedFocus(focusControl);
},"$wt.widgets.Control");
$_M(c$,"forceFocus",
function(){
if(this.display.focusEvent==16)return false;
var shell=this.menuShell();
shell.setSavedFocus(this);
if(!this.isEnabled()||!this.isVisible()||!this.j2sIsActive())return false;
if(this.isFocusControl())return true;
shell.setSavedFocus(null);
if(this.isDisposed())return false;
O$.SetFocus(this.handle);
shell.setSavedFocus(this);
return this.isFocusControl();
});
$_M(c$,"forceResize",
function(){
if(this.parent==null)return;
var lpwp=this.parent.lpwp;
if(lpwp==null)return;
var length=lpwp.length;
for(var i=0;i<length;i++){
var wp=lpwp[i];
if(wp!=null&&wp.hwnd===this.handle){
this.SetWindowPos(wp.hwnd,null,wp.x,wp.y,wp.cx,wp.cy,wp.flags);
lpwp[i]=null;
return;
}}
});
$_M(c$,"getAccessible",
function(){
if(this.accessible==null)this.accessible=new $wt.accessibility.Accessible(this);
return this.accessible;
});
$_M(c$,"getBackground",
function(){
var bg=this.handle.style.backgroundColor;
if(bg==null||(""+bg).length==0){
return new $wt.graphics.Color(this.display,"menu");
}return new $wt.graphics.Color(this.display,bg);
});
$_M(c$,"getBorderWidth",
function(){
if((this.style&2048)!=0){
return 1;
}return 0;
});
$_M(c$,"getBounds",
function(){
this.forceResize();
return new $wt.graphics.Rectangle(this.left,this.top,this.width,this.height);
});
$_M(c$,"getEnabled",
function(){
return!this.handle.disabled;
});
$_M(c$,"getFont",
function(){
var ff=this.handle.style.fontFamily;
if(ff==null||(""+ff).length==0){
ff=null;
}var fs=this.handle.style.fontSize;
if(fs==null||(""+fs).length==0){
fs="8";
}return new $wt.graphics.Font(this.display,ff,Integer.parseInt(fs),0);
});
$_M(c$,"getForeground",
function(){
var fg=this.handle.style.color;
if(fg==null||(""+fg).length==0){
return new $wt.graphics.Color(this.display,"black");
}return new $wt.graphics.Color(this.display,this.handle.style.color);
});
$_M(c$,"getLayoutData",
function(){
return this.layoutData;
});
$_M(c$,"getLocation",
function(){
this.forceResize();
return new $wt.graphics.Point(this.left,this.top);
});
$_V(c$,"getMenu",
function(){
return this.menu;
});
$_M(c$,"getMonitor",
function(){
return this.display.getPrimaryMonitor();
});
$_M(c$,"getParent",
function(){
return this.parent;
});
$_M(c$,"getPath",
function(){
var count=0;
var shell=this.getShell();
var control=this;
while(control!==shell){
count++;
control=control.parent;
}
control=this;
var result=new Array(count);
while(control!==shell){
result[--count]=control;
control=control.parent;
}
return result;
});
$_M(c$,"getShell",
function(){
return this.parent.getShell();
});
$_M(c$,"getSize",
function(){
this.forceResize();
return new $wt.graphics.Point(this.width,this.height);
});
$_M(c$,"getToolTipText",
function(){
return this.toolTipText;
});
$_M(c$,"getVisible",
function(){
if(this.drawCount!=0)return(this.state&16)==0;
if(this.handle==null){
return false;
}return this.handle.style.visibility!=="hidden";
});
$_M(c$,"hasCursor",
function(){
return false;
});
$_M(c$,"hasFocus",
function(){
return false;
});
$_M(c$,"j2sIsActive",
function(){
var dialogShell=this.display.getModalDialogShell();
if(dialogShell!=null&&dialogShell!==this.getShell()){
return false;
}var shell=null;
var modalShells=this.display.modalShells;
if(modalShells!=null){
var bits=196608;
var index=modalShells.length;
while(--index>=0){
var modal=modalShells[index];
if(modal!=null){
if((modal.style&bits)!=0){
var control=this;
while(control!=null){
if(control===modal)break;
control=control.parent;
}
if(control!==modal)return false;
break;
}if((modal.style&32768)!=0){
if(shell==null)shell=this.getShell();
if(modal.parent===shell)return false;
}}}
}if(shell==null)shell=this.getShell();
return shell.getEnabled();
});
$_M(c$,"isEnabled",
function(){
return this.getEnabled()&&this.parent.isEnabled();
});
$_M(c$,"isFocusControl",
function(){
var focusControl=this.display.focusControl;
if(focusControl!=null&&!focusControl.isDisposed()){
return this===focusControl;
}return this.hasFocus();
});
$_M(c$,"isFocusAncestor",
function(control){
while(control!=null&&control!==this){
control=control.parent;
}
return control===this;
},"$wt.widgets.Control");
$_M(c$,"isReparentable",
function(){
return true;
});
$_M(c$,"isShowing",
function(){
if(!this.isVisible())return false;
var control=this;
while(control!=null){
var size=control.getSize();
if(size.x==0||size.y==0){
return false;
}control=control.parent;
}
return true;
});
$_M(c$,"isTabGroup",
function(){
var tabList=this.parent._getTabList();
if(tabList!=null){
for(var i=0;i<tabList.length;i++){
if(tabList[i]===this)return true;
}
}return true;
});
$_M(c$,"isTabItem",
function(){
var tabList=this.parent._getTabList();
if(tabList!=null){
for(var i=0;i<tabList.length;i++){
if(tabList[i]===this)return false;
}
}return false;
});
$_M(c$,"isVisible",
function(){
return this.getVisible()&&this.parent.isVisible();
});
$_M(c$,"mapEvent",
function(hwnd,event){
if(hwnd!==this.handle){
}},"Element,$wt.widgets.Event");
$_M(c$,"markLayout",
function(changed,all){
},"~B,~B");
$_M(c$,"menuShell",
function(){
return this.parent.menuShell();
});
$_M(c$,"mnemonicHit",
function(key){
return false;
},"~N");
$_M(c$,"mnemonicMatch",
function(key){
return false;
},"~N");
$_M(c$,"moveAbove",
function(control){
if(control!=null){
if(this.parent!==control.parent)return;
if(this.parent!=null){
var parentHandle=this.parent.containerHandle();
if(parentHandle!=null){
parentHandle.removeChild(this.handle);
parentHandle.insertBefore(this.handle,control.handle);
}}}},"$wt.widgets.Control");
$_M(c$,"moveBelow",
function(control){
if(control!=null){
if(this.parent!==control.parent)return;
this.parent.handle.removeChild(this.handle);
if(control.handle.nextSibling!=null){
this.parent.handle.insertBefore(this.handle,control.handle.nextSibling);
}else{
this.parent.handle.appendChild(this.handle);
}}},"$wt.widgets.Control");
$_M(c$,"pack",
function(){
this.pack(true);
});
$_M(c$,"pack",
function(changed){
var computeSize=this.computeSize(-1,-1,changed);
this.setSize(computeSize);
},"~B");
$_M(c$,"redraw",
function(){
});
$_M(c$,"redraw",
function(x,y,width,height,all){
if(width<=0||height<=0)return;
},"~N,~N,~N,~N,~B");
$_M(c$,"register",
function(){
this.display.addControl(this.handle,this);
if(this.parent!=null){
this.parent.children[this.parent.children.length]=this;
}});
$_V(c$,"releaseChild",
function(){
this.parent.removeControl(this);
});
$_M(c$,"releaseHandle",
function(){
if(this.hOperaMouseUp!=null||this.hControlMenuDetect!=null){
var el=null;
if($_O(this,$wt.widgets.Composite)){
el=(this).containerHandle();
}else{
el=this.handle;
}if(this.hOperaMouseUp!=null){
Clazz.removeEvent(el,"mouseup",this.hOperaMouseUp);
this.hOperaMouseUp=null;
}if(this.hControlMenuDetect!=null){
Clazz.removeEvent(el,"contextmenu",this.hControlMenuDetect);
this.hControlMenuDetect=null;
}}$_U(this,$wt.widgets.Control,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.Control,"releaseWidget",[]);
if(this.toolTipText!=null){
var shell=this.getShell();
shell.setToolTipText(this.handle,null);
}this.toolTipText=null;
if(this.menu!=null&&!this.menu.isDisposed()){
this.menu.dispose();
}this.menu=null;
this.cursor=null;
this.deregister();
this.parent=null;
this.layoutData=null;
this.accessible=null;
});
$_M(c$,"removeControlListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(10,listener);
this.eventTable.unhook(11,listener);
},"$wt.events.ControlListener");
$_M(c$,"removeFocusListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(15,listener);
this.eventTable.unhook(16,listener);
},"$wt.events.FocusListener");
$_M(c$,"removeHelpListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(28,listener);
},"$wt.events.HelpListener");
$_M(c$,"removeKeyListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(2,listener);
this.eventTable.unhook(1,listener);
},"$wt.events.KeyListener");
$_M(c$,"removeMouseTrackListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(6,listener);
this.eventTable.unhook(7,listener);
this.eventTable.unhook(32,listener);
},"$wt.events.MouseTrackListener");
$_M(c$,"removeMouseListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(3,listener);
this.eventTable.unhook(4,listener);
this.eventTable.unhook(8,listener);
},"$wt.events.MouseListener");
$_M(c$,"removeMouseMoveListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(5,listener);
},"$wt.events.MouseMoveListener");
$_M(c$,"removePaintListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(9,listener);
},"$wt.events.PaintListener");
$_M(c$,"removeTraverseListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(31,listener);
},"$wt.events.TraverseListener");
$_M(c$,"showWidget",
function(visible){
this.handle.style.visibility=visible?"visible":"hidden";
},"~B");
$_V(c$,"sendFocusEvent",
function(type){
var shell=this.getShell();
var display=this.display;
display.focusEvent=type;
display.focusControl=this;
this.sendEvent(type);
display.focusEvent=0;
display.focusControl=null;
if(!shell.isDisposed()){
switch(type){
case 15:
shell.setActiveControl(this);
break;
case 16:
if(shell!==display.getActiveShell()){
shell.setActiveControl(null);
}break;
}
}return true;
},"~N");
$_M(c$,"setBackground",
function(color){
if(color!=null){
this.handle.style.backgroundColor=color.getCSSHandle();
}else{
this.handle.style.backgroundColor="";
}},"$wt.graphics.Color");
$_M(c$,"setBounds",
function(x,y,width,height){
var flags=0;
this.setBounds(x,y,Math.max(0,width),Math.max(0,height),flags);
},"~N,~N,~N,~N");
$_M(c$,"setBounds",
function(x,y,width,height,flags){
this.setBounds(x,y,width,height,flags,true);
},"~N,~N,~N,~N,~N");
$_M(c$,"setBounds",
function(x,y,width,height,flags,defer){
var resized=this.width!=width||this.height!=height;
var moved=this.left!=x||this.top!=y;
if(!this.locationSet){
this.locationSet=moved;
}var tempX=x;
if(this.parent!=null){
if((this.parent.style&67108864)!=0){
x=Math.max(0,this.parent.getClientArea().width-x-width);
}}var topHandle=this.topHandle();
if(defer&&this.parent!=null){
this.forceResize();
var lpwp=this.parent.lpwp;
if(lpwp==null){
if((width!=this.width||height!=this.height)&&$_O(this,$wt.widgets.Composite)){
this.display.sendMessage(new $wt.internal.struct.MESSAGE(this,2,null));
}this.left=x;
this.top=y;
this.width=width;
this.height=height;
this.SetWindowPos(topHandle,null,x,y,width,height,flags);
}else{
var index=0;
while(index<lpwp.length){
if(lpwp[index]==null)break;
index++;
}
if(index==lpwp.length){
var newLpwp=new Array(lpwp.length+4);
System.arraycopy(lpwp,0,newLpwp,0,lpwp.length);
this.parent.lpwp=lpwp=newLpwp;
}var wp=new $wt.internal.struct.WINDOWPOS();
wp.hwnd=topHandle;
wp.x=x;
wp.y=y;
wp.cx=width;
wp.cy=height;
wp.flags=flags;
lpwp[index]=wp;
}}else{
if((width!=this.width||height!=this.height)&&$_O(this,$wt.widgets.Composite)){
this.display.sendMessage(new $wt.internal.struct.MESSAGE(this,2,null));
}this.left=x;
this.top=y;
this.width=width;
this.height=height;
this.SetWindowPos(topHandle,null,x,y,width,height,flags);
}this.left=tempX;
if(resized&&this.hooks(11))this.sendEvent(11);
if(moved&&this.hooks(10))this.sendEvent(10);
},"~N,~N,~N,~N,~N,~B");
$_M(c$,"setBounds",
function(rect){
this.setBounds(rect.x,rect.y,rect.width,rect.height);
},"$wt.graphics.Rectangle");
$_M(c$,"setCapture",
function(capture){
},"~B");
$_M(c$,"setCursor",
function(){
});
$_M(c$,"setCursor",
function(cursor){
this.cursor=cursor;
this.handle.style.cursor=(cursor==null)?"":cursor.getCSSHandle();
},"$wt.graphics.Cursor");
$_M(c$,"setDefaultFont",
function(){
});
$_M(c$,"setEnabled",
function(enabled){
var control=null;
var fixFocus=false;
if(!enabled){
if(this.display.focusEvent!=16){
control=this.display.getFocusControl();
fixFocus=this.isFocusAncestor(control);
}}this.enableWidget(enabled);
if(fixFocus)this.fixFocus(control);
},"~B");
$_M(c$,"setFixedFocus",
function(){
if((this.style&524288)!=0)return false;
return this.forceFocus();
});
$_M(c$,"setFocus",
function(){
if((this.style&524288)!=0)return false;
return this.forceFocus();
});
$_M(c$,"fontHandle",
function(){
return this.handle;
});
$_M(c$,"setFont",
function(font){
var handle=this.fontHandle();
if(font==null||font.data==null){
handle.style.fontFamily="";
handle.style.fontSize="";
handle.style.fontWeight="";
handle.style.fontStyle="";
handle.style.textDecoration="";
return;
}if(font.data.name!=null){
handle.style.fontFamily=font.data.name;
}handle.style.fontSize=font.data.height+"pt";
if((font.data.style&1)!=0){
handle.style.fontWeight="bold";
}else{
handle.style.fontWeight="normal";
}if((font.data.style&2)!=0){
handle.style.fontStyle="italic";
}else{
handle.style.fontStyle="normal";
}var td="";
if(font.data.isStrikeout){
td="line-through";
}if(font.data.isUnderline){
if(td.length>0){
td+=" underline";
}else{
td="underline";
}}handle.style.textDecoration=td;
},"$wt.graphics.Font");
$_M(c$,"setForeground",
function(color){
if(color!=null){
this.handle.style.color=color.getCSSHandle();
}else{
this.handle.style.color="";
}},"$wt.graphics.Color");
$_M(c$,"setLayoutData",
function(layoutData){
this.layoutData=layoutData;
},"~O");
$_M(c$,"setLocation",
function(x,y){
var flags=0;
this.setBounds(x,y,this.width,this.height,flags);
},"~N,~N");
$_M(c$,"setLocation",
function(location){
this.setLocation(location.x,location.y);
},"$wt.graphics.Point");
$_M(c$,"setMenu",
function(menu){
if(menu!=null){
}this.menu=menu;
var el=null;
if($_O(this,$wt.widgets.Composite)){
el=(this).containerHandle();
}else{
el=this.handle;
}if(O$.isOpera){
if(this.hOperaMouseUp==null){
this.hOperaMouseUp=$_Q((($_D("$wt.widgets.Control$1")?0:org.eclipse.swt.widgets.Control.$Control$1$()),$_N($wt.widgets.Control$1,this,null)));
Clazz.addEvent(el,"mouseup",this.hOperaMouseUp);
}}if(this.hControlMenuDetect==null){
this.hControlMenuDetect=$_Q((($_D("$wt.widgets.Control$2")?0:org.eclipse.swt.widgets.Control.$Control$2$()),$_N($wt.widgets.Control$2,this,null)));
Clazz.addEvent(el,"contextmenu",this.hControlMenuDetect);
}},"$wt.widgets.Menu");
$_M(c$,"setRadioFocus",
function(){
return false;
});
$_M(c$,"setRadioSelection",
function(value){
return false;
},"~B");
$_M(c$,"setRedraw",
function(redraw){
},"~B");
$_M(c$,"setSavedFocus",
function(){
return this.forceFocus();
});
$_M(c$,"setSize",
function(width,height){
var flags=0;
this.setBounds(this.left,this.top,Math.max(0,width),Math.max(0,height),flags);
},"~N,~N");
$_M(c$,"setSize",
function(size){
this.setSize(size.x,size.y);
},"$wt.graphics.Point");
$_M(c$,"setTabGroupFocus",
function(){
return this.setTabItemFocus();
});
$_M(c$,"setTabItemFocus",
function(){
if(!this.isShowing())return false;
return this.forceFocus();
});
$_M(c$,"setToolTipText",
function(string){
var shell=this.getShell();
shell.setToolTipText(this.handle,this.toolTipText=string);
},"~S");
$_M(c$,"setVisible",
function(visible){
if(this.drawCount!=0){
if(((this.state&16)==0)==visible)return;
}else{
if((this.handle.style.visibility!=="hidden")==visible)return;
}if(visible){
this.sendEvent(22);
if(this.isDisposed())return;
if($_O(this,$wt.widgets.Composite)){
this.display.sendMessage(new $wt.internal.struct.MESSAGE(this,2,null));
}}this.handle.style.visibility=visible?"":"hidden";
this.handle.style.display=visible?"":"none";
var control=null;
var fixFocus=false;
if(!visible){
if(this.display.focusEvent!=16){
control=this.display.getFocusControl();
fixFocus=this.isFocusAncestor(control);
}}if(this.drawCount!=0){
this.state=visible?this.state&-17:this.state|16;
}else{
this.showWidget(visible);
if(this.isDisposed())return;
}if(!visible){
this.sendEvent(23);
if(this.isDisposed())return;
}if(fixFocus)this.fixFocus(control);
},"~B");
$_M(c$,"sort",
function(items){
var length=items.length;
for(var gap=Math.floor(length/2);gap>0;gap/=2){
for(var i=gap;i<length;i++){
for(var j=i-gap;j>=0;j-=gap){
if(items[j]<=items[j+gap]){
var swap=items[j];
items[j]=items[j+gap];
items[j+gap]=swap;
}}
}
}
},"~A");
$_M(c$,"toControl",
function(x,y){
return new $wt.graphics.Point(x,y);
},"~N,~N");
$_M(c$,"toControl",
function(point){
return this.toControl(point.x,point.y);
},"$wt.graphics.Point");
$_M(c$,"toDisplay",
function(x,y){
var pt=O$.calcuateRelativePosition(this.handle,d$.body);
return new $wt.graphics.Point(pt.x+x,pt.y+y);
},"~N,~N");
$_M(c$,"toDisplay",
function(point){
return this.toDisplay(point.x,point.y);
},"$wt.graphics.Point");
$_M(c$,"topHandle",
function(){
return this.handle;
});
$_M(c$,"traverse",
function(event){
this.sendEvent(31,event);
if(this.isDisposed())return true;
if(!event.doit)return false;
switch(event.detail){
case 0:
return true;
case 2:
return this.traverseEscape();
case 4:
return this.traverseReturn();
case 16:
return this.traverseGroup(true);
case 8:
return this.traverseGroup(false);
case 64:
return this.traverseItem(true);
case 32:
return this.traverseItem(false);
case 128:
return this.traverseMnemonic(event.character);
case 512:
return this.traversePage(true);
case 256:
return this.traversePage(false);
}
return false;
},"$wt.widgets.Event");
$_M(c$,"traverse",
function(traversal){
var event=new $wt.widgets.Event();
event.doit=true;
event.detail=traversal;
return this.traverse(event);
},"~N");
$_M(c$,"traverseEscape",
function(){
return false;
});
$_M(c$,"traverseGroup",
function(next){
var root=this.computeTabRoot();
var group=this.computeTabGroup();
var list=root.computeTabList();
var length=list.length;
var index=0;
while(index<length){
if(list[index]===group)break;
index++;
}
if(index==length)return false;
var start=index;
var offset=(next)?1:-1;
while((index=((index+offset+length)%length))!=start){
var control=list[index];
if(!control.isDisposed()&&control.setTabGroupFocus()){
return true;
}}
if(group.isDisposed())return false;
return group.setTabGroupFocus();
},"~B");
$_M(c$,"traverseItem",
function(next){
var children=this.parent._getChildren();
var length=children.length;
var index=0;
while(index<length){
if(children[index]===this)break;
index++;
}
if(index==length)return false;
var start=index;
var offset=(next)?1:-1;
while((index=(index+offset+length)%length)!=start){
var child=children[index];
if(!child.isDisposed()&&child.isTabItem()){
if(child.setTabItemFocus())return true;
}}
return false;
},"~B");
$_M(c$,"traverseMnemonic",
function(key){
return this.mnemonicHit(key);
},"~N");
$_M(c$,"traversePage",
function(next){
return false;
},"~B");
$_M(c$,"traverseReturn",
function(){
return false;
});
$_M(c$,"update",
function(){
this.update(false);
});
$_M(c$,"update",
function(all){
},"~B");
$_M(c$,"updateFont",
function(oldFont,newFont){
var sameFont=this.getFont().equals(oldFont);
if(sameFont)this.setFont(newFont);
return sameFont;
},"$wt.graphics.Font,$wt.graphics.Font");
$_M(c$,"updateLayout",
function(resize,all){
},"~B,~B");
$_M(c$,"widgetParent",
function(){
if(this.parent==null){
return null;
}return this.parent.handle;
});
$_M(c$,"setParent",
function(parent){
if(this.parent===parent)return true;
if(!this.isReparentable())return false;
this.releaseChild();
var newShell=parent.getShell();
var oldShell=this.getShell();
var newDecorations=parent.menuShell();
var oldDecorations=this.menuShell();
if(oldShell!==newShell||oldDecorations!==newDecorations){
var menus=oldShell.findMenus(this);
this.fixChildren(newShell,oldShell,newDecorations,oldDecorations,menus);
}var children=parent.children;
children[children.length+1]=this;
var topHandle=this.topHandle();
topHandle.parentNode.removeChild(this.handle);
parent.containerHandle().appendChild(this.handle);
var oldParent=this.parent;
this.parent=parent;
this.display.sendMessage(new $wt.internal.struct.MESSAGE(oldParent,2,null));
this.display.sendMessage(new $wt.internal.struct.MESSAGE(parent,2,null));
return true;
},"$wt.widgets.Composite");
c$.$Control$1$=function(){
$_H();
c$=$_W($wt.widgets,"Control$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var evt=this.getEvent();
if(evt!=null&&(evt).ctrlKey){
var evtHTML=new $wt.internal.dnd.HTMLEventWrapper(evt);
if(!evtHTML.leftButtonHold){
var menu=this.b$["$wt.widgets.Control"].getMenu();
if(menu!=null&&!menu.isDisposed()){
menu.handle.style.left="-10000px";
menu.handle.style.top="-10000px";
menu.handle.style.display="block";
var bounds=menu.getBounds();
var clientArea=this.b$["$wt.widgets.Control"].getMonitor().getClientArea();
clientArea.x+=O$.getFixedBodyOffsetLeft();
clientArea.y+=O$.getFixedBodyOffsetTop();
var rect=$wt.internal.browser.Popup.popupMenu(clientArea,new $wt.graphics.Rectangle(evtHTML.x,evtHTML.y,0,0),bounds.width,bounds.height,0);
menu.handle.style.width=rect.width+"px";
menu.setLocation(rect.x,rect.y);
this.b$["$wt.widgets.Control"].showMenu(rect.x,rect.y);
}evtHTML.preventDefault();
evtHTML.stopPropagation();
this.toReturn(false);
}}});
c$=$_P();
};
c$.$Control$2$=function(){
$_H();
c$=$_W($wt.widgets,"Control$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var evt=this.getEvent();
if(evt!=null){
var evtHTML=new $wt.internal.dnd.HTMLEventWrapper(evt);
var menu=this.b$["$wt.widgets.Control"].getMenu();
if(menu!=null&&!menu.isDisposed()){
menu.handle.style.left="-10000px";
menu.handle.style.top="-10000px";
menu.handle.style.display="block";
var bounds=menu.getBounds();
var clientArea=this.b$["$wt.widgets.Control"].getMonitor().getClientArea();
clientArea.x+=O$.getFixedBodyOffsetLeft();
clientArea.y+=O$.getFixedBodyOffsetTop();
var rect=$wt.internal.browser.Popup.popupMenu(clientArea,new $wt.graphics.Rectangle(evtHTML.x,evtHTML.y,0,0),bounds.width,bounds.height,0);
menu.handle.style.width=rect.width+"px";
menu.setLocation(rect.x,rect.y);
this.b$["$wt.widgets.Control"].showMenu(rect.x,rect.y);
}evtHTML.preventDefault();
evtHTML.stopPropagation();
}this.toReturn(false);
});
c$=$_P();
};
});
$_L(["$wt.widgets.Widget"],"$wt.widgets.ScrollBar",["$wt.graphics.Point","$.Rectangle","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Event","$.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.ScrollBar", "/* scrolled composite */\n.vscroll-default{\noverflow-y:scroll;\n}\n.hscroll-default{\noverflow-x:scroll;\n}\n.swt-widgets-scrollbar {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.parent=null;
this.increment=0;
this.pageIncrement=0;
this.minimum=0;
this.maximum=0;
this.thumb=0;
this.selection=0;
this.size=0;
this.outerHandle=null;
this.sbHandle=null;
this.innerHandle=null;
this.hScroll=null;
$_Z(this,arguments);
},$wt.widgets,"ScrollBar",$wt.widgets.Widget);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.ScrollBar,[parent,$wt.widgets.ScrollBar.checkStyle(style)]);
this.parent=parent;
this.createWidget();
},"$wt.widgets.Scrollable,~N");
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
$_M(c$,"createWidget",
function(){
this.increment=1;
this.pageIncrement=10;
this.state=this.state|16;
this.minimum=0;
this.maximum=100;
this.thumb=10;
this.selection=0;
this.increment=1;
this.pageIncrement=10;
this.size=100;
if((this.style&256)!=0){
this.createHorizontalScrollBar(this.parent.scrolledHandle(),this.size,Math.floor(this.size*(this.maximum-this.minimum)/this.thumb));
}else{
this.createVerticalScrollBar(this.parent.scrolledHandle(),this.size,Math.floor(this.size*(this.maximum-this.minimum)/this.thumb));
}this.hScroll=$_Q((($_D("$wt.widgets.ScrollBar$1")?0:org.eclipse.swt.widgets.ScrollBar.$ScrollBar$1$()),$_N($wt.widgets.ScrollBar$1,this,null)));
Clazz.addEvent(this.sbHandle,"scroll",this.hScroll);
});
$_M(c$,"createVerticalScrollBar",
function(parent,sbOuterHeight,sbInnerHeight){
this.outerHandle=d$.createElement("DIV");
parent.appendChild(this.outerHandle);
var style=this.outerHandle.style;
style.position="absolute";
style.margin="0";
style.padding="0";
style.borderStyle="none";
style.overflow="hidden";
style.zIndex=1;
var sbWidth=O$.getScrollBarWidth();
style.width=sbWidth+"px";
style.height=sbOuterHeight+"px";
this.sbHandle=d$.createElement("DIV");
this.sbHandle.style.backgroundColor="blue";
this.sbHandle.style.overflow="auto";
this.sbHandle.style.cssText=this.sbHandle.style.cssText+";overflow-x:hidden;overflow-y:scroll;";
if(O$.isIE){
this.sbHandle.style.width=(sbWidth+1)+"px";
this.sbHandle.style.marginLeft="-1px";
}else{
var needFixing=O$.isFirefox;
{
needFixing&=(navigator.userAgent.indexOf("Firefox/2.0")!=-1);
}this.sbHandle.style.width=(sbWidth+(needFixing?0.1:0))+"px";
}this.sbHandle.style.height=sbOuterHeight+"px";
this.sbHandle.style.fontSize=Math.floor(this.increment*(this.maximum-this.minimum)/this.thumb)+"px";
this.outerHandle.appendChild(this.sbHandle);
this.innerHandle=d$.createElement("DIV");
this.innerHandle.style.height=sbInnerHeight+"px";
this.innerHandle.style.fontSize="1px";
this.sbHandle.appendChild(this.innerHandle);
this.innerHandle.appendChild(d$.createTextNode("."));
},"Element,~N,~N");
$_M(c$,"createHorizontalScrollBar",
function(parent,sbOuterWidth,sbInnerWidth){
this.outerHandle=d$.createElement("DIV");
parent.appendChild(this.outerHandle);
var style=this.outerHandle.style;
style.position="absolute";
style.margin="0";
style.padding="0";
style.borderStyle="none";
style.overflow="hidden";
style.zIndex=1;
style.width=sbOuterWidth+"px";
var sbHeight=O$.getScrollBarHeight();
style.height=sbHeight+"px";
this.sbHandle=d$.createElement("DIV");
this.sbHandle.style.backgroundColor="blue";
this.sbHandle.style.overflow="auto";
this.sbHandle.style.cssText=this.sbHandle.style.cssText+";overflow-x:scroll;overflow-y:hidden;";
if(O$.isIE||O$.isOpera){
this.sbHandle.style.height=(sbHeight+1)+"px";
this.sbHandle.style.marginTop="-1px";
}else{
this.sbHandle.style.height=sbHeight+"px";
}this.sbHandle.style.width=sbOuterWidth+"px";
this.outerHandle.appendChild(this.sbHandle);
this.innerHandle=d$.createElement("DIV");
this.innerHandle.style.width=sbInnerWidth+"px";
this.innerHandle.style.fontSize="1px";
if(O$.isOpera){
this.innerHandle.style.lineHeight="1px";
this.innerHandle.style.height="1px";
}this.sbHandle.appendChild(this.innerHandle);
this.innerHandle.appendChild(d$.createTextNode("."));
},"Element,~N,~N");
$_M(c$,"updateSizeBinding",
function(size){
this.size=size;
if((this.style&256)!=0){
this.outerHandle.style.width=(size>0?size:0)+"px";
this.sbHandle.style.width=(size>0?size:0)+"px";
}else{
this.outerHandle.style.height=(size>0?size:0)+"px";
this.sbHandle.style.height=(size>0?size:0)+"px";
}this.updateScrollBar();
},"~N");
$_M(c$,"updateScrollBar",
function(){
var innerSize=Math.round(Math.floor(this.size*(this.maximum-this.minimum)/this.thumb));
if((this.style&512)!=0){
this.innerHandle.style.height=innerSize+"px";
this.sbHandle.style.fontSize=Math.floor(this.increment*(this.maximum-this.minimum)/this.thumb)+"px";
}else{
this.innerHandle.style.width=innerSize+"px";
}if(this.maximum!=this.minimum){
if((this.style&256)!=0){
this.sbHandle.scrollLeft=Math.floor((this.selection-this.minimum)*this.sbHandle.scrollWidth/(this.maximum-this.minimum));
}else{
this.sbHandle.scrollTop=Math.floor((this.selection-this.minimum)*this.sbHandle.scrollHeight/(this.maximum-this.minimum));
}}});
$_M(c$,"dispose",
function(){
if(this.isDisposed())return;
$_U(this,$wt.widgets.ScrollBar,"dispose",[]);
if(this.innerHandle!=null){
O$.destroyHandle(this.innerHandle);
this.innerHandle=null;
}if(this.sbHandle!=null){
O$.destroyHandle(this.sbHandle);
this.sbHandle=null;
}if(this.outerHandle!=null){
O$.destroyHandle(this.outerHandle);
this.outerHandle=null;
}});
$_M(c$,"getBounds",
function(){
this.parent.forceResize();
return new $wt.graphics.Rectangle(0,0,O$.getContainerWidth(this.outerHandle),O$.getContainerHeight(this.outerHandle));
});
$_M(c$,"getEnabled",
function(){
return(this.state&8)==0;
});
$_M(c$,"getIncrement",
function(){
return this.increment;
});
$_M(c$,"getMaximum",
function(){
return this.maximum;
});
$_M(c$,"getMinimum",
function(){
return this.minimum;
});
$_M(c$,"getPageIncrement",
function(){
return this.pageIncrement;
});
$_M(c$,"getParent",
function(){
return this.parent;
});
$_M(c$,"getSelection",
function(){
if(this.maximum!=this.minimum){
if((this.style&256)!=0){
this.selection=this.minimum+Math.floor(this.sbHandle.scrollLeft*(this.maximum-this.minimum)/this.sbHandle.scrollWidth);
}else{
this.selection=this.minimum+Math.floor(this.sbHandle.scrollTop*(this.maximum-this.minimum)/this.sbHandle.scrollHeight);
}}return this.selection;
});
$_M(c$,"getSize",
function(){
this.parent.forceResize();
var width;
var height;
if((this.style&256)!=0){
width=this.size;
height=O$.getScrollBarHeight();
}else{
width=O$.getScrollBarWidth();
height=this.size;
}return new $wt.graphics.Point(width,height);
});
$_M(c$,"getThumb",
function(){
return this.thumb;
});
$_M(c$,"getVisible",
function(){
return(this.state&16)==0;
});
$_M(c$,"hwndScrollBar",
function(){
return this.parent.scrolledHandle();
});
$_M(c$,"isEnabled",
function(){
return this.getEnabled()&&this.parent.isEnabled();
});
$_M(c$,"isVisible",
function(){
return this.getVisible()&&this.parent.isVisible();
});
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.ScrollBar,"releaseChild",[]);
if(this.parent.horizontalBar===this)this.parent.horizontalBar=null;
if(this.parent.verticalBar===this)this.parent.verticalBar=null;
});
$_M(c$,"releaseHandle",
function(){
if(this.sbHandle!=null&&this.hScroll!=null){
Clazz.removeEvent(this.sbHandle,"scroll",this.hScroll);
this.hScroll=null;
}if(this.innerHandle!=null){
O$.destroyHandle(this.innerHandle);
this.innerHandle=null;
}if(this.sbHandle!=null){
O$.destroyHandle(this.sbHandle);
this.sbHandle=null;
}if(this.outerHandle!=null){
O$.destroyHandle(this.outerHandle);
this.outerHandle=null;
}$_U(this,$wt.widgets.ScrollBar,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.ScrollBar,"releaseWidget",[]);
this.parent=null;
});
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"setEnabled",
function(enabled){
},"~B");
$_M(c$,"setIncrement",
function(value){
if(value<1)return;
if(this.increment==value)return;
this.increment=value;
this.updateScrollBar();
},"~N");
$_M(c$,"setMaximum",
function(value){
if(value<0)return;
if(value<this.minimum)return;
if(this.maximum==value)return;
this.maximum=value;
if(this.selection>this.maximum){
this.selection=this.maximum;
}this.updateScrollBar();
},"~N");
$_M(c$,"setMinimum",
function(value){
if(value<0)return;
if(value>this.maximum)return;
if(this.minimum==value)return;
this.minimum=value;
if(this.selection<this.minimum){
this.selection=this.minimum;
}this.updateScrollBar();
},"~N");
$_M(c$,"setPageIncrement",
function(value){
if(value<1)return;
this.pageIncrement=value;
},"~N");
$_M(c$,"setSelection",
function(selection){
if(selection<0)return;
if(this.selection==selection)return;
if(selection<this.minimum){
this.selection=this.minimum;
}else if(selection>this.maximum-this.thumb){
this.selection=this.maximum-this.thumb;
}else{
this.selection=selection;
}this.updateScrollBar();
},"~N");
$_M(c$,"setThumb",
function(value){
if(value<1)return;
if(this.thumb==value)return;
this.thumb=value;
this.updateScrollBar();
},"~N");
$_M(c$,"setValues",
function(selection,minimum,maximum,thumb,increment,pageIncrement){
if(minimum<0)return;
if(maximum<0)return;
if(thumb<1)return;
if(increment<1)return;
if(pageIncrement<1)return;
this.increment=increment;
this.pageIncrement=pageIncrement;
this.minimum=minimum;
this.maximum=maximum;
this.thumb=thumb;
if(this.selection<this.minimum){
this.selection=this.minimum;
}else if(this.selection>this.maximum){
this.selection=this.maximum;
}this.updateScrollBar();
},"~N,~N,~N,~N,~N,~N");
$_M(c$,"setVisible",
function(visible){
var isVisible=(this.state&16)==0;
if(isVisible==visible)return;
if(visible){
this.state=this.state&-17;
}else{
this.state=this.state|16;
}if(this.parent==null||this.parent.handle==null){
return;
}var scrollClass="hscroll-default";
if((this.style&512)!=0){
scrollClass="vscroll-default";
}var className=this.parent.handle.className;
var idx=this.parent.handle.className.indexOf(scrollClass);
if(!visible&&idx!=-1){
className=className.substring(0,idx)+className.substring(idx+scrollClass.length);
}else if(visible&&idx==-1){
className+=" "+scrollClass;
}this.parent.handle.className=className;
},"~B");
c$.$ScrollBar$1$=function(){
$_H();
c$=$_W($wt.widgets,"ScrollBar$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var event=new $wt.widgets.Event();
event.detail=0;
this.b$["$wt.widgets.ScrollBar"].sendEvent(13,event);
});
c$=$_P();
};
});
$_L(["$wt.widgets.Control"],"$wt.widgets.Scrollable",["$wt.graphics.Rectangle","$wt.internal.browser.OS","$wt.widgets.ScrollBar"],function(){
c$=$_C(function(){
this.horizontalBar=null;
this.verticalBar=null;
$_Z(this,arguments);
},$wt.widgets,"Scrollable",$wt.widgets.Control);
$_M(c$,"computeTrim",
function(x,y,width,height){
var border=this.getBorderWidth();
var rect=new $wt.graphics.Rectangle(x-border,y-border,width+border*2,height+border*2);
if(this.horizontalBar!=null)rect.height+=O$.getScrollBarHeight();
if(this.verticalBar!=null)rect.width+=O$.getScrollBarWidth();
return rect;
},"~N,~N,~N,~N");
$_M(c$,"useNativeScrollBar",
function(){
return false;
});
$_M(c$,"createScrollBar",
function(type){
if(this.useNativeScrollBar())return null;
var bar=new $wt.widgets.ScrollBar(this,type);
if((this.state&2)!=0){
bar.setMaximum(100);
bar.setThumb(10);
}return bar;
},"~N");
$_M(c$,"createWidget",
function(){
$_U(this,$wt.widgets.Scrollable,"createWidget",[]);
if((this.style&256)!=0)this.horizontalBar=this.createScrollBar(256);
if((this.style&512)!=0)this.verticalBar=this.createScrollBar(512);
});
$_M(c$,"getClientArea",
function(){
this.forceResize();
var w=-1;
var h=-1;
w=this.width;
h=this.height;
if(this.verticalBar!=null){
w-=O$.getScrollBarWidth();
}if(this.horizontalBar!=null){
h-=O$.getScrollBarHeight();
}if(w<0){
w=64;
}if(h<0){
h=64;
}return new $wt.graphics.Rectangle(0,0,w,h);
});
$_M(c$,"getHorizontalBar",
function(){
return this.horizontalBar;
});
$_M(c$,"getVerticalBar",
function(){
return this.verticalBar;
});
$_M(c$,"releaseWidget",
function(){
if(this.horizontalBar!=null)this.horizontalBar.releaseResources();
if(this.verticalBar!=null)this.verticalBar.releaseResources();
this.horizontalBar=this.verticalBar=null;
$_U(this,$wt.widgets.Scrollable,"releaseWidget",[]);
});
$_M(c$,"scrolledHandle",
function(){
return this.handle;
});
});
$_L(["$wt.widgets.Scrollable"],"$wt.widgets.Composite",["$wt.graphics.Point","$wt.internal.browser.OS","$wt.internal.struct.MESSAGE"],function(){
$WTC$$.registerCSS ("$wt.widgets.Composite", ".composite-default {\nposition:absolute;\nwhite-space:nowrap;\n/*\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\n*/\nfont-size:0;\nmargin:0;\npadding:0;\noverflow:hidden;\nbackground-color:buttonface;\n}\n.composite-border {\nwhite-space:nowrap;\nborder-style:solid;\nborder-width:2px 1px 1px 2px;\nborder-color:#333 #ddd #ddd #333;\n}\n.image-icon, .image-n-1, .image-n-2, .image-n-3, .image-n-4, .image-n-5, .image-n-6, .image-n-7, .image-n-8, .image-n-9 {\nborder:0 none transparent;\npadding:0;\nmargin:0;\nline-height:0;\nbackground-repeat:no-repeat;\n}\n.image-n-1 {\nbackground-position:left top;\n}\n.image-n-2 {\nbackground-position:center top;\n}\n.image-n-3 {\nbackground-position:right top;\n}\n.image-n-4 {\nbackground-position:left center;\n}\n.image-n-5 {\nbackground-position:center center;\n}\n.image-n-6 {\nbackground-position:right center;\n}\n.image-n-7 {\nbackground-position:left bottom;\n}\n.image-n-8 {\nbackground-position:center bottom;\n}\n.image-n-9 {\nbackground-position:right bottom;\n}\n.image-p-1, .image-p-2, .image-p-3, .image-p-4, .image-p-5, .image-p-6, .image-p-7, .image-p-8, .image-p-9 {\nposition:absolute;\n}\n.image-p-1, .image-p-2, .image-p-3 {\ntop:0;\n}\n.image-p-4, .image-p-5, .image-p-6 {\n/*top:50%;\nmargin-top:-0.5em;\n*/\nbottom:50%;\nmargin-bottom:-0.5em;\n}\n.image-p-7, .image-p-8, .image-p-9 {\nbottom:0;\n}\n.image-p-1, .image-p-4, .image-p-7 {\nleft:0;\n}\n.image-p-2, .image-p-5, .image-p-8 {\nleft:50%;\nmargin-left:-0.5em;\n}\n.image-p-3, .image-p-6, .image-p-9 {\nright:0;\n}\n/* default icon size 16x16 */\n.image-icon, .image-n-1, .image-n-2, .image-n-3, .image-n-4, .image-n-5, .image-n-6, .image-n-7, .image-n-8, .image-n-9 {\nwidth:16px;\nheight:16px;\nfont-size:16px;\n_font-size:14px;\noverflow:hidden;\n}\n.swt-widgets-composite {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.$layout=null;
this.lpwp=null;
this.tabList=null;
this.layoutCount=0;
this.children=null;
this.waitingForLayoutWithResize=false;
$_Z(this,arguments);
},$wt.widgets,"Composite",$wt.widgets.Scrollable);
$_M(c$,"_getChildren",
function(){
var count=this.children!=null?this.children.length:0;
var index=0;
var newChildren=new Array(0);
for(var i=0;i<count;i++){
var control=this.children[i];
if(control!=null&&control!==this&&!($_O(control,$wt.widgets.Shell))){
newChildren[index++]=control;
}}
return newChildren;
});
$_M(c$,"_getTabList",
function(){
if(this.tabList==null)return this.tabList;
var count=0;
var length=this.tabList.length;
for(var i=0;i<length;i++){
if(!this.tabList[i].isDisposed())count++;
}
if(count==length)return this.tabList;
var newList=new Array(count);
var index=0;
for(var i=0;i<length;i++){
if(!this.tabList[i].isDisposed()){
newList[index++]=this.tabList[i];
}}
this.tabList=newList;
return this.tabList;
});
$_M(c$,"changed",
function(changed){
var length=changed.length;
for(var i=0;i<length;i++){
var control=changed[i];
var ancestor=false;
var composite=control.parent;
while(composite!=null){
ancestor=composite===this;
if(ancestor)break;
composite=composite.parent;
}
}
for(var i=0;i<length;i++){
var child=changed[i];
var composite=child.parent;
while(child!==this){
if(composite.$layout==null||!composite.$layout.flushCache(child)){
composite.state|=64;
}child=composite;
composite=child.parent;
}
}
},"~A");
$_V(c$,"checkBuffered",
function(){
});
$_M(c$,"computeTabList",
function(){
var result=$_U(this,$wt.widgets.Composite,"computeTabList",[]);
if(result.length==0)return result;
var list=this.tabList!=null?this._getTabList():this._getChildren();
for(var i=0;i<list.length;i++){
var child=list[i];
var childList=child.computeTabList();
if(childList.length!=0){
var newResult=new Array(result.length+childList.length);
System.arraycopy(result,0,newResult,0,result.length);
System.arraycopy(childList,0,newResult,result.length,childList.length);
result=newResult;
}}
return result;
});
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var size;
if(this.$layout!=null){
if(wHint==-1||hHint==-1){
changed=new Boolean(changed|((this.state&64)!=0)).valueOf();
this.state&=-65;
size=this.$layout.computeSize(this,wHint,hHint,changed);
}else{
size=new $wt.graphics.Point(wHint,hHint);
}}else{
size=this.minimumSize(wHint,hHint,changed);
}if(size.x==0)size.x=64;
if(size.y==0)size.y=64;
if(wHint!=-1)size.x=wHint;
if(hHint!=-1)size.y=hHint;
var trim=this.computeTrim(0,0,size.x,size.y);
return new $wt.graphics.Point(trim.width,trim.height);
},"~N,~N,~B");
$_M(c$,"containerHandle",
function(){
return this.handle;
});
$_V(c$,"createHandle",
function(){
this.children=new Array(0);
this.handle=d$.createElement("DIV");
this.handle.className="composite-default";
if((this.style&2048)!=0){
this.handle.className+=" composite-border";
}if(this.parent!=null){
var parentHandle=this.parent.containerHandle();
if(parentHandle!=null){
parentHandle.appendChild(this.handle);
}}this.state|=2;
});
$_M(c$,"findMenus",
function(control){
if(control===this)return new Array(0);
var result=$_U(this,$wt.widgets.Composite,"findMenus",[control]);
var children=this._getChildren();
for(var i=0;i<children.length;i++){
var child=children[i];
var menuList=child.findMenus(control);
if(menuList.length!=0){
var newResult=new Array(result.length+menuList.length);
System.arraycopy(result,0,newResult,0,result.length);
System.arraycopy(menuList,0,newResult,result.length,menuList.length);
result=newResult;
}}
return result;
},"$wt.widgets.Control");
$_M(c$,"fixChildren",
function(newShell,oldShell,newDecorations,oldDecorations,menus){
$_U(this,$wt.widgets.Composite,"fixChildren",[newShell,oldShell,newDecorations,oldDecorations,menus]);
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
children[i].fixChildren(newShell,oldShell,newDecorations,oldDecorations,menus);
}
},"$wt.widgets.Shell,$wt.widgets.Shell,$wt.widgets.Decorations,$wt.widgets.Decorations,~A");
$_M(c$,"fixChildrenList",
function(control){
var length=this.children.length;
if(this.children==null||length==0)return;
var newChildren=new Array(0);
for(var i=0;i<length;i++){
var child=this.children[i];
if(child!=null&&child!==control){
newChildren[newChildren.length]=child;
}}
this.children=newChildren;
},"$wt.widgets.Control");
$_M(c$,"fixTabList",
function(control){
if(this.tabList==null)return;
var count=0;
for(var i=0;i<this.tabList.length;i++){
if(this.tabList[i]===control)count++;
}
if(count==0)return;
var newList=null;
var length=this.tabList.length-count;
if(length!=0){
newList=new Array(length);
var index=0;
for(var i=0;i<this.tabList.length;i++){
if(this.tabList[i]!==control){
newList[index++]=this.tabList[i];
}}
}this.tabList=newList;
},"$wt.widgets.Control");
$_V(c$,"getBorderWidth",
function(){
if((this.style&2048)!=0){
return 2;
}return 0;
});
$_M(c$,"getChildren",
function(){
return this._getChildren();
});
$_M(c$,"getChildrenCount",
function(){
if(true)return 0;
return this._getChildren().length;
});
$_M(c$,"getLayout",
function(){
return this.$layout;
});
$_M(c$,"getTabList",
function(){
var tabList=this._getTabList();
if(tabList==null){
var count=0;
var list=this._getChildren();
var length=list.length;
for(var i=0;i<length;i++){
if(list[i].isTabGroup())count++;
}
tabList=new Array(count);
var index=0;
for(var i=0;i<length;i++){
if(list[i].isTabGroup()){
tabList[index++]=list[i];
}}
}return tabList;
});
$_M(c$,"hooksKeys",
function(){
return this.hooks(1)||this.hooks(2);
});
$_M(c$,"getLayoutDeferred",
function(){
return this.layoutCount>0;
});
$_M(c$,"isLayoutDeferred",
function(){
return this.layoutCount>0||this.parent.isLayoutDeferred();
});
$_M(c$,"layout",
function(){
this.layout(true);
});
$_M(c$,"layout",
function(changed){
if(this.$layout==null)return;
this.layout(changed,true);
},"~B");
$_M(c$,"layout",
function(changed,all){
if(this.$layout==null&&!all)return;
this.markLayout(changed,all);
this.updateLayout(true,all);
},"~B,~B");
$_M(c$,"layout",
function(changed){
var length=changed.length;
for(var i=0;i<length;i++){
var control=changed[i];
var ancestor=false;
var composite=control.parent;
while(composite!=null){
ancestor=composite===this;
if(ancestor)break;
composite=composite.parent;
}
}
var updateCount=0;
var update=new Array(16);
for(var i=0;i<length;i++){
var child=changed[i];
var composite=child.parent;
while(child!==this){
if(composite.$layout!=null){
composite.state|=32;
if(!composite.$layout.flushCache(child)){
composite.state|=64;
}}if(updateCount==update.length){
var newUpdate=new Array(update.length+16);
System.arraycopy(update,0,newUpdate,0,update.length);
update=newUpdate;
}child=update[updateCount++]=composite;
composite=child.parent;
}
}
for(var i=updateCount-1;i>=0;i--){
update[i].updateLayout(true,false);
}
},"~A");
$_M(c$,"markLayout",
function(changed,all){
if(this.$layout!=null){
this.state|=32;
if(changed)this.state|=64;
}if(all){
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
children[i].markLayout(changed,all);
}
}},"~B,~B");
$_M(c$,"minimumSize",
function(wHint,hHint,changed){
var children=this._getChildren();
var width=0;
var height=0;
var length=children.length;
for(var i=0;i<length;i++){
var rect=children[i].getBounds();
width=Math.max(width,rect.x+rect.width);
height=Math.max(height,rect.y+rect.height);
}
return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_M(c$,"releaseChildren",
function(){
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
var child=children[i];
if(!child.isDisposed())child.releaseResources();
}
});
$_M(c$,"releaseWidget",
function(){
this.releaseChildren();
$_U(this,$wt.widgets.Composite,"releaseWidget",[]);
if((this.state&2)!=0&&(this.style&16777216)!=0){
}this.children=null;
this.$layout=null;
this.tabList=null;
if(this.lpwp!=null){
var length=this.lpwp.length;
for(var i=0;i<length;i++){
this.lpwp[i].hwnd=null;
this.lpwp[i].hwndInsertAfter=null;
}
}this.lpwp=null;
});
$_M(c$,"removeControl",
function(control){
this.fixTabList(control);
this.fixChildrenList(control);
this.resizeChildren();
},"$wt.widgets.Control");
$_M(c$,"resizeChildren",
function(){
if(this.lpwp==null)return;
do{
var currentLpwp=this.lpwp;
this.lpwp=null;
if(!this.resizeChildren(true,currentLpwp)){
this.resizeChildren(false,currentLpwp);
}}while(this.lpwp!=null);
});
$_M(c$,"resizeChildren",
function(defer,pwp){
if(pwp==null)return true;
var hdwp=0;
if(defer){
if(hdwp==0)return false;
}var length=pwp.length;
for(var i=0;i<length;i++){
var wp=pwp[i];
if(wp!=null){
if(defer){
if(hdwp==0)return false;
}else{
this.SetWindowPos(wp.hwnd,null,wp.x,wp.y,wp.cx,wp.cy,wp.flags);
}}}
return true;
},"~B,~A");
$_M(c$,"setFixedFocus",
function(){
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
var child=children[i];
if(child.setRadioFocus())return true;
}
for(var i=0;i<length;i++){
var child=children[i];
if(child.setFixedFocus())return true;
}
return $_U(this,$wt.widgets.Composite,"setFixedFocus",[]);
});
$_M(c$,"setFocus",
function(){
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
var child=children[i];
if(child.setRadioFocus())return true;
}
for(var i=0;i<length;i++){
var child=children[i];
if(child.setFocus())return true;
}
return $_U(this,$wt.widgets.Composite,"setFocus",[]);
});
$_M(c$,"setLayout",
function(layout){
this.$layout=layout;
},"$wt.widgets.Layout");
$_M(c$,"setLayoutDeferred",
function(defer){
if(!defer){
if(--this.layoutCount==0){
if(!this.isLayoutDeferred())this.updateLayout(true,true);
}}else{
this.layoutCount++;
}},"~B");
$_M(c$,"setTabList",
function(tabList){
if(tabList!=null){
var length=tabList.length;
for(var i=0;i<length;i++){
var control=tabList[i];
}
var newList=new Array(length);
System.arraycopy(tabList,0,newList,0,length);
tabList=newList;
}this.tabList=tabList;
var length=tabList.length;
for(var i=0;i<length;i++){
tabList[i].handle.tabIndex=i+1;
}
},"~A");
$_M(c$,"setResizeChildren",
function(resize){
if(resize){
this.resizeChildren();
}else{
var count=this.getChildrenCount();
if(count>1&&this.lpwp==null){
this.lpwp=new Array(count);
}}},"~B");
$_V(c$,"setTabGroupFocus",
function(){
if(this.isTabItem())return this.setTabItemFocus();
var takeFocus=(this.style&524288)==0;
if((this.state&2)!=0){
takeFocus=this.hooksKeys();
if((this.style&16777216)!=0)takeFocus=true;
}if(takeFocus&&this.setTabItemFocus())return true;
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
var child=children[i];
if(child.isTabItem()&&child.setRadioFocus())return true;
}
for(var i=0;i<length;i++){
var child=children[i];
if(child.isTabItem()&&child.setTabItemFocus())return true;
}
return false;
});
$_V(c$,"SetWindowPos",
function(hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags){
if((this.style&2048)!=0){
cx-=4;
cy-=4;
}var el=hWnd;
el.style.left=X+"px";
el.style.top=Y+"px";
el.style.width=(cx>0?cx:0)+"px";
el.style.height=(cy>0?cy:0)+"px";
this.updateScrollBar(cx,cy);
return true;
},"~O,~O,~N,~N,~N,~N,~N");
$_M(c$,"updateScrollBar",
function(cx,cy){
var sbw=cx;
var sbh=cy;
if(this.verticalBar!=null){
sbw-=O$.getScrollBarWidth();
}if(this.horizontalBar!=null){
sbh-=O$.getScrollBarHeight();
}if(this.verticalBar!=null){
this.verticalBar.outerHandle.style.left=((sbw>0?sbw:0))+"px";
this.verticalBar.updateSizeBinding(sbh);
}if(this.horizontalBar!=null){
this.horizontalBar.outerHandle.style.top=((sbh>0?sbh:0))+"px";
this.horizontalBar.updateSizeBinding(sbw);
}},"~N,~N");
$_V(c$,"updateLayout",
function(resize,all){
if(this.isLayoutDeferred())return;
if((this.state&32)!=0&&!this.waitingForLayout){
this.waitingForLayout=true;
this.waitingForLayoutWithResize=resize;
this.display.sendMessage(new $wt.internal.struct.MESSAGE(this,2,[resize,all]));
}if(all){
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
if($_O(children[i],$wt.widgets.Composite)){
this.display.sendMessage(new $wt.internal.struct.MESSAGE(children[i],2,[resize,all]));
}}
}},"~B,~B");
});
$_L(["$wt.widgets.Composite"],"$wt.widgets.Canvas",null,function(){
c$=$_C(function(){
this.caret=null;
$_Z(this,arguments);
},$wt.widgets,"Canvas",$wt.widgets.Composite);
$_M(c$,"clearArea",
function(x,y,width,height){
},"~N,~N,~N,~N");
$_M(c$,"getCaret",
function(){
return this.caret;
});
$_M(c$,"releaseWidget",
function(){
if(this.caret!=null)this.caret.releaseResources();
this.caret=null;
$_U(this,$wt.widgets.Canvas,"releaseWidget",[]);
});
$_M(c$,"scroll",
function(destX,destY,x,y,width,height,all){
this.forceResize();
},"~N,~N,~N,~N,~N,~N,~B");
$_M(c$,"setCaret",
function(caret){
var newCaret=caret;
this.caret=newCaret;
},"$wt.widgets.Caret");
$_M(c$,"setFont",
function(font){
if(this.caret!=null)this.caret.setFont(font);
$_U(this,$wt.widgets.Canvas,"setFont",[font]);
},"$wt.graphics.Font");
});
$_L(["$wt.widgets.Canvas","$wt.internal.browser.OS"],"$wt.widgets.Decorations",["$wt.graphics.Point","$.Rectangle","$wt.internal.ResizeSystem","$.RunnableCompatibility","$wt.internal.dnd.DragAndDrop","$.HTMLEventWrapper","$.ShellFrameDND","$wt.widgets.Dialog","$.Display","$.Event"],function(){
c$=$_C(function(){
this.image=null;
this.smallImage=null;
this.largeImage=null;
this.images=null;
this.menuBar=null;
this.menus=null;
this.savedFocus=null;
this.defaultButton=null;
this.saveDefault=null;
this.moved=false;
this.resized=false;
this.opened=false;
this.maximized=false;
this.minimized=false;
this.contentHandle=null;
this.shellTitle=null;
this.shellIcon=null;
this.modalHandle=null;
this.oldBounds=null;
this.lastClientAreaCSSText=null;
this.lastBodyCSSText=null;
this.lastBodyScrollLeft=0;
this.lastBodyScrollTop=0;
this.shellMin=null;
this.shellMax=null;
this.shellClose=null;
this.titleBar=null;
this.shellMenuBar=null;
this.shellToolBar=null;
this.shellFrameDND=null;
this.hContentKeyDown=null;
this.hIconClick=null;
this.hMinClick=null;
this.hMaxClick=null;
this.hCloseClick=null;
this.hTitleBarClick=null;
this.hNoTextSelection=null;
this.dnd=null;
$_Z(this,arguments);
},$wt.widgets,"Decorations",$wt.widgets.Canvas);
$_M(c$,"addMenu",
function(menu){
if(this.menus==null)this.menus=new Array(4);
for(var i=0;i<this.menus.length;i++){
if(this.menus[i]==null){
this.menus[i]=menu;
return;
}}
var newMenus=new Array(this.menus.length+4);
newMenus[this.menus.length]=menu;
System.arraycopy(this.menus,0,newMenus,0,this.menus.length);
this.menus=newMenus;
},"$wt.widgets.Menu");
$_M(c$,"bringToTop",
function(){
this.bringToTop(true,true);
});
$_M(c$,"bringToTop",
function(parentShell,childShells){
($t$=$wt.widgets.Display.topMaxShell=null,$wt.widgets.Display.prototype.topMaxShell=$wt.widgets.Display.topMaxShell,$t$);
($t$=$wt.widgets.Display.topMaxShellNeedUpdated=true,$wt.widgets.Display.prototype.topMaxShellNeedUpdated=$wt.widgets.Display.topMaxShellNeedUpdated,$t$);
if(parentShell&&childShells){
$wt.widgets.Display.deactivateAllTitleBarShells();
}if(parentShell&&this.parent!=null&&$_O(this.parent,$wt.widgets.Decorations)){
(this.parent).bringToTop(true,false);
}if(this.titleBar!=null){
this.titleBar.style.backgroundColor="activecaption";
this.shellTitle.style.color="captiontext";
}var style=this.handle.style;
if(style.zIndex!=w$.currentTopZIndex){
style.zIndex=w$.currentTopZIndex=w$.currentTopZIndex+2;
}if((style.width==null||style.width.length==0)&&(style.height==null||style.height.length==0)){
this.setSize(this.width,this.height);
}this.setLocation(this.left,this.top);
if((this.style&4)==0){
var title=this.getText();
if(title!=null){

if(window["document.title"]==null){
window["document.title"]=document.title;
}
if(window["document.title.setter"]==null){
document.title=title;
}else{

window["document.title.setter"](title);
}
}
}var count=this.children.length;
for(var i=0;i<count;i++){
var control=this.children[i];
if(control!=null&&control!==this&&control.handle!=null&&($_O(control,$wt.widgets.Shell))){
style=control.handle.style;
if(style!=null&&style.zIndex!=w$.currentTopZIndex){
style.zIndex=w$.currentTopZIndex=w$.currentTopZIndex+2;
}}}
if(childShells&&$_O(this,$wt.widgets.Shell)){
var sh=this;
var children=sh.getShells();
for(var i=0;i<children.length;i++){
var s=children[i];
if((s.style&(229376))!=0&&s.isVisible()&&!s.isDisposed()){
s.bringToTop(false,true);
}}
$wt.widgets.Dialog.checkExistedDialogs(this);
}if(this.modalHandle!=null){
this.modalHandle.style.zIndex=this.handle.style.zIndex-1;
}},"~B,~B");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
if((style&8)!=0){
style&=-3313;
}if((style&(1216))!=0){
style|=32;
}if((style&(1152))!=0)style|=64;
if((style&64)!=0)style|=32;
return style;
},"~N");
$_V(c$,"checkBorder",
function(){
});
$_V(c$,"checkOpened",
function(){
if(!this.opened)this.resized=false;
});
$_M(c$,"closeWidget",
function(){
var event=new $wt.widgets.Event();
event.doit=true;
this.sendEvent(21,event);
if(event.doit&&!this.isDisposed())this.dispose();
});
$_V(c$,"computeTabGroup",
function(){
return this;
});
$_V(c$,"computeTabRoot",
function(){
return this;
});
$_V(c$,"containerHandle",
function(){
return this.contentHandle;
});
$_V(c$,"computeTrim",
function(x,y,width,height){
if((this.style&8)==0){
if((this.style&(1248))!=0){
height+=Math.max(O$.getContainerHeight(this.titleBar),19);
if(width<105){
width=105;
}}if((this.style&(3296))!=0){
width+=8;
height+=5;
x-=4;
y-=3;
if(O$.isIE50||O$.isIE55||O$.isIE60){
y-=2;
}}else{
width+=6;
height+=6;
x-=3;
y-=3;
}if((this.style&2048)!=0){
width+=4;
height+=2;
x+=1;
}}return new $wt.graphics.Rectangle(x,y,width,height);
},"~N,~N,~N,~N");
$_M(c$,"createAccelerators",
function(){
});
$_M(c$,"createIcon",
function(image){
return null;
},"$wt.graphics.Image");
c$.createCSSDiv=$_M(c$,"createCSSDiv",
($fz=function(handle,css){
var el=d$.createElement("DIV");
el.className=css;
handle.appendChild(el);
return el;
},$fz.isPrivate=true,$fz),"Element,~S");
c$.createResizeHandles=$_M(c$,"createResizeHandles",
function(handle){
var handles=["shell-left-top","shell-right-top","shell-center-top","shell-left-middle","shell-right-middle","shell-center-middle","shell-left-bottom","shell-right-bottom","shell-center-bottom"];
for(var i=0;i<handles.length;i++){
$wt.widgets.Decorations.createCSSDiv(handle,handles[i]);
}
},"Element");
c$.appendShadowHandles=$_M(c$,"appendShadowHandles",
function(handle,top,right,bottom,left){
var handles=[left&&top?"shadow-left-top":null,right&&top?"shadow-right-top":null,top?"shadow-center-top":null,left?"shadow-left-middle":null,right?"shadow-right-middle":null,"shadow-center-middle",left&&bottom?"shadow-left-bottom":null,right&&bottom?"shadow-right-bottom":null,bottom?"shadow-center-bottom":null];
for(var i=0;i<handles.length;i++){
if(handles[i]!=null){
$wt.widgets.Decorations.createCSSDiv(handle,handles[i]);
}}
if(O$.isChrome10){
handle.style.opacity="1";
}if(O$.isIE){
handle.style.filter="";
}},"Element,~B,~B,~B,~B");
c$.createShadowHandles=$_M(c$,"createShadowHandles",
function(handle){
$wt.widgets.Decorations.appendShadowHandles(handle,true,true,true,true);
},"Element");
c$.createNarrowShadowHandles=$_M(c$,"createNarrowShadowHandles",
function(handle){
var handles=["shadow-narrow-left-top","shadow-narrow-right-top","shadow-narrow-center-top","shadow-narrow-left-middle","shadow-narrow-right-middle","shadow-narrow-center-middle","shadow-narrow-left-bottom","shadow-narrow-right-bottom","shadow-narrow-center-bottom"];
for(var i=0;i<handles.length;i++){
$wt.widgets.Decorations.createCSSDiv(handle,handles[i]);
}
if(O$.isChrome10){
handle.style.opacity="1";
}if(O$.isIE){
handle.style.filter="";
}},"Element");
$_V(c$,"createHandle",
function(){
if((this.style&65536)!=0||(this.style&32768)!=0){
this.display.timerExec(10,(($_D("$wt.widgets.Decorations$1")?0:org.eclipse.swt.widgets.Decorations.$Decorations$1$()),$_N($wt.widgets.Decorations$1,this,null)));
}this.handle=d$.createElement("DIV");
this.handle.className="shell-default shell-trim";
this.handle.style.lineHeight="16px";
this.handle.style.visibility="hidden";
if(w$.defaultWindowWidth==null){
w$.defaultWindowWidth="768";
}if(w$.defaultWindowHeight==null){
w$.defaultWindowHeight="558";
}this.width=Integer.parseInt(w$.defaultWindowWidth);
this.height=Integer.parseInt(w$.defaultWindowHeight);
this.width=768;
this.height=558;
this.getMonitor().handle.appendChild(this.handle);
if((this.style&8)==0&&(this.style&16)!=0){
$wt.widgets.Decorations.createResizeHandles(this.handle);
}var supportShadow=false;
{
supportShadow=window["swt.disable.shadow"]!=true;
}if(supportShadow){
$wt.widgets.Decorations.createShadowHandles(this.handle);
}if((this.style&8)==0&&(this.style&(1248))!=0){
this.setSystemMenu();
}var contentCSS="shell-content";
if((this.style&4)!=0){
contentCSS+=" shell-tool";
}this.contentHandle=$wt.widgets.Decorations.createCSSDiv(this.handle,contentCSS);
if($wt.internal.dnd.DragAndDrop!=null){
this.dnd=new $wt.internal.dnd.DragAndDrop();
this.shellFrameDND=(($_D("$wt.widgets.Decorations$2")?0:org.eclipse.swt.widgets.Decorations.$Decorations$2$()),$_N($wt.widgets.Decorations$2,this,null));
this.dnd.addDragListener(this.shellFrameDND);
this.dnd.bind(this.handle);
}this.hContentKeyDown=$_Q((($_D("$wt.widgets.Decorations$3")?0:org.eclipse.swt.widgets.Decorations.$Decorations$3$()),$_N($wt.widgets.Decorations$3,this,null)));
Clazz.addEvent(this.contentHandle,"keydown",this.hContentKeyDown);
});
$_M(c$,"nextWindowLocation",
function(wHint,hHint){
if(this.locationSet){
return;
}var delta=O$.getStringPlainHeight("A")+4+6+1;
if(w$.defaultWindowLeft==null){
w$.defaultWindowLeft="160";
}else{
var num=Integer.parseInt(""+w$.defaultWindowLeft);
num+=delta;
if(num+wHint>this.getMonitor().clientWidth){
num=delta;
}w$.defaultWindowLeft=""+num;
}if(w$.defaultWindowTop==null){
w$.defaultWindowTop="48";
}else{
var num=Integer.parseInt(""+w$.defaultWindowTop);
num+=delta;
if(num+hHint>this.getMonitor().clientHeight){
num=delta;
}w$.defaultWindowTop=""+num;
}this.left=Integer.parseInt(w$.defaultWindowLeft);
this.top=Integer.parseInt(w$.defaultWindowTop);
this.left+=O$.getFixedBodyOffsetLeft();
this.top+=O$.getFixedBodyOffsetTop();
},"~N,~N");
$_M(c$,"addModalLayer",
function(){
this.modalHandle=d$.createElement("DIV");
this.modalHandle.className="shell-modal-block";
this.modalHandle.style.zIndex=this.handle.style.zIndex-1;
this.getMonitor().handle.insertBefore(this.modalHandle,this.handle);
});
$_M(c$,"exportHTMLSource",
function(onlyContent){
ClazzLoader.loadClass("org.eclipse.swt.widgets.HTMLSource",(function(o){return function(){
new $wt.widgets.HTMLSource().exportSource(o,onlyContent);
};})(this));
},"~B");
$_M(c$,"openAboutJava2Script",
function(){
ClazzLoader.loadClass("org.eclipse.swt.widgets.About",(function(o){return function(){
$wt.widgets.About.openAbout(o);
};})(this));
});
$_M(c$,"destroyAccelerators",
function(){
});
$_M(c$,"dispose",
function(){
if(this.isDisposed())return;
if(!($_O(this,$wt.widgets.Shell))){
this.setVisible(false);
if(!this.traverseDecorations(false)){
var shell=this.getShell();
shell.setFocus();
}}if(this.shellFrameDND!=null){
this.shellFrameDND.dispose();
this.shellFrameDND=null;
}if((this.style&4)==0){
if(window["document.title"]!=null){
document.title=window["document.title"];
}
}if((this.getStyle()&4)==0&&this.display.taskBar!=null){
this.display.taskBar.removeShellItem(this);
}$_U(this,$wt.widgets.Decorations,"dispose",[]);
});
$_M(c$,"findMenu",
function(hMenu){
if(this.menus==null)return null;
for(var i=0;i<this.menus.length;i++){
var menu=this.menus[i];
if(menu!=null&&hMenu===menu.handle)return menu;
}
return null;
},"Element");
$_M(c$,"fixDecorations",
function(newDecorations,control,menus){
if(this===newDecorations)return;
if(control===this.savedFocus)this.savedFocus=null;
if(control===this.defaultButton)this.defaultButton=null;
if(control===this.saveDefault)this.saveDefault=null;
if(menus==null)return;
var menu=control.menu;
if(menu!=null){
var index=0;
while(index<menus.length){
if(menus[index]===menu){
control.setMenu(null);
return;
}index++;
}
menu.fixMenus(newDecorations);
this.destroyAccelerators();
newDecorations.destroyAccelerators();
}},"$wt.widgets.Decorations,$wt.widgets.Control,~A");
$_M(c$,"getBounds",
function(){
return $_U(this,$wt.widgets.Decorations,"getBounds",[]);
});
$_M(c$,"minable",
($fz=function(){
return(this.style&128)!=0&&((this.style&2048)==0||(this.style&16)!=0);
},$fz.isPrivate=true,$fz));
$_V(c$,"getBorderWidth",
function(){
return(this.style&8)!=0?1:0;
});
$_V(c$,"getClientArea",
function(){
var w=this.width;
var h=this.height;
if((this.style&(1248))!=0){
h-=Math.max(O$.getContainerHeight(this.titleBar),19)+2;
w-=8;
h-=5;
if((this.style&2048)!=0){
w-=4;
h-=4;
}if(O$.existedCSSClass(this.handle,"shell-menu-bar")){
h-=1+O$.getContainerHeight(this.shellMenuBar);
}}else if((this.style&4)!=0){
h-=2;
w-=2;
}else{
h-=6;
w-=6;
}return new $wt.graphics.Rectangle(0,0,w,h);
});
$_M(c$,"getDefaultButton",
function(){
return this.defaultButton;
});
$_M(c$,"getImage",
function(){
return this.image;
});
$_M(c$,"getImages",
function(){
if(this.images==null)return new Array(0);
var result=new Array(this.images.length);
System.arraycopy(this.images,0,result,0,this.images.length);
return result;
});
$_V(c$,"getLocation",
function(){
return new $wt.graphics.Point(this.left,this.top);
});
$_M(c$,"getMaximized",
function(){
return this.oldBounds!=null;
});
$_M(c$,"getMenuBar",
function(){
return this.menuBar;
});
$_M(c$,"getMinimized",
function(){
if(this.parent==null){
return this.handle.style.display==="none";
}return this.minimized;
});
$_V(c$,"getNameText",
function(){
return this.getText();
});
$_M(c$,"getSize",
function(){
return $_U(this,$wt.widgets.Decorations,"getSize",[]);
});
$_M(c$,"getText",
function(){
if(this.shellTitle==null){
return"";
}var children=this.shellTitle.childNodes;
if(children.length<=0){
return"";
}var text=children[0].nodeValue;
return text==null?"":text;
});
$_V(c$,"isReparentable",
function(){
return false;
});
$_V(c$,"isTabGroup",
function(){
return true;
});
$_V(c$,"isTabItem",
function(){
return false;
});
$_V(c$,"menuShell",
function(){
return this;
});
$_M(c$,"releaseHandle",
function(){
if(this.dnd!=null){
this.dnd.unbind();
this.dnd=null;
}if(this.shellMin!=null){
if(this.hMinClick!=null){
Clazz.removeEvent(this.shellMin,"click",this.hMinClick);
this.hMinClick=null;
}O$.destroyHandle(this.shellMin);
this.shellMin=null;
}if(this.shellMax!=null){
if(this.hMaxClick!=null){
Clazz.removeEvent(this.shellMax,"click",this.hMaxClick);
}O$.destroyHandle(this.shellMax);
this.shellMax=null;
}if(this.shellClose!=null){
if(this.hCloseClick!=null){
Clazz.removeEvent(this.shellClose,"click",this.hCloseClick);
this.hCloseClick=null;
}O$.destroyHandle(this.shellClose);
this.shellClose=null;
}if(this.shellIcon!=null){
if(this.hIconClick!=null){
Clazz.removeEvent(this.shellIcon,"click",this.hIconClick);
this.hIconClick=null;
}O$.destroyHandle(this.shellIcon);
this.shellIcon=null;
}if(this.shellTitle!=null){
O$.destroyHandle(this.shellTitle);
this.shellTitle=null;
}if(this.titleBar!=null){
if((this.style&1024)!=0&&this.hMaxClick!=null){
Clazz.removeEvent(this.titleBar,"click",this.hMaxClick);
}if(this.hTitleBarClick!=null){
Clazz.removeEvent(this.titleBar,"click",this.hTitleBarClick);
this.hTitleBarClick=null;
}if(this.hNoTextSelection!=null){
Clazz.removeEvent(this.titleBar,"selectstart",this.hNoTextSelection);
this.hNoTextSelection=null;
}O$.destroyHandle(this.titleBar);
this.titleBar=null;
}if(this.shellMenuBar!=null){
O$.destroyHandle(this.shellMenuBar);
this.shellMenuBar=null;
}if(this.shellToolBar!=null){
O$.destroyHandle(this.shellToolBar);
this.shellToolBar=null;
}if(this.contentHandle!=null){
if(this.hContentKeyDown!=null){
Clazz.removeEvent(this.contentHandle,"keydown",this.hContentKeyDown);
this.hContentKeyDown=null;
}O$.destroyHandle(this.contentHandle);
this.contentHandle=null;
}if(this.modalHandle!=null){
O$.destroyHandle(this.modalHandle);
this.modalHandle=null;
}this.hMaxClick=null;
$_U(this,$wt.widgets.Decorations,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
if(this.menuBar!=null)this.menuBar.releaseResources();
this.menuBar=null;
if(this.menus!=null){
do{
var index=0;
while(index<this.menus.length){
var menu=this.menus[index];
if(menu!=null&&!menu.isDisposed()){
while(menu.getParentMenu()!=null){
menu=menu.getParentMenu();
}
menu.dispose();
break;
}index++;
}
if(index==this.menus.length)break;
}while(true);
}this.menus=null;
$_U(this,$wt.widgets.Decorations,"releaseWidget",[]);
if(this.smallImage!=null)this.smallImage.dispose();
if(this.largeImage!=null)this.largeImage.dispose();
this.smallImage=this.largeImage=this.image=null;
this.images=null;
this.savedFocus=null;
this.defaultButton=this.saveDefault=null;
});
$_M(c$,"removeMenu",
function(menu){
if(this.menus==null)return;
for(var i=0;i<this.menus.length;i++){
if(this.menus[i]===menu){
this.menus[i]=null;
return;
}}
},"$wt.widgets.Menu");
$_M(c$,"restoreFocus",
function(){
if(this.display.ignoreRestoreFocus)return true;
if(this.savedFocus!=null&&this.savedFocus.isDisposed())this.savedFocus=null;
if(this.savedFocus!=null&&this.savedFocus.setSavedFocus())return true;
return false;
});
$_M(c$,"saveFocus",
function(){
});
$_V(c$,"setBackground",
function(color){
if(color!=null)this.contentHandle.style.backgroundColor=color.getCSSHandle();
},"$wt.graphics.Color");
$_M(c$,"setDefaultButton",
function(button){
this.setDefaultButton(button,true);
},"$wt.widgets.Button");
$_M(c$,"setDefaultButton",
function(button,save){
if(button==null){
if(this.defaultButton===this.saveDefault){
if(save)this.saveDefault=null;
return;
}}else{
if((button.style&8)==0)return;
if(button===this.defaultButton)return;
}if(this.defaultButton!=null){
if(!this.defaultButton.isDisposed())this.defaultButton.setDefault(false);
}if((this.defaultButton=button)==null)this.defaultButton=this.saveDefault;
if(this.defaultButton!=null){
if(!this.defaultButton.isDisposed())this.defaultButton.setDefault(true);
}if(save)this.saveDefault=this.defaultButton;
if(this.saveDefault!=null&&this.saveDefault.isDisposed())this.saveDefault=null;
},"$wt.widgets.Button,~B");
$_V(c$,"setForeground",
function(color){
if(color!=null)this.contentHandle.style.color=color.getCSSHandle();
},"$wt.graphics.Color");
$_M(c$,"setImage",
function(image){
this.image=image;
this.setImages(image,null);
this.image=image;
if(image==null){
this.shellIcon.style.backgroundImage="";
if(O$.isIE50||O$.isIE55||O$.isIE60||O$.isIE70){
this.shellIcon.style.backgroundPosition="50% 53%";
}if(O$.isIENeedPNGFix&&this.shellIcon.style.filter!=null){
this.shellIcon.style.filter="";
}return;
}if(this.shellIcon!=null&&this.image.handle==null&&this.image.url!=null&&this.image.url.length!=0){
var iconStyle=this.shellIcon.style;
if(O$.isIE50||O$.isIE55||O$.isIE60||O$.isIE70){
this.shellIcon.style.backgroundPosition="center center";
}if(O$.isIENeedPNGFix&&image.url.toLowerCase().endsWith(".png")&&this.contentHandle.style.filter!=null){
iconStyle.backgroundImage="url(\"about:blank\")";
iconStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+this.image.url+"\", sizingMethod=\"image\")";
}else{
if(O$.isIENeedPNGFix&&iconStyle.filter!=null)iconStyle.filter="";
iconStyle.backgroundRepeat="no-repeat";
iconStyle.backgroundPosition="center center";
iconStyle.backgroundImage="url(\""+this.image.url+"\")";
}}},"$wt.graphics.Image");
$_M(c$,"setImages",
function(image,images){
},"$wt.graphics.Image,~A");
$_M(c$,"setImages",
function(images){
for(var i=0;i<images.length;i++){
}
this.images=images;
this.setImage(images[0]);
},"~A");
$_M(c$,"setMaximized",
function(maximized){
($t$=$wt.widgets.Display.topMaxShell=null,$wt.widgets.Display.prototype.topMaxShell=$wt.widgets.Display.topMaxShell,$t$);
($t$=$wt.widgets.Display.topMaxShellNeedUpdated=true,$wt.widgets.Display.prototype.topMaxShellNeedUpdated=$wt.widgets.Display.topMaxShellNeedUpdated,$t$);
this.maximized=maximized;
var key="shell-maximized";
var b=d$.body;
var isStrictMode=b.parentNode.clientHeight!=0;
var node=b;
if(((O$.isFirefox&&node.scrollLeft==0&&node.scrollTop==0)||O$.isIE)&&isStrictMode){
node=b.parentNode;
}var monitor=this.getMonitor();
var updateBody=(monitor.handle===d$.body);
if(maximized){
if(updateBody){
this.lastBodyScrollLeft=node.scrollLeft;
this.lastBodyScrollTop=node.scrollTop;
this.lastClientAreaCSSText=node.style.cssText;
this.lastBodyCSSText=b.style.cssText;
node.style.border="0 none transparent";
node.style.overflow="hidden";
b.style.margin="0";
b.style.padding="0";
node.scrollLeft=0;
node.scrollTop=0;
}if(this.contentHandle!=null){
if(this.oldBounds==null){
this.oldBounds=this.getBounds();
}var height=monitor.clientHeight;
var width=monitor.clientWidth;
if(monitor.handle===d$.body){
width=d$.body.parentNode.clientWidth;
height=O$.getFixedBodyClientHeight();
}var titleHeight=((this.style&32)!=0)?O$.getContainerHeight(this.titleBar):0;
var trim=this.computeTrim(0,-titleHeight,width,height);
this.setBounds(trim.x,trim.y,trim.width,trim.height);
}$wt.internal.ResizeSystem.register(this,1024);
if(this.titleBar!=null){
O$.addCSSClass(this.titleBar,key);
if(this.shellMax!=null){
this.shellMax.title="Restore";
}}w$.currentTopZIndex++;
this.handle.style.zIndex=w$.currentTopZIndex;
if(this.contentHandle!=null){
w$.setTimeout($_Q((($_D("$wt.widgets.Decorations$4")?0:org.eclipse.swt.widgets.Decorations.$Decorations$4$()),$_N($wt.widgets.Decorations$4,this,null))),250);
}}else{
this.setBounds(this.oldBounds);
if(this.titleBar!=null){
O$.removeCSSClass(this.titleBar,key);
if(this.shellMax!=null){
this.shellMax.title="Maximize";
}}this.oldBounds=null;
$wt.internal.ResizeSystem.unregister(this,1024);
if(updateBody){
node.style.cssText=this.lastClientAreaCSSText;
b.style.cssText=this.lastBodyCSSText;
if(O$.isOpera){
var ofl=node.style.overflow;
if(ofl==null||ofl.length==0){
node.style.overflow="auto";
}ofl=node.style.overflow;
if(ofl==null||ofl.length==0){
b.style.overflow="auto";
}}node.scrollLeft=this.lastBodyScrollLeft;
node.scrollTop=this.lastBodyScrollTop;
}}},"~B");
$_M(c$,"setMenuBar",
function(menu){
if(this.menuBar===menu)return;
if(menu!=null){
}if(this.menuBar===menu)return;
if(menu!=null){
}if(menu!=null)this.display.removeBar(menu);
this.menuBar=menu;
},"$wt.widgets.Menu");
$_M(c$,"setMinimized",
function(minimized){
($t$=$wt.widgets.Display.topMaxShell=null,$wt.widgets.Display.prototype.topMaxShell=$wt.widgets.Display.topMaxShell,$t$);
($t$=$wt.widgets.Display.topMaxShellNeedUpdated=true,$wt.widgets.Display.prototype.topMaxShellNeedUpdated=$wt.widgets.Display.topMaxShellNeedUpdated,$t$);
if(!minimized){
if(this.maximized){
this.minimized=minimized;
if(this.display.taskBar!=null){
this.handle.style.display=minimized?"none":"";
}return;
}}if(this.display.taskBar!=null){
this.handle.style.display=minimized?"none":"";
if(this.minimized!=minimized){
this.display.taskBar.handleApproaching();
this.display.taskBar.setMinimized(false);
this.display.taskBar.updateLastModified();
this.display.taskBar.updateLayout();
}if(!minimized){
this.bringToTop();
}else{
var topShell=$wt.widgets.Display.getTopShell();
if(topShell!=null){
topShell.bringToTop();
topShell.forceFocus();
}else{
if(window["document.title"]!=null){
document.title=window["document.title"];
}
}}this.minimized=minimized;
return;
}this.minimized=minimized;
if(minimized&&this.contentHandle!=null){
if(this.oldBounds==null){
this.oldBounds=this.getBounds();
this.oldBounds.width-=2;
}var width=this.oldBounds.width;
if(width<200){
width=200;
}this.setBounds(-1,this.getMonitor().clientHeight-6-(this.titleBar!=null?O$.getContainerHeight(this.titleBar):0),120,0);
}else if(!minimized){
this.bringToTop();
}if(minimized){
$wt.internal.ResizeSystem.register(this,128);
}else{
$wt.internal.ResizeSystem.unregister(this,128);
}},"~B");
$_M(c$,"setParent",
function(){
});
$_M(c$,"setSavedFocus",
function(control){
this.savedFocus=control;
},"$wt.widgets.Control");
$_M(c$,"setSystemMenu",
function(){
this.titleBar=d$.createElement("DIV");
this.titleBar.className="shell-title-bar";
this.hNoTextSelection=O$.setTextSelection(this.titleBar,false);
if((this.style&4)==0&&(this.style&(1216))!=0){
this.shellIcon=d$.createElement("DIV");
this.shellIcon.className="shell-title-icon";
if(O$.isIE50||O$.isIE55||O$.isIE60||O$.isIE70){
this.shellIcon.style.backgroundPosition="50% 53%";
}this.titleBar.appendChild(this.shellIcon);
this.hIconClick=$_Q((($_D("$wt.widgets.Decorations$5")?0:org.eclipse.swt.widgets.Decorations.$Decorations$5$()),$_N($wt.widgets.Decorations$5,this,null)));
Clazz.addEvent(this.shellIcon,"click",this.hIconClick);
}if(this.minable()){
this.shellMin=d$.createElement("DIV");
this.shellMin.className="shell-title-min";
if(O$.isIE50||O$.isIE55||O$.isIE60||O$.isIE70){
this.shellMin.style.backgroundPosition="0% 53%";
}this.shellMin.title="Minimze";
this.titleBar.appendChild(this.shellMin);
this.hMinClick=$_Q((($_D("$wt.widgets.Decorations$6")?0:org.eclipse.swt.widgets.Decorations.$Decorations$6$()),$_N($wt.widgets.Decorations$6,this,null)));
Clazz.addEvent(this.shellMin,"click",this.hMinClick);
}if((this.style&1024)!=0){
this.shellMax=d$.createElement("DIV");
this.shellMax.className="shell-title-normal-max";
this.shellMax.title="Maximize";
this.titleBar.appendChild(this.shellMax);
this.hMaxClick=$_Q((($_D("$wt.widgets.Decorations$7")?0:org.eclipse.swt.widgets.Decorations.$Decorations$7$()),$_N($wt.widgets.Decorations$7,this,null)));
Clazz.addEvent(this.shellMax,"click",this.hMaxClick);
}if((this.style&64)!=0){
this.shellClose=d$.createElement("DIV");
this.shellClose.className="shell-title-close";
this.shellClose.title="Close";
this.titleBar.appendChild(this.shellClose);
this.hCloseClick=$_Q((($_D("$wt.widgets.Decorations$8")?0:org.eclipse.swt.widgets.Decorations.$Decorations$8$()),$_N($wt.widgets.Decorations$8,this,null)));
Clazz.addEvent(this.shellClose,"click",this.hCloseClick);
}this.shellTitle=d$.createElement("DIV");
this.shellTitle.className="shell-title-text";
{
if(window["ubuntu.css.colors.fixed"]==null
&&navigator.userAgent.indexOf("Ubuntu")!=-1){
this.titleBar.style.backgroundColor="highlight";
this.shellTitle.style.color="highlighttext";
}
}this.titleBar.appendChild(this.shellTitle);
if((this.style&1024)!=0){
Clazz.addEvent(this.titleBar,"dblclick",this.hMaxClick);
}this.handle.appendChild(this.titleBar);
this.hTitleBarClick=$_Q((($_D("$wt.widgets.Decorations$9")?0:org.eclipse.swt.widgets.Decorations.$Decorations$9$()),$_N($wt.widgets.Decorations$9,this,null)));
Clazz.addEvent(this.titleBar,"click",this.hTitleBarClick);
w$.currentTopZIndex+=2;
this.handle.style.zIndex=w$.currentTopZIndex;
});
$_M(c$,"setText",
function(string){
if(this.shellTitle!=null&&this.shellTitle.childNodes!=null){
O$.clearChildren(this.shellTitle);
this.shellTitle.appendChild(d$.createTextNode(string));
if((this.style&4)==0&&$wt.widgets.Display.getTopShell()===this){
var title=this.getText();
if(title!=null){

if(window["document.title"]==null){
window["document.title"]=document.title;
}
if(window["document.title.setter"]==null){
document.title=title;
}else{

window["document.title.setter"](title);
}
}
}if(this.parent==null&&(this.getStyle()&4)==0&&this.display.taskBar!=null){
this.display.taskBar.handleApproaching();
}if(this.display.taskBar!=null){
w$.setTimeout($_Q((($_D("$wt.widgets.Decorations$10")?0:org.eclipse.swt.widgets.Decorations.$Decorations$10$()),$_N($wt.widgets.Decorations$10,this,null))),50);
}}},"~S");
$_V(c$,"setVisible",
function(visible){
if(this.drawCount!=0){
if(((this.state&16)==0)==visible)return;
}else{
if(visible==(this.handle.style.visibility!=="hidden"))return;
}this.handle.style.visibility=visible?"":"hidden";
this.handle.style.display=visible?"":"none";
if(visible){
this.sendEvent(22);
if(this.isDisposed())return;
}else{
if(this.isDisposed())return;
this.sendEvent(23);
}},"~B");
$_V(c$,"SetWindowPos",
function(hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags){
if((this.style&8)==0){
var w=0;
var h=0;
if((this.style&(1248))!=0){
w=113;
h=8+O$.getContainerHeight(this.titleBar);
}if((this.style&2048)!=0){
w+=2;
h+=2;
}if(this.width<w){
this.width=w;
cx=w;
}if(this.height<h){
this.height=h;
cy=h;
}}if(this.titleBar!=null){
var dw=8;
var tbh=O$.getContainerHeight(this.titleBar);
if(tbh==0||tbh==20||tbh>30){
tbh=22;
}if(O$.isIE&&(tbh==19)){
tbh=21;
}var dh=5+tbh+2;
var dww=8;
if((this.style&2048)!=0){
dw+=4;
dh+=4;
dww+=4;
}if(O$.existedCSSClass(this.handle,"shell-menu-bar")){
this.shellMenuBar.style.top=(3+tbh)+"px";
var mbh=O$.getContainerHeight(this.shellMenuBar);
if(mbh<20){
mbh=tbh-2;
}dh+=mbh+1;
tbh+=mbh+1;
}this.contentHandle.style.top=(((this.style&2048)!=0?1:1)+tbh+2)+"px";
this.contentHandle.style.left=(((this.style&2048)!=0?1:1)+2)+"px";
this.contentHandle.style.height=((this.height-dh>=0)?this.height-dh:0)+"px";
this.contentHandle.style.width=((this.width-dw)>0?this.width-dw:0)+"px";
this.titleBar.style.width=((this.width-dww)>0?this.width-dww:0)+"px";
this.updateShellTitle(this.width-dww+8);
}else{
this.contentHandle.style.top="0px";
this.contentHandle.style.left="0px";
var dw=8;
var dh=8;
if((this.style&8)!=0){
dw=0;
dh=0;
}else if((this.style&4)!=0){
dw=4;
dh=2;
cx-=2;
cy-=2;
}else{
dw=6;
dh=4;
cx-=4;
cy-=4;
}this.contentHandle.style.height=((this.height-dh>=0)?this.height-dh:0)+"px";
this.contentHandle.style.width=(this.width-dw>0?this.width-dw:0)+"px";
}if((this.style&2048)!=0){
cx-=6;
cy-=4;
}else if((this.style&8)==0){
cx-=2;
}var el=hWnd;
el.style.left=X+"px";
el.style.top=Y+"px";
el.style.width=(cx>0?cx:0)+"px";
el.style.height=(cy>0?cy:0)+"px";
return true;
},"~O,~O,~N,~N,~N,~N,~N");
$_M(c$,"updateShellTitle",
function(width){
var ww=18;
var w=ww;
if(this.shellClose!=null){
this.shellClose.style.left=(width-8-2-w)+"px";
w+=ww;
}if(this.shellMax!=null){
this.shellMax.style.left=(width-8-2-w)+"px";
w+=ww;
}if(this.shellMin!=null){
this.shellMin.style.left=(width-8-2-w)+"px";
w+=ww;
}w-=ww;
if(this.shellIcon!=null){
this.shellIcon.style.left="2px";
this.shellTitle.style.left=(4+ww)+"px";
w+=ww;
}else{
this.shellTitle.style.left="4px";
}this.shellTitle.style.width=(width-8-8-w)+"px";
},"~N");
$_M(c$,"traverseDecorations",
function(next){
var children=this.parent._getChildren();
var length=children.length;
var index=0;
while(index<length){
if(children[index]===this)break;
index++;
}
var start=index;
var offset=(next)?1:-1;
while((index=(index+offset+length)%length)!=start){
var child=children[index];
if(!child.isDisposed()&&$_O(child,$wt.widgets.Decorations)){
if(child.setFocus())return true;
}}
return false;
},"~B");
$_M(c$,"_updateMonitorSize",
function(){
var monitor=this.getMonitor();
var el=monitor.handle;
if(el===d$.body){
monitor.clientWidth=O$.getFixedBodyClientWidth();
monitor.clientHeight=O$.getFixedBodyClientHeight();
monitor.x=0;
monitor.y=0;
monitor.width=w$.screen.availWidth;
monitor.height=w$.screen.availHeight;
}else{
}});
c$.$Decorations$1$=function(){
$_H();
c$=$_W($wt.widgets,"Decorations$1",null,Runnable);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Decorations"].addModalLayer();
});
c$=$_P();
};
c$.$Decorations$2$=function(){
$_H();
c$=$_C(function(){
$_B(this,arguments);
this.deltaWidth=0;
this.deltaHeight=0;
$_Z(this,arguments);
},$wt.widgets,"Decorations$2",$wt.internal.dnd.ShellFrameDND);
$_M(c$,"isDraggable",
function(e){
if($_U(this,$wt.widgets.Decorations$2,"isDraggable",[e])&&!this.b$["$wt.widgets.Decorations"].getMaximized()){
var cssName=e.target.className;
if(cssName.indexOf("shell-title-text")!=-1&&this.b$["$wt.widgets.Decorations"].oldBounds!=null){
return false;
}return true;
}else{
return false;
}},"$wt.internal.dnd.HTMLEventWrapper");
$_V(c$,"initFrameBounds",
function(x,y,width,height){
var bs=this.b$["$wt.widgets.Decorations"].getBounds();
this.deltaWidth=this.sourceWidth-bs.width;
this.deltaHeight=this.sourceHeight-bs.height;
return true;
},"~N,~N,~N,~N");
$_V(c$,"updateShellBounds",
function(x,y,w,h){
var moved=(x!=this.b$["$wt.widgets.Decorations"].left||y!=this.b$["$wt.widgets.Decorations"].top);
w-=this.deltaWidth;
h-=this.deltaHeight;
var resized=(w!=this.b$["$wt.widgets.Decorations"].width||h!=this.b$["$wt.widgets.Decorations"].height);
this.b$["$wt.widgets.Decorations"].setBounds(x,y,w,h);
if(moved){
this.b$["$wt.widgets.Decorations"].sendEvent(10);
}if(resized){
this.b$["$wt.widgets.Decorations"].sendEvent(11);
}this.b$["$wt.widgets.Decorations"].bringToTop();
return true;
},"~N,~N,~N,~N");
c$=$_P();
};
c$.$Decorations$3$=function(){
$_H();
c$=$_W($wt.widgets,"Decorations$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=this.getEvent();
if(this.b$["$wt.widgets.Decorations"].defaultButton==null){
return;
}if(e.keyCode==13){
if(!this.b$["$wt.widgets.Decorations"].defaultButton.isEnabled()){
this.toReturn(true);
return;
}if((this.b$["$wt.widgets.Decorations"].defaultButton.style&(34))!=0){
if((this.b$["$wt.widgets.Decorations"].defaultButton.style&32)!=0){
if(e.srcElement!==this.b$["$wt.widgets.Decorations"].defaultButton.btnHandle&&e.target!==this.b$["$wt.widgets.Decorations"].defaultButton.btnHandle){
this.b$["$wt.widgets.Decorations"].defaultButton.setSelection(!this.b$["$wt.widgets.Decorations"].defaultButton.getSelection());
}}else{
this.b$["$wt.widgets.Decorations"].defaultButton.setSelection(!this.b$["$wt.widgets.Decorations"].defaultButton.getSelection());
}}else{
if((this.b$["$wt.widgets.Decorations"].defaultButton.style&16)!=0){
if((this.b$["$wt.widgets.Decorations"].defaultButton.parent.getStyle()&4194304)!=0){
this.b$["$wt.widgets.Decorations"].defaultButton.setSelection(!this.b$["$wt.widgets.Decorations"].defaultButton.getSelection());
}else{
this.b$["$wt.widgets.Decorations"].defaultButton.selectRadio();
}}}this.b$["$wt.widgets.Decorations"].defaultButton.postEvent(13);
this.toReturn(true);
}});
c$=$_P();
};
c$.$Decorations$4$=function(){
$_H();
c$=$_W($wt.widgets,"Decorations$4",null,Runnable);
$_V(c$,"run",
function(){
var lastShell=$wt.widgets.Display.getTopMaximizedShell();
if(lastShell==null||lastShell.titleBar==null)return;
if(this.b$["$wt.widgets.Decorations"].display.topBar!=null){
var topBar=this.b$["$wt.widgets.Decorations"].display.topBar;
topBar.handleApproaching();
topBar.updateLayout();
topBar.updateLastModified();
}});
c$=$_P();
};
c$.$Decorations$5$=function(){
$_H();
c$=$_W($wt.widgets,"Decorations$5",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=this.getEvent();
if(e==null||(!e.ctrlKey&&!e.altKey&&!e.shiftKey)){
this.b$["$wt.widgets.Decorations"].openAboutJava2Script();
}else{
this.b$["$wt.widgets.Decorations"].exportHTMLSource(e.shiftKey);
}});
c$=$_P();
};
c$.$Decorations$6$=function(){
$_H();
c$=$_W($wt.widgets,"Decorations$6",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var shell=this.b$["$wt.widgets.Decorations"];
$wt.internal.ResizeSystem.unregister(shell,128);
this.b$["$wt.widgets.Decorations"].setMinimized(true);
if(this.b$["$wt.widgets.Decorations"].display.topBar!=null){
this.b$["$wt.widgets.Decorations"].display.topBar.returnTopMaximized(shell);
}this.toReturn(false);
new $wt.internal.dnd.HTMLEventWrapper(this.getEvent()).stopPropagation();
});
c$=$_P();
};
c$.$Decorations$7$=function(){
$_H();
c$=$_W($wt.widgets,"Decorations$7",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var cur=!this.b$["$wt.widgets.Decorations"].getMaximized();
this.b$["$wt.widgets.Decorations"].setMaximized(cur);
var shell=this.b$["$wt.widgets.Decorations"];
if(!cur&&this.b$["$wt.widgets.Decorations"].display.topBar!=null){
this.b$["$wt.widgets.Decorations"].display.topBar.returnTopMaximized(shell);
}this.b$["$wt.widgets.Decorations"].display.timerExec(25,(($_D("$wt.widgets.Decorations$7$1")?0:org.eclipse.swt.widgets.Decorations.$Decorations$7$1$()),$_N($wt.widgets.Decorations$7$1,this,null)));
});
c$=$_P();
};
c$.$Decorations$7$1$=function(){
$_H();
c$=$_W($wt.widgets,"Decorations$7$1",null,Runnable);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Decorations"].layout();
});
c$=$_P();
};
c$.$Decorations$8$=function(){
$_H();
c$=$_W($wt.widgets,"Decorations$8",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if($_O(this.b$["$wt.widgets.Decorations"],$wt.widgets.Shell)){
var shell=this.b$["$wt.widgets.Decorations"];
if(this.b$["$wt.widgets.Decorations"].display.topBar!=null){
this.b$["$wt.widgets.Decorations"].display.topBar.returnTopMaximized(shell);
}shell.close();
}this.toReturn(false);
});
c$=$_P();
};
c$.$Decorations$9$=function(){
$_H();
c$=$_W($wt.widgets,"Decorations$9",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.Decorations"].isVisible()){
this.b$["$wt.widgets.Decorations"].bringToTop();
this.b$["$wt.widgets.Decorations"].forceFocus();
}this.toReturn(true);
});
c$=$_P();
};
c$.$Decorations$10$=function(){
$_H();
c$=$_W($wt.widgets,"Decorations$10",null,Runnable);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Decorations"].display.taskBar.updateLayout();
});
c$=$_P();
};
});
$_L(["$wt.widgets.Decorations"],"$wt.widgets.Shell",["$wt.graphics.Point","$wt.widgets.Display","$.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.Shell", ".system-default {\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\n}\n.shell-handle {\nposition:absolute;\nborder:1px outset windowframe;\nbackground-color:buttonface;\nz-index:10;\n}\n.shell-opacity {\nwidth:100%;\nmargin:0;\nopacity:0.35;\nfilter:Alpha (opacity=35);\n}\n.shell-default {\nposition:absolute;\n/*top:0;\nleft:0;*/\nbackground-color:buttonface;\n/*overflow:hidden;*/\nfont-size:0;\ntext-align:left;\ncolor:black;\n}\n.shell-trim {\nborder:1px solid windowframe;\n}\n@media all and (-webkit-min-device-pixel-ratio:0) {\n.shell-trim {\nborder:1px solid gray;\n}\n}\n.shell-content {\nposition:absolute;\nleft:0;\ntop:23px;\noverflow:hidden;\nbackground-color:buttonface;\n/*background-color:navy;*/\nz-index:3;\n}\n.shell-tool {\nmargin:0 !important;\n}\n.shell-menu-bar .shell-content {\ntop:44px;\n}\n.shell-left-top, .shell-right-top, .shell-left-bottom, .shell-right-bottom {\nposition:absolute;\nwidth:20px;\nheight:20px;\n/*background-color:#aaaaff;*/\nz-index:1;\n}\n.shell-left-top {\nleft:0;\ntop:0;\ncursor:nw-resize;\n}\n.shell-right-top {\nright:0;\ntop:0;\ncursor:ne-resize;\n}\n.shell-left-bottom {\nleft:0;\nbottom:0;\ncursor:sw-resize;\n}\n.shell-right-bottom {\nright:0;\nbottom:0;\ncursor:se-resize;\n}\n.shell-center-top, .shell-left-middle, .shell-right-middle, .shell-center-bottom {\nposition:absolute;\nz-index:0;\n}\n.shell-center-top {\ncursor:n-resize;\nwidth:100%;\nheight:20px;\nleft:0;\ntop:0;\n}\n.shell-left-middle {\ncursor:w-resize;\nleft:0;\ntop:0;\nwidth:20px;\nheight:100%;\n}\n.shell-right-middle {\ncursor:e-resize;\nright:0;\ntop:0;\nwidth:20px;\nheight:100%;\n}\n.shell-center-bottom {\ncursor:s-resize;\nwidth:100%;\nheight:20px;\nleft:0;\nbottom:0;\n}\n/* Begin of Shell Shadow */\n.shadow-left-top, .shadow-right-top, .shadow-left-bottom, .shadow-right-bottom {\nposition:absolute;\nwidth:16px;\nheight:16px;\nz-index:1;\n}\n.shadow-left-top {\nleft:-16px;\ntop:-16px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJ0lEQVR4nGNIS0tjIAEzomNyNDIhYWZSNIM1QDELELOCMCkaYZrYgJgdiDmAmJNYzaxImriAmAeIeUGYWM0wjSBN/EAsCMRCQCxMrGZuqEaQJlEgFgdiSSCWwmYALs0iQCwBxDJALA/EikCsTIpmSahGFSDWAGJtINZFdzo+zQpArA7SBMRGQGwGxBbotoOiChTaXFg0qwGxPhCbA7EdELsAsRsu20GhDQowkJ/loTbDNDsBsQ8QBwNxOLrf2ZBsB4U2KMBAftZF0uwLxNFpEJCNzfmgRAKKZ1BUgWwHBRjIzyBn+0A1ZwFxNRC3IBuA7nyQ30FRBQptUICB/BwMsRiseTIQL4cZAPM/J9QAYSCWAmLlNIjzLYDYDYjDgTgbiFtAmoH4PwDG70g8WccLqwAAAABJRU5ErkJggg==);\nbackground-position: right bottom;\nbackground-repeat: no-repeat;\n}\n.shadow-right-top {\nright:-16px;\ntop:-16px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQklEQVR4nGNIS0tjxIIZiMUgghmImZAwSQaBCFYoZoEaxoxmEEEDOIGYA4jZgZgNzTCCBoEIXijmAWIuJMNYiTEERAgDsRAQCwIxP9QwmEEEDQERUkAsCcTiQCwKNQxkEDcxhoAIZSBWBGJ5IJYBYgkgFiFgCIoBukCsDcQaQKwCNUiSWENAhAUQmwGxEdQwdSBWIGAI3CsgA9yA2AWI7YDYHIj1gVgNiyGggAXFDiiKmZANCAfiYCD2AWInJENALgF5BxQmoIAFxQ6GK0AGZKdBQDQQ+yIZAvIOKExAAQuKHZgr2NKQwgJkQAsQVwNxFtQQkEtA3gGFCShgQa4ARTEonYASG4o3QAYsB+LJUENAAOQdUJiAAhYUO6AoBoUFujfgBvyHGgJyCcg7oDABBSwodkDeAKUTUGIThhrAmYYUDgCc5Eg8bh4+UgAAAABJRU5ErkJggg==);\nbackground-position: left bottom;\nbackground-repeat: no-repeat;\n}\n.shadow-left-bottom {\nleft:-16px;\nbottom:-16px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQklEQVR4nGNIS0tjBGJmIGYFYk4g5gViYSCWAmJlINYFYgsgdgPicCDOBuIWIF4OxP8ZoAYwQQ3ggBogBMSSQKwIxNpAbAbELkAcnAYB1UA8GWQIsgEsQMwOxDxALAjE4kAsD8QaQGwExHZA7APE0UCcBTWkBdkAkDfYgJgLiPmBWBSIZYBYJQ3iDXMgdgJiX6ghIJANMwA5HJC9IZEGcYU6EOsjGQJyCcg74SADsHkD5gqRNEhYKACxGpIhIO+AwsQN2QB0V3BjMQTkEpB3QGECClgLmAHoYYHLEJB3QGECClhQ7OgiG0CMIaAwkYEaBIpiZWwG4DMEFLCg2AFFMchFUugG4DMEFLC8UIMEoYYJYzMAlyHsSAbxQA3jxWUANkNYoAaxIRnGic8AXAYhG8ZKjAHIhsAMgmFmYg3AZhAYAwDbk0g892abRgAAAABJRU5ErkJggg==);\nbackground-position: right top;\nbackground-repeat: no-repeat;\n}\n.shadow-right-bottom {\nright:-16px;\nbottom:-16px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR4nGNIS0v7D8TLgbgFiLOBOByI3YDYAoh1gVgZiKWAWBiIeYGYE4hZgZgZiBkZoJonA3F1GgQEA7ELEJsBsTYQKwKxJBALQQ3ggBrABDOgBao5C4ijgdgHiO2A2AiINYBYHojFgVgQiHmAmB2IWZANyIZYDNbsC8ROQGyeBnG+ChDLALEoEPMDMRcQs6VBnA83AORnkLN9kDTrA7F6GsR2iTRM54P9DzMAFGAgP9shaVYDYoU0iN9FkGxHcT4QM4AMAIU2KMBAftaF2oyumRub7TADQJpAoQ0KMJCf5QlohtsOMwAUz4pQjaAAkyBWM8wAKaiNoKgChbYQAc0YBghDNQlCNYJCm4sYzTADeKGYB0kjOzGaYQZwImlig2pkIUYzzABWNE1EaUQ2AKaBCU0jQc0wAxixYAZiMQCxiEg8NJ6W6QAAAABJRU5ErkJggg==);\nbackground-position: left top;\nbackground-repeat: no-repeat;\n}\n.shadow-center-top, .shadow-left-middle, .shadow-right-middle, .shadow-center-bottom {\nposition:absolute;\nz-index:0;\n}\n.shadow-center-top {\nwidth:100%;\nheight:16px;\nleft:0;\ntop:-16px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVR4nGNIS0tjpAQzAAlmSjDIAFZKMMgATkowyABeSjDIAGFKMMgAKUowyABlSjDIAF1KMMgAC0owyAA3SjDIgHBKMMiAbEowyIAWSjDIgOWUYJAB/ynBAI8ocnCpqVcAAAAAAElFTkSuQmCC);\nbackground-position: center bottom;\nbackground-repeat: repeat-x;\n}\n.shadow-left-middle {\nleft:-16px;\ntop:0;\nwidth:16px;\nheight:100%;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPUlEQVR4nGNIS0tjBGJmIGYFYk4g5gViYSCWAmJlINYFYgsgdgPicCDOBuIWIF4OxP8ZRg0YNWDUgOFiAABKlHJwZMWFzQAAAABJRU5ErkJggg==);\nbackground-position: right center;\nbackground-repeat: repeat-y;\n}\n.shadow-right-middle {\nright:-16px;\ntop:0;\nwidth:16px;\nheight:100%;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPUlEQVR4nGNIS0v7D8TLgbgFiLOBOByI3YDYAoh1gVgZiKWAWBiIeYGYE4hZgZgZiBkZRg0YNWDUgOFiAAAsm3JwP/LaYAAAAABJRU5ErkJggg==);\nbackground-position: left center;\nbackground-repeat: repeat-y;\n}\n.shadow-center-bottom {\nwidth:100%;\nheight:16px;\nleft:0;\nbottom:-16px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVR4nGNIS0v7TwlmABLLKcEgA1oowSADsinBIAPCKcEgA9wowSADLCjBIAN0KcEgA5QpwSADpCjBIAOEKcEgA3gpwSADOCnBIANYKcEgA5gpwSADGCnBAOf4cnBQxNJJAAAAAElFTkSuQmCC);\nbackground-position: center top;\nbackground-repeat: repeat-x;\n}\n/* Narrow Shadow */\n.shadow-narrow-left-top, .shadow-narrow-right-top, .shadow-narrow-left-bottom, .shadow-narrow-right-bottom {\nposition:absolute;\nwidth:8px;\nheight:8px;\nz-index:1;\n}\n.shadow-narrow-left-top {\nleft:-8px;\ntop:-8px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAbklEQVR4nGNIS0tjQMOMUMwExMzYJJmBmBWI2YGYE5skBxDzArEgEAtjk+QHYgkglgdiZWySkkCsDsRGQGwBU8AKNVYCKmkOxD5AHA5SAHItO9ROeahOkGQWELcwQI3nBGJhkJ0gY0E6QZJA/B8AF+NTPbwPJkgAAAAASUVORK5CYII=);\nbackground-position: right bottom;\nbackground-repeat: no-repeat;\n}\n.shadow-narrow-right-top {\nright:-8px;\ntop:-8px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAdElEQVR4nGNIS0tjBmImIGaEYgZkDCI4gZgdiFmhihnRFQgDsSAQ8wIxB7oiEKEMxPJALAHE/OiKQAosgNgIiNWBWBJdEUhBOBD7ALE5VJEE1DpWmIIWIM6CKjKCWgdyE8jhTCAF/6GKwqHWgdwEcjjId8wAg7NTPd3RZ9EAAAAASUVORK5CYII=);\nbackground-position: left bottom;\nbackground-repeat: no-repeat;\n}\n.shadow-narrow-left-bottom {\nleft:-8px;\nbottom:-8px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAeUlEQVR4nGNIS0tjBmJOIBYGYmUgtgDicCBuAeL/DECCCYjZgVgQiOWB2AiIfYA4C6QIpIARiFmBmBeIJYBYHYjNoYrCYQpA1nAAMT8QS0IVgUyyACnApkgCap0yTAG6IpB1IDcJIytAVgRyE8jhnOgKYIpAGOQ7ZgCRhFM9sL641gAAAABJRU5ErkJggg==);\nbackground-position: right top;\nbackground-repeat: no-repeat;\n}\n.shadow-narrow-right-bottom {\nright:-8px;\nbottom:-8px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAeElEQVR4nGNIS0v7D8QtQBwOxBZArAzEwkDMCcTMDFDJLCD2AWIjIJYHYkEgZgdiJgaoTpCkORCrA7EEEPMCMSsQMzJAjTWCSkoCMT8Qc4CMhylQhhorgS4JxAwgBcJQO3nRJWEKQK5lh9qJIglTABJkgkqgSIIwAP1UUz3HZnxGAAAAAElFTkSuQmCC);\nbackground-position: left top;\nbackground-repeat: no-repeat;\n}\n.shadow-narrow-center-top, .shadow-narrow-left-middle, .shadow-narrow-right-middle, .shadow-narrow-center-bottom {\nposition:absolute;\nz-index:0;\n}\n.shadow-narrow-center-top {\nwidth:100%;\nheight:8px;\nleft:0;\ntop:-8px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAMElEQVR4nGNIS0tjxocZgAQnPgxSIIwPgxQo48MgBRb4MEhBOD4MUtCCD4MU/MeHAdutXyH7Sod3AAAAAElFTkSuQmCC);\nbackground-position: center bottom;\nbackground-repeat: repeat-x;\n}\n.shadow-narrow-left-middle {\nleft:-8px;\ntop:0;\nwidth:8px;\nheight:100%;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIklEQVR4nGNIS0tjBmJOIBYGYmUgtgDicCBuAeL/DCNDAQB36F8h0d4gQQAAAABJRU5ErkJggg==);\nbackground-position: right center;\nbackground-repeat: repeat-y;\n}\n.shadow-narrow-right-middle {\nright:-8px;\ntop:0;\nwidth:8px;\nheight:100%;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIklEQVR4nGNIS0v7D8QtQBwOxBZArAzEwkDMCcTMDCNDAQC9d18hhcSz6gAAAABJRU5ErkJggg==);\nbackground-position: left center;\nbackground-repeat: repeat-y;\n}\n.shadow-narrow-center-bottom {\nwidth:100%;\nheight:8px;\nleft:0;\nbottom:-8px;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAMElEQVR4nGNIS0v7jw8zAIkWfBikIBwfBimwwIdBCpTxYZACYXwYpIATHwYpYMaHAVmyXyH2NbXoAAAAAElFTkSuQmCC);\nbackground-position: center top;\nbackground-repeat: repeat-x;\n}\n/* End of Shell Shadow */\n.shell-title-bar {\nposition:absolute;\nleft:0;\ntop:0;\nmargin:3px;\nmargin-bottom:0;\nheight:20px;\noverflow:hidden;\nbackground-color:activecaption;\nz-index:2;\nfont-size:10pt;\nheight:1.5em;\nmin-height:20px;\n_height:1.6em;\n}\n.shell-title-text {\nposition:absolute;\ncursor:default;\nwhite-space:nowrap;\n/*background-color:#6677ee;*/\ncolor:captiontext;\nfont-family:Arial, sans-serif;\nfont-weight:bold;\nfont-size:10pt;\nmargin-top:2px;\nheight:18px;\noverflow:hidden;\nz-index:0;\nheight:1.5em;\nmin-height:18px;\n}\n.shell-title-icon {\nposition:absolute;\ntop:0;\nbackground-position:center center;\nbackground-repeat:no-repeat;\nwidth:18px;\nheight:20px;\noverflow:hidden;\nz-index:1;\ntop:50%;\nmargin-top:-10px;\n}\n* html .shell-title-icon {\nmargin-top:-8px;\n}\n.shell-title-min, .shell-title-normal-max, .shell-title-close {\nposition:absolute;\ntop:1px;\nbackground-repeat:no-repeat;\nmargin:1px;\npadding:0;\nwidth:14px;\nheight:14px;\noverflow:hidden;\nz-index:1;\nbackground-color:white;\nborder:1px solid white;\ntop:50%;\nmargin-top:-8px;\nopacity:0.65;\n}\n.shell-title-min:hover, .shell-title-normal-max:hover, .shell-title-close:hover {\nopacity:1;\n}\n* html .shell-title-min {\nmargin-bottom:0;\nfilter:Alpha(Opacity=65);\n}\n* html .shell-title-normal-max {\nmargin-bottom:0;\nfilter:Alpha(Opacity=65);\n}\n* html .shell-title-close {\nmargin-bottom:0;\nfilter:Alpha(Opacity=65);\n}\n.alaa-icon {\nbackground-image:url(\'images/shell-packed.gif\');\nbackground-repeat:no-repeat;\nbackground-position:center center;\nbackground-color:transparent !important;\n}\n.shell-title-icon {\nbackground-image:url(\'images/shell-packed.gif\');\nbackground-position:center center;\n}\n.shell-title-icon-console {\nwidth:16px !important;\nheight:16px !important;\nmargin-top:-8px;\nbackground-position:bottom left !important;\n}\n.shell-title-min {\nbackground-image:url(\'images/shell-packed.gif\');\nbackground-position:left center;\n}\n.shell-title-normal-max {\nbackground-image:url(\'images/shell-packed.gif\');\nbackground-position:center top;\n}\n.shell-maximized .shell-title-normal-max {\nbackground-image:url(\'images/shell-packed.gif\');\nbackground-position:right top;\n}\n.shell-title-close {\nbackground-image:url(\'images/shell-packed.gif\');\nbackground-position:left top;\n}\n.shell-modal-block {\nbackground-color:gray;\nopacity:0.25;\nfilter:Alpha(Opacity=25);\nposition:absolute;\nleft:0;\ntop:0;\nwidth:100%;\nheight:100%;\n}\n.over-iframe-layer {\nbackground-color:white;\nopacity:0.01;\nfilter:Alpha(Opacity=1);\nposition:absolute;\nleft:0;\ntop:0;\nwidth:100%;\nheight:100%;\n}\n.swt-widgets-shell {\nwidth:324px;\n}\n@media all and (min-width:0px){/* opera */\n.shell-modal-block {\nbackground-color:transparent;\nbackground-image:url(\'images/alpha.png\');\n}\n.over-iframe-layer {\nbackground-color:transparent;\nbackground-image:url(\'images/alpha.png\');\n}\n}\n");

$WTC$$.registerCSS ("$wt.widgets.Shell.IE", "/* IE 7.0 + */\n*:first-child+html .shadow-left-top {\nbackground-image: url(\'images/top-left.png\');\n}\n*:first-child+html .shadow-right-top {\nbackground-image: url(\'images/top-right.png\');\n}\n*:first-child+html .shadow-left-bottom {\nbackground-image: url(\'images/bottom-left.png\');\n}\n*:first-child+html .shadow-right-bottom {\nbackground-image: url(\'images/bottom-right.png\');\n}\n*:first-child+html .shadow-center-top {\nbackground-image: url(\'images/top.png\');\n}\n*:first-child+html .shadow-left-middle {\nbackground-image: url(\'images/left.png\');\n}\n*:first-child+html .shadow-center-bottom {\nbackground-image: url(\'images/bottom.png\');\n}\n*:first-child+html .shadow-right-middle {\nbackground-image: url(\'images/right.png\');\n}\n/* IE 6.0 - */\n* html .shadow-left-top,\n* html .shadow-right-top,\n* html .shadow-left-bottom,\n* html .shadow-right-bottom,\n* html .shadow-center-top,\n* html .shadow-left-middle,\n* html .shadow-right-middle,\n* html .shadow-center-bottom {\nbackground-image: none;\n}\n* html .shadow-left-top {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/top-left.png\', sizingMethod=\'scale\');\n}\n* html .shadow-right-top {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/top-right.png\', sizingMethod=\'scale\');\n}\n* html .shadow-left-bottom {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/bottom-left.png\', sizingMethod=\'scale\');\n}\n* html .shadow-right-bottom {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/bottom-right.png\', sizingMethod=\'scale\');\n}\n* html .shadow-center-top {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/top.png\', sizingMethod=\'scale\');\n}\n* html .shadow-left-middle {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/left.png\', sizingMethod=\'scale\');\n}\n* html .shadow-right-middle {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/right.png\', sizingMethod=\'scale\');\n}\n* html .shadow-center-bottom {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/bottom.png\', sizingMethod=\'scale\');\n}\n/* IE 7.0 + */\n*:first-child+html .shadow-narrow-left-top {\nbackground-image: url(\'images/narrow-top-left.png\');\n}\n*:first-child+html .shadow-narrow-right-top {\nbackground-image: url(\'images/narrow-top-right.png\');\n}\n*:first-child+html .shadow-narrow-left-bottom {\nbackground-image: url(\'images/narrow-bottom-left.png\');\n}\n*:first-child+html .shadow-narrow-right-bottom {\nbackground-image: url(\'images/narrow-bottom-right.png\');\n}\n*:first-child+html .shadow-narrow-center-top {\nbackground-image: url(\'images/narrow-top.png\');\n}\n*:first-child+html .shadow-narrow-left-middle {\nbackground-image: url(\'images/narrow-left.png\');\n}\n*:first-child+html .shadow-narrow-center-bottom {\nbackground-image: url(\'images/narrow-bottom.png\');\n}\n*:first-child+html .shadow-narrow-right-middle {\nbackground-image: url(\'images/narrow-right.png\');\n}\n/* IE 6.0 - */\n* html .shadow-narrow-left-top,\n* html .shadow-narrow-right-top,\n* html .shadow-narrow-left-bottom,\n* html .shadow-narrow-right-bottom,\n* html .shadow-narrow-center-top,\n* html .shadow-narrow-left-middle,\n* html .shadow-narrow-right-middle,\n* html .shadow-narrow-center-bottom {\nbackground-image: none;\n}\n* html .shadow-narrow-left-top {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/narrow-top-left.png\', sizingMethod=\'scale\');\n}\n* html .shadow-narrow-right-top {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/narrow-top-right.png\', sizingMethod=\'scale\');\n}\n* html .shadow-narrow-left-bottom {s\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/narrow-bottom-left.png\', sizingMethod=\'scale\');\n}\n* html .shadow-narrow-right-bottom {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/narrow-bottom-right.png\', sizingMethod=\'scale\');\n}\n* html .shadow-narrow-center-top {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/narrow-top.png\', sizingMethod=\'scale\');\n}\n* html .shadow-narrow-left-middle {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/narrow-left.png\', sizingMethod=\'scale\');\n}\n* html .shadow-narrow-right-middle {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/narrow-right.png\', sizingMethod=\'scale\');\n}\n* html .shadow-narrow-center-bottom {\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/narrow-bottom.png\', sizingMethod=\'scale\');\n}\n.swt-widgets-shell-ie {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.activeMenu=null;
this.minWidth=-1;
this.minHeight=-1;
this.lastActive=null;
this.region=null;
$_Z(this,arguments);
},$wt.widgets,"Shell",$wt.widgets.Decorations);
$_K(c$,
function(){
this.construct(null,null,1264,0);
});
$_K(c$,
function(style){
this.construct(null,null,style,0);
},"~N");
$_K(c$,
function(display){
this.construct(display,null,1264,0);
},"$wt.widgets.Display");
$_K(c$,
function(display,style){
this.construct(display,null,style,0);
},"$wt.widgets.Display,~N");
$_K(c$,
function(display,parent,style,handle){
this.children=new Array(0);
if(display==null)display=$wt.widgets.Display.getCurrent();
if(display==null)display=$wt.widgets.Display.getDefault();
this.style=$wt.widgets.Shell.checkStyle(style);
this.parent=parent;
this.display=display;
this.createWidget();
},"$wt.widgets.Display,$wt.widgets.Shell,~N,~N");
$_K(c$,
function(parent){
this.construct(parent!=null?parent.display:null,parent,2144,0);
},"$wt.widgets.Shell");
$_K(c$,
function(parent,style){
this.construct(parent!=null?parent.display:null,parent,style,0);
},"$wt.widgets.Shell,~N");
c$.win32_new=$_M(c$,"win32_new",
function(display,handle){
return new $wt.widgets.Shell(display,null,8,handle);
},"$wt.widgets.Display,~N");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
style=$wt.widgets.Decorations.checkStyle(style);
var mask=229376;
var bits=style&~mask;
if((style&131072)!=0)return bits|131072;
if((style&65536)!=0)return bits|65536;
if((style&32768)!=0)return bits|32768;
return bits;
},"~N");
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var size=$_U(this,$wt.widgets.Shell,"computeSize",[wHint,hHint,changed]);
if(size.x<this.minWidth){
size.x=this.minWidth;
}if(size.y<this.minHeight){
size.y=this.minHeight;
}return size;
},"~N,~N,~B");
$_M(c$,"addShellListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(21,typedListener);
this.addListener(19,typedListener);
this.addListener(20,typedListener);
this.addListener(26,typedListener);
this.addListener(27,typedListener);
},"$wt.events.ShellListener");
$_M(c$,"close",
function(){
if(this.parent==null&&(this.getStyle()&4)==0&&this.display.taskBar!=null){
var taskBar=this.display.taskBar;
taskBar.removeShellItem(this);
taskBar.handleApproaching();
taskBar.updateLayout();
taskBar.setMinimized(false);
taskBar.updateLastModified();
}var nextShell=null;
if($_O(this.parent,$wt.widgets.Shell)){
nextShell=this.parent;
if(!nextShell.isVisible()){
nextShell=null;
}}this.closeWidget();
if(nextShell==null||nextShell.isDisposed()){
nextShell=$wt.widgets.Display.getTopShell();
}if(nextShell!=null&&!nextShell.isDisposed()){
nextShell.bringToTop();
nextShell.forceFocus();
}else{
if(window["document.title"]!=null){
document.title=window["document.title"];
}
}});
$_V(c$,"enableWidget",
function(enabled){
if(enabled){
this.state&=-9;
}else{
this.state|=8;
}},"~B");
$_V(c$,"findCursor",
function(){
return this.cursor;
});
$_V(c$,"findThemeControl",
function(){
return null;
});
$_M(c$,"fixShell",
function(newShell,control){
if(this===newShell)return;
if(control===this.lastActive)this.setActiveControl(null);
newShell.setToolTipText(control.handle,control.toolTipText);
},"$wt.widgets.Shell,$wt.widgets.Control");
$_M(c$,"forceActive",
function(){
if(!this.isVisible())return;
this.bringToTop();
});
$_V(c$,"forceResize",
function(){
});
$_M(c$,"getBounds",
function(){
return $_U(this,$wt.widgets.Shell,"getBounds",[]);
});
$_V(c$,"getEnabled",
function(){
return(this.state&8)==0;
});
$_M(c$,"getImeInputMode",
function(){
return 0;
});
$_M(c$,"getLocation",
function(){
return $_U(this,$wt.widgets.Shell,"getLocation",[]);
});
$_M(c$,"getMinimumSize",
function(){
var width=Math.max(0,this.minWidth);
var trim=1248;
if((this.style&8)==0&&(this.style&trim)!=0){
width=Math.max(width,80);
}var height=Math.max(0,this.minHeight);
if((this.style&8)==0&&(this.style&trim)!=0){
if((this.style&16)!=0){
height=Math.max(height,24);
}else{
height=Math.max(height,24);
}}if((this.style&8)!=0){
return new $wt.graphics.Point(this.minWidth,Math.max(this.minHeight-24,0));
}return new $wt.graphics.Point(width,height);
});
$_M(c$,"getRegion",
function(){
return this.region;
});
$_V(c$,"getShell",
function(){
return this;
});
$_M(c$,"getSize",
function(){
return $_U(this,$wt.widgets.Shell,"getSize",[]);
});
$_M(c$,"getShells",
function(){
var count=0;
var shells=this.display.getShells();
for(var i=0;i<shells.length;i++){
var shell=shells[i];
do{
shell=shell.parent;
}while(shell!=null&&shell!==this);
if(shell===this)count++;
}
var index=0;
var result=new Array(count);
for(var i=0;i<shells.length;i++){
var shell=shells[i];
do{
shell=shell.parent;
}while(shell!=null&&shell!==this);
if(shell===this){
result[index++]=shells[i];
}}
return result;
});
$_V(c$,"isLayoutDeferred",
function(){
return this.layoutCount>0;
});
$_V(c$,"isEnabled",
function(){
return this.getEnabled();
});
$_V(c$,"isVisible",
function(){
return this.getVisible();
});
$_M(c$,"open",
function(){
this.nextWindowLocation(this.width,this.height);
this.bringToTop();
if(this.isDisposed())return;
this.setVisible(true);
if(this.isDisposed())return;
this.layout();
if(this.parent==null&&(this.getStyle()&4)==0&&this.display.taskBar!=null){
var taskBar=this.display.taskBar;
taskBar.createShellItem(this);
taskBar.handleApproaching();
w$.setTimeout($_Q((($_D("$wt.widgets.Shell$1")?0:org.eclipse.swt.widgets.Shell.$Shell$1$()),$_N($wt.widgets.Shell$1,this,null))),50);
taskBar.setMinimized(false);
taskBar.updateLastModified();
}});
$_V(c$,"releaseChild",
function(){
});
$_M(c$,"releaseShells",
function(){
var shells=this.getShells();
for(var i=0;i<shells.length;i++){
var shell=shells[i];
if(!shell.isDisposed())shell.releaseResources();
}
});
$_M(c$,"releaseWidget",
function(){
this.releaseShells();
$_U(this,$wt.widgets.Shell,"releaseWidget",[]);
this.activeMenu=null;
this.display.clearModal(this);
this.lastActive=null;
this.region=null;
});
$_M(c$,"removeMenu",
function(menu){
$_U(this,$wt.widgets.Shell,"removeMenu",[menu]);
if(menu===this.activeMenu)this.activeMenu=null;
},"$wt.widgets.Menu");
$_M(c$,"removeShellListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(21,listener);
this.eventTable.unhook(19,listener);
this.eventTable.unhook(20,listener);
this.eventTable.unhook(26,listener);
this.eventTable.unhook(27,listener);
},"$wt.events.ShellListener");
$_M(c$,"setActive",
function(){
if(!this.isVisible())return;
this.bringToTop();
});
$_M(c$,"setActiveControl",
function(control){
if(control!=null&&control.isDisposed())control=null;
if(this.lastActive!=null&&this.lastActive.isDisposed())this.lastActive=null;
if(this.lastActive===control)return;
var activate=(control==null)?new Array(0):control.getPath();
var deactivate=(this.lastActive==null)?new Array(0):this.lastActive.getPath();
this.lastActive=control;
var index=0;
var length=Math.min(activate.length,deactivate.length);
while(index<length){
if(activate[index]!==deactivate[index])break;
index++;
}
for(var i=deactivate.length-1;i>=index;--i){
if(!deactivate[i].isDisposed()){
deactivate[i].sendEvent(27);
}}
for(var i=activate.length-1;i>=index;--i){
if(!activate[i].isDisposed()){
activate[i].sendEvent(26);
}}
},"$wt.widgets.Control");
$_M(c$,"setBounds",
function(x,y,width,height,flags,defer){
$_U(this,$wt.widgets.Shell,"setBounds",[x,y,width,height,flags,false]);
},"~N,~N,~N,~N,~N,~B");
$_M(c$,"setEnabled",
function(enabled){
if(((this.state&8)==0)==enabled)return;
$_U(this,$wt.widgets.Shell,"setEnabled",[enabled]);
},"~B");
$_M(c$,"setImeInputMode",
function(mode){
},"~N");
$_M(c$,"setMinimumSize",
function(width,height){
var widthLimit=0;
var heightLimit=0;
var trim=1248;
if((this.style&8)==0&&(this.style&trim)!=0){
}this.minWidth=Math.max(widthLimit,width);
this.minHeight=Math.max(heightLimit,height);
var size=this.getSize();
var newWidth=Math.max(size.x,this.minWidth);
var newHeight=Math.max(size.y,this.minHeight);
if(this.minWidth<=widthLimit)this.minWidth=-1;
if(this.minHeight<=heightLimit)this.minHeight=-1;
if(newWidth!=size.x||newHeight!=size.y)this.setSize(newWidth,newHeight);
},"~N,~N");
$_M(c$,"setMinimumSize",
function(size){
this.setMinimumSize(size.x,size.y);
},"$wt.graphics.Point");
$_M(c$,"setItemEnabled",
function(cmd,enabled){
},"~N,~B");
$_M(c$,"setParent",
function(){
});
$_M(c$,"setRegion",
function(region){
if((this.style&8)==0)return;
},"$wt.graphics.Region");
$_M(c$,"setToolTipText",
function(hwnd,text){
},"~O,~S");
$_M(c$,"setVisible",
function(visible){
if(this.parent==null&&(this.getStyle()&4)==0&&this.display.taskBar!=null){
var taskBar=this.display.taskBar;
if(!visible){
taskBar.removeShellItem(this);
}else{
taskBar.createShellItem(this);
}taskBar.handleApproaching();
w$.setTimeout($_Q((($_D("$wt.widgets.Shell$2")?0:org.eclipse.swt.widgets.Shell.$Shell$2$()),$_N($wt.widgets.Shell$2,this,null))),50);
if(visible!=this.isVisible()){
taskBar.setMinimized(false);
taskBar.updateLastModified();
taskBar.updateLayout();
}}if(this.drawCount!=0){
if(((this.state&16)==0)==visible)return;
}else{
if(visible==(this.handle.style.visibility!=="hidden"))return;
}var mask=229376;
if((this.style&mask)!=0){
if(visible){
this.display.setModalShell(this);
var control=this;
if(control!=null&&!control.j2sIsActive()){
this.bringToTop();
if(this.isDisposed())return;
}}else{
this.display.clearModal(this);
}}else{
this.updateModal();
}$_U(this,$wt.widgets.Shell,"setVisible",[visible]);
if(this.isDisposed())return;
if(visible){
this.SetWindowPos(this.handle,null,this.left,this.top,this.width,this.height,0);
}else{
var topShell=$wt.widgets.Display.getTopShell();
if(topShell!=null){
topShell.bringToTop();
}else{
if(window["document.title"]!=null){
document.title=window["document.title"];
}
}}},"~B");
$_V(c$,"traverseEscape",
function(){
if(this.parent==null)return false;
if(!this.isVisible()||!this.isEnabled())return false;
this.close();
return true;
});
$_M(c$,"updateModal",
function(){
});
c$.$Shell$1$=function(){
$_H();
c$=$_W($wt.widgets,"Shell$1",null,Runnable);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Shell"].display.taskBar.updateLayout();
});
c$=$_P();
};
c$.$Shell$2$=function(){
$_H();
c$=$_W($wt.widgets,"Shell$2",null,Runnable);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Shell"].display.taskBar.updateLayout();
});
c$=$_P();
};

Sync2Async={};
Sync2Async.block=function(shell,oThis,runnable){
shell.addDisposeListener((function(i$,v$){
if(!$_D("Sync2Async$1")){
$_H();
c$=Sync2Async$1=function(){
$_B(this,arguments);
$_Z(this,arguments);
};
Clazz.decorateAsType(c$,"Sync2Async$1",null,$wt.events.DisposeListener);
$_M(c$,"widgetDisposed",
function(e){
var $runnable=this.f$.runnable;
var $oThis=this.f$.oThis;
window.setTimeout(function(){
$runnable.apply($oThis);
},0);

},"$wt.events.DisposeEvent");
c$=$_P();
}
return $_N(Sync2Async$1,i$,v$);
})(this,$_F("runnable",runnable,"oThis",oThis)));
shell.getDisplay().readAndDispatch();
};
});
c$=$_C(function(){
this.style=0;
this.parent=null;
this.title=null;
this.dialogShell=null;
this.dialogReturn=null;
$_Z(this,arguments);
},$wt.widgets,"Dialog");
c$.addDialog=$_M(c$,"addDialog",
function(dialog){
if($wt.widgets.Dialog.activeDialogs==null){
($t$=$wt.widgets.Dialog.activeDialogs=new Array(3),$wt.widgets.Dialog.prototype.activeDialogs=$wt.widgets.Dialog.activeDialogs,$t$);
}var length=$wt.widgets.Dialog.activeDialogs.length;
for(var i=0;i<length;i++){
if($wt.widgets.Dialog.activeDialogs[i]===dialog){
return;
}}
for(var i=0;i<length;i++){
if($wt.widgets.Dialog.activeDialogs[i]==null){
$wt.widgets.Dialog.activeDialogs[i]=dialog;
return;
}}
var newActiveDialogs=new Array(length+3);
System.arraycopy($wt.widgets.Dialog.activeDialogs,0,newActiveDialogs,0,length);
$wt.widgets.Dialog.activeDialogs[length]=dialog;
},"$wt.widgets.Dialog");
c$.removeDialog=$_M(c$,"removeDialog",
function(dialog){
if($wt.widgets.Dialog.activeDialogs==null){
return;
}var length=$wt.widgets.Dialog.activeDialogs.length;
for(var i=0;i<length;i++){
if($wt.widgets.Dialog.activeDialogs[i]===dialog){
$wt.widgets.Dialog.activeDialogs[i]=null;
return;
}}
},"$wt.widgets.Dialog");
c$.checkExistedDialogs=$_M(c$,"checkExistedDialogs",
function(shell){
if($wt.widgets.Dialog.activeDialogs==null){
return;
}for(var i=0;i<$wt.widgets.Dialog.activeDialogs.length;i++){
var dialog=$wt.widgets.Dialog.activeDialogs[i];
if(dialog!=null&&dialog.parent===shell){
dialog.dialogShell.bringToTop();
}}
},"$wt.widgets.Shell");
c$.isDialog=$_M(c$,"isDialog",
function(shell){
if($wt.widgets.Dialog.activeDialogs==null){
return false;
}for(var i=0;i<$wt.widgets.Dialog.activeDialogs.length;i++){
var dialog=$wt.widgets.Dialog.activeDialogs[i];
if(dialog!=null&&dialog.dialogShell===shell){
return true;
}}
return false;
},"$wt.widgets.Shell");
$_K(c$,
function(parent){
this.construct(parent,32768);
},"$wt.widgets.Shell");
$_K(c$,
function(parent,style){
this.checkParent(parent);
this.parent=parent;
this.style=style;
this.title="";
},"$wt.widgets.Shell,~N");
$_M(c$,"checkParent",
function(parent){
if(parent==null)this.error(4);
},"$wt.widgets.Shell");
$_M(c$,"error",
function(code){
throw"SWT.error ("+code+")";
},"~N");
$_M(c$,"getParent",
function(){
return this.parent;
});
$_M(c$,"getStyle",
function(){
return this.style;
});
$_M(c$,"getText",
function(){
return this.title;
});
$_M(c$,"setText",
function(string){
if(string==null)this.error(4);
this.title=string;
},"~S");
$_S(c$,
"activeDialogs",null);

DialogSync2Async={};
DialogSync2Async.block=function(dialog,oThis,runnable){
if(dialog==null)return;
org.eclipse.swt.widgets.Dialog.addDialog(dialog);
dialog.open();
var shell=dialog.dialogShell;
if(shell==null)return;
shell.addDisposeListener((function(i$,v$){
if(!$_D("DialogSync2Async$1")){
$_H();
c$=DialogSync2Async$1=function(){
$_B(this,arguments);
$_Z(this,arguments);
};
Clazz.decorateAsType(c$,"DialogSync2Async$1",null,$wt.events.DisposeListener);
$_M(c$,"widgetDisposed",
function(e){
org.eclipse.swt.widgets.Dialog.removeDialog(dialog);
var $runnable=this.f$.runnable;
var $oThis=this.f$.oThis;
window.setTimeout(function(){
$runnable.apply($oThis);
},0);

},"$wt.events.DisposeEvent");
c$=$_P();
}
return $_N(DialogSync2Async$1,i$,v$);
})(this,$_F("runnable",runnable,"oThis",oThis)));
shell.getDisplay().readAndDispatch();
};
