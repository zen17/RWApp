import { Movie } from './movie.js'
import Rx from 'rxjs/Rx';
import $ from 'jquery'
import { timeout, toArray } from 'rxjs/operators';

const dugme=$('#btn');
const input=$('#input');
const par=$('#par');
const streamDugme$=Rx.Observable.fromEvent(document,'mousemove').filter((val)=>val.clientY<200);
streamDugme$.subscribe(
    (val)=>{
        par.html('<h1>'+ val.clientX+val.clientY+'</h1>');
    },(err)=>{
        console.log(err);
    },()=>{
       console.log('Complete'); 
    });

    const streamInput$=Rx.Observable.fromEvent(input,'keyup');
streamInput$.subscribe(
    (val)=>{
        console.log(val.currentTarget.value);
    },(err)=>{
        console.log(err);
    },()=>{
       console.log('Complete'); 
    });


/*
const observable=Rx.Observable.create((observer)=>{
    observer.next("helo");
    observer.next("helo");
    observer.next("helo");
    observer.next("end");
});
observable.subscribe(val=>print(val));

const klik=Rx.Observable.fromEvent(document,'click');
klik.subscribe((val)=>{print(val)});
*/
let rambo=new Movie("rambo",8.1);
let rocky=new Movie("rocky",8.0);
let equlizer=new Movie("equalizew",5.4);
let terminator=new Movie("terminator",8.9);

let niz=[];
niz.push(terminator);
niz.push(rambo);
niz.push(equlizer);
niz.push(rocky);


niz
.filter(movie=>movie.imdb>=8)
.forEach((val,ind)=>{console.log(val.imdb,val.getName())});
let btn=document.createElement('button');
btn.innerHTML='klik';
document.body.appendChild(btn);
btn.onclick=print;

function print(val){
    let p=document.createElement('p');
    p.innerHTML=val;
    document.body.appendChild(p);
}