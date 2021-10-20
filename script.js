function Calcular(){
    let i = document.getElementById("corrente").value;
    let Q = document.getElementById("deltaCarga").value;
    let T = document.getElementById("deltaTempo").value;

    let txt = document.getElementById("txtResultado");

    if (i,T,!Q){
        let resultado = T * i;
        txt.innerHTML = `Carga Elétrica = ${resultado} Coulombs (C)`;
    } 
    else if (Q,T && !i){
        let resultado = Q / T;
        txt.innerHTML = `Corrente Elétrica = ${resultado} Ampéres (A)`;
    }
    else if (i,Q && !T){
        let resultado = Q/i;
        txt.innerHTML = `Intervalo de tempo = ${resultado} Segundos (S)`;
    }
    if (!i && !Q && !T){
        txt.innerHTML = "Preencha ao menos dois campos!!!"
    }
    else if (i && Q && T){
        txt.innerHTML = "Não é possivel calcular <br/> com todos os campos preenchidos!!!"
    }
}