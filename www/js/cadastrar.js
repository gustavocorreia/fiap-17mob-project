import { S_IFMT } from "constants";

var btnEntrar = document.getElementById('btnEntrar');
var btnTirarFoto = document.getElementById('btnTirarFoto');

window.onload(function(){
    var user = firebase.auth().currentUser;

    if(user){

    }
});

btnTirarFoto.addEventListener('click', function(){
    navigator.camera.getPicture(onSuccess, onError, {  
        quality: 50, 
        destinationType: Camera.DestinationType.DATA_URL 
    });

    function onSuccess(dadosImagem){
        var imgFotoPerfil = document.getElementById('imgFotoPerfil');
        imgFotoPerfil.src = `data:image/jpeg;base64,${dadosImagem}`; 
    }

    function onError(message){
        alert(`Erro: ${message}`);
    }
});

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
        alert("Senhas divergentes!");
        txtSenha.focus();
        return;
    }

    firebase.auth()
            .createUserWithEmailAndPassword(txtEmail.value, txtSenha)
            .then(function(user){
                var usuario = {
                    cpf: txtCPF.value,
                    data_de_nascimento: txtDataNascimento.value,
                    email_altenativo: '',
                    nome: txtNome.value,
                    telefone: txtTelefone.value 
                };
                completarCadastro(usuario, user.uid);
                salvarImagem(user.uid);
                window.location.href = inicio.html;
            }).catch(function(error){
                console.log(error);
            });

});

function completarCadastro(usuario, id){
    db.collection('users').doc(id).set(usuario)
                          .then(function() {
                            console.log('Usuário cadastrado com sucesso!');
                            
                        })
                        .catch(function(error) {
                            console.error('Erro ao cadastrar usuário: ', error);
                        });
}

function salvarImagem(id){
    var imageRef = storage.ref().child('imagens');
    var perfilRef = imageRef.child(`${id}.png`);

    var imgFotoPerfil = document.getElementById('imgFotoPerfil');
    
    perfilRef.put(imgFotoPerfil.src)
            .then(function(){
                console.log('Upload realizado com sucesso!');
            })
            .catch(function(error){
                console.error('Erro ao realizar o upload: ', error);
            });
}