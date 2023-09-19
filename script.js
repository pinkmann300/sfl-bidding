
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

    getPrize(){
        return this.prize;
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


// Hardcoded - sample player list.
var playerArr = [
    new Player("Punya Chowksey", "2020-2025", "Hi, Im Punya", "Defender"),
    new Player("Sagar Bhargava", "2020-2023", "Hi,Im sagar", "Defender"),
    new Player("Aatmesh Govind", "2023-2024", "Im aatmesh", "Defender")
];


var forwardArr = [
    new Player("Tanav Vedantam", "2020-2025", "Hi, Im Punya", "Defender"),
    new Player("Darshan Ramakrishnan", "2020-2023", "Hi,Im sagar", "Defender"),
    new Player("Sandeep Chezhian A", "2023-2024", "Im aatmesh", "Defender")
];


var midFieldArr = [
    new Player("Pranav Vale", "2020-2025", "Hi, Im Punya", "Defender"),
    new Player("Alan", "2020-2023", "Hi,Im sagar", "Defender"),
    new Player("Arul Shankar", "2023-2024", "Im aatmesh", "Defender")
];

var gkArr = [
    new Player("Mihir Vivek", "2020-2025", "Hi, Im Punya", "Defender"),
    new Player("Vedant Oswal", "2020-2023", "Hi,Im sagar", "Defender"),
    new Player("Ramamoorthi", "2023-2024", "Im aatmesh", "Defender")
];

var notSureArr = [
    new Player("Anish Kumar", "2020-2025", "Hi, Im Punya", "Defender"),
    new Player("Nivedita Venkatesh", "2020-2023", "Hi,Im sagar", "Defender"),
    new Player("Sahil Borse", "2023-2024", "Im aatmesh", "Defender")
];

var playerArr2 = [];


// Randomize button which appears when one of them is clicked.
const randomize = document.getElementById("randomizer");

// Defenders button 
const defbutt = document.getElementById("defense").addEventListener('click', function() { defenseList("defense", playerArr)});

const forbutt = document.getElementById("forwards").addEventListener('click', function(){ defenseList("forwards",forwardArr)});


const midbutt = document.getElementById("midfielders").addEventListener('click', function () {
    defenseList("midfielders", midFieldArr)
});


const notsurebutt = document.getElementById("notsure").addEventListener('click', function () {
    defenseList("notsure", notSureArr)
});


const gkbutt = document.getElementById("goalkeepers").addEventListener('click', function () {
    defenseList("goalkeepers", gkArr)
})

const stopBid = document.querySelector("#stopbid");
const startBid = document.querySelector("#startbid");

function defenseList(a,b){
    document.getElementById("playerDisp").style.display = "none";
    document.getElementById(a).disabled = true;
    document.getElementById("adminAl").style.display = "none"; 
    document.getElementById("defDis").style.display="block";
    randomize.style.display = "block";

    let list = document.getElementById("defList");
    document.getElementById("defList").style.display = "block";


    for (i = 0; i < (b.length); ++i) {
        var li = document.createElement('li');
        li.innerText = b[i].getName();
        list.appendChild(li);
    }   
    
    randomize.onclick = function(){randomizingDef(b)}
    // Passes the rest of the function to randomizing. 
}


function randomizingDef(arrw){
    playerArr2 = shuffleArray(arrw);
    document.getElementById("defList").style.display = "none";
    document.getElementById("randef").style.display = "block";

    document.getElementById("playerDisp").style.display = "block";
    randomize.style.display = "none";

    document.getElementById("startbid").disabled = true;
    document.getElementById("stopbid").disabled = true;

    document.getElementById("adminops").style.display = "inline-block";
    document.getElementById("startauc").style.visibility = "visible";
    displayPlayer(playerArr2[0]);
    playerArr2 = playerArr2.slice(1);

    const startAuc = document.querySelector("#startauc");
    startAuc.onclick = startAuction;

}



function displayPlayer(playa){   
    const player = document.getElementById("playerName"); 
    let displayInfo =  " " + (playa).getName();
    const playerAge = document.getElementById("year");
    player.innerHTML = displayInfo; 
    playerAge.innerHTML = playa.getYear();      
}


function startAuction(){
    // Awaiting implementation 
    document.getElementById("startauc").style.visibility="hidden"; 
    document.getElementById("startbid").disabled = false; 
    
    startBid.onclick = startBidding; 

    function startBidding(){

        document.getElementById("bidalert").style.display = "block";
        document.getElementById("stopbid").disabled = false;
        stopBid.onclick = stopBidding;
    }

    function stopBidding(){
        if (playerArr2.length != 0)
        {
            document.getElementById("stopbid").disabled = true;
            document.getElementById("bidalert").style.display ="none";
            displayPlayer(playerArr2[0]);
            playerArr2 = playerArr2.slice(1);
        } 
        else {
            document.getElementById("bidalert").style.display = "none";
            document.getElementById("adminops").style.display = "none";
            document.getElementById("defDis").style.display = "none";
            document.getElementById("adminAl").style.display = "block";
            document.getElementById("adminAl").innerText = "All players sold! Pick another category";
            document.getElementById("defList").replaceChildren();
        }
    }
}


