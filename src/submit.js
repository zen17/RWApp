import {JSONmanager} from "./json-manager"
import Rx from 'rxjs'
let submitBtn=document.getElementById('submit-button');
if(submitBtn!=null)
{
    let tbxValue=document.getElementById('expenses');
    let tbxNameOfExpenses=document.getElementById('name-of-expenses');
    let datum=document.getElementById('datum');
    Rx.Observable.fromEvent(submitBtn,'click')
    .subscribe(data=>{
        console.log(tbxValue.value,tbxNameOfExpenses.value,parseDate(datum.value));
        let obj=JSON.stringify({
            expense:tbxValue.value,
            expenseName:tbxNameOfExpenses.value,
            date:datum.value,
            kljuc:sessionStorage.getItem('id')
        })
        console.log(obj)
     let json_manager=new JSONmanager();
     json_manager.post("http://localhost:3000/data",obj);
    })
}

function parseDate(val)
{
    //parsiram datum u formatu yyyy/mm/dd zbog kasnijeg citanja  let tmp=new Date(parseDate(datum.value));
    return val[6]+''+val[7]+''+val[8]+''+val[9]+","+val[0]+''+val[1]+','+val[3]+''+val[4];
}