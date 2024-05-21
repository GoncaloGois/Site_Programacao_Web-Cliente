
//info de personagens
var info = [
  "Kris é um 'Lightner' humano e o protagonista principal de Deltarune. Ele é presumivelmente o humano Herói da Luz na Profecia. Numa 'Dark World' ele é o lider da equipa. Kris é controlado pelo jogador na maior parte do jogo. As poucas exceções são as cutscenes ou quando arrancam a alma do seu corpo.",
  "Susie é uma 'Lightner' e uma dos deuteragonistas do jogo. Ela é presumivelmente o monstro Herói da Luz na Profecia.",
  "Ralsei é um 'Darkner' e um dos deuteragonistas do jogo. Ele entitula-se o Príncipe da Escuridão mencionado na Profecia.",
  "Lancer é uma criança 'Darkner' do Reino das Cartas. No primeiro capítulo, inicialmente, ele serve como antagonista secundário, mas com o tempo torna-se amigo da equipa e junta-se a eles.",
  "Noelle é uma 'Lightner' colega, vizinha e amiga de infância de Kris. Ela não tem um grande papel no primeiro capítulo. No entanto, torna-se um personagem importante no segundo capítulo quando se junta temporariamente à equipa."
  ];
var btPrev = document.getElementById('btPrev')
var btProx = document.getElementById('btProx')

//default vai ser array 0
document.getElementById("info").innerHTML = info[0]

var i = 0
var a = 4 //nº máximo a contar com o 0
  //seta para a direita
  btProx.onclick = function numPos(){
    
    //se i < valor maximo = i+1
    if (i < a){
      i+=1
    }
    else if (i>=a){//se i for maior/igual ao maximo volta ao 0
      i=0
    }

    //texto desaparece
    document.getElementById("info").innerHTML = ""
    //desativa seta (para não poder carregar rápido demais antes da animação da imagem)
    btProx.setAttribute("disabled","")
    //espera um determinado tempo e altera o texto para a respetiva fala no array
    setTimeout(() => {
      document.getElementById("info").innerHTML = info[i] 
    },400)
    //espera um determinado tempo e volta a ativar o botão
    setTimeout(() => {
      btProx.removeAttribute("disabled")
    },800)
  }

  //seta para a esquerda
  btPrev.onclick = function numNeg(){
    //se i > valor minimo = i-1
    if (i > 0){
      i-=1
    }
    else if (i<= 0){//se i for menor/igual ao minimo volta ao máximo
      i=a
    }

    document.getElementById("info").innerHTML = ""

    btPrev.setAttribute("disabled","")

    setTimeout(() => {
      document.getElementById("info").innerHTML = info[i]
    },400)
    
    setTimeout(() => {
      btPrev.removeAttribute("disabled")
    },800)
  }
  
    
