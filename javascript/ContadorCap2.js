const div = document.getElementById('tempo')
const h1 = document.getElementById('h1')
const elemento1 = document.createElement('div')
const elemento2 = document.createElement('div')
const elemento3 = document.createElement('div')

//Calc quantos milisegundos em minutos,horas,dias e anos
const minute = 1000 * 60 //1000 miliseg * 60 segundos = 1 min || 60000 miliseg 
const hour = minute * 60
const day = hour * 24
const year = day * 365

//Calculo de tempo entre agora e o lançamento de deltarune
const dataJogo = new Date("2021-09-17")
const dataAtual = new Date()
let deltarune = Math.round((dataAtual - dataJogo)/day)


elemento2.style.color = '#fff434'

elemento1.style.display = 'inline'
elemento2.style.display = 'inline'
elemento3.style.display = 'inline'


//alterar texto de elementos
elemento1.textContent = "Já passaram "
elemento2.textContent = deltarune
elemento3.textContent = " dias desde o lançamento do segundo capítulo!"

//colocar elementos dentro de div
div.appendChild(elemento1)
div.appendChild(elemento2)
div.appendChild(elemento3)

