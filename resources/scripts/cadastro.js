var $$ = function(id) {
    return document.getElementById(id);
};

var Usuario = function(nomeDeUsuario, email, senha) {
    this.nomeDeUsuario = nomeDeUsuario;
    this.email = email;
    this.senha = senha;
};

function cadastraUsuario(usuario, email, senha){
    let user = new Usuario(usuario, email, senha);

    if(adicionaNoWebStorage(user, email)){
        alert("Seu cadastro foi realizado com sucesso "+ usuario)
        location.href = "log-in.html";
    }else 
        alert("Ops algo de errado aconteceu! tente novamente.");
    return false;
}

var adicionaNoWebStorage = function(user, email){
    if(typeof(Storage) != null){
        if(localStorage.getItem(""+email+"")==null) {
            localStorage.setItem(""+email+"", JSON.stringify(user));
            return true;
        }
        else {  
            alert("Já existe um usuario com este email!");
            return false;
        }
    }
    return false;
}

var $$$ = document.getElementsByTagName("input");

function nomeFocus(){
    $$$[0].style.backgroundColor = "#1C1C1C";
    $$$[0].style.color = "#6001F9";
}

function nomeBlur(){
    $$$[0].style.background = "transparent";
    $$$[0].style.color = "#6001F9";
}

function emailFocus(){
    $$$[1].style.backgroundColor = "#1C1C1C";
    $$$[1].style.color = "#6001F9";
}

function emailBlur(){
    $$$[1].style.background = "transparent";
    $$$[1].style.color = "#6001F9";
}

function senhaFocus(){
    $$$[2].style.backgroundColor = "#1C1C1C";
    $$$[2].style.color = "#6001F9";
}

function senhaBlur(){
    $$$[2].style.background = "transparent";
    $$$[2].style.color = "#6001F9";
}

$$('inputUsuario').addEventListener("keypress", function(e){
    for (let i = 32; i<255; i++){
        if(i == e.which){
            alert("A tecla '"+e.key+"' é invalida");
            e.preventDefault();
            break;
        }
        switch(i){
            case 47 :
                i = 57;
                break;
            case 63 :
                i = 90;
                break;
            case  96:
                i = 122;
                break;
            case 127 :
                i = 165;
                break;
            case 180 :
                i = 183;
                break;
            case  197:
                i = 199;
                break;
            case 209:
                i = 216;
                break
            case 221:
                i = 222;
                break;
            case 223:
                i = 229;
                break;
            case 232:
                i = 237;
                break; 
        }
    }
});

$$('inputEmail').addEventListener("keypress", function(e){
    for (let i = 32; i<255; i++){
        if(i == e.which){
            alert("A tecla '"+e.key+"' é invalida");
            e.preventDefault();
            break;
        }
        switch(i){
            case 47 :
                i = 57;
                break;
            case 63 :
                i = 90;
                break;
            case  96:
                i = 122;
                break;
            case 127 :
                i = 165;
                break;
            case 180 :
                i = 183;
                break;
            case  197:
                i = 199;
                break;
            case 209:
                i = 216;
                break
            case 221:
                i = 222;
                break;
            case 223:
                i = 229;
                break;
            case 232:
                i = 237;
                break; 
        }
    }
});