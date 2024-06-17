///let titulo = document.querySelector('h1')
//titulo.innerHTML= 'senha do banco';

//let paragrafo = document.querySelector ('p')
//paragrafo.innerHTML = 'digite sua senha';

// function exibirprompt(){
   // let nomedacidade = prompt('fale o nome de uma cidade do brasil!!')
   // alert (`Estive em ${nomedacidade} e lembrei de você.`)
 // };

// function somandoDoisNumeros() {
  //  let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
  //  let segundoNumero = parseInt(prompt('Digite o segundo número'));
  //  let resultado = primeiroNumero + segundoNumero;
   // alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
//};



// a partir  da aqui e da aula!!!

let listaDeNumerosSorteados = [];
let numeroLimite = 70;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
 
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;

}
 
  function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do numero secreto!!');
    exibirTextoNaTela('p', 'escolha um numero de 1 a 100!!');

  }

   exibirMensagemInicial()
  
function verificarChute() {
  let chute = document.querySelector('input').value;
 
   if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'acertou!!');
    let palavrasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `voce descobriu o numeroSecreto!! ${tentativas} ${palavrasTentativas}`;
    exibirTextoNaTela('p', mensagemTentativas);
   }
   else { 
    if (chute > numeroSecreto) {
    exibirTextoNaTela('p', 'numeroSecreto e menor');
    exibirTextoNaTela('h1', 'vc errou:(');
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
     exibirTextoNaTela('p', 'numeroSecreto e maior');
    }
}
 tentativas++;
}
  function gerarNumeroSecreto() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
     listaDeNumerosSorteados = [];

   }
  
   if (quantidadeDeElementosNaLista == numeroEscolhido) {
    listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroSecreto();
   } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;

   }
 
 } 
   

  function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
  }


   function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.querySelector('reiniciar').setAttribute('disabled', true);
   }
 

  
    
    










  //a partir da qui e atividade!!

 // function exibirTextoNaTela(tag, texto) {
  //  let campo = document.querySelector(tag);
   // campo.innerHTML = texto;
  
 // }
 // exibirTextoNaTela('h1', 'jogo do numero secreto!!');  
  //exibirTextoNaTela('p', 'escolha um numero de 1 a 10!!');

  //  let numeroSecreto = calcularDobro();

   // function calcularDobro(numero) {
   //   return numero * 2;
   // }

   // function aparecerTextoNoConsole()    {     
  //console.log ('ola, mundo');

   // }
  //  function verificarChute(chute) {
   // console.log(chute == numeroSecreto);

    //}
     
    
    //dever que eu copiei

    //function calculaIMC(altura, peso){

      //let imc = peso / (alturaMetros * alturaMetros);
    //}


    //function calcularFatorial(numero) {
      //if (numero === 0 || numero === 1) {
        //return 1;
      //}
    
      //let fatorial = 1;
      //for (let i = 2; i <= numero; i++) {
      //  fatorial *= i;
     // }
    
     // return fatorial;
   // }
    
    // Exemplo de uso
    //let numero = 5;
    //let resultado = calcularFatorial(numero);
    //console.log(`O fatorial de ${numero} é ${resultado}`);


    //function converterDolarParaReal(valorEmDolar) {
      //let cotacaoDolar = 4.80;
      //let valorEmReais = valorEmDolar * cotacaoDolar;
     // return valorEmReais.toFixed(2);
   // }
    
    // Exemplo de uso
    //let valorEmDolar = 50;
    //let valorEmReais = converterDolarParaReal(valorEmDolar);
    //console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);



    //function calcularAreaPerimetroSalaRetangular(altura, largura) {
      //let area = altura * largura;
      //let perimetro = 2 * (altura + largura);
      
      //console.log(`Área da sala: ${area} metros quadrados`);
      //console.log(`Perímetro da sala: ${perimetro} metros`);
    //}
    
    // Exemplo de uso
    //let altura = 3; // em metros
    //let largura = 5; // em metros
    //calcularAreaPerimetroSalaRetangular(altura, largura);


    //function calcularAreaPerimetroSalaCircular(raio) {
      //let area = Math.PI * raio * raio;
      //let perimetro = 2 * Math.PI * raio;
      
      //console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
      //console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
    //}
    
    // Exemplo de uso
    //let raio = 4; // em metros
    //calcularAreaPerimetroSalaCircular(raio);


    //function mostrarTabuada(numero) {
      //for (let i = 1; i <= 10; i++) {
        //let resultado = numero * i;
        //console.log(`${numero} x ${i} = ${resultado}`);
      //}
    //}
    
    // Exemplo de uso
    //let numero = 7;
    //mostrarTabuada(numero);


    //a partir da qui e atividade
    
    //let listaGenerica = [];


  //let linguagensDeProgramacao = ["JavaScript","C","C++","Kotlin","Python"];

  //linguagensDeProgramacao.push( "Java", "Ruby","GoLang")
    // console.log(linguagensDeProgramacao);

    
//let nomeDePessoas = ["Ana", "João", "Maria"];

//console.log(nomeDePessoas[0]);