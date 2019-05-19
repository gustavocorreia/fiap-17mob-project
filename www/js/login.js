var btnEntrar = document.getElementById('btnEntrar');

btnEntrar.addEventListener('click', function(e){

    let txtEmail = document.getElementById('txtEmail');
    let txtSenha = document.getElementById('txtSenha');

    if(txtEmail.value == ''){
        txtEmail.focus();
        return;
    }

    if(txtSenha.value == ''){
        txtSenha.focus();
        return;
    }

    firebase.auth().signInWithEmailAndPassword(txtEmail.value, txtSenha.value)
            .then(function (usuario) {
                window.location = "inicio.html" 
            })
            .catch(function (exception) {
                if (exception.code === 'auth/wrong-password') {
                    alert('Senha incorreta.');
                    txtSenha.focus();
                } else {
                    alert(exception.message);
                }
            });

});