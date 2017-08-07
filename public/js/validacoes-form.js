function cadastrar() {
    var txtNome = $("#formCadastro :input").get(0).value;
    var txtEmail = $("#formCadastro :input").get(1).value;
    var txtSenha = $("#formCadastro :input").get(2).value;
    var txtSenhaConfirmacao = $("#formCadastro :input").get(3).value;

    var msgErro = document.querySelector(".msg-validacao-erro span");
    msgErro.textContent = "";
    msgErro.parentElement.style.display = "none";

    if (!txtNome || !txtEmail || !txtSenha || !txtSenhaConfirmacao) {
        msgErro.textContent = "Todos os campos são obrigatórios";
        $(msgErro.parentElement).stop().fadeIn(2000);
        return false;
    } else if (txtSenha != txtSenhaConfirmacao) {
        msgErro.textContent = "Senhas incompatíveis";
        $(msgErro.parentElement).stop().fadeIn(2000);
    } else if (!validaEmail(txtEmail)) {
        msgErro.textContent = "Esse email não é válido";
        $(msgErro.parentElement).stop().fadeIn(2000);
    }
}

function login() {
    var txtEmail = $("#formLogin :input").get(0).value;
    var txtSenha = $("#formLogin :input").get(1).value;

    var msgErro = document.querySelector(".msg-validacao-erro span");
    msgErro.textContent = "";
    msgErro.parentElement.style.display = "none";

    if (!txtEmail || !txtSenha) {
        msgErro.textContent = "Todos os campos são obrigatórios";
        $(msgErro.parentElement).stop().fadeIn(2000);
        return false;
    } else if (!validaEmail(txtEmail)) {
        msgErro.textContent = "Esse email não é válido";
        $(msgErro.parentElement).stop().fadeIn(2000);
    }
}

$("#formCadastro :input").on("click", function() {
    var msgErro = document.querySelector(".msg-validacao-erro span");
    $(msgErro.parentElement).stop().fadeOut(1000);
});

function validaEmail(email) {
    return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
}