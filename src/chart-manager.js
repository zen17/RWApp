import Chart from 'chart.js';
export class ChartManager{
    constructor()
    {}
    drawChartLine(ctx){
        let date=new Date();
        let k=new Date(date.getFullYear(),date.getMonth()+1, 0).getDate()
        let  arr=[];
       for(let i=0;i<=k;i++){
           arr.push(i);
       }
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: arr,
                datasets: [{
                    label: '# of Votes',
                    data: [1000, 2000, 3000, 5000, 2200, 30,600,1000, 2000, 3000, 5000, 2200, 30,600,1000, 2000, 3000, 5000, 2200, 30,600],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }

    drawChartPie(ctx){
        let date=new Date();
        let k=new Date(date.getFullYear(),date.getMonth()+1, 0).getDate()
        let  arr=[];
       for(let i=0;i<=k;i++){
           arr.push(i);
       }
        var myChart = new Chart(ctx, {
            type:'pie',
            data: {
                labels: ["komnalije","struja","voda","hrana"],
                datasets: [{
                    label: '# of Votes',
                    data: [ 30,600,1000, 2000, 3000, 5000, 2200, 30,600],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }

    drawChartBar(ctx){
        let date=new Date();
        let k=new Date(date.getFullYear(),date.getMonth()+1, 0).getDate()
        let  arr=[];
       for(let i=0;i<=k;i++){
           arr.push(i);
       }
        var myChart = new Chart(ctx, {
            type:"bar",
            data: {
                labels: arr,
                datasets: [{
                    label: '# of Votes',
                    data: [1000, 2000, 3000, 5000, 2200, 30,600,1000, 2000, 3000, 5000, 2200, 30,600,1000, 2000, 3000, 5000, 2200, 30,600],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }


}