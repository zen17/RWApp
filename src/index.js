import $ from 'jquery';
import Rx from 'rxjs';
import {Login} from './login.js'
import Chart from 'chart.js';
import { Domain } from 'domain';
import {ChartManager} from './chart-manager.js'
import {RegisterManager} from './register.js'


let loginReg=document.getElementById('loginReg');
if(loginReg!=null){
Rx.Observable.fromEvent(loginReg,'click').subscribe(data=>{
    login.logOut();
})
}
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
let btnRegStream=document.getElementById("btnreg")
if(btnRegStream!=null && btnRegStream!=undefined)
{
    let email=document.getElementById('emailReg');
    let password=document.getElementById('passwordReg')
    let name=document.getElementById('nameReg');
    Rx.Observable.fromEvent(btnRegStream,'click')
    .subscribe((data)=>{
        let reg=new RegisterManager();
        reg.register(name.value,email.value,password.value);
     })
    
} 

