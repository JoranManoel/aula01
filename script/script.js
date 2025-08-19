function entrar(){
    var senha = "joransilva"
    var senhaDigitada = document.getElementById("pass")

    if(senhaDigitada.value == senha){
        alert("Bem vindo !")
    }else{
        alert("Senha Incorreta!")
    }

}