function entrar() {
    
    //Como estivesse no BD
    const senha = "1234"
    const usuario = "joran@gmail.com"

    var senhaDigitada = document.getElementById("pass")
    var usuarioDigitado = document.getElementById("user")

    if (senhaDigitada.value == senha && usuarioDigitado.value == usuario) {
        alert("Bem vindo !")
        window.location.href = "profile.html"
    } else {
        alert("Senha Incorreta!")
    }
}
 
const card = document.getElementsByClassName("card")

card[0].addEventListener("click",()=>{
    window.location.href = "home.html"
})