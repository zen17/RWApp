import Rx from 'rxjs/Rx'
export class RegisterManager{
    constructor(){
    }
    register(n,e,p){
        let obj=JSON.stringify({name:n,email:e,password:p})
        fetch("http://localhost:3000/users?email="+e)
        .then(res=>{ return res.json()})
        .then(data=>{        
            if( data.length>0  )
            {
                alert("korisnik vec postoji");
            }
            else
            {
                fetch("http://localhost:3000/users",{
                    method:'POST',
                    headers:{
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                },
                body:obj
                })
                alert("Uspesno ste napravili nalog ulogujte se ");
                window.location.href="http://localhost:8080/public/login.html"
            }
        })
        .catch(err=>{console.log(err)})
    }
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

