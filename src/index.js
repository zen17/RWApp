import { Movie } from './movie.js'

let rambo=new Movie("rambo",8.1);
let rocky=new Movie("rocky",8.0);
let equlizer=new Movie("equalizew",5.4);
let terminator=new Movie("terminator",6.5);

let niz=[];
niz.push(terminator);
niz.push(rambo);
niz.push(equlizer);
niz.push(rocky);

niz
.filter((movie=>movie.imdb>=8))
.forEach((val,ind)=>{console.log(val.imdb,val.getName())});
let btn=document.createElement('button');
btn.innerHTML='klik';
document.body.appendChild(btn);
btn.onclick=()=>{ alert('klik na dugme');}