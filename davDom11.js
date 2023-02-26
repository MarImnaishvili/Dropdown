let allList = document.querySelectorAll('.list');
let activeList = document.querySelector('#btn');
let listsDiv = document.querySelector("#listsDiv");
let arrowDown = document.querySelector(".arrowDown");
let arrowUp = document.querySelector(".arrowUp");
let main = document.querySelector("#main");


activeList.addEventListener('click',function(){

 listsDiv.classList.add('active');

 arrowDown.classList.add('change');
 arrowUp.classList.add('change1');
 


// allList.forEach.addEventListener('click',function(){---- ???

for(let i = 0; i < allList.length; i++){
   let r = allList[i];                    
   r.addEventListener('click', function(){
      main.innerHTML=this.innerHTML; 
   listsDiv.classList.remove('active');
   arrowDown.classList.remove('change');
   arrowUp.classList.remove('change1');
   
   })
   
}                    
})
 


