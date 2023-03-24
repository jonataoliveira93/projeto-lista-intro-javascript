// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
console.log(soma(5,10))
// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
console.log(imprimeMensagem())
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
let altura1 = prompt`qual a altura do retangulo?`
let largura1 = prompt`qual a largura do retangulo?`
let area = altura1 * largura1
 
 console.log(area) 

}


// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt(`qual ano nós estamos?`)
  let anoNascimento = prompt(`que ano você nasceu?`)
  let idade = anoAtual - anoNascimento
  
  console.log(idade)

 

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso/(altura*altura)
  
return imc
}
console.log(calculaIMC)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
let nome = prompt (`qual seu nome?`)
let idade = Number (prompt(`qual sua idade?`))
let email = prompt (`qual seu email?`)
  
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  
  let primeiraPergunta = prompt("qual sua primeira cor favorita?")
  let segundaPergunta = prompt("qual sua segunda cor favorita?")
  let terceiraPergunta = prompt("qual sua terceira cor favorita?")

  arrayCores = [cor1, cor2, cor3]

console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  return string.toUpperCase()

}
console.log(retornaStringEmMaiuscula)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
   

  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
 return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
array[array.length-1]



}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 const ultimo = array.splice

 return ultimo
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const troca = array.splice(array.length-1,1,array[0])[0]

array[0] = troca

return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase

  console.log(checaIgualdadeDesconsiderandoCase(`olá`,`olA`))
} 


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
