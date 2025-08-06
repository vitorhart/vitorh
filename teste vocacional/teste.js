var qntaA=0;
var qntaB=0;
var qntaC=0;
var qntaD=0;
var qntaE=0;

function contarOpcao(select) {
    if (select.value == 'A') {
        qntaA++;
    } 
    if (select.value == 'B') {
        qntaB++;
    } 
    if (select.value == 'C') {
        qntaC++;
    } 
    if (select.value == 'D') {
        qntaD++;
    } 
    if (select.value == 'E') {
        qntaE++;
    } 
    
}

function lerselects(){
    const select= document.querySelectorAll("select");
    select.forEach(contarOpcao);
    console.log('quantidade de a: ' , qntaA)
    console.log('quantidade de b: ' , qntaB)
    console.log('quantidade de c: ' , qntaC)
    console.log('quantidade de d: ' , qntaD)
    console.log('quantidade de e: ' , qntaE)


    const skillBar = document.getElementById('exatas');

    skillBar.style.width = qntaA*10+'%';

    skillBar.textContent = qntaA*10+'%';

    skillBar.innerHTML = qntaA+'%';


    const skillBar2 = document.getElementById('artes');

    skillBar2.style.width = qntaB*10+'%';

    skillBar2.textContent = qntaB*10+'%';

    skillBar2.innerHTML = qntaB+'%';


    const skillBar3 = document.getElementById('humanas');

    skillBar3.style.width = qntaC*10+'%';

    skillBar3.textContent = qntaC*10+'%';

    skillBar3.innerHTML = qntaC+'%';


    const skillBar4 = document.getElementById('ciencias');

    skillBar4.style.width = qntaD*10+'%';

    skillBar4.textContent = qntaD*10+'%';

    skillBar4.innerHTML = qntaD+'%';

    const skillBar5 = document.getElementById('negocios');

    skillBar5.style.width = qntaE*10+'%';

    skillBar5.textContent = qntaE*10+'%';

    skillBar5.innerHTML = qntaE+'%';





}
