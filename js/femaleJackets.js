// import { callApi } from "./api.js";
import {jacket} from "./api.js"



const femalejackets = document.querySelector(".female")

function createContentFemale(){
    
    femalejackets.innerHTML ="";


    for(let i = 0; i < jacket.length; i++){
    let title = jacket[i].title
    title = title.replace("Rainy Days ", "") 
if(jacket[i].gender === "Female"){
femalejackets.innerHTML += `<div class="jackets1">
<img src="${jacket[i].image}">

<p>${title}</p> 
<p>${jacket[i].price}$</p>
<a href="specific.html?id=${jacket[i].id}" class="buyjacket">view more</a>
</div>`
}
}

}



    createContentFemale();





// createContentMale();
