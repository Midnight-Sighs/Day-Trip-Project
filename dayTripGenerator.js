// As a developer, I want to make at least three commits. (to gitHub)
// XXX As a user, I want a destination to be randomly selected for my day trip. 
// XXX As a user, I want a restaurant to be randomly selected for my day trip.
// XXX As a user, I want a mode of transportation to be randomly selected for my day trip.
// XXX As a user, I want a form of entertainment to be randomly selected for my day trip.
// As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
// As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
// As a user, I want to display my completed trip in the console.
// As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!
    

//Three destinations
let destinations = ["Gold Saucer", "The Normandy", "Sword Coast"];

//Gold Saucer Data (GS)
let dataGS = {
    name: "Gold Saucer",
    transportation: ["Chocobo", "walking", "The Highwind"],
    entertainment: ["Chocobo Races", "Battle Square", "Speed Square", "Wonder Square", "Ghost Square", "Event Square", "Round Square"],
    restaurant: ["Food Cart", "Chocobo Wings", "Slum Dogs"]
}
let randomTransportationGS = dataGS.transportation[Math.floor(Math.random() * dataGS.transportation.length)];
let randomEntertainmentGS = dataGS.entertainment[Math.floor(Math.random() * dataGS.entertainment.length)];
let randomRestaurantGS = dataGS.restaurant[Math.floor(Math.random() * dataGS.restaurant.length)];

//Normandy Data (norm)
let dataNorm = {
    name: "The Normandy",
    transportation:["direct Dimensional Wormhole", "shuttle", "wait at the Citadel for pick-up."],
    entertainment: ["Garrus' Training Range", "ship tour", "wrestle with Grunt", "converse with the ship crew"],
    restaurant:["ship Galley", "Miranda's office", "the Citadel", "Super Sludge"]
}
let randomTransportationNorm = dataNorm.transportation[Math.floor(Math.random() * dataNorm.transportation.length)];
let randomEntertainmentNorm = dataNorm.entertainment[Math.floor(Math.random() * dataNorm.entertainment.length)];
let randomRestaurantNorm = dataNorm.restaurant[Math.floor(Math.random() * dataNorm.restaurant.length)];

//Sword Coast Data (SC)
let dataSC = {
    name: "Sword Coast",
    transportation: ["wagon", "horseback", "hiking", "hippogriff"],
    entertainment: ["tavern brawl", "adventure through a dungeon", "shop the market square", "train with the guards"],
    restaurant: ["Driftwood Tavern", "Blushing Mermaid", "Five Flagons", "Elfsong Tavern"]
}
let randomTransportationSC = dataSC.transportation[Math.floor(Math.random() * dataSC.transportation.length)];
let randomEntertainmentSC = dataSC.entertainment[Math.floor(Math.random() * dataSC.entertainment.length)];
let randomRestaurantSC = dataSC.restaurant[Math.floor(Math.random() * dataSC.restaurant.length)];

//The Code
let randomDestination = determineRandomLocation();
let randomLocal;
if(randomDestination === "Gold Saucer"){
    randomLocal = dataGS;
}
else if(randomDestination === "The Normandy"){
    randomLocal = dataNorm;
}
else{
    randomLocal = dataSC;
}

let randomTrans = determineRandomTransportation();
let randomEnt = determineRandomEntertainment();
let randomRest = determineRandomRestaurant();

console.log(randomTrans);
console.log(randomEnt);
console.log(randomRest);




//the functions
function determineRandomLocation(){
    let randomLocal = destinations[Math.floor(Math.random() * destinations.length)];
    return randomLocal;
}
function determineRandomTransportation(){
    let randomTrans = randomLocal.transportation[Math.floor(Math.random() * randomLocal.transportation.length)];
    return randomTrans;
}
function determineRandomEntertainment(){
    let randomEnt = randomLocal.entertainment[Math.floor(Math.random() * randomLocal.entertainment.length)];
    return randomEnt;
}
function determineRandomRestaurant(){
    let randomRest = randomLocal.restaurant[Math.floor(Math.random() * randomLocal.restaurant.length)];
    return randomRest;
}

// function determineRandomTransportation(){
//     let randomTrans;
//     if(randomDestination === "Gold Saucer"){
//         randomTrans = randomTransportationGS;
//     }
//     else if(randomDestination === "The Normandy"){
//         randomTrans = randomTransportationNorm;
//     }
//     else{
//         randomTrans = randomTransportationSC;
//     }
//     return randomTrans;
// }
// function determineRandomEntertainment(){
//     let randomEnt;
//     if(randomDestination === "Gold Saucer"){
//         randomEnt = randomEntertainmentGS;
//     }
//     else if(randomDestination === "The Normandy"){
//         randomEnt = randomEntertainmentNorm;
//     }
//     else{
//         randomEnt = randomEntertainmentSC;
//     }
//     return randomEnt;
// }
// function determineRandomRestaurant(){
//     let randomRest
//     if(randomDestination === "Gold Saucer"){
//         randomRest = randomRestaurantGS;
//     }
//     else if(randomDestination === "The Normandy"){
//         randomRest = randomRestaurantNorm;
//     }
//     else{
//         randomRest = randomRestaurantSC;
//     }
//     return randomRest;
// }