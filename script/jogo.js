let height = 0 // declarado no escopo global
let width = 0
let vidas = 1
let tempo = 30

let nivel = window.location.search
nivel = nivel.replace('?', '')

let criaMosquitoTempo = 1500

    if (nivel === 'normal'){
        criaMosquitoTempo = 1500
    } else if(nivel === 'dificil'){
        criaMosquitoTempo = 1000
    } else if(nivel === 'chucknorris'){
        criaMosquitoTempo = 750
    }

let cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href='vitoria.html'
    }else {
    document.getElementById('tempo-cronometro').innerHTML = tempo
    }
}, 1000)

function ajustaTamanhoPalcoJogo(){ // chamando função para ficar responsivo
    height = window.innerHeight // se utilizar o LET, ele cria uma nova variável
    width = window.innerWidth
    console.log(width, height)
}

ajustaTamanhoPalcoJogo() // torna tudo dinâmico 

function posicaoRandomica(){ // necessário criar essa função para chamar ela dps do body ter sido criado
        //remover mosquito anterior caso exista
        if (document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove()

            if(vidas > 3){
                window.location.href='gameOver.html'
            }else{
                document.getElementById('v' + vidas).src= 'imagens/coracao_vazio.png'
                vidas++ // ao passar, vidas vai valer 2, concatenando vai ficar v2
            }
        } // isso remove antes de criar o outro mosquito
        
        let posicaoX = Math.floor(Math.random() * width) - 100// para deixar dentro da tela dinâmica, multiplique pela TELA ( WIDTH E HEIGHT)
        let posicaoy = Math.floor(Math.random() * height) - 100 // math.floor tira as casas decimais
        console.log(posicaoX,posicaoy) 

        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoy = posicaoy < 0 ? 0 : posicaoy

        //criar o elemento html
        let mosquito = document.createElement('img')
        mosquito.src = 'imagens/mosca.png' // src disponivel para imagens, de forma programática, insere a imagem como sefosse pelo html mesmo
        mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio() // atribui a classe do mosquito
        mosquito.style.left = `${posicaoX}px` // aqui muda o direcionamento horizontal do mosquito em pixel de acordo com o valor random
        mosquito.style.top = `${posicaoy}px` // aqui muda o direcionamento vertical do mosquito em pixel de acordo com o valor random
        mosquito.style.position = 'absolute' // aqui muda a posição do objeto
        mosquito.id = 'mosquito'
        mosquito.onclick = function(){
            this.remove()
        } 

        document.body.appendChild(mosquito)
        
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random()*3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'
            break
        case 1:
            return 'mosquito2'
            break
        case 2:
            return 'mosquito3'
            break
    }
}

function ladoAleatorio(){
    var lado = Math.floor(Math.random()*2)

    switch(lado) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}