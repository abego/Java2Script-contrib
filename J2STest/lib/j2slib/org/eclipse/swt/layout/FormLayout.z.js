﻿/* http://j2s.sf.net/ */c$=$_C(function(){
this.numerator=0;
this.denominator=100;
this.offset=0;
this.control=null;
this.alignment=0;
$_Z(this,arguments);
},$wt.layout,"FormAttachment");
$_K(c$,
function(){
});
$_K(c$,
function(numerator){
this.construct(numerator,100,0);
},"~N");
$_K(c$,
function(numerator,offset){
this.construct(numerator,100,offset);
},"~N,~N");
$_K(c$,
function(numerator,denominator,offset){
this.numerator=numerator;
this.denominator=denominator;
this.offset=offset;
},"~N,~N,~N");
$_K(c$,
function(control){
this.construct(control,0,-1);
},"$wt.widgets.Control");
$_K(c$,
function(control,offset){
this.construct(control,offset,-1);
},"$wt.widgets.Control,~N");
$_K(c$,
function(control,offset,alignment){
this.control=control;
this.offset=offset;
this.alignment=alignment;
},"$wt.widgets.Control,~N,~N");
$_M(c$,"divide",
function(value){
return new $wt.layout.FormAttachment(this.numerator,this.denominator*value,Math.floor(this.offset/value));
},"~N");
$_M(c$,"gcd",
function(m,n){
var temp;
m=Math.abs(m);
n=Math.abs(n);
if(m<n){
temp=m;
m=n;
n=temp;
}while(n!=0){
temp=m;
m=n;
n=temp%n;
}
return m;
},"~N,~N");
$_M(c$,"minus",
function(attachment){
var solution=new $wt.layout.FormAttachment();
solution.numerator=this.numerator*attachment.denominator-this.denominator*attachment.numerator;
solution.denominator=this.denominator*attachment.denominator;
var gcd=this.gcd(solution.denominator,solution.numerator);
solution.numerator=Math.floor(solution.numerator/gcd);
solution.denominator=Math.floor(solution.denominator/gcd);
solution.offset=this.offset-attachment.offset;
return solution;
},"$wt.layout.FormAttachment");
$_M(c$,"minus",
function(value){
return new $wt.layout.FormAttachment(this.numerator,this.denominator,this.offset-value);
},"~N");
$_M(c$,"plus",
function(attachment){
var solution=new $wt.layout.FormAttachment();
solution.numerator=this.numerator*attachment.denominator+this.denominator*attachment.numerator;
solution.denominator=this.denominator*attachment.denominator;
var gcd=this.gcd(solution.denominator,solution.numerator);
solution.numerator=Math.floor(solution.numerator/gcd);
solution.denominator=Math.floor(solution.denominator/gcd);
solution.offset=this.offset+attachment.offset;
return solution;
},"$wt.layout.FormAttachment");
$_M(c$,"plus",
function(value){
return new $wt.layout.FormAttachment(this.numerator,this.denominator,this.offset+value);
},"~N");
$_M(c$,"solveX",
function(value){
return(Math.floor((this.numerator*value)/this.denominator))+this.offset;
},"~N");
$_M(c$,"solveY",
function(value){
return Math.floor((value-this.offset)*this.denominator/this.numerator);
},"~N");
$_V(c$,"toString",
function(){
var string=this.control!=null?this.control.toString():this.numerator+"/"+this.denominator;
return"{y = ("+string+(this.offset>=0?")x + "+this.offset:")x - "+(-this.offset))+"}";
});
$_L(null,"$wt.layout.FormData",["$wt.layout.FormAttachment"],function(){
c$=$_C(function(){
this.width=-1;
this.height=-1;
this.left=null;
this.right=null;
this.top=null;
this.bottom=null;
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
this.cacheLeft=null;
this.cacheRight=null;
this.cacheTop=null;
this.cacheBottom=null;
this.isVisited=false;
this.needed=false;
$_Z(this,arguments);
},$wt.layout,"FormData");
$_K(c$,
function(){
});
$_K(c$,
function(width,height){
this.width=width;
this.height=height;
},"~N,~N");
$_M(c$,"computeSize",
function(control,wHint,hHint,flushCache){
if(this.cacheWidth!=-1&&this.cacheHeight!=-1)return;
if(wHint==this.width&&hHint==this.height){
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
this.defaultHeight=this.defaultWidth=-1;
this.currentHeight=this.currentWidth=-1;
});
$_M(c$,"getWidth",
function(control,flushCache){
this.needed=true;
this.computeSize(control,this.width,this.height,flushCache);
return this.cacheWidth;
},"$wt.widgets.Control,~B");
$_M(c$,"getHeight",
function(control,flushCache){
this.computeSize(control,this.width,this.height,flushCache);
return this.cacheHeight;
},"$wt.widgets.Control,~B");
$_M(c$,"getBottomAttachment",
function(control,spacing,flushCache){
if(this.cacheBottom!=null)return this.cacheBottom;
if(this.isVisited)return this.cacheBottom=new $wt.layout.FormAttachment(0,this.getHeight(control,flushCache));
if(this.bottom==null){
if(this.top==null)return this.cacheBottom=new $wt.layout.FormAttachment(0,this.getHeight(control,flushCache));
return this.cacheBottom=this.getTopAttachment(control,spacing,flushCache).plus(this.getHeight(control,flushCache));
}var bottomControl=this.bottom.control;
if(bottomControl!=null){
if(bottomControl.isDisposed()){
this.bottom.control=bottomControl=null;
}else{
if(bottomControl.getParent()!==control.getParent()){
bottomControl=null;
}}}if(bottomControl==null)return this.cacheBottom=this.bottom;
this.isVisited=true;
var bottomData=bottomControl.getLayoutData();
var bottomAttachment=bottomData.getBottomAttachment(bottomControl,spacing,flushCache);
switch(this.bottom.alignment){
case 1024:
this.cacheBottom=bottomAttachment.plus(this.bottom.offset);
break;
case 16777216:
{
var topAttachment=bottomData.getTopAttachment(bottomControl,spacing,flushCache);
var bottomHeight=bottomAttachment.minus(topAttachment);
this.cacheBottom=bottomAttachment.minus(bottomHeight.minus(this.getHeight(control,flushCache)).divide(2));
break;
}default:
{
var topAttachment=bottomData.getTopAttachment(bottomControl,spacing,flushCache);
this.cacheBottom=topAttachment.plus(this.bottom.offset-spacing);
break;
}}
this.isVisited=false;
return this.cacheBottom;
},"$wt.widgets.Control,~N,~B");
$_M(c$,"getLeftAttachment",
function(control,spacing,flushCache){
if(this.cacheLeft!=null)return this.cacheLeft;
if(this.isVisited)return this.cacheLeft=new $wt.layout.FormAttachment(0,0);
if(this.left==null){
if(this.right==null)return this.cacheLeft=new $wt.layout.FormAttachment(0,0);
return this.cacheLeft=this.getRightAttachment(control,spacing,flushCache).minus(this.getWidth(control,flushCache));
}var leftControl=this.left.control;
if(leftControl!=null){
if(leftControl.isDisposed()){
this.left.control=leftControl=null;
}else{
if(leftControl.getParent()!==control.getParent()){
leftControl=null;
}}}if(leftControl==null)return this.cacheLeft=this.left;
this.isVisited=true;
var leftData=leftControl.getLayoutData();
var leftAttachment=leftData.getLeftAttachment(leftControl,spacing,flushCache);
switch(this.left.alignment){
case 16384:
this.cacheLeft=leftAttachment.plus(this.left.offset);
break;
case 16777216:
{
var rightAttachment=leftData.getRightAttachment(leftControl,spacing,flushCache);
var leftWidth=rightAttachment.minus(leftAttachment);
this.cacheLeft=leftAttachment.plus(leftWidth.minus(this.getWidth(control,flushCache)).divide(2));
break;
}default:
{
var rightAttachment=leftData.getRightAttachment(leftControl,spacing,flushCache);
this.cacheLeft=rightAttachment.plus(this.left.offset+spacing);
}}
this.isVisited=false;
return this.cacheLeft;
},"$wt.widgets.Control,~N,~B");
$_M(c$,"getName",
function(){
var string=this.getClass().getName();
var index=string.lastIndexOf('.');
if(index==-1)return string;
return string.substring(index+1,string.length);
});
$_M(c$,"getRightAttachment",
function(control,spacing,flushCache){
if(this.cacheRight!=null)return this.cacheRight;
if(this.isVisited)return this.cacheRight=new $wt.layout.FormAttachment(0,this.getWidth(control,flushCache));
if(this.right==null){
if(this.left==null)return this.cacheRight=new $wt.layout.FormAttachment(0,this.getWidth(control,flushCache));
return this.cacheRight=this.getLeftAttachment(control,spacing,flushCache).plus(this.getWidth(control,flushCache));
}var rightControl=this.right.control;
if(rightControl!=null){
if(rightControl.isDisposed()){
this.right.control=rightControl=null;
}else{
if(rightControl.getParent()!==control.getParent()){
rightControl=null;
}}}if(rightControl==null)return this.cacheRight=this.right;
this.isVisited=true;
var rightData=rightControl.getLayoutData();
var rightAttachment=rightData.getRightAttachment(rightControl,spacing,flushCache);
switch(this.right.alignment){
case 131072:
this.cacheRight=rightAttachment.plus(this.right.offset);
break;
case 16777216:
{
var leftAttachment=rightData.getLeftAttachment(rightControl,spacing,flushCache);
var rightWidth=rightAttachment.minus(leftAttachment);
this.cacheRight=rightAttachment.minus(rightWidth.minus(this.getWidth(control,flushCache)).divide(2));
break;
}default:
{
var leftAttachment=rightData.getLeftAttachment(rightControl,spacing,flushCache);
this.cacheRight=leftAttachment.plus(this.right.offset-spacing);
break;
}}
this.isVisited=false;
return this.cacheRight;
},"$wt.widgets.Control,~N,~B");
$_M(c$,"getTopAttachment",
function(control,spacing,flushCache){
if(this.cacheTop!=null)return this.cacheTop;
if(this.isVisited)return this.cacheTop=new $wt.layout.FormAttachment(0,0);
if(this.top==null){
if(this.bottom==null)return this.cacheTop=new $wt.layout.FormAttachment(0,0);
return this.cacheTop=this.getBottomAttachment(control,spacing,flushCache).minus(this.getHeight(control,flushCache));
}var topControl=this.top.control;
if(topControl!=null){
if(topControl.isDisposed()){
this.top.control=topControl=null;
}else{
if(topControl.getParent()!==control.getParent()){
topControl=null;
}}}if(topControl==null)return this.cacheTop=this.top;
this.isVisited=true;
var topData=topControl.getLayoutData();
var topAttachment=topData.getTopAttachment(topControl,spacing,flushCache);
switch(this.top.alignment){
case 128:
this.cacheTop=topAttachment.plus(this.top.offset);
break;
case 16777216:
{
var bottomAttachment=topData.getBottomAttachment(topControl,spacing,flushCache);
var topHeight=bottomAttachment.minus(topAttachment);
this.cacheTop=topAttachment.plus(topHeight.minus(this.getHeight(control,flushCache)).divide(2));
break;
}default:
{
var bottomAttachment=topData.getBottomAttachment(topControl,spacing,flushCache);
this.cacheTop=bottomAttachment.plus(this.top.offset+spacing);
break;
}}
this.isVisited=false;
return this.cacheTop;
},"$wt.widgets.Control,~N,~B");
$_V(c$,"toString",
function(){
var string=this.getName()+" {";
if(this.width!=-1)string+="width="+this.width+" ";
if(this.height!=-1)string+="height="+this.height+" ";
if(this.left!=null)string+="left="+this.left+" ";
if(this.right!=null)string+="right="+this.right+" ";
if(this.top!=null)string+="top="+this.top+" ";
if(this.bottom!=null)string+="bottom="+this.bottom+" ";
string=string.trim();
string+="}";
return string;
});
});
$_L(["$wt.widgets.Layout"],"$wt.layout.FormLayout",["$wt.graphics.Point","$.Rectangle","$wt.layout.FormData"],function(){
c$=$_C(function(){
this.marginWidth=0;
this.marginHeight=0;
this.marginLeft=0;
this.marginTop=0;
this.marginRight=0;
this.marginBottom=0;
this.spacing=0;
$_Z(this,arguments);
},$wt.layout,"FormLayout",$wt.widgets.Layout);
$_K(c$,
function(){
$_R(this,$wt.layout.FormLayout,[]);
});
$_M(c$,"computeHeight",
function(control,data,flushCache){
var top=data.getTopAttachment(control,this.spacing,flushCache);
var bottom=data.getBottomAttachment(control,this.spacing,flushCache);
var height=bottom.minus(top);
if(height.numerator==0){
if(bottom.numerator==0)return bottom.offset;
if(bottom.numerator==bottom.denominator)return-top.offset;
if(bottom.offset<=0){
return Math.floor(-top.offset*top.denominator/bottom.numerator);
}var divider=bottom.denominator-bottom.numerator;
return Math.floor(bottom.denominator*bottom.offset/divider);
}return height.solveY(data.getHeight(control,flushCache));
},"$wt.widgets.Control,$wt.layout.FormData,~B");
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
$_M(c$,"getName",
function(){
var string=this.getClass().getName();
var index=string.lastIndexOf('.');
if(index==-1)return string;
return string.substring(index+1,string.length);
});
$_M(c$,"computeWidth",
function(control,data,flushCache){
var left=data.getLeftAttachment(control,this.spacing,flushCache);
var right=data.getRightAttachment(control,this.spacing,flushCache);
var width=right.minus(left);
if(width.numerator==0){
if(right.numerator==0)return right.offset;
if(right.numerator==right.denominator)return-left.offset;
if(right.offset<=0){
return Math.floor(-left.offset*left.denominator/left.numerator);
}var divider=right.denominator-right.numerator;
return Math.floor(right.denominator*right.offset/divider);
}return width.solveY(data.getWidth(control,flushCache));
},"$wt.widgets.Control,$wt.layout.FormData,~B");
$_M(c$,"layout",
function(composite,flushCache){
var rect=composite.getClientArea();
var x=rect.x+this.marginLeft+this.marginWidth;
var y=rect.y+this.marginTop+this.marginHeight;
var width=Math.max(0,rect.width-this.marginLeft-2*this.marginWidth-this.marginRight);
var height=Math.max(0,rect.height-this.marginLeft-2*this.marginHeight-this.marginBottom);
this.layout(composite,true,x,y,width,height,flushCache);
},"$wt.widgets.Composite,~B");
$_M(c$,"layout",
function(composite,move,x,y,width,height,flushCache){
var children=composite.getChildren();
for(var i=0;i<children.length;i++){
var child=children[i];
var data=child.getLayoutData();
if(data==null)child.setLayoutData(data=new $wt.layout.FormData());
if(flushCache)data.flushCache();
data.cacheLeft=data.cacheRight=data.cacheTop=data.cacheBottom=null;
}
var flush=null;
var bounds=null;
var w=0;
var h=0;
for(var i=0;i<children.length;i++){
var child=children[i];
var data=child.getLayoutData();
if(width!=-1){
data.needed=false;
var left=data.getLeftAttachment(child,this.spacing,flushCache);
var right=data.getRightAttachment(child,this.spacing,flushCache);
var x1=left.solveX(width);
var x2=right.solveX(width);
if(data.height==-1&&!data.needed){
var trim=0;
if($_O(child,$wt.widgets.Scrollable)){
var rect=(child).computeTrim(0,0,0,0);
trim=rect.width;
}else{
trim=child.getBorderWidth()*2;
}data.cacheWidth=data.cacheHeight=-1;
var currentWidth=Math.max(0,x2-x1-trim);
data.computeSize(child,currentWidth,data.height,flushCache);
if(flush==null)flush=$_A(children.length,false);
flush[i]=true;
}w=Math.max(x2,w);
if(move){
if(bounds==null)bounds=new Array(children.length);
bounds[i]=new $wt.graphics.Rectangle(0,0,0,0);
bounds[i].x=x+x1;
bounds[i].width=x2-x1;
}}else{
w=Math.max(this.computeWidth(child,data,flushCache),w);
}}
for(var i=0;i<children.length;i++){
var child=children[i];
var data=child.getLayoutData();
if(height!=-1){
var y1=data.getTopAttachment(child,this.spacing,flushCache).solveX(height);
var y2=data.getBottomAttachment(child,this.spacing,flushCache).solveX(height);
h=Math.max(y2,h);
if(move){
bounds[i].y=y+y1;
bounds[i].height=y2-y1;
}}else{
h=Math.max(this.computeHeight(child,data,flushCache),h);
}}
for(var i=0;i<children.length;i++){
var child=children[i];
var data=child.getLayoutData();
if(flush!=null&&flush[i])data.cacheWidth=data.cacheHeight=-1;
data.cacheLeft=data.cacheRight=data.cacheTop=data.cacheBottom=null;
}
if(move){
for(var i=0;i<children.length;i++){
children[i].setBounds(bounds[i]);
}
}w+=this.marginLeft+this.marginWidth*2+this.marginRight;
h+=this.marginTop+this.marginHeight*2+this.marginBottom;
return new $wt.graphics.Point(w,h);
},"$wt.widgets.Composite,~B,~N,~N,~N,~N,~B");
$_V(c$,"toString",
function(){
var string=this.getName()+" {";
if(this.marginWidth!=0)string+="marginWidth="+this.marginWidth+" ";
if(this.marginHeight!=0)string+="marginHeight="+this.marginHeight+" ";
if(this.marginLeft!=0)string+="marginLeft="+this.marginLeft+" ";
if(this.marginRight!=0)string+="marginRight="+this.marginRight+" ";
if(this.marginTop!=0)string+="marginTop="+this.marginTop+" ";
if(this.marginBottom!=0)string+="marginBottom="+this.marginBottom+" ";
if(this.spacing!=0)string+="spacing="+this.spacing+" ";
string=string.trim();
string+="}";
return string;
});
});
