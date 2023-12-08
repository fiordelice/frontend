//dados para grafico 
var data = {
    // array de rotulos do grafico 
    labels: ['Agropecuária, Extração Vegetal, Caça e Pesca','Indústria', 'Construção Civil', 'Serviços', 'Comércio'],

    //propreiedades do gráfico
    datasets: [{
        label: '2018',
        backgroundColor:'rgba( 64, 224, 208, 1 )',
        borderColor: 'rgba(0, 192, 150, 1)',
        borderWidth: 1,
        data: [6, 18, 9, 44, 23]
    },
]
};

//configurações do grafico 
var options = {
    scales: {
        y:{
            begginAtZero: true
        }
    }
};
//criar o grafico de barras
var ctx = document.querySelector('#grafico').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

