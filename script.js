//form login adm
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

// botao inscrever na vaga
document.addEventListener("DOMContentLoaded", function() {
    var inscreverButton = document.getElementById("btnInscrever");
    if (inscreverButton) {
        inscreverButton.addEventListener("click", function() {
            window.location.href = 'inscricao.html';
        });
    }
});

//detalhes da vaga
document.addEventListener("DOMContentLoaded", function() {
    // Função para obter o valor do parâmetro da URL
    function getQueryParam(param) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Dados das vagas (você pode buscar isso de um servidor ou de um arquivo JSON)
    var vagas = {
        "enfermeiro": {
            nome: "Enfermeiro",
            tipoContratacao: "CLT",
            modalidade: "Presencial",
            descricao: "Responsável por cuidar de pacientes em ambiente hospitalar, monitorando sinais vitais e administrando medicamentos."
        },
        "assistente-administrativo": {
            nome: "Assistente Administrativo",
            tipoContratacao: "Estágio",
            modalidade: "Home Office",
            descricao: "Auxilia nas tarefas administrativas da empresa, como atendimento telefônico, organização de documentos e controle de agenda."
        },
        "medico": {
            nome: "Médico",
            tipoContratacao: "CLT",
            modalidade: "Presencial",
            descricao: "Atende pacientes, realiza diagnósticos, prescreve tratamentos e acompanha a recuperação dos pacientes."
        },
        "recepcionista": {
            nome: "Recepcionista",
            tipoContratacao: "CLT",
            modalidade: "Presencial",
            descricao: "Recebe visitantes e pacientes, faz agendamentos e fornece informações sobre os serviços da empresa."
        },
        "desenvolvedor": {
            nome: "Desenvolvedor",
            tipoContratacao: "Freelancer",
            modalidade: "Home Office",
            descricao: "Desenvolve e mantém sistemas e aplicativos, realiza testes e garante a funcionalidade dos programas."
        }
    };

    // Obter o nome da vaga da URL
    var vaga = getQueryParam('vaga');

    // Verificar se a vaga existe nos dados
    if (vaga && vagas[vaga]) {
        var dadosVaga = vagas[vaga];

        // Preencher os dados na página
        document.getElementById('vagaNome').textContent = dadosVaga.nome;
        document.getElementById('vagaTipoContratacao').textContent = dadosVaga.tipoContratacao;
        document.getElementById('vagaModalidade').textContent = dadosVaga.modalidade;
        document.getElementById('vagaDescricao').textContent = dadosVaga.descricao;
    } else {
    }
});

// Função para exibir uma mensagem quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada e o script.js está funcionando!');
    // Adicione outras funcionalidades aqui

    // Exemplo: Alterar o texto do botão de inscrição
    var btnEnviar = document.getElementById('btnEnviar');
    if (btnEnviar) {
        btnEnviar.addEventListener('click', function() {
            alert('Inscrição realizada com sucesso!');
        });
    }
});


/*noticias
document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('newsList');
    const newsForm = document.getElementById('newsForm');
    
    // Dados de exemplo (substitua por dados do seu backend)
    const newsData = [
        { title: 'Notícia 1', content: 'Conteúdo da notícia 1' },
        { title: 'Notícia 2', content: 'Conteúdo da notícia 2' }
    ];
    
    // Função para renderizar a lista de notícias
    function renderNews() {
        newsList.innerHTML = '';
        newsData.forEach((news, index) => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item card mb-3';
            newsItem.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.content}</p>
                    <button class="btn btn-warning btn-sm" onclick="editNews(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteNews(${index})">Excluir</button>
                </div>
            `;
            newsList.appendChild(newsItem);
        });
    }

    // Função para adicionar uma notícia
    newsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('newsTitle').value;
        const content = document.getElementById('newsContent').value;
        
        newsData.push({ title, content });
        renderNews();
        
        // Limpar formulário e fechar modal
        newsForm.reset();
        $('#addNewsModal').modal('hide');
    });

    // Função para editar uma notícia
    window.editNews = function(index) {
        const news = newsData[index];
        document.getElementById('newsTitle').value = news.title;
        document.getElementById('newsContent').value = news.content;
        
        // Exibir modal
        $('#addNewsModal').modal('show');
    };

    // Função para excluir uma notícia
    window.deleteNews = function(index) {
        newsData.splice(index, 1);
        renderNews();
    };

    // Inicializar a lista de notícias
    renderNews();
});


*/



