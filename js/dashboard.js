// Atualizar os números no dashboard dinamicamente
function atualizarDashboard() {
    document.querySelector('.bg-primary h2').innerText = Math.floor(Math.random() * 200);
    document.querySelector('.bg-success h2').innerText = Math.floor(Math.random() * 1500);
    document.querySelector('.bg-warning h2').innerText = Math.floor(Math.random() * 500);
    document.querySelector('.bg-info h2').innerText = Math.floor(Math.random() * 700);
}

// Chamar a função para atualizar o dashboard a cada 5 segundos
setInterval(atualizarDashboard, 5000);

// Adicionar eventos de clique para os botões
document.querySelector('button:contains("Relatórios")').addEventListener('click', function () {
    alert('Abrindo página de relatórios...');
    // Aqui você pode redirecionar para uma página de relatórios
    window.location.href = 'Dashboard/relatorio.html';
});

document.querySelector('button:contains("Configurações do Site")').addEventListener('click', function () {
    alert('Abrindo configurações do site...');
    // Aqui você pode redirecionar para uma página de configurações
    window.location.href = 'Dashboard/configuracoes.html';
});

document.querySelector('button:contains("Gerenciar Notícias")').addEventListener('click', function () {
    alert('Abrindo gerenciamento de notícias...');
    // Aqui você pode redirecionar para uma página de gerenciamento de notícias
    window.location.href = 'Dashboard/gerenciarNoticias.html';
});

// Função para atualizar o gráfico de satisfação dinamicamente
function atualizarGraficoSatisfacao() {
    satisfactionChart.data.datasets[0].data = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
    ];
    satisfactionChart.update();
}

// Chamar a função para atualizar o gráfico a cada 10 segundos
setInterval(atualizarGraficoSatisfacao, 10000);




  

  