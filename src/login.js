import { timeout } from "rxjs/operator/timeout";
import Rx from 'rxjs/Rx';
export class Login{
    constructor(email,pass)
    {
        this.email=email;
        this.pass=pass;
    }
    
loginChech(){
        let alerthtml=document.getElementById('alerthtml')
        if(sessionStorage.getItem('email')!=null)
        {
            alerthtml.innerHTML="Welcome "+ sessionStorage.getItem('email');
        }
        else    
        {
            alerthtml.innerHTML="Please login"  
        }
}
get(email) {
         return fetch("http://localhost:3000/users?email="+email)
    }
}

// login-page logic 
let btnsub=document.getElementById('btnsub');
if(btnsub!=null || btnsub!=undefined){  //provera zato sto ga trazi iz drugi html a tamo nije definisan
let btnStream=Rx.Observable.fromEvent(btnsub,'click');

btnStream.subscribe((click)=>{
    let email=document.getElementById('emailInput');
    let pass=document.getElementById('passwordInput');
    let obj=new Login(email.value,pass.value);
        obj.get(email.value)
        .then(function(res){return res.json()})
        .then(function(data){
            if(data[0].email==email.value && data[0].password==pass.value)
            {
                sessionStorage.setItem("email", email.value);
                sessionStorage.setItem("password", pass.value);
                window.location.href="http://localhost:8080/public";
            }
            else{
                alert('neispravan mejl ili lozinka')
            }
        }).catch((err)=>{console.log(err)});
    })
}

