// Atualizar os números no dashboard dinamicamente
function atualizarDashboard() {
    document.querySelector('.bg-primary h2').innerText = Math.floor(Math.random() * 200);
    document.querySelector('.bg-success h2').innerText = Math.floor(Math.random() * 1500);
    document.querySelector('.bg-warning h2').innerText = Math.floor(Math.random() * 500);
    document.querySelector('.bg-info h2').innerText = Math.floor(Math.random() * 700);
}

// Chamar a função para atualizar o dashboard a cada 5 segundos
setInterval(atualizarDashboard, 5000);

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

// Código para o gráfico de satisfação
var ctxSatisfacao = document.getElementById('satisfacaoChart').getContext('2d');
var satisfacaoChart = new Chart(ctxSatisfacao, {
    type: 'bar',
    data: {
        labels: ['Muito Satisfeito', 'Satisfeito', 'Neutro', 'Insatisfeito', 'Muito Insatisfeito'],
        datasets: [{
            label: 'Pesquisa de Satisfação',
            data: [20, 30, 25, 15, 10],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Mostrar a seção padrão
document.querySelector('.sidebar .nav-link.active').click();

//Gerar Relatorios
function gerarRelatorio() {
    // Captura os valores dos filtros
    const dataInicio = document.getElementById('dataInicio').value;
    const dataFim = document.getElementById('dataFim').value;
    const tipoRelatorio = document.getElementById('tipoRelatorio').value;

    // Validação simples dos campos (pode ser aprimorada conforme necessário)
    if (!dataInicio || !dataFim || !tipoRelatorio) {
        alert('Por favor, preencha todos os filtros para gerar o relatório.');
        return;
    }

    // Exibe os resultados (exemplo de resposta do relatório)
    const resultadoArea = document.getElementById('resultadoRelatorio');
    resultadoArea.innerHTML = `
        <h5>Resultado do Relatório: ${tipoRelatorio}</h5>
        <p><strong>Período:</strong> De ${dataInicio} a ${dataFim}</p>
        <p>Este é um exemplo de relatório para o tipo selecionado. Os dados reais podem ser integrados através de uma API ou lógica adicional.</p>
    `;
}