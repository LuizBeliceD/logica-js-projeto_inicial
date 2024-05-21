
alert('Bem vindo ao jogo do número secreto!');
let numeroMaximo = 500
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
let chute;
let tentativas = 1;
console.log(numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 0 e ${numeroMaximo}`);
 
    if (chute == null) {     
        alert('Cancelado');
        break;
    }

    if (chute == Number(chute) &&  chute <= numeroMaximo){
        if (chute == numeroSecreto) {
            let palavraChance = tentativas > 1 ? 'chances' : 'chance';
            let mensagemAcerto = `Parabéns, você acertou com ${tentativas} ${palavraChance}, o número secreto é ${numeroSecreto}`

            alert(mensagemAcerto);
            break;
        }
        else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}, tente novamente`);
        
            } else {
                alert(`O número secreto é maior que ${chute}, tente novamente`);

            }
            tentativas++
        }
    }else{
        alert(`Entrada não é um número ou é maior que ${numeroMaximo}, tente novamente`)
    }
}



