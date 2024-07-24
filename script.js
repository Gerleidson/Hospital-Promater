document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio do formulário

            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            if (username === 'admin' && password === 'admin123') {
                // Redireciona para o dashboard se o login for bem-sucedido
                window.location.href = 'dashboard.html';
            } else {
                alert('Usuário ou senha inválidos');
            }
        });
    }
// Função para manipular o login
function handleLogin(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Obtém os valores dos campos de entrada
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verifica se os campos estão preenchidos
    if (username === 'admin' || password === 'admin123') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Simula uma verificação de login (aqui você deve substituir com a lógica real)
    if (username === 'admin' && password === 'admin') {
        alert('Login bem-sucedido!');
        // Redireciona para outra página, se necessário
        // window.location.href = 'paginaPrincipal.html';
    } else {
        alert('Usuário ou senha inválidos.');
    }
}

// Adiciona um listener para o evento de submissão do formulário
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', handleLogin);
    }
});

// Variável para contador de IDs de cartões
    var clientForm = document.getElementById("clientForm");
    if (clientForm) {
        clientForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio do formulário

            var fullName = document.getElementById("fullName").value;
            var dob = document.getElementById("dob").value;

            // Gera um ID sequencial para o cartão e código do cliente
            var cardID = cardIDCounter++;
            var code = `${codePrefix}${cardID}`;

            // Dados fictícios para o QR Code
            var paymentData = `Cartão de Fidelidade ID ${cardID}\nNome: ${fullName}\nData de Nascimento: ${dob}`;

            // Atualiza os dados do cartão virtual
            document.getElementById("cardCode").textContent = code;
            document.getElementById("cardName").textContent = fullName;
            document.getElementById("cardDOB").textContent = dob;

            // Exibe a imagem estática do QR Code de pagamento
            document.getElementById("paymentQRCode").style.display = "block";
            document.getElementById("virtualCard").style.display = "none";
        });
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
