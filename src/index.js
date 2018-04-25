import $ from 'jquery';
import Rx from 'rxjs';
import {Login} from './login.js'
import Chart from 'chart.js';
import { Domain } from 'domain';
import {ChartManager} from './chart-manager.js'
import {RegisterManager} from './register.js'
import  "./submit.js"
import {JSONmanager} from './json-manager'
import {WidgetManager} from './widget-manager.js'

let login=new Login();
login.loginCheck(); //provera da li je logovan korisnik
let loginReg=document.getElementById('loginReg');
if(loginReg!=null){
Rx.Observable.fromEvent(loginReg,'click').subscribe(data=>{
    login.logOut();
})
}
//ctanje grafova na osnovu podataka
let ctxLine = document.getElementById("myChartLine");
let ctxPie = document.getElementById("myChartPie");
let ctxBar = document.getElementById("myChartBar");
let chartManager= new ChartManager();
if(ctxLine!=null && ctxLine!=undefined && ctxPie!=null && ctxPie!=undefined && ctxBar!=null && ctxBar!=undefined){
chartManager.drawCharts(ctxLine,ctxPie,ctxBar);
}
//crtanje widget-a
let  widgetManager=new WidgetManager();
widgetManager.drawWidget();
