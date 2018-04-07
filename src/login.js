import { timeout } from "rxjs/operator/timeout";
import Rx from 'rxjs/Rx';
export class Login{
    constructor(email,pass)
    {
        this.email=email;
        this.pass=pass;
    }
    logOut(){
        sessionStorage.clear();
        window.location='http://localhost:8080/public/login.html';
    }
loginCheck(){
    
        let alerthtml=document.getElementById('alerthtml')
        if(alerthtml!=undefined && alerthtml!=null){
        if(sessionStorage.getItem('email')!=null )
        {
            alerthtml.innerHTML="Welcome "+ sessionStorage.getItem('name');  

        }
        else    
        {
            window.location='http://localhost:8080/public/login.html';
        }
    }
}
get(email) {
         return fetch("http://localhost:3000/users?email="+email)
    }
}



// login-page logic c
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
                sessionStorage.setItem("email", data[0].email);
                sessionStorage.setItem("password",data[0].password);
                sessionStorage.setItem("name",data[0].name);
                window.location.href="http://localhost:8080/public";
            }
            else{
                alert('neispravan mejl ili lozinka')
            }
        }).catch(err=>{console.log(err)});
    })
}

