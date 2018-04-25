import {JSONmanager} from "./json-manager"
import Rx from 'rxjs'
import {ChartManager} from "./chart-manager"
import {WidgetManager} from './widget-manager.js'

let ctxLine = document.getElementById("myChartLine");
let ctxPie = document.getElementById("myChartPie");
let ctxBar = document.getElementById("myChartBar");

let submitBtn=document.getElementById('submit-button');
if(submitBtn!=null)
{
    let tbxValue=document.getElementById('expenses');
    let tbxNameOfExpenses=document.getElementById('name-of-expenses');
    let datum=document.getElementById('datum');
    let select=document.getElementById('select');
    Rx.Observable.fromEvent(submitBtn,'click')
    .subscribe(data=>{
        if(tbxNameOfExpenses.value!="" && tbxValue.value!="" && datum.value!="" && select.value!="" && select.value!="Please select"){
        console.log(tbxValue.value,tbxNameOfExpenses.value,parseDate(datum.value));
        let obj=JSON.stringify({
            expense:tbxValue.value,
            expenseName:tbxNameOfExpenses.value.toLowerCase(),
            date:datum.value,
            expenseGroup:select.value.toLowerCase(),
            kljuc:sessionStorage.getItem('id')
        })
        console.log(obj)
     let json_manager=new JSONmanager();
     json_manager.post("http://localhost:3000/data",obj)
     .then(data=>{
        fetch("http://localhost:3000/data?kljuc="+sessionStorage.getItem('id'))
        .then(data=>data.json())
        .then(data=>{
            let chartManager= new ChartManager();
            chartManager.drawCharts(ctxLine,ctxPie,ctxBar);
            let  widgetManager=new WidgetManager();
            widgetManager.drawWidget();

        })
     })
     tbxNameOfExpenses.value="" ;
     tbxValue.value="";
     datum.value="" ;
     select.value="";
    }
    else{
        alert("Popunite sva polja");
    }
    })
}

function parseDate(val){
    //parsiram datum u formatu yyyy/mm/dd zbog kasnijeg citanja  let tmp=new Date(parseDate(datum.value));
    return val[6]+''+val[7]+''+val[8]+''+val[9]+","+val[0]+''+val[1]+','+val[3]+''+val[4];
}

