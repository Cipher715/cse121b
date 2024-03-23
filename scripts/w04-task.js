/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Atsushi Karino",
    image: "images/IMG_5416.png",
    favoriteFoods: ["Ramen","BBQ", "Taco", "Curry", "Blueberry"],
    hobbies: ["Mahjong", "Fishing", "Video games", "Playing with my son"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Laie, Hawaii",
        length: "2 years"
    }, {
        place: "Chiba, Japan",
        length: "20 years"
    }, {
        place: "Sapporo, Japan",
        length: "2 years"
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.image;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);

})

