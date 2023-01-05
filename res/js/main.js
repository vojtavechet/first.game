const ball = document.getElementById("ball");
const me_hp = document.getElementById("me_hp");
const enemy_hp = document.getElementById("enemy_hp");

let coin = parseInt (localStorage.getItem("coin")) ||0;
let level = parseInt (localStorage.getItem("level"))||1;
let me__hp = parseInt (localStorage.getItem("me__hp"))||20;
let me__dmg = parseInt (localStorage.getItem("me__dmg"))||1;
let coin_kopacka = parseInt (localStorage.getItem("coin_kopacka"))||50;
let coin_srdce = parseInt (localStorage.getItem("coin_srdce"))||50;

parseInt(localStorage.setItem("level" , level));
parseInt(localStorage.setItem("coin" , coin));
parseInt(localStorage.setItem("me__hp" , me__hp));
parseInt(localStorage.setItem("me__dmg" , me__dmg));
parseInt(localStorage.setItem("coin_kopacka" , coin_kopacka));
parseInt(localStorage.setItem("coin_srdce" , coin_srdce));

me_hp.innerHTML = me__hp;
ball.onmousedown = () => {
if (me_hp.innerHTML > 0 && enemy_hp.innerHTML > 0 ) {
    enemy_hp.innerHTML -= me__dmg;
    parseInt(localStorage.setItem("me__dmg" , me__dmg));    
}
};
const dmginterval = setInterval (() =>{
  me_hp.innerHTML --;
 if(me_hp.innerHTML<=0 ) {
  clearInterval(dmginterval);
  window.location.href = "/home.html";
  level = 1;
  parseInt(localStorage.setItem("level" , level));
}
if(enemy_hp.innerHTML<=0){

  coin += level*10;
  parseInt(localStorage.setItem("coin" , coin));
  level +=1;
  parseInt(localStorage.setItem("level" , level));
  clearInterval(dmginterval);
  window.location.href = "/home.html";
}
},300);

enemy_hp.innerHTML =  level*10


