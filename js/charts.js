// charts.js

// Inicializar o gráfico de visitas
var ctxVisitas = document.getElementById('visitasChart').getContext('2d');
var visitasChart = new Chart(ctxVisitas, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Visitas',
            data: [10, 20, 15, 30, 25, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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

// Inicializar o gráfico de satisfação
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
