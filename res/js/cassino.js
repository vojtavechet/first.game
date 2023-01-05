const vsadit = document.getElementById("vsadit")
const button_vsadit_cerna = document.getElementById("button_vsadit_cerna")

let coin = parseInt (localStorage.getItem("coin")) ||0;
let level = parseInt (localStorage.getItem("level"))||1;
let me__hp = parseInt (localStorage.getItem("me__hp"))||20;
let me__dmg = parseInt (localStorage.getItem("me__dmg"))||1;
let coin_kopacka = parseInt (localStorage.getItem("coin_kopacka")) ||40;
let coin_srdce = parseInt (localStorage.getItem("coin_srdce")) ||40;

parseInt(localStorage.setItem("level" , level));
parseInt(localStorage.setItem("coin" , coin));
parseInt(localStorage.setItem("me__hp" , me__hp));
parseInt(localStorage.setItem("me__dmg" , me__dmg));
parseInt(localStorage.setItem("coin_kopacka" , coin_kopacka));
parseInt(localStorage.setItem("coin_srdce" , coin_srdce));

coin_count.innerHTML = `peníze ${coin}`;

button_vsadit_cerna.onclick = () => {
    const pes = vsadit.value;
    var nahodne = Math.floor((Math.random() *2)+ 1);
    if(nahodne==1 & coin >=pes){
        coin -= pes;
        parseInt(localStorage.setItem("coin" , coin));
        coin_count.innerHTML = `peníze ${coin}`;

    }
    if(nahodne==2 & coin >=pes){
        coin += pes*2;
        parseInt(localStorage.setItem("coin" , coin));
        coin_count.innerHTML = `peníze ${coin}`;
    }

}

