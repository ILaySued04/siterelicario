let btnlogin = document.getElementsByClassName("btnlogin");

let usuarioLogin = document.getElementById("usuario-login");
let senhaLogin = document.getElementById("senha-login");

let listalogin = {}


function pegandoValoresLogin(usuarioLogin,senhaLogin){

   let objlogin = {
        usuarioLogin : usuarioLogin,
        senhaLogin : senhaLogin
    }

    return objlogin

}

function objetoNaLista(){
    listalogin.push(pegandoValoresLogin(usuarioLogin.value, senhaLogin.value))
}

console.log(objetoNaLista())