const kopacka = document.getElementById("kopacka")
const srdce = document.getElementById("srdce")
const cena_heal = document.getElementById("cena_heal")
const cena_srdce = document.getElementById("cena_srdce")
const coin_count = document.getElementById("coin_count")


let coin = parseInt (localStorage.getItem("coin")) ||0;
let level = parseInt (localStorage.getItem("level"))||1;
let me__hp = parseInt (localStorage.getItem("me__hp"))||20;
let me__dmg = parseInt (localStorage.getItem("me__dmg"))||1;
let coin_kopacka = parseInt (localStorage.getItem("coin_kopacka")) ||150;
let coin_srdce = parseInt (localStorage.getItem("coin_srdce")) ||50;

parseInt(localStorage.setItem("level" , level));
parseInt(localStorage.setItem("coin" , coin));
parseInt(localStorage.setItem("me__hp" , me__hp));
parseInt(localStorage.setItem("me__dmg" , me__dmg));
parseInt(localStorage.setItem("coin_kopacka" , coin_kopacka));
parseInt(localStorage.setItem("coin_srdce" , coin_srdce));

coin_count.innerHTML = `peníze  ${coin}`;
cena_srdce.innerHTML = coin_srdce;
cena_heal.innerHTML = coin_kopacka;

srdce.onclick = () => {
if(coin >= coin_srdce)  {
      me__hp +=10;
     parseInt(localStorage.setItem("me__hp" , me__hp));
     coin -= coin_srdce;
     parseInt(localStorage.setItem("coin" , coin));
     coin_srdce += 50;
     parseInt(localStorage.setItem("coin_srdce" , coin_srdce));
     coin_count.innerHTML = `peníze ${coin}`;
     cena_srdce.innerHTML = coin_srdce;
} };

kopacka.onclick = () => {
    if(coin >= coin_kopacka)  {
        me__dmg +=1;
        parseInt(localStorage.setItem("me__dmg" , me__dmg));
        coin -= coin_kopacka;
        parseInt(localStorage.setItem("coin" , coin));
        coin_kopacka += 150;
        parseInt(localStorage.setItem("coin_kopacka" , coin_kopacka));
        coin_count.innerHTML = `peníze ${coin}`;
        cena_heal.innerHTML = coin_kopacka;
    } }