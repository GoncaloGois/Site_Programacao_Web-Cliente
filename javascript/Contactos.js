
//imagens que aparecem na pag contactos
var imagens = [
    "imagens/contactos/dogStand.png",
    "imagens/contactos/dogSleep.png",
    "imagens/contactos/dogSurprise.png"
    
  ];



var imagem = document.getElementById("img_contacto")



imagem = imagem_rand()
//substituir a src da imagem no html por uma imagem aleatoria do array imagens 
 function imagem_rand(){
   imagem.src = imagens[Math.floor( Math.random() * imagens.length)]
  }




