import $ from 'jquery';
import Rx from 'rxjs';
import {Login} from './login.js'
import Chart from 'chart.js';
import { Domain } from 'domain';
import {ChartManager} from './chart-manager.js'


let login=new Login();
login.loginChech(); //provera da li je logovan korisnik

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
//fetch data from json-server 
 

