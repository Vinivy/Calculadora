//function de concatenar os numeros
function caracter(num) {
  let numero = document.getElementById('exibir').innerHTML

  document.getElementById('exibir').innerHTML = numero + num
}

//function para apagar tudo
function clean() {
  let backall = document.getElementById('exibir').innerHTML

  document.getElementById('exibir').innerHTML = ''
}

//function de apara apenas um caracter de vez
function backone() {
  let backall = document.getElementById('exibir').innerHTML

  document.getElementById('exibir').innerHTML = backall.substring(
    0,
    backall.length - 1
  )
}

//resultado
function igual() {
  let resultado = document.getElementById('exibir').innerHTML

  if (resultado) {
    document.getElementById('exibir').innerHTML = eval(resultado)
  } else {
    document.getElementById('exibir').innerHTML = '0 Conteúdo'
  }
}
