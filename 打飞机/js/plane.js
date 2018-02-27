/**
 * Created by Administrator on 2017/9/11.
 */
var div = document.getElementById("index");
var arrDiPlane = [];
var playPlane;
var arrZiDan=[];
var arrDiZiDan=[];
createPlayPlane1();

var movePlayPlaneTime=setInterval(movePlayPlane,100);
var createDiPlane1Time = setInterval(createDiPlane1,1000);
var movePlaneTime=setInterval(movePlane,200);
var moveZiDanTime=setInterval(moveZiDan,50);
var DiZiDantimer=setInterval(DiZiDanTime,1000);
var moveDiZiDanTime=setInterval(moveDiZiDan,100);
var pengZhuangTime=setInterval(pengZhuang,100);
var planePengZhuangTime=setInterval(planePengZhuang,100);
var shouShiTime=setInterval(shoushi,500);
var keyUp=false;
var keyDown=false;
var keyLeft=false;
var keyRight=false;
function movePlayPlane() {
    if(playPlane == undefined){
        return;
    }
    if(keyUp){
        playPlane.moveUp()
    }
    if(keyDown){
        playPlane.moveDown()
    }
    if(keyLeft){
        playPlane.moveLeft()
    }
    if(keyRight){
        playPlane.moveRight()
    }
}
document.onkeydown=function () {
    var e = window.event || arguments[0];
    if(e.keyCode==38){
        keyUp=true;
    }else if(e.keyCode==40){
        keyDown=true;
    }else if(e.keyCode==37){
        keyLeft=true;
    }else if(e.keyCode==39){
        keyRight=true;
    }else if(e.keyCode==32){
        playPlane.shot();
    }
};


document.onkeyup=function () {
    var e=window.event ||arguments[0];
    if(e.keyCode==38){
        keyUp=false;
    }else if(e.keyCode==40){
        keyDown=false;
    }else if(e.keyCode==37){
        keyLeft=false;
    }else if(e.keyCode==39){
        keyRight=false;
    }else if(e.keyCode==32){
        playPlane.shot();
    }
};

function createPlayPlane1() {
    var x=180;
    var y=550;
    var src="飞机/LiPlane.png";
    var speed=10;
    playPlane=new PlayPlanePrototype(x,y,src,speed);

}
function PlayPlanePrototype(x,y,src,speed) {
    this.x=x;
    this.y=y;
    this.src=src;
    this.speed=speed;
    this.imgnode=document.createElement("img");
    this.bleed=3;
    this.Deed=false;
    this.shot=function() {
        var width=parseInt(this.imgnode.width);
        var left=parseInt(this.imgnode.style.left);
        var top=parseInt(this.imgnode.style.top);
        var x=left+width/2-10;
        var y=top-40-10;
        var ziDan=new ziDanPrototype(x,y,"飞机/bullet_03.png",10);
        arrZiDan.push(ziDan);
    };
    this.moveUp=function() {
        var top=(parseInt(this.imgnode.style.top)-this.speed);
        if(top<630&&top>0) {
            this.imgnode.style.top = top + "px";
        }
    };
    this.moveDown=function() {
        var top=(parseInt(this.imgnode.style.top)+this.speed);
        if(top<630&&top>0) {
            this.imgnode.style.top = top + "px";
        }
    };
    this.moveLeft=function() {
        var left=(parseInt(this.imgnode.style.left)-this.speed);
        if(left>-10&&left<370) {
            this.imgnode.style.left = left + "px";
        }
    };
    this.moveRight=function() {
        var left=(parseInt(this.imgnode.style.left)+this.speed);
        if(left>-10&&left<370) {
            this.imgnode.style.left = left + "px";
        }
    };
    this.init=function () {
        this.imgnode.style.left=x+"px";
        this.imgnode.style.top=y+"px";
        this.imgnode.src=this.src;
        div.appendChild(this.imgnode);
    };
    this.init()
}




