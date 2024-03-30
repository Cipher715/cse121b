/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = temples =>{
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    })
}


/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const responce = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if(responce.ok){
        const data = await responce.json();
        templeList = data;
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = () => templesElement.innerHTML = "";

/* filterTemples Function */

const filterTemples = temples => {
    reset();
    let filter = document.querySelector('#filtered').value;
    switch (filter){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah") == false));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1950));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});


getTemples();
