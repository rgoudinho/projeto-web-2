var $$ = function (id) {
    return document.getElementById(id);
}

var arrayDeFrase = ['<img class="rounded-circle" src="resources/imagens/johnny-cash.jpg" alt="Generic placeholder image" width="140"height="140"> <h2>Johnny Cash</h2><p>“Você constrói sobre o fracasso. Você usa isso como um trampolim. Feche a porta no passado. Você não tenta esquecer os erros, mas não se debruça sobre isso. Você não deixa que tenha sua energia, seu tempo ou seu espaço. ”</p>', 
                    '<img class="rounded-circle" src="resources/imagens/-cobain.webp" alt="Generic placeholder image" width="140" height="140"> <h2>Kurt Cobain</h2> <p>“Bem, eu realmente aprendi algumas coisas e uma delas é que a felicidade não tem nada a ver com a aprovação das outras pessoas. O que é realmente importante é estar feliz com você mesmo, encontrar alguém que é importante para você e seguir adiante sem ligar para que os outros falam.”</p>', 
                    '<img class="rounded-circle" src="resources/imagens/chester-bennington-photo-e1500574858599.jpg" alt="Generic placeholder image"width="140" height="140"><h2>Chester Bennington</h2><p>“Algumas vezes quando estou sozinho, eu penso como um KETCHUP porquê sei como deve ser horrível ficar em uma garrafa. Quando sou um Ketchup penso em sentar sozinho o dia todo perto de uma Mostarda.”</p>', 
                    '<img class="rounded-circle" src="resources/imagens/ozzy.jpg" alt="Generic placeholder image" width="140"height="140"> <h2>Ozzy Osbourn</h2><p>“Eu sou um comerciante. Eu sou um servo, eu sou um líder. Eu sou um salvador, eu sou um pecador, eu sou um assassino. Eu vou ser o que você quer que eu seja.”</p>', 
                    '<img class="rounded-circle" src="resources/imagens/freddie-mercury.jpg" alt="Generic placeholder image" width="140"height="140"> <h2>Freddie Mercury</h2><p>“Oh, eu não fui feito para ir para o paraíso. Não, eu não quero ir pro paraíso. O inferno é muito melhor. Pense em todas as pessoas interessantes que você vai encontrar lá embaixo!”</p>',   
                    '<img class="rounded-circle" src="resources/imagens/dolores-amor-da-minha-vida.jpeg" alt="Generic placeholder image" width="140"height="140"> <h2>Dolores O\'Riordan</h2><p>“Oh minha vida está mudando todos os dias De todas as maneiras possíveis E oh meus sonhos Nunca é exatamente o que parece Nunca como parece.”</p>', 
                    '<img class="rounded-circle" src="resources/imagens/james.jpg" alt="Generic placeholder image" width="140"height="140"> <h2>James Hetfield</h2><p>“Escrever sobre merda que vem de dentro é mais dificil que falar de política, mas uma vez que sai é bem mais fácil se livrar do peso, especialmente quando você canta ao vivo.”</p>', 
                    '<img class="rounded-circle" src="resources/imagens/Roger-Waters.jpg" alt="Generic placeholder image" width="140"height="140"> <h2>Roger Waters</h2><p>“Se você não se importasse, com o que aconteceu comigo, e se eu não me importasse com você, nós iríamos fazer ziguezague em nosso caminho, através do tédio e da dor ocasionalmente espiando a chuva, desejando saber qual dos vagabundos culpar, e observando os porcos voarem”</p>',
                    '<img class="rounded-circle" src="resources/imagens/bruce-dickinson.jpg" alt="Generic placeholder image" width="140"height="140"> <h2>Bruce Dickinson</h2><p>“As bandas têm fãs, mas as gravadoras têm clientes. Se os donos das gravadoras tivessem a visão de como o digital ajudaria no relacionamento, teriam um site em que era possível baixar as músicas. Ao invés disso, eles viraram e disseram: nossos clientes são ladrões! E algumas bandas também fizeram isso.”</p>', 
                    '<img class="rounded-circle" src="resources/imagens/pitty.jpg" alt="Generic placeholder image" width="140"height="140"> <h2>Pitty</h2><p>“Sou intensa e não conheço o significado da paz. Para mim ela é um barco no meio do oceano sem vento que não vai para canto nenhum. Eu preciso que as coisas aconteçam. Ter paz deve ser muito chato.”</p>'];

