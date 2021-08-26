// X As a developer, I want to make at least three commits. (to gitHub)
// XXX As a user, I want a destination to be randomly selected for my day trip. 
// XXX As a user, I want a restaurant to be randomly selected for my day trip.
// XXX As a user, I want a mode of transportation to be randomly selected for my day trip.
// XXX As a user, I want a form of entertainment to be randomly selected for my day trip.
// XXX As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
// XXX As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
// XXX As a user, I want to display my completed trip in the console.
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

    alert(`${randomDestination} ${randomTrans} ${randomEnt} ${randomRest}`);
    
let userChoice = confirm("We hope you like the itinerary that we here are Travel Fantasy have created for you!  If you're happy with all of our choices, click the 'OK' button below.  If you aren't okay with them...we don't know what's wrong with you.  But go ahead and click 'Cancel' and you will have the chance to change any part of the trip you'd like to.");
    if(userChoice === true){
        happyWithTrip();
        console.log(`${randomDestination} ${randomTrans} ${randomEnt} ${randomRest}`);
    }
    else{
        notHappyWithTrip();
        let newItinerary = confirm(`Here is your new travel itinerary: ${randomDestination} ${randomTrans} ${randomEnt} ${randomRest}.  If you like this better than before, click "OK".  If you still want to try to adjust our already perfect vacation, click "Cancel" again.`)
            if(newItinerary === true){
            happyWithTrip();
            }
            else{
            notHappyWithTrip()
            }
    }


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
function happyWithTrip(){
    alert(`You confirm that you are going to ${randomDestination} ${randomTrans} ${randomEnt} ${randomRest}.  We hope you enjoy your trip!  Do not forget to rate and review "Travel Fantasy" BEFORE your trip!`);
    
    alert("Travel Fantasy is not to be held liable or responsible for any damages, injuries, or claims made during travel.  Enjoy.")
}
function notHappyWithTrip(){
    let changeThings = prompt('Please input the part of the trip you would like to change.  You can select the destination itself, creating a whole new itinerary for yourself or you can try out a new "transportation", "entertainment", or "restaurant".');
    if(changeThings.toLowerCase() === "transportation"){
        let newTrans = changeYourMindTrans();
        randomTrans = newTrans;
        return randomTrans;
    }
    else if(changeThings.toLowerCase() === "entertainment"){
        let newEnt = changeYourMindEnt();
        let randomEnt = newEnt;
        return randomEnt;
    }
    else if(changeThings.toLowerCase() === "restaurant"){
        let newRest = changeYourMindRest();
        let randomRest = newRest;
        return randomRest;
    }
    else{
        alert('Please type in "transportation", "entertainment", or "restaurant" (We here are Travel Fantasy know that these can be difficult words to spell.)');
        notHappyWithTrip();
    }
}

function changeYourMindTrans(){
        let newTrans = determineRandomTransportation();
        return newTrans;
}
function changeYourMindEnt(){
    let newEnt = determineRandomEntertainment();
    return newEnt;
}
function changeYourMindRest(){
    let newRest = determineRandomRestaurant();
    return newRest;
}