import $ from 'jquery';
import Rx from 'rxjs';
import {Login} from './login.js'
import Chart from 'chart.js';
import { Domain } from 'domain';
import {RegisterManager} from './register.js'
import  "./submit.js"
import {JSONmanager} from "./json-manager"

export class ChartManager{
    constructor()
    {}
    drawCharts(ctxLine,ctxBar,ctxPie){
        let date=new Date()
        let daysInMonth=new Date(date.getFullYear(),date.getMonth()+1, 0).getDate();
        let jsManager=new JSONmanager();
        jsManager.get("http://localhost:3000/data?kljuc="+sessionStorage.getItem("id"))
        .then(data =>{    
           return data.json();
        })
        .then(pom=>{
            console.log("json");
            console.log(pom);
            let arr=[];
            let tmp=[];
            let pieArr=[];
            pieArr=pom.map(tmp=>{return tmp.expenseGroup})
            for(let i=0;i<=daysInMonth;i++){
                arr.push(i);
                 tmp.push(pom.reduce((acc,currVal)=>{
                    if(new Date(currVal.date).getDate()==i){
                       return acc=acc+parseInt(currVal.expense)
                    }
                    else 
                    {
                    return acc=acc+0;
                    }
                },0));
            }
            console.log("niz tmp");
            console.log(tmp);
            var myChart = new Chart(ctxLine, {
                type: 'line',
                data: {
                    labels: arr,
                    datasets: [{
                        label: '# of Votes',
                        data: tmp,
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

            var myChart = new Chart(ctxPie, {
                type:'pie',
                data: {
                    labels: pieArr,
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
            var myChart = new Chart(ctxBar, {
                type:"bar",
                data: {
                    labels: arr,
                    datasets: [{
                        label: '# of Votes',
                        data: tmp,
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
        })
        .catch(err=>console.log(err))
    }
}