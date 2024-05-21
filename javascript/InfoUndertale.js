
//info de personagens
var info = [
  "Frisk é o personagem jogável, protagonista principal e o oitavo humano em Undertale. Depois de cair no 'Underground', aventura-se para tentar voltar à superficie.",
  "Flowey é um dos primeiros personagens mais importantes que o protagonista encontra em Undertale. Flowey serve como antagonista para a rota neutra e pacifista e pode ser considerado deuteragonista na rota genocida.",
  "Toriel é a segunda personagem principal que o protagonista conhece em Undertale. Ela salva o protagonista de Flowey guia-o pelas Ruínas.",
  "Sans é o irmão mais velho de Papyrus. Ele aparece na Floresta de Snowdin após o protagonista sair das Ruínas.",
  "Papyrus é o irmão mais novo de Sans. Ele quer se tornar um Guarda Real para ganhar fama e fazer amigos.",
  "Undyne lidera os Guardas Reais, que protegem Asgore e patrulham o 'Underground' para encontrar humanos.",
  "Mettaton é um robô com uma alma, cujo o corpo foi construído por Alphys. É a única estrela de televisão do 'Underground'.",
  "Alphys é a Cientista Real, posição dada por Asgore após o antecessor dela ter desaparecido.",
  "Asgore é o governante do 'Underground'. Ele serve de antagonista principal que pretende usar 7 almas de humanos para quebrar a barreira que prende os monstros para poderem voltar todos à superficie. No entanto, ele não é malvado nem malicioso."
  ];
var btPrev = document.getElementById('btPrev')
var btProx = document.getElementById('btProx')

//default vai ser array 0
document.getElementById("info").innerHTML = info[0]

var i = 0
var a = 8 //nº máximo a contar com o 0
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
  
    
