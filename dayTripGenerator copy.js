// XX As a developer, I want to make at least three commits. (to gitHub)
// XXX As a user, I want a destination to be randomly selected for my day trip. 
// XXX As a user, I want a restaurant to be randomly selected for my day trip.
// XXX As a user, I want a mode of transportation to be randomly selected for my day trip.
// XXX As a user, I want a form of entertainment to be randomly selected for my day trip.
//  As a user, I want to be able to randomly re-select a destination, XXXrestaurant, XXXmode of transportation, and/or XXXform of entertainment if I don’t like one or more of those things.
// XXX As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
// XXX As a user, I want to display my completed trip in the console.
// As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!


//I still need to redo destination!
//I still need to create a function to call and start the whole thing for a button!

//Three destinations
let destinations = ["Gold Saucer", "The Normandy", "Sword Coast",];

//Gold Saucer Data (GS) - XXX edit to sound better
let chocoboColors = ["yellow", "blue", "green", "black", "gold", "pink", "white"];
let randomChocoboColor = chocoboColors[Math.floor(Math.random() * chocoboColors.length)];

let dataGS = {
    name: "You're going to the Gold Saucer!",
    transportation: ["You're getting there by " + randomChocoboColor + " Chocobo!", "If Cloud and his party were able to hoof it over the entire planet, you're also getting there by walking.", "The Highwind is ready and available to take you there.", "You get there by buggy!  You're lucky - Cloud and his party had to work hard for their buggy!"],
    entertainment: ["While you're there, you're going to the Chocobo Races! Did you bring your own or are you just betting?", "While you're there, you're going to Battle Square.  Ready for a fight?", "While you're there, you're going to Speed Square. Buckle up for the ride!", "While you're there, you get to enjoy Wonder Square.  We'll even throw in some free gil to play a few games with!", "While you're there, you're going to the Ghost Square! Spoooooookky!", "While you're there, your entertainment will be at Event Square.  Hope you appreciate theatre!", "While you're there, you get to go to Round Square! Hop on the gondola and relax."],
    restaurant: ["For a meal, we got you a coupon for the food cart.  They don't take reservations, but the food is great!", "For a meal, we got you a reservation to Chocobo Wings.  Whether they use real or imitation chocobo meat, we don't know!  Try it and see!", "For a meal, we got you a reservation at Slum Dogs! After the fall of Sector 7's plate, three industrious friends came to the Gold Saucer and founded Slum Dogs - their recipes are pretty resourceful!"]
}

//Normandy Data (norm) - edit to sound better
let dataNorm = {
    name: "The Normandy",
    transportation:["direct Dimensional Wormhole", "shuttle", "wait at the Citadel for pick-up."],
    entertainment: ["Garrus' Training Range", "ship tour", "wrestle with Grunt", "converse with the ship crew"],
    restaurant:["ship Galley", "Miranda's office", "the Citadel", "Super Sludge"]
}

//Sword Coast Data (SC) - edit to sound better
let dataSC = {
    name: "Sword Coast",
    transportation: ["wagon", "horseback", "hiking", "hippogriff"],
    entertainment: ["tavern brawl", "adventure through a dungeon", "shop the market square", "train with the guards"],
    restaurant: ["Driftwood Tavern", "Blushing Mermaid", "Five Flagons", "Elfsong Tavern"]
}



let randomDestination = determineRandomLocation();
let randomLocal;
assignObjects();
function assignObjects(){
    if(randomDestination === "Gold Saucer"){
        randomLocal = dataGS;
        return randomLocal;

    }
    else if(randomDestination === "The Normandy"){
        randomLocal = dataNorm;
        return randomLocal;
    }
    else{
        randomLocal = dataSC;
        return randomLocal;
    }
}
let destination;
let randomTrans;
let randomEnt;
let randomRest;
assignOtherRandomVariables();

    alert(`${destination} ${randomTrans} ${randomEnt} ${randomRest}`);
    
let userChoice = confirm("We hope you like the itinerary that we here are Travel Fantasy have created for you!  If you're happy with all of our choices, click the 'OK' button below.  If you aren't okay with them...we don't know what's wrong with you.  But go ahead and click 'Cancel' and you will have the chance to change any part of the trip you'd like to.");
    while(userChoice === false){
        notHappyWithTrip();
        let newItinerary = confirm(`Here is your new travel itinerary: ${randomDestination} ${randomTrans} ${randomEnt} ${randomRest}.  If you like this better than before, click "OK".  If you still want to try to adjust our already perfect vacation, click "Cancel" again.`);
        if (newItinerary === true){
            userChoice = true;
        }
    }
    if(userChoice === true){
        happyWithTrip();
        console.log(`${destination} ${randomTrans} ${randomEnt} ${randomRest}`);
    }


//the pure functions (I'm pretty sure they are...except not being happy with the trip! That probably isn't pure)
function assignOtherRandomVariables(){
    destination = determineLocationName();
    randomTrans = determineRandomTransportation();
    randomEnt = determineRandomEntertainment();
    randomRest = determineRandomRestaurant();
}

function determineRandomLocation(){
    let randomLocal = destinations[Math.floor(Math.random() * destinations.length)];
    return randomLocal;
}

function determineLocationName(){
    let destination = randomLocal.name;
    return destination;
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
function notHappyWithDestination(){
    let newDestination = determineRandomLocation();
    randomDestination = newDestination;
    return randomDestination;
}

function notHappyWithTrip(){
    let changeThings = prompt('Please input the part of the trip you would like to change.  You can select the destination itself, creating a whole new itinerary for yourself or you can try out a new "transportation", "entertainment", or "restaurant".');
    if(changeThings.toLowerCase() === "destination"){
        let newDestination = notHappyWithDestination();
        randomDestination = newDestination;
        
    }
    else if(changeThings.toLowerCase() === "transportation"){
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