let primeiraFrase
let segundaFrase
let terceiraFrase;

window.onload = function(){
    console.log(arrayDeFrase.length);
    primeiraFrase = sorteiaFrase();
    $$('frase-1').innerHTML = arrayDeFrase[primeiraFrase];
    segundaFrase = sorteiaFrase(primeiraFrase);
    $$('frase-2').innerHTML = arrayDeFrase[segundaFrase];
    terceiraFrase = sorteiaFrase(primeiraFrase, segundaFrase);
    $$('frase-3').innerHTML = arrayDeFrase[terceiraFrase];
}

$$('botao-frase-1').addEventListener("click", function() {
    primeiraFrase = sorteiaFrase(primeiraFrase, segundaFrase ,terceiraFrase);
    $$('frase-1').innerHTML = arrayDeFrase[primeiraFrase];
})

$$('botao-frase-2').onclick = function() {
    segundaFrase = sorteiaFrase(primeiraFrase, segundaFrase ,terceiraFrase);
    $$('frase-2').innerHTML = arrayDeFrase[segundaFrase];
}

function trocarImagem() {
    terceiraFrase = sorteiaFrase(primeiraFrase, segundaFrase ,terceiraFrase);
    $$('frase-3').innerHTML = arrayDeFrase[terceiraFrase];
}

function sorteiaFrase (primeiraFrase, segundaFrase, terceiraFrase){
    let numeroSelecionado;
    for(let i = 0; i<100; i++){
        numeroSelecionado = Math.floor(Math.random() * arrayDeFrase.length);
        if(numeroSelecionado != primeiraFrase && numeroSelecionado != segundaFrase && numeroSelecionado != terceiraFrase)
            return numeroSelecionado;
    }
}

$$('div-image-1').addEventListener('mouseover', function(){
    adicionaImagemNovaFreddy(2);
});
$$('div-image-1').addEventListener('mouseout', function(){
    adicionaImagemNovaFreddy(1);
});
function adicionaImagemNovaFreddy(trocaImage1){
    $$('div-image-1').innerHTML =  '<img id="image-1" class="featurette-image img-fluid mx-auto" src="resources/imagens/bohemian-Freddy---Reproduo---Youtube-'+trocaImage1+'.jpg" alt="Generic placeholder image">';
}

$$('div-image-2').onmouseover = function(){
    adicionaImagemNovaGeorge(2);
}
$$('div-image-2').addEventListener('mouseout', function(){
    adicionaImagemNovaGeorge(1);
});
function adicionaImagemNovaGeorge(trocaImage2){
    $$('div-image-2').innerHTML =  '<img id="image-2" class="featurette-image img-fluid mx-auto" src="resources/imagens/george-ezra-'+trocaImage2+'.jpg" alt="Generic placeholder image">';
}

function adicionaImagemNovaDave(trocaImage3){
    $$('div-image-3').innerHTML =  '<img id="image-3" class="featurette-image img-fluid mx-auto" src="resources/imagens/dave-'+trocaImage3+'.jpg" alt="Generic placeholder image">';
}

setTimeout(() => {
    var nota;
    nota = prompt("Olá, você poderia nos avalir? Digite uma nota entre 0 e 10");
    while(isNaN(nota) || nota<0 || nota>10)
        nota = prompt(nota+" Não é um numero valido. Por favor digite um numero entre 0 e 10!");
    if(nota > 6){
        let pausa = 0;
        let chave = setInterval(mensagem, 30000);
        let compremento = "\n\n\n Esta mensagem ira aparecer mais uma vez daqui meio minutos";
        function mensagem (){
            if(confirm(`Gostaria de receber nossas noticias mais importante logo que adicionadas? se sim click em ok ${compremento}`) || pausa == 2){
                clearInterval(chave);
            }else{
                compremento = "\n\n\nEstá mensagem não ira mais lhe atrapalhar";
                pausa++;
            }
        }
    }else
        alert("Trabalharemos duramente para melhorar nosso site"); 
}, 60000);