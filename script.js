function Calcular(){

    let iCorrente = document.getElementById("corrente").value;
    let qCarga = document.getElementById("deltaCarga").value;
    let tempo = document.getElementById("deltaTempo").value;

    let txt = document.getElementById("txtResultado");

    //Novo código utilizando function

    let func = function (i=0,q=0,t=0){
        if(i && q && t==0){return q/i + " Segundos (S)"}

        else if (i && q==0 && t){return t*i + " Coulombs (C)"} 

        else if (i==0 && q && t){return q/t + " Ampéres (A)"}

        else if (i==0 && q==0 && t==0){return "Não á números para efetuar o calculo!!!"}
        
        else if (i && q && t){return "Não é possivel efetuar o calculo <br/> com todos os campos preenchidos!!!"}
        }

    txt.innerHTML = `${func(iCorrente,qCarga,tempo)}`;

    //Primeiro código
    /*
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
    */
}