const { validacao } = require("./validacao")

funcaoPrincipal()

function funcaoPrincipal(){
    const valor = 10

    let listaErros = validarValor(valor)

    if(listaErros.length > 0)
        mostrarErrosNaTela(listaErros)
}