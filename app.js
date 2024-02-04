let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)
let tentativas = 1;

// Exibe os textos na tela e tem o responsive voice para falar os texto
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2})
}

exibirTextoNaTela('h1', 'MD Game');
exibirTextoNaTela('p', 'Acerte o número de 1 a 100 com dez tentativas');

// Enviar número chute com enter
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      verificarChute()
    }
  });

// Verificar se o número chute é igual ao número secreto
function verificarChute() {
    let numeroChute = document.querySelector('input').value

    if (numeroChute != numeroSecreto) 
    { document.getElementById('robos').src="./img/roboerrou.png"
        limparCampo()
        exibirTextoNaTela('h1', 'Errou!')
        
     if (numeroChute > numeroSecreto) 
    {exibirTextoNaTela('p', 'Tente um número menor')}
     else {exibirTextoNaTela('p', 'Tente um número maior')}
}
    else 
    { document.getElementById('robos').src =" ./img/roboacertou.png";
        let palavraTentativa = tentativas != 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = 'Com ' + tentativas + ' ' + palavraTentativa + ' :)'
        document.getElementById('reiniciar').removeAttribute('disabled')
        exibirTextoNaTela('h1', 'Acertou! Você é incrível :)')
        exibirTextoNaTela('p', mensagemTentativa)
}
    tentativas++
// tentativas máximas
    if (tentativas >= 10) {
        document.getElementById('robos').src ="./img/robogo.png";
        exibirTextoNaTela('h1', 'Game over :(');
        exibirTextoNaTela('p', 'Tente novamente, esgotou suas 10 chances');
    
    // Desabilita o botão de chute
    document.getElementById('botaochute').setAttribute('disabled', true);
    
    // Ativa o botão de reiniciar
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('continput').disabled = true;
    }
}


// Gerar o número secreto
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

// Limpar o campo quando o usuário errar o número
function limparCampo() {
    numeroChute = document.querySelector('input');
    numeroChute.value = '';
}

// Reiniciar o jogo
function reiniciarJogo() {
    location.reload()
}

