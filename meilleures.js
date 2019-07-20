{
const {random,sin,cos,atan2,hypot,PI}=Math;

let canvas,ctx;
let W,H;
let chains=[];
let balls=[];

class Ball{
    constructor(){
        this.x=W/2;
        this.y=H/2;
        this.dx=random()*10-5;
        this.dy=random()*10-5;
        this.hairs=[];
        for(let i=0;i<360;i+=15)
        this.hairs.push(new Chain(7,48,this.x+20*cos(i*PI/180),this.y+20*sin(i*PI/180)));
        this.prevdx=0;
        this.prevdy=0;
    
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,20,0,2*PI);
        ctx.closePath();
        ctx.fill();
        for(let h of this.hairs)
        h.draw();
    }
    update(){
        if(this.x+this.dx>=W)this.dx*=-1;
        else if(this.x+this.dx<0)this.dx*=-1;
        if(this.y+this.dy>=H)this.dy*=-1;
        else if(this.y+this.dy<0)this.dy*=-1;
        
        this.x+=this.dx;
        this.y+=this.dy;
        for(let h of this.hairs){
            h.links[0].x+=this.dx;
            h.links[0].y+=this.dy;
            h.update();
        }
        this.prevdx=this.dx;
        this.prevdy=this.dy;
        this.dx=(this.prevdx*2+random()-0.5)/2;
        this.dx=this.dx>2?2:this.dx;
        this.dx=this.dx<-2?-2:this.dx;
        this.dy=(this.prevdy*2+random()-0.5)/2;
        this.dy=this.dy>4?4:this.dy;
        this.dy=this.dy<-4?-4:this.dy;
    }
}

class Link{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}


class Chain{
    constructor(chainLength,linkLength,x,y){
        this.links=[];
        for(let i=0;i<chainLength;i++){
            this.links.push(new Link(x,y));
        }
        this.linkLength=linkLength;
    }
    draw(){
        ctx.beginPath()
        ctx.moveTo(this.links[0].x,this.links[0].y);
        for(let i=1;i<this.links.length;i++){
            ctx.lineWidth=(this.links.length-i)/(10);
            ctx.lineTo(this.links[i].x,this.links[i].y);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(this.links[0].x,this.links[0].y,this.links.length/5,0,Math.PI*2);
        ctx.closePath();
        ctx.fill();
    }
    update(){
        for(let i=1;i<this.links.length;i++){
            let angle= atan2(this.links[i-1].y-this.links[i].y, this.links[i-1].x-this.links[i].x);
            let distance= hypot(this.links[i-1].y-this.links[i].y, this.links[i-1].x-this.links[i].x);
            if(distance>this.linkLength){
                this.links[i].x=this.links[i-1].x-cos(angle)*this.linkLength;
                this.links[i].y=this.links[i-1].y-sin(angle)*this.linkLength;
            }
        }
    }
}

function init(){
    canvas=document.getElementById("canvas");
    canvas.width=W=innerWidth;
    canvas.height=H=innerHeight;
    ctx=canvas.getContext("2d");
    ctx.fillRect(0,0,W,H);
    
    for(let i=0;i<9;i++)
    balls.push(new Ball());
    
    loop();
}

function loop(){
    ctx.fillStyle="rgba(0,0,0,0.4)";
    ctx.fillRect(0,0,W,H);
    ctx.fillStyle="blue";
    ctx.strokeStyle="blue";
    for(let ball of balls){
    ball.draw();
    ball.update();
    }
    requestAnimationFrame(loop);
}

}


{
const {random,sin,cos,atan2,hypot,PI}=Math;

let canvas,ctx;
let W,H;
let chains=[];
let balls=[];

class Ball{
    constructor(){
        this.x=W/2;
        this.y=H/2;
        this.dx=random()*10-5;
        this.dy=random()*10-5;
        this.hairs=[];
        for(let i=0;i<360;i+=15)
        this.hairs.push(new Chain(7,48,this.x+20*cos(i*PI/180),this.y+20*sin(i*PI/180)));
        this.prevdx=0;
        this.prevdy=0;
    
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,20,0,2*PI);
        ctx.closePath();
        ctx.fill();
        for(let h of this.hairs)
        h.draw();
    }
    update(){
        if(this.x+this.dx>=W)this.dx*=-1;
        else if(this.x+this.dx<0)this.dx*=-1;
        if(this.y+this.dy>=H)this.dy*=-1;
        else if(this.y+this.dy<0)this.dy*=-1;
        
        this.x+=this.dx;
        this.y+=this.dy;
        for(let h of this.hairs){
            h.links[0].x+=this.dx;
            h.links[0].y+=this.dy;
            h.update();
        }
        this.prevdx=this.dx;
        this.prevdy=this.dy;
        this.dx=(this.prevdx*2+random()-0.5)/2;
        this.dx=this.dx>2?2:this.dx;
        this.dx=this.dx<-2?-2:this.dx;
        this.dy=(this.prevdy*2+random()-0.5)/2;
        this.dy=this.dy>4?4:this.dy;
        this.dy=this.dy<-4?-4:this.dy;
    }
}

