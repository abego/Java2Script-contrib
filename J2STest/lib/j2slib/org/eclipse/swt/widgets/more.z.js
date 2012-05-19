﻿/* http://j2s.sf.net/ */$_L(["$wt.widgets.Control"],"$wt.widgets.Label",["$wt.graphics.Point","$wt.internal.browser.OS"],function(){
$WTC$$.registerCSS ("$wt.widgets.Label", ".label-default {\nposition:absolute;\nleft:0;\ntop:0;\nwhite-space:nowrap;\ncursor:default;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\noverflow:hidden;\nbackground-color:buttonface;\n}\n.label-default span span {\ntext-decoration:underline;\n}\n.label-wrap {\nwhite-space:normal;\n}\n.label-border {\nborder-style:solid;\nborder-width:1px;\nborder-color:black white white black;\n}\n.label-seperator-horizontal-top {\nheight:0;\nfont-size:0;\nborder-bottom-style:solid;\nborder-bottom-width:1px;\nborder-bottom-color:#777777;\n}\n.label-seperator-horizontal-bottom {\nheight:0;\nfont-size:0;\nborder-top-style:solid;\nborder-top-width:1px;\nborder-top-color:white;\n}\n.shadow-in .label-seperator-horizontal-top {\nborder-bottom-color:white;\n}\n.shadow-in .label-seperator-horizontal-bottom {\nborder-top-color:#777777;\n}\n.shadow-none .label-seperator-horizontal-top {\nborder-style:none;\n}\n.shadow-none .label-seperator-horizontal-bottom {\nborder-style:none;\n}\n.label-seperator-vertical-left {\nposition:absolute;\nwidth:0;\nheight:100%;\nfont-size:0;\nborder-right-style:solid;\nborder-right-width:1px;\nborder-right-color:#777777;\n}\n.label-seperator-vertical-right {\nposition:absolute;\nwidth:0;\nheight:100%;\nfont-size:0;\nborder-left-style:solid;\nborder-left-width:1px;\nborder-left-color:white;\n}\n.shadow-in .label-seperator-vertical-left {\nborder-right-color:white;\n}\n.shadow-in .label-seperator-vertical-right {\nborder-left-color:#777777;\n}\n.shadow-none .label-seperator-vertical-left {\nborder-style:none;\n}\n.shadow-none .label-seperator-vertical-right {\nborder-style:none;\n}\n.swt-widgets-label {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.text="";
this.textSizeCached=false;
this.textWidthCached=0;
this.textHeightCached=0;
this.lastColor=null;
this.image=null;
this.image2=null;
$_Z(this,arguments);
},$wt.widgets,"Label",$wt.widgets.Control);
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
style|=524288;
if((style&2)!=0){
style=$wt.widgets.Widget.checkBits(style,512,256,0,0,0,0);
return $wt.widgets.Widget.checkBits(style,8,4,32,0,0,0);
}return $wt.widgets.Widget.checkBits(style,16384,16777216,131072,0,0,0);
},"~N");
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var width=0;
var height=0;
var border=this.getBorderWidth();
if((this.style&2)!=0){
var lineWidth=1;
if((this.style&256)!=0){
width=64;
height=lineWidth*2;
}else{
width=lineWidth*2;
height=64;
}if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
width+=border*2;
height+=border*2;
return new $wt.graphics.Point(width,height);
}if(this.text!=null){
if((this.style&64)!=0&&wHint!=-1&&hHint==-1){
height=O$.getStringStyledWrappedHeight(this.text,"label-default",this.handle.style.cssText,wHint);
}else{
if(!this.textSizeCached||changed){
var cssSize=O$.getStringStyledSize(this.text,"label-default",this.handle.style.cssText);
this.textSizeCached=true;
this.textWidthCached=cssSize.x;
this.textHeightCached=cssSize.y;
}width=this.textWidthCached;
height=this.textHeightCached;
}}if(this.image!=null){
var imageSize=O$.getImageSize(this.image);
width+=imageSize.x;
height=Math.max(imageSize.y,height);
}if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
width+=border*2;
height+=border*2;
return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_M(c$,"getAlignment",
function(){
if((this.style&2)!=0)return 0;
if((this.style&16384)!=0)return 16384;
if((this.style&16777216)!=0)return 16777216;
if((this.style&131072)!=0)return 131072;
return 16384;
});
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
if((this.style&2)!=0)return"";
return this.text;
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.Label,"releaseWidget",[]);
if(this.image2!=null)this.image2.dispose();
this.image2=null;
this.text=null;
this.image=null;
});
$_M(c$,"setAlignment",
function(alignment){
if((this.style&2)!=0)return;
if((alignment&(16924672))==0)return;
this.style&=-16924673;
this.style|=alignment&(16924672);
if((this.style&16384)!=0){
this.handle.style.textAlign="left";
this.handle.style.backgroundPosition="left center";
}else if((this.style&16777216)!=0){
this.handle.style.textAlign="center";
this.handle.style.backgroundPosition="center center";
}else if((this.style&131072)!=0){
this.handle.style.textAlign="right";
this.handle.style.backgroundPosition="right center";
}},"~N");
$_M(c$,"setImage",
function(image){
if(image==null)return;
if((this.style&2)!=0)return;
this.image=image;
if(image==null){
this.handle.style.backgroundImage="";
if(O$.isIENeedPNGFix&&this.handle.style.filter!=null){
this.handle.style.filter="";
}return;
}if(this.image.handle==null&&this.image.url!=null&&this.image.url.length!=0){
var handleStyle=this.handle.style;
if(O$.isIENeedPNGFix&&image.url.toLowerCase().endsWith(".png")&&handleStyle.filter!=null){
handleStyle.backgroundImage="";
handleStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+this.image.url+"\", sizingMethod=\"image\")";
}else{
if(O$.isIENeedPNGFix&&handleStyle.filter!=null)handleStyle.filter="";
handleStyle.backgroundRepeat="no-repeat";
handleStyle.backgroundPosition="left center";
handleStyle.backgroundImage="url(\""+this.image.url+"\")";
}}else if(this.handle.childNodes.length==0){
if(image.handle==null)return;
for(var i=0;i<image.handle.childNodes.length;i++){
this.handle.appendChild(image.handle.childNodes[i]);
}
}else{
if(image.handle==null)return;
var txt=this.handle.childNodes[0];
for(var i=0;i<image.handle.childNodes.length;i++){
this.handle.insertBefore(image.handle.childNodes[i],txt);
}
}},"$wt.graphics.Image");
$_M(c$,"setText",
function(string){
if((this.style&2)!=0)return;
if(this.image!=null){
this.handle.style.backgroundImage="";
if(O$.isIE&&this.image.url!=null&&this.image.url.toLowerCase().endsWith(".png")&&this.handle.style.filter!=null){
this.handle.style.filter="";
}}if(string===this.text){
return;
}this.textSizeCached=false;
this.text=string;
O$.clearChildren(this.handle);
O$.insertText(this.handle,this.text);
},"~S");
$_V(c$,"createHandle",
function(){
this.handle=d$.createElement("DIV");
this.handle.className="label-default";
if((this.style&2)!=0){
if((this.style&4)!=0){
this.handle.className+=" shadow-in";
}else if((this.style&32)!=0){
this.handle.className+=" shadow-none";
}else{
this.handle.className+=" shadow-out";
}this.handle.style.fontSize="0";
var seperator1=d$.createElement("DIV");
var seperator2=d$.createElement("DIV");
if((this.style&256)!=0){
seperator1.className="label-seperator-horizontal-top";
seperator2.className="label-seperator-horizontal-bottom";
}else{
seperator1.className="label-seperator-vertical-left";
seperator2.className="label-seperator-vertical-right";
}this.handle.appendChild(seperator1);
this.handle.appendChild(seperator2);
}if((this.style&64)!=0){
this.handle.className+=" label-wrap";
}if((this.style&2048)!=0){
this.handle.className+=" label-border";
}if(this.parent!=null){
var parentHandle=this.parent.containerHandle();
if(parentHandle!=null){
parentHandle.appendChild(this.handle);
}}O$.setTextSelection(this.handle,false);
});
$_M(c$,"setBounds",
function(x,y,width,height){
$_U(this,$wt.widgets.Label,"setBounds",[x,y,width,height]);
if((this.style&2)!=0){
var handleStyle=this.handle.childNodes[0].style;
if((this.style&256)!=0){
var h=(Math.floor(height/2))-1;
if(O$.isIE){
h--;
}handleStyle.marginTop=h+"px";
handleStyle.width=width+"px";
this.handle.childNodes[1].style.width=width+"px";
}else{
handleStyle.marginLeft=((Math.floor(width/2))-1)+"px";
handleStyle.height=height+"px";
this.handle.childNodes[1].style.marginLeft=(Math.floor(width/2))+"px";
this.handle.childNodes[1].style.height=height+"px";
}}},"~N,~N,~N,~N");
$_M(c$,"setEnabled",
function(enabled){
$_U(this,$wt.widgets.Label,"setEnabled",[enabled]);
if(!enabled){
this.lastColor=this.handle.style.color;
this.handle.style.color="gray";
}else{
this.handle.style.color=this.lastColor;
this.lastColor=null;
}},"~B");
$_M(c$,"setForeground",
function(color){
$_U(this,$wt.widgets.Label,"setForeground",[color]);
if(this.lastColor!=null){
this.lastColor=this.handle.style.color;
}},"$wt.graphics.Color");
$_M(c$,"setFont",
function(font){
this.textSizeCached=false;
$_U(this,$wt.widgets.Label,"setFont",[font]);
},"$wt.graphics.Font");
});
$_L(["$wt.widgets.Control"],"$wt.widgets.Button",["java.lang.Character","$wt.graphics.Color","$.Point","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.internal.dnd.HTMLEventWrapper","$wt.widgets.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.Button", ".button-default {\nposition:absolute;\nwhite-space:nowrap;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\nmargin:0;\npadding:0;\noverflow:hidden;\ncursor:default;\n}\n.button-border {\nborder:2px inset white;\n}\n.button-flat .button-push {\nborder:2px solid buttonshadow;\n}\n.button-flat .button-toggle {\nborder:2px solid buttonshadow;\n}\n.button-flat .button-arrow {\nborder:2px solid buttonshadow;\n}\n.button-push, .button-toggle, .button-arrow {\nposition:absolute;\nwhite-space:nowrap;\nfont-family:inherit;\nfont-size:1em;\nfont-size:inherit;\nmargin:0;\npadding:0;\nwidth:100%;\nheight:100%;\n}\n* html .button-push {\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:1em;\n}\n* html .button-toggle {\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:1em;\n}\n.button-push-safari, .button-toggle-safari {\nheight:auto !important;\ntop:-0.9em;\nmargin-top:50%;\npadding:0.25em 0 0.35em 0;\n}\n.button-arrow-safari {\nheight:auto !important;\ntop:-0.7em;\nmargin-top:50%;\npadding:0.25em 0 0.35em 0;\n}\nbody:nth-of-type(1) .button-push-chrome,\nbody:nth-of-type(1) .button-toggle-chrome,\nbody:nth-of-type(1) .button-arrow-chrome {\ntop:auto;\nmargin:0 !important;\npadding:0 !important;\nheight:100% !important;\n}\n.button-check .button-input-wrapper {\nfloat:left;\nposition:relative;\n/*bottom:-0.5em;*/\nmargin-top:4px;\n_bottom:-0.5em;\n_margin-top:auto;\n}\n.button-radio .button-input-wrapper {\nfloat:left;\nposition:relative;\n/*bottom:-0.5em;*/\nmargin-top:4px;\n_bottom:-0.5em;\n_margin-top:auto;\n}\n.button-text {\nposition:relative;\n/*padding-left:2px;*/\ncursor:default;\n}\n* html .button-text {\npadding-left:0;\n}\n.button-disabled .button-text {\ncolor:gray !important;\n}\n.button-input-wrapper INPUT {\nposition:relative;\ntop:-6px;\nmargin:3px;\nmargin-left:0;\n/*margin-right:0;*/\npadding-left:0;\npadding-right:0;\n}\n* html .button-input-wrapper INPUT {\nleft:-1px;\ntop:-3px;\nmargin-top:0;\n_left:0;\n_top:-5px;\n_margin-top:auto;\nwidth:13px;\nheight:13px;\noverflow:hidden;\n}\n@media all and (min-width:0px){/* opera */\n.button-input-wrapper INPUT {\nleft:0;\ntop:-4px;\nmargin-top:0;\nwidth:13px;\nheight:13px;\nmargin-right:2px;\noverflow:hidden;\n}\n}\n.button-selected {\nborder-style:inset;\nbackground-color:#eee7e0;\n}\n.button-arrow-left {\nmargin:auto;\nheight:0;\nwidth:0;\nfont-size:0;\nline-height:0;\nborder-style:solid solid solid none;\nborder-color:transparent;\nborder-right-color:black !important;\nborder-left-width:0;\n}\n.button-arrow-right {\nmargin:auto;\nheight:0;\nwidth:0;\nfont-size:0;\nline-height:0;\nborder-style:solid none solid solid;\nborder-color:transparent;\nborder-left-color:black !important;\nborder-right-width:0;\n}\n.button-arrow-up {\nmargin:auto;\nheight:0;\nwidth:0;\nfont-size:0;\nline-height:0;\nborder-style:none solid solid solid;\nborder-color:transparent;\nborder-bottom-color:black !important;\nborder-top-width:0;\n}\n.button-arrow-down {\nmargin:auto;\nheight:0;\nwidth:0;\nfont-size:0;\nline-height:0;\nborder-style:solid solid none solid;\nborder-color:transparent;\nborder-top-color:black !important;\nborder-bottom-width:0;\n}\n* html .button-arrow-left, * html .button-arrow-right, * html .button-arrow-up, * html .button-arrow-down {\nborder-color:buttonface;\n}\n.button-disabled .button-arrow-left {\nborder-right-color:gray !important;\n}\n.button-disabled .button-arrow-right {\nborder-left-color:gray !important;\n}\n.button-disabled .button-arrow-up {\nborder-bottom-color:gray !important;\n}\n.button-disabled .button-arrow-down {\nborder-top-color:gray !important;\n}\n.button-default span {\ncursor:default;\n}\n.button-text-mnemonics {\ntext-decoration:underline;\n}\n.swt-widgets-button {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.text="";
this.textSizeCached=false;
this.textWidthCached=0;
this.textHeightCached=0;
this.lastColor=null;
this.hasImage=false;
this.image=null;
this.image2=null;
this.imageList=null;
this.ignoreMouse=false;
this.btnText=null;
this.btnHandle=null;
this.hSelectionHandler=null;
this.hSelectionKeyDown=null;
$_Z(this,arguments);
},$wt.widgets,"Button",$wt.widgets.Control);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.Button,[parent,$wt.widgets.Button.checkStyle(style)]);
},"$wt.widgets.Composite,~N");
$_M(c$,"_setImage",
function(image){
},"$wt.graphics.Image");
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
style=$wt.widgets.Widget.checkBits(style,8,4,32,16,2,0);
if((style&(10))!=0){
return $wt.widgets.Widget.checkBits(style,16777216,16384,131072,0,0,0);
}if((style&(48))!=0){
return $wt.widgets.Widget.checkBits(style,16384,131072,16777216,0,0,0);
}if((style&4)!=0){
style|=524288;
return $wt.widgets.Widget.checkBits(style,128,1024,16384,131072,0,0);
}return style;
},"~N");
$_M(c$,"click",
function(){
this.ignoreMouse=true;
this.ignoreMouse=false;
});
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var border=this.getBorderWidth();
var width=0;
var height=0;
if((this.style&4)!=0){
if((this.style&(1152))!=0){
width+=16;
height+=16;
}else{
width+=16;
height+=16;
}if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
width+=border*2;
height+=border*2;
return new $wt.graphics.Point(width,height);
}var extra=0;
if(this.text==null||this.text.length==0){
height+=O$.getStringStyledHeight(".","button-default",null);
}else{
if(!this.textSizeCached||changed){
var string=this.text.replaceAll("[\r\n]+","");
var cssSize=O$.getStringStyledSize(string,"button-default",this.handle.style.cssText);
this.textSizeCached=true;
this.textWidthCached=cssSize.x;
this.textHeightCached=cssSize.y;
}width=this.textWidthCached;
height=this.textHeightCached;
if((this.style&(48))!=0){
width-=5;
}extra=Math.max(8,height);
}if(this.image!=null){
var imageSize=O$.getImageSize(this.image);
width+=imageSize.x;
if(this.text!=null&&this.text.length!=0){
width+=8;
}height=Math.max(imageSize.y,height);
extra=8;
}if((this.style&(48))!=0){
width+=13+extra;
height=Math.max(height,16);
}if((this.style&(10))!=0){
width+=12;
height+=10;
}if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
width+=border*2;
height+=border*2;
return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_V(c$,"createHandle",
function(){
this.handle=d$.createElement("DIV");
var cssName="button-default";
if((this.style&2048)!=0){
cssName+=" button-border";
}if((this.style&8388608)!=0){
cssName+=" button-flat";
}this.handle.className=cssName;
if(this.parent!=null){
var parentHandle=this.parent.containerHandle();
if(parentHandle!=null){
parentHandle.appendChild(this.handle);
}}if((this.style&(48))!=0){
var btnEl=d$.createElement("DIV");
this.handle.appendChild(btnEl);
var btnWrapperEl=d$.createElement("DIV");
btnWrapperEl.className="button-input-wrapper";
if(O$.isIE70){
btnWrapperEl.style.marginTop="-2px";
btnWrapperEl.style.marginLeft="-4px";
}btnEl.appendChild(btnWrapperEl);
this.btnHandle=d$.createElement("INPUT");
if((this.style&32)!=0){
btnEl.className="button-check";
this.btnHandle.type="checkbox";
}else{
btnEl.className="button-radio";
this.btnHandle.type="radio";
}if(O$.isIE&&!O$.isIE80){
btnWrapperEl.style.bottom="-0.5em";
}btnWrapperEl.appendChild(this.btnHandle);
this.btnText=d$.createElement("DIV");
this.btnText.className="button-text";
btnEl.appendChild(this.btnText);
if(O$.isIE80){
this.btnText.style.paddingTop=((this.style&16)!=0)?"2px":"1px";
}}else{
this.btnHandle=d$.createElement("BUTTON");
this.handle.appendChild(this.btnHandle);
this.btnText=d$.createElement("DIV");
this.btnHandle.appendChild(this.btnText);
if((this.style&2)!=0){
this.btnHandle.className="button-toggle";
}else if((this.style&4)!=0){
this.btnHandle.className="button-arrow";
this.updateArrowStyle();
}else{
this.btnHandle.className="button-push";
}if(O$.isChrome){
this.btnHandle.className+=" "+this.btnHandle.className+"-chrome";
}else if(O$.isSafari){
var isSafari4Plus=false;
{
var ua=navigator.userAgent;
var verIdx=ua.indexOf("Version/");
if(verIdx!=-1){
var verStr=ua.substring(verIdx+8);
var verNumber=parseFloat(verStr);
isSafari4Plus=verNumber>=4.0
}
}if(!isSafari4Plus){
this.btnHandle.className+=" "+this.btnHandle.className+"-safari";
}}}this.hookSelection();
O$.setTextSelection(this.handle,false);
});
$_V(c$,"enableWidget",
function(enabled){
this.btnHandle.disabled=!enabled;
O$.updateCSSClass(this.handle,"button-disabled",!enabled);
O$.updateCSSClass(this.btnHandle,"button-disabled",!enabled);
},"~B");
$_M(c$,"getAlignment",
function(){
if((this.style&4)!=0){
if((this.style&128)!=0)return 128;
if((this.style&1024)!=0)return 1024;
if((this.style&16384)!=0)return 16384;
if((this.style&131072)!=0)return 131072;
return 128;
}if((this.style&16384)!=0)return 16384;
if((this.style&16777216)!=0)return 16777216;
if((this.style&131072)!=0)return 131072;
return 16384;
});
$_V(c$,"getBorderWidth",
function(){
if((this.style&2048)!=0){
return 2;
}return 0;
});
$_M(c$,"getDefault",
function(){
if((this.style&8)==0)return false;
return false;
});
$_M(c$,"getImage",
function(){
return this.image;
});
$_V(c$,"getNameText",
function(){
return this.getText();
});
$_M(c$,"getSelection",
function(){
if((this.style&(50))==0)return false;
if((this.style&2)!=0){
return O$.existedCSSClass(this.btnHandle,"button-selected");
}else if((this.style&(48))!=0){
return this.btnHandle.checked;
}return false;
});
$_M(c$,"getText",
function(){
if((this.style&4)!=0)return"";
return this.text;
});
$_V(c$,"isEnabled",
function(){
return!this.btnHandle.disabled;
});
$_V(c$,"mnemonicHit",
function(ch){
if(!this.setFocus())return false;
if((this.style&16)==0)this.click();
return true;
},"~N");
$_V(c$,"mnemonicMatch",
function(key){
var mnemonic=this.findMnemonic(this.getText());
if((mnemonic).charCodeAt(0)==('\0').charCodeAt(0))return false;
return(Character.toUpperCase(key)).charCodeAt(0)==(Character.toUpperCase(mnemonic)).charCodeAt(0);
},"~N");
$_M(c$,"releaseHandle",
function(){
if(this.hSelectionKeyDown!=null){
Clazz.removeEvent(this.handle,"keydown",this.hSelectionKeyDown);
this.hSelectionKeyDown=null;
}if(this.hSelectionHandler!=null){
if((this.style&(48))!=0){
Clazz.removeEvent(this.btnHandle,"click",this.hSelectionHandler);
Clazz.removeEvent(this.btnText,"click",this.hSelectionHandler);
Clazz.removeEvent(this.btnText,"dblclick",this.hSelectionHandler);
}else{
Clazz.removeEvent(this.handle,"click",this.hSelectionHandler);
Clazz.removeEvent(this.handle,"dblclick",this.hSelectionHandler);
}this.hSelectionHandler=null;
}if(this.btnText!=null){
if(this.hMouseEnter!=null){
Clazz.removeEvent(this.btnText,"mouseover",this.hMouseEnter);
}if(this.hMouseExit!=null){
Clazz.removeEvent(this.btnText,"mouseout",this.hMouseExit);
}if(this.hMouseMove!=null){
Clazz.removeEvent(this.btnText,"mousemove",this.hMouseMove);
}O$.destroyHandle(this.btnText);
this.btnText=null;
}if(this.btnHandle!=null){
if(this.hMouseEnter!=null){
Clazz.removeEvent(this.btnHandle,"mouseover",this.hMouseEnter);
}if(this.hMouseExit!=null){
Clazz.removeEvent(this.btnHandle,"mouseout",this.hMouseExit);
}if(this.hMouseMove!=null){
Clazz.removeEvent(this.btnHandle,"mousemove",this.hMouseMove);
}O$.destroyHandle(this.btnHandle);
this.btnHandle=null;
}$_U(this,$wt.widgets.Button,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.Button,"releaseWidget",[]);
if(this.imageList!=null)this.imageList.dispose();
this.imageList=null;
if(this.image2!=null)this.image2.dispose();
this.image2=null;
this.text=null;
this.image=null;
});
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"selectRadio",
function(){
var children=this.parent._getChildren();
for(var i=0;i<children.length;i++){
var child=children[i];
if(this!==child)child.setRadioSelection(false);
}
this.setSelection(true);
});
$_M(c$,"setAlignment",
function(alignment){
if((this.style&4)!=0){
if((this.style&(148608))==0)return;
this.style&=-148609;
this.style|=alignment&(148608);
this.updateArrowStyle();
var cx=this.width;
var cy=this.height;
if((this.style&2048)!=0){
cx-=4;
cy-=4;
}O$.updateArrowSize(this.btnText,this.style,cx,cy);
return;
}if((alignment&(16924672))==0)return;
this.style&=-16924673;
this.style|=alignment&(16924672);
if((this.style&(10))!=0){
var handleStyle=null;
handleStyle=this.btnText.style;
if((this.style&16384)!=0){
this.btnText.style.textAlign="left";
handleStyle.backgroundPosition="left center";
}else if((this.style&16777216)!=0){
this.btnText.style.textAlign="center";
handleStyle.backgroundPosition="center center";
}else if((this.style&131072)!=0){
this.btnText.style.textAlign="right";
handleStyle.backgroundPosition="right center";
}if(this.text!=null&&this.text.trim().length!=0){
handleStyle.backgroundPosition="left center";
}}},"~N");
$_M(c$,"setDefault",
function(value){
if((this.style&8)==0)return;
if(value){
O$.SetFocus(this.handle);
}},"~B");
$_M(c$,"setFixedFocus",
function(){
if((this.style&16)!=0&&!this.getSelection())return false;
return $_U(this,$wt.widgets.Button,"setFixedFocus",[]);
});
$_V(c$,"setForeground",
function(color){
if(color!=null){
this.btnHandle.style.color=color.getCSSHandle();
this.btnText.style.color=color.getCSSHandle();
}else{
this.btnHandle.style.color="";
this.btnText.style.color="";
}if(this.lastColor!=null){
this.lastColor=this.btnHandle.style.color;
}},"$wt.graphics.Color");
$_V(c$,"setBackground",
function(color){
if(color!=null){
this.handle.style.backgroundColor=color.getCSSHandle();
}else{
this.handle.style.backgroundColor="";
}},"$wt.graphics.Color");
$_V(c$,"getBackground",
function(){
var bg=this.btnHandle.style.backgroundColor;
if(bg==null||(""+bg).length==0){
return new $wt.graphics.Color(this.display,"menu");
}return new $wt.graphics.Color(this.display,bg);
});
$_V(c$,"getForeground",
function(){
var fg=this.btnHandle.style.color;
if(fg==null||(""+fg).length==0){
return new $wt.graphics.Color(this.display,"black");
}return new $wt.graphics.Color(this.display,this.handle.style.color);
});
$_M(c$,"setImage",
function(image){
if((this.style&4)!=0)return;
if(image==null){
this.hasImage=false;
this.btnText.style.backgroundImage="";
if(O$.isIENeedPNGFix&&this.btnText.style.filter!=null){
this.btnText.style.filter="";
}return;
}this.image=image;
this.hasImage=true;
if(this.image.handle==null&&this.image.url!=null&&this.image.url.length!=0){
this.btnText.style.display="";
this.btnText.style.paddingTop="";
this.btnHandle.style.top="";
var handleStyle=null;
handleStyle=this.btnText.style;
O$.getImageSize(this.image);
if((this.style&(48))!=0){
if(!O$.isIE){
handleStyle.marginLeft="16px";
handleStyle.paddingLeft=(this.image.width+3)+"px";
}else{
handleStyle.marginLeft="13px";
}}else{
if(!O$.isSafari||O$.isChrome){
if(O$.isIE){
handleStyle.marginLeft="3px";
}else{
handleStyle.marginLeft="1px";
}}else{
if(this.text!=null&&this.text.length>0){
handleStyle.marginLeft="6px";
}else{
handleStyle.marginLeft="4px";
}}handleStyle.paddingLeft=(this.image.width+1)+"px";
}handleStyle.minHeight=this.image.height+"px";
if(O$.isIE&&(this.style&(58))!=0){
handleStyle.height=this.image.height+"px";
}if(O$.isIENeedPNGFix&&image.url!=null&&image.url.toLowerCase().endsWith(".png")&&handleStyle.filter!=null){
handleStyle.backgroundImage="";
handleStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+this.image.url+"\", sizingMethod=\"image\")";
}else{
if(O$.isIENeedPNGFix&&handleStyle.filter!=null)handleStyle.filter="";
handleStyle.backgroundRepeat="no-repeat";
var bgXPos="center";
if((this.style&131072)!=0){
bgXPos="right";
}else if((this.style&16777216)!=0){
bgXPos="center";
if(this.text!=null&&this.text.trim().length!=0){
bgXPos="left";
}}else{
bgXPos="left";
}handleStyle.backgroundPosition=bgXPos+" center";
handleStyle.backgroundImage="url(\""+this.image.url+"\")";
}if(this.text==null||this.text.length==0){
this.btnText.appendChild(d$.createTextNode("\u00a0"));
}}else if(this.image!=null){
this.image.draw(this.btnHandle);
}if(O$.isIE&&(this.style&(48))!=0){
if(O$.isIE70||O$.isIE80){
this.btnHandle.parentNode.style.marginTop="-3px";
}else{
this.btnHandle.parentNode.style.marginTop="1px";
}}},"$wt.graphics.Image");
$_V(c$,"setRadioFocus",
function(){
if((this.style&16)==0||!this.getSelection())return false;
return this.setFocus();
});
$_M(c$,"setRadioSelection",
function(value){
if((this.style&16)==0)return false;
if(this.getSelection()!=value){
this.setSelection(value);
this.postEvent(13);
}return true;
},"~B");
$_M(c$,"setSavedFocus",
function(){
if((this.style&16)!=0&&!this.getSelection())return false;
return $_U(this,$wt.widgets.Button,"setSavedFocus",[]);
});
$_M(c$,"setSelection",
function(selected){
if((this.style&(50))==0)return;
if((this.style&2)!=0){
O$.updateCSSClass(this.btnHandle,"button-selected",selected);
}else if((this.style&(48))!=0){
this.btnHandle.checked=selected;
}},"~B");
$_M(c$,"setText",
function(string){
if((this.style&4)!=0)return;
if(string!==this.text){
this.textSizeCached=false;
}O$.clearChildren(this.btnText);
this.text=string;
string=string.replaceAll("[\r\n]+","").replaceAll("(&(&))","$2");
var idx=string.indexOf('&');
if(idx==-1){
this.btnText.appendChild(d$.createTextNode(string));
}else{
this.btnText.appendChild(d$.createTextNode(string.substring(0,idx)));
var underline=d$.createElement("SPAN");
underline.appendChild(d$.createTextNode(string.substring(idx+1,idx+2)));
underline.className="button-text-mnemonics";
this.btnText.appendChild(underline);
this.btnText.appendChild(d$.createTextNode(string.substring(idx+2)));
}if(O$.isIE&&(this.style&(48))!=0){
if(O$.isIE70){
this.btnHandle.parentNode.style.marginTop=this.text.length==0?"-5px":"-6px";
}else if((this.style&16)!=0){
this.btnHandle.parentNode.style.marginTop=this.text.length==0?"0":"2px";
}else{
this.btnHandle.parentNode.style.marginTop=this.text.length==0?"-1px":"1px";
}}},"~S");
$_V(c$,"SetWindowPos",
function(hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags){
if((this.style&2048)!=0){
cx-=4;
cy-=4;
}if((this.style&4)!=0){
O$.updateArrowSize(this.btnText,this.style,cx,cy);
}if((this.style&(48))!=0){
var h=0;
if(this.textSizeCached&&!O$.isIE80){
this.btnText.style.display="block";
if(this.textHeightCached<13){
this.btnText.style.paddingTop=(Math.floor((13-this.textHeightCached)/2))+"px";
this.btnHandle.parentNode.style.bottom="0";
this.btnHandle.parentNode.style.top="0";
this.btnHandle.style.top="0";
}else{
this.btnText.style.paddingTop="0";
}}h=this.textHeightCached;
if(this.hasImage){
h=Math.max(this.image.height,h);
}h=Math.max(16,h);
if(h<cy){
this.btnText.parentNode.style.position="relative";
this.btnText.parentNode.style.top=(Math.floor((cy-h)/2))+"px";
}}var el=hWnd;
el.style.left=X+"px";
el.style.top=Y+"px";
el.style.width=(cx>0?cx:0)+"px";
el.style.height=(cy>0?cy:0)+"px";
return true;
},"~O,~O,~N,~N,~N,~N,~N");
$_M(c$,"setCursor",
function(cursor){
if(this.handle!=null){
this.handle.style.cursor=cursor.handle;
}},"$wt.graphics.Cursor");
$_M(c$,"updateArrowStyle",
($fz=function(){
if((this.style&16384)!=0){
this.btnText.className="button-arrow-left";
}else if((this.style&131072)!=0){
this.btnText.className="button-arrow-right";
}else if((this.style&128)!=0){
this.btnText.className="button-arrow-up";
}else if((this.style&1024)!=0){
this.btnText.className="button-arrow-down";
}else{
this.btnText.className="button-arrow-up";
}},$fz.isPrivate=true,$fz));
$_V(c$,"hookSelection",
function(){
if(this.hSelectionHandler!=null){
return;
}this.hSelectionHandler=$_Q((($_D("$wt.widgets.Button$1")?0:org.eclipse.swt.widgets.Button.$Button$1$()),$_N($wt.widgets.Button$1,this,null)));
if((this.style&(48))!=0){
Clazz.addEvent(this.btnHandle,"click",this.hSelectionHandler);
Clazz.addEvent(this.btnText,"click",this.hSelectionHandler);
Clazz.addEvent(this.btnText,"dblclick",this.hSelectionHandler);
}else{
Clazz.addEvent(this.handle,"click",this.hSelectionHandler);
Clazz.addEvent(this.handle,"dblclick",this.hSelectionHandler);
}this.hSelectionKeyDown=$_Q((($_D("$wt.widgets.Button$2")?0:org.eclipse.swt.widgets.Button.$Button$2$()),$_N($wt.widgets.Button$2,this,null)));
Clazz.addEvent(this.handle,"keydown",this.hSelectionKeyDown);
});
$_M(c$,"hookMouseEnter",
function(){
$_U(this,$wt.widgets.Button,"hookMouseEnter",[]);
Clazz.addEvent(this.btnHandle,"mouseover",this.hMouseEnter);
Clazz.addEvent(this.btnText,"mouseover",this.hMouseEnter);
});
$_M(c$,"hookMouseExit",
function(){
$_U(this,$wt.widgets.Button,"hookMouseExit",[]);
Clazz.addEvent(this.btnHandle,"mouseout",this.hMouseExit);
Clazz.addEvent(this.btnText,"mouseout",this.hMouseExit);
});
$_M(c$,"hookMouseMove",
function(){
$_U(this,$wt.widgets.Button,"hookMouseMove",[]);
Clazz.addEvent(this.btnHandle,"mousemove",this.hMouseMove);
Clazz.addEvent(this.btnText,"mousemove",this.hMouseMove);
});
c$.$Button$1$=function(){
$_H();
c$=$_W($wt.widgets,"Button$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.Button"].isEnabled()){
this.toReturn(false);
return;
}if((this.b$["$wt.widgets.Button"].style&(34))!=0){
var e=this.getEvent();
if((this.b$["$wt.widgets.Button"].style&32)!=0){
if(e.srcElement!==this.b$["$wt.widgets.Button"].btnHandle&&e.target!==this.b$["$wt.widgets.Button"].btnHandle){
this.b$["$wt.widgets.Button"].setSelection(!this.b$["$wt.widgets.Button"].getSelection());
this.toReturn(false);
}else{
this.toReturn(true);
if(O$.isIE){
new $wt.internal.dnd.HTMLEventWrapper(e).stopPropagation();
}}}else{
this.b$["$wt.widgets.Button"].setSelection(!this.b$["$wt.widgets.Button"].getSelection());
}}else{
if((this.b$["$wt.widgets.Button"].style&16)!=0){
if((this.b$["$wt.widgets.Button"].parent.getStyle()&4194304)!=0){
this.b$["$wt.widgets.Button"].setSelection(!this.b$["$wt.widgets.Button"].getSelection());
}else{
this.b$["$wt.widgets.Button"].selectRadio();
}}}this.b$["$wt.widgets.Button"].postEvent(13);
});
c$=$_P();
};
c$.$Button$2$=function(){
$_H();
c$=$_W($wt.widgets,"Button$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=this.getEvent();
if(e.keyCode==32||e.keyCode==13){
this.toReturn(false);
}this.toReturn(true);
});
c$=$_P();
};
$_S(c$,
"CHECK_WIDTH",13,
"CHECK_HEIGHT",13,
"ICON_WIDTH",128,
"ICON_HEIGHT",128);
});
$_L(["$wt.widgets.Scrollable"],"$wt.widgets.Text",["$wt.graphics.Point","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.internal.dnd.HTMLEventWrapper","$wt.widgets.Event","$.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.Text", ".text-default {\nposition:absolute;\nborder-style:none;\n/*background-color:white;*/\nmargin:0;\npadding:0;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\n/*white-space:nowrap;*/\noverflow:hidden;\n}\n.text-default textarea {\n/*background-color:transparent;*/\nmargin:0;\npadding:0;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\n}\n.text-editable textarea {\n/*background-color:white;*/\n}\n.text-default input {\n/*background-color:transparent;*/\nmargin:0;\npadding:0;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\n}\n* html .text-default textarea {\nmargin-top:-1px;\n}\n* html .text-default input {\nmargin-top:-1px;\n}\n.text-editable input {\n/*background-color:white;*/\n}\ntextarea.text-ie-default {\noverflow-y:hidden;\n}\ntextarea.text-v-scroll {\noverflow:scroll;\noverflow-x:hidden;\n}\ntextarea.text-h-scroll {\noverflow:scroll;\noverflow-y:hidden;\n}\n.text-no-border {\nborder-style:none;\nbackground-color:white;\n}\ntextarea.text-no-border, input.text-no-border {\nborder-style:none;\n_padding:0 3px;\n}\n.text-default textarea {\npadding:0;\n_padding:0 1px;\n}\ninput.text-wrap {\npadding:0 3px;\n}\n.text-disabled {\nbackground-color:buttonface;\n}\ninput.text-readonly {\nbackground-color:buttonface;\n}\ntextarea.text-disabled, input.text-disabled {\nbackground-color:buttonface;\n}\n.swt-widgets-text {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.tabs=0;
this.oldStart=0;
this.oldEnd=0;
this.doubleClick=false;
this.ignoreModify=false;
this.ignoreVerify=false;
this.ignoreCharacter=false;
this.keyDownOK=false;
this.textHandle=null;
this.textValue=null;
this.lineHeight=0;
this.hTextKeyUp=null;
this.hTextKeyPress=null;
this.hTextKeyDown=null;
this.hFocus=null;
this.hModifyFocus=null;
this.hModifyBlur=null;
this.hModifyKeyUp=null;
$_Z(this,arguments);
},$wt.widgets,"Text",$wt.widgets.Scrollable);
$_V(c$,"createHandle",
function(){
this.handle=d$.createElement("DIV");
var cssName="text-default text-editable";
this.handle.className=cssName;
if(this.parent!=null){
var parentHandle=this.parent.containerHandle();
if(parentHandle!=null){
parentHandle.appendChild(this.handle);
}}this.doubleClick=true;
if((this.style&2)!=0){
this.textHandle=d$.createElement("TEXTAREA");
}else{
this.textHandle=d$.createElement("INPUT");
if((this.style&4194304)!=0){
this.textHandle.type="password";
}else{
this.textHandle.type="text";
}}this.textValue="";
var textCSSName=null;
if(O$.isIE){
textCSSName="text-ie-default";
}if((this.style&2048)==0){
if(textCSSName!=null){
textCSSName+=" text-no-border";
}else{
textCSSName="text-no-border";
}}if((this.style&64)!=0){
if(textCSSName!=null){
textCSSName+=" text-wrap";
}else{
textCSSName="text-wrap";
}}if((this.style&8)!=0){
this.textHandle.readOnly=true;
if(textCSSName!=null){
textCSSName+=" text-readonly";
}else{
textCSSName="text-readonly";
}}if((this.style&2)!=0&&(this.style&64)==0){
this.textHandle.setAttribute("wrap","off");
}if(O$.isIE70){
this.textHandle.style.marginTop="-1px";
}if((this.style&512)!=0&&(this.style&256)!=0){
this.textHandle.style.overflow="scroll";
}else{
if((this.style&512)!=0){
if(textCSSName!=null){
textCSSName+=" text-v-scroll";
}else{
textCSSName="text-v-scroll";
}}else if((this.style&256)!=0){
if(textCSSName!=null){
textCSSName+=" text-h-scroll";
}else{
textCSSName="text-h-scroll";
}}}if(textCSSName!=null){
this.textHandle.className=textCSSName;
}this.hFocus=$_Q((($_D("$wt.widgets.Text$1")?0:org.eclipse.swt.widgets.Text.$Text$1$()),$_N($wt.widgets.Text$1,this,null)));
Clazz.addEvent(this.handle,"focus",this.hFocus);
this.handle.appendChild(this.textHandle);
});
$_V(c$,"hookKeyDown",
function(){
if(this.hTextKeyDown!=null){
return;
}this.hTextKeyDown=$_Q((($_D("$wt.widgets.Text$2")?0:org.eclipse.swt.widgets.Text.$Text$2$()),$_N($wt.widgets.Text$2,this,null)));
Clazz.addEvent(this.textHandle,"keydown",this.hTextKeyDown);
this.hTextKeyPress=$_Q((($_D("$wt.widgets.Text$3")?0:org.eclipse.swt.widgets.Text.$Text$3$()),$_N($wt.widgets.Text$3,this,null)));
Clazz.addEvent(this.textHandle,"keypress",this.hTextKeyPress);
});
$_V(c$,"hookKeyUp",
function(){
if(this.hTextKeyUp!=null){
return;
}this.hTextKeyUp=$_Q((($_D("$wt.widgets.Text$4")?0:org.eclipse.swt.widgets.Text.$Text$4$()),$_N($wt.widgets.Text$4,this,null)));
Clazz.addEvent(this.textHandle,"keyup",this.hTextKeyUp);
});
$_V(c$,"hookModify",
function(){
if(this.hModifyKeyUp!=null){
return;
}this.hModifyKeyUp=$_Q((($_D("$wt.widgets.Text$5")?0:org.eclipse.swt.widgets.Text.$Text$5$()),$_N($wt.widgets.Text$5,this,null)));
Clazz.addEvent(this.textHandle,"keyup",this.hModifyKeyUp);
Clazz.addEvent(this.textHandle,"change",this.hModifyKeyUp);
this.hModifyBlur=$_Q((($_D("$wt.widgets.Text$6")?0:org.eclipse.swt.widgets.Text.$Text$6$()),$_N($wt.widgets.Text$6,this,null)));
Clazz.addEvent(this.textHandle,"blur",this.hModifyBlur);
this.hModifyFocus=$_Q((($_D("$wt.widgets.Text$7")?0:org.eclipse.swt.widgets.Text.$Text$7$()),$_N($wt.widgets.Text$7,this,null)));
Clazz.addEvent(this.textHandle,"focus",this.hModifyFocus);
});
$_M(c$,"hookMouseDoubleClick",
function(){
$_U(this,$wt.widgets.Text,"hookMouseDoubleClick",[]);
Clazz.addEvent(this.textHandle,"dblclick",this.hMouseDoubleClick);
});
$_M(c$,"hookMouseDown",
function(){
$_U(this,$wt.widgets.Text,"hookMouseDown",[]);
Clazz.addEvent(this.textHandle,"mousedown",this.hMouseDown);
});
$_M(c$,"hookMouseUp",
function(){
$_U(this,$wt.widgets.Text,"hookMouseUp",[]);
Clazz.addEvent(this.textHandle,"mouseup",this.hMouseUp);
});
$_M(c$,"addModifyListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(24,typedListener);
},"$wt.events.ModifyListener");
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
$_M(c$,"addVerifyListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(25,typedListener);
},"$wt.events.VerifyListener");
$_M(c$,"append",
function(string){
this.textHandle.value+=string;
if(string.length>0){
this.textValue=this.textHandle.value;
this.sendEvent(24);
}},"~S");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
if((style&4)!=0&&(style&2)!=0){
style&=-3;
}style=$wt.widgets.Widget.checkBits(style,16384,16777216,131072,0,0,0);
if((style&4)!=0)style&=-833;
if((style&64)!=0){
style|=2;
style&=-257;
}if((style&2)!=0)style&=-4194305;
if((style&(6))!=0)return style;
if((style&(768))!=0)return style|2;
return style|4;
},"~N");
$_M(c$,"clearSelection",
function(){
this.clearSelection(this.textHandle);
});
$_M(c$,"clearSelection",
($fz=function(handle){
var handle=arguments[0];
handle.focus();
if(typeof handle.selectionStart!="undefined"){
var start=handle.selectionStart;
handle.setSelectionRange(start,start);
}else if(document.selection){
var workRange=document.selection.createRange();
workRange.text=workRange.text;
workRange.select();
}
},$fz.isPrivate=true,$fz),"~O");
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var height=0;
var width=0;
if(wHint==-1||hHint==-1){
var size=null;
var text=this.getText();
if(text!=null&&text.length!=0){
var wrap=(this.style&2)!=0&&(this.style&64)!=0;
if(wrap&&wHint!=-1&&wHint>0){
size=new $wt.graphics.Point(wHint,O$.getStringStyledWrappedHeight(text,"text-default",this.handle.style.cssText,wHint));
}else{
text=text.replaceAll("(^\\s)|(\\s$)","\u00a0").replaceAll("\\s\\s"," \u00a0");
size=O$.getStringStyledSize(text,"text-default",this.handle.style.cssText);
}width=size.x;
height=size.y;
if(height<=0){
height=this.getLineHeight();
}}else{
width=0;
height=this.getLineHeight();
}}if(width==0)width=64;
if(height==0)height=64;
if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
var trim=this.computeTrim(0,0,width,height);
return new $wt.graphics.Point(trim.width,trim.height);
},"~N,~N,~B");
$_M(c$,"computeTrim",
function(x,y,width,height){
var rect=$_U(this,$wt.widgets.Text,"computeTrim",[x,y,width,height]);
if((this.style&2)!=0){
rect.width+=6;
}else{
rect.width+=1;
}if((this.style&256)!=0)rect.width++;
if((this.style&512)!=0){
rect.width+=16;
}if((this.style&256)!=0){
rect.height+=16;
}if((this.style&2048)!=0){
rect.x-=1;
rect.y-=1;
rect.width+=2;
rect.height+=2;
}return rect;
},"~N,~N,~N,~N");
$_M(c$,"copy",
function(){
});
$_M(c$,"createWidget",
function(){
$_U(this,$wt.widgets.Text,"createWidget",[]);
this.doubleClick=true;
this.setTabStops(this.tabs=8);
this.fixAlignment();
});
$_M(c$,"cut",
function(){
if((this.style&8)!=0)return;
});
$_M(c$,"fixAlignment",
function(){
});
$_V(c$,"getBorderWidth",
function(){
if((this.style&2048)!=0){
return 2;
}return 0;
});
$_M(c$,"getCaretLineNumber",
function(){
return this.getTextCaretLineNumber(this.textHandle);
});
$_M(c$,"getTextCaretLineNumber",
($fz=function(textHandle){
var handle=arguments[0];
var txt="";
if(typeof handle.selectionStart!="undefined"){
txt=handle.value.substring(0,handle.selectionStart);
}else if(document.selection){
handle.focus();
var workRange=document.selection.createRange();
workRange.moveStart("character",-65535);
if(workRange.htmlText!=null){
var s=workRange.htmlText;
var key=handle.nodeName;
txt=this.parseInnerText(s,key);
}else{
txt=workRange.text;
}
}
return txt.split(/\r\n|\r|\n/g).length;
},$fz.isPrivate=true,$fz),"~O");
$_M(c$,"parseInnerText",
function(s,key){
var s=arguments[0];
var key=arguments[1];
var idx1=s.lastIndexOf("</"+key+">");
if(idx1!=-1){
var idx2=s.lastIndexOf("<"+key,idx1);
if(idx2!=-1){
var idx3=s.indexOf(">",idx2);
if(idx3!=-1){
s=s.substring(idx3+1,idx1);
s=s.replace(/&gt;/g,">")
.replace(/&lt;/g,"<")
.replace(/&quot;/g,"\"")
.replace(/&apos;/g,"\'")
.replace(/&nbsp;/g," ")
.replace(/&amp;/g,"&");

return s;
}
}
}
return null;
},"~S,~S");
$_M(c$,"getCaretLocation",
function(){
return new $wt.graphics.Point(0,0);
});
$_M(c$,"getCaretPosition",
function(){
return this.getTextCaretPosition(this.textHandle);
});
$_M(c$,"getTextCaretPosition",
($fz=function(handle){
var handle=arguments[0];
if(typeof handle.selectionStart!="undefined"){
return handle.selectionStart;
}else if(document.selection){
handle.focus();
var workRange=document.selection.createRange();
workRange.moveStart("character",-32767);
if(workRange.htmlText!=null){
var s=workRange.htmlText;
var key=handle.nodeName;
var txt=this.parseInnerText(s,key);
if(txt!=null){
return txt.length;
}
}
return workRange.text.length;
}
return-1;
},$fz.isPrivate=true,$fz),"~O");
$_M(c$,"getTextCaretPositionEnd",
function(handle){
var handle=arguments[0];
if(typeof handle.selectionEnd!="undefined"){
return handle.selectionEnd;
}else if(document.selection){
handle.focus();
var workRange=document.selection.createRange();
if(workRange.htmlText!=null){
var s=workRange.htmlText;
var key=handle.nodeName;
var txt=parseInnerText(s,key);
if(txt!=null){
return txt.length;
}
}
return workRange.text.length;
}
return-1;
},"~O");
$_M(c$,"getCharCount",
function(){
return this.textHandle.value.length;
});
$_M(c$,"getDoubleClickEnabled",
function(){
return this.doubleClick;
});
$_M(c$,"getEchoChar",
function(){
return'*';
});
$_M(c$,"getEditable",
function(){
var editableClass="text-editable";
if(this.handle.className!=null){
var idx=this.handle.className.indexOf(editableClass);
if(idx!=-1){
return true;
}}return false;
});
$_M(c$,"getLineCount",
function(){
return 0;
});
$_M(c$,"getLineDelimiter",
function(){
return"\r\n";
});
$_M(c$,"getLineHeight",
function(){
if(this.lineHeight!=-1){
this.lineHeight=O$.getStringStyledHeight(".","text-default",this.handle.style.cssText);
}return this.lineHeight;
});
$_M(c$,"getOrientation",
function(){
return this.style&(100663296);
});
$_M(c$,"getSelection",
function(){
return this.getTextSelection(this.textHandle);
});
$_M(c$,"getTextSelection",
($fz=function(textHandle){
var handle=arguments[0];
if(typeof handle.selectionStart!="undefined"){
return new org.eclipse.swt.graphics.Point(handle.selectionStart,
handle.selectionEnd);
}else if(document.selection){
return new org.eclipse.swt.graphics.Point(
this.getTextCaretPosition(handle),
this.getTextCaretPositionEnd(handle));
}
return new new org.eclipse.swt.graphics.Point(0,0);
},$fz.isPrivate=true,$fz),"~O");
$_M(c$,"getSelectionCount",
function(){
var selection=this.getSelection();
return selection.y-selection.x;
});
$_M(c$,"getSelectionText",
function(){
return this.getSelectionText(this.textHandle);
});
$_M(c$,"getSelectionText",
($fz=function(textHandle){
var handle=arguments[0];
handle.focus();
if(typeof handle.selectionStart!="undefined"){
var start=handle.selectionStart;
return handle.value.substring(start,handle.selectionEnd);
}else if(document.selection){
var workRange=document.selection.createRange();
return workRange.text;
}
return"";
},$fz.isPrivate=true,$fz),"~O");
$_M(c$,"getTabs",
function(){
return this.tabs;
});
$_M(c$,"getTabWidth",
function(tabs){
return 64;
},"~N");
$_M(c$,"getText",
function(){
return this.textHandle.value;
});
$_M(c$,"getText",
function(start,end){
var length=this.textHandle.value.length;
start=Math.max(0,start);
end=Math.min(end,length-1);
return this.getText().substring(start,end+1);
},"~N,~N");
$_M(c$,"getTextLimit",
function(){
return 0;
});
$_M(c$,"getTopIndex",
function(){
if((this.style&4)!=0)return 0;
return 0;
});
$_M(c$,"getTopPixel",
function(){
return this.getTopIndex()*this.getLineHeight();
});
$_M(c$,"insert",
function(string){
var sel=this.getTextSelection(this.textHandle);
if(this.hooks(25)||this.filters(25)){
string=this.verifyText(string,sel.x,sel.y,null);
if(string==null)return;
}this.insertTextString(this.textHandle,string);
if(this.textValue!==this.textHandle.value){
this.textValue=this.textHandle.value;
this.sendEvent(24);
}},"~S");
$_M(c$,"insertTextString",
($fz=function(textHandle,string){
var handle=arguments[0];
var str=arguments[1];
handle.focus();
if(typeof handle.selectionStart!="undefined"){
var start=handle.selectionStart;
handle.value=handle.value.substring(0,start)+str+handle.value.substring(handle.selectionEnd);
handle.setSelectionRange(start+str.length,start+str.length);
}else if(document.selection){
var workRange=document.selection.createRange();
workRange.text=str;
workRange.select();
}
},$fz.isPrivate=true,$fz),"~O,~S");
$_M(c$,"paste",
function(){
if((this.style&8)!=0)return;
});
$_M(c$,"releaseHandle",
function(){
if(this.handle!=null&&this.hFocus!=null){
Clazz.removeEvent(this.handle,"focus",this.hFocus);
this.hFocus=null;
}if(this.textHandle!=null){
if(this.hMouseDoubleClick!=null){
Clazz.removeEvent(this.textHandle,"dblclick",this.hMouseDoubleClick);
}if(this.hMouseDown!=null){
Clazz.removeEvent(this.textHandle,"mousedown",this.hMouseDown);
}if(this.hMouseUp!=null){
Clazz.removeEvent(this.textHandle,"mouseup",this.hMouseUp);
}if(this.hTextKeyUp!=null){
Clazz.removeEvent(this.textHandle,"keyup",this.hTextKeyUp);
this.hTextKeyUp=null;
}if(this.hTextKeyDown!=null){
Clazz.removeEvent(this.textHandle,"keydown",this.hTextKeyDown);
this.hTextKeyDown=null;
}if(this.hTextKeyPress!=null){
Clazz.removeEvent(this.textHandle,"keypress",this.hTextKeyPress);
this.hTextKeyPress=null;
}if(this.hModifyBlur!=null){
Clazz.removeEvent(this.textHandle,"blur",this.hModifyBlur);
this.hModifyBlur=null;
}if(this.hModifyFocus!=null){
Clazz.removeEvent(this.textHandle,"focus",this.hModifyFocus);
this.hModifyFocus=null;
}if(this.hModifyKeyUp!=null){
Clazz.removeEvent(this.textHandle,"change",this.hModifyKeyUp);
Clazz.removeEvent(this.textHandle,"keyup",this.hModifyKeyUp);
this.hModifyKeyUp=null;
}O$.destroyHandle(this.textHandle);
this.textHandle=null;
}$_U(this,$wt.widgets.Text,"releaseHandle",[]);
});
$_M(c$,"removeModifyListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(24,listener);
},"$wt.events.ModifyListener");
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"removeVerifyListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(25,listener);
},"$wt.events.VerifyListener");
$_M(c$,"selectAll",
function(){
this.textHandle.select();
});
$_M(c$,"sendKeyEvent",
function(type,msg,wParam,lParam,event){
return false;
},"~N,~N,~N,~N,$wt.widgets.Event");
$_M(c$,"setBackground",
function(color){
if(color!=null)this.textHandle.style.backgroundColor=color.getCSSHandle();
$_U(this,$wt.widgets.Text,"setBackground",[color]);
},"$wt.graphics.Color");
$_M(c$,"setDoubleClickEnabled",
function(doubleClick){
this.doubleClick=doubleClick;
},"~B");
$_M(c$,"setEchoChar",
function(echo){
if((this.style&2)!=0)return;
try{
this.textHandle.type="password";
}catch(e){
if($_O(e,Exception)){
}else{
throw e;
}
}
},"~N");
$_M(c$,"setEditable",
function(editable){
this.style&=-9;
if(!editable)this.style|=8;
this.textHandle.readOnly=!editable;
O$.updateCSSClass(this.handle,"text-editable",editable);
},"~B");
$_M(c$,"setFont",
function(font){
$_U(this,$wt.widgets.Text,"setFont",[font]);
var tmp=this.handle;
this.handle=this.textHandle;
$_U(this,$wt.widgets.Text,"setFont",[font]);
this.handle=tmp;
},"$wt.graphics.Font");
$_M(c$,"setForeground",
function(color){
if(color!=null)this.textHandle.style.color=color.getCSSHandle();
$_U(this,$wt.widgets.Text,"setForeground",[color]);
},"$wt.graphics.Color");
$_M(c$,"setOrientation",
function(orientation){
this.fixAlignment();
},"~N");
$_M(c$,"setSelection",
function(start){
this.setSelection(start,this.textHandle.value.length);
},"~N");
$_M(c$,"setSelection",
function(start,end){
$wt.widgets.Text.setTextSelection(this.textHandle,start,end);
},"~N,~N");
c$.setTextSelection=$_M(c$,"setTextSelection",
function(handle,start,end){
var handle=arguments[0];
var start=arguments[1];
var end=arguments[2];
handle.focus();
if(!(handle.setSelectionRange&&handle.createTextRange)){
var s=handle.value.substring(0,start);
var count=s.split(/\r\n|\r|\n/g).length;
start-=count;
end-=count;
s=handle.value.substring(start,end);
end-=s.split(/\r\n|\r|\n/g).length;
}
if(handle.setSelectionRange){
handle.setSelectionRange(start,end);
}else if(handle.createTextRange){
var range=handle.createTextRange();
range.collapse(true);
range.moveStart("character",start);
range.moveEnd("character",end-start+1);
range.select();
}
handle.focus();
},"~O,~N,~N");
$_M(c$,"setRedraw",
function(redraw){
$_U(this,$wt.widgets.Text,"setRedraw",[redraw]);
if(this.drawCount!=0)return;
},"~B");
$_M(c$,"setSelection",
function(selection){
this.setSelection(selection.x,selection.y);
},"$wt.graphics.Point");
$_M(c$,"setTabs",
function(tabs){
if(tabs<0)return;
this.tabs=tabs;
},"~N");
$_M(c$,"setTabStops",
function(tabs){
},"~N");
$_M(c$,"setText",
function(string){
this.textHandle.value=string;
if(this.textValue!==string){
this.textValue=string;
this.sendEvent(24);
}},"~S");
$_M(c$,"setTextLimit",
function(limit){
if(limit>32767){
}},"~N");
$_M(c$,"setTopIndex",
function(index){
if((this.style&4)!=0)return;
},"~N");
$_V(c$,"SetWindowPos",
function(hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags){
var b=0;
if((this.style&2048)!=0){
b=4;
if(O$.isFirefox30){
b=2;
}else if((this.style&2)!=0){
b=2;
if(O$.isFirefox10||O$.isFirefox20){
b=4;
}else if(O$.isIE&&!O$.isIE70&&!O$.isIE80){
b=4;
}}}this.textHandle.style.height=(cy-b>0?cy-b:0)+"px";
if((this.style&(66))!=0){
if(O$.isIE&&!O$.isIE70&&!O$.isIE80&&b!=0){
b+=2;
}else if(O$.isIE70){
b-=2;
}}this.textHandle.style.width=(cx-b>0?cx-b:0)+"px";
var el=hWnd;
el.style.left=X+"px";
el.style.top=Y+"px";
el.style.width=(cx>0?cx:0)+"px";
el.style.height=(cy>0?cy:0)+"px";
return true;
},"~O,~O,~N,~N,~N,~N,~N");
$_M(c$,"showSelection",
function(){
});
$_M(c$,"verifyText",
function(string,start,end,keyEvent){
if(this.ignoreVerify)return string;
var event=new $wt.widgets.Event();
event.text=string;
event.start=start;
event.end=end;
if(keyEvent!=null){
event.character=keyEvent.character;
event.keyCode=keyEvent.keyCode;
event.stateMask=keyEvent.stateMask;
}this.sendEvent(25,event);
if(!event.doit||this.isDisposed())return null;
return event.text;
},"~S,~N,~N,$wt.widgets.Event");
$_V(c$,"useNativeScrollBar",
function(){
return true;
});
$_M(c$,"windowClass",
function(){
return"TEXTAREA";
});
$_V(c$,"enableWidget",
function(enabled){
this.textHandle.disabled=!enabled;
O$.updateCSSClass(this.textHandle,"text-disabled",!enabled);
O$.updateCSSClass(this.handle,"text-disabled",!enabled);
},"~B");
$_M(c$,"forceFocus",
function(){
var ret=$_U(this,$wt.widgets.Text,"forceFocus",[]);
O$.SetFocus(this.textHandle);
return ret;
});
c$.$Text$1$=function(){
$_H();
c$=$_W($wt.widgets,"Text$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
O$.SetFocus(this.b$["$wt.widgets.Text"].textHandle);
});
c$=$_P();
};
c$.$Text$2$=function(){
$_H();
c$=$_W($wt.widgets,"Text$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var verifyHooked=false;
if(this.b$["$wt.widgets.Text"].hooks(25)){
verifyHooked=true;
var evt=this.getEvent();
if(!O$.isInputCharacter(evt.keyCode,evt.shiftKey,evt.altKey,evt.ctrlKey)){
this.toReturn(true);
}else{
var e=new $wt.widgets.Event();
e.character=O$.getInputCharacter(evt.keyCode,evt.shiftKey);
var txt=""+e.character;
if((e.character).charCodeAt(0)==8||(e.character).charCodeAt(0)==46){
txt="";
}e.keyCode=(e.character).charCodeAt(0);
e.stateMask=(evt.shiftKey?131072:0)|(evt.ctrlKey?262144:0);
var s=this.b$["$wt.widgets.Text"].verifyText(txt,0,0,e);
if(s==null){
this.toReturn(false);
return;
}else if(this.b$["$wt.widgets.Text"].hooks(24)){
if(this.b$["$wt.widgets.Text"].textValue!==this.b$["$wt.widgets.Text"].textHandle.value){
this.b$["$wt.widgets.Text"].textValue=this.b$["$wt.widgets.Text"].textHandle.value;
var ev=new $wt.widgets.Event();
ev.type=24;
ev.widget=this.b$["$wt.widgets.Text"];
ev.display=this.b$["$wt.widgets.Text"].display;
ev.time=this.b$["$wt.widgets.Text"].display.getLastEventTime();
this.b$["$wt.widgets.Text"].sendEvent(ev);
this.toReturn(ev.doit);
}}}}this.b$["$wt.widgets.Text"].keyDownOK=this.isReturned();
if(!verifyHooked||this.b$["$wt.widgets.Text"].hooks(1)){
var ev=new $wt.widgets.Event();
if(this.b$["$wt.widgets.Text"].textValue!==this.b$["$wt.widgets.Text"].textHandle.value){
this.b$["$wt.widgets.Text"].textValue=this.b$["$wt.widgets.Text"].textHandle.value;
ev.type=24;
ev.widget=this.b$["$wt.widgets.Text"];
ev.display=this.b$["$wt.widgets.Text"].display;
ev.time=this.b$["$wt.widgets.Text"].display.getLastEventTime();
this.b$["$wt.widgets.Text"].sendEvent(ev);
this.toReturn(ev.doit);
}var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
var evt=e.event;
var keyCode=evt.keyCode;
if(keyCode==27){
this.b$["$wt.widgets.Text"].dragStatus=false;
}var event=new $wt.widgets.Event();
event.character=O$.getInputCharacter(evt.keyCode,evt.shiftKey);
event.keyCode=(event.character).charCodeAt(0);
event.type=1;
event.display=this.b$["$wt.widgets.Text"].display;
event.stateMask=(evt.altKey?65536:0)|(evt.shiftKey?131072:0)|(evt.ctrlKey?262144:0);
event.widget=this.b$["$wt.widgets.Text"];
if(event.time==0){
event.time=this.b$["$wt.widgets.Text"].display.getLastEventTime();
}this.b$["$wt.widgets.Text"].sendEvent(event);
this.toReturn(!(!ev.doit||!event.doit));
this.b$["$wt.widgets.Text"].keyDownOK=ev.doit&&event.doit;
}});
c$=$_P();
};
c$.$Text$3$=function(){
$_H();
c$=$_W($wt.widgets,"Text$3",$wt.internal.RunnableCompatibility);
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
if(O$.isOpera){
this.toReturn(this.b$["$wt.widgets.Text"].keyDownOK);
}});
c$=$_P();
};
c$.$Text$4$=function(){
$_H();
c$=$_W($wt.widgets,"Text$4",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent());
var evt=e.event;
var keyCode=evt.keyCode;
if(keyCode==27){
this.b$["$wt.widgets.Text"].dragStatus=false;
}var event=new $wt.widgets.Event();
event.character=O$.getInputCharacter(evt.keyCode,evt.shiftKey);
event.keyCode=(event.character).charCodeAt(0);
event.type=2;
event.display=this.b$["$wt.widgets.Text"].display;
event.stateMask=(evt.altKey?65536:0)|(evt.shiftKey?131072:0)|(evt.ctrlKey?262144:0);
event.widget=this.b$["$wt.widgets.Text"];
if(event.time==0){
event.time=this.b$["$wt.widgets.Text"].display.getLastEventTime();
}this.b$["$wt.widgets.Text"].sendEvent(event);
this.toReturn(event.doit);
});
c$=$_P();
};
c$.$Text$5$=function(){
$_H();
c$=$_W($wt.widgets,"Text$5",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if((this.b$["$wt.widgets.Text"].style&8)!=0||(this.b$["$wt.widgets.Text"].hooks(25)&&!this.b$["$wt.widgets.Text"].filters(25))){
this.toReturn(true);
return;
}var newText=this.b$["$wt.widgets.Text"].textHandle.value;
if(newText!=null){
newText=this.b$["$wt.widgets.Text"].verifyText(newText,0,0,null);
if(newText==null){
this.toReturn(true);
return;
}if(this.b$["$wt.widgets.Text"].textValue!==this.b$["$wt.widgets.Text"].textHandle.value){
this.b$["$wt.widgets.Text"].textValue=this.b$["$wt.widgets.Text"].textHandle.value;
var e=new $wt.widgets.Event();
e.type=24;
e.item=this.b$["$wt.widgets.Text"];
e.widget=this.b$["$wt.widgets.Text"];
this.b$["$wt.widgets.Text"].sendEvent(e);
this.toReturn(e.doit);
}}});
c$=$_P();
};
c$.$Text$6$=function(){
$_H();
c$=$_W($wt.widgets,"Text$6",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
O$.removeCSSClass(this.b$["$wt.widgets.Text"].handle,"text-focus");
var e=new $wt.widgets.Event();
e.type=16;
e.item=this.b$["$wt.widgets.Text"];
e.widget=this.b$["$wt.widgets.Text"];
this.b$["$wt.widgets.Text"].sendEvent(e);
this.toReturn(e.doit);
});
c$=$_P();
};
c$.$Text$7$=function(){
$_H();
c$=$_W($wt.widgets,"Text$7",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
O$.addCSSClass(this.b$["$wt.widgets.Text"].handle,"text-focus");
var e=new $wt.widgets.Event();
e.type=15;
e.item=this.b$["$wt.widgets.Text"];
e.widget=this.b$["$wt.widgets.Text"];
this.b$["$wt.widgets.Text"].sendEvent(e);
this.toReturn(e.doit);
});
c$=$_P();
};
$_S(c$,
"LIMIT",0x7FFF,
"DELIMITER","\r\n");
});
$_L(["$wt.widgets.Composite"],"$wt.widgets.Group",["java.lang.Character","$wt.graphics.Rectangle","$wt.internal.browser.OS"],function(){
$WTC$$.registerCSS ("$wt.widgets.Group", ".group-default {\nposition:absolute;\nfont-family:Arial, sans-serif;\nfont-size:8pt;\noverflow:hidden;\nbackground-color:buttonface;\n}\n.group-border-default {\nborder:2px inset white;\n}\n.group-border-frame {\nposition:absolute;\nwidth:100%;\nheight:100%;\n}\n.group-title-line {\nposition:absolute;\ntop:0.5em;\nheight:0.2em;\nwidth:100%;\nborder-style:groove groove none groove;\nborder-width:2px;\nborder-color:white;\ndisplay:none;\n}\n.group-left-corner {\nposition:absolute;\nmargin-top:0.5em;\nheight:0.6em;\noverflow:hidden;\nborder-style:groove none none groove;\nborder-width:2px;\nborder-color:white;\nwidth:4px;\n}\n.group-title-text {\nposition:absolute;\nmargin:0 2px 0 8px;\ncursor:default;\n}\n.group-right-corner {\nposition:absolute;\nmargin-top:0.5em;\nheight:0.6em;\nwidth:0.75em;\noverflow:hidden;\nborder-style:groove groove none none;\nborder-width:2px;\nborder-color:white;\nright:0;\n}\n.group-side-line-left {\nposition:absolute;\nleft:0;\ntop:0.6em;\nheight:50%;\nborder-style:none none none groove;\nborder-width:2px;\nborder-color:white;\n}\n.group-side-line-right {\nposition:absolute;\nright:0;\ntop:0.6em;\nheight:50%;\nborder-style:none groove none none;\nborder-width:2px;\nborder-color:white;\n}\n.group-bottom-line-left {\nposition:absolute;\nleft:0;\nbottom:0;\nborder-style:none none groove groove;\nborder-width:2px;\nborder-color:white;\nwidth:50%;\nheight:50%;\n}\n.group-bottom-line-right {\nposition:absolute;\nright:0;\nbottom:0;\nborder-style:none groove groove none;\nborder-width:2px;\nborder-color:white;\nwidth:50%;\nheight:50%;\n}\n* html .group-bottom-line-left {\nbottom:-1px;\n}\n* html .group-bottom-line-right {\nright:-1px;\nbottom:-1px;\n}\n* html .group-side-line-right {\nright:-1px;\n}\n* html .group-right-corner {\nright:-1px;\n}\n.group-content-box {\nposition:relative;\ntop:0;\nheight:100%;\npadding-top:1em;\noverflow:hidden;\n}\n.group-content {\nfont-family:Arial, sans-serif;\nfont-size:8pt;\npadding:0 2px;\nposition:absolute;\ntop:0;\n}\n.group-no-title-text .group-title-line {\ndisplay:block;\n}\n.group-no-title-text .group-title-text {\ndisplay:none;\n}\n.group-shadow-none .group-title-line {\nborder-style:none none none none;\n}\n.group-shadow-none .group-left-corner {\nborder-style:none none none none;\n}\n.group-shadow-none .group-right-corner {\nborder-style:none none none none;\n}\n.group-shadow-none .group-side-line-left {\nborder-style:none none none none;\n}\n.group-shadow-none .group-side-line-right {\nborder-style:none none none none;\n}\n.group-shadow-none .group-bottom-line-left {\nborder-style:none none none none;\n}\n.group-shadow-none .group-bottom-line-right {\nborder-style:none none none none;\n}\n.group-shadow-out .group-title-line {\nborder-style:groove groove none groove;\n}\n.group-shadow-out .group-left-corner {\nborder-style:groove none none groove;\n}\n.group-shadow-out .group-right-corner {\nborder-style:groove groove none none;\n}\n.group-shadow-out .group-side-line-left {\nborder-style:none none none groove;\n}\n.group-shadow-out .group-side-line-right {\nborder-style:none groove none none;\n}\n.group-shadow-out .group-bottom-line-left {\nborder-style:none none groove groove;\n}\n.group-shadow-out .group-bottom-line-right {\nborder-style:none groove groove none;\n}\n.group-shadow-in .group-title-line {\nborder-style:ridge ridge none ridge;\n}\n.group-shadow-in .group-left-corner {\nborder-style:ridge none none ridge;\n}\n.group-shadow-in .group-right-corner {\nborder-style:ridge ridge none none;\n}\n.group-shadow-in .group-side-line-left {\nborder-style:none none none ridge;\n}\n.group-shadow-in .group-side-line-right {\nborder-style:none ridge none none;\n}\n.group-shadow-in .group-bottom-line-left {\nborder-style:none none ridge ridge;\n}\n.group-shadow-in .group-bottom-line-right {\nborder-style:none ridge ridge none;\n}\n.group-shadow-etched-in .group-title-line {\nborder-style:inset inset none inset;\n}\n.group-shadow-etched-in .group-left-corner {\nborder-style:inset none none inset;\n}\n.group-shadow-etched-in .group-right-corner {\nborder-style:inset inset none none;\n}\n.group-shadow-etched-in .group-side-line-left {\nborder-style:none none none inset;\n}\n.group-shadow-etched-in .group-side-line-right {\nborder-style:none inset none none;\n}\n.group-shadow-etched-in .group-bottom-line-left {\nborder-style:none none inset inset;\n}\n.group-shadow-etched-in .group-bottom-line-right {\nborder-style:none inset inset none;\n}\n.group-shadow-etched-out .group-title-line {\nborder-style:outset outset none outset;\n}\n.group-shadow-etched-out .group-left-corner {\nborder-style:outset none none outset;\n}\n.group-shadow-etched-out .group-right-corner {\nborder-style:outset outset none none;\n}\n.group-shadow-etched-out .group-side-line-left {\nborder-style:none none none outset;\n}\n.group-shadow-etched-out .group-side-line-right {\nborder-style:none outset none none;\n}\n.group-shadow-etched-out .group-bottom-line-left {\nborder-style:none none outset outset;\n}\n.group-shadow-etched-out .group-bottom-line-right {\nborder-style:none outset outset none;\n}\n.swt-widgets-group {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.groupText=null;
this.textWidth=0;
this.textHeight=0;
this.borderFrame=null;
this.titleLine=null;
this.leftCorner=null;
this.titleText=null;
this.rightCorner=null;
this.leftSide=null;
this.rightSide=null;
this.bottomLeft=null;
this.bottomRight=null;
this.contentBox=null;
this.content=null;
$_Z(this,arguments);
},$wt.widgets,"Group",$wt.widgets.Composite);
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
style|=524288;
return style&-769;
},"~N");
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var size=$_U(this,$wt.widgets.Group,"computeSize",[wHint,hHint,changed]);
var length=0;
if(this.groupText!=null){
length=this.groupText.length;
}if(length!=0){
size.x=Math.max(size.x,this.textWidth+18);
}return size;
},"~N,~N,~B");
$_M(c$,"computeTrim",
function(x,y,width,height){
var trim=$_U(this,$wt.widgets.Group,"computeTrim",[x,y,width,height]);
trim.x-=3;
if(this.textHeight<=0){
this.textHeight=O$.getStringStyledHeight(".","group-default",this.handle.style.cssText);
}trim.y-=this.textHeight;
trim.width+=6;
trim.height+=this.textHeight+3;
return trim;
},"~N,~N,~N,~N");
$_M(c$,"containerHandle",
function(){
return this.content;
});
$_M(c$,"createCSSElement",
function(parent,css){
var el=d$.createElement("DIV");
el.className=css;
(parent).appendChild(el);
return el;
},"~O,~S");
$_V(c$,"createHandle",
function(){
this.children=new Array(0);
this.state&=-3;
this.handle=d$.createElement("DIV");
if((this.style&2048)!=0){
this.handle.className="group-default group-border-default";
}else{
this.handle.className="group-default";
}if(this.parent!=null){
var parentHandle=this.parent.containerHandle();
if(parentHandle!=null){
parentHandle.appendChild(this.handle);
}}var className=null;
if((this.style&16)!=0){
className="group-shadow-etched-in";
}else if((this.style&64)!=0){
className="group-shadow-etched-out";
}else if((this.style&4)!=0){
className="group-shadow-in";
}else if((this.style&8)!=0){
className="group-shadow-out";
}else if((this.style&32)!=0){
className="group-shadow-none";
}if(className==null){
className="group-border-frame group-no-title-text";
}else{
className="group-border-frame group-no-title-text "+className;
}this.borderFrame=this.createCSSElement(this.handle,className);
this.titleLine=this.createCSSElement(this.borderFrame,"group-title-line");
this.leftCorner=this.createCSSElement(this.borderFrame,"group-left-corner");
this.rightCorner=this.createCSSElement(this.borderFrame,"group-right-corner");
this.titleText=this.createCSSElement(this.borderFrame,"group-title-text");
this.leftSide=this.createCSSElement(this.borderFrame,"group-side-line-left");
this.rightSide=this.createCSSElement(this.borderFrame,"group-side-line-right");
this.bottomLeft=this.createCSSElement(this.borderFrame,"group-bottom-line-left");
this.bottomRight=this.createCSSElement(this.borderFrame,"group-bottom-line-right");
this.contentBox=this.createCSSElement(this.handle,"group-content-box");
this.content=this.createCSSElement(this.contentBox,"group-content");
O$.setTextSelection(this.titleText,false);
});
$_V(c$,"getClientArea",
function(){
this.forceResize();
if(this.textHeight<=0){
this.textHeight=O$.getStringStyledHeight(".","group-default",this.handle.style.cssText);
}var x=3;
var y=this.textHeight;
var border=this.getBorderWidth();
var width=this.width-border*2-6;
var height=this.height-border*2-y-3;
return new $wt.graphics.Rectangle(x,y,width,height);
});
$_V(c$,"getNameText",
function(){
return this.getText();
});
$_M(c$,"getText",
function(){
return this.groupText;
});
$_V(c$,"mnemonicHit",
function(key){
return this.setFocus();
},"~N");
$_V(c$,"mnemonicMatch",
function(key){
var mnemonic=this.findMnemonic(this.getText());
if((mnemonic).charCodeAt(0)==('\0').charCodeAt(0))return false;
return(Character.toUpperCase(key)).charCodeAt(0)==(Character.toUpperCase(mnemonic)).charCodeAt(0);
},"~N");
$_M(c$,"releaseHandle",
function(){
if(this.titleLine!=null){
O$.destroyHandle(this.titleLine);
this.titleLine=null;
}if(this.titleText!=null){
O$.destroyHandle(this.titleText);
this.titleText=null;
}if(this.leftCorner!=null){
O$.destroyHandle(this.leftCorner);
this.leftCorner=null;
}if(this.rightCorner!=null){
O$.destroyHandle(this.rightCorner);
this.rightCorner=null;
}if(this.bottomLeft!=null){
O$.destroyHandle(this.bottomLeft);
this.bottomLeft=null;
}if(this.bottomRight!=null){
O$.destroyHandle(this.bottomRight);
this.bottomRight=null;
}if(this.leftSide!=null){
O$.destroyHandle(this.leftSide);
this.leftSide=null;
}if(this.rightSide!=null){
O$.destroyHandle(this.rightSide);
this.rightSide=null;
}if(this.borderFrame!=null){
O$.destroyHandle(this.borderFrame);
this.borderFrame=null;
}if(this.content!=null){
O$.destroyHandle(this.content);
this.content=null;
}if(this.contentBox!=null){
O$.destroyHandle(this.contentBox);
this.contentBox=null;
}$_U(this,$wt.widgets.Group,"releaseHandle",[]);
});
$_M(c$,"setBounds",
function(x,y,width,height){
$_U(this,$wt.widgets.Group,"setBounds",[x,y,width,height]);
if(this.textWidth==0&&this.groupText!=null&&this.groupText.length!=0){
this.textWidth=O$.getStringStyledWidth(this.groupText,"group-default",this.handle.style.cssText);
}if(this.textWidth!=0){
var w=this.width-this.textWidth-12;
if(w<0){
w=0;
}this.rightCorner.style.width=w+"px";
}},"~N,~N,~N,~N");
$_M(c$,"setText",
function(string){
O$.updateCSSClass(this.borderFrame,"group-no-title-text",string.length==0);
if(string.length!=0){
if(!string.equals(this.groupText)){
O$.clearChildren(this.titleText);
this.titleText.appendChild(d$.createTextNode(string));
this.textWidth=O$.getStringStyledWidth(string,"group-default",this.handle.style.cssText);
if(this.textWidth!=0){
var w=this.width-this.textWidth-24;
if(w>0){
this.rightCorner.style.width=w+"px";
}}}}this.groupText=string;
},"~S");
$_V(c$,"_updateOrientation",
function(){
if((this.style&67108864)!=0){
this.handle.style.direction="ltr";
}else if(this.parent!=null&&(this.parent.style&67108864)!=0){
this.handle.style.direction="ltr";
}});
$_S(c$,
"CLIENT_INSET",3);
});
$_L(["$wt.widgets.Item"],"$wt.widgets.TabItem",["$wt.internal.RunnableCompatibility","$wt.internal.browser.OS"],function(){
c$=$_C(function(){
this.parent=null;
this.control=null;
this.toolTipText=null;
this.hasImage=false;
this.textEl=null;
this.hItemSelection=null;
$_Z(this,arguments);
},$wt.widgets,"TabItem",$wt.widgets.Item);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.TabItem,[parent,style]);
this.parent=parent;
var index=parent.getItemCount();
parent.createItem(this,index);
this.configure(index);
},"$wt.widgets.TabFolder,~N");
$_K(c$,
function(parent,style,index){
$_R(this,$wt.widgets.TabItem,[parent,style]);
this.parent=parent;
parent.createItem(this,index);
this.configure(index);
},"$wt.widgets.TabFolder,~N,~N");
$_M(c$,"configure",
($fz=function(index){
this.hItemSelection=$_Q((($_D("$wt.widgets.TabItem$1")?0:org.eclipse.swt.widgets.TabItem.$TabItem$1$()),$_N($wt.widgets.TabItem$1,this,$_F("index",index))));
Clazz.addEvent(this.textEl,"click",this.hItemSelection);
},$fz.isPrivate=true,$fz),"~N");
$_M(c$,"getControl",
function(){
return this.control;
});
$_M(c$,"getParent",
function(){
return this.parent;
});
$_M(c$,"getToolTipText",
function(){
return this.toolTipText;
});
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.TabItem,"releaseChild",[]);
var index=this.parent.indexOf(this);
if(index==this.parent.getSelectionIndex()){
if(this.control!=null)this.control.setVisible(false);
}this.parent.destroyItem(this);
});
$_M(c$,"releaseHandle",
function(){
if(this.textEl!=null){
if(this.hItemSelection!=null){
Clazz.removeEvent(this.textEl,"click",this.hItemSelection);
this.hItemSelection=null;
}O$.destroyHandle(this.textEl);
this.textEl=null;
}$_U(this,$wt.widgets.TabItem,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.TabItem,"releaseWidget",[]);
this.control=null;
this.parent=null;
});
$_M(c$,"setControl",
function(control){
if(control!=null){
}if(this.control!=null&&this.control.isDisposed()){
this.control=null;
}var oldControl=this.control;
var newControl=control;
this.control=control;
var index=this.parent.indexOf(this);
if(index!=this.parent.getSelectionIndex()){
if(newControl!=null)newControl.setVisible(false);
return;
}if(newControl!=null){
newControl.setBounds(this.parent.getClientArea());
newControl.setVisible(true);
}if(oldControl!=null)oldControl.setVisible(false);
},"$wt.widgets.Control");
$_M(c$,"setImage",
function(image){
var index=this.parent.indexOf(this);
if(index==-1)return;
var boundsChanged=(image!=null&&this.image==null)||(image==null&&this.image!=null);
$_U(this,$wt.widgets.TabItem,"setImage",[image]);
if(image!=null&&image.handle==null&&image.url!=null&&image.url.length!=0){
var handleStyle=this.textEl.style;
if(O$.isIENeedPNGFix&&image.url.toLowerCase().endsWith(".png")&&handleStyle.filter!=null){
handleStyle.backgroundImage="";
handleStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+this.image.url+"\", sizingMethod=\"image\")";
}else{
if(O$.isIENeedPNGFix&&handleStyle.filter!=null)handleStyle.filter="";
handleStyle.backgroundImage="url(\""+this.image.url+"\")";
}}else{
this.textEl.style.backgroundImage="";
if(O$.isIENeedPNGFix&&this.textEl.style.filter!=null){
this.textEl.style.filter="";
}}this.hasImage=image!=null;
O$.updateCSSClass(this.handle,"tab-item-image",this.hasImage);
if(boundsChanged){
this.parent.updateSelection(this.parent.getSelectionIndex());
}},"$wt.graphics.Image");
$_M(c$,"setText",
function(string){
var index=this.parent.indexOf(this);
if(index==-1)return;
var boundsChanged=string!==this.text;
$_U(this,$wt.widgets.TabItem,"setText",[string]);
if(this.handle!=null){
O$.clearChildren(this.handle);
this.textEl=d$.createElement("SPAN");
this.handle.appendChild(this.textEl);
this.textEl.appendChild(d$.createTextNode(string));
this.handle.style.height="14px";
}this.text=string;
this.configure(index);
if(boundsChanged){
this.parent.updateSelection(this.parent.getSelectionIndex());
}},"~S");
$_M(c$,"setToolTipText",
function(string){
this.toolTipText=string;
},"~S");
c$.$TabItem$1$=function(){
$_H();
c$=$_W($wt.widgets,"TabItem$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.TabItem"].parent.setSelection(this.f$.index,true);
});
c$=$_P();
};
});
$_L(["$wt.widgets.Composite"],"$wt.widgets.TabFolder",["java.lang.Character","$wt.graphics.Point","$.Rectangle","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Event","$.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.TabFolder", ".tab-folder-default {\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\nposition:absolute;\noverflow:hidden;\n}\n.tab-folder-border-default {\nborder:2px inset #ccc;\n}\n.tab-folder-border {\nposition:absolute;\nwidth:50%;\nheight:50%;\nborder-width:2px;\nborder-color:white;\nz-index:100;\n}\n.tab-folder-border-nw {\ntop:7px;\nborder-style:outset none none outset;\nborder-left:1px solid white;\nborder-top:1px solid white;\nmargin-top:1.2em;\n}\nbody:nth-of-type(1) .tab-folder-border-nw {\ntop:8px;\n}\n* html .tab-folder-border-nw {\ntop:6px;\nmargin-top:1.3em;\n}\n.tab-folder-border-sw {\nbottom:0;\nborder-style:none none outset outset;\nborder-left:1px solid white;\n}\n.tab-folder-border-ne {\nright:0;\ntop:7px;\nborder-style:outset outset none none;\nborder-top:1px solid white;\nmargin-top:1.2em;\n}\nbody:nth-of-type(1) .tab-folder-border-ne {\ntop:8px;\n}\n* html .tab-folder-border-ne {\ntop:6px;\nmargin-top:1.3em;\n}\n.tab-folder-border-se {\nright:0;\nbottom:0;\nborder-style:none outset outset none;\n}\n* html .tab-folder-border-sw {\nbottom:1px;\n}\n* html .tab-folder-border-se {\nbottom:1px;\n}\n.tab-folder-bottom .tab-folder-border-nw {\ntop:0;\nmargin-top:0;\n}\n.tab-folder-bottom .tab-folder-border-sw {\nbottom:7px;\nmargin-bottom:1.2em;\nborder-bottom:1px outset #777;\n}\n* html .tab-folder-bottom .tab-folder-border-sw {\nbottom:6px;\nmargin-bottom:1.3em;\n}\n.tab-folder-bottom .tab-folder-border-ne {\nright:0;\ntop:0;\nmargin-top:0;\n}\n.tab-folder-bottom .tab-folder-border-se {\nbottom:7px;\nmargin-bottom:1.2em;\nborder-bottom:1px outset #777;\n}\n* html .tab-folder-bottom .tab-folder-border-se {\nbottom:6px;\nmargin-bottom:1.3em;\n}\n.tab-folder-no-tab .tab-folder-border-nw {\ntop:2px;\nmargin-top:0;\n}\n.tab-folder-no-tab .tab-folder-border-sw {\nbottom:2px;\nmargin-bottom:0;\n}\n.tab-folder-no-tab .tab-folder-border-ne {\nright:0;\ntop:2px;\nmargin-top:0;\n}\n.tab-folder-no-tab .tab-folder-border-se {\nbottom:2px;\nmargin-bottom:0;\n}\n* html .tab-folder-no-tab .tab-folder-border-nw {\ntop:1px;\n}\n* html .tab-folder-no-tab .tab-folder-border-sw {\nbottom:1px;\n}\n* html .tab-folder-no-tab .tab-folder-border-ne {\ntop:1px;\n}\n* html .tab-folder-no-tab .tab-folder-border-se {\nbottom:1px;\n}\n.tab-item-default {\nposition:absolute;\nmargin-top:2px;\npadding:2px 5px 2px 5px;\nmin-width:28px;\ncursor:default;\noverflow:visible;\nwhite-space:nowrap;\nborder-top:1px solid white;\nborder-left:1px solid white;\nborder-right:2px outset #777;\nbackground-color:buttonface;\nborder-bottom-style:none;\n}\n* html .tab-item-default {\npadding-top:1px;\n/*width:28px;*/\n}\n* html .tab-item-image {\n/*width:52px;*/\n/*width:68px;*/\n}\n.tab-item-selected {\nmargin-top:0;\npadding-left:7px;\npadding-right:7px;\npadding-bottom:4px;\n}\n.tab-item-default span {\nwhite-space:nowrap;\npadding-bottom:4px;\nbackground-position:left center;\nbackground-repeat:no-repeat;\n}\n.tab-folder-bottom .tab-item-default span {\npadding-top:1px;\npadding-bottom:3px;\n}\n* html .tab-folder-bottom .tab-item-default span {\npadding-top:3px;\npadding-bottom:1px;\n}\n.tab-item-image span {\nmargin-left:2px;\npadding-left:22px;\n}\n.tab-folder-bottom .tab-item-default {\nbottom:2px;\nmargin-top:0;\npadding-top:2px;\nborder-top-width:0;\nborder-bottom:2px outset white;\n}\n* html .tab-folder-bottom .tab-item-default {\npadding-top:2px;\npadding-bottom:0;\n}\n.tab-folder-bottom .tab-item-selected {\nmargin-top:0;\npadding-top:4px;\npadding-bottom:2px;\nmargin-bottom:0;\nbottom:0;\n}\n* html .tab-folder-bottom .tab-item-selected {\npadding-top:4px;\n}\n.tab-item-more {\nposition:absolute;\nheight:16px;\nleft:-36px;\n/*margin-top:2px;*/\n/*top:-4px;*/\n/*\nleft:-3em;\ntop:-0.4em;\nheight:0.8em;\npadding:4px;\n*/\nmargin-left:100%;\ndisplay:none;\nz-index:111;\n}\n.tab-show-more-item .tab-item-more {\ndisplay:block;\n}\n* html .tab-item-more {\nleft:-2px;\ntop:2px;\nmargin-left:0;\nwidth:100%;\n}\n.tab-folder-bottom .tab-item-more {\nmargin-bottom:2px;\ntop:auto;\nbottom:8px;\n}\n* html .tab-folder-bottom .tab-item-more {\nmargin-bottom:2px;\ntop:auto;\nbottom:0;\n}\n.tab-item-button {\nwidth:16px;\nheight:16px;\n/*\nwidth:0.8em;\nheight:0.8em;\npadding:4px;\n*/\nfloat:right;\n}\n.tab-item-button button {\nposition:relative;\nwidth:16px;\nheight:16px;\n/*\nwidth:100%;\nheight:100%;\ntop:-1em;\nleft:0;\n*/\n}\n.tab-item-button .button-arrow-left {\nborder-width:0.4em;\nborder-left-width:0;\nborder-width:4px 4px 4px 0;\nposition:relative;\n/*left:-6px; mozilla 1.8*/\nleft:-1px;\ntop:-2px;\n}\n.tab-item-button .button-arrow-right {\nborder-width:0.4em;\nborder-right-width:0;\nborder-width:4px 0 4px 4px;\nposition:relative;\n/*left:-5px; mozilla 1.8*/\nleft:0;\ntop:-2px;\n}\n* html .tab-item-button .button-arrow-left {\nleft:-1px;\ntop:0;\n}\n* html .tab-item-button .button-arrow-right {\nleft:0;\ntop:0;\n}\n.tab-folder-content-area {\nposition:absolute;\nwidth:100%;\nz-index:120;\n}\n.swt-widgets-tabfolder {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.items=null;
this.borderFrame=null;
this.borderNW=null;
this.borderNE=null;
this.borderSW=null;
this.borderSE=null;
this.itemMore=null;
this.btnPrevTab=null;
this.btnNextTab=null;
this.contentArea=null;
this.offset=0;
this.imageList=null;
this.hMorePrevClick=null;
this.hMoreNextClick=null;
$_Z(this,arguments);
},$wt.widgets,"TabFolder",$wt.widgets.Composite);
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
style=$wt.widgets.Widget.checkBits(style,128,1024,0,0,0,0);
return style&-769;
},"~N");
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var size=$_U(this,$wt.widgets.TabFolder,"computeSize",[wHint,hHint,changed]);
var width=12;
var height=0;
if(this.items!=null&&this.items.length!=0){
for(var i=0;i<this.items.length;i++){
if(this.items[i]!=null&&!this.items[i].isDisposed()){
var containerWidth=O$.getContainerWidth(this.items[i].handle);
if(containerWidth==O$.getFixedBodyClientWidth()){
if(this.items[i].image!=null){
containerWidth=18;
}else{
containerWidth=0;
}containerWidth+=6+O$.getStringStyledWidth(this.items[i].text,"tab-folder-default",null);
}width+=containerWidth;
if(this.items[i].control!=null){
var s=this.items[i].control.computeSize(wHint,hHint);
height=Math.max(height,s.y);
}}}
}var border=this.getBorderWidth();
width+=border*2;
size.x=Math.max(width,size.x);
size.y=Math.max(height,size.y);
return size;
},"~N,~N,~B");
$_V(c$,"computeTrim",
function(x,y,width,height){
var lineHeight=0;
if(this.items!=null&&this.items.length>0){
lineHeight=Math.max(O$.getContainerHeight(this.items[this.offset].handle),20);
if(this.getSelectionIndex()==this.offset){
lineHeight-=2;
}if(O$.isIE){
lineHeight++;
}else{
if((this.style&1024)!=0){
lineHeight--;
}}x-=4;
y-=4+lineHeight;
}width+=8;
height+=8+lineHeight;
var border=this.getBorderWidth();
x-=border;
y-=border;
width+=border*2;
height+=border*2;
return new $wt.graphics.Rectangle(x,y,width,height);
},"~N,~N,~N,~N");
$_M(c$,"containerHandle",
function(){
return this.contentArea;
});
$_M(c$,"createCSSElement",
function(parent,css){
var el=d$.createElement("DIV");
if(css!=null){
el.className=css;
}if(parent!=null){
(parent).appendChild(el);
}return el;
},"~O,~S");
$_M(c$,"createItem",
function(item,index){
var count=this.items.length;
var tab=d$.createElement("DIV");
tab.className="tab-item-default";
this.borderFrame.insertBefore(tab,this.itemMore);
O$.removeCSSClass(this.borderFrame,"tab-folder-no-tab");
item.textEl=d$.createElement("SPAN");
tab.appendChild(item.textEl);
item.textEl.appendChild(d$.createTextNode(item.getNameText()));
var width=-2;
if(this.items!=null&&this.items.length!=0){
for(var i=0;i<index;i++){
if(this.items[i]!=null&&!this.items[i].isDisposed()){
width+=O$.getContainerWidth(this.items[i].handle);
}}
}if(width<2){
width=2;
}tab.style.left=width+"px";
this.items[index]=item;
this.items[index].handle=tab;
if(count==0){
this.setSelection(0,false);
var event=new $wt.widgets.Event();
event.item=this.items[0];
this.sendEvent(13,event);
}O$.setTextSelection(tab,false);
},"$wt.widgets.TabItem,~N");
$_V(c$,"createHandle",
function(){
this.children=new Array(0);
this.items=new Array(0);
var cssName="tab-folder-default";
if((this.style&2048)!=0){
cssName+=" tab-folder-border-default";
}this.handle=this.createCSSElement(this.parent.containerHandle(),cssName);
cssName="tab-folder-no-tab";
if((this.style&1024)!=0){
cssName+=" tab-folder-bottom";
}this.borderFrame=this.createCSSElement(this.handle,cssName);
cssName="tab-folder-border ";
this.itemMore=this.createCSSElement(this.borderFrame,"tab-item-more");
if(O$.isMozilla&&!O$.isFirefox){
this.itemMore.style.bottom="6px";
}var el=this.createCSSElement(this.itemMore,"tab-item-button");
this.btnNextTab=d$.createElement("BUTTON");
el.appendChild(this.btnNextTab);
var arrowRight=this.createCSSElement(this.btnNextTab,"button-arrow-right");
if(((O$.isSafari&&O$.isChrome)||O$.isMozilla)&&!O$.isFirefox){
arrowRight.style.left="-5px";
arrowRight.style.top="0";
}else if(O$.isIE){
arrowRight.style.top="0";
}else if(O$.isSafari){
arrowRight.style.left="-1px";
arrowRight.style.top="1px";
}else if(O$.isOpera){
arrowRight.style.left="-4px";
arrowRight.style.top="0";
}this.hMoreNextClick=$_Q((($_D("$wt.widgets.TabFolder$1")?0:org.eclipse.swt.widgets.TabFolder.$TabFolder$1$()),$_N($wt.widgets.TabFolder$1,this,null)));
Clazz.addEvent(el,"click",this.hMoreNextClick);
Clazz.addEvent(this.btnNextTab,"click",this.hMoreNextClick);
el=this.createCSSElement(this.itemMore,"tab-item-button");
this.btnPrevTab=d$.createElement("BUTTON");
el.appendChild(this.btnPrevTab);
var arrowLeft=this.createCSSElement(this.btnPrevTab,"button-arrow-left");
if(((O$.isSafari&&O$.isChrome)||O$.isMozilla)&&!O$.isFirefox){
arrowLeft.style.left="-6px";
arrowLeft.style.top="0";
}else if(O$.isIE){
arrowLeft.style.top="0";
}else if(O$.isSafari){
arrowLeft.style.left="-3px";
arrowLeft.style.top="1px";
}else if(O$.isOpera){
arrowLeft.style.left="-4px";
arrowLeft.style.top="0";
}this.hMorePrevClick=$_Q((($_D("$wt.widgets.TabFolder$2")?0:org.eclipse.swt.widgets.TabFolder.$TabFolder$2$()),$_N($wt.widgets.TabFolder$2,this,null)));
Clazz.addEvent(el,"click",this.hMorePrevClick);
Clazz.addEvent(this.btnPrevTab,"click",this.hMorePrevClick);
this.borderNW=this.createCSSElement(this.borderFrame,cssName+"tab-folder-border-nw");
this.borderNE=this.createCSSElement(this.borderFrame,cssName+"tab-folder-border-ne");
this.borderSW=this.createCSSElement(this.borderFrame,cssName+"tab-folder-border-sw");
this.borderSE=this.createCSSElement(this.borderFrame,cssName+"tab-folder-border-se");
this.contentArea=this.createCSSElement(this.handle,"tab-folder-content-area");
this.state&=-3;
});
$_M(c$,"destroyItem",
function(item){
},"$wt.widgets.TabItem");
$_V(c$,"findThemeControl",
function(){
return null;
});
$_M(c$,"SetWindowPos",
function(hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags){
var selectionIndex=this.getSelectionIndex();
if(selectionIndex!=-1){
var ctrl=this.items[selectionIndex].control;
if(ctrl!=null)ctrl.setBounds(this.getClientArea());
this.setSelection(selectionIndex,false);
var ww=0;
if(this.handle.style.width.length>0){
ww=Integer.parseInt(this.handle.style.width);
}if(ww==0){
this.updateSelectionWithWidth(selectionIndex,cx);
}}return $_U(this,$wt.widgets.TabFolder,"SetWindowPos",[hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags]);
},"~O,~O,~N,~N,~N,~N,~N");
$_V(c$,"getClientArea",
function(){
this.forceResize();
var x=4;
var y=4;
var h=this.height-8;
var w=this.width-8;
if(this.items!=null&&this.items.length!=0){
var lineHeight=O$.getContainerHeight(this.items[this.offset].handle);
if(O$.isIE)lineHeight++;
if(this.getSelectionIndex()==this.offset){
lineHeight-=2;
}h-=lineHeight;
if((this.style&1024)==0){
y+=lineHeight;
}else{
if(O$.isIE)h--;
}}var border=this.getBorderWidth();
x+=border;
y+=border;
w-=border*2;
h-=border*2;
return new $wt.graphics.Rectangle(x,y,w,h);
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
var count=this.getItemCount();
var result=new Array(count);
System.arraycopy(this.items,0,result,0,count);
return result;
});
$_M(c$,"getSelection",
function(){
var index=this.getSelectionIndex();
if(index==-1)return new Array(0);
return[this.items[index]];
});
$_M(c$,"getSelectionIndex",
function(){
for(var i=0;i<this.items.length;i++){
if(this.items[i]!=null&&this.items[i].handle!=null&&this.items[i].handle.className!=null&&this.items[i].handle.className.indexOf("selected")!=-1){
return i;
}}
return-1;
});
$_V(c$,"hookSelection",
function(){
});
$_M(c$,"indexOf",
function(item){
var count=this.getItemCount();
for(var i=0;i<count;i++){
if(this.items[i]===item)return i;
}
return-1;
},"$wt.widgets.TabItem");
$_V(c$,"minimumSize",
function(wHint,hHint,flushCache){
var children=this._getChildren();
var width=0;
var height=0;
for(var i=0;i<children.length;i++){
var child=children[i];
var index=0;
var count=this.getItemCount();
while(index<count){
if(this.items[index].control===child)break;
index++;
}
if(index==count){
var rect=child.getBounds();
width=Math.max(width,rect.x+rect.width);
height=Math.max(height,rect.y+rect.height);
}else{
var size=child.computeSize(wHint,hHint,flushCache);
width=Math.max(width,size.x);
height=Math.max(height,size.y);
}}
return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_V(c$,"mnemonicHit",
function(key){
var selection=this.getSelectionIndex();
for(var i=0;i<this.items.length;i++){
if(i!=selection){
var item=this.items[i];
if(item!=null){
var ch=this.findMnemonic(item.getText());
if((Character.toUpperCase(key)).charCodeAt(0)==(Character.toUpperCase(ch)).charCodeAt(0)){
if(this.setFocus()){
this.setSelection(i,true);
return true;
}}}}}
return false;
},"~N");
$_V(c$,"mnemonicMatch",
function(key){
for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null){
var ch=this.findMnemonic(item.getText());
if((Character.toUpperCase(key)).charCodeAt(0)==(Character.toUpperCase(ch)).charCodeAt(0)){
return true;
}}}
return false;
},"~N");
$_M(c$,"releaseHandle",
function(){
if(this.borderNW!=null){
O$.destroyHandle(this.borderNW);
this.borderNW=null;
}if(this.borderNE!=null){
O$.destroyHandle(this.borderNE);
this.borderNE=null;
}if(this.borderSW!=null){
O$.destroyHandle(this.borderSW);
this.borderSW=null;
}if(this.borderSE!=null){
O$.destroyHandle(this.borderSE);
this.borderSE=null;
}if(this.btnPrevTab!=null){
if(this.hMorePrevClick!=null){
Clazz.removeEvent(this.btnPrevTab,"click",this.hMorePrevClick);
Clazz.removeEvent(this.btnPrevTab.parentNode,"click",this.hMorePrevClick);
this.hMorePrevClick=null;
}O$.destroyHandle(this.btnPrevTab.parentNode);
O$.destroyHandle(this.btnPrevTab);
this.btnPrevTab=null;
}if(this.btnNextTab!=null){
if(this.hMoreNextClick!=null){
Clazz.removeEvent(this.btnNextTab,"click",this.hMoreNextClick);
Clazz.removeEvent(this.btnNextTab.parentNode,"click",this.hMoreNextClick);
this.hMoreNextClick=null;
}O$.destroyHandle(this.btnNextTab.parentNode);
O$.destroyHandle(this.btnNextTab);
this.btnNextTab=null;
}if(this.itemMore!=null){
O$.destroyHandle(this.itemMore);
this.itemMore=null;
}if(this.borderFrame!=null){
O$.destroyHandle(this.borderFrame);
this.borderFrame=null;
}if(this.contentArea!=null){
O$.destroyHandle(this.contentArea);
this.contentArea=null;
}$_U(this,$wt.widgets.TabFolder,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
var count=this.getItemCount();
for(var i=0;i<count;i++){
var item=this.items[i];
if(!item.isDisposed())item.releaseResources();
}
this.items=null;
if(this.imageList!=null){
this.display.releaseImageList(this.imageList);
}this.imageList=null;
$_U(this,$wt.widgets.TabFolder,"releaseWidget",[]);
});
$_M(c$,"removeControl",
function(control){
$_U(this,$wt.widgets.TabFolder,"removeControl",[control]);
var count=this.getItemCount();
for(var i=0;i<count;i++){
var item=this.items[i];
if(item.control===control)item.setControl(null);
}
},"$wt.widgets.Control");
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"setSelection",
function(items){
if(items.length==0){
this.setSelection(-1,false);
}else{
for(var i=items.length-1;i>=0;--i){
var index=this.indexOf(items[i]);
if(index!=-1)this.setSelection(index,false);
}
}},"~A");
$_M(c$,"setSelection",
function(index){
var count=this.getItemCount();
if(!(0<=index&&index<count))return;
this.setSelection(index,false);
},"~N");
$_M(c$,"setSelection",
function(index,notify){
var oldIndex=this.getSelectionIndex();
if(oldIndex!=-1&&oldIndex!=index){
var item=this.items[oldIndex];
var control=item.control;
if(control!=null&&!control.isDisposed()){
control.setVisible(false);
}}this.updateSelection(index);
var newIndex=index;
if(oldIndex==index){
newIndex=-1;
}if(newIndex!=-1){
var item=this.items[newIndex];
var control=item.control;
if(control!=null&&!control.isDisposed()){
control.setBounds(this.getClientArea());
control.setVisible(true);
}if(notify){
var event=new $wt.widgets.Event();
event.item=item;
this.sendEvent(13,event);
}}},"~N,~B");
$_V(c$,"_updateOrientation",
function(){
if((this.style&67108864)!=0){
this.handle.style.direction="ltr";
}else if(this.parent!=null&&(this.parent.style&67108864)!=0){
this.handle.style.direction="ltr";
}});
$_M(c$,"updateSelection",
function(index){
this.updateSelectionWithWidth(index,-1);
},"~N");
$_M(c$,"updateSelectionWithWidth",
function(index,prefWidth){
var key="tab-item-selected";
for(var i=0;i<this.offset;i++){
if(i!=index&&this.items[i].control!=null){
this.items[i].control.setVisible(false);
}if(index>=this.offset){
O$.removeCSSClass(this.items[i].handle,key);
}}
if(this.items[index]!=null){
var left=-2;
var x=2;
for(var i=this.offset;i<this.items.length;i++){
if(this.items[i].handle.style.zIndex==-1){
this.items[i].handle.style.display="";
}this.items[i].handle.style.zIndex=i+1;
O$.removeCSSClass(this.items[i].handle,key);
var w=O$.getContainerWidth(this.items[i].handle);
if(i<index){
left+=w;
}var s=this.items[i].handle.style;
if(i==index){
x-=2;
}s.left=x+"px";
x+=w;
}
var ww=0;
if(this.handle.style.width.length>0){
ww=Integer.parseInt(this.handle.style.width);
}if(prefWidth!=-1&&ww==0){
ww=prefWidth;
}if(ww>0){
O$.updateCSSClass(this.borderFrame,"tab-show-more-item",x>ww||this.offset!=0);
}O$.addCSSClass(this.items[index].handle,key);
this.items[index].handle.style.zIndex=(index>=this.offset)?this.items.length+1:-1;
if(index<this.offset){
this.items[index].handle.style.display="none";
}else{
this.items[index].handle.style.display="";
}if(this.width!=0){
var w=O$.getContainerWidth(this.items[index].handle);
left+=4;
var y=(this.width-left-((this.style&2048)!=0?4:0));
if(index>=this.offset){
y-=w;
}if(y<0){
y=0;
}if(left<2){
left=2;
}if((this.style&1024)!=0){
this.borderSW.style.width=(left-2)+"px";
this.borderSE.style.width=y+"px";
}else{
this.borderNW.style.width=(left-2)+"px";
this.borderNE.style.width=y+"px";
}}}},"~N,~N");
$_V(c$,"traversePage",
function(next){
var count=this.getItemCount();
if(count<=1)return false;
var index=this.getSelectionIndex();
if(index==-1){
index=0;
}else{
var offset=(next)?1:-1;
index=(index+offset+count)%count;
}this.setSelection(index,true);
return index==this.getSelectionIndex();
},"~B");
c$.$TabFolder$1$=function(){
$_H();
c$=$_W($wt.widgets,"TabFolder$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.TabFolder"].offset+1>=this.b$["$wt.widgets.TabFolder"].items.length)return;
var w=0;
var ww=O$.getContainerWidth(this.b$["$wt.widgets.TabFolder"].items[this.b$["$wt.widgets.TabFolder"].offset].handle);
var width=this.b$["$wt.widgets.TabFolder"].getSize().x-36;
for(var i=this.b$["$wt.widgets.TabFolder"].offset+1;i<this.b$["$wt.widgets.TabFolder"].items.length;i++){
var x=O$.getContainerWidth(this.b$["$wt.widgets.TabFolder"].items[i].handle);
w+=x;
ww+=x;
if(w>width){
if(i<this.b$["$wt.widgets.TabFolder"].items.length-1){
this.b$["$wt.widgets.TabFolder"].offset++;
this.b$["$wt.widgets.TabFolder"].setSelection(this.b$["$wt.widgets.TabFolder"].getSelectionIndex(),false);
return;
}}}
if(ww>width){
this.b$["$wt.widgets.TabFolder"].offset++;
this.b$["$wt.widgets.TabFolder"].setSelection(this.b$["$wt.widgets.TabFolder"].getSelectionIndex(),false);
return;
}});
c$=$_P();
};
c$.$TabFolder$2$=function(){
$_H();
c$=$_W($wt.widgets,"TabFolder$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.TabFolder"].offset<=0)return;
this.b$["$wt.widgets.TabFolder"].offset--;
this.b$["$wt.widgets.TabFolder"].setSelection(this.b$["$wt.widgets.TabFolder"].getSelectionIndex(),false);
});
c$=$_P();
};
});
$_L(["$wt.widgets.Item"],"$wt.widgets.TrayItem",["java.util.Date","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.internal.dnd.HTMLEventWrapper","$wt.widgets.Event","$.TypedListener"],function(){
c$=$_C(function(){
this.parent=null;
this.id=0;
this.toolTipText=null;
this.visible=true;
this.hOperaMouseUp=null;
this.hTraySelection=null;
$_Z(this,arguments);
},$wt.widgets,"TrayItem",$wt.widgets.Item);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.TrayItem,[parent,style]);
this.parent=parent;
parent.createItem(this,parent.getItemCount());
this.createWidget();
},"$wt.widgets.Tray,~N");
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
$_M(c$,"addMenuDetectListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(35,typedListener);
},"$wt.events.MenuDetectListener");
$_M(c$,"createWidget",
function(){
this.handle=this.parent.addTrayItem();
this.hTraySelection=$_Q((($_D("$wt.widgets.TrayItem$1")?0:org.eclipse.swt.widgets.TrayItem.$TrayItem$1$()),$_N($wt.widgets.TrayItem$1,this,null)));
Clazz.addEvent(this.handle,"click",this.hTraySelection);
});
$_V(c$,"hookMenuDetect",
function(){
if(this.hMenuDetect!=null){
return;
}this.hMenuDetect=$_Q((($_D("$wt.widgets.TrayItem$2")?0:org.eclipse.swt.widgets.TrayItem.$TrayItem$2$()),$_N($wt.widgets.TrayItem$2,this,null)));
Clazz.addEvent(this.handle,"contextmenu",this.hMenuDetect);
if(O$.isOpera){
this.hOperaMouseUp=$_Q((($_D("$wt.widgets.TrayItem$3")?0:org.eclipse.swt.widgets.TrayItem.$TrayItem$3$()),$_N($wt.widgets.TrayItem$3,this,null)));
Clazz.addEvent(this.handle,"mouseup",this.hOperaMouseUp);
}});
$_M(c$,"keepAutoHide",
function(){
var trayCorner=this.display.trayCorner;
if(trayCorner!=null&&trayCorner.isAutoHide){
var createdTime=new java.util.Date().getTime();
trayCorner.lastUpdated=createdTime;
this.display.timerExec(2000,(($_D("$wt.widgets.TrayItem$4")?0:org.eclipse.swt.widgets.TrayItem.$TrayItem$4$()),$_N($wt.widgets.TrayItem$4,this,$_F("createdTime",createdTime))));
}});
$_M(c$,"getToolTipText",
function(){
return this.toolTipText;
});
$_M(c$,"getVisible",
function(){
return this.visible;
});
$_M(c$,"recreate",
function(){
this.createWidget();
if(!this.visible)this.setVisible(false);
if(this.text.length!=0)this.setText(this.text);
if(this.image!=null)this.setImage(this.image);
if(this.toolTipText!=null)this.setToolTipText(this.toolTipText);
});
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.TrayItem,"releaseChild",[]);
this.parent.removeTrayItem(this.handle);
this.parent.destroyItem(this);
});
$_M(c$,"releaseHandle",
function(){
if(this.handle!=null){
if(this.hTraySelection!=null){
Clazz.removeEvent(this.handle,"click",this.hTraySelection);
this.hTraySelection=null;
}if(this.hOperaMouseUp!=null){
Clazz.removeEvent(this.handle,"mouseup",this.hOperaMouseUp);
this.hOperaMouseUp=null;
}}$_U(this,$wt.widgets.TrayItem,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.TrayItem,"releaseWidget",[]);
this.toolTipText=null;
});
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"removeMenuDetectListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(35,listener);
},"$wt.events.MenuDetectListener");
$_M(c$,"setImage",
function(image){
$_U(this,$wt.widgets.TrayItem,"setImage",[image]);
if(image==null){
this.handle.style.backgroundImage="";
if(O$.isIENeedPNGFix&&this.handle.style.filter!=null){
this.handle.style.filter="";
}}else{
var handleStyle=this.handle.style;
if(O$.isIENeedPNGFix&&image.url!=null&&image.url.toLowerCase().endsWith(".png")&&handleStyle.filter!=null){
handleStyle.backgroundImage="";
handleStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+this.image.url+"\", sizingMethod=\"image\")";
}else{
if(O$.isIENeedPNGFix&&handleStyle.filter!=null)handleStyle.filter="";
handleStyle.backgroundImage="url(\""+this.image.url+"\")";
}}this.keepAutoHide();
},"$wt.graphics.Image");
$_M(c$,"setToolTipText",
function(value){
this.toolTipText=value;
this.handle.title=value;
},"~S");
$_M(c$,"setVisible",
function(visible){
if(this.visible==visible)return;
if(visible){
this.sendEvent(22);
if(this.isDisposed())return;
}this.visible=visible;
if(!visible)this.sendEvent(23);
},"~B");
c$.$TrayItem$1$=function(){
$_H();
c$=$_W($wt.widgets,"TrayItem$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(this.b$["$wt.widgets.TrayItem"].display.trayCorner!=null){
this.b$["$wt.widgets.TrayItem"].display.trayCorner.bringToTop(-1);
}});
c$=$_P();
};
c$.$TrayItem$2$=function(){
$_H();
c$=$_W($wt.widgets,"TrayItem$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var ev=new $wt.widgets.Event();
ev.type=35;
ev.widget=this.b$["$wt.widgets.TrayItem"];
ev.display=this.b$["$wt.widgets.TrayItem"].display;
ev.time=this.b$["$wt.widgets.TrayItem"].display.getLastEventTime();
var evt=this.getEvent();
if(evt!=null){
var evtHTML=new $wt.internal.dnd.HTMLEventWrapper(evt);
ev.x=evtHTML.x;
ev.y=evtHTML.y;
this.b$["$wt.widgets.TrayItem"].sendEvent(ev);
evtHTML.stopPropagation();
evtHTML.preventDefault();
this.toReturn(false);
return;
}this.b$["$wt.widgets.TrayItem"].sendEvent(ev);
this.toReturn(false);
if(this.b$["$wt.widgets.TrayItem"].display.trayCorner!=null){
this.b$["$wt.widgets.TrayItem"].display.trayCorner.bringToTop(-1);
}});
c$=$_P();
};
c$.$TrayItem$3$=function(){
$_H();
c$=$_W($wt.widgets,"TrayItem$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var evt=this.getEvent();
if(evt!=null&&(evt).ctrlKey){
var evtHTML=new $wt.internal.dnd.HTMLEventWrapper(evt);
var ev=new $wt.widgets.Event();
ev.type=35;
ev.widget=this.b$["$wt.widgets.TrayItem"];
ev.display=this.b$["$wt.widgets.TrayItem"].display;
ev.time=this.b$["$wt.widgets.TrayItem"].display.getLastEventTime();
ev.x=evtHTML.x;
ev.y=evtHTML.y;
this.b$["$wt.widgets.TrayItem"].sendEvent(ev);
evtHTML.preventDefault();
this.toReturn(false);
if(this.b$["$wt.widgets.TrayItem"].display.trayCorner!=null){
this.b$["$wt.widgets.TrayItem"].display.trayCorner.bringToTop(-1);
}}});
c$=$_P();
};
c$.$TrayItem$4$=function(){
$_H();
c$=$_W($wt.widgets,"TrayItem$4",null,Runnable);
$_V(c$,"run",
function(){
var trayCorner=this.b$["$wt.widgets.TrayItem"].display.trayCorner;
if(trayCorner.lastUpdated==this.f$.createdTime){
trayCorner.setMinimized(trayCorner.isAutoHide);
}});
c$=$_P();
};
});
$_L(["$wt.widgets.Widget","$.TrayItem"],"$wt.widgets.Tray",["$wt.internal.browser.OS","$wt.widgets.Display"],function(){
$WTC$$.registerCSS ("$wt.widgets.Tray", ".tray-cell {\nposition: absolute;\nwidth: 0;\nheight: 0;\nfont-size: 0;\nborder-style: solid;\nborder-width: 0;\nborder-top-width: 36px;\nborder-right-width: 36px;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n}\n.tray-item {\nposition: absolute;\nwidth: 16px;\nheight: 16px;\nfont-size: 0;\ncursor: default;\nbackground-repeat: no-repeat;\nbackground-position: center center;\n}\n.tray-item-console {\nbackground-position:bottom left !important;\nbackground-image:url(\'images/shell-packed.gif\');\n}\n.tray-minimized {\nleft: 0;\ntop: 0;\nborder-top-width: 16px;\nborder-right-width: 16px;\n}\n.tray-logo-item {\nposition: absolute;\nleft: 0;\ntop: 0;\nwidth: 36px;\nheight: 36px;\ncursor: pointer;\n_cursor: hand;\nbackground-image: url(\'images/z-logo.png\');\nbackground-position: right bottom;\nbackground-repeat: no-repeat;\nopacity:0.85;\nfilter:Alpha(Opacity=85);\n}\n.tray-float-block {\nfloat: left;\nclear: both;\nfont-size: 0;\nheight: 18px;\n}\n.tray-cell-inner-wide-shadow {\nposition:absolute;\nwidth:48px;\nheight:48px;\nbackground-image: url(\'images/strip-inner-wide.png\');\nbackground-position: right bottom;\nbackground-repeat: no-repeat;\n}\n.tray-cell-inner-shadow {\nposition:absolute;\nwidth:36px;\nheight:36px;\nbackground-image: url(\'images/strip-inner.png\');\nbackground-position: right bottom;\nbackground-repeat: no-repeat;\n}\n.tray-cell-outer-wide-shadow {\nposition:absolute;\nwidth:60px;\nheight:60px;\nbackground-color:transparent;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB7UlEQVR4nGNIS0tjGIT4CBAvBOIOIC4F4lQgDgdibyB2BGJzINYHYnUgVgRiaSAWA2JBIOYFYi4gZgdiViBmBmJGKGYYaI9hwzTzLAgPpMewYZp6FoQHymPYMM09C8ID4TFsmC6eBWF6ewwbpptnQZieHsOG6epZEKaXx7BhunsWhOnhMWx4QDwLwrT2GDY8YJ4FYVp6DBseUM+CMK08hg0PuGdBmBYew4YHhWdBmNoew4YHjWdBmJoew4YHlWdBmFoew4YHnWdBmBoew4YHpWdBmIEahqDhQetZEGaglkFQPKg9C8IMVDRs0HsWhKll0JDwLAhTw5Ah41kQptSAIeVZEKZE85DzLAiTq3FIehaEydE0ZD0LwqRqGNKeBWFSFA95z4IwsQqHhWdBmBhFw8azIExIwbDyLAjjkxx2ngVhXBLD0rMgjE1w2HoWhNEFhrVnQRiZM+w9C8IwxojwLAiDiBHjWRAGESPGsyAMIkaMZ0EYRIwYz4IwiBgxngVhEDFiPAvCIGLEeBaEQcSI8SwIg4gR41kQBhEjxrMgDCJGjGdBGESMGM+CMIgYMZ4FYRAxYjwLwiBixHgWhEHEiPEsCIOIEeNZEAYRI8azIAwiRoxnQRhEjBjPgjCIGDGeBWEQMWI8C8ID7gB6YwDBdJsCtiZfcAAAAABJRU5ErkJggg==);\nbackground-position: left top;\nbackground-repeat: no-repeat;\n}\n.tray-cell-outer-shadow {\nposition:absolute;\nwidth:36px;\nheight:36px;\nbackground-color:transparent;\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA4UlEQVR4nGNIS0tjGEx4wB2AjgfcAWh460A7ABlvBeLpA+0IGAY7BogbB9ohIAx3DBDnDyrHAHHCoHIMEAcPKscAsfugcgwQ2w4qxwCxyaByDBDrDCrHALHqoHIMEMsNKscAseSgcgwQiwwqxwAx/6ByDBDzDCrHADHnoHIMELMNKscAMcugcgwQMw0qxwAx46ByTBoFDqKJY0BmDyrHpJHhIJo6Jo1EB9HcMWkkOIgujkkj0kF0c0waEQ6iq2PSCDiI7o5Jw+OgAXFMGg4HDZhj0rA4aEAdk4bmoAF3DAgDACxckICqNdGgAAAAAElFTkSuQmCC);\nbackground-position: left top;\nbackground-repeat: no-repeat;\n}\n.swt-widgets-tray {\nwidth:324px;\n}");

$WTC$$.registerCSS ("$wt.widgets.Tray.IE", "/* IE 7.0 + */\n*:first-child+html .tray-cell-outer-wide-shadow {\nbackground-image: url(\'images/strip-outer-wide.png\');\n}\n*:first-child+html .tray-cell-outer-shadow {\nbackground-image: url(\'images/strip-outer.png\');\n}\n/* IE 6.0 - */\n* html .tray-cell-outer-wide-shadow {\nbackground-image: none;\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/strip-outer-wide.png\', sizingMethod=\'image\');\n}\n* html .tray-cell-outer-shadow {\nbackground-image: none;\nfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/strip-outer.png\', sizingMethod=\'image\');\n}\n.swt-widgets-tray-ie {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.itemCount=0;
this.items=null;
this.cellLines=0;
this.allCells=null;
this.allItems=null;
this.allFloats=null;
this.outerShadows=null;
this.supportShadow=false;
$_Z(this,arguments);
},$wt.widgets,"Tray",$wt.widgets.Widget);
$_Y(c$,function(){
this.items=new Array(4);
});
$_K(c$,
function(display,style){
if(display==null)display=$wt.widgets.Display.getCurrent();
if(display==null)display=$wt.widgets.Display.getDefault();
this.display=display;
this.items=new Array(4);
this.cellLines=0;
this.allCells=new Array(0);
this.allItems=new Array(0);
this.allFloats=new Array(0);
this.initialize();
},"$wt.widgets.Display,~N");
c$.trayLineColor=$_M(c$,"trayLineColor",
function(line){
if(line<=2){
return"white";
}else{
var gray=line*32;
if(gray>288){
gray=288;
}return"rgb("+(gray-39)+","+(gray-35)+",254)";
}},"~N");
$_M(c$,"addTrayLine",
($fz=function(){
this.cellLines++;
var lineColor=$wt.widgets.Tray.trayLineColor(this.cellLines);
var needFixing=this.cellLines==1&&O$.isFirefox;
{
needFixing&=(navigator.userAgent.indexOf("Firefox/2.0")!=-1);
}for(var i=0;i<this.cellLines;i++){
var cell=d$.createElement("DIV");
cell.className="tray-cell";
cell.style.left=((this.cellLines-1-i)*36)+"px";
cell.style.top=(i*36)+"px";
if(i==0&&needFixing){
cell.style.visibility="hidden";
}cell.style.borderColor=lineColor+" transparent transparent transparent";
if(O$.isIENeedPNGFix){
cell.style.borderRightColor="rgb(0,255,0)";
cell.style.filter="Chroma(Color=#00ff00);";
}cell.title="Doubleclick to set notification area auto-hide";
this.allCells[Math.floor(this.cellLines*(this.cellLines-1)/2)+i]=cell;
if(this.display.trayCorner!=null){
this.display.trayCorner.bindEvents(cell);
}d$.body.appendChild(cell);
}
for(var i=0;i<this.cellLines-1;i++){
var cell=this.allCells[Math.floor((this.cellLines-1)*(this.cellLines-2)/2)+i];
cell.style.borderRightColor=lineColor;
}
if(this.supportShadow){
if(this.cellLines%2==0&&this.outerShadows.length<this.cellLines+1){
var cell=d$.createElement("DIV");
cell.className="tray-cell-outer-shadow";
cell.style.top=(this.cellLines-1)*36+"px";
this.outerShadows[this.outerShadows.length]=cell;
d$.body.appendChild(cell);
cell=d$.createElement("DIV");
cell.className="tray-cell-outer-wide-shadow";
cell.style.top=(this.cellLines*36)+"px";
this.outerShadows[this.outerShadows.length]=cell;
d$.body.appendChild(cell);
}for(var i=0;i<this.outerShadows.length;i++){
var cell=this.outerShadows[i];
cell.style.left=((this.cellLines-i-1)*36-1)+"px";
}
}var supportNotificationCornerFloat=false;
{
supportNotificationCornerFloat=window["swt.notification.corner.float"];
}if(!supportNotificationCornerFloat){
return;
}var floatDiv1=d$.createElement("DIV");
floatDiv1.className="tray-float-block";
var floatDiv2=d$.createElement("DIV");
floatDiv2.className="tray-float-block";
floatDiv1.style.width=(this.cellLines*36+18)+"px";
floatDiv2.style.width=this.cellLines*36+"px";
var floatDiv3=null;
if(this.cellLines==1){
floatDiv3=d$.createElement("DIV");
floatDiv3.className="tray-float-block";
floatDiv3.style.width=(this.cellLines*36-18)+"px";
this.allFloats[0]=floatDiv3;
}this.allFloats[this.cellLines*2-1]=floatDiv2;
this.allFloats[this.cellLines*2]=floatDiv1;
var panel=d$.getElementById("swt-desktop-panel");
if(panel!=null){
if(floatDiv3!=null){
if(panel.childNodes.length>0){
panel.insertBefore(floatDiv3,panel.childNodes[0]);
}else{
panel.appendChild(floatDiv3);
}}if(panel.childNodes.length>0){
panel.insertBefore(floatDiv2,panel.childNodes[0]);
}else{
panel.appendChild(floatDiv2);
}panel.insertBefore(floatDiv1,panel.childNodes[0]);
}else{
if(floatDiv3!=null){
d$.body.insertBefore(floatDiv3,d$.body.childNodes[0]);
}d$.body.insertBefore(floatDiv2,d$.body.childNodes[0]);
d$.body.insertBefore(floatDiv1,d$.body.childNodes[0]);
}},$fz.isPrivate=true,$fz));
$_M(c$,"removeTrayLine",
($fz=function(){
if(this.cellLines<=3){
return;
}for(var i=this.cellLines-1;i>=0;i--){
var index=Math.floor(this.cellLines*(this.cellLines-1)/2)+i;
var cell=this.allCells[index];
if(this.display!=null&&this.display.trayCorner!=null){
this.display.trayCorner.unbindEvents(cell);
}this.allCells[index]=null;
O$.destroyHandle(cell);
}
this.cellLines--;
for(var i=0;i<this.cellLines;i++){
var cell=this.allCells[Math.floor(this.cellLines*(this.cellLines-1)/2)+i];
cell.style.borderRightColor="transparent";
if(O$.isIENeedPNGFix){
cell.style.borderRightColor="rgb(0,255,0)";
cell.style.filter="Chroma(Color=#00ff00);";
}}
if(this.supportShadow){
for(var i=0;i<this.outerShadows.length;i++){
var cell=this.outerShadows[i];
cell.style.left=((this.cellLines-i-1)*36-1)+"px";
}
}var supportNotificationCornerFloat=false;
{
supportNotificationCornerFloat=window["swt.notification.corner.float"];
}if(!supportNotificationCornerFloat){
return;
}O$.destroyHandle(this.allFloats[this.cellLines*2+2]);
this.allFloats[this.cellLines*2+2]=null;
O$.destroyHandle(this.allFloats[this.cellLines*2+1]);
this.allFloats[this.cellLines*2+1]=null;
if(this.cellLines==0){
O$.destroyHandle(this.allFloats[0]);
this.allFloats[0]=null;
}},$fz.isPrivate=true,$fz));
$_M(c$,"initialize",
function(){
{
this.supportShadow=window["swt.disable.shadow"]!=true;
}if(this.supportShadow){
this.outerShadows=new Array(0);
var cell=d$.createElement("DIV");
cell.className="tray-cell-outer-wide-shadow";
cell.style.top="0px";
this.outerShadows[this.outerShadows.length]=cell;
d$.body.appendChild(cell);
}this.addTrayLine();
this.addTrayLine();
this.addTrayLine();
});
$_M(c$,"addTrayItem",
function(){
if(this.allItems.length+6-Math.floor(this.cellLines*(this.cellLines+1)/2)>this.cellLines){
this.addTrayLine();
}var item=d$.createElement("DIV");
item.className="tray-item";
this.allItems[this.allItems.length]=item;
this.orderTrayItem(item,this.allItems.length-1);
var el=this.allCells[0];
if((O$.isIE&&el.style.zIndex!=0)||(!O$.isIE&&""+el.style.zIndex!=="")){
item.style.zIndex=el.style.zIndex;
}d$.body.appendChild(item);
if(this.display.trayCorner!=null){
this.display.trayCorner.setMinimized(false);
this.display.trayCorner.updateLastModified();
}return item;
});
$_M(c$,"orderTrayItem",
function(item,order){
var index=-1;
var currentLine=-1;
for(var i=this.cellLines;i>=2;i--){
if(order+6>=Math.floor(i*(i+1)/2)){
index=order+6-Math.floor(i*(i+1)/2);
currentLine=i;
break;
}}
var offset=0;
if(currentLine%2==0){
offset=-12;
}if(index%2==0){
offset+=(index+1)*(10+currentLine-3);
}else{
offset+=-index*(10+currentLine-3);
}if(currentLine%2==0){
offset*=-1;
}item.style.left=((currentLine-3)*18+37+offset)+"px";
item.style.top=((currentLine-3)*18+37-offset)+"px";
},"Element,~N");
$_M(c$,"removeTrayItem",
function(item){
for(var i=this.allItems.length-1;i>=0;i--){
if(this.allItems[i]===item){
O$.destroyHandle(item);
for(var j=i;j<this.allItems.length-1;j++){
this.allItems[j]=this.allItems[j+1];
this.orderTrayItem(this.allItems[j],j);
}
this.allItems[this.allItems.length-1]=null;
{
this.allItems.length--;
}if(this.allItems.length+6<=Math.floor(this.cellLines*(this.cellLines+1)/2)){
this.removeTrayLine();
}break;
}}
if(this.display.trayCorner!=null){
this.display.trayCorner.setMinimized(false);
this.display.trayCorner.updateLastModified();
}},"Element");
$_M(c$,"createItem",
function(item,index){
if(this.itemCount==this.items.length){
var newItems=new Array(this.items.length+4);
System.arraycopy(this.items,0,newItems,0,this.items.length);
this.items=newItems;
}System.arraycopy(this.items,index,this.items,index+1,this.itemCount++ -index);
this.items[index]=item;
},"$wt.widgets.TrayItem,~N");
$_M(c$,"destroyItem",
function(item){
var index=0;
while(index<this.itemCount){
if(this.items[index]===item)break;
index++;
}
if(index==this.itemCount)return;
System.arraycopy(this.items,index+1,this.items,index,--this.itemCount-index);
this.items[this.itemCount]=null;
},"$wt.widgets.TrayItem");
$_M(c$,"getItem",
function(index){
return this.items[index];
},"~N");
$_M(c$,"getItemCount",
function(){
return this.itemCount;
});
$_M(c$,"getItems",
function(){
var result=new Array(this.itemCount);
System.arraycopy(this.items,0,result,0,result.length);
return result;
});
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.Tray,"releaseChild",[]);
if(this.display.tray===this)this.display.tray=null;
});
$_M(c$,"releaseWidget",
function(){
for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(item!=null&&!item.isDisposed()){
item.releaseResources();
}this.items[i]=null;
}
this.items=null;
this.destroyItems(this.allCells);
this.allCells=null;
this.destroyItems(this.allItems);
this.allItems=null;
this.destroyItems(this.allFloats);
this.allFloats=null;
this.destroyItems(this.outerShadows);
this.outerShadows=null;
$_U(this,$wt.widgets.Tray,"releaseWidget",[]);
});
$_M(c$,"destroyItems",
($fz=function(els){
if(els==null)return;
for(var i=0;i<els.length;i++){
var item=els[i];
if(item!=null){
O$.destroyHandle(item);
els[i]=null;
}}
},$fz.isPrivate=true,$fz),"~A");
});
$_L(["$wt.widgets.Item"],"$wt.widgets.MenuItem",["$wt.graphics.Rectangle","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$.Popup","$wt.internal.dnd.HTMLEventWrapper","$wt.widgets.Event","$.TypedListener"],function(){
c$=$_C(function(){
this.parent=null;
this.menu=null;
this.id=0;
this.accelerator=0;
this.statusEl=null;
this.imageEl=null;
this.textEl=null;
this.arrowEl=null;
this.mnemonicChar=0;
this.hItemMouseEnter=null;
this.hItemMouseExit=null;
this.hNoTextSelection=null;
this.hNoMenu=null;
$_Z(this,arguments);
},$wt.widgets,"MenuItem",$wt.widgets.Item);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.MenuItem,[parent,$wt.widgets.MenuItem.checkStyle(style)]);
this.parent=parent;
parent.createItem(this,parent.getItemCount());
this.configMenuItem();
},"$wt.widgets.Menu,~N");
$_K(c$,
function(parent,style,index){
$_R(this,$wt.widgets.MenuItem,[parent,$wt.widgets.MenuItem.checkStyle(style)]);
this.parent=parent;
parent.createItem(this,index);
this.configMenuItem();
},"$wt.widgets.Menu,~N,~N");
$_K(c$,
function(parent,menu,style,index){
$_R(this,$wt.widgets.MenuItem,[parent,$wt.widgets.MenuItem.checkStyle(style)]);
this.parent=parent;
this.menu=menu;
if(menu!=null)menu.cascade=this;
this.display.addMenuItem(this);
this.configMenuItem();
},"$wt.widgets.Menu,$wt.widgets.Menu,~N,~N");
$_M(c$,"configMenuItem",
function(){
if((this.style&2)!=0)return;
this.hItemMouseEnter=$_Q((($_D("$wt.widgets.MenuItem$1")?0:org.eclipse.swt.widgets.MenuItem.$MenuItem$1$()),$_N($wt.widgets.MenuItem$1,this,null)));
Clazz.addEvent(this.handle,"mouseover",this.hItemMouseEnter);
this.hItemMouseExit=$_Q((($_D("$wt.widgets.MenuItem$2")?0:org.eclipse.swt.widgets.MenuItem.$MenuItem$2$()),$_N($wt.widgets.MenuItem$2,this,null)));
Clazz.addEvent(this.handle,"mouseout",this.hItemMouseExit);
this.checkHookType(13);
this.hNoTextSelection=O$.setTextSelection(this.handle,false);
this.hNoMenu=O$.noReturnCallback;
Clazz.addEvent(this.handle,"contextmenu",this.hNoMenu);
});
$_V(c$,"hookSelection",
function(){
if(this.hSelection!=null){
return;
}this.hSelection=$_Q((($_D("$wt.widgets.MenuItem$3")?0:org.eclipse.swt.widgets.MenuItem.$MenuItem$3$()),$_N($wt.widgets.MenuItem$3,this,null)));
Clazz.addEvent(this.handle,"click",this.hSelection);
});
$_M(c$,"addArmListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(30,typedListener);
},"$wt.events.ArmListener");
$_M(c$,"addHelpListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(28,typedListener);
},"$wt.events.HelpListener");
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
return $wt.widgets.Widget.checkBits(style,8,32,16,2,64,0);
},"~N");
$_M(c$,"fixMenus",
function(newParent){
if(this.menu!=null)this.menu.fixMenus(newParent);
},"$wt.widgets.Decorations");
$_M(c$,"getAccelerator",
function(){
return this.accelerator;
});
$_M(c$,"getBounds",
function(){
var index=this.parent.indexOf(this);
if(index==-1)return new $wt.graphics.Rectangle(0,0,0,0);
if((this.parent.style&2)!=0){
var shell=this.parent.parent;
if(shell.menuBar!==this.parent){
return new $wt.graphics.Rectangle(0,0,0,0);
}return new $wt.graphics.Rectangle(0,0,0,0);
}else{
var pt2=O$.calcuateRelativePosition(this.handle,this.parent.handle);
var width=O$.getContainerWidth(this.handle);
var height=O$.getContainerHeight(this.handle);
return new $wt.graphics.Rectangle(pt2.x+2,pt2.y+2,width,height);
}});
$_M(c$,"getEnabled",
function(){
return!O$.existedCSSClass(this.handle,"menu-item-disabled");
});
$_V(c$,"getMenu",
function(){
return this.menu;
});
$_M(c$,"getNameText",
function(){
if((this.style&2)!=0)return"|";
return $_U(this,$wt.widgets.MenuItem,"getNameText",[]);
});
$_M(c$,"getParent",
function(){
return this.parent;
});
$_M(c$,"getSelection",
function(){
if((this.style&(48))==0)return false;
var cssKey=((this.style&32)!=0)?"menu-item-checked":"menu-item-selected";
return O$.existedCSSClass(this.statusEl,cssKey);
});
$_M(c$,"isEnabled",
function(){
return this.getEnabled()&&this.parent.isEnabled();
});
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.MenuItem,"releaseChild",[]);
if(this.menu!=null)this.menu.dispose();
this.menu=null;
this.parent.destroyItem(this);
});
$_M(c$,"releaseHandle",
function(){
if(this.arrowEl!=null){
O$.destroyHandle(this.arrowEl);
this.arrowEl=null;
}if(this.textEl!=null){
O$.destroyHandle(this.textEl);
this.textEl=null;
}if(this.imageEl!=null){
O$.destroyHandle(this.imageEl);
this.imageEl=null;
}if(this.statusEl!=null){
O$.destroyHandle(this.statusEl);
this.statusEl=null;
}if(this.handle!=null){
if(this.hItemMouseEnter!=null){
Clazz.removeEvent(this.handle,"mouseover",this.hItemMouseEnter);
this.hItemMouseEnter=null;
}if(this.hItemMouseExit!=null){
Clazz.removeEvent(this.handle,"mouseout",this.hItemMouseExit);
this.hItemMouseExit=null;
}if(this.hNoMenu!=null){
Clazz.removeEvent(this.handle,"contextmenu",this.hNoMenu);
this.hNoMenu=null;
}if(this.hNoTextSelection!=null){
Clazz.removeEvent(this.handle,"selectstart",this.hNoTextSelection);
this.hNoTextSelection=null;
}}$_U(this,$wt.widgets.MenuItem,"releaseHandle",[]);
});
$_M(c$,"releaseMenu",
function(){
this.menu=null;
});
$_M(c$,"releaseWidget",
function(){
if(this.menu!=null)this.menu.releaseResources();
this.menu=null;
$_U(this,$wt.widgets.MenuItem,"releaseWidget",[]);
if(this.accelerator!=0){
this.parent.destroyAccelerators();
}this.accelerator=0;
this.display.removeMenuItem(this);
this.parent=null;
});
$_M(c$,"removeArmListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(30,listener);
},"$wt.events.ArmListener");
$_M(c$,"removeHelpListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(28,listener);
},"$wt.events.HelpListener");
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
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
$_M(c$,"setAccelerator",
function(accelerator){
if(this.accelerator==accelerator)return;
this.accelerator=accelerator;
this.parent.destroyAccelerators();
},"~N");
$_M(c$,"setEnabled",
function(enabled){
O$.updateCSSClass(this.handle,"menu-item-disabled",!enabled);
this.parent.destroyAccelerators();
this.parent.redraw();
},"~B");
$_M(c$,"setImage",
function(image){
if((this.style&2)!=0)return;
$_U(this,$wt.widgets.MenuItem,"setImage",[image]);
if(image!=null){
O$.addCSSClass(this.parent.handle,"menu-enable-image");
O$.addCSSClass(this.handle,"menu-item-enable-image");
}else{
var existedImage=false;
for(var i=0;i<this.parent.items.length;i++){
if(this.parent.items[i].image!=null){
existedImage=true;
break;
}}
if(!existedImage){
O$.removeCSSClass(this.parent.handle,"menu-enable-image");
}O$.removeCSSClass(this.handle,"menu-item-enable-image");
}if(this.imageEl!=null){
if(image!=null){
if(this.image.handle==null&&this.image.url!=null&&this.image.url.length!=0){
O$.clearChildren(this.imageEl);
var handleStyle=this.imageEl.style;
if(O$.isIENeedPNGFix&&image.url.toLowerCase().endsWith(".png")&&handleStyle.filter!=null){
handleStyle.backgroundImage="";
handleStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+this.image.url+"\", sizingMethod=\"image\")";
}else{
if(O$.isIENeedPNGFix&&handleStyle.filter!=null)handleStyle.filter="";
handleStyle.backgroundImage="url(\""+this.image.url+"\")";
}}}else{
this.imageEl.style.backgroundImage="";
if(O$.isIENeedPNGFix&&this.imageEl.style.filter!=null){
this.imageEl.style.filter="";
}}}this.parent.redraw();
},"$wt.graphics.Image");
$_M(c$,"setMenu",
function(menu){
if(menu!=null){
}var oldMenu=this.menu;
if(oldMenu===menu)return;
if(oldMenu!=null)oldMenu.cascade=null;
this.menu=menu;
this.parent.destroyAccelerators();
},"$wt.widgets.Menu");
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
var cssKey=((this.style&32)!=0)?"menu-item-checked":"menu-item-selected";
O$.updateCSSClass(this.statusEl,cssKey,selected);
this.parent.redraw();
},"~B");
$_M(c$,"setText",
function(string){
if((this.style&2)!=0)return;
if(this.text.equals(string))return;
$_U(this,$wt.widgets.MenuItem,"setText",[string]);
var el=this.textEl;
if(this.textEl==null){
el=this.handle;
}if(el.childNodes!=null&&el.childNodes.length!=0){
O$.clearChildren(el);
}var idx=this.text.indexOf('\t');
var normalText=this.text;
var accelText=null;
if(idx!=-1){
normalText=this.text.substring(0,idx);
accelText=this.text.substring(idx+1);
}if(accelText!=null&&accelText.length!=0){
var accel=d$.createElement("DIV");
accel.className="menu-item-accel";
el.appendChild(accel);
accel.appendChild(d$.createTextNode(accelText));
}var mChar=O$.insertText(el,normalText);
if(mChar!==normalText){
this.mnemonicChar=0+(mChar.toUpperCase().charAt(0)).charCodeAt(0);
}if((this.parent.style&2)==0){
el.style.display="block";
}this.parent.redraw();
},"~S");
$_M(c$,"showSubMenu",
function(){
this.menu.handle.style.left="-10000px";
this.menu.handle.style.top="-10000px";
this.menu.handle.style.display="block";
var bounds=this.menu.getBounds();
var coordinate=O$.calcuateRelativePosition(this.handle,d$.body);
var w=O$.getContainerWidth(this.handle);
var h=O$.getContainerHeight(this.handle);
if(O$.isFirefox){
coordinate.x+=1;
h+=1;
}else if(O$.isIE){
coordinate.x-=1;
coordinate.y-=2;
}var clientArea=this.parent.parent.getMonitor().getClientArea();
clientArea.x+=O$.getFixedBodyOffsetLeft();
clientArea.y+=O$.getFixedBodyOffsetTop();
var rect=$wt.internal.browser.Popup.popupMenu(clientArea,new $wt.graphics.Rectangle(coordinate.x,coordinate.y,w,h),bounds.width,bounds.height,0);
this.menu.handle.style.width=rect.width+"px";
this.menu.x=rect.x;
this.menu.y=rect.y;
this.menu.handle.style.left=rect.x+"px";
this.menu.handle.style.top=rect.y+"px";
this.menu.handle.style.zIndex=w$.currentTopZIndex+1000;
this.menu.handle.style.display="block";
O$.SetFocus(this.menu.btnFocus);
});
c$.$MenuItem$1$=function(){
$_H();
c$=$_W($wt.widgets,"MenuItem$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var className=this.b$["$wt.widgets.MenuItem"].handle.className;
if(className==null){
return;
}else{
var bar="-";
if(className.indexOf("menu-bar-item")!=-1){
bar="-bar-";
}var cssOver="menu"+bar+"item-hover";
var cssDisabled="menu"+bar+"item-disabled";
var cssDisabledHover="menu"+bar+"item-disabled-hover";
var cssArrowRight="menu"+bar+"item-arrow-right";
var clazz=className.$plit("\\s");
var existed=false;
var disabled=false;
var existedDisabled=false;
for(var i=0;i<clazz.length;i++){
if(clazz[i]===cssOver){
existed=true;
}else if(clazz[i]===cssDisabled){
disabled=true;
}else if(clazz[i]===cssDisabledHover){
existedDisabled=true;
}}
if(!existed){
clazz[clazz.length]=cssOver;
}if(disabled&&!existedDisabled){
clazz[clazz.length]=cssDisabledHover;
}if(!existed||(disabled&&!existedDisabled)){
var s="";
{
s=clazz.join(" ");
}this.b$["$wt.widgets.MenuItem"].handle.className=s;
}if(!disabled){
var divs=this.b$["$wt.widgets.MenuItem"].handle.getElementsByTagName("DIV");
var existedArrow=false;
for(var k=0;k<divs.length;k++){
var div=divs[k];
if(div.className===cssArrowRight){
existedArrow=true;
break;
}}
if(existedArrow){
}}}var p=this.b$["$wt.widgets.MenuItem"].parent;
var indexOf=p.indexOf(this.b$["$wt.widgets.MenuItem"]);
if(p.currentIndex!=-1&&p.currentIndex!=indexOf){
var mouseExit=p.items[p.currentIndex].hItemMouseExit;
if(mouseExit!=null){
mouseExit();
}}p.currentIndex=indexOf;
if((this.b$["$wt.widgets.MenuItem"].parent.style&2)!=0){
if(this.b$["$wt.widgets.MenuItem"].parent.handle.className.indexOf("menu-bar-selected")!=-1){
if(this.b$["$wt.widgets.MenuItem"].menu!=null&&!this.b$["$wt.widgets.MenuItem"].menu.isDisposed()){
var evt=this.getEvent();
if(evt!=null){
var evtHTML=new $wt.internal.dnd.HTMLEventWrapper(evt);
this.b$["$wt.widgets.MenuItem"].showSubMenu();
evtHTML.preventDefault();
evtHTML.stopPropagation();
}this.toReturn(false);
}}}});
c$=$_P();
};
c$.$MenuItem$2$=function(){
$_H();
c$=$_W($wt.widgets,"MenuItem$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var className=this.b$["$wt.widgets.MenuItem"].handle.className;
if(className==null){
return;
}else{
var bar="-";
if(className.indexOf("menu-bar-item")!=-1){
bar="-bar-";
}var cssOver="menu"+bar+"item-hover";
var cssDisabledHover="menu"+bar+"item-disabled-hover";
var clazz=className.$plit("\\s");
var existed=false;
for(var i=0;i<clazz.length;i++){
if(clazz[i]===cssOver||clazz[i]===cssDisabledHover){
existed=true;
var k=0;
for(var j=i;j<clazz.length-1;j++){
if(clazz[j]!==cssOver&&clazz[j]!==cssDisabledHover){
clazz[i+k]=clazz[j+1];
k++;
}}
{
clazz.length-=clazz.length-(i+k);
}}}
if(existed){
var s="";
{
s=clazz.join(" ");
}this.b$["$wt.widgets.MenuItem"].handle.className=s;
}}this.b$["$wt.widgets.MenuItem"].parent.currentIndex=-1;
});
c$=$_P();
};
c$.$MenuItem$3$=function(){
$_H();
c$=$_W($wt.widgets,"MenuItem$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.MenuItem"].isEnabled()){
this.b$["$wt.widgets.MenuItem"].display.timerExec(40,(($_D("$wt.widgets.MenuItem$3$1")?0:org.eclipse.swt.widgets.MenuItem.$MenuItem$3$1$()),$_N($wt.widgets.MenuItem$3$1,this,null)));
return;
}if((this.b$["$wt.widgets.MenuItem"].parent.style&2)!=0){
if(this.b$["$wt.widgets.MenuItem"].menu!=null&&!this.b$["$wt.widgets.MenuItem"].menu.isDisposed()){
var evt=this.getEvent();
if(evt!=null){
var evtHTML=new $wt.internal.dnd.HTMLEventWrapper(evt);
this.b$["$wt.widgets.MenuItem"].showSubMenu();
evtHTML.preventDefault();
evtHTML.stopPropagation();
}this.toReturn(false);
}O$.addCSSClass(this.b$["$wt.widgets.MenuItem"].parent.handle,"menu-bar-selected");
}if((this.b$["$wt.widgets.MenuItem"].style&32)!=0){
this.b$["$wt.widgets.MenuItem"].setSelection(!this.b$["$wt.widgets.MenuItem"].getSelection());
}else{
if((this.b$["$wt.widgets.MenuItem"].style&16)!=0){
if((this.b$["$wt.widgets.MenuItem"].parent.getStyle()&4194304)!=0){
this.b$["$wt.widgets.MenuItem"].setSelection(!this.b$["$wt.widgets.MenuItem"].getSelection());
}else{
this.b$["$wt.widgets.MenuItem"].selectRadio();
}}}var event=new $wt.widgets.Event();
this.b$["$wt.widgets.MenuItem"].postEvent(13,event);
this.b$["$wt.widgets.MenuItem"].parent.lastFocusdTime=-1;
var p=this.b$["$wt.widgets.MenuItem"].parent;
{
p.hMenuBlur();
}});
c$=$_P();
};
c$.$MenuItem$3$1$=function(){
$_H();
c$=$_W($wt.widgets,"MenuItem$3$1",null,Runnable);
$_V(c$,"run",
function(){
O$.SetFocus(this.b$["$wt.widgets.MenuItem"].parent.btnFocus);
});
c$=$_P();
};
});
$_L(["$wt.widgets.Widget"],"$wt.widgets.Menu",["java.util.Date","$wt.graphics.Rectangle","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Decorations","$.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.Menu", ".menu-default {\nposition:absolute;\nborder-width:2px;\nborder-style:groove solid solid groove;\nborder-color:white gray gray white;\nbackground-color:menu;\ncursor:default;\npadding:1px 0 1px 1px;\ndisplay:none;\ntext-align:left;\nfont-size:0;\nmargin:0;\n}\n* html .menu-default {\npadding-left:0;\n}\n.menu-item {\nposition:relative;\noverflow:hidden;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\nmargin:0 2px 0 1px;\npadding:2px;\nheight:13px;\nheight:1.5em;\n}\n.menu-item-enable-image {\nheight:18px;\n}\n.menu-item-hover {\nbackground-color:highlight;\n}\n.menu-item-hover .menu-item-text {\ncolor:highlighttext;\n}\n.menu-item-disabled .menu-item-text {\ncolor:graytext;\n}\n.menu-item-disabled .menu-item-accel {\ncolor:graytext;\n}\n.menu-item-text span span {\ntext-decoration:underline;\n}\n.menu-item-text {\noverflow:hidden;\nwhite-space:nowrap;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\ncolor:menutext;\n}\n.menu-item-enable-image .menu-item-text {\npadding:1px;\n}\n.menu-item-arrow {\nposition:absolute;\nright:2px;\ntop:2px;\nwidth:16px;\nheight:16px;\nmargin-left:2px;\n}\n.menu-item-arrow-right {\nmargin:auto;\nheight:0;\nwidth:0;\nfont-size:0;\nline-height:0;\nborder-style:solid none solid solid;\nborder-color:menu;\nborder-left-color:black;\nborder-right-width:0;\n}\n.menu-item-disabled .menu-item-arrow-right {\nborder-left-color:gray;\n}\n.menu-item-hover .menu-item-arrow-right {\nborder-color:highlight;\nborder-left-color:highlighttext;\n}\n.menu-item-disabled-hover .menu-item-arrow-right {\nborder-left-color:gray;\n}\n.menu-item-arrow-right {\nposition:relative;\nborder-width:4px;\nborder-right-width:0;\ntop:2px;\nleft:2px;\n}\n.menu-item-enable-image .menu-item-arrow-right {\ntop:4px;\n}\n.menu-item-status {\nfloat:left;\n}\n.menu-item-image {\nfloat:left;\n}\n.menu-item-status {\nwidth:16px;\nheight:14px;\nbackground-repeat:no-repeat;\nbackground-position:center center;\n}\n.menu-item-enable-image .menu-item-status {\nheight:16px;\n}\n.menu-item-selected {\nmargin:5px 5px !important;\nwidth:4px !important;\nheight:4px !important;\nfont-size:0;\nbackground-color:black;\n}\n.menu-item-enable-image .menu-item-selected {\nmargin-top:6px !important;\nmargin-bottom:6px !important;\n}\n* html .menu-item-selected {\nmargin:5px 6px 5px 3px !important;\n}\n* html .menu-item-enable-image .menu-item-selected {\nmargin-top:6px !important;\nmargin-bottom:6px !important;\n}\n.menu-item-hover .menu-item-selected {\nbackground-color:highlighttext;\n}\n.menu-item-disabled .menu-item-selected {\nbackground-color:gray;\n}\n.menu-item-checked {\nbackground-image:url(\'images/menu-packed.gif\');\nbackground-position:left top;\n}\n.menu-item-hover .menu-item-checked {\nbackground-image:url(\'images/menu-packed.gif\');\nbackground-position:center top;\n}\n.menu-item-disabled .menu-item-checked {\nbackground-image:url(\'images/menu-packed.gif\');\nbackground-position:right top;\n}\n.menu-enable-image .menu-item-status {\nwidth:0;\nheight:0;\n}\n.menu-enable-status .menu-item-status {\nwidth:16px;\nheight:16px;\n}\n.menu-enable-image .menu-item-image {\nwidth:16px;\nheight:16px;\nmargin:1px 2px 1px 0;\nbackground-repeat:no-repeat;\nbackground-position:center center;\n}\n.menu-item-accel {\nfloat:right;\nmargin-right:16px;\n}\n* html .menu-item-accel {\nmargin-right:8px;\n}\n.menu-item-enable-image .menu-item-accel span {\npadding:1px;\n}\n.menu-item-seperator {\nborder-style:groove none none none;\nborder-width:2px 0 0 0;\nborder-color:white;\nmargin:3px 2px;\npadding:0;\nheight:0;\n}\n.menu-item-enable-image .menu-item-seperator {\nheight:0;\n}\n.menu-item-up, .menu-item-down {\ndisplay:none;\n}\n.menu-scroll .menu-item-up {\ndisplay:block;\nheight:6px;\n}\n.menu-scroll .menu-item-down {\ndisplay:block;\nheight:6px;\n}\n.menu-item-arrow-up {\nmargin:auto;\nheight:0;\nwidth:0;\nfont-size:0;\nline-height:0;\nborder-style:none solid solid solid;\nborder-color:menu;\nborder-bottom-color:black;\nborder-top-width:0;\nborder-width:4px;\nborder-top-width:0;\n}\n.menu-item-arrow-down {\nmargin:auto;\nheight:0;\nwidth:0;\nfont-size:0;\nline-height:0;\nborder-style:solid solid none solid;\nborder-color:menu;\nborder-top-color:black;\nborder-bottom-width:0;\nborder-width:3px;\nborder-bottom-width:0;\nposition:relative;\ntop:2px;\n}\n.menu-item-hover .menu-item-arrow-up {\nborder-color:highlight;\nborder-bottom-color:highlighttext;\n}\n.menu-item-hover .menu-item-arrow-down {\nborder-color:highlight;\nborder-top-color:highlighttext;\n}\n.menu-focus {\nposition:absolute;\nwidth:1px;\nheight:1px;\noverflow:hidden;\nfont-size:0;\nmargin:0;\npadding:0;\nborder:0 none transparent;\nbackground-color:transparent;\n}\n.opera-hide-context-menu {\nposition:absolute;\nwidth:8px;\nheight:8px;\nfont-size:0;\nborder-style:none;\nz-index:4321;\n}\n.menu-bar {\nposition:absolute;\nbackground-color:menu;\noverflow:visible;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\ncursor:default;\npadding:4px 0;\nz-index:9;\nmargin:1px 2px;\nmin-height:16px;\n}\n.menu-bar-item {\ndisplay:inline;\nmargin:0;\npadding:3px 6px;\nborder:1px solid menu;\nwhite-space:nowrap;\n}\n.menu-bar-item-hover {\nborder:1px outset white;\n}\n.menu-bar-selected .menu-bar-item-hover {\nborder:1px inset white !important;\n}\n.menu-bar-item span span {\ntext-decoration:underline;\n}\n.swt-widgets-menu {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.x=0;
this.y=0;
this.hwndCB=0;
this.id0=0;
this.id1=0;
this.hasLocation=false;
this.cascade=null;
this.parent=null;
this.imageList=null;
this.items=null;
this.defaultItem=null;
this.btnFocus=null;
this.currentIndex=0;
this.lastFocusdTime=0;
this.acceleratorTable=null;
this.hMenuKeyDown=null;
this.hMenuBlur=null;
this.hMenuFocus=null;
this.hMenuMouseDown=null;
$_Z(this,arguments);
},$wt.widgets,"Menu",$wt.widgets.Widget);
$_K(c$,
function(parent){
this.construct($wt.widgets.Menu.checkNull(parent).menuShell(),8);
},"$wt.widgets.Control");
$_K(c$,
function(parent,style){
this.construct(parent,$wt.widgets.Menu.checkStyle(style),null);
},"$wt.widgets.Decorations,~N");
$_K(c$,
function(parentMenu){
this.construct($wt.widgets.Menu.checkNull(parentMenu).parent,4);
},"$wt.widgets.Menu");
$_K(c$,
function(parentItem){
this.construct($wt.widgets.Menu.checkNull(parentItem).parent);
},"$wt.widgets.MenuItem");
$_K(c$,
function(parent,style,handle){
$_R(this,$wt.widgets.Menu,[parent,$wt.widgets.Menu.checkStyle(style)]);
this.parent=parent;
this.handle=handle;
this.checkOrientation(parent);
this.createWidget();
},"$wt.widgets.Decorations,~N,Element");
$_M(c$,"_setVisible",
function(visible){
if((this.style&(6))!=0)return;
var style=this.handle.style;
if(visible){
var clientArea=this.getDisplay().getPrimaryMonitor().getClientArea();
style.zIndex=w$.currentTopZIndex+1000;
style.display="block";
this.handle.style.height="";
var height=O$.getContainerHeight(this.handle);
if(O$.isIE||O$.isOpera){
var maxWidth=0;
var hasImage=false;
var hasSelection=false;
var children=this.getItems();
for(var i=0;i<children.length;i++){
var item=children[i];
var width=O$.getStringStyledWidth(item.getText(),"menu-item-text",null);
if(item.getImage()!=null){
hasImage=true;
}if((item.getStyle()&(48))!=0){
hasImage=true;
}maxWidth=Math.max(maxWidth,width);
}
this.handle.style.width=(maxWidth+(hasImage?18:0)+(hasSelection?18:0)+32)+"px";
}else{
this.handle.style.width="";
var width=O$.getContainerWidth(this.handle);
this.handle.style.width=(width+32)+"px";
}this.handle.style.height=height+"px";
var width=O$.getContainerWidth(this.handle);
var left=this.x;
var top=this.y;
if(this.y+height>clientArea.y+clientArea.height){
if(this.y+height-clientArea.y-clientArea.height>height-this.y){
top=this.y-height;
}}if(this.x+width>clientArea.x+clientArea.width){
if(this.x+width-clientArea.x-clientArea.width>width-this.x){
left=this.x-width;
}}style.left=left+"px";
style.top=top+"px";
O$.SetFocus(this.btnFocus);
if(this.hooks(22))this.sendEvent(22);
}else{
style.display="none";
style.width="";
if(this.hooks(23))this.sendEvent(23);
}},"~B");
$_M(c$,"addHelpListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(28,typedListener);
},"$wt.events.HelpListener");
$_M(c$,"addMenuListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(23,typedListener);
this.addListener(22,typedListener);
},"$wt.events.MenuListener");
c$.checkNull=$_M(c$,"checkNull",
function(control){
return control;
},"$wt.widgets.Control");
c$.checkNull=$_M(c$,"checkNull",
function(menu){
return menu;
},"$wt.widgets.Menu");
c$.checkNull=$_M(c$,"checkNull",
function(item){
return item;
},"$wt.widgets.MenuItem");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
return $wt.widgets.Widget.checkBits(style,8,2,4,0,0,0);
},"~N");
$_M(c$,"nextMenuItemIndex",
function(dir){
var index=this.currentIndex;
var menuItems=this.items;
var tested=0;
var length=menuItems.length;
if(index==-1){
index=dir<0?length-1:0;
while(tested<length&&(menuItems[index].style&2)!=0){
tested++;
index+=dir;
}
return index;
}else{
index+=dir;
if(index==-1||index==length){
index=dir<0?length-1:0;
}while(tested<length&&(menuItems[index].style&2)!=0){
tested++;
index+=dir;
}
}if(index==length){
index=-1;
}return index;
},"~N");
$_M(c$,"createHandle",
function(){
this.items=new Array(0);
this.currentIndex=-1;
this.lastFocusdTime=-1;
if(this.handle!=null)return;
this.handle=d$.createElement("DIV");
if((this.style&2)!=0){
this.handle.className="menu-bar";
O$.addCSSClass(this.parent.handle,"shell-menu-bar");
var top=3;
if(this.parent.titleBar!=null){
top=3+O$.getContainerHeight(this.parent.titleBar);
}this.handle.style.top=top+"px";
this.parent.handle.appendChild(this.handle);
this.parent.shellMenuBar=this.handle;
}else{
d$.body.appendChild(this.handle);
this.handle.className="menu-default";
var supportShadow=false;
{
supportShadow=window["swt.disable.shadow"]!=true;
}if(supportShadow){
$wt.widgets.Decorations.createNarrowShadowHandles(this.handle);
}}this.btnFocus=d$.createElement("BUTTON");
this.btnFocus.className="menu-focus";
this.handle.appendChild(this.btnFocus);
this.hMenuKeyDown=$_Q((($_D("$wt.widgets.Menu$1")?0:org.eclipse.swt.widgets.Menu.$Menu$1$()),$_N($wt.widgets.Menu$1,this,null)));
Clazz.addEvent(this.btnFocus,"keydown",this.hMenuKeyDown);
this.hMenuBlur=$_Q((($_D("$wt.widgets.Menu$2")?0:org.eclipse.swt.widgets.Menu.$Menu$2$()),$_N($wt.widgets.Menu$2,this,null)));
Clazz.addEvent(this.btnFocus,"blur",this.hMenuBlur);
this.hMenuFocus=$_Q((($_D("$wt.widgets.Menu$3")?0:org.eclipse.swt.widgets.Menu.$Menu$3$()),$_N($wt.widgets.Menu$3,this,null)));
Clazz.addEvent(this.btnFocus,"focus",this.hMenuFocus);
this.hMenuMouseDown=$_Q((($_D("$wt.widgets.Menu$4")?0:org.eclipse.swt.widgets.Menu.$Menu$4$()),$_N($wt.widgets.Menu$4,this,null)));
Clazz.addEvent(this.handle,"mousedown",this.hMenuMouseDown);
if((this.style&2)!=0){
}else{
}});
$_M(c$,"createItem",
function(item,index){
var count=this.items.length;
for(var i=0;i<this.items.length;i++){
if(this.items[i]===item){
return;
}}
this.items[this.items.length]=item;
this.display.addMenuItem(item);
item.handle=d$.createElement("DIV");
item.handle.className=((this.style&2)!=0)?"menu-bar-item":"menu-item";
this.handle.appendChild(item.handle);
if((item.style&2)==0){
if((item.style&(48))!=0){
O$.addCSSClass(this.handle,"menu-enable-status");
}if((this.style&2)==0){
var el=d$.createElement("DIV");
el.className="menu-item-status";
item.handle.appendChild(el);
item.statusEl=el;
el=d$.createElement("DIV");
el.className="menu-item-image";
item.handle.appendChild(el);
item.imageEl=el;
el=d$.createElement("DIV");
el.className="menu-item-text";
item.handle.appendChild(el);
item.textEl=el;
el=d$.createElement("DIV");
el.className="menu-item-arrow";
item.handle.appendChild(el);
item.arrowEl=el;
if((item.style&64)!=0){
el=d$.createElement("DIV");
el.className="menu-item-arrow-right";
item.arrowEl.appendChild(el);
}}}else{
item.handle.className+=" menu-item-seperator";
}this.redraw();
},"$wt.widgets.MenuItem,~N");
$_M(c$,"createWidget",
function(){
this.createHandle();
this.parent.addMenu(this);
});
$_M(c$,"destroyAccelerators",
function(){
this.parent.destroyAccelerators();
});
$_M(c$,"registerAccelerator",
function(accelerator,item){
if(this.acceleratorTable==null){
this.acceleratorTable=new Array(0);
}var size=this.acceleratorTable.length;
this.acceleratorTable[size]=new Integer(accelerator);
this.acceleratorTable[size+1]=item;
},"~N,$wt.widgets.MenuItem");
$_M(c$,"isAccelerated",
function(keyEvent){
var size=this.acceleratorTable.length;
for(var i=0;i<size;i+=2){
var acclCode=(this.acceleratorTable[i]).intValue();
if((((acclCode&262144)!=0&&keyEvent.ctrlKey)||((acclCode&262144)==0))&&(((acclCode&65536)!=0&&keyEvent.altKey)||((acclCode&65536)==0))&&((acclCode&131072)!=0&&keyEvent.shiftKey)||((acclCode&131072)==0)){
acclCode&=-458753;
if(acclCode==keyEvent.keyCode){
var item=this.acceleratorTable[i+1];
{
try{
item.handle.click();
}catch(e){
try{
var clickEvent=document.createEvent("MouseEvents");
clickEvent.initEvent("click",true,true);
item.handle.dispatchEvent(clickEvent);
}catch(e){
}
}
}}}}
return false;
},"HTMLEvent");
$_M(c$,"destroyItem",
function(item){
this.redraw();
},"$wt.widgets.MenuItem");
$_V(c$,"destroyWidget",
function(){
this.releaseHandle();
if(this.handle!=null){
O$.destroyHandle(this.handle);
this.handle=null;
}});
$_M(c$,"fixMenus",
function(newParent){
var items=this.getItems();
for(var i=0;i<items.length;i++){
items[i].fixMenus(newParent);
}
this.parent.removeMenu(this);
newParent.addMenu(this);
this.parent=newParent;
},"$wt.widgets.Decorations");
$_M(c$,"getBounds",
function(){
if((this.style&2)!=0){
if(this.parent.menuBar!==this){
return new $wt.graphics.Rectangle(0,0,0,0);
}}else{
var count=this.items.length;
if(count!=0){
var x;
var y;
var w;
var h;
var hdl1=this.items[0].handle;
var pt1=O$.calcuateRelativePosition(hdl1,d$.body);
x=pt1.x;
y=pt1.y;
var textWidth=0;
var accelWidth=0;
for(var i=0;i<count;i++){
var text=this.items[i].text;
if(text==null){
continue;}var idx=text.indexOf('\t');
var normalText=text;
var accelText=null;
if(idx!=-1){
normalText=text.substring(0,idx);
accelText=text.substring(idx+1);
}if(accelText!=null&&accelText.length!=0){
var width=O$.getStringStyledWidth(accelText,"menu-item-text",null);
if(width>accelWidth){
accelWidth=width;
}}var width=O$.getStringStyledWidth(normalText,"menu-item-text",null);
if(width>textWidth){
textWidth=width;
}}
w=16+textWidth+16+accelWidth+16+8;
if(this.handle.className.indexOf("menu-enable-status")!=-1&&this.handle.className.indexOf("menu-enable-image")!=-1){
w+=16;
}if(count==1){
h=O$.getContainerHeight(hdl1);
}else{
var hdl2=this.items[count-1].handle;
var pt2=O$.calcuateRelativePosition(hdl2,d$.body);
h=pt2.y-pt1.y+O$.getContainerHeight(hdl2);
}return new $wt.graphics.Rectangle(x-2,y-2,w+4,h+4);
}}return new $wt.graphics.Rectangle(0,0,0,0);
});
$_M(c$,"getDefaultItem",
function(){
return this.defaultItem;
});
$_M(c$,"getEnabled",
function(){
return(this.state&8)==0;
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
var count=this.items.length;
var result=new Array(count);
System.arraycopy(this.items,0,result,0,count);
return result;
});
$_V(c$,"getNameText",
function(){
var result="";
var items=this.getItems();
var length=items.length;
if(length>0){
for(var i=0;i<length-1;i++){
result=result+items[i].getNameText()+", ";
}
result=result+items[length-1].getNameText();
}return result;
});
$_M(c$,"getParent",
function(){
return this.parent;
});
$_M(c$,"getParentItem",
function(){
return this.cascade;
});
$_M(c$,"getParentMenu",
function(){
if(this.cascade!=null)return this.cascade.parent;
return null;
});
$_M(c$,"getShell",
function(){
return this.parent.getShell();
});
$_M(c$,"getVisible",
function(){
if((this.style&2)!=0){
return this===this.parent.menuShell().menuBar;
}if((this.style&8)!=0){
var popups=this.display.popups;
if(popups==null)return false;
for(var i=0;i<popups.length;i++){
if(popups[i]===this)return true;
}
}var shell=this.getShell();
var menu=shell.activeMenu;
while(menu!=null&&menu!==this){
menu=menu.getParentMenu();
}
return this===menu;
});
$_M(c$,"imageIndex",
function(image){
var index=this.imageList.indexOf(image);
if(index==-1){
index=this.imageList.add(image);
}else{
this.imageList.put(index,image);
}return index;
},"$wt.graphics.Image");
$_M(c$,"indexOf",
function(item){
if(item.parent!==this)return-1;
for(var i=0;i<this.items.length;i++){
if(this.items[i]===item){
return i;
}}
return-1;
},"$wt.widgets.MenuItem");
$_M(c$,"isEnabled",
function(){
var parentMenu=this.getParentMenu();
if(parentMenu==null)return this.getEnabled();
return this.getEnabled()&&parentMenu.isEnabled();
});
$_M(c$,"isVisible",
function(){
return this.getVisible();
});
$_M(c$,"redraw",
function(){
if(!this.isVisible())return;
if((this.style&2)!=0){
this.display.addBar(this);
}else{
this.update();
}});
$_M(c$,"releaseChild",
function(){
$_U(this,$wt.widgets.Menu,"releaseChild",[]);
if(this.cascade!=null)this.cascade.releaseMenu();
if((this.style&2)!=0){
this.display.removeBar(this);
if(this===this.parent.menuBar){
this.parent.setMenuBar(null);
}}else{
if((this.style&8)!=0){
this.display.removePopup(this);
}}});
$_M(c$,"releaseHandle",
function(){
if(this.btnFocus!=null){
if(this.hMenuKeyDown!=null){
Clazz.removeEvent(this.btnFocus,"keydown",this.hMenuKeyDown);
this.hMenuKeyDown=null;
}if(this.hMenuBlur!=null){
Clazz.removeEvent(this.btnFocus,"blur",this.hMenuBlur);
this.hMenuBlur=null;
}if(this.hMenuFocus!=null){
Clazz.removeEvent(this.btnFocus,"focus",this.hMenuFocus);
this.hMenuFocus=null;
}O$.destroyHandle(this.btnFocus);
this.btnFocus=null;
}if(this.handle!=null){
if(this.hMenuMouseDown!=null){
Clazz.removeEvent(this.handle,"mousedown",this.hMenuMouseDown);
this.hMenuMouseDown=null;
}O$.destroyHandle(this.handle);
this.handle=null;
}$_U(this,$wt.widgets.Menu,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
for(var i=0;i<this.items.length;i++){
var item=this.items[i];
if(!item.isDisposed()){
item.releaseResources();
}this.items[i]=null;
}
this.items=new Array(0);
$_U(this,$wt.widgets.Menu,"releaseWidget",[]);
if(this.parent!=null)this.parent.removeMenu(this);
this.parent=null;
this.cascade=null;
});
$_M(c$,"removeHelpListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(28,listener);
},"$wt.events.HelpListener");
$_M(c$,"removeMenuListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(23,listener);
this.eventTable.unhook(22,listener);
},"$wt.events.MenuListener");
$_M(c$,"setDefaultItem",
function(item){
this.defaultItem=item;
this.redraw();
},"$wt.widgets.MenuItem");
$_M(c$,"setEnabled",
function(enabled){
this.state&=-9;
if(!enabled)this.state|=8;
},"~B");
$_M(c$,"setLocation",
function(x,y){
if((this.style&(6))!=0)return;
this.x=x;
this.y=y;
this.hasLocation=true;
},"~N,~N");
$_M(c$,"setLocation",
function(location){
this.setLocation(location.x,location.y);
},"$wt.graphics.Point");
$_M(c$,"setVisible",
function(visible){
if((this.style&(6))!=0)return;
if(visible){
this.display.addPopup(this);
}else{
this.display.removePopup(this);
this._setVisible(false);
}},"~B");
$_M(c$,"update",
function(){
var hasCheck=false;
var hasImage=false;
var items=this.getItems();
for(var i=0;i<items.length;i++){
var item=items[i];
if(item.image!=null){
if((hasImage=true)&&hasCheck)break;
}if((item.style&(48))!=0){
if((hasCheck=true)&&hasImage)break;
}}
});
c$.$Menu$1$=function(){
$_H();
c$=$_W($wt.widgets,"Menu$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var evt=this.getEvent();
var menuItems=this.b$["$wt.widgets.Menu"].items;
var index=this.b$["$wt.widgets.Menu"].currentIndex;
if(evt.keyCode==13||evt.keyCode==10){
if(index!=-1){
var i=menuItems[index];
var target=menuItems[index].handle;
if(i.isEnabled()){
try{
target.click();
}catch(e){
try{
var clickEvent=document.createEvent("MouseEvents");
clickEvent.initEvent("click",true,true);
target.dispatchEvent(clickEvent);
}catch(e){
}
}
}}}else if(evt.keyCode==38||evt.keyCode==104){
if(index==-1){
index=this.b$["$wt.widgets.Menu"].nextMenuItemIndex(-1);
var i=menuItems[index];
{
i.hItemMouseEnter();
}}else{
var i=menuItems[index];
index=this.b$["$wt.widgets.Menu"].nextMenuItemIndex(-1);
var i1=menuItems[index];
{
i.hItemMouseExit();
i1.hItemMouseEnter();
}}}else if(evt.keyCode==40||evt.keyCode==98){
if(index==-1){
index=this.b$["$wt.widgets.Menu"].nextMenuItemIndex(1);
var i=menuItems[index];
{
i.hItemMouseEnter();
}}else{
var i=menuItems[index];
index=this.b$["$wt.widgets.Menu"].nextMenuItemIndex(1);
var i1=menuItems[index];
{
i.hItemMouseExit();
i1.hItemMouseEnter();
}}}else if(evt.keyCode==37||evt.keyCode==100){
if((this.b$["$wt.widgets.Menu"].style&2)!=0){
if(index==-1){
index=this.b$["$wt.widgets.Menu"].nextMenuItemIndex(-1);
var i=menuItems[index];
{
i.hItemMouseEnter();
}}else{
var i=menuItems[index];
index=this.b$["$wt.widgets.Menu"].nextMenuItemIndex(-1);
var i1=menuItems[index];
{
i.hItemMouseExit();
i1.hItemMouseEnter();
}}}}else if(evt.keyCode==39||evt.keyCode==102){
if((this.b$["$wt.widgets.Menu"].style&2)!=0){
if(index==-1){
index=this.b$["$wt.widgets.Menu"].nextMenuItemIndex(1);
var i=menuItems[index];
{
i.hItemMouseEnter();
}}else{
var i=menuItems[index];
index=this.b$["$wt.widgets.Menu"].nextMenuItemIndex(1);
var i1=menuItems[index];
{
i.hItemMouseExit();
i1.hItemMouseEnter();
}}}}else{
for(var i=0;i<menuItems.length;i++){
if(menuItems[i]!=null&&menuItems[i].mnemonicChar==evt.keyCode){
var target=menuItems[i].handle;
if(menuItems[i].isEnabled()){
try{
target.click();
}catch(e){
try{
var clickEvent=document.createEvent("MouseEvents");
clickEvent.initEvent("click",true,true);
target.dispatchEvent(clickEvent);
}catch(e){
}
}
}break;
}}
}this.b$["$wt.widgets.Menu"].currentIndex=index;
});
c$=$_P();
};
c$.$Menu$2$=function(){
$_H();
c$=$_W($wt.widgets,"Menu$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var time=new java.util.Date().getTime();
if(time-this.b$["$wt.widgets.Menu"].lastFocusdTime>20){
if((this.b$["$wt.widgets.Menu"].style&2)==0){
this.b$["$wt.widgets.Menu"].handle.style.display="none";
this.b$["$wt.widgets.Menu"].sendEvent(23);
}else{
}}});
c$=$_P();
};
c$.$Menu$3$=function(){
$_H();
c$=$_W($wt.widgets,"Menu$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Menu"].lastFocusdTime=new java.util.Date().getTime();
});
c$=$_P();
};
c$.$Menu$4$=function(){
$_H();
c$=$_W($wt.widgets,"Menu$4",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Menu"].lastFocusdTime=new java.util.Date().getTime();
});
c$=$_P();
};
$_S(c$,
"ID_PPC",100,
"ID_SPMM",102,
"ID_SPBM",103,
"ID_SPMB",104,
"ID_SPBB",105,
"ID_SPSOFTKEY0",106,
"ID_SPSOFTKEY1",107,
"GROWTH_RATE",5);
});
$_L(["$wt.widgets.Control","$wt.graphics.RGB"],"$wt.widgets.Link",["java.lang.Character","$wt.graphics.Point","$wt.internal.RunnableCompatibility","$wt.internal.browser.OS","$wt.widgets.Event","$.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.Link", ".link-default {\nposition:absolute;\nleft:0;\ntop:0;\ncursor:default;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\nwhite-space:normal;\noverflow:hidden;\nbackground-color:buttonface;\n}\n.link-default a {\ncolor:rgb(0,51,153);\n}\n.link-disabled a {\ncolor:gray;\ncursor:default;\n}\n.link-default span {\ntext-decoration:underline;\n}\n.link-default a span {\ntext-decoration:underline;\n}\n.link-wrap {\nwhite-space:normal;\noverflow:hidden;\n}\n.link-border {\nborder-style:inset;\nborder-width:2px;\nborder-color:white;\n}\n.swt-widgets-link {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.text=null;
this.cachedText=null;
this.textSizeCached=false;
this.textWidthCached=0;
this.textHeightCached=0;
this.lastColor=null;
this.anchors=null;
this.offsets=null;
this.selection=null;
this.ids=null;
this.mnemonics=null;
this.focusIndex=0;
this.font=0;
this.hLinkSelectionHandler=null;
$_Z(this,arguments);
},$wt.widgets,"Link",$wt.widgets.Control);
$_Y(c$,function(){
this.anchors=new Array(0);
});
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
$_M(c$,"computeSize",
function(wHint,hHint,changed){
if(wHint!=-1&&wHint<0)wHint=0;
if(hHint!=-1&&hHint<0)hHint=0;
var width=0;
var height=0;
if(this.text!=null){
if((this.style&64)!=0&&wHint!=-1&&hHint==-1){
height=O$.getStringStyledWrappedHeight(this.cachedText,"link-default",this.handle.style.cssText,wHint);
}else{
if(!this.textSizeCached||changed){
var cssSize=O$.getStringStyledSize(this.cachedText,"link-default",this.handle.style.cssText);
this.textSizeCached=true;
this.textWidthCached=cssSize.x;
this.textHeightCached=cssSize.y;
}width=this.textWidthCached;
height=this.textHeightCached;
}}var border=this.getBorderWidth();
if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
width+=border*2;
height+=border*2;
return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_V(c$,"createHandle",
function(){
this.handle=d$.createElement("DIV");
this.handle.className="link-default";
if((this.style&64)!=0){
this.handle.className+=" link-wrap";
}if((this.style&2048)!=0){
this.handle.className+=" link-border";
}if(this.parent!=null){
var parentHandle=this.parent.containerHandle();
if(parentHandle!=null){
parentHandle.appendChild(this.handle);
}}O$.setTextSelection(this.handle,false);
});
$_M(c$,"createWidget",
function(){
$_U(this,$wt.widgets.Link,"createWidget",[]);
this.text="";
});
$_V(c$,"hookSelection",
function(){
if(this.anchors==null||this.anchors.length==0){
return;
}if(this.hLinkSelectionHandler!=null){
return;
}this.hLinkSelectionHandler=$_Q((($_D("$wt.widgets.Link$1")?0:org.eclipse.swt.widgets.Link.$Link$1$()),$_N($wt.widgets.Link$1,this,null)));
for(var i=0;i<this.anchors.length;i++){
this.anchors[i].href=O$.isIE?"#":"javascript:void(0);";
this.anchors[i].target="_self";
Clazz.addEvent(this.anchors[i],"click",this.hLinkSelectionHandler);
Clazz.addEvent(this.anchors[i],"dblclick",this.hLinkSelectionHandler);
}
});
$_V(c$,"getNameText",
function(){
return this.getText();
});
$_M(c$,"getText",
function(){
return this.text;
});
$_M(c$,"parse",
function(string,handle){
var el=handle;
var length=string.length;
this.offsets=new Array(Math.floor(length/4));
this.ids=new Array(Math.floor(length/4));
this.mnemonics=$_A(Math.floor(length/4)+1,0);
var result=$_A(0,'\0');
var result2=$_A(0,'\0');
var buffer=$_A(length,'\0');
string.getChars(0,string.length,buffer,0);
var index=0;
var state=0;
var linkIndex=0;
var start=0;
var tagStart=0;
var linkStart=0;
var endtagStart=0;
var refStart=0;
while(index<length){
var c=buffer[index];
if((c).charCodeAt(0)>=('A').charCodeAt (0) && (c).charCodeAt (0) <= ('Z').charCodeAt(0)){
c=String.fromCharCode((c).charCodeAt(0)+(32));
}switch(state){
case 0:
if((c).charCodeAt(0)==('<').charCodeAt(0)){
tagStart=index;
state++;
}break;
case 1:
if((c).charCodeAt(0)==('a').charCodeAt(0))state++;
break;
case 2:
switch(c){
case'h':
state=7;
break;
case'>':
linkStart=index+1;
state++;
break;
default:
if((c).charCodeAt(0)==32||(c).charCodeAt(0)==160)break;
else state=13;
}
break;
case 3:
if((c).charCodeAt(0)==('<').charCodeAt(0)){
endtagStart=index;
state++;
}break;
case 4:
state=(c).charCodeAt(0)==('/').charCodeAt(0)?state+1:3;
break;
case 5:
state=(c).charCodeAt(0)==('a').charCodeAt(0)?state+1:3;
break;
case 6:
if((c).charCodeAt(0)==('>').charCodeAt(0)){
this.mnemonics[linkIndex]=this.parseMnemonics(buffer,start,tagStart,result,result2,handle);
var offset=result.length;
var anchor=null;
if(handle!=null){
anchor=d$.createElement("A");
el.appendChild(anchor);
this.anchors[this.anchors.length]=anchor;
}this.parseMnemonics(buffer,linkStart,endtagStart,result,result2,anchor);
this.offsets[linkIndex]=new $wt.graphics.Point(offset,result.length-1);
if(this.ids[linkIndex]==null){
this.ids[linkIndex]=String.instantialize(buffer,linkStart,endtagStart-linkStart);
}if(anchor!=null){
if("#".equals(this.ids[linkIndex])){
anchor.href=O$.isIE?"#":"javascript:void(0);";
anchor.target="_self";
}else{
anchor.href=this.ids[linkIndex];
anchor.target="_blank";
}var title=this.ids[linkIndex];
if(title!=null&&title.length>0&&!title.startsWith("#")&&!title.startsWith("javascript:")){
anchor.title=this.ids[linkIndex];
}}linkIndex++;
start=tagStart=linkStart=endtagStart=refStart=index+1;
state=0;
}else{
state=3;
}break;
case 7:
state=(c).charCodeAt(0)==('r').charCodeAt(0)?state+1:0;
break;
case 8:
state=(c).charCodeAt(0)==('e').charCodeAt(0)?state+1:0;
break;
case 9:
state=(c).charCodeAt(0)==('f').charCodeAt(0)?state+1:0;
break;
case 10:
state=(c).charCodeAt(0)==('=').charCodeAt(0)?state+1:0;
break;
case 11:
if((c).charCodeAt(0)==('"').charCodeAt(0)){
state++;
refStart=index+1;
}else{
state=0;
}break;
case 12:
if((c).charCodeAt(0)==('"').charCodeAt(0)){
this.ids[linkIndex]=String.instantialize(buffer,refStart,index-refStart);
state=2;
}break;
case 13:
if(Character.isWhitespace(c)){
state=0;
}else if((c).charCodeAt(0)==('=').charCodeAt(0)){
state++;
}break;
case 14:
state=(c).charCodeAt(0)==('"').charCodeAt(0)?state+1:0;
break;
case 15:
if((c).charCodeAt(0)==('"').charCodeAt(0))state=2;
break;
default:
state=0;
break;
}
index++;
}
if(start<length){
var tmp=this.parseMnemonics(buffer,start,tagStart,result,result2,handle);
var mnemonic=this.parseMnemonics(buffer,linkStart,index,result,result2,handle);
if(mnemonic==-1)mnemonic=tmp;
this.mnemonics[linkIndex]=mnemonic;
}else{
this.mnemonics[linkIndex]=-1;
}if(this.offsets.length!=linkIndex){
var newOffsets=new Array(linkIndex);
System.arraycopy(this.offsets,0,newOffsets,0,linkIndex);
this.offsets=newOffsets;
var newIDs=new Array(linkIndex);
System.arraycopy(this.ids,0,newIDs,0,linkIndex);
this.ids=newIDs;
var newMnemonics=$_A(linkIndex+1,0);
System.arraycopy(this.mnemonics,0,newMnemonics,0,linkIndex+1);
this.mnemonics=newMnemonics;
}{
this.cachedText=result2.join('');
}if(this.anchors!=null&&this.anchors.length>0&&(this.hooks(13)||this.hooks(14))){
this.hookSelection();
}{
return result.join('');
}return result.toString();
},"~S,~O");
$_M(c$,"parseMnemonics",
function(buffer,start,end,result,result2,handle){
var el=handle;
var mnemonic=-1;
var index=start;
var lastIndex=result.length;
while(index<end){
var c=buffer[index];
result2[result2.length]=c;
if((c).charCodeAt(0)==('&').charCodeAt(0)){
if(index+1<end&&(buffer[index+1]).charCodeAt(0)==('&').charCodeAt(0)){
result[result.length]=c;
index++;
}else{
mnemonic=result.length;
if(el!=null){
if((mnemonic>lastIndex)&&(el!=null)){
var len=mnemonic-lastIndex;
var cs=$_A(len,'\0');
for(var i=0;i<cs.length;i++){
cs[i]=result[lastIndex+i];
}
var s=String.instantialize(cs,0,len);
el.appendChild(d$.createTextNode(s));
}lastIndex=mnemonic+1;
var span=d$.createElement("SPAN");
el.appendChild(span);
span.appendChild(d$.createTextNode(""+buffer[index+1]));
}}}else{
result[result.length]=c;
}var lineBreak=false;
if((c).charCodeAt(0)==('\r').charCodeAt(0)){
if(index+1<end&&(buffer[index+1]).charCodeAt(0)==('\n').charCodeAt(0)){
result[result.length]='\n';
index++;
}lineBreak=true;
}if((c).charCodeAt(0)==('\n').charCodeAt(0)){
lineBreak=true;
}if(lineBreak&&el!=null){
var idx=result.length;
if(idx>lastIndex){
var len=idx-lastIndex;
var cs=$_A(len,'\0');
for(var i=0;i<cs.length;i++){
cs[i]=result[lastIndex+i];
}
var s=String.instantialize(cs,0,len);
el.appendChild(d$.createTextNode(s));
}lastIndex=idx;
el.appendChild(d$.createElement("BR"));
}index++;
}
var idx=result.length;
if(idx>lastIndex&&el!=null){
var len=idx-lastIndex;
var cs=$_A(len,'\0');
for(var i=0;i<cs.length;i++){
cs[i]=result[lastIndex+i];
}
var s=String.instantialize(cs,0,len);
el.appendChild(d$.createTextNode(s));
}return mnemonic;
},"~A,~N,~N,~A,~A,~O");
$_M(c$,"releaseHandle",
function(){
for(var i=0;i<this.anchors.length;i++){
var anchor=this.anchors[i];
if(anchor==null){
continue;}if(this.hLinkSelectionHandler!=null){
Clazz.removeEvent(anchor,"click",this.hLinkSelectionHandler);
Clazz.removeEvent(anchor,"dblclick",this.hLinkSelectionHandler);
}O$.destroyHandle(anchor);
this.anchors[i]=null;
}
this.hLinkSelectionHandler=null;
$_U(this,$wt.widgets.Link,"releaseHandle",[]);
});
$_M(c$,"releaseWidget",
function(){
$_U(this,$wt.widgets.Link,"releaseWidget",[]);
this.offsets=null;
this.ids=null;
this.mnemonics=null;
this.text=null;
});
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
if(!this.hooks(13)&&!this.hooks(14)){
this.unhookSelection();
}},"$wt.events.SelectionListener");
$_M(c$,"setEnabled",
function(enabled){
$_U(this,$wt.widgets.Link,"setEnabled",[enabled]);
O$.updateCSSClass(this.handle,"link-disabled",!enabled);
if(!enabled){
this.lastColor=this.handle.style.color;
}else{
this.handle.style.color=this.lastColor;
this.lastColor=null;
}},"~B");
$_M(c$,"setForeground",
function(color){
$_U(this,$wt.widgets.Link,"setForeground",[color]);
if(this.lastColor!=null){
this.lastColor=this.handle.style.color;
}},"$wt.graphics.Color");
$_M(c$,"setFont",
function(font){
this.textSizeCached=false;
$_U(this,$wt.widgets.Link,"setFont",[font]);
},"$wt.graphics.Font");
$_M(c$,"setText",
function(string){
if(string.equals(this.text))return;
this.text=string;
this.textSizeCached=false;
this.anchors=new Array(0);
if(this.hLinkSelectionHandler!=null){
for(var i=0;i<this.anchors.length;i++){
var anchor=this.anchors[i];
Clazz.removeEvent(anchor,"click",this.hLinkSelectionHandler);
Clazz.removeEvent(anchor,"dblclick",this.hLinkSelectionHandler);
if(this.ids!=null){
if("#".equals(this.ids[i])){
anchor.href=O$.isIE?"#":"javascript:void(0);";
anchor.target="_self";
}else{
anchor.href=this.ids[i];
anchor.target="_blank";
}}}
}O$.clearChildren(this.handle);
this.parse(string,this.handle);
if(this.hLinkSelectionHandler!=null){
for(var i=0;i<this.anchors.length;i++){
this.anchors[i].href=O$.isIE?"#":"javascript:void(0);";
this.anchors[i].target="_self";
Clazz.addEvent(this.anchors[i],"click",this.hLinkSelectionHandler);
Clazz.addEvent(this.anchors[i],"dblclick",this.hLinkSelectionHandler);
}
}},"~S");
$_M(c$,"unhookSelection",
function(){
if(this.hLinkSelectionHandler==null){
return;
}for(var i=0;i<this.anchors.length;i++){
var anchor=this.anchors[i];
Clazz.removeEvent(anchor,"click",this.hLinkSelectionHandler);
Clazz.removeEvent(anchor,"dblclick",this.hLinkSelectionHandler);
if(this.ids!=null){
if("#".equals(this.ids[i])){
anchor.href=O$.isIE?"#":"javascript:void(0);";
anchor.target="_self";
}else{
anchor.href=this.ids[i];
anchor.target="_blank";
}}}
this.hLinkSelectionHandler=null;
});
c$.$Link$1$=function(){
$_H();
c$=$_W($wt.widgets,"Link$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=new $wt.widgets.Event();
e.type=13;
e.item=this.b$["$wt.widgets.Link"];
e.text=this.b$["$wt.widgets.Link"].text;
e.widget=this.b$["$wt.widgets.Link"];
e.display=this.b$["$wt.widgets.Link"].display;
this.b$["$wt.widgets.Link"].sendEvent(13);
this.toReturn(false);
{
var evt=this.getEvent();
evt.cancelBubble=true;
evt.returnValue=false;
}});
c$=$_P();
};
c$.LINK_FOREGROUND=c$.prototype.LINK_FOREGROUND=new $wt.graphics.RGB(0,51,153);
});
$_L(["$wt.widgets.Composite"],"$wt.widgets.Combo",["java.util.Date","$wt.graphics.Color","$.Point","$.Rectangle","$wt.internal.ResizeSystem","$.RunnableCompatibility","$wt.internal.browser.OS","$.Popup","$wt.internal.dnd.HTMLEventWrapper","$wt.widgets.Event","$.Text","$.TypedListener"],function(){
$WTC$$.registerCSS ("$wt.widgets.Combo", ".combo-default {\npadding: 0;\n/*overflow:hidden;*/\nposition:absolute;\n/*border-width:2px;\nborder-style:inset;\nborder-color:gray;*/\n}\n.combo-input-box {\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\npadding-left:1px;\noverflow:hidden;\n/*border-style:none;*/\n/*background-color:white;*/\n}\n@media all and (min-width:0px){/* opera and safari */\n.combo-input-box {\nmargin-top:-1px;\n}\nhtml:first-child .combo-input-box {\nmargin-top:-2px !important;\n}\n}\n.combo-default button {\n/*float:right;*/\nposition:absolute;\nright:0;\ntop:0;\nheight:100%;\nwidth:16px;\nline-height:0;\npadding:0;\nfont-size:0;\nmargin:0;\n}\n* html .combo-default button {\nright:-2px;\n}\n.combo-button-arrow-down {\nmargin:auto;\nheight:0;\nwidth:0;\nfont-size:0;\nline-height:0;\nborder-style:solid solid none solid;\nborder-color:transparent;\nborder-top-color:black !important;\nborder-bottom-width:0;\n}\n* html .combo-button-arrow-down {\nborder-color:buttonface;\n}\n.combo-disabled .combo-button-arrow-down {\nborder-top-color:gray !important;\n}\n.combo-disabled .combo-input-box {\nbackground-color:buttonface !important;\n}\n.combo-select-box-invisible {\npadding-left:1px;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\ndisplay:none;\n}\n.combo-select-box-visible {\npadding-left:1px;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\ndisplay:block;\n}\n.combo-select-box-notsimple {\npadding-left:1px;\nfont-family:Tahoma, Arial, sans-serif;\nfont-size:8pt;\nposition:absolute;\n}\n.swt-widgets-combo {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.noSelection=true;
this.ignoreModify=false;
this.ignoreCharacter=false;
this.visibleCount=5;
this.dropDownButton=null;
this.textInput=null;
this.selectInput=null;
this.lastBlurred=-1;
this.currentIndex=0;
this.selectShown=false;
this.visibleCountIsSet=false;
this.isSimple=false;
this.itemCount=0;
this.maxWidth=0;
this.textValue=null;
this.hDropDownClick=null;
this.hEditKeyUp=null;
this.hEditShow=null;
this.hTextChange=null;
this.hTextBlur=null;
this.hTextMouseUp=null;
this.hTextKeyUp=null;
this.hModifyFocus=null;
this.hModifyBlur=null;
this.hModifyKeyUp=null;
$_Z(this,arguments);
},$wt.widgets,"Combo",$wt.widgets.Composite);
$_M(c$,"add",
function(string){
if(this.selectInput!=null){
this.selectInput.options[this.itemCount]=new Option(string,string);
}this.itemCount++;
if(!this.visibleCountIsSet)this.visibleCount=Math.max(this.itemCount,5);
this.maxWidth=Math.max(this.maxWidth,O$.getStringStyledWidth(string,"combo-input-box",null));
},"~S");
$_M(c$,"add",
function(string,index){
var count=this.itemCount;
if(this.selectInput!=null){
this.selectInput.options[index]=new Option(string,string);
}if(!this.visibleCountIsSet)this.visibleCount=Math.max(this.itemCount,5);
},"~S,~N");
$_M(c$,"addModifyListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(24,typedListener);
},"$wt.events.ModifyListener");
$_M(c$,"addSelectionListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(13,typedListener);
this.addListener(14,typedListener);
},"$wt.events.SelectionListener");
$_M(c$,"addVerifyListener",
function(listener){
var typedListener=new $wt.widgets.TypedListener(listener);
this.addListener(25,typedListener);
},"$wt.events.VerifyListener");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
style&=-2049;
style&=-769;
style=$wt.widgets.Widget.checkBits(style,4,64,0,0,0,0);
if((style&64)!=0)return style&-9;
return style;
},"~N");
$_M(c$,"clearSelection",
function(){
});
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var width=0;
var height=0;
if(wHint==-1){
width=64;
}if(hHint==-1){
if((this.style&64)!=0){
height=this.computeSelectHeight();
}}if(width==0)width=64;
if(height==0)height=64;
if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
if((this.style&8)!=0){
width+=8;
}else{
width+=4;
}if((this.style&64)==0){
width+=19;
height=21;
}else{
var border=2;
width+=16+border*2;
var textHeight=O$.getStringStyledHeight("M","combo-input-box",null);
if((this.style&4)!=0){
height=textHeight+6;
}else{
height+=textHeight+10;
}}return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_M(c$,"computeSelectHeight",
($fz=function(){
return this.getItemHeight()*this.visibleCount;
},$fz.isPrivate=true,$fz));
$_M(c$,"copy",
function(){
});
$_M(c$,"createHandle",
function(){
$_U(this,$wt.widgets.Combo,"createHandle",[]);
this.state&=-3;
this.isSimple=(this.style&64)!=0;
this.handle.className+=" combo-default";
O$.removeCSSClass(this.handle,"composite-border");
this.dropDownButton=d$.createElement("BUTTON");
this.handle.appendChild(this.dropDownButton);
var btnArrow=d$.createElement("DIV");
btnArrow.className="combo-button-arrow-down";
this.dropDownButton.appendChild(btnArrow);
this.textInput=d$.createElement("INPUT");
this.textInput.type="text";
this.textInput.className="combo-input-box";
this.textInput.readOnly=(this.style&8)!=0;
var wrapper=d$.createElement("DIV");
wrapper.style.overflow="hidden";
this.handle.appendChild(wrapper);
wrapper.appendChild(this.textInput);
this.hEditShow=$_Q((($_D("$wt.widgets.Combo$1")?0:org.eclipse.swt.widgets.Combo.$Combo$1$()),$_N($wt.widgets.Combo$1,this,null)));
Clazz.addEvent(this.textInput,"dblclick",this.hEditShow);
this.hEditKeyUp=$_Q((($_D("$wt.widgets.Combo$2")?0:org.eclipse.swt.widgets.Combo.$Combo$2$()),$_N($wt.widgets.Combo$2,this,null)));
Clazz.addEvent(this.textInput,"keyup",this.hEditKeyUp);
this.selectShown=false;
this.hDropDownClick=$_Q((($_D("$wt.widgets.Combo$3")?0:org.eclipse.swt.widgets.Combo.$Combo$3$()),$_N($wt.widgets.Combo$3,this,null)));
Clazz.addEvent(this.dropDownButton,"click",this.hDropDownClick);
this.createSelect();
this.configureSelect();
});
$_M(c$,"hookFocusIn",
function(){
$_U(this,$wt.widgets.Combo,"hookFocusIn",[]);
Clazz.addEvent(this.textInput,"focus",this.hFocusIn);
});
$_M(c$,"hookFocusOut",
function(){
$_U(this,$wt.widgets.Combo,"hookFocusOut",[]);
Clazz.addEvent(this.textInput,"blur",this.hFocusOut);
});
$_V(c$,"hookModify",
function(){
if(this.hModifyKeyUp!=null){
return;
}this.hModifyKeyUp=$_Q((($_D("$wt.widgets.Combo$4")?0:org.eclipse.swt.widgets.Combo.$Combo$4$()),$_N($wt.widgets.Combo$4,this,null)));
Clazz.addEvent(this.textInput,"keyup",this.hModifyKeyUp);
Clazz.addEvent(this.textInput,"change",this.hModifyKeyUp);
this.hModifyBlur=$_Q((($_D("$wt.widgets.Combo$5")?0:org.eclipse.swt.widgets.Combo.$Combo$5$()),$_N($wt.widgets.Combo$5,this,null)));
Clazz.addEvent(this.textInput,"blur",this.hModifyBlur);
this.hModifyFocus=$_Q((($_D("$wt.widgets.Combo$6")?0:org.eclipse.swt.widgets.Combo.$Combo$6$()),$_N($wt.widgets.Combo$6,this,null)));
Clazz.addEvent(this.textInput,"focus",this.hModifyFocus);
});
$_M(c$,"hookSelection",
function(){
$_U(this,$wt.widgets.Combo,"hookSelection",[]);
Clazz.addEvent(this.selectInput,"selectchange",this.hSelection);
});
$_M(c$,"createSelect",
function(){
this.selectInput=d$.createElement("SELECT");
this.selectInput.style.top=this.height+"px";
this.selectInput.style.left=this.textInput.style.left;
this.selectInput.size=this.visibleCount;
this.handle.appendChild(this.selectInput);
if(this.isSimple){
this.selectInput.className="combo-select-box-visible";
}else{
this.selectInput.style.position="absolute";
this.selectInput.className="combo-select-box-invisible combo-select-box-notsimple";
$wt.internal.ResizeSystem.register(this.getShell(),0);
}});
$_M(c$,"configureSelect",
function(){
this.hTextChange=$_Q((($_D("$wt.widgets.Combo$7")?0:org.eclipse.swt.widgets.Combo.$Combo$7$()),$_N($wt.widgets.Combo$7,this,null)));
Clazz.addEvent(this.selectInput,"change",this.hTextChange);
this.hTextBlur=$_Q((($_D("$wt.widgets.Combo$8")?0:org.eclipse.swt.widgets.Combo.$Combo$8$()),$_N($wt.widgets.Combo$8,this,null)));
Clazz.addEvent(this.selectInput,"blur",this.hTextBlur);
this.hTextMouseUp=$_Q((($_D("$wt.widgets.Combo$9")?0:org.eclipse.swt.widgets.Combo.$Combo$9$()),$_N($wt.widgets.Combo$9,this,null)));
Clazz.addEvent(this.selectInput,"mouseup",this.hTextMouseUp);
this.hTextKeyUp=$_Q((($_D("$wt.widgets.Combo$10")?0:org.eclipse.swt.widgets.Combo.$Combo$10$()),$_N($wt.widgets.Combo$10,this,null)));
Clazz.addEvent(this.selectInput,"keyup",this.hTextKeyUp);
});
$_M(c$,"hide",
function(){
if(!this.selectShown){
return;
}this.selectShown=false;
try{
d$.body.removeChild(this.selectInput);
this.handle.appendChild(this.selectInput);
}catch(e){
if($_O(e,Throwable)){
}else{
throw e;
}
}
this.selectInput.className="combo-select-box-invisible"+(this.isSimple?"":" combo-select-box-notsimple");
O$.SetFocus(this.dropDownButton);
});
$_M(c$,"show",
function(){
var coordinate=O$.calcuateRelativePosition(this.handle,d$.body);
if(this.selectInput.style.overflow==="scroll"){
this.selectInput.style.overflow="auto";
this.selectInput.style.height="auto";
}this.selectInput.style.left="";
this.selectInput.style.top="";
this.selectInput.style.width="";
this.selectInput.style.height="";
this.selectInput.size=this.visibleCount;
var w=Math.max(this.maxWidth,O$.getContainerWidth(this.handle));
this.selectInput.style.display="none";
var h=O$.getContainerHeight(this.handle);
this.selectInput.style.display="";
if(O$.isFirefox){
h+=1;
}else if(O$.isIE){
coordinate.x-=1;
coordinate.y-=2;
}this.selectShown=true;
this.selectInput.style.zIndex=w$.currentTopZIndex+100;
this.selectInput.className="combo-select-box-visible"+(this.isSimple?"":" combo-select-box-notsimple");
var height=O$.getContainerHeight(this.selectInput);
var bounds=$wt.internal.browser.Popup.popupList(this.getMonitor().getClientArea(),new $wt.graphics.Rectangle(coordinate.x,coordinate.y,w,h),height);
if(O$.isIE){
this.selectInput.style.left=(bounds.x+1)+"px";
}else{
this.selectInput.style.left=bounds.x+"px";
}this.selectInput.style.top=bounds.y+"px";
if(bounds.height!=height){
this.selectInput.style.overflow="scroll";
this.selectInput.style.height=bounds.height+"px";
}this.selectInput.style.width=bounds.width+"px";
try{
this.handle.removeChild(this.selectInput);
d$.body.appendChild(this.selectInput);
}catch(e){
if($_O(e,Throwable)){
}else{
throw e;
}
}
O$.SetFocus(this.selectInput);
});
$_M(c$,"updateSelection",
function(){
var i=this.getSelectionIndex();
if(i<0)return;
this.textInput.value=this.selectInput.options[i].value;
this.setText(this.getItem(i));
this.sendEvent(13);
});
$_M(c$,"cut",
function(){
if((this.style&8)!=0)return;
});
$_M(c$,"deselect",
function(index){
this.selectInput.selectedIndex=-1;
this.sendEvent(24);
},"~N");
$_M(c$,"deselectAll",
function(){
this.selectInput.selectedIndex=-1;
this.setText("",false);
this.sendEvent(24);
});
$_M(c$,"getItem",
function(index){
return this.selectInput.options[index].value;
},"~N");
$_M(c$,"getItemCount",
function(){
return this.itemCount;
});
$_M(c$,"getItemHeight",
function(){
return O$.getStringStyledHeight("A","combo-input-box",null)+1;
});
$_M(c$,"getItems",
function(){
var count=this.getItemCount();
var result=new Array(count);
for(var i=0;i<count;i++)result[i]=this.getItem(i);

return result;
});
$_V(c$,"getNameText",
function(){
return this.getText();
});
$_M(c$,"getOrientation",
function(){
return this.style&(100663296);
});
$_M(c$,"getSelection",
function(){
return new $wt.graphics.Point(0,0);
});
$_M(c$,"getSelectionIndex",
function(){
if(this.noSelection)return-1;
return this.selectInput.selectedIndex;
});
$_M(c$,"getText",
function(){
return this.textInput.value;
});
$_M(c$,"getTextHeight",
function(){
return O$.getStringStyledHeight("A","combo-input-box",null)+6;
});
$_M(c$,"getTextLimit",
function(){
return this.textInput.size;
});
$_M(c$,"getVisibleItemCount",
function(){
return this.visibleCount;
});
$_V(c$,"hasFocus",
function(){
return false;
});
$_M(c$,"indexOf",
function(string){
return this.indexOf(string,0);
},"~S");
$_M(c$,"indexOf",
function(string,start){
var count=this.getItemCount();
for(var i=start;i<count;i++){
if(string.equals(this.getItem(i)))return i;
}
return-1;
},"~S,~N");
$_M(c$,"paste",
function(){
if((this.style&8)!=0)return;
});
$_M(c$,"remove",
function(index){
var oldOptions=this.selectInput.options;
if(this.selectInput.selectedIndex==index){
this.noSelection=true;
}var newOptions=new Array(oldOptions.length-1);
System.arraycopy(oldOptions,0,newOptions,0,index);
System.arraycopy(oldOptions,index+1,newOptions,index,oldOptions.length-index-1);
this.selectInput.options=newOptions;
this.itemCount--;
if(!this.visibleCountIsSet)this.visibleCount=Math.max(this.itemCount,5);
},"~N");
$_M(c$,"remove",
function(start,end){
if(start>end)return;
var oldOptions=this.selectInput.options;
if(start<=this.selectInput.selectedIndex&&this.selectInput.selectedIndex<=end){
this.noSelection=true;
}var newOptions=new Array(oldOptions.length-(end-start+1));
System.arraycopy(oldOptions,0,newOptions,0,start);
System.arraycopy(oldOptions,end+1,newOptions,start,oldOptions.length-end-1);
this.selectInput.options=newOptions;
this.itemCount-=(end-start+1);
if(!this.visibleCountIsSet)this.visibleCount=Math.max(5,this.itemCount);
},"~N,~N");
$_M(c$,"remove",
function(string){
var index=this.indexOf(string,0);
if(this.selectInput.selectedIndex==index){
this.noSelection=true;
}this.remove(index);
},"~S");
$_M(c$,"removeAll",
function(){
{
this.selectInput.options.length=0;
}this.noSelection=true;
this.itemCount=0;
this.textInput.value="";
this.sendEvent(24);
this.itemCount=0;
if(!this.visibleCountIsSet)this.visibleCount=5;
});
$_M(c$,"removeModifyListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(24,listener);
},"$wt.events.ModifyListener");
$_M(c$,"removeSelectionListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(13,listener);
this.eventTable.unhook(14,listener);
},"$wt.events.SelectionListener");
$_M(c$,"removeVerifyListener",
function(listener){
if(this.eventTable==null)return;
this.eventTable.unhook(25,listener);
},"$wt.events.VerifyListener");
$_M(c$,"select",
function(index){
if(index>=0&&index<this.itemCount){
this.noSelection=false;
this.selectInput.selectedIndex=index;
this.setText(this.getItem(index));
}},"~N");
$_M(c$,"setBounds",
function(x,y,width,height,flags){
var buttonHeight=this.getTextHeight();
if(!this.isSimple){
$_U(this,$wt.widgets.Combo,"setBounds",[x,y,width,height,flags]);
var buttonWidth=Math.min(O$.getScrollBarWidth(),height-2);
this.dropDownButton.style.width=buttonWidth+"px";
this.textInput.style.paddingRight=buttonWidth+"px";
this.textInput.style.width=Math.max(0,width-buttonWidth-5)+"px";
this.textInput.style.height=Math.max(0,height-6)+"px";
this.textInput.style.lineHeight=Math.max(0,height-6)+"px";
if(O$.isFirefox&&!O$.isFirefox10&&!O$.isFirefox20){
this.textInput.style.width=Math.max(0,width-buttonWidth-3)+"px";
this.textInput.style.height=Math.max(0,height-4)+"px";
this.textInput.style.lineHeight=Math.max(0,height-4)+"px";
this.textInput.style.marginTop="0";
}else if(O$.isSafari||O$.isChrome){
this.textInput.style.marginTop="0";
}else if(O$.isIE){
this.dropDownButton.style.right="1px";
this.dropDownButton.style.top="2px";
if(!O$.isIE80){
this.textInput.style.marginTop="-1px";
}}else{
this.dropDownButton.style.right="0";
this.textInput.style.marginTop="0";
}if(!O$.isIE){
this.dropDownButton.style.height=Math.max(0,height-4)+"px";
this.dropDownButton.style.right="2px";
this.dropDownButton.style.top="2px";
}this.selectInput.style.width=width+"px";
}else{
$_U(this,$wt.widgets.Combo,"setBounds",[x,y,width,height,flags]);
this.selectInput.style.height=(Math.max(0,height-buttonHeight+2))+"px";
this.textInput.style.height=(buttonHeight-6)+"px";
this.textInput.style.lineHeight=(buttonHeight-6)+"px";
this.dropDownButton.style.display="none";
if(O$.isFirefox&&!O$.isFirefox10&&!O$.isFirefox20){
this.textInput.style.width=(width-3)+"px";
}else{
this.textInput.style.width=(width-6)+"px";
}if(O$.isChrome||O$.isSafari||O$.isOpera){
this.textInput.style.marginTop="0";
this.selectInput.style.marginTop="0";
this.textInput.style.height=(buttonHeight-8)+"px";
if(O$.isChrome){
this.textInput.style.width=(width-5)+"px";
}}else if(O$.isIE||O$.isOpera){
if(O$.isIE&&!O$.isIE80&&!O$.isIE70){
this.textInput.style.marginTop="-1px";
this.selectInput.style.marginTop="-2px";
this.selectInput.style.marginLeft="-1px";
this.selectInput.style.width=(width+2)+"px";
this.selectInput.style.height=(Math.max(0,height-buttonHeight+2))+"px";
}else if(O$.isIE70){
this.textInput.style.marginTop="-1px";
this.selectInput.style.marginTop="-1px";
this.selectInput.style.width=width+"px";
this.selectInput.style.height=(Math.max(0,height-buttonHeight+2))+"px";
}else{
this.selectInput.style.width=width+"px";
this.selectInput.style.height=(Math.max(0,height-buttonHeight))+"px";
}}else if(O$.isFirefox10||O$.isFirefox20){
this.textInput.style.width=(width-5)+"px";
this.selectInput.style.height=(Math.max(0,height-buttonHeight))+"px";
}else{
this.selectInput.style.width=width+"px";
}}},"~N,~N,~N,~N,~N");
$_V(c$,"fontHandle",
function(){
return this.textInput;
});
$_V(c$,"setForeground",
function(color){
if(color!=null){
this.textInput.style.color=color.getCSSHandle();
}else{
this.textInput.style.color="";
}},"$wt.graphics.Color");
$_V(c$,"setBackground",
function(color){
if(color!=null){
this.textInput.style.backgroundColor=color.getCSSHandle();
}else{
this.textInput.style.backgroundColor="";
}},"$wt.graphics.Color");
$_V(c$,"getBackground",
function(){
var bg=this.textInput.style.backgroundColor;
if(bg==null||(""+bg).length==0){
return new $wt.graphics.Color(this.display,"white");
}return new $wt.graphics.Color(this.display,bg);
});
$_V(c$,"getForeground",
function(){
var fg=this.textInput.style.color;
if(fg==null||(""+fg).length==0){
return new $wt.graphics.Color(this.display,"black");
}return new $wt.graphics.Color(this.display,this.handle.style.color);
});
$_M(c$,"setItem",
function(index,string){
this.remove(index);
if(this.isDisposed())return;
this.add(string,index);
},"~N,~S");
$_M(c$,"setItems",
function(items){
for(var i=0;i<items.length;i++){
}
for(var i=0;i<items.length;i++){
var string=items[i];
this.add(string);
}
this.sendEvent(24);
},"~A");
$_M(c$,"setOrientation",
function(orientation){
},"~N");
$_M(c$,"setSelection",
function(selection){
$wt.widgets.Text.setTextSelection(this.textInput,selection.x+1,selection.y+2);
},"$wt.graphics.Point");
$_M(c$,"setFont",
function(font){
$_U(this,$wt.widgets.Combo,"setFont",[font]);
var handle=this.fontHandle();
this.selectInput.style.fontFamily=handle.style.fontFamily;
this.selectInput.style.fontSize=handle.style.fontSize;
},"$wt.graphics.Font");
$_M(c$,"setText",
function(string){
this.setText(string,true);
},"~S");
$_M(c$,"setText",
function(string,modify){
var index=this.indexOf(string);
if(index!=-1&&this.selectInput.selectedIndex!=index){
this.select(index);
}this.textInput.value=string;
if(this.textValue!==string){
this.textValue=string;
this.sendEvent(24);
}},"~S,~B");
$_M(c$,"setTextLimit",
function(limit){
this.textInput.size=limit;
},"~N");
$_M(c$,"setVisibleItemCount",
function(count){
if(count<0)return;
this.visibleCount=count;
this.visibleCountIsSet=true;
this.selectInput.size=count;
if((this.style&4)!=0){
this.forceResize();
}},"~N");
$_M(c$,"traverseEscape",
function(){
if((this.style&4)!=0){
}return $_U(this,$wt.widgets.Combo,"traverseEscape",[]);
});
$_M(c$,"verifyText",
function(string,start,end,keyEvent){
var event=new $wt.widgets.Event();
event.text=string;
event.start=start;
event.end=end;
if(keyEvent!=null){
event.character=keyEvent.character;
event.keyCode=keyEvent.keyCode;
event.stateMask=keyEvent.stateMask;
}this.sendEvent(25,event);
if(!event.doit||this.isDisposed())return null;
return event.text;
},"~S,~N,~N,$wt.widgets.Event");
$_M(c$,"releaseHandle",
function(){
if(this.selectInput!=null){
if(this.hSelection!=null){
Clazz.removeEvent(this.selectInput,"selectchange",this.hSelection);
}Clazz.removeEvent(this.selectInput,"change",this.hTextChange);
this.hTextChange=null;
Clazz.removeEvent(this.selectInput,"blur",this.hTextBlur);
this.hTextBlur=null;
Clazz.removeEvent(this.selectInput,"mouseup",this.hTextMouseUp);
this.hTextMouseUp=null;
Clazz.removeEvent(this.selectInput,"keyup",this.hTextKeyUp);
this.hTextKeyUp=null;
O$.destroyHandle(this.selectInput);
this.selectInput=null;
}if(this.dropDownButton!=null){
Clazz.removeEvent(this.dropDownButton,"click",this.hDropDownClick);
this.hDropDownClick=null;
O$.destroyHandle(this.dropDownButton);
this.dropDownButton=null;
}if(this.textInput!=null){
if(this.hFocusIn!=null){
Clazz.removeEvent(this.textInput,"focus",this.hFocusIn);
}if(this.hFocusOut!=null){
Clazz.removeEvent(this.textInput,"blur",this.hFocusOut);
}if(this.hModifyBlur!=null){
Clazz.removeEvent(this.textInput,"blur",this.hModifyBlur);
this.hModifyBlur=null;
}if(this.hModifyFocus!=null){
Clazz.removeEvent(this.textInput,"focus",this.hModifyFocus);
this.hModifyFocus=null;
}if(this.hModifyKeyUp!=null){
Clazz.removeEvent(this.textInput,"change",this.hModifyKeyUp);
Clazz.removeEvent(this.textInput,"keyup",this.hModifyKeyUp);
this.hModifyKeyUp=null;
}Clazz.removeEvent(this.textInput,"dblclick",this.hEditShow);
this.hEditShow=null;
Clazz.removeEvent(this.textInput,"keyup",this.hEditKeyUp);
this.hEditKeyUp=null;
O$.destroyHandle(this.textInput);
this.textInput=null;
}$_U(this,$wt.widgets.Combo,"releaseHandle",[]);
});
$_M(c$,"enableWidget",
function(enabled){
$_U(this,$wt.widgets.Combo,"enableWidget",[enabled]);
this.textInput.disabled=!enabled;
this.dropDownButton.disabled=!enabled;
O$.updateCSSClass(this.handle,"combo-disabled",!enabled);
},"~B");
$_V(c$,"SetWindowPos",
function(hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags){
if(O$.isIE){
this.dropDownButton.style.height=(cy-4)+"px";
}if((this.style&67108864)!=0){
this.dropDownButton.style.left="1px";
this.dropDownButton.style.right="auto";
}O$.updateArrowSize(this.dropDownButton.childNodes[0],1024,16,cy);
var el=hWnd;
el.style.left=X+"px";
el.style.top=Y+"px";
el.style.width=(cx>0?cx:0)+"px";
el.style.height=(cy>0?cy:0)+"px";
return true;
},"~O,~O,~N,~N,~N,~N,~N");
c$.$Combo$1$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$1",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if(!this.b$["$wt.widgets.Combo"].isSimple&&this.b$["$wt.widgets.Combo"].itemCount>0){
this.b$["$wt.widgets.Combo"].show();
}});
c$=$_P();
};
c$.$Combo$2$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$2",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var e=this.getEvent();
var items=this.b$["$wt.widgets.Combo"].getItems();
if(items.length==0){
return;
}if(e.keyCode==38||e.keyCode==40){
var text=this.b$["$wt.widgets.Combo"].getText();
this.b$["$wt.widgets.Combo"].currentIndex=-1;
for(var i=0;i<items.length;i++){
if(text.equals(items[i])){
this.b$["$wt.widgets.Combo"].currentIndex=i;
break;
}}
if(this.b$["$wt.widgets.Combo"].currentIndex<0){
this.b$["$wt.widgets.Combo"].currentIndex=this.b$["$wt.widgets.Combo"].selectInput.selectedIndex;
}}switch(e.keyCode){
case 38:
if(this.b$["$wt.widgets.Combo"].currentIndex>0){
this.b$["$wt.widgets.Combo"].currentIndex--;
}if(this.b$["$wt.widgets.Combo"].currentIndex>=items.length){
this.b$["$wt.widgets.Combo"].currentIndex=items.length-1;
}this.b$["$wt.widgets.Combo"].selectInput.selectedIndex=this.b$["$wt.widgets.Combo"].currentIndex;
{
var selection=this.b$["$wt.widgets.Combo"].noSelection;
this.b$["$wt.widgets.Combo"].noSelection=false;
this.b$["$wt.widgets.Combo"].updateSelection();
this.b$["$wt.widgets.Combo"].noSelection=selection;
}this.toReturn(false);
break;
case 40:
if(this.b$["$wt.widgets.Combo"].currentIndex<items.length){
this.b$["$wt.widgets.Combo"].currentIndex++;
}if(this.b$["$wt.widgets.Combo"].currentIndex>=items.length){
this.b$["$wt.widgets.Combo"].currentIndex=items.length-1;
}this.b$["$wt.widgets.Combo"].selectInput.selectedIndex=this.b$["$wt.widgets.Combo"].currentIndex;
{
var selection=this.b$["$wt.widgets.Combo"].noSelection;
this.b$["$wt.widgets.Combo"].noSelection=false;
this.b$["$wt.widgets.Combo"].updateSelection();
this.b$["$wt.widgets.Combo"].noSelection=selection;
}this.toReturn(false);
break;
}
});
c$=$_P();
};
c$.$Combo$3$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$3",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var now=new java.util.Date().getTime();
if(now-this.b$["$wt.widgets.Combo"].lastBlurred<200){
return;
}if(!this.b$["$wt.widgets.Combo"].isSimple&&this.b$["$wt.widgets.Combo"].itemCount>0){
if(!this.b$["$wt.widgets.Combo"].selectShown){
this.b$["$wt.widgets.Combo"].show();
}else{
this.b$["$wt.widgets.Combo"].hide();
}}});
c$=$_P();
};
c$.$Combo$4$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$4",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
if((this.b$["$wt.widgets.Combo"].style&8)!=0||(this.b$["$wt.widgets.Combo"].hooks(25)&&!this.b$["$wt.widgets.Combo"].filters(25))){
this.toReturn(true);
return;
}var newText=this.b$["$wt.widgets.Combo"].textInput.value;
if(newText!=null){
newText=this.b$["$wt.widgets.Combo"].verifyText(newText,0,0,null);
if(newText==null){
this.toReturn(true);
return;
}if(this.b$["$wt.widgets.Combo"].textValue!==this.b$["$wt.widgets.Combo"].textInput.value){
this.b$["$wt.widgets.Combo"].textValue=this.b$["$wt.widgets.Combo"].textInput.value;
var e=new $wt.widgets.Event();
e.type=24;
e.item=this.b$["$wt.widgets.Combo"];
e.widget=this.b$["$wt.widgets.Combo"];
this.b$["$wt.widgets.Combo"].sendEvent(e);
this.toReturn(e.doit);
}}});
c$=$_P();
};
c$.$Combo$5$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$5",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
O$.removeCSSClass(this.b$["$wt.widgets.Combo"].handle,"text-focus");
var e=new $wt.widgets.Event();
e.type=16;
e.item=this.b$["$wt.widgets.Combo"];
e.widget=this.b$["$wt.widgets.Combo"];
this.b$["$wt.widgets.Combo"].sendEvent(e);
this.toReturn(e.doit);
});
c$=$_P();
};
c$.$Combo$6$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$6",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
O$.addCSSClass(this.b$["$wt.widgets.Combo"].handle,"text-focus");
var e=new $wt.widgets.Event();
e.type=15;
e.item=this.b$["$wt.widgets.Combo"];
e.widget=this.b$["$wt.widgets.Combo"];
this.b$["$wt.widgets.Combo"].sendEvent(e);
this.toReturn(e.doit);
});
c$=$_P();
};
c$.$Combo$7$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$7",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Combo"].noSelection=false;
this.b$["$wt.widgets.Combo"].updateSelection();
});
c$=$_P();
};
c$.$Combo$8$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$8",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Combo"].lastBlurred=new java.util.Date().getTime();
if(!this.b$["$wt.widgets.Combo"].isSimple&&this.b$["$wt.widgets.Combo"].itemCount>0)this.b$["$wt.widgets.Combo"].hide();
});
c$=$_P();
};
c$.$Combo$9$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$9",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Combo"].noSelection=false;
this.b$["$wt.widgets.Combo"].updateSelection();
if(!this.b$["$wt.widgets.Combo"].isSimple&&this.b$["$wt.widgets.Combo"].itemCount>0){
var el=new $wt.internal.dnd.HTMLEventWrapper(this.getEvent()).target;
if(O$.isIE||O$.isSafari||(el!=null&&el.nodeName==="OPTION")){
if(O$.isIE){
this.b$["$wt.widgets.Combo"].getDisplay().timerExec(50,(($_D("$wt.widgets.Combo$9$1")?0:org.eclipse.swt.widgets.Combo.$Combo$9$1$()),$_N($wt.widgets.Combo$9$1,this,null)));
}else{
this.b$["$wt.widgets.Combo"].hide();
}}}});
c$=$_P();
};
c$.$Combo$9$1$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$9$1",null,Runnable);
$_V(c$,"run",
function(){
this.b$["$wt.widgets.Combo"].hide();
});
c$=$_P();
};
c$.$Combo$10$=function(){
$_H();
c$=$_W($wt.widgets,"Combo$10",$wt.internal.RunnableCompatibility);
$_V(c$,"run",
function(){
var evt=this.getEvent();
var keyCode=evt.keyCode;
if(keyCode==27||keyCode==13||keyCode==10){
this.b$["$wt.widgets.Combo"].hide();
}});
c$=$_P();
};
$_S(c$,
"LIMIT",0x7FFF);
});
$_L(["$wt.widgets.Composite"],"$wt.browser.Browser",["$wt.internal.browser.OS"],function(){
$WTC$$.registerCSS ("$wt.browser.Browser", ".browser-default {\nwidth:100%;\nheight:100%;\nbackground-color:white;\n}\n* html .browser-default {\nborder:2px solid menu;\n}\n.swt-browser-browser {\nwidth:324px;\n}\n");
c$=$_C(function(){
this.$back=false;
this.$forward=false;
this.navigate=false;
this.delaySetText=false;
this.addressBar=true;
this.menuBar=true;
this.statusBar=true;
this.toolBar=true;
this.info=0;
this.globalDispatch=0;
this.html=null;
this.closeWindowListeners=null;
this.locationListeners=null;
this.openWindowListeners=null;
this.progressListeners=null;
this.statusTextListeners=null;
this.titleListeners=null;
this.visibilityWindowListeners=null;
this.url=null;
this.browserHandle=null;
$_Z(this,arguments);
},$wt.browser,"Browser",$wt.widgets.Composite);
$_Y(c$,function(){
this.closeWindowListeners=new Array(0);
this.locationListeners=new Array(0);
this.openWindowListeners=new Array(0);
this.progressListeners=new Array(0);
this.statusTextListeners=new Array(0);
this.titleListeners=new Array(0);
this.visibilityWindowListeners=new Array(0);
});
$_K(c$,
function(parent,style){
$_R(this,$wt.browser.Browser,[parent,style&-2049]);
},"$wt.widgets.Composite,~N");
$_M(c$,"addCloseWindowListener",
function(listener){
var newCloseWindowListeners=new Array(this.closeWindowListeners.length+1);
System.arraycopy(this.closeWindowListeners,0,newCloseWindowListeners,0,this.closeWindowListeners.length);
this.closeWindowListeners=newCloseWindowListeners;
this.closeWindowListeners[this.closeWindowListeners.length-1]=listener;
},"$wt.browser.CloseWindowListener");
$_M(c$,"addLocationListener",
function(listener){
var newLocationListeners=new Array(this.locationListeners.length+1);
System.arraycopy(this.locationListeners,0,newLocationListeners,0,this.locationListeners.length);
this.locationListeners=newLocationListeners;
this.locationListeners[this.locationListeners.length-1]=listener;
},"$wt.browser.LocationListener");
$_M(c$,"addOpenWindowListener",
function(listener){
var newOpenWindowListeners=new Array(this.openWindowListeners.length+1);
System.arraycopy(this.openWindowListeners,0,newOpenWindowListeners,0,this.openWindowListeners.length);
this.openWindowListeners=newOpenWindowListeners;
this.openWindowListeners[this.openWindowListeners.length-1]=listener;
},"$wt.browser.OpenWindowListener");
$_M(c$,"addProgressListener",
function(listener){
var newProgressListeners=new Array(this.progressListeners.length+1);
System.arraycopy(this.progressListeners,0,newProgressListeners,0,this.progressListeners.length);
this.progressListeners=newProgressListeners;
this.progressListeners[this.progressListeners.length-1]=listener;
},"$wt.browser.ProgressListener");
$_M(c$,"addStatusTextListener",
function(listener){
var newStatusTextListeners=new Array(this.statusTextListeners.length+1);
System.arraycopy(this.statusTextListeners,0,newStatusTextListeners,0,this.statusTextListeners.length);
this.statusTextListeners=newStatusTextListeners;
this.statusTextListeners[this.statusTextListeners.length-1]=listener;
},"$wt.browser.StatusTextListener");
$_M(c$,"addTitleListener",
function(listener){
var newTitleListeners=new Array(this.titleListeners.length+1);
System.arraycopy(this.titleListeners,0,newTitleListeners,0,this.titleListeners.length);
this.titleListeners=newTitleListeners;
this.titleListeners[this.titleListeners.length-1]=listener;
},"$wt.browser.TitleListener");
$_M(c$,"addVisibilityWindowListener",
function(listener){
var newVisibilityWindowListeners=new Array(this.visibilityWindowListeners.length+1);
System.arraycopy(this.visibilityWindowListeners,0,newVisibilityWindowListeners,0,this.visibilityWindowListeners.length);
this.visibilityWindowListeners=newVisibilityWindowListeners;
this.visibilityWindowListeners[this.visibilityWindowListeners.length-1]=listener;
},"$wt.browser.VisibilityWindowListener");
$_M(c$,"back",
function(){
if(!this.$back)return false;
if(this.browserHandle!=null&&this.browserHandle.contentWindow!=null){
try{
this.browserHandle.contentWindow.history.back();
this.$forward=true;
return true;
}catch(e){
if($_O(e,Error)){
return false;
}else{
throw e;
}
}
}return false;
});
$_M(c$,"createHandle",
function(){
$_U(this,$wt.browser.Browser,"createHandle",[]);
this.browserHandle=d$.createElement("IFRAME");
this.browserHandle.className="browser-default";
this.browserHandle.style.border="0 none transparent";
if(O$.isIE){
this.browserHandle.setAttribute("frameBorder","0");
}this.handle.appendChild(this.browserHandle);
});
$_M(c$,"execute",
function(script){
{
try{
this.browserHandle.contentWindow.eval(script);
}catch(e){
return false;
}
}return true;
},"~S");
$_M(c$,"forward",
function(){
if(!this.$forward)return false;
if(this.browserHandle!=null&&this.browserHandle.contentWindow!=null){
try{
this.browserHandle.contentWindow.history.forward();
return true;
}catch(e){
if($_O(e,Error)){
return false;
}else{
throw e;
}
}
}return false;
});
$_M(c$,"isBackEnabled",
function(){
return this.$back;
});
$_M(c$,"isForwardEnabled",
function(){
return this.$forward;
});
$_M(c$,"getUrl",
function(){
return this.handle.contentWindow.location;
});
$_M(c$,"refresh",
function(){
if(this.browserHandle!=null){
try{
var win=this.browserHandle.contentWindow;
if(win!=null){
win.reload();
}else{
this.browserHandle.src=this.url;
}
}catch(e){
this.browserHandle.src=this.url;
}
}});
$_M(c$,"releaseHandle",
function(){
if(this.browserHandle!=null){
O$.destroyHandle(this.browserHandle);
this.browserHandle=null;
}$_U(this,$wt.browser.Browser,"releaseHandle",[]);
});
$_M(c$,"removeCloseWindowListener",
function(listener){
if(this.closeWindowListeners.length==0)return;
var index=-1;
for(var i=0;i<this.closeWindowListeners.length;i++){
if(listener===this.closeWindowListeners[i]){
index=i;
break;
}}
if(index==-1)return;
if(this.closeWindowListeners.length==1){
this.closeWindowListeners=new Array(0);
return;
}var newCloseWindowListeners=new Array(this.closeWindowListeners.length-1);
System.arraycopy(this.closeWindowListeners,0,newCloseWindowListeners,0,index);
System.arraycopy(this.closeWindowListeners,index+1,newCloseWindowListeners,index,this.closeWindowListeners.length-index-1);
this.closeWindowListeners=newCloseWindowListeners;
},"$wt.browser.CloseWindowListener");
$_M(c$,"removeLocationListener",
function(listener){
if(this.locationListeners.length==0)return;
var index=-1;
for(var i=0;i<this.locationListeners.length;i++){
if(listener===this.locationListeners[i]){
index=i;
break;
}}
if(index==-1)return;
if(this.locationListeners.length==1){
this.locationListeners=new Array(0);
return;
}var newLocationListeners=new Array(this.locationListeners.length-1);
System.arraycopy(this.locationListeners,0,newLocationListeners,0,index);
System.arraycopy(this.locationListeners,index+1,newLocationListeners,index,this.locationListeners.length-index-1);
this.locationListeners=newLocationListeners;
},"$wt.browser.LocationListener");
$_M(c$,"removeOpenWindowListener",
function(listener){
if(this.openWindowListeners.length==0)return;
var index=-1;
for(var i=0;i<this.openWindowListeners.length;i++){
if(listener===this.openWindowListeners[i]){
index=i;
break;
}}
if(index==-1)return;
if(this.openWindowListeners.length==1){
this.openWindowListeners=new Array(0);
return;
}var newOpenWindowListeners=new Array(this.openWindowListeners.length-1);
System.arraycopy(this.openWindowListeners,0,newOpenWindowListeners,0,index);
System.arraycopy(this.openWindowListeners,index+1,newOpenWindowListeners,index,this.openWindowListeners.length-index-1);
this.openWindowListeners=newOpenWindowListeners;
},"$wt.browser.OpenWindowListener");
$_M(c$,"removeProgressListener",
function(listener){
if(this.progressListeners.length==0)return;
var index=-1;
for(var i=0;i<this.progressListeners.length;i++){
if(listener===this.progressListeners[i]){
index=i;
break;
}}
if(index==-1)return;
if(this.progressListeners.length==1){
this.progressListeners=new Array(0);
return;
}var newProgressListeners=new Array(this.progressListeners.length-1);
System.arraycopy(this.progressListeners,0,newProgressListeners,0,index);
System.arraycopy(this.progressListeners,index+1,newProgressListeners,index,this.progressListeners.length-index-1);
this.progressListeners=newProgressListeners;
},"$wt.browser.ProgressListener");
$_M(c$,"removeStatusTextListener",
function(listener){
if(this.statusTextListeners.length==0)return;
var index=-1;
for(var i=0;i<this.statusTextListeners.length;i++){
if(listener===this.statusTextListeners[i]){
index=i;
break;
}}
if(index==-1)return;
if(this.statusTextListeners.length==1){
this.statusTextListeners=new Array(0);
return;
}var newStatusTextListeners=new Array(this.statusTextListeners.length-1);
System.arraycopy(this.statusTextListeners,0,newStatusTextListeners,0,index);
System.arraycopy(this.statusTextListeners,index+1,newStatusTextListeners,index,this.statusTextListeners.length-index-1);
this.statusTextListeners=newStatusTextListeners;
},"$wt.browser.StatusTextListener");
$_M(c$,"removeTitleListener",
function(listener){
if(this.titleListeners.length==0)return;
var index=-1;
for(var i=0;i<this.titleListeners.length;i++){
if(listener===this.titleListeners[i]){
index=i;
break;
}}
if(index==-1)return;
if(this.titleListeners.length==1){
this.titleListeners=new Array(0);
return;
}var newTitleListeners=new Array(this.titleListeners.length-1);
System.arraycopy(this.titleListeners,0,newTitleListeners,0,index);
System.arraycopy(this.titleListeners,index+1,newTitleListeners,index,this.titleListeners.length-index-1);
this.titleListeners=newTitleListeners;
},"$wt.browser.TitleListener");
$_M(c$,"removeVisibilityWindowListener",
function(listener){
if(this.visibilityWindowListeners.length==0)return;
var index=-1;
for(var i=0;i<this.visibilityWindowListeners.length;i++){
if(listener===this.visibilityWindowListeners[i]){
index=i;
break;
}}
if(index==-1)return;
if(this.visibilityWindowListeners.length==1){
this.visibilityWindowListeners=new Array(0);
return;
}var newVisibilityWindowListeners=new Array(this.visibilityWindowListeners.length-1);
System.arraycopy(this.visibilityWindowListeners,0,newVisibilityWindowListeners,0,index);
System.arraycopy(this.visibilityWindowListeners,index+1,newVisibilityWindowListeners,index,this.visibilityWindowListeners.length-index-1);
this.visibilityWindowListeners=newVisibilityWindowListeners;
},"$wt.browser.VisibilityWindowListener");
$_M(c$,"setText",
function(html){
var blankLoading=this.html!=null;
this.html=html;
if(blankLoading)return true;
if(this.browserHandle!=null){
this.iframeDocumentWrite(this.browserHandle,html);
}this.html=null;
return true;
},"~S");
$_M(c$,"generateLazyIframeWriting",
function(handle,domain,html){
return function(){
try{
var doc=handle.contentWindow.document;
doc.open();
if(O$.isIE&&window["xss.domain.enabled"]==true
&&domain!=null&&domain.length>0){
doc.domain=domain;
}
doc.write(html);
doc.close();
handle=null;
}catch(e){
window.setTimeout(arguments.callee,25);
}
};
},"~O,~S,~S");
$_M(c$,"iframeDocumentWrite",
($fz=function(handle,html){
var handle=arguments[0];
var html=arguments[1];
var domain=null;
try{
domain=document.domain;
}catch(e){}
if(O$.isIE&&window["xss.domain.enabled"]==true
&&domain!=null&&domain.length>0){
document.domain=domain;
}
if(handle.contentWindow!=null){
if(O$.isIE&&window["xss.domain.enabled"]==true
&&domain!=null&&domain.length>0){
handle.contentWindow.location="javascript:document.open();document.domain='"+domain+"';document.close();void(0);";
}else{
handle.contentWindow.location="about:blank";
}
}else{
handle.src="about:blank";
}
try{
var doc=handle.contentWindow.document;
doc.open();
if(O$.isIE&&window["xss.domain.enabled"]==true
&&domain!=null&&domain.length>0){
doc.domain=domain;
}
doc.write(html);
doc.close();
}catch(e){
if(O$.isIE&&(domain==null||domain.length==0)
&&e.message!=null&&e.message.indexOf("Access is denied")!=-1){
var jsHTML=html.replaceAll("\\\\", "\\\\\\\\")
.replaceAll("\r","\\\\r")
.replaceAll("\n","\\\\n")
.replaceAll("\"","\\\\\"");
handle.src="javascript:document.open();document.write (\""+jsHTML+"\");document.close();void(0);";

}else{
window.setTimeout(this.generateLazyIframeWriting(handle,domain,html),25);
}
}
},$fz.isPrivate=true,$fz),"~O,~S");
$_M(c$,"setUrl",
function(url){
this.html=null;
this.url=url;
if(this.browserHandle!=null){
try{
var win=this.browserHandle.contentWindow;
if(win!=null){
win.location=this.url;
}else{
this.browserHandle.src=this.url;
}
}catch(e){
this.browserHandle.src=this.url;
}
}this.$back=true;
return true;
},"~S");
$_M(c$,"stop",
function(){
if(this.browserHandle!=null){
if(this.browserHandle.contentWindow!=null){
this.browserHandle.contentWindow.stop();
}else{
}}});
$_V(c$,"useNativeScrollBar",
function(){
return true;
});
$_S(c$,
"BeforeNavigate2",0xfa,
"CommandStateChange",0x69,
"DocumentComplete",0x103,
"NavigateComplete2",0xfc,
"NewWindow2",0xfb,
"OnMenuBar",0x100,
"OnStatusBar",0x101,
"OnToolBar",0xff,
"OnVisible",0xfe,
"ProgressChange",0x6c,
"RegisterAsBrowser",0x228,
"StatusTextChange",0x66,
"TitleChange",0x71,
"WindowClosing",0x107,
"WindowSetHeight",0x10b,
"WindowSetLeft",0x108,
"WindowSetResizable",0x106,
"WindowSetTop",0x109,
"WindowSetWidth",0x10a,
"ABOUT_BLANK","about:blank",
"URL_DIRECTOR","http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab",
"PACKAGE_PREFIX","org.eclipse.swt.browser.");
});
$_J("org.eclipse.swt.program");
$_L(null,"$wt.program.Program",["$wt.graphics.ImageData"],function(){
c$=$_C(function(){
this.name=null;
this.command=null;
this.iconName=null;
$_Z(this,arguments);
},$wt.program,"Program");
$_K(c$,
function(){
});
c$.findProgram=$_M(c$,"findProgram",
function(extension){
if(extension.length==0)return null;
if((extension.charAt(0)).charCodeAt(0)!=('.').charCodeAt(0))extension="."+extension;
extension=extension.toLowerCase();
var program=new $wt.program.Program();
if(".js".equalsIgnoreCase(extension)){
program.name="Java2Script Pacemaker";
program.command="$wt.program.Program.loadJavaScript(\"%1\")";
program.iconName="images/z-logo.gif";
}else{
program.name="Embeded Browser";
program.command="window.open(\"%1\")";
program.iconName="images/browser.gif";
}return program;
},"~S");
c$.getExtensions=$_M(c$,"getExtensions",
function(){
return[".js",".html",".htm",".xhtml","xml",".png",".gif",".jpg",".jpeg"];
});
c$.getPrograms=$_M(c$,"getPrograms",
function(){
var j2s=new $wt.program.Program();
j2s.name="Java2Script Pacemaker";
j2s.command="$wt.program.Program.loadJavaScript(\"%1\")";
j2s.iconName="images/z-logo.gif";
var browser=new $wt.program.Program();
browser.name="Embeded Browser";
browser.command="window.open(\"%1\")";
browser.iconName="images/browser.gif";
return[j2s,browser];
});
c$.loadJavaScript=$_M(c$,"loadJavaScript",
function(url){
var script=document.createElement("SCRIPT");
script.src=url;
document.body.appendChild(script);
},"~S");
c$.launch=$_M(c$,"launch",
function(fileName){
if(fileName.endsWith(".js")){
$wt.program.Program.findProgram(".js").execute(fileName);
}else{
$wt.program.Program.findProgram(fileName).execute(fileName);
}return true;
},"~S");
$_M(c$,"execute",
function(fileName){
var quote=true;
var prefix=this.command;
var suffix="";
var index=this.command.indexOf("%1");
if(index!=-1){
var count=0;
var i=index+2;
var length=this.command.length;
while(i<length){
if((this.command.charAt(i)).charCodeAt(0)==('"').charCodeAt(0))count++;
i++;
}
quote=count%2==0;
prefix=this.command.substring(0,index);
suffix=this.command.substring(index+2,length);
}if(!fileName.startsWith("/")&&!fileName.startsWith("\\")&&(fileName.charAt(1)).charCodeAt(0)==(':').charCodeAt(0)){
fileName="file:///"+fileName;
}if(quote)fileName="\""+fileName+"\"";
try{
eval((prefix+fileName+suffix).replace(/\\/g,"\\\\"));
}catch(e){
if($_O(e,Error)){
return false;
}else{
throw e;
}
}
return true;
},"~S");
$_M(c$,"getImageData",
function(){
return new $wt.graphics.ImageData(this.iconName);
});
$_M(c$,"getName",
function(){
return this.name;
});
$_V(c$,"equals",
function(other){
if(this===other)return true;
if($_O(other,$wt.program.Program)){
var program=other;
return this.name.equals(program.name)&&this.command.equals(program.command)&&this.iconName.equals(program.iconName);
}return false;
},"~O");
$_V(c$,"hashCode",
function(){
return this.name.hashCode()^this.command.hashCode()^this.iconName.hashCode();
});
$_V(c$,"toString",
function(){
return"Program {"+this.name+"}";
});
});
c$=$_C(function(){
this.verticalAlignment=2;
this.horizontalAlignment=1;
this.widthHint=-1;
this.heightHint=-1;
this.horizontalIndent=0;
this.verticalIndent=0;
this.horizontalSpan=1;
this.verticalSpan=1;
this.grabExcessHorizontalSpace=false;
this.grabExcessVerticalSpace=false;
this.minimumWidth=0;
this.minimumHeight=0;
this.exclude=false;
this.cacheWidth=-1;
this.cacheHeight=-1;
this.defaultWhint=0;
this.defaultHhint=0;
this.defaultWidth=-1;
this.defaultHeight=-1;
this.currentWhint=0;
this.currentHhint=0;
this.currentWidth=-1;
this.currentHeight=-1;
$_Z(this,arguments);
},$wt.layout,"GridData");
$_K(c$,
function(){
});
$_K(c$,
function(style){
if((style&2)!=0)this.verticalAlignment=1;
if((style&4)!=0)this.verticalAlignment=2;
if((style&16)!=0)this.verticalAlignment=4;
if((style&8)!=0)this.verticalAlignment=3;
if((style&32)!=0)this.horizontalAlignment=1;
if((style&64)!=0)this.horizontalAlignment=2;
if((style&256)!=0)this.horizontalAlignment=4;
if((style&128)!=0)this.horizontalAlignment=3;
this.grabExcessHorizontalSpace=(style&512)!=0;
this.grabExcessVerticalSpace=(style&1024)!=0;
},"~N");
$_K(c$,
function(horizontalAlignment,verticalAlignment,grabExcessHorizontalSpace,grabExcessVerticalSpace){
this.construct(horizontalAlignment,verticalAlignment,grabExcessHorizontalSpace,grabExcessVerticalSpace,1,1);
},"~N,~N,~B,~B");
$_K(c$,
function(horizontalAlignment,verticalAlignment,grabExcessHorizontalSpace,grabExcessVerticalSpace,horizontalSpan,verticalSpan){
this.horizontalAlignment=horizontalAlignment;
this.verticalAlignment=verticalAlignment;
this.grabExcessHorizontalSpace=grabExcessHorizontalSpace;
this.grabExcessVerticalSpace=grabExcessVerticalSpace;
this.horizontalSpan=horizontalSpan;
this.verticalSpan=verticalSpan;
},"~N,~N,~B,~B,~N,~N");
$_K(c$,
function(width,height){
this.widthHint=width;
this.heightHint=height;
},"~N,~N");
$_M(c$,"computeSize",
function(control,wHint,hHint,flushCache){
if(this.cacheWidth!=-1&&this.cacheHeight!=-1)return;
if(wHint==this.widthHint&&hHint==this.heightHint){
if(this.defaultWidth==-1||this.defaultHeight==-1||wHint!=this.defaultWhint||hHint!=this.defaultHhint){
var size=control.computeSize(wHint,hHint,flushCache);
this.defaultWhint=wHint;
this.defaultHhint=hHint;
this.defaultWidth=size.x;
this.defaultHeight=size.y;
}this.cacheWidth=this.defaultWidth;
this.cacheHeight=this.defaultHeight;
return;
}if(this.currentWidth==-1||this.currentHeight==-1||wHint!=this.currentWhint||hHint!=this.currentHhint){
var size=control.computeSize(wHint,hHint,flushCache);
this.currentWhint=wHint;
this.currentHhint=hHint;
this.currentWidth=size.x;
this.currentHeight=size.y;
}this.cacheWidth=this.currentWidth;
this.cacheHeight=this.currentHeight;
},"$wt.widgets.Control,~N,~N,~B");
$_M(c$,"flushCache",
function(){
this.cacheWidth=this.cacheHeight=-1;
this.defaultWidth=this.defaultHeight=-1;
this.currentWidth=this.currentHeight=-1;
});
$_M(c$,"getName",
function(){
var string=this.getClass().getName();
var index=string.lastIndexOf('.');
if(index==-1)return string;
return string.substring(index+1,string.length);
});
$_V(c$,"toString",
function(){
var hAlign="";
switch(this.horizontalAlignment){
case 4:
hAlign="SWT.FILL";
break;
case 1:
hAlign="SWT.BEGINNING";
break;
case 16384:
hAlign="SWT.LEFT";
break;
case 16777224:
hAlign="SWT.END";
break;
case 3:
hAlign="GridData.END";
break;
case 131072:
hAlign="SWT.RIGHT";
break;
case 16777216:
hAlign="SWT.CENTER";
break;
case 2:
hAlign="GridData.CENTER";
break;
default:
hAlign="Undefined "+this.horizontalAlignment;
break;
}
var vAlign="";
switch(this.verticalAlignment){
case 4:
vAlign="SWT.FILL";
break;
case 1:
vAlign="SWT.BEGINNING";
break;
case 128:
vAlign="SWT.TOP";
break;
case 16777224:
vAlign="SWT.END";
break;
case 3:
vAlign="GridData.END";
break;
case 1024:
vAlign="SWT.BOTTOM";
break;
case 16777216:
vAlign="SWT.CENTER";
break;
case 2:
vAlign="GridData.CENTER";
break;
default:
vAlign="Undefined "+this.verticalAlignment;
break;
}
var string=this.getName()+" {";
string+="horizontalAlignment="+hAlign+" ";
if(this.horizontalIndent!=0)string+="horizontalIndent="+this.horizontalIndent+" ";
if(this.horizontalSpan!=1)string+="horizontalSpan="+this.horizontalSpan+" ";
if(this.grabExcessHorizontalSpace)string+="grabExcessHorizontalSpace="+this.grabExcessHorizontalSpace+" ";
if(this.widthHint!=-1)string+="widthHint="+this.widthHint+" ";
if(this.minimumWidth!=0)string+="minimumWidth="+this.minimumWidth+" ";
string+="verticalAlignment="+vAlign+" ";
if(this.verticalIndent!=0)string+="verticalIndent="+this.verticalIndent+" ";
if(this.verticalSpan!=1)string+="verticalSpan="+this.verticalSpan+" ";
if(this.grabExcessVerticalSpace)string+="grabExcessVerticalSpace="+this.grabExcessVerticalSpace+" ";
if(this.heightHint!=-1)string+="heightHint="+this.heightHint+" ";
if(this.minimumHeight!=0)string+="minimumHeight="+this.minimumHeight+" ";
if(this.exclude)string+="exclude="+this.exclude+" ";
string=string.trim();
string+="}";
return string;
});
$_S(c$,
"BEGINNING",1,
"CENTER",2,
"END",3,
"FILL",4,
"VERTICAL_ALIGN_BEGINNING",2,
"VERTICAL_ALIGN_CENTER",4,
"VERTICAL_ALIGN_END",8,
"VERTICAL_ALIGN_FILL",16,
"HORIZONTAL_ALIGN_BEGINNING",32,
"HORIZONTAL_ALIGN_CENTER",64,
"HORIZONTAL_ALIGN_END",128,
"HORIZONTAL_ALIGN_FILL",256,
"GRAB_HORIZONTAL",512,
"GRAB_VERTICAL",1024,
"FILL_VERTICAL",1040,
"FILL_HORIZONTAL",768,
"FILL_BOTH",1808);
$_L(["$wt.widgets.Layout"],"$wt.layout.GridLayout",["$wt.graphics.Point","$wt.layout.GridData"],function(){
c$=$_C(function(){
this.numColumns=1;
this.makeColumnsEqualWidth=false;
this.marginWidth=5;
this.marginHeight=5;
this.marginLeft=0;
this.marginTop=0;
this.marginRight=0;
this.marginBottom=0;
this.horizontalSpacing=5;
this.verticalSpacing=5;
$_Z(this,arguments);
},$wt.layout,"GridLayout",$wt.widgets.Layout);
$_K(c$,
function(){
$_R(this,$wt.layout.GridLayout,[]);
});
$_K(c$,
function(numColumns,makeColumnsEqualWidth){
$_R(this,$wt.layout.GridLayout,[]);
this.numColumns=numColumns;
this.makeColumnsEqualWidth=makeColumnsEqualWidth;
},"~N,~B");
$_V(c$,"computeSize",
function(composite,wHint,hHint,flushCache){
var size=this.layout(composite,false,0,0,wHint,hHint,flushCache);
if(wHint!=-1)size.x=wHint;
if(hHint!=-1)size.y=hHint;
return size;
},"$wt.widgets.Composite,~N,~N,~B");
$_V(c$,"flushCache",
function(control){
var data=control.getLayoutData();
if(data!=null)(data).flushCache();
return true;
},"$wt.widgets.Control");
$_M(c$,"getData",
function(grid,row,column,rowCount,columnCount,first){
var control=grid[row][column];
if(control!=null){
var data=control.getLayoutData();
var hSpan=Math.max(1,Math.min(data.horizontalSpan,columnCount));
var vSpan=Math.max(1,data.verticalSpan);
var i=first?row+vSpan-1:row-vSpan+1;
var j=first?column+hSpan-1:column-hSpan+1;
if(0<=i&&i<rowCount){
if(0<=j&&j<columnCount){
if(control===grid[i][j])return data;
}}}return null;
},"~A,~N,~N,~N,~N,~B");
$_M(c$,"layout",
function(composite,flushCache){
var rect=composite.getClientArea();
this.layout(composite,true,rect.x,rect.y,rect.width,rect.height,flushCache);
},"$wt.widgets.Composite,~B");
$_M(c$,"layout",
function(composite,move,x,y,width,height,flushCache){
if(this.numColumns<1){
return new $wt.graphics.Point(this.marginLeft+this.marginWidth*2+this.marginRight,this.marginTop+this.marginHeight*2+this.marginBottom);
}var count=0;
var children=composite.getChildren();
for(var i=0;i<children.length;i++){
var control=children[i];
var data=control.getLayoutData();
if(data==null||!data.exclude){
children[count++]=children[i];
}}
for(var i=0;i<count;i++){
var child=children[i];
var data=child.getLayoutData();
if(data==null)child.setLayoutData(data=new $wt.layout.GridData());
if(flushCache)data.flushCache();
data.computeSize(child,data.widthHint,data.heightHint,flushCache);
if(data.grabExcessHorizontalSpace&&data.minimumWidth>0){
if(data.cacheWidth<data.minimumWidth){
var trim=0;
if($_O(child,$wt.widgets.Scrollable)){
var rect=(child).computeTrim(0,0,0,0);
trim=rect.width;
}else{
trim=child.getBorderWidth()*2;
}data.cacheWidth=data.cacheHeight=-1;
data.computeSize(child,Math.max(0,data.minimumWidth-trim),data.heightHint,false);
}}if(data.grabExcessVerticalSpace&&data.minimumHeight>0){
data.cacheHeight=Math.max(data.cacheHeight,data.minimumHeight);
}}
var row=0;
var column=0;
var rowCount=0;
var columnCount=this.numColumns;
var grid=$_A(4,columnCount,null);
for(var i=0;i<count;i++){
var child=children[i];
var data=child.getLayoutData();
var hSpan=Math.max(1,Math.min(data.horizontalSpan,columnCount));
var vSpan=Math.max(1,data.verticalSpan);
while(true){
var lastRow=row+vSpan;
if(lastRow>=grid.length){
var newGrid=$_A(lastRow+4,columnCount,null);
System.arraycopy(grid,0,newGrid,0,grid.length);
grid=newGrid;
}if(grid[row]==null){
grid[row]=new Array(columnCount);
}while(column<columnCount&&grid[row][column]!=null){
column++;
}
var endCount=column+hSpan;
if(endCount<=columnCount){
var index=column;
while(index<endCount&&grid[row][index]==null){
index++;
}
if(index==endCount)break;
column=index;
}if(column+hSpan>=columnCount){
column=0;
row++;
}}
for(var j=0;j<vSpan;j++){
if(grid[row+j]==null){
grid[row+j]=new Array(columnCount);
}for(var k=0;k<hSpan;k++){
grid[row+j][column+k]=child;
}
}
rowCount=Math.max(rowCount,row+vSpan);
column+=hSpan;
}
var availableWidth=width-this.horizontalSpacing*(columnCount-1)-(this.marginLeft+this.marginWidth*2+this.marginRight);
var expandCount=0;
var widths=$_A(columnCount,0);
var minWidths=$_A(columnCount,0);
var expandColumn=$_A(columnCount,false);
for(var j=0;j<columnCount;j++){
for(var i=0;i<rowCount;i++){
var data=this.getData(grid,i,j,rowCount,columnCount,true);
if(data!=null){
var hSpan=Math.max(1,Math.min(data.horizontalSpan,columnCount));
if(hSpan==1){
var w=data.cacheWidth+data.horizontalIndent;
widths[j]=Math.max(widths[j],w);
if(data.grabExcessHorizontalSpace){
if(!expandColumn[j])expandCount++;
expandColumn[j]=true;
}if(!data.grabExcessHorizontalSpace||data.minimumWidth!=0){
w=!data.grabExcessHorizontalSpace||data.minimumWidth==-1?data.cacheWidth:data.minimumWidth;
w+=data.horizontalIndent;
minWidths[j]=Math.max(minWidths[j],w);
}}}}
for(var i=0;i<rowCount;i++){
var data=this.getData(grid,i,j,rowCount,columnCount,false);
if(data!=null){
var hSpan=Math.max(1,Math.min(data.horizontalSpan,columnCount));
if(hSpan>1){
var spanWidth=0;
var spanMinWidth=0;
var spanExpandCount=0;
for(var k=0;k<hSpan;k++){
spanWidth+=widths[j-k];
spanMinWidth+=minWidths[j-k];
if(expandColumn[j-k])spanExpandCount++;
}
if(data.grabExcessHorizontalSpace&&spanExpandCount==0){
expandCount++;
expandColumn[j]=true;
}var w=data.cacheWidth+data.horizontalIndent-spanWidth-(hSpan-1)*this.horizontalSpacing;
if(w>0){
if(spanExpandCount==0){
widths[j]+=w;
}else{
var delta=Math.floor(w/spanExpandCount);
var remainder=w%spanExpandCount;
var last=-1;
for(var k=0;k<hSpan;k++){
if(expandColumn[j-k]){
widths[last=j-k]+=delta;
}}
if(last>-1)widths[last]+=remainder;
}}if(!data.grabExcessHorizontalSpace||data.minimumWidth!=0){
w=!data.grabExcessHorizontalSpace||data.minimumWidth==-1?data.cacheWidth:data.minimumWidth;
w+=data.horizontalIndent-spanMinWidth-(hSpan-1)*this.horizontalSpacing;
if(w>0){
if(spanExpandCount==0){
minWidths[j]+=w;
}else{
var delta=Math.floor(w/spanExpandCount);
var remainder=w%spanExpandCount;
var last=-1;
for(var k=0;k<hSpan;k++){
if(expandColumn[j-k]){
minWidths[last=j-k]+=delta;
}}
if(last>-1)minWidths[last]+=remainder;
}}}}}}
}
if(this.makeColumnsEqualWidth){
var minColumnWidth=0;
var columnWidth=0;
for(var i=0;i<columnCount;i++){
minColumnWidth=Math.max(minColumnWidth,minWidths[i]);
columnWidth=Math.max(columnWidth,widths[i]);
}
columnWidth=width==-1||expandCount==0?columnWidth:Math.max(minColumnWidth,Math.floor(availableWidth/columnCount));
for(var i=0;i<columnCount;i++){
expandColumn[i]=expandCount>0;
widths[i]=columnWidth;
}
}else{
if(width!=-1&&expandCount>0){
var totalWidth=0;
for(var i=0;i<columnCount;i++){
totalWidth+=widths[i];
}
var c=expandCount;
var delta=Math.floor((availableWidth-totalWidth)/c);
var remainder=(availableWidth-totalWidth)%c;
var last=-1;
while(totalWidth!=availableWidth){
for(var j=0;j<columnCount;j++){
if(expandColumn[j]){
if(widths[j]+delta>minWidths[j]){
widths[last=j]=widths[j]+delta;
}else{
widths[j]=minWidths[j];
expandColumn[j]=false;
c--;
}}}
if(last>-1)widths[last]+=remainder;
for(var j=0;j<columnCount;j++){
for(var i=0;i<rowCount;i++){
var data=this.getData(grid,i,j,rowCount,columnCount,false);
if(data!=null){
var hSpan=Math.max(1,Math.min(data.horizontalSpan,columnCount));
if(hSpan>1){
if(!data.grabExcessHorizontalSpace||data.minimumWidth!=0){
var spanWidth=0;
var spanExpandCount=0;
for(var k=0;k<hSpan;k++){
spanWidth+=widths[j-k];
if(expandColumn[j-k])spanExpandCount++;
}
var w=!data.grabExcessHorizontalSpace||data.minimumWidth==-1?data.cacheWidth:data.minimumWidth;
w+=data.horizontalIndent-spanWidth-(hSpan-1)*this.horizontalSpacing;
if(w>0){
if(spanExpandCount==0){
widths[j]+=w;
}else{
var delta2=Math.floor(w/spanExpandCount);
var remainder2=w%spanExpandCount;
var last2=-1;
for(var k=0;k<hSpan;k++){
if(expandColumn[j-k]){
widths[last2=j-k]+=delta2;
}}
if(last2>-1)widths[last2]+=remainder2;
}}}}}}
}
if(c==0)break;
totalWidth=0;
for(var i=0;i<columnCount;i++){
totalWidth+=widths[i];
}
delta=Math.floor((availableWidth-totalWidth)/c);
remainder=(availableWidth-totalWidth)%c;
last=-1;
}
}}var flush=null;
var flushLength=0;
if(width!=-1){
for(var j=0;j<columnCount;j++){
for(var i=0;i<rowCount;i++){
var data=this.getData(grid,i,j,rowCount,columnCount,false);
if(data!=null){
if(data.heightHint==-1){
var child=grid[i][j];
var hSpan=Math.max(1,Math.min(data.horizontalSpan,columnCount));
var currentWidth=0;
for(var k=0;k<hSpan;k++){
currentWidth+=widths[j-k];
}
currentWidth+=(hSpan-1)*this.horizontalSpacing-data.horizontalIndent;
if((currentWidth!=data.cacheWidth&&data.horizontalAlignment==4)||(data.cacheWidth>currentWidth)){
var trim=0;
if($_O(child,$wt.widgets.Scrollable)){
var rect=(child).computeTrim(0,0,0,0);
trim=rect.width;
}else{
trim=child.getBorderWidth()*2;
}data.cacheWidth=data.cacheHeight=-1;
data.computeSize(child,Math.max(0,currentWidth-trim),data.heightHint,false);
if(data.grabExcessVerticalSpace&&data.minimumHeight>0){
data.cacheHeight=Math.max(data.cacheHeight,data.minimumHeight);
}if(flush==null)flush=new Array(count);
flush[flushLength++]=data;
}}}}
}
}var availableHeight=height-this.verticalSpacing*(rowCount-1)-(this.marginTop+this.marginHeight*2+this.marginBottom);
expandCount=0;
var heights=$_A(rowCount,0);
var minHeights=$_A(rowCount,0);
var expandRow=$_A(rowCount,false);
for(var i=0;i<rowCount;i++){
for(var j=0;j<columnCount;j++){
var data=this.getData(grid,i,j,rowCount,columnCount,true);
if(data!=null){
var vSpan=Math.max(1,Math.min(data.verticalSpan,rowCount));
if(vSpan==1){
var h=data.cacheHeight+data.verticalIndent;
heights[i]=Math.max(heights[i],h);
if(data.grabExcessVerticalSpace){
if(!expandRow[i])expandCount++;
expandRow[i]=true;
}if(!data.grabExcessVerticalSpace||data.minimumHeight!=0){
h=!data.grabExcessVerticalSpace||data.minimumHeight==-1?data.cacheHeight:data.minimumHeight;
h+=data.verticalIndent;
minHeights[i]=Math.max(minHeights[i],h);
}}}}
for(var j=0;j<columnCount;j++){
var data=this.getData(grid,i,j,rowCount,columnCount,false);
if(data!=null){
var vSpan=Math.max(1,Math.min(data.verticalSpan,rowCount));
if(vSpan>1){
var spanHeight=0;
var spanMinHeight=0;
var spanExpandCount=0;
for(var k=0;k<vSpan;k++){
spanHeight+=heights[i-k];
spanMinHeight+=minHeights[i-k];
if(expandRow[i-k])spanExpandCount++;
}
if(data.grabExcessVerticalSpace&&spanExpandCount==0){
expandCount++;
expandRow[i]=true;
}var h=data.cacheHeight+data.verticalIndent-spanHeight-(vSpan-1)*this.verticalSpacing;
if(h>0){
if(spanExpandCount==0){
heights[i]+=h;
}else{
var delta=Math.floor(h/spanExpandCount);
var remainder=h%spanExpandCount;
var last=-1;
for(var k=0;k<vSpan;k++){
if(expandRow[i-k]){
heights[last=i-k]+=delta;
}}
if(last>-1)heights[last]+=remainder;
}}if(!data.grabExcessVerticalSpace||data.minimumHeight!=0){
h=!data.grabExcessVerticalSpace||data.minimumHeight==-1?data.cacheHeight:data.minimumHeight;
h+=data.verticalIndent-spanMinHeight-(vSpan-1)*this.verticalSpacing;
if(h>0){
if(spanExpandCount==0){
minHeights[i]+=h;
}else{
var delta=Math.floor(h/spanExpandCount);
var remainder=h%spanExpandCount;
var last=-1;
for(var k=0;k<vSpan;k++){
if(expandRow[i-k]){
minHeights[last=i-k]+=delta;
}}
if(last>-1)minHeights[last]+=remainder;
}}}}}}
}
if(height!=-1&&expandCount>0){
var totalHeight=0;
for(var i=0;i<rowCount;i++){
totalHeight+=heights[i];
}
var c=expandCount;
var delta=Math.floor((availableHeight-totalHeight)/c);
var remainder=(availableHeight-totalHeight)%c;
var last=-1;
while(totalHeight!=availableHeight){
for(var i=0;i<rowCount;i++){
if(expandRow[i]){
if(heights[i]+delta>minHeights[i]){
heights[last=i]=heights[i]+delta;
}else{
heights[i]=minHeights[i];
expandRow[i]=false;
c--;
}}}
if(last>-1)heights[last]+=remainder;
for(var i=0;i<rowCount;i++){
for(var j=0;j<columnCount;j++){
var data=this.getData(grid,i,j,rowCount,columnCount,false);
if(data!=null){
var vSpan=Math.max(1,Math.min(data.verticalSpan,rowCount));
if(vSpan>1){
if(!data.grabExcessVerticalSpace||data.minimumHeight!=0){
var spanHeight=0;
var spanExpandCount=0;
for(var k=0;k<vSpan;k++){
spanHeight+=heights[i-k];
if(expandRow[i-k])spanExpandCount++;
}
var h=!data.grabExcessVerticalSpace||data.minimumHeight==-1?data.cacheHeight:data.minimumHeight;
h+=data.verticalIndent-spanHeight-(vSpan-1)*this.verticalSpacing;
if(h>0){
if(spanExpandCount==0){
heights[i]+=h;
}else{
var delta2=Math.floor(h/spanExpandCount);
var remainder2=h%spanExpandCount;
var last2=-1;
for(var k=0;k<vSpan;k++){
if(expandRow[i-k]){
heights[last2=i-k]+=delta2;
}}
if(last2>-1)heights[last2]+=remainder2;
}}}}}}
}
if(c==0)break;
totalHeight=0;
for(var i=0;i<rowCount;i++){
totalHeight+=heights[i];
}
delta=Math.floor((availableHeight-totalHeight)/c);
remainder=(availableHeight-totalHeight)%c;
last=-1;
}
}if(move){
var gridY=y+this.marginTop+this.marginHeight;
for(var i=0;i<rowCount;i++){
var gridX=x+this.marginLeft+this.marginWidth;
for(var j=0;j<columnCount;j++){
var data=this.getData(grid,i,j,rowCount,columnCount,true);
if(data!=null){
var hSpan=Math.max(1,Math.min(data.horizontalSpan,columnCount));
var vSpan=Math.max(1,data.verticalSpan);
var cellWidth=0;
var cellHeight=0;
for(var k=0;k<hSpan;k++){
cellWidth+=widths[j+k];
}
for(var k=0;k<vSpan;k++){
cellHeight+=heights[i+k];
}
cellWidth+=this.horizontalSpacing*(hSpan-1);
var childX=gridX+data.horizontalIndent;
var childWidth=Math.min(data.cacheWidth,cellWidth);
switch(data.horizontalAlignment){
case 16777216:
case 2:
childX+=Math.max(0,Math.floor((cellWidth-data.horizontalIndent-childWidth)/2));
break;
case 131072:
case 16777224:
case 3:
childX+=Math.max(0,cellWidth-data.horizontalIndent-childWidth);
break;
case 4:
childWidth=cellWidth-data.horizontalIndent;
break;
}
cellHeight+=this.verticalSpacing*(vSpan-1);
var childY=gridY+data.verticalIndent;
var childHeight=Math.min(data.cacheHeight,cellHeight);
switch(data.verticalAlignment){
case 16777216:
case 2:
childY+=Math.max(0,Math.floor((cellHeight-data.verticalIndent-childHeight)/2));
break;
case 1024:
case 16777224:
case 3:
childY+=Math.max(0,cellHeight-data.verticalIndent-childHeight);
break;
case 4:
childHeight=cellHeight-data.verticalIndent;
break;
}
var child=grid[i][j];
if(child!=null){
child.setBounds(childX,childY,childWidth,childHeight);
}}gridX+=widths[j]+this.horizontalSpacing;
}
gridY+=heights[i]+this.verticalSpacing;
}
}for(var i=0;i<flushLength;i++){
flush[i].cacheWidth=flush[i].cacheHeight=-1;
}
var totalDefaultWidth=0;
var totalDefaultHeight=0;
for(var i=0;i<columnCount;i++){
totalDefaultWidth+=widths[i];
}
for(var i=0;i<rowCount;i++){
totalDefaultHeight+=heights[i];
}
totalDefaultWidth+=this.horizontalSpacing*(columnCount-1)+this.marginLeft+this.marginWidth*2+this.marginRight;
totalDefaultHeight+=this.verticalSpacing*(rowCount-1)+this.marginTop+this.marginHeight*2+this.marginBottom;
return new $wt.graphics.Point(totalDefaultWidth,totalDefaultHeight);
},"$wt.widgets.Composite,~B,~N,~N,~N,~N,~B");
$_M(c$,"getName",
function(){
var string=this.getClass().getName();
var index=string.lastIndexOf('.');
if(index==-1)return string;
return string.substring(index+1,string.length);
});
$_V(c$,"toString",
function(){
var string=this.getName()+" {";
if(this.numColumns!=1)string+="numColumns="+this.numColumns+" ";
if(this.makeColumnsEqualWidth)string+="makeColumnsEqualWidth="+this.makeColumnsEqualWidth+" ";
if(this.marginWidth!=0)string+="marginWidth="+this.marginWidth+" ";
if(this.marginHeight!=0)string+="marginHeight="+this.marginHeight+" ";
if(this.marginLeft!=0)string+="marginLeft="+this.marginLeft+" ";
if(this.marginRight!=0)string+="marginRight="+this.marginRight+" ";
if(this.marginTop!=0)string+="marginTop="+this.marginTop+" ";
if(this.marginBottom!=0)string+="marginBottom="+this.marginBottom+" ";
if(this.horizontalSpacing!=0)string+="horizontalSpacing="+this.horizontalSpacing+" ";
if(this.verticalSpacing!=0)string+="verticalSpacing="+this.verticalSpacing+" ";
string=string.trim();
string+="}";
return string;
});
});
$_L(null,"$wt.layout.FillData",["$wt.graphics.Point"],function(){
c$=$_C(function(){
this.defaultWidth=-1;
this.defaultHeight=-1;
this.currentWhint=0;
this.currentHhint=0;
this.currentWidth=-1;
this.currentHeight=-1;
$_Z(this,arguments);
},$wt.layout,"FillData");
$_M(c$,"computeSize",
function(control,wHint,hHint,flushCache){
if(flushCache)this.flushCache();
if(wHint==-1&&hHint==-1){
if(this.defaultWidth==-1||this.defaultHeight==-1){
var size=control.computeSize(wHint,hHint,flushCache);
this.defaultWidth=size.x;
this.defaultHeight=size.y;
}return new $wt.graphics.Point(this.defaultWidth,this.defaultHeight);
}if(this.currentWidth==-1||this.currentHeight==-1||wHint!=this.currentWhint||hHint!=this.currentHhint){
var size=control.computeSize(wHint,hHint,flushCache);
this.currentWhint=wHint;
this.currentHhint=hHint;
this.currentWidth=size.x;
this.currentHeight=size.y;
}return new $wt.graphics.Point(this.currentWidth,this.currentHeight);
},"$wt.widgets.Control,~N,~N,~B");
$_M(c$,"flushCache",
function(){
this.defaultWidth=this.defaultHeight=-1;
this.currentWidth=this.currentHeight=-1;
});
});
$_L(["$wt.widgets.Layout"],"$wt.layout.FillLayout",["$wt.graphics.Point","$wt.layout.FillData"],function(){
c$=$_C(function(){
this.type=256;
this.marginWidth=0;
this.marginHeight=0;
this.spacing=0;
$_Z(this,arguments);
},$wt.layout,"FillLayout",$wt.widgets.Layout);
$_K(c$,
function(){
$_R(this,$wt.layout.FillLayout,[]);
});
$_K(c$,
function(type){
$_R(this,$wt.layout.FillLayout,[]);
this.type=type;
},"~N");
$_V(c$,"computeSize",
function(composite,wHint,hHint,flushCache){
var children=composite.getChildren();
var count=children.length;
var maxWidth=0;
var maxHeight=0;
for(var i=0;i<count;i++){
var child=children[i];
var w=wHint;
var h=hHint;
if(count>0){
if(this.type==256&&wHint!=-1){
w=Math.max(0,Math.floor((wHint-(count-1)*this.spacing)/count));
}if(this.type==512&&hHint!=-1){
h=Math.max(0,Math.floor((hHint-(count-1)*this.spacing)/count));
}}var size=this.computeChildSize(child,w,h,flushCache);
maxWidth=Math.max(maxWidth,size.x);
maxHeight=Math.max(maxHeight,size.y);
}
var width=0;
var height=0;
if(this.type==256){
width=count*maxWidth;
if(count!=0)width+=(count-1)*this.spacing;
height=maxHeight;
}else{
width=maxWidth;
height=count*maxHeight;
if(count!=0)height+=(count-1)*this.spacing;
}width+=this.marginWidth*2;
height+=this.marginHeight*2;
if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
return new $wt.graphics.Point(width,height);
},"$wt.widgets.Composite,~N,~N,~B");
$_M(c$,"computeChildSize",
function(control,wHint,hHint,flushCache){
var data=control.getLayoutData();
if(data==null){
data=new $wt.layout.FillData();
control.setLayoutData(data);
}var size=null;
if(wHint==-1&&hHint==-1){
size=data.computeSize(control,wHint,hHint,flushCache);
}else{
var trimX;
var trimY;
if($_O(control,$wt.widgets.Scrollable)){
var rect=(control).computeTrim(0,0,0,0);
trimX=rect.width;
trimY=rect.height;
}else{
trimX=trimY=control.getBorderWidth()*2;
}var w=wHint==-1?wHint:Math.max(0,wHint-trimX);
var h=hHint==-1?hHint:Math.max(0,hHint-trimY);
size=data.computeSize(control,w,h,flushCache);
}return size;
},"$wt.widgets.Control,~N,~N,~B");
$_V(c$,"flushCache",
function(control){
var data=control.getLayoutData();
if(data!=null)(data).flushCache();
return true;
},"$wt.widgets.Control");
$_M(c$,"getName",
function(){
var string=this.getClass().getName();
var index=string.lastIndexOf('.');
if(index==-1)return string;
return string.substring(index+1,string.length);
});
$_V(c$,"layout",
function(composite,flushCache){
var rect=composite.getClientArea();
var children=composite.getChildren();
var count=children.length;
if(count==0)return;
var width=rect.width-this.marginWidth*2;
var height=rect.height-this.marginHeight*2;
if(this.type==256){
width-=(count-1)*this.spacing;
var x=rect.x+this.marginWidth;
var extra=width%count;
var y=rect.y+this.marginHeight;
var cellWidth=Math.floor(width/count);
for(var i=0;i<count;i++){
var child=children[i];
var childWidth=cellWidth;
if(i==0){
childWidth+=Math.floor(extra/2);
}else{
if(i==count-1)childWidth+=Math.floor((extra+1)/2);
}child.setBounds(x,y,childWidth,height);
x+=childWidth+this.spacing;
}
}else{
height-=(count-1)*this.spacing;
var x=rect.x+this.marginWidth;
var cellHeight=Math.floor(height/count);
var y=rect.y+this.marginHeight;
var extra=height%count;
for(var i=0;i<count;i++){
var child=children[i];
var childHeight=cellHeight;
if(i==0){
childHeight+=Math.floor(extra/2);
}else{
if(i==count-1)childHeight+=Math.floor((extra+1)/2);
}child.setBounds(x,y,width,childHeight);
y+=childHeight+this.spacing;
}
}},"$wt.widgets.Composite,~B");
$_V(c$,"toString",
function(){
var string=this.getName()+" {";
string+="type="+((this.type==512)?"SWT.VERTICAL":"SWT.HORIZONTAL")+" ";
if(this.marginWidth!=0)string+="marginWidth="+this.marginWidth+" ";
if(this.marginHeight!=0)string+="marginHeight="+this.marginHeight+" ";
if(this.spacing!=0)string+="spacing="+this.spacing+" ";
string=string.trim();
string+="}";
return string;
});
});
