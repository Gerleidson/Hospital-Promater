document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio do formulário

            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            if (!username || !password) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            if (username === 'admin' && password === 'admin123') {
                // Redireciona para o dashboard se o login for bem-sucedido
                window.location.href = 'dashboard.html';
            } else {
                alert('Usuário ou senha inválidos');
            }
        });
    }
});

// Adiciona um listener para o evento de submissão do formulário
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', handleLogin);
    }
});


function enviarFormulario() {
    // Seleciona o formulário
    var formulario = document.querySelector('form');
    
    // Verifica se o formulário é válido
    if (formulario.checkValidity()) {
        // Se o formulário for válido, submete o formulário
        formulario.submit();
    } else {
        // Caso contrário, exibe uma mensagem de erro
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}