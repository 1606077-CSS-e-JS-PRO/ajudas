

function validarValor(valor){     
    let mensagensDeErro = []  

    let erroVazio = vazio(valor)
    if(erroVazio)
        mensagensDeErro.push(erroVazio)

    let erroNegativo = negativo(valor)
    if(erroNegativo)
        mensagensDeErro.push(erroNegativo)

    return mensagensDeErro
}


function vazio(valor) {
    return "Valor vazio"
}


function negativo(valor) {
    return "Valor negativo"
}