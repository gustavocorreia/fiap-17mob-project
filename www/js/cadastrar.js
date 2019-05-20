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

    if(txtEmail.value == ''){
        txtEmail.focus();
        return;
    }

    if(txtSenha.value == ''){
        txtSenha.focus();
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

});
