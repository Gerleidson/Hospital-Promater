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

// Função para alternar a visibilidade das instruções
function toggleInstruction(id) {
    const content = document.getElementById(id);
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

  
    // Classe no Navbar ao Rolar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });


    let slides = document.querySelectorAll('.slideshow');
let dots = document.querySelectorAll('.dot');
let slideIndex = 1;
let timeoutID;

const showSlides = (n) => {
    let i;

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < slides.length; i++) {
        dots[i].setAttribute('class', 'dot');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].setAttribute('class', 'dot ativo');
    clearTimeout(timeoutID);
    timeoutID = setTimeout(autoSlides, 4000);
};

const plusSlides = (n) => {
    showSlides(slideIndex += n);
};

const currentSlide = (n) => {
    showSlides(slideIndex = n);
};

function autoSlides() {
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < slides.length; i++) {
        dots[i].setAttribute('class', 'dot');
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].setAttribute('class', 'dot ativo');
    timeoutID = setTimeout(autoSlides, 1000);
    
    autoSlides();
}

//show menu
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mob-btn');
    const menu = document.querySelector('.main-nav');
    const overlay = document.querySelector('.overlay');
  
    menuButton.addEventListener('click', function() {
      document.body.classList.toggle('show-menu');
    });
  
    overlay.addEventListener('click', function() {
      document.body.classList.remove('show-menu');
    });
  });
  
// Função para buscar e exibir o número total de usuários
async function loadTotalUsers() {
    try {
        const response = await fetch('/api/dashboard/total-usuarios');
        const data = await response.json();
        document.getElementById('total-users').textContent = data.total;
    } catch (error) {
        console.error('Erro ao carregar o total de usuários:', error);
    }
}

// Função para buscar e exibir o número total de agendamentos
async function loadTotalAppointments() {
    try {
        const response = await fetch('/api/dashboard/total-agendamentos');
        const data = await response.json();
        document.getElementById('total-appointments').textContent = data.total;
    } catch (error) {
        console.error('Erro ao carregar o total de agendamentos:', error);
    }
}

// Função para carregar e exibir um gráfico de agendamentos por mês
async function loadAppointmentsChart() {
    try {
        const response = await fetch('/api/dashboard/agendamentos-mensal');
        const data = await response.json();

        const ctx = document.getElementById('appointmentsChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.meses,  // Supondo que o backend retorna um array de meses
                datasets: [{
                    label: 'Agendamentos por Mês',
                    data: data.total,  // Supondo que o backend retorna um array com o total de agendamentos por mês
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.error('Erro ao carregar o gráfico de agendamentos:', error);
    }
}

// Função para carregar e exibir dados em uma tabela
async function loadRecentAppointments() {
    try {
        const response = await fetch('/api/dashboard/recent-appointments');
        const data = await response.json();

        const tableBody = document.getElementById('recent-appointments-table-body');
        tableBody.innerHTML = '';  // Limpa a tabela

        data.forEach(appointment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${appointment.date}</td>
                <td>${appointment.patientName}</td>
                <td>${appointment.service}</td>
                <td>${appointment.status}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao carregar agendamentos recentes:', error);
    }
}

// Inicializa o dashboard ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    loadTotalUsers();
    loadTotalAppointments();
    loadAppointmentsChart();
    loadRecentAppointments();
});

