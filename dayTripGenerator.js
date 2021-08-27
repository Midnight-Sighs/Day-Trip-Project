// XXX As a developer, I want to make at least three commits. (to gitHub)
// XXX As a user, I want a destinationNames to be randomly selected for my day trip. 
// XXX As a user, I want a restaurant to be randomly selected for my day trip.
// XXX As a user, I want a mode of transportation to be randomly selected for my day trip.
// XXX As a user, I want a form of entertainment to be randomly selected for my day trip.
//  As a user, I want to be able to randomly re-select a XXXdestination, XXXrestaurant, XXXmode of transportation, and/or XXXform of entertainment if I don’t like one or more of those things.
// XXX As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
// XXX As a user, I want to display my completed trip in the console.
// X??As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

//Three destinations
let destinations = ["Gold Saucer", "The Normandy", "Sword Coast"];

//Gold Saucer Data (GS) - XXX edit to sound better
let chocoboColors = ["yellow", "blue", "green", "black", "gold", "pink", "white"];
let randomChocoboColor = chocoboColors[Math.floor(Math.random() * chocoboColors.length)];

let dataGS = {
    name: "You're going to the Gold Saucer!",
    transportation: ["You're getting there by " + randomChocoboColor + " Chocobo!", "If Cloud and his party were able to hoof it over the entire planet, you're also getting there by walking.", "The Highwind is ready and available to take you there.", "You get there by buggy!  You're lucky - Cloud and his party had to work hard for their buggy!"],
    entertainment: ["While you're there, you're going to the Chocobo Races! Did you bring your own or are you just betting?", "While you're there, you're going to Battle Square.  Ready for a fight?", "While you're there, you're going to Speed Square. Buckle up for the ride!", "While you're there, you get to enjoy Wonder Square.  We'll even throw in some free gil to play a few games with!", "While you're there, you're going to the Ghost Square! Spoooooookky!", "While you're there, your entertainment will be at Event Square.  Hope you appreciate theatre!", "While you're there, you get to go to Round Square! Hop on the gondola and relax."],
    restaurant: ["For a meal, we got you a coupon for the food cart.  They don't take reservations, but the food is great!", "For a meal, we got you a reservation to Chocobo Wings.  Whether they use real or imitation chocobo meat, we don't know!  Try it and see!", "For a meal, we got you a reservation at Slum Dogs! After the fall of Sector 7's plate, three industrious friends came to the Gold Saucer and founded Slum Dogs - their recipes are pretty resourceful!"]
}

//Normandy Data (norm) - XXX edit to sound better
let dataNorm = {
    name: "You are going to be traveling to The Normandy.",
    transportation:["You're in luck!  The Normandy allows for direct Dimensional Wormhole right to the ship!", "You need to get there by a small shuttle, meeting with the Normandy in the depths of space. ", "You need to wait at the Citadel for the ship to come pick you up."],
    entertainment: ["While you're there, you will be joing Garrus for some shooting!", "While you're there, you'll see that there's more to the ship than you knew with a ship tour.", "While you're there, you'll enjoy an intense wrestle with Grunt!", "Just like Commander Shepard, you're going to converse with the ship crew all day long.", "You will be spending some time in the Commander's Quarters for your entertainment."],
    restaurant:["We made you a reservation for you to eat at the ship Galley.  The food isn't glorified, but it's edible and will fill you up!", "For your meal, you will be eating in Miranda's office.  She's new to cooking and we haven't tried it, but we're sure you'll enjoy.", "We made you a reservation at a fancy restaurant in the Citadel.  Beware that the prices are steep, but we've given you a 2% off coupon!", "We made sure to tell the crew to get you a Super Sludge for your meal!  It doesn't sound like much but when the galley is down or the ship is in active status, a filling and nutrious meal is always available!"]
}

