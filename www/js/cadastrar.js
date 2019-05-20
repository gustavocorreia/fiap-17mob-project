import { S_IFMT } from "constants";

var btnEntrar = document.getElementById('btnEntrar');

btnEntrar.addEventListener('click', function(){
    var txtNome = document.getElementById('txtNome');
    var txtEmail = document.getElementById('txtEmail');
    var txtCPF = document.getElementById('txtCPF');
    var txtDataNascimento = document.getElementById('txtDataNascimento');
    var txtTelefone = document.getElementById('txtTelefone');
    var txtSenha = document.getElementById('txtSenha');
    var txtConfirmeSenha = document.getElementById('txtConfirmeSenha');



    if(txtNome.value == ''){
        txtNome.focus();
        return;
    }

    if(txtEmail.value == ''){
        txtEmail.focus();
        return;
    }


    if(txtCPF.value == ''){
        txtCPF.focus();
        return;
    }

    if(txtSenha.value == ''){
        txtSenha.focus();
        return;
    }

    if(txtDataNascimento.value == ''){
        txtDataNascimento.focus();
        return;
    }

    if(txtTelefone.focus() == ''){
        txtTelefone.focus();
        return;
    
    }

    if(txtConfirmeSenha.value == ''){
        txtConfirmeSenha.focus();
        return;
    }

    if(txtSenha.value != txtConfirmeSenha.value){
        txtSenha.focus();
        return;
    }

    firebase.auth()
            .createUserWithEmailAndPassword(txtEmail.value, txtSenha)
            .then(function(usuario){

            });

});
