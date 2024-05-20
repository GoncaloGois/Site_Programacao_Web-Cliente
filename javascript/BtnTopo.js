//botao para voltar ao topo da página
let botao = document.getElementById("topBtn");

window.onscroll = function(){scrollBody()};

function scrollBody(){
    if(document.documentElement.scrollTop > 300){

        botao.style.visibility = "visible"; 
    }
        
    else{
        botao.style.visibility = "hidden";
    }
}

    function irParaTopo(){
        window.scrollTo({top:0, behavior:"smooth"});
    }

    
