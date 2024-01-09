
import { fetchId } from "./createid.js";
const url = "https://api.noroff.dev/api/v1/rainy-days"
const id = await fetchId();
export const newUrl =  url + "/" + id;
const main = document.querySelector("main");



 async function callApi(api) {
try {
    const response = await fetch(api);
    const results = await response.json();
   
    return results

}






catch(error){
    main.innerHTML = `<div class="error"><p>oops something went wrong...</p></div>`
}

    
}



export const jacket = await callApi(url);
export const jacketSpecific = await callApi(newUrl);


