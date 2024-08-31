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

// Função para exibir uma mensagem quando a página é carregada.......................
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

//Função para exibir o video de noticias pelo modal
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os links que abrem o modal
    var videoLinks = document.querySelectorAll('a[data-toggle="modal"][data-target="#videoModal"]');

    videoLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Obtém o título da notícia correspondente
            var card = this.closest('.card'); // Encontra o elemento pai com a classe .card
            var videoTitle = card.querySelector('.card-title').textContent; // Pega o texto do título
            var videoSrc = this.getAttribute('data-src'); // Obtém a fonte do vídeo

            // Atualiza o título do modal
            var modalTitle = document.getElementById('videoModalLabel');
            modalTitle.textContent = videoTitle;

            // Atualiza a fonte do vídeo no modal
            var modalVideo = document.getElementById('modalVideo');
            modalVideo.querySelector('source').src = videoSrc;
            modalVideo.load(); // Recarrega o vídeo

            // Abre o modal
            $('#videoModal').modal('show');
        });
    });

    // Evento para remover a fonte do vídeo quando o modal for fechado
    $('#videoModal').on('hidden.bs.modal', function () {
        var modalVideo = document.getElementById('modalVideo');
        modalVideo.pause(); // Pausa o vídeo
        modalVideo.querySelector('source').src = ''; // Remove a fonte
        modalVideo.load(); // Recarrega o vídeo sem fonte
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os itens de menu que podem ter submenus
    const menuItems = document.querySelectorAll('.main-nav > ul > li > a');

    menuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            // Evita a navegação padrão do link se houver submenu
            const submenu = this.nextElementSibling;

            // Se não houver submenu, permite navegação padrão
            if (!submenu) {
                return;
            }

            // Alterna a visibilidade do submenu clicado
            event.preventDefault(); // Mantém este preventDefault apenas se você não quiser a navegação padrão
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

            // Alterna a classe active para o item clicado
            this.parentElement.classList.toggle('active');
        });
    });

    // Seleciona todos os itens de submenu que podem ter sub-submenus
    const submenuItems = document.querySelectorAll('.main-nav ul ul li > a');

    submenuItems.forEach(subItem => {
        subItem.addEventListener('click', function (event) {
            // Evita a navegação padrão do link se houver sub-submenu
            const subsubmenu = this.nextElementSibling;

            // Se não houver sub-submenu, permite navegação padrão
            if (!subsubmenu) {
                return;
            }

            // Alterna a visibilidade do sub-submenu clicado
            event.preventDefault(); // Mantém este preventDefault apenas se você não quiser a navegação padrão
            subsubmenu.style.display = subsubmenu.style.display === 'block' ? 'none' : 'block';

            // Alterna a classe active para o item clicado
            this.parentElement.classList.toggle('active');
        });
    });
});

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
  
// Adicionar um evento de digitação na barra de pesquisa
document.getElementById('searchInput').addEventListener('keyup', function() {
    // Obter o valor da pesquisa e convertê-lo para minúsculas
    let searchValue = this.value.toLowerCase();
    
    // Selecionar todos os cartões de especialidade
    let cards = document.querySelectorAll('.card');

    // Loop através de todos os cartões para verificar o filtro
    cards.forEach(function(card) {
        // Obter a especialidade do cartão
        let specialty = card.querySelector('.specialty').textContent.toLowerCase();

        // Verificar se a especialidade contém o valor pesquisado
        if (specialty.includes(searchValue)) {
            card.style.display = ''; // Mostrar cartão
        } else {
            card.style.display = 'none'; // Ocultar cartão
        }
    });
});

//Função para exibir mensagem do Whatsapp de acordo com a especialidade selecionada
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.whatsapp-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Encontrar o elemento pai (o cartão) e obter a especialidade
            var card = this.closest('.card');
            var specialty = card.getAttribute('data-specialty');
            
            // Criar a URL do WhatsApp com a especialidade selecionada
            var phone = '5571996207149'; // Número de telefone
            var message = encodeURIComponent(`Olá, gostaria de agendar uma consulta com ${specialty}`);
            var whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
            
            // Redirecionar para a URL do WhatsApp
            window.location.href = whatsappURL;
        });
    });
});







// Função para ordenar os cartões por ordem alfabética
function ordenarCardsPorEspecialidade() {
    // Seleciona o container onde os cartões estão
    const container = document.querySelector('#container-cards'); // Substitua '#container-cards' pelo seletor do seu container

    // Obtém todos os cartões
    const cards = Array.from(container.querySelectorAll('.card'));

    // Ordena os cartões com base no atributo data-specialty
    cards.sort((a, b) => {
        const especialidadeA = a.getAttribute('data-specialty').toLowerCase();
        const especialidadeB = b.getAttribute('data-specialty').toLowerCase();
        if (especialidadeA < especialidadeB) return -1;
        if (especialidadeA > especialidadeB) return 1;
        return 0;
    });

    // Remove todos os cartões do container
    container.innerHTML = '';

    // Reinsere os cartões ordenados no container
    cards.forEach(card => {
        container.appendChild(card);
    });
}

// Chama a função para ordenar os cartões ao carregar a página
document.addEventListener('DOMContentLoaded', ordenarCardsPorEspecialidade);