//我方子弹原形
function moveZiDan() {
    for(var i=0;i<arrZiDan.length;i++){
        var top=parseInt(arrZiDan[i].imgnode.style.top);
        if(top==0){
            div.removeChild(arrZiDan[i].imgnode);
            arrZiDan.splice(i,1);
            i--;
        }else {
            arrZiDan[i].move();
        }
    }
}
function ziDanPrototype(x,y,src,speed) {
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgnode = document.createElement("img");

    this.move = function () {
        var top = (parseInt(this.imgnode.style.top) - this.speed);
        if (top>=0) {
            this.imgnode.style.top = top + "px";
        }else {
            this.imgnode.style.top = "0px";
        }
    };
    this.init = function () {
        this.imgnode.style.left = x + "px";
        this.imgnode.style.top = y + "px";
        this.imgnode.src = this.src;
        div.appendChild(this.imgnode);
    };
    this.init();
}
//敌方
function movePlane() {
    for(var i=0;i<arrDiPlane.length;i++){
       var top=parseInt(arrDiPlane[i].imgnode.style.top);
       if(top<620){
           arrDiPlane[i].move();
       }else {
           div.removeChild(arrDiPlane[i].imgnode);
           arrDiPlane.splice(i,1);
           i--;
       }
    }
}
function createDiPlane1() {
    var x=parseInt(Math.random()*392);
    var y=0;
    var src="飞机/BluePlane.png";
    var speed=5;
    var plane=new DiPlanePrototype(x,y,src,speed);
    arrDiPlane.push(plane);
}
function DiZiDanTime() {
    var i=parseInt(Math.random()*arrDiPlane.length);
    arrDiPlane[i].shot();

}
function moveDiZiDan() {
    for(var i=0;i<arrDiZiDan.length;i++){
        var top=parseInt(arrDiZiDan[i].imgnode.style.top);
        if(top==620){
            div.removeChild(arrDiZiDan[i].imgnode);
            arrDiZiDan.splice(i,1);
            i--;
        }else {
            arrDiZiDan[i].move();
        }
    }
}
function DiPlanePrototype(x,y,src,speed) {
    this.x=x;
    this.y=y;
    this.src=src;
    this.speed=speed;
    this.imgnode=document.createElement("img");
    this.bleed=1;
    this.isDeed=false;
    this.shot=function() {
        var width=parseInt(this.imgnode.width);
        var left=parseInt(this.imgnode.style.left);
        var top=parseInt(this.imgnode.style.top);
        var x=left+width/2-10;
        var y=top+40-10;
        var ziDan=new DiZiDanPrototype(x,y,"飞机/bullet_03.png",10);
        arrDiZiDan.push(ziDan);
    };
    this.move=function() {
       var top=parseInt(this.imgnode.style.top)+this.speed;
       this.imgnode.style.top=top+"px"
    };
    this.init=function () {
        this.imgnode.style.left=x+"px";
        this.imgnode.style.top=y+"px";
        this.imgnode.src=this.src;
        div.appendChild(this.imgnode);
    };
    this.init()
}

//敌方子弹原形
function DiZiDanPrototype(x,y,src,speed) {
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgnode = document.createElement("img");
    this.move = function () {
        var top = (parseInt(this.imgnode.style.top) + this.speed);
        if (top<=620) {
            this.imgnode.style.top = top + "px";
        }else {
            this.imgnode.style.top = "620px";
        }
    };
    this.init = function () {
        this.imgnode.style.left = x + "px";
        this.imgnode.style.top = y + "px";
        this.imgnode.src = this.src;
        div.appendChild(this.imgnode);
    };
    this.init();
}
//我方飞机碰撞对方飞机
function planePengZhuang() {

    for (var j=0;j<arrDiPlane.length;j++){
        var playPlaneWidth=parseInt(playPlane.imgnode.width);
        var playPlaneHeight=parseInt(playPlane.imgnode.height);
        var playPlaneLeft=parseInt(playPlane.imgnode.style.left);
        var playPlaneTop=parseInt(playPlane.imgnode.style.top);
        var planeWidth=parseInt(arrDiPlane[j].imgnode.width);
        var planeHeight=parseInt(arrDiPlane[j].imgnode.height);
        var planeTop=parseInt(arrDiPlane[j].imgnode.style.top);
        var planeLeft=parseInt(arrDiPlane[j].imgnode.style.left);
        if(playPlaneLeft>(planeLeft-playPlaneWidth)&&playPlaneLeft<(planeLeft+planeWidth)&&playPlaneTop<(planeTop+planeHeight)&&playPlaneTop>(planeTop-playPlaneHeight)){
            arrDiPlane[j].imgnode.src="飞机/BeiJi_02.png";
            arrDiPlane[j].bleed--;
            playPlane.bleed--;
            if(playPlane.bleed==0){
                playPlane.Deed=true;
            }
            if(arrDiPlane[j].bleed==0){
                arrDiPlane[j].isDeed=true;
            }
        }
    }
}
//我方子弹啊碰撞敌方飞机
function pengZhuang() {
    for(var i=0;i<arrZiDan.length;i++){
        for (var j=0;j<arrDiPlane.length;j++){
            var planeWidth=parseInt(arrDiPlane[j].imgnode.width);
            var planeHeight=parseInt(arrDiPlane[j].imgnode.height);
            var planeTop=parseInt(arrDiPlane[j].imgnode.style.top);
            var planeLeft=parseInt(arrDiPlane[j].imgnode.style.left);
            var ziDanLeft=parseInt(arrZiDan[i].imgnode.style.left);
            var ziDantop=parseInt(arrZiDan[i].imgnode.style.top);
            var ziDanwidth=parseInt(arrZiDan[i].imgnode.width);
            var ziDanheight=parseInt(arrZiDan[i].imgnode.height);
            if(ziDanLeft>(planeLeft-ziDanwidth)&&ziDanLeft<(planeLeft+planeWidth)&&ziDantop<(planeTop+planeHeight)&&ziDantop>(planeTop-ziDanheight)){
                div.removeChild(arrZiDan[i].imgnode);
                arrZiDan.splice(i,1);
                arrDiPlane[j].imgnode.src="飞机/BeiJi_02.png";
                arrDiPlane[j].bleed--;
                if(arrDiPlane[j].bleed==0){
                    arrDiPlane[j].isDeed=true;
                }
            }
        }
}
}
function shoushi() {
  for(var i=0;i<arrDiPlane.length;i++){
      if(arrDiPlane[i].isDeed){
          div.removeChild(arrDiPlane[i].imgnode);
          arrDiPlane.splice(i,1);
          i--
      }
  }
}




