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
