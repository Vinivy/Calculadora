//function de concatenar os numeros
function caracter(num) {
  let numero = document.getElementById('exirb').innerHTML

  document.getElementById('exirb').innerHTML = numero + num
}

//function para apagar tudo
function clean() {
  let backall = document.getElementById('exirb').innerHTML

  document.getElementById('exirb').innerHTML = ''
}

//function de apara apenas um caracter de vez
function backone() {
  let backall = document.getElementById('exirb').innerHTML

  document.getElementById('exirb').innerHTML = backall.substring(
    0,
    backall.length - 1
  )
}

//resultado
function igual() {
  let resultado = document.getElementById('exirb').innerHTML

  if (resultado) {
    document.getElementById('exirb').innerHTML = eval(resultado)
  } else {
    document.getElementById('exirb').innerHTML = '0 Conteúdo'
  }
}
