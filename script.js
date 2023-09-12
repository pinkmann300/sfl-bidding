
// Source script for the SFL-Bidding application 

// Player class defintiion

class Player {

    constructor(name, year, playerDes, position) {
        this.name = name;
        this.year = year;
        this.playerDes = playerDes;
        this.position = position;
        this.prize = 0;
    }

    getName() {
        return this.name;
    }

    getYear() {
        return this.year;
    }

    getPlayerDesc() {
        return this.playerDes;
    }
}


// Common functions 


// Shuffle array - takes an array as a parameter and returns an array with the elements shuffled. 
function shuffleArray(array) {
    for(var i = array.length - 1; i > 0; i--) {
        // Generate random number
        var j = Math.floor(Math.random() *(i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}


// Defenders button 
const defbutt = document.querySelector("#defense");
defbutt.onclick = defenseList; 

// Forwards button 
const forbutt = document.querySelector("#forwards"); 
forbutt.onclick = forwardsList; 

// Midfielders button
const midbutt = document.querySelector("#midfielders"); 
midbutt.onclick = midList; 

// Goalkeepers button
const gkbutt = document.querySelector("#goalkeepers"); 
gkbutt.onclick = goalist;

// Randomize button which appears when one of them is clicked.
const randomize = document.getElementById("randomizer");

// Hardcoded - sample player list.
var playerArr = [
    new Player("Punya Chowksey", "2020-2025", "Hi, Im Punya", "Defender"),
    new Player("Sagar", "2020-2023", "Hi,Im sagar", "Defender"),
    new Player("Aatmesh", "2023-2024", "Im aatmesh", "Defender")
];


function defenseList(){

    defbutt.disabled = true;
    document.getElementById("adminAl").style.display = "none"; 
    document.getElementById("defDis").style.display="block";

    let list = document.getElementById("defList");

    for (i = 0; i < playerArr.length; ++i) {
        var li = document.createElement('li');
        li.innerText = playerArr[i].getName();
        list.appendChild(li);
    }   
   
    randomize.onclick = randomizing; 
    // Passes the rest of the function to randomizing. 
}


function randomizing(){
    playerArr = shuffleArray(playerArr);
    document.getElementById("defList").style.display = "none"; 
    document.getElementById("randef").style.display = "block";

    let listy = document.getElementById("randef");

    //var li = document.createElement('li');
    //li.innerText = playerArr[0].getName();
    //listy.appendChild(li);

    document.getElementById("playerDisp").style.display = "block";
    randomize.style.display = "none";
    displayPlayer(playerArr);

}


function displayPlayer(arr2){   

    const player = document.getElementById("playerName"); 
    let displayInfo =  " " + (arr2[0]).getName();
    const playerAge = document.getElementById("year");
    player.innerHTML = displayInfo; 
    playerAge.innerHTML = arr2[0].getYear(); 
}




// 


// Functions awaiting complete implementation. 
function forwardsList(){
    console.log("Forwards has been clicked!");
}

function midList(){
    console.log("Midfielders have been clicked!"); 
}

function goalist(){
    console.log("Goalkeepers have been clicked!"); 
}

function notsure(){
    console.log("Not sure has been clicked!");
}

function login() {
    console.log('Logging in!')
}
