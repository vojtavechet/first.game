const level_count = document.getElementById("level_count");
const coin_count = document.getElementById("coin_count");

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

level_count.innerHTML = `level:${level}`;
coin_count.innerHTML = `peníze ${coin}`;