class Link{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}


class Chain{
    constructor(chainLength,linkLength,x,y){
        this.links=[];
        for(let i=0;i<chainLength;i++){
            this.links.push(new Link(x,y));
        }
        this.linkLength=linkLength;
    }
    draw(){
        ctx.beginPath()
        ctx.moveTo(this.links[0].x,this.links[0].y);
        for(let i=1;i<this.links.length;i++){
            ctx.lineWidth=(this.links.length-i)/(10);
            ctx.lineTo(this.links[i].x,this.links[i].y);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(this.links[0].x,this.links[0].y,this.links.length/5,0,Math.PI*2);
        ctx.closePath();
        ctx.fill();
    }
    update(){
        for(let i=1;i<this.links.length;i++){
            let angle= atan2(this.links[i-1].y-this.links[i].y, this.links[i-1].x-this.links[i].x);
            let distance= hypot(this.links[i-1].y-this.links[i].y, this.links[i-1].x-this.links[i].x);
            if(distance>this.linkLength){
                this.links[i].x=this.links[i-1].x-cos(angle)*this.linkLength;
                this.links[i].y=this.links[i-1].y-sin(angle)*this.linkLength;
            }
        }
    }
}

function initi(){
    canvas=document.getElementById("canvasa");
    canvas.width=W=innerWidth;
    canvas.height=H=innerHeight;
    ctx=canvas.getContext("2d");
    ctx.fillRect(0,0,W,H);
    
    for(let i=0;i<5;i++)
    balls.push(new Ball());
    
    loop();
}

function loop(){
    ctx.fillStyle="rgba(0,0,0,0.4)";
    ctx.fillRect(0,0,W,H);
    ctx.fillStyle="rgba(0,0,225,0.1)";
    ctx.strokeStyle="blue";
    for(let ball of balls){
    ball.draw();
    ball.update();
    }
    requestAnimationFrame(loop);
}

}

{
var txt = "Nous sommes les <b>“meilleurs” </b> \n \n .. Nous avons une <b>vision</b>,\n \n . Nous avons un but,\n \n . Nous avons un objectif. \n \n . Rester toujours les <b>meilleurs</b> \n \n . Nous sommes \n \n . “<b>Meilleurs parmi les meilleurs</b>”";
    var options= {
        strings: txt.split("."),
        typeSpeed: 50,
        backSpeed: 100
    }
    var typed = new Typed("#typed", options);
    }
     
     
    
{
var txt = "Nous sommes les <b>“meilleurs” </b> \n \n .. Nous avons une <b>vision</b>,\n \n . Nous avons un but,\n \n . Nous avons un objectif. \n \n . Rester toujours les <b>meilleurs</b> \n \n . Nous sommes \n \n . “<b>Meilleurs parmi les meilleurs</b>”";
    var options= {
        strings: txt.split("."),
        typeSpeed: 10,
        backSpeed: 30
    }
    var typed = new Typed("#typedc", options);
    }
     
     
    
{    
 
function next1() {
  if (document.getElementById("gr5").style.display="none") {
    document.getElementById("gr5").style.display=""; document.getElementById("gr1").style.display="none";
 document.getElementById("1next").style.display="none";
 document.getElementById("2next").style.display="";
    return;
  }
  
}
function next2() {
  if (document.getElementById("gr4").style.display="none") {
    document.getElementById("gr4").style.display=""; document.getElementById("gr5").style.display="none";
 document.getElementById("2next").style.display="none";
 document.getElementById("3next").style.display="";
    return;
  }
  
}
function next3() {
  if (document.getElementById("gr3").style.display="none") {
    document.getElementById("gr3").style.display=""; document.getElementById("gr4").style.display="none";
 document.getElementById("3next").style.display="none";
 document.getElementById("4next").style.display="";
    return;
  }

  
}
function next4() {
  if (document.getElementById("gr2").style.display="none") {
    document.getElementById("gr2").style.display=""; document.getElementById("gr3").style.display="none";
 document.getElementById("4next").style.display="none";
 document.getElementById("5next").style.display="";
    return;
  }
}
  function next5() {
  if (document.getElementById("gr1").style.display="none") {
    document.getElementById("gr1").style.display=""; document.getElementById("gr2").style.display="none";
 document.getElementById("5next").style.display="none";
 document.getElementById("1next").style.display="";
    return;
  }
  
}
}
