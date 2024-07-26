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


document.addEventListener('DOMContentLoaded', function() {
    // Função para obter parâmetros da URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Obtendo o parâmetro 'vaga'
    const vaga = getQueryParam('vaga');
    
    // Dados das vagas (você pode substituir isso por uma chamada de API se preferir)
    const vagas = {
        'enfermeiro': {
            nome: 'Enfermeiro',
            tipoContratacao: 'CLT',
            modalidade: 'Presencial',
            descricao: 'Descrição detalhada sobre a vaga de Enfermeiro...'
        },
        'assistente-administrativo': {
            nome: 'Assistente Administrativo',
            tipoContratacao: 'Estágio',
            modalidade: 'Home Office',
            descricao: 'Descrição detalhada sobre a vaga de Assistente Administrativo...'
        },
        'medico': {
            nome: 'Médico',
            tipoContratacao: 'CLT',
            modalidade: 'Presencial',
            descricao: 'Descrição detalhada sobre a vaga de Médico...'
        },
        'recepcionista': {
            nome: 'Recepcionista',
            tipoContratacao: 'CLT',
            modalidade: 'Presencial',
            descricao: 'Descrição detalhada sobre a vaga de Recepcionista...'
        },
        'desenvolvedor': {
            nome: 'Desenvolvedor',
            tipoContratacao: 'Freelancer',
            modalidade: 'Home Office',
            descricao: 'Descrição detalhada sobre a vaga de Desenvolvedor...'
        }
    };

    // Preenchendo os detalhes da vaga
    if (vaga && vagas[vaga]) {
        document.getElementById('vagaNome').innerText = vagas[vaga].nome;
        document.getElementById('vagaTipoContratacao').innerText = vagas[vaga].tipoContratacao;
        document.getElementById('vagaModalidade').innerText = vagas[vaga].modalidade;
        document.getElementById('vagaDescricao').innerText = vagas[vaga].descricao;
    } else {
        document.getElementById('vagaNome').innerText = 'Vaga não encontrada';
        document.getElementById('vagaTipoContratacao').innerText = '';
        document.getElementById('vagaModalidade').innerText = '';
        document.getElementById('vagaDescricao').innerText = '';
    }

    // Ação do botão "INSCREVER-SE NA VAGA"
    document.getElementById('btnInscrever').addEventListener('click', function() {
        window.location.href = 'inscricao.html';
    });
});





