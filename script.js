
// Função de autenticação para dashboard
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
});


// Inicializa um contador para gerar IDs sequenciais e códigos
let cardIDCounter = 1;
const codePrefix = 'CODE-'; // Prefixo para o código do cartão

// Função para gerar PDF do cartão virtual
async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Adiciona o conteúdo do cartão ao PDF
    pdf.text('Cartão Fidelidade', 10, 10);
    pdf.text(`Hospital: Hospital de Exemplo`, 10, 20);
    pdf.text(`Código: ${document.getElementById("cardCode").textContent}`, 10, 30);
    pdf.text(`Nome Completo: ${document.getElementById("cardName").textContent}`, 10, 40);
    pdf.text(`Data de Nascimento: ${document.getElementById("cardDOB").textContent}`, 10, 50);

    // Adiciona QR Code ao PDF (opcional, se desejar)
    const qrCodeDataUrl = document.getElementById("qrcode").src;
    if (qrCodeDataUrl) {
        pdf.addImage(qrCodeDataUrl, 'PNG', 10, 60, 50, 50);
    }
    pdf.save('cartao-fidelidade.pdf');
}

// Função para imprimir o cartão virtual
function printCard() {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Imprimir Cartão</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(document.querySelector("#virtualCard").outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}

// Função para confirmar o pagamento e exibir o cartão virtual
function confirmPayment() {
    // Aqui você deve validar o pagamento com o backend
    // Para fins de demonstração, vamos considerar o pagamento sempre bem-sucedido

    // Exibe o cartão virtual
    document.getElementById("virtualCard").style.display = "block";
    document.getElementById("paymentQRCode").style.display = "none";
}

// Função para gerar o QR Code de pagamento e exibir
document.getElementById("clientForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta os dados do formulário
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
