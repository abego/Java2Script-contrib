﻿/* http://j2s.sf.net/ */$_L(["$wt.widgets.Layout"],"$wt.custom.CBannerLayout",["$wt.custom.CLayoutData","$wt.graphics.Point","$.Rectangle"],function(){
c$=$_T($wt.custom,"CBannerLayout",$wt.widgets.Layout);
$_V(c$,"computeSize",
function(composite,wHint,hHint,flushCache){
var banner=composite;
var left=banner.$left;
var right=banner.right;
var bottom=banner.bottom;
var showCurve=left!=null&&right!=null;
var height=hHint;
var width=wHint;
var bottomSize=new $wt.graphics.Point(0,0);
if(bottom!=null){
var trim=this.computeTrim(bottom);
var w=wHint==-1?-1:width-trim;
bottomSize=this.computeChildSize(bottom,w,-1,flushCache);
if(hHint!=-1){
bottomSize.y=Math.min(bottomSize.y,height);
height-=bottomSize.y+3+1+2;
}}if(showCurve&&hHint!=-1){
height-=7;
}var rightSize=new $wt.graphics.Point(0,0);
if(right!=null){
var trim=this.computeTrim(right);
var w=banner.rightWidth==-1?-1:banner.rightWidth-trim;
var h=banner.rightWidth==-1?-1:height;
rightSize=this.computeChildSize(right,w,h,flushCache);
if(wHint!=-1){
rightSize.x=Math.min(rightSize.x,width);
width-=rightSize.x+banner.curve_width-2*banner.curve_indent;
width=Math.max(width,10);
}}var leftSize=new $wt.graphics.Point(0,0);
if(left!=null){
var trim=this.computeTrim(left);
var w=wHint==-1?-1:width-trim;
leftSize=this.computeChildSize(left,w,-1,flushCache);
}width=leftSize.x+rightSize.x;
height=bottomSize.y;
if(bottom!=null){
height+=3;
}if(left!=null){
height+=right==null?leftSize.y:Math.max(leftSize.y,banner.rightMinHeight);
}else{
height+=rightSize.y;
}if(showCurve){
width+=banner.curve_width-2*banner.curve_indent;
height+=7;
}if(wHint!=-1)width=wHint;
if(hHint!=-1)height=hHint;
return new $wt.graphics.Point(width,height);
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
var banner=composite;
var left=banner.$left;
var right=banner.right;
var bottom=banner.bottom;
var size=banner.getSize();
var showCurve=left!=null&&right!=null;
var width=size.x;
var height=size.y;
var bottomSize=new $wt.graphics.Point(0,0);
if(bottom!=null){
var trim=this.computeTrim(bottom);
var w=width-trim;
bottomSize=this.computeChildSize(bottom,w,-1,flushCache);
bottomSize.y=Math.min(bottomSize.y,height);
height-=bottomSize.y+3+2+1;
}if(showCurve)height-=7;
height=Math.max(0,height);
var rightSize=new $wt.graphics.Point(0,0);
if(right!=null){
var trimX=0;
var trimY=0;
if($_O(right,$wt.widgets.Scrollable)){
var rect=(right).computeTrim(0,0,0,0);
trimX=rect.width;
trimY=rect.height;
}else{
trimX=trimY=right.getBorderWidth()*2;
}var rightW=banner.rightWidth==-1?-1:banner.rightWidth-trimX;
var rightH=banner.rightWidth==-1?-1:height-trimY;
rightSize=this.computeChildSize(right,rightW,rightH,flushCache);
rightSize.x=Math.min(rightSize.x,width);
width-=rightSize.x+banner.curve_width-2*banner.curve_indent;
width=Math.max(width,10);
}var leftSize=new $wt.graphics.Point(0,0);
if(left!=null){
var trim=this.computeTrim(left);
leftSize=this.computeChildSize(left,width-trim,-1,flushCache);
}var x=0;
var y=0;
var oldStart=banner.curveStart;
var leftRect=null;
var rightRect=null;
var bottomRect=null;
if(bottom!=null){
bottomRect=new $wt.graphics.Rectangle(x,y+size.y-bottomSize.y,bottomSize.x,bottomSize.y);
}if(showCurve)y+=4;
if(left!=null){
leftRect=new $wt.graphics.Rectangle(x,y,leftSize.x,leftSize.y);
banner.curveStart=x+leftSize.x-banner.curve_indent;
x+=leftSize.x+banner.curve_width-2*banner.curve_indent;
}if(right!=null){
rightRect=new $wt.graphics.Rectangle(x,y,rightSize.x,rightSize.y);
}if(banner.curveStart<oldStart){
banner.redraw(banner.curveStart-200,0,oldStart+banner.curve_width-banner.curveStart+200+5,size.y,false);
}if(banner.curveStart>oldStart){
banner.redraw(oldStart-200,0,banner.curveStart+banner.curve_width-oldStart+200+5,size.y,false);
}banner.update();
banner.curveRect=new $wt.graphics.Rectangle(banner.curveStart,0,banner.curve_width,size.y);
if(bottomRect!=null)bottom.setBounds(bottomRect);
if(rightRect!=null)right.setBounds(rightRect);
if(leftRect!=null)left.setBounds(leftRect);
},"$wt.widgets.Composite,~B");
});
$_L(["$wt.widgets.Composite","$wt.graphics.Rectangle"],"$wt.custom.CBanner",["$wt.custom.CBannerLayout","$wt.graphics.Color","$.Cursor","$.Point","$wt.widgets.Listener"],function(){
c$=$_C(function(){
this.$left=null;
this.right=null;
this.bottom=null;
this.simple=true;
this.curve=null;
this.curveStart=0;
this.curveRect=null;
this.curve_width=5;
this.curve_indent=-2;
this.rightWidth=-1;
this.rightMinWidth=-1;
this.rightMinHeight=-1;
this.resizeCursor=null;
this.dragging=false;
this.rightDragDisplacement=0;
$_Z(this,arguments);
},$wt.custom,"CBanner",$wt.widgets.Composite);
$_Y(c$,function(){
this.curveRect=new $wt.graphics.Rectangle(0,0,0,0);
});
$_K(c$,
function(parent,style){
$_R(this,$wt.custom.CBanner,[parent,$wt.custom.CBanner.checkStyle(style)]);
$_U(this,$wt.custom.CBanner,"setLayout",[new $wt.custom.CBannerLayout()]);
this.updateCurve(25);
this.resizeCursor=new $wt.graphics.Cursor(this.getDisplay(),9);
var listener=(($_D("$wt.custom.CBanner$1")?0:org.eclipse.swt.custom.CBanner.$CBanner$1$()),$_N($wt.custom.CBanner$1,this,null));
var events=[12,3,7,5,4,9,11];
for(var i=0;i<events.length;i++){
this.addListener(events[i],listener);
}
},"$wt.widgets.Composite,~N");
c$.bezier=$_M(c$,"bezier",
function(x0,y0,x1,y1,x2,y2,x3,y3,count){
var a0=x0;
var a1=3*(x1-x0);
var a2=3*(x0+x2-2*x1);
var a3=x3-x0+3*x1-3*x2;
var b0=y0;
var b1=3*(y1-y0);
var b2=3*(y0+y2-2*y1);
var b3=y3-y0+3*y1-3*y2;
var polygon=$_A(2*count+2,0);
for(var i=0;i<=count;i++){
var t=i/count;
polygon[2*i]=Math.round((a0+a1*t+a2*t*t+a3*t*t*t));
polygon[2*i+1]=Math.round((b0+b1*t+b2*t*t+b3*t*t*t));
}
return polygon;
},"~N,~N,~N,~N,~N,~N,~N,~N,~N");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
return 0;
},"~N");
$_M(c$,"getBottom",
function(){
return this.bottom;
});
$_V(c$,"getClientArea",
function(){
return new $wt.graphics.Rectangle(0,0,0,0);
});
$_M(c$,"getLeft",
function(){
return this.$left;
});
$_M(c$,"getRight",
function(){
return this.right;
});
$_M(c$,"getRightMinimumSize",
function(){
return new $wt.graphics.Point(this.rightMinWidth,this.rightMinHeight);
});
$_M(c$,"getRightWidth",
function(){
if(this.right==null)return 0;
if(this.rightWidth==-1){
var size=this.right.computeSize(-1,this.getSize().y,false);
return size.x;
}return this.rightWidth;
});
$_M(c$,"getSimple",
function(){
return this.simple;
});
$_M(c$,"onDispose",
function(){
if(this.resizeCursor!=null)this.resizeCursor.dispose();
this.resizeCursor=null;
this.$left=null;
this.right=null;
});
$_M(c$,"onMouseDown",
function(x,y){
if(this.curveRect.contains(x,y)){
this.dragging=true;
this.rightDragDisplacement=this.curveStart-x+this.curve_width-this.curve_indent;
}},"~N,~N");
$_M(c$,"onMouseExit",
function(){
if(!this.dragging)this.setCursor(null);
});
$_M(c$,"onMouseMove",
function(x,y){
if(this.dragging){
var size=this.getSize();
if(!(0<x&&x<size.x))return;
this.rightWidth=Math.max(0,size.x-x-this.rightDragDisplacement);
if(this.rightMinWidth!=-1){
this.rightWidth=Math.max(this.rightMinWidth,this.rightWidth);
}this.layout(false);
return;
}if(this.curveRect.contains(x,y)){
this.setCursor(this.resizeCursor);
}else{
this.setCursor(null);
}},"~N,~N");
$_M(c$,"onMouseUp",
function(){
this.dragging=false;
});
$_M(c$,"onPaint",
function(gc){
var size=this.getSize();
var border1=this.getDisplay().getSystemColor($wt.custom.CBanner.BORDER1);
if(this.bottom!=null&&(this.$left!=null||this.right!=null)){
gc.setForeground(border1);
var y=this.bottom.getBounds().y-1-1;
gc.drawLine(0,y,size.x,y);
}if(this.$left==null||this.right==null)return;
var line1=$_A(this.curve.length+6,0);
var index=0;
var x=this.curveStart;
var y=0;
line1[index++]=x+1;
line1[index++]=size.y-1;
for(var i=0;i<Math.floor(this.curve.length/2);i++){
line1[index++]=x+this.curve[2*i];
line1[index++]=y+this.curve[2*i+1];
}
line1[index++]=x+this.curve_width;
line1[index++]=0;
line1[index++]=size.x;
line1[index++]=0;
var background=this.getBackground();
if(this.getDisplay().getDepth()>=15){
var line2=$_A(line1.length,0);
index=0;
for(var i=0;i<Math.floor(line1.length/2);i++){
line2[index]=line1[index++]-1;
line2[index]=line1[index++];
}
var line3=$_A(line1.length,0);
index=0;
for(var i=0;i<Math.floor(line1.length/2);i++){
line3[index]=line1[index++]+1;
line3[index]=line1[index++];
}
var from=border1.getRGB();
var to=background.getRGB();
var red=from.red+Math.floor(3*(to.red-from.red)/4);
var green=from.green+Math.floor(3*(to.green-from.green)/4);
var blue=from.blue+Math.floor(3*(to.blue-from.blue)/4);
var color=new $wt.graphics.Color(this.getDisplay(),red,green,blue);
gc.setForeground(color);
color.dispose();
var x1=Math.max(0,this.curveStart-200);
gc.setForeground(background);
gc.setBackground(border1);
gc.fillGradientRectangle(x1,size.y-1,this.curveStart-x1+1,1,false);
}else{
var x1=Math.max(0,this.curveStart-200);
gc.setForeground(border1);
gc.drawLine(x1,size.y-1,this.curveStart+1,size.y-1);
}gc.setForeground(border1);
},"$wt.graphics.GC");
$_M(c$,"onResize",
function(){
this.updateCurve(this.getSize().y);
});
$_M(c$,"setBottom",
function(control){
if(this.bottom!=null&&!this.bottom.isDisposed()){
var size=this.bottom.getSize();
this.bottom.setLocation(-200-size.x,-200-size.y);
}this.bottom=control;
this.layout(false);
},"$wt.widgets.Control");
$_M(c$,"setLayout",
function(layout){
return;
},"$wt.widgets.Layout");
$_M(c$,"setLeft",
function(control){
if(this.$left!=null&&!this.$left.isDisposed()){
var size=this.$left.getSize();
this.$left.setLocation(-200-size.x,-200-size.y);
}this.$left=control;
this.layout(false);
},"$wt.widgets.Control");
$_M(c$,"setRight",
function(control){
if(this.right!=null&&!this.right.isDisposed()){
var size=this.right.getSize();
this.right.setLocation(-200-size.x,-200-size.y);
}this.right=control;
this.layout(false);
},"$wt.widgets.Control");
$_M(c$,"setRightMinimumSize",
function(size){
this.rightMinWidth=size.x;
this.rightMinHeight=size.y;
},"$wt.graphics.Point");
$_M(c$,"setRightWidth",
function(width){
this.rightWidth=width;
this.layout(false);
},"~N");
$_M(c$,"setSimple",
function(simple){
if(this.simple!=simple){
this.simple=simple;
if(simple){
this.curve_width=5;
this.curve_indent=-2;
}else{
this.curve_width=50;
this.curve_indent=5;
}this.updateCurve(this.getSize().y);
this.layout(false);
this.redraw();
}},"~B");
$_M(c$,"updateCurve",
function(height){
var h=height-1;
if(this.simple){
this.curve=[0,h,1,h,2,h-1,3,h-2,3,2,4,1,5,0];
}else{
this.curve=$wt.custom.CBanner.bezier(0,h+1,30,h+1,this.curve_width-30,0,this.curve_width,0,this.curve_width);
}},"~N");
c$.$CBanner$1$=function(){
$_H();
c$=$_W($wt.custom,"CBanner$1",null,$wt.widgets.Listener);
$_V(c$,"handleEvent",
function(e){
switch(e.type){
case 12:
this.b$["$wt.custom.CBanner"].onDispose();
break;
case 3:
this.b$["$wt.custom.CBanner"].onMouseDown(e.x,e.y);
break;
case 7:
this.b$["$wt.custom.CBanner"].onMouseExit();
break;
case 5:
this.b$["$wt.custom.CBanner"].onMouseMove(e.x,e.y);
break;
case 4:
this.b$["$wt.custom.CBanner"].onMouseUp();
break;
case 9:
this.b$["$wt.custom.CBanner"].onPaint(e.gc);
break;
case 11:
this.b$["$wt.custom.CBanner"].onResize();
break;
}
},"$wt.widgets.Event");
c$=$_P();
};
$_S(c$,
"OFFSCREEN",-200,
"BORDER_BOTTOM",2,
"BORDER_TOP",3,
"BORDER_STRIPE",1,
"CURVE_TAIL",200,
"BEZIER_RIGHT",30,
"BEZIER_LEFT",30,
"MIN_LEFT",10,
"BORDER1",20);
});
