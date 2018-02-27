/**
 * Created by Administrator on 2017/9/14.
 */
var play;//玩家
var p=document.getElementById("p1");
var movePlayTime=setInterval(movePlay,70);//我方移动时间
var moveZiDanTime=setInterval(moveZiDan,50);//我方子弹移动时间
var div=document.getElementById("div1");
var arrDiZiDan=[];//敌方子弹
var count=0;//分数统计
var fenShutimer=setInterval(fenShu,0);
var arrDi=[];//敌方容器
var arrZiDan=[];//我方子弹
var arrPlay=["http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/dragon/small/move.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/dragon/middle/move.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/dragon/big/move.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/dragon/large/move.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/dragon/final/move.gif"];
var arrPlayAtt=["冒险岛/dragon/small/att.gif","冒险岛/dragon/middle/att.gif","冒险岛/dragon/big/att.gif","冒险岛/dragon/large/att.gif","冒险岛/dragon/final/att.gif"];
var arrPlayHit=["冒险岛/dragon/small/hit.gif","冒险岛/dragon/middle/hit.gif","冒险岛/dragon/big/hit.gif","冒险岛/dragon/large/hit.gif","冒险岛/dragon/final/hit.gif"];
var arrPlayMag=["http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/dragon/small/magicmissile.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/dragon/middle/magicmissile.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/dragon/big/magicmissile.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/dragon/large/magicmissile.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/dragon/final/magicmissile.gif"];
var arrDiZl=["http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/bird/move.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/plane/move.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/ghost/move.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/boss/move.gif"];
var arrDiHit=["http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/bird/hit.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/plane/hit.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/ghost/hit.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/boss/hit.gif"];
var arrDiDie=["http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/bird/die.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/plane/die.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/ghost/die.gif","http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/boss/die.gif"];
var pengTime=setInterval(pengZhuang,110);//碰撞
var createPlaneTime=setInterval(createPlane,3000);//敌方飞机创建时间
var createBirdTime=setInterval(createBird,2000);//敌方鸟创建时间
var createGhostTime=setInterval(createGhost,5000);//敌方g创建时间
var createBossTimer=setInterval(createBoss,50000);
var moveDiTime=setInterval(moveDi,100);//敌方移动时间
var moveDiZiDanTimer=setInterval(moveBossZiDan,70);
var BossFcTimer=setInterval(BossFc,5000);
var ziDanLxTimer=setInterval(ziDanLx,300);
var DiPengZhuangTimer=setInterval(DipengZhuang,0);
var keyUp=false;//上
var keyDown=false;//下
var keyLeft=false;//左
var keyRight=false;//右
createPlay1();
//我方创建
function createPlay1() {
    var x=30;
    var y=300;
    var src=arrPlay[0];
    var speed=10;
    play=new PlayPrototype(x,y,src,speed);
}
//我方移动
function movePlay() {
    if(play == undefined){
        return;
    }
    if(keyUp){
        play.moveUp()
    }
    if(keyDown){
        play.moveDown()
    }
    if(keyLeft){
        play.moveLeft()
    }
    if(keyRight){
        play.moveRight()
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
        playMag();
        var playAttTimer=setTimeout(playAtt,500);
        var playShotTimer=setTimeout(playShotTime,300);
    }else if(e.keyCode==13){
       daZhao();
       for(var i=0;i<arrDi.length;i++){
           arrDi[i].isDeed=true;
           shoushi();
           if(arrDi[i].imgnode.src==arrDiZl[0]){
               count=count+1
           }else if(arrDi[i].imgnode.src==arrDiZl[1]){
               count=count+2
           }else if(arrDi[i].imgnode.src==arrDiZl[2]){
               count=count+5
           }else if(arrDi[i].imgnode.src==arrDiZl[3]){
               count=count+50
           }
       }
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
}
};
//我方原型
function PlayPrototype(x,y,src,speed) {
    this.x=x;
    this.y=y;
    this.src=src;
    this.speed=speed;
    this.imgnode=document.createElement("img");
    this.bleed=10;
    this.shot=function() {
        var width=parseInt(this.imgnode.width);
        var height=parseInt(this.imgnode.height);
        var left=parseInt(this.imgnode.style.left);
        var top=parseInt(this.imgnode.style.top);
        var x=left+width+10;
        var y=top+height/3
        var src=arrPlayAtt[0]
        var ziDan=new ziDanPrototype(x,y,src,10);
        arrZiDan.push(ziDan);
    };
    this.moveUp=function() {
        var top=(parseInt(this.imgnode.style.top)-this.speed);
        if(top<600&&top>0) {
            this.imgnode.style.top = top + "px";
        }
    };
    this.moveDown=function() {
        var top=(parseInt(this.imgnode.style.top)+this.speed);
        if(top<600&&top>0) {
            this.imgnode.style.top = top + "px";
        }
    };
    this.moveLeft=function() {
        var left=(parseInt(this.imgnode.style.left)-this.speed);
        if(left>0&&left<1270) {
            this.imgnode.style.left = left + "px";
        }
    };
    this.moveRight=function() {
        var left=(parseInt(this.imgnode.style.left)+this.speed);
        if(left>0&&left<1270) {
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
//我方子弹原型
function ziDanPrototype(x,y,src,speed) {
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgnode = document.createElement("img");
    this.hit=false;
    this.move = function () {
        var left = (parseInt(this.imgnode.style.left) + this.speed);
        if (left>=0) {
            this.imgnode.style.left = left + "px";
        }else {
            this.imgnode.style.left = "0px";
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
//我方子弹移动
function moveZiDan() {
    for(var i=0;i<arrZiDan.length;i++){
        var left=parseInt(arrZiDan[i].imgnode.style.left);
        if(left==1350){
            div.removeChild(arrZiDan[i].imgnode);
            arrZiDan.splice(i,1);
            i--;
        }else {
            arrZiDan[i].move();
        }
    }
}
//敌方原型
function DiPlanePrototype(x,y,src,speed) {
    this.x=x;
    this.y=y;
    this.src=src;
    this.speed=speed;
    this.imgnode=document.createElement("img");
    if(this.src=="冒险岛/enemy/bird/move.gif"){
        this.bleed=2;
    }else if(this.src=="冒险岛/enemy/plane/move.gif"){
        this.bleed=3
    }else if(this.src=="冒险岛/enemy/ghost/move.gif"){
        this.bleed=10
    }else if(this.src==arrDiZl[3]){
        this.bleed=50
    }
    this.hit=false;
    this.isDeed=false;
   this.shot=function() {
        var width=parseInt(this.imgnode.width);
        var height=parseInt(this.imgnode.height);
        var left=parseInt(this.imgnode.style.left);
        var top=parseInt(this.imgnode.style.top);
        var x=left-100
        var y=top+height/3;
        var ziDan=new DiZiDanPrototype(x,y,"冒险岛/enemy/boss/attackBall.gif",5);
        arrDiZiDan.push(ziDan);
    };
    this.move=function() {
        var left=parseInt(this.imgnode.style.left)-this.speed;
        this.imgnode.style.left=left+"px";
        if(this.src=="冒险岛/enemy/ghost/move.gif"){
            var top=parseInt(this.imgnode.style.top)+Math.random()*10-5;
            this.imgnode.style.top=top+"px"
        }else if(this.src==arrDiZl[3]){
            var top=parseInt(this.imgnode.style.top)+Math.random()*200-100;
            this.imgnode.style.top=top+"px"
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
//Boss子弹
function DiZiDanPrototype(x,y,src,speed) {
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgnode = document.createElement("img");
    this.hit=false;
    this.move = function () {
        var left = (parseInt(this.imgnode.style.left) - this.speed);
        if (left>=0&&left<1200) {
            this.imgnode.style.left = left + "px";
        }else {
            this.imgnode.style.left = "0px";
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
//Boss子弹移动
function moveBossZiDan() {
    for(var i=0;i<arrDiZiDan.length;i++){
        var left=parseInt(arrDiZiDan[i].imgnode.style.left);
        if(left==0){
            div.removeChild(arrDiZiDan[i].imgnode);
            arrDiZiDan.splice(i,1);
            i--;
        }else {
            arrDiZiDan[i].move();
        }
    }
}
//敌方创建
function createBird() {
    var x=1290;
    var y=parseInt(Math.random()*600);
    var src="冒险岛/enemy/bird/move.gif";
    var speed=3;
    var bird=new DiPlanePrototype(x,y,src,speed);
    arrDi.push(bird);
}
function createPlane() {
    var x=1290;
    var y=parseInt(Math.random()*600);
    var src="冒险岛/enemy/plane/move.gif";
    var speed=5;
    var plane=new DiPlanePrototype(x,y,src,speed);
    arrDi.push(plane);
}
function createGhost() {
    var x=1290;
    var y=parseInt(Math.random()*600);
    var src="冒险岛/enemy/ghost/move.gif";
    var speed=2;
    var plane=new DiPlanePrototype(x,y,src,speed);
    arrDi.push(plane);
}
function createBoss() {
    var x=1200;
    var y=parseInt(Math.random()*580);
    var src=arrDiZl[3];
    var speed=2;
    var plane=new DiPlanePrototype(x,y,src,speed);
    arrDi.push(plane);
}
function moveDi() {
    for(var i=0;i<arrDi.length;i++){
        var left=parseInt(arrDi[i].imgnode.style.left);
        if(left>-50){
            arrDi[i].move();
        }else {
            div.removeChild(arrDi[i].imgnode);
            arrDi.splice(i,1);
            i--;
        }
    }
}
//子弹撞对面
function pengZhuang() {
    for(var i=0;i<arrZiDan.length;i++){
        for (var j=0;j<arrDi.length;j++){
            var DiWidth=parseInt(arrDi[j].imgnode.width);
            var DiHeight=parseInt(arrDi[j].imgnode.height);
            var DiTop=parseInt(arrDi[j].imgnode.style.top);
            var DiLeft=parseInt(arrDi[j].imgnode.style.left);
            var ziDanLeft=parseInt(arrZiDan[i].imgnode.style.left);
            var ziDantop=parseInt(arrZiDan[i].imgnode.style.top);
            var ziDanwidth=parseInt(arrZiDan[i].imgnode.width);
            var ziDanheight=parseInt(arrZiDan[i].imgnode.height);
            if(ziDanLeft>(DiLeft-ziDanwidth)&&ziDanLeft<(DiLeft+DiWidth)&&ziDantop<(DiTop+DiHeight)&&ziDantop>(DiTop-ziDanheight)){
                arrDi[j].bleed--;
                arrZiDan[i].hit=true;//子弹是否碰撞
                ziDanPz();
                var ziDanDelTimer=setTimeout(ziDanDel,100);
                arrDi[j].hit=true;//敌方是否碰撞
                if(arrDi[j].bleed==0){
                    arrDi[j].isDeed=true;
                    if(arrDi[j].imgnode.src==arrDiZl[0]){
                        count=count+1
                    }else if(arrDi[j].imgnode.src==arrDiZl[1]){
                        count=count+2
                    }else if(arrDi[j].imgnode.src==arrDiZl[2]){
                        count=count+5
                    }else if(arrDi[j].imgnode.src==arrDiZl[3]){
                        count=count+50
                    }
                }
                DiFc();
                bianxing();
            }
        }
    }
}
function shoushi() {
    for(var i=0;i<arrDi.length;i++){
        if(arrDi[i].isDeed){
            div.removeChild(arrDi[i].imgnode);
            arrDi.splice(i,1);
            i--
        }
    }
}
//子弹碰撞动画
function ziDanPz() {
    for(var j=0;j<arrPlay.length;j++){
        for(var i=0;i<arrZiDan.length;i++){
             if(arrZiDan[i].hit&&play.imgnode.src==arrPlay[j]){
          arrZiDan[i].imgnode.src=arrPlayHit[j]
      }
    }
}
}
//发子弹动画
function playMag() {
    for(var i=0;i<arrPlay.length;i++){
        if(play.imgnode.src==arrPlay[i]){
            play.imgnode.src=arrPlayMag[i]
        }
    }
}
//发子弹结束返回
function playAtt() {
    for(var i=0;i<arrPlay.length;i++){
        if(play.imgnode.src==arrPlayMag[i]){
            play.imgnode.src=arrPlay[i]
        }
    }
}
//子弹类型
function ziDanLx() {
    for(var i=0;i<arrPlay.length;i++){
        for(var j=0;j<arrZiDan.length;j++){
        if(play.imgnode.src==arrPlay[i]){
            arrZiDan[j].imgnode.src=arrPlayAtt[i]
        }
        }
    }
}
//发子弹时间
function playShotTime() {
    play.shot()
}
//子弹节点删除
function ziDanDel() {
    for(var i=0;i<arrZiDan.length;i++){
        if (arrZiDan[i].hit){
            div.removeChild(arrZiDan[i].imgnode);
            arrZiDan.splice(i,1);
            i--
        }
    }
}
//变形
function bianxing() {
    if(count>=5&&count<20){
        play.imgnode.src=arrPlay[1]
    }else if(count>=20&&count<40){
        play.imgnode.src=arrPlay[2]
    }else if(count>=40&&count<70){
        play.imgnode.src=arrPlay[3]
    }else if(count>=70){
        play.imgnode.src=arrPlay[4]
    }
}
//Boss发子弹时间
function BossZiDan() {
    for(var i=0;i<arrDi.length;i++){
        if(arrDi[i].imgnode.src=="http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/boss/attack.gif"){
            arrDi[i].shot()
        }

    }
}
//boss变形发子弹
function BossAtt() {
    for(var i=0;i<arrDi.length;i++){
        if(arrDi[i].imgnode.src==arrDiZl[3]){
            arrDi[i].imgnode.src="冒险岛/enemy/boss/attack.gif"
        }
    }
}
//boss变形返回
function BossRe() {
    for(var i=0;i<arrDi.length;i++){
        if(arrDi[i].imgnode.src=="http://localhost:63342/23/%E5%86%92%E9%99%A9%E5%B2%9B/%E5%86%92%E9%99%A9%E5%B2%9B/enemy/boss/attack.gif"){
            arrDi[i].imgnode.src=arrDiZl[3]
        }
    }
}
//boss发子弹到变形返回
function BossFc() {
    BossAtt();
    var BossReTimer=setTimeout(BossRe,1000);
    var BossZiDanTimer=setTimeout(BossZiDan,800);

}
//敌方被碰撞动画
function DiHit() {
    for (var i=0;i<arrDi.length;i++) {
        for(var j=0;j<arrDiZl.length;j++){
        if (arrDi[i].hit&&arrDi[i].imgnode.src==arrDiZl[j]&&arrDi[i].isDeed==false){
         arrDi[i].imgnode.src=arrDiHit[j];
            var DiHitReTimer=setTimeout(DiHitRe,200);
        }else if(arrDi[i].imgnode.src==arrDiZl[j]&&arrDi[i].isDeed){
                arrDi[i].imgnode.src=arrDiDie[j];
            var shouShiTime=setInterval(shoushi,800);
            }
        }
    }
}
//敌方碰撞返回动画
function DiHitRe() {
    for (var i=0;i<arrDi.length;i++) {
        for(var j=0;j<arrDiZl.length;j++){
            if (arrDi[i].imgnode.src==arrDiHit[j]&&arrDi[i].isDeed==false){
                arrDi[i].imgnode.src=arrDiZl[j];
            }
        }
    }
}
//敌方生到死
function DiFc() {
    DiHit();
}
//分数
function fenShu() {
    p.innerHTML=count;
}
//敌方碰撞
function DipengZhuang() {
    for(var i=0;i<arrDiZiDan.length;i++){
        for (var j=0;j<arrDi.length;j++){
            var playWidth=parseInt(play.imgnode.width);
            var playHeight=parseInt(play.imgnode.height);
            var playLeft=parseInt(play.imgnode.style.left);
            var playTop=parseInt(play.imgnode.style.top);
            var DiWidth=parseInt(arrDi[j].imgnode.width);
            var DiHeight=parseInt(arrDi[j].imgnode.height);
            var DiTop=parseInt(arrDi[j].imgnode.style.top);
            var DiLeft=parseInt(arrDi[j].imgnode.style.left);
            var ziDanLeft=parseInt(arrDiZiDan[i].imgnode.style.left);
            var ziDantop=parseInt(arrDiZiDan[i].imgnode.style.top);
            var ziDanwidth=parseInt(arrDiZiDan[i].imgnode.width);
            var ziDanheight=parseInt(arrDiZiDan[i].imgnode.height);
            if((playLeft>(DiLeft-playWidth)&&playLeft<(DiLeft+DiWidth)&&playTop<(DiTop+DiHeight)&&playTop>(DiTop-playHeight))||(playLeft>(ziDanLeft-playWidth)&&playLeft<(ziDanLeft+ziDanwidth)&&playTop<(ziDantop+ziDanheight)&&playTop>(ziDantop-playHeight))){
                play.bleed--;
                arrDi[j].isDeed=true;
                    if(arrDi[j].imgnode.src==arrDiZl[0]&&arrDi[j].isDeed){
                        count=count+1
                    }else if(arrDi[j].imgnode.src==arrDiZl[1]&&arrDi[j].isDeed){
                        count=count+2
                    }else if(arrDi[j].imgnode.src==arrDiZl[2]&&arrDi[j].isDeed){
                        count=count+5
                    }else if(arrDi[j].imgnode.src==arrDiZl[3]&&arrDi[j].isDeed){
                        count=count+50
                    }
                }
                shoushi();
                if(play.bleed==0){
                    div.removeChild(play.imgnode);
                }
            }
        }

}
//大招
function daZhao() {
    img2=document.getElementById("img2");
    style=img2.currentStyle||document.defaultView.getComputedStyle(img2,null);
    img2.style.display="block";
    var dazhaoOFFTimer=setTimeout(dazhaoOFF,3000);
    function dazhaoOFF() {
        img2.style.display="none";
    }
}