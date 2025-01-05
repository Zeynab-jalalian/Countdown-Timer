let num=document.querySelector('.num');
let count=10;
let T=setInterval(function time(){
 count--;
 num.textContent=count;
 if(count==0){
    num.textContent="زمان تمام شد!"
    document.body.style.background='black';
    clearInterval (T);
 }
},1000)