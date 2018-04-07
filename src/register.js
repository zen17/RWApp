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

