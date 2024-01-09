import { jacketSpecific } from "./api.js";
import { newUrl } from "./api.js";

const content = document.querySelector("main");
const description = document.querySelector(".proddes");
const descButton = document.querySelector(".prdesc");
const detButton = document.querySelector(".prdet");
const image = document.querySelector(".urbanjacket");
let lastJacket = jacketSpecific.sizes[jacketSpecific.sizes.length - 1];
let gender = "";

if(jacketSpecific.gender === "Female"){
    gender = "Women"
}
else(gender = "Men")

console.log(gender);

function createHtml(Product){
    document.title = `${Product.title}`
image.innerHTML = `<img src="${Product.image}" alt="image of the urban jacket">`;           
description.innerHTML = `<p>${Product.description}</p>`


}



createHtml(jacketSpecific);

function changeDescription(){
    description.innerHTML = `<p>${jacketSpecific.title}</p>
                             <p>Sizes: ${jacketSpecific.sizes[0]} - ${lastJacket}</p>
                             <p>Gender: ${gender}</p>
                             <p>Price: ${jacketSpecific.price}$</p>`
detButton.classList.add("active");
detButton.classList.remove("non-active");
descButton.classList.remove("active");
descButton.classList.add("non-active");
                                 

} 

detButton.addEventListener('click',changeDescription);


function changeDescriptionBack(){
    description.innerHTML = `<p>${jacketSpecific.description}</p>`
    detButton.classList.remove("active");
detButton.classList.add("non-active");
descButton.classList.add("active");
descButton.classList.remove("non-active");


                   
} 

descButton.addEventListener('click',changeDescriptionBack);