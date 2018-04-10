export class JSONmanager{
    constructor(){}
    get(url){}
    post(url,obj){
        fetch("http://localhost:3000/users",{
            method:'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
        },
        body:obj
        })
    }
}