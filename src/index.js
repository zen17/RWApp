import $ from 'jquery';
import Rx from 'rxjs';
import {Login} from './login.js'
import Chart from 'chart.js';
import { Domain } from 'domain';
import {ChartManager} from './chart-manager.js'
import {RegisterManager} from './register.js'
import  "./submit.js"
import {JSONmanager} from './json-manager'

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


let widget1 = document.getElementById("widget1");
let widget2 = document.getElementById("widget2");
let widget3 = document.getElementById("widget3");
let widget4 = document.getElementById("widget4");
let jsMan=new JSONmanager();
jsMan.get("http://localhost:3000/data?kljuc="+sessionStorage.getItem("id"))
.then(data=>data.json())
.then(data=>{
    let widgetArr=[];
    widgetArr=data.map(tmp=>{return tmp.expense})
    let max=Math.max.apply(null,widgetArr);
    widget4.innerHTML=max;
    let all=data.reduce((acc,tmp)=>{
        return acc=acc+ parseInt(tmp.expense);
    },0)
    widget1.innerHTML=all;
})
.catch(err=>console.log(err))