//Sword Coast Data (SC) - XXX edit to sound better
let dataSC = {
    name: "You're going to be traveling to the Sword Coast.",
    transportation: ["You'll be getting there by wagon.  We don't know what kind of creatures will be pulling the wagon though.", "You'll be getting there by horseback.  Pure, simple, effective, and to the point!", "You'll be getting there by hiking!  We hope you have some nice boots to keep your feet safe, temperature controlled, and sturdy.", "You'll be getting there by hippogriff!  We're assured that the hippogriff you'll be riding was bred and raised in captivity and is a wonderfully suitable mount for a beginnger!"],
    entertainment: ["We've organized a tavern brawl for your entertainment!  Isn't that what everyone wants to experience at least once!?", "We have organized an adventure through a dungeon for your entertainment.  We're assured the party we've employed is suitable for protecting you!", "We have organized for your vacation to coincide with a festival!  All sorts of markets, culture, and celebration!", "We have arranged for you to do some basic train with the guards of one of the towns along the Sword Coast.  Don't worry, the small towns are ALWAYS safe."],
    restaurant: ["For your meal, we have made arrangements for you to visits Neverwinter's famed Driftwood Tavern.  Enjoy the finest dining the Sword Coast has to offer!  First drink is on us!", "For your meal, we arranged for you to go to the Blushing Mermaid in Baulder's Gate! You may even get some free entertainment as adventurers come through!", "For your meal, we offer you dinner and a show at the Five Flagons of Baulder's Gate!", "For your meal, we've arranged for a group of adventurers to let you sit down with them for the evening! They're great company!"]
}

let randomDestination;
let randomLocal;
function getStarted(){
    randomDestination = determineRandomLocation();
    randomLocal = randomDestination;
    return randomLocal;
}
getStarted();
assignObjects();
let destinationNames;
let randomTrans;
let randomEnt;
let randomRest;
let userChoice
assignOtherRandomVariables();
alert(`${destinationNames} ${randomTrans} ${randomEnt} ${randomRest}`);
confirmTrip();

function confirmTrip(userChoice){
    userChoice = confirm(`We hope you like the itinerary that we here are Travel Fantasy have created for you!  If you're happy with all of our choices, click the 'OK' button below.  If you aren't okay with them...we don't know what's wrong with you.  But go ahead and click 'Cancel' and you will have the chance to change any part of the trip you'd like to.\n\nYour Ininerary:\n${destinationNames} ${randomTrans} ${randomEnt} ${randomRest}`);
    if(userChoice === false){
        notHappyWithTrip();
        confirmTrip(true);
    }
    if(userChoice === true){
        happyWithTrip();
        userChoice = true;
    }
}

//the pure functions (I'm pretty sure they are...except not being happy with the trip! That probably isn't pure)
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

function assignOtherRandomVariables(){
    destinationNames = determineLocationName();
    randomTrans = determineRandomTransportation();
    randomEnt = determineRandomEntertainment();
    randomRest = determineRandomRestaurant();
}

function determineRandomLocation(){
    let randomLocal = destinations[Math.floor(Math.random() * destinations.length)];
    return randomLocal;
}

function determineLocationName(){
    let destinationNames = randomLocal.name;
    return destinationNames;
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
    alert(`You confirm that you like your vacation options!  \n\nWe hope you enjoy your trip!  Do not forget to rate and review "Travel Fantasy" BEFORE your trip! \n\nTravel Fantasy is not to be held liable or responsible for any damages, injuries, or claims made during travel.  Enjoy!`)
    console.log(`${destinationNames} ${randomTrans} ${randomEnt} ${randomRest}`);
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
function notHappyWithTrip(){
    let changeThings = prompt('Please input the part of the trip you would like to change.  You can select the destination itself, creating a whole new itinerary for yourself or you can try out a new "transportation", "entertainment", or "restaurant".');
    if(changeThings.toLowerCase() === "destination"){
        getStarted();
        assignObjects();
        assignOtherRandomVariables();
        alert(`${destinationNames} ${randomTrans} ${randomEnt} ${randomRest}`);   
    }
    else if(changeThings.toLowerCase() === "transportation"){
        let newTrans = changeYourMindTrans();
        randomTrans = newTrans;
        userChoice = undefined;
        return randomTrans;
    }
    else if(changeThings.toLowerCase() === "entertainment"){
        let newEnt = changeYourMindEnt();
        let randomEnt = newEnt;
        userCoice = undefined;
        return randomEnt;
    }
    else if(changeThings.toLowerCase() === "restaurant"){
        let newRest = changeYourMindRest();
        let randomRest = newRest;
        userChoice = undefined;
        return randomRest;
    }
    else{
        alert('Please type in "transportation", "entertainment", or "restaurant" (We here are Travel Fantasy know that these can be difficult words to spell.)');
    }
    return userChoice;
}