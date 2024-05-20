
//info de personagens
var info = [
  "teste0",
  "Flowey é",
  "test2",
  "teste3",
  "tes4.",
  "test555",
  "test6",
  "test7",
  "test8"
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
  
    
