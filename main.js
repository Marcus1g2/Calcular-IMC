const formjs = document.querySelector('#formHtml')

formjs.addEventListener('submit', function (pegar) {
    pegar.preventDefault()
    const pegarPeso = pegar.target.querySelector('#pesoHtml') //target= Mostra acontecimentos tipo click do mouse
    //pesoHtml=pega o peso digitado no html
    const pegarAltura = pegar.target.querySelector('#alturaHtml') //target= Mostra acontecimentos tipo click do mouse
    //alturaHtml=pegar altura do html

    const peso = Number(pegarPeso.value) //Number(pegarPeso.value)=converter para numero
    const altura = Number(pegarAltura.value)

    if (!peso) { //!peso=diferente de peso
        msg('Peso invalido', false) //msgFun=mostra menssagem peso invalido
        return //para aqui
    }
    if (!altura) {
        msg('Altura invalida', false)
        return   //ou aqui
    }

    const vaCalcularImc = calculoImc(peso, altura) //criando variavel que recebe uma função com valores de pess é altura é essa função calcula imc
    const vaNivelImc = nivelImc(vaCalcularImc) //recebe o calculo de imc é verifica em que nivel de imc voce esta


    msg(` Seu IMC é ${vaCalcularImc} ${vaNivelImc} . `, true) //


})
//altera a variavel div=resultado pelo id que fez a alteração 
//function=função  / msgJs=paramentros 
function msg(msg, evalido) { //msg=criando função menssagem / com paramentro=msg

    const resultadoFun = document.querySelector('#resultadoHtml') // #=id / .=classe
    resultadoFun.innerHTML = ' '  //innerHTML=altera no html 

    const pFun = document.createElement('p') //createElement('p')=criar paragrafo
    pFun.innerHTML = `<p>${msg}</p>` //Vai mostrar essa msg no msgFun oque digitar la 
    resultadoFun.appendChild(pFun)            //appendChild= inseri um elemento

    if(evalido){
        pFun.classList.add('classe1') //criei classe paragrafo que posso fazer alterações visuais nela     
    }
    else{
        pFun.classList.add('classe2')
    }
}

function calculoImc(peso, altura) {
    const calculo = peso / altura ** 2 /* **2=elevado a 2 */
    return calculo.toFixed(2) //colocar so duas casa decimais 
}

function nivelImc(imc) {

    /*vetor poderia fazer sem vetor tambem []*/
    const nivel = ['Obesidade mórbida (Grau 3)', 'Obesidade severa (Grau 2)', 'Obesidade (Grau 1)', 'Sobre peso', 'Peso normal', 'Peso baixo']

    if (imc >= 40.0) { return nivel[0] } // se colocasse '' dps do retorn faria mesma coisa
    if (imc >= 35 && imc <= 39.9) { return nivel[1] }
    if (imc >= 30.0 && imc <= 34.9) { return nivel[2] }
    if (imc >= 25.0 && imc <= 29.9) { return nivel[3] }
    if (imc >= 18.5 && imc <= 24.9) { return nivel[4] }
    if (imc < 18.5) { return nivel[5] }
}




