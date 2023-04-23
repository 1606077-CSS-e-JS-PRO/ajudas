

// 7, 10, undefined|false
function validacao(valorSendoValidado) {
    if(valorSendoValidado < 0)
        return "Valor negativo!"
    
    if(valorSendoValidado == "" || valorSendoValidado == 0)
        return "Não pode ser vazio ou 0"
}

module.exports = {
    validacao
}