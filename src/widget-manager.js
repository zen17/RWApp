import {JSONmanager} from './json-manager'
export class WidgetManager{
    constructor(){}
    drawWidget(){
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


    }
}
