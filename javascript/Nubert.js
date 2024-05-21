
//array com possiveis falas
var falas = [
    "Everybody loves me.",
    "Nubert's movin' up in the world.",
    "Looks like you got past Nubert's forcefield.",
    "That's why I live in the trash."   
  ];

  //escolher fala aleatoria, e tornar o balao de fala tal como a fala visiveis
  function fala() 
  {
    var f = falas[ Math.floor( Math.random() * falas.length ) ]

    document.getElementById("balao").style.visibility= "visible"
    document.getElementById("fala").innerHTML = f  
  }   
    
