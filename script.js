function szamol () {
let F =document.getElementById('fogyasztas');
let V =document.getElementById('tank');
let Ut =document.getElementById('ut');

let megteheto = V * 100/ F ;

if (megteheto<Ut){
    document.getElementById('megoldas').innerHTML = "az út során tankolni kell";

    document.getElementById('megoldás').innerHTML = "Az út megtehető tankolás nélkül"
}
}
