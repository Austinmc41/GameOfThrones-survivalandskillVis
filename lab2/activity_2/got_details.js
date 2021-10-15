// **** Your JavaScript code goes here ****
characters = [{
    "name": "Bran Stark",
    "status": "Alive",
    "current_location": "Fleeing White Walkers",
    "power_ranking": 7,
    "house": "stark",
    "probability_of_survival": 98
},
{
    "name": "Arya Stark",
    "status": "Alive",
    "current_location": "Back in Westeros",
    "power_ranking": 8,
    "house": "stark",
    "probability_of_survival": 99
},
{
    "name": "Sansa Stark",
    "status": "Alive",
    "current_location": "Winterfell",
    "power_ranking": 10,
    "house": "stark",
    "probability_of_survival": 83
},
{
    "name": "Robb Stark",
    "status": "Dead - Red Wedding S3E9",
    "current_location": "-",
    "power_ranking": -1,
    "house": "stark",
    "probability_of_survival": 0
}]

// DOM #main div element
var main = document.getElementById('main');

// Create a new DOM element
var header = document.createElement("h3");

// Append the newly created <h3> element to #main
main.appendChild(header);

// Set the textContent to:
header.textContent = "My Favorite GoT Characters";


// // Create a new <div> element	
// var div1 = document.createElement("div");

// // Append the newly created <div> element to #main
// main.appendChild(div1);

// // Create a new <h5> element
// var name1 = document.createElement("h5");

// // Append the newly created <h5> element to your new div
// div1.appendChild(name1);

// // Set the textContent to the first characters name
// name1.textContent = characters[0]["name"];

// // Create a new <p> element
// var survival1= document.createElement("p");

// // Append the newly created <p> element to your new div
// div1.appendChild(survival1);

// // Set the textContent to the first characters survival prob.
// survival1.textContent = "Survival %: " +characters[0]["probability_of_survival"] +"%";



for (var x = 0; x < characters.length; x++) {
    if(characters[x].name != "Arya Stark" ) {
        characters[x].probability_of_survival = halfSurvival(characters[x]);
    }
}

// Creating character divs
creatEachCharacterDiv();




// Implementation of the function
function halfSurvival(character) {
	return character.probability_of_survival * 0.5;
}

function debugCharacters() {
    for (var x = 0; x < characters.length; x++) {
        console.log("name: " + characters[x].name + " probability_of_survival: " + 
        characters[x].probability_of_survival);
    }
}

function creatEachCharacterDiv() {
    for (var x = 0; x < characters.length; x++) {
        // create new div for character
        var div = document.createElement("div");

        // append div to main parent div
        main.appendChild(div);

        // create header for character name
        var name = document.createElement("h5");
        
        // append name header to character div
        div.appendChild(name);

        // set text content for name header
        name.textContent = "Name: " + characters[x].name;

        // create paragraph for character house
        var house = document.createElement("p");

        // append house paragraph to character div
        div.appendChild(house)

        // set text for house 
        house.textContent = "House: " + characters[x].house;

        // create paragraph for character survival
        var probSurv = document.createElement("p");

        // append probability of survival paragraph to character div
        div.appendChild(probSurv)
        
        // set text for survival 
        probSurv.textContent = "Survival %: " + characters[x].probability_of_survival;

        // create paragraph for character status
        var status = document.createElement("p");

        // append status paragraph to character div
        div.appendChild(status)
         
        // set text for status
        status.textContent = "Status: " + characters[x].status;
    }
}
