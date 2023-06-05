const usuarioLogin = document.getElementById("usuario-login");
const senhaLogin = document.getElementById("senha-login");

const btnLogin = document.getElementById("btnlogin")

/*Recuperando valores do local Storge */
function recuperandoLocalStorge(){
    
    const colecao = window.localStorage.getItem("objeto")
    
    return colecao
}

/*Transformando a coleção em objeto */
function transformandoColecaoObjeto(colecao){

    const colecaoObj = JSON.parse(colecao)

    return colecaoObj
}

/*Verificando Dados da area de cadastro e comparando com os valores da area de login */
function verificarDados(){

    const objeto = transformandoColecaoObjeto(recuperandoLocalStorge());
    
    for(let i=0; i<objeto.length; i++) {

        if (usuarioLogin.value === objeto[i].nome && senhaLogin.value ===  objeto[i].senha){
            if (usuarioLogin.value == objeto[i].nome && senhaLogin.value ==  objeto[i].senha){

                window.location.href = "../templates/principal.html"

                break;
            }
        }
        else {
            
            document.querySelector(".div-mensagem").classList.add("div-mensagem-negada")
        }
    }

    
}

btnLogin.addEventListener("click", () => { 
    verificarDados()
})

