// import { callApi } from "./api.js";
import {jacket} from "./api.js"



const button = document.querySelectorAll("button");
const saleContent = document.querySelector(".sale-cont");
const cross = document.querySelector(".cross");
const hidden = document.querySelector(".hidden")




function createContent(){
  

    
    const onSale = document.querySelector(".theJackets")
  ;
    onSale.innerHTML = ``;
 
  hidden.classList.remove("hidden")
    for( let i = 0; i < jacket.length; i++){
        let title = jacket[i].title;
        title = title.replace("Rainy Days ", "") 
       
        onSale.innerHTML += `<div class="jackets1">
        
        <img src="${jacket[i].image}">
  
  <p>${title}</p> 
  <p>${jacket[i].price}</p>
  <a href="specific.html?id=${jacket[i].id}" class="buyjacket">view more</a>
  </div>`

if(i ===3){break;}
}




}

function closeContent(){

  
    hidden.classList.add("hidden");
    
    }

cross.addEventListener('click', closeContent);




for(let i = 0; i < button.length; i++){
button[i].addEventListener('click', createContent);
}



