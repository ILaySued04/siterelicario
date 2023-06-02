const btnCadastrar =  document.getElementById('btnCadastrar');

let listaCadastros = [];

let usuario = document.getElementById('usuario-cadastro');
let email = document.getElementById('email-cadastro');
let senha = document.getElementById('senha-cadastro');

/*Pegando valores e retornando em objeto */
function pegandoValor(usuario, email, senha) {
    let obj = {
        nome:usuario,
        email:email,
        senha:senha,
    }
    return obj;
}

/*Adicionando objetos na lista */
function adicinarObjetoLista(){
    listaCadastros.push(pegandoValor(usuario.value, email.value, senha.value))
}

/*Transformando a lista em string */
function transformandoListaString(lista){

    const listaTransformada = JSON.stringify(lista)

    return listaTransformada
}

/*Inserindo a lista no local storage */
function inserindoLocalStorage(colecao){
    /*Adicionando local storage */
    window.localStorage.setItem("objeto",colecao)
}

btnCadastrar.addEventListener('click', () => {
    adicinarObjetoLista()
    const lista = transformandoListaString(listaCadastros)
    inserindoLocalStorage(lista)
});

