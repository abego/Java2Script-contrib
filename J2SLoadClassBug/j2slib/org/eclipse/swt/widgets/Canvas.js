﻿$_L(["$wt.widgets.Composite"],"$wt.widgets.Canvas",null,function(){
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
