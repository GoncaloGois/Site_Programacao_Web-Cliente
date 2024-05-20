
//array com possiveis falas
var falas = [
    "It's kill or be killed!",
    "Die.",
    "Howdy! I'm FLOWEY. FLOWEY the FLOWER!",
    "Don't you have anything better to do?"   
  ];

  //escolher fala aleatoria, e tornar o balao de fala tal como a fala visiveis
  function fala() 
  {
    var f = falas[ Math.floor( Math.random() * falas.length ) ]

    document.getElementById("balao").style.visibility= "visible"
    document.getElementById("fala").innerHTML = f  
  }   
    
