(function () {
    var $$ = function(id){
        return document.getElementById(id);
    }

    var usuario = {
        nome: "",
        email: "",
        senha: "",
        lembrarSenha: false,
        receberNotificacoes: false
    }

    $$('formulario').onsubmit = function(){
        if(velificaSeUsuarioEstaCadastrado()){
            location.href = "index.html";
        }else{
            alert("Senha ou usuario inexistentes");
        }
        return false;
    }

    var velificaSeUsuarioEstaCadastrado = function(){ 
        let email = getEmail();  
        let senha = getSenha();  
        if(localStorage.getItem(""+email+"") != null){
            var possivelUsuario = JSON.parse(localStorage.getItem(""+email+""));
            if(senha == possivelUsuario.senha){
                var usuarioAtivo = Object.create(usuario);
                usuarioAtivo.nome = possivelUsuario.nome;
                usuarioAtivo.email = possivelUsuario.email;
                usuarioAtivo.senha = possivelUsuario.senha;

                +function (){
                    let elems = document.getElementsByName('options-group');
                    for (i in elems) {
                        if (elems[i].checked) {
                            return true;
                        }
                    }
                    alert("É recomendado q selecione uma das opções!");
                }();

                return true;
            }
        }
        return false;
    }

    function getSenha() {
        return document.querySelector("#inputSenha").value;
    }

    function getEmail(){
        return $$('inputEmail').value;
    }

    $$('cadastrese').onclick = function(){
        location.href = "cadastrar.html";
    }

    var $$$ = document.getElementsByTagName("input");

    document.querySelector("#inputEmail").onfocus  = function(){
        $$$[0].style.backgroundColor = "#1C1C1C";
        $$$[0].style.color = "#6001F9";
    }
    
    document.querySelector("#inputEmail").onblur  = function(){
        $$$[0].style.background = "transparent";
        $$$[0].style.color = "#6001F9";
    }
    
    document.querySelector("#inputSenha").onfocus  = function(){
        $$$[1].style.backgroundColor = "#1C1C1C";
        $$$[1].style.color = "#6001F9";
    }
    
    document.querySelector("#inputSenha").onblur  = function(){
        $$$[1].style.background = "transparent";
        $$$[1].style.color = "#6001F9";
    }

    // $$('inputEmail').addEventListener("keypress", function(e){
    //     for (let i = 32; i<255; i++){
    //         if(i == e.which){
    //             alert("A tecla '"+e.key+"' é invalida");
    //             e.preventDefault();
    //             break;
    //         }
    //         switch(i){
    //             case 47 :
    //                 i = 57;
    //                 break;
    //             case 63 :
    //                 i = 90;
    //                 break;
    //             case  96:
    //                 i = 122;
    //                 break;
    //             case 127 :
    //                 i = 165;
    //                 break;
    //             case 180 :
    //                 i = 183;
    //                 break;
    //             case  197:
    //                 i = 199;
    //                 break;
    //             case 209:
    //                 i = 216;
    //                 break
    //             case 221:
    //                 i = 222;
    //                 break;
    //             case 223:
    //                 i = 229;
    //                 break;
    //             case 232:
    //                 i = 237;
    //                 break; 
    //         }
    //     }
    // });
}());

