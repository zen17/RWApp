import $ from 'jquery';
import Rx from 'rxjs';
import {Login} from './login.js'
import Chart from 'chart.js';
import { Domain } from 'domain';
import {ChartManager} from './chart-manager.js'
import {RegisterManager} from './register.js'
import  "./submit.js"

let loginReg=document.getElementById('loginReg');
if(loginReg!=null){
Rx.Observable.fromEvent(loginReg,'click').subscribe(data=>{
    login.logOut();
})
}

console.log("index")
let login=new Login();
login.loginCheck(); //provera da li je logovan korisnik

//ctanje grafova na osnovu podataka
var ctxLine = document.getElementById("myChartLine");
var ctxPie = document.getElementById("myChartPie");
var ctxBar = document.getElementById("myChartBar");

if(ctxLine!=null && ctxLine!=undefined){
let chartManager=new ChartManager();
chartManager.drawChartLine(ctxLine);
chartManager.drawChartPie(ctxPie);
chartManager.drawChartBar(ctxBar);
}


