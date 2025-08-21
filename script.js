// Source script for the SFL-Bidding application

// Captain and Player class definition
import {forwardList, keeperList, defenderList, midfielderList} from "./players.js";

class Captain {

    constructor(name, purse, sqSize) {
        this.name = name;
        this.purse = purse
        this.sqSize = sqSize;
    }

    setPurse(k) {
        this.purse = k;
    }

    setSqSize(m) {
        this.sqSize = m;
    }
}

// Common functions 

// Shuffle array - takes an array as a parameter and returns an array with the elements shuffled. 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

// Hardcode - captains list 

var captain1 = new Captain("Punya", 180, 0);
var captain2 = new Captain("Vignesh", 180, 0);
var captain3 = new Captain("Arul", 180, 0);
var captain4 = new Captain("Vale", 180, 0);
var captain5 = new Captain("Adi", 180, 0);
var captain6 = new Captain("Anvit", 180, 0);
var captain7 = new Captain("Satya", 180, 0);
var captain8 = new Captain("Ganesh", 180, 0);


// Display captain names

const captain1_Name = document.getElementById("cp1_Name");
captain1_Name.textContent = captain1.name;

const captain2_Name = document.getElementById("cp2_Name");
captain2_Name.textContent = captain2.name;

const captain3_Name = document.getElementById("cp3_Name");
captain3_Name.textContent = captain3.name;

const captain4_Name = document.getElementById("cp4_Name");
captain4_Name.textContent = captain4.name;

const captain5_Name = document.getElementById("cp5_Name");
captain5_Name.textContent = captain5.name;

const captain6_Name = document.getElementById("cp6_Name");
captain6_Name.textContent = captain6.name;

const captain7_Name = document.getElementById("cp7_Name");
captain7_Name.textContent = captain7.name;

const captain8_Name = document.getElementById("cp8_Name");
captain8_Name.textContent = captain8.name;


// Display captain purse amounts

const captain1_Purse = document.getElementById("cp1_Purse");
captain1_Purse.textContent = captain1.purse;

const captain2_Purse = document.getElementById("cp2_Purse");
captain2_Purse.textContent = captain3.purse;

const captain3_Purse = document.getElementById("cp3_Purse");
captain3_Purse.textContent = captain2.purse;

const captain4_Purse = document.getElementById("cp4_Purse");
captain4_Purse.textContent = captain4.purse;

const captain5_Purse = document.getElementById("cp5_Purse");
captain5_Purse.textContent = captain5.purse;

const captain6_Purse = document.getElementById("cp6_Purse");
captain6_Purse.textContent = captain6.purse;

const captain7_Purse = document.getElementById("cp7_Purse");
captain7_Purse.textContent = captain7.purse;

const captain8_Purse = document.getElementById("cp8_Purse");
captain8_Purse.textContent = captain8.purse;


// Display captain squad sizes

const captain1_SqSize = document.getElementById("cp1_SqSize");
captain1_SqSize.textContent = captain1.sqSize;

const captain2_SqSize = document.getElementById("cp2_SqSize");
captain2_SqSize.textContent = captain2.sqSize;

const captain3_SqSize = document.getElementById("cp3_SqSize");
captain3_SqSize.textContent = captain3.sqSize;

const captain4_SqSize = document.getElementById("cp4_SqSize");
captain4_SqSize.textContent = captain4.sqSize;

const captain5_SqSize = document.getElementById("cp5_SqSize");
captain5_SqSize.textContent = captain5.sqSize;

const captain6_SqSize = document.getElementById("cp6_SqSize");
captain6_SqSize.textContent = captain6.sqSize;

const captain7_SqSize = document.getElementById("cp7_SqSize");
captain7_SqSize.textContent = captain7.sqSize;

const captain8_SqSize = document.getElementById("cp8_SqSize");
captain8_SqSize.textContent = captain8.sqSize;


// Function to simulate a captain buying a player

function buyPlayer(a, b, c) {
    let userInput = prompt("Crores spent: ");

    // Parse the input to an integer
    let integerInput = parseInt(userInput, 10);

    if (isNaN(integerInput)) {
        integerInput = 0;
    }

    let newPurse = a.purse - integerInput;

    let nsq = a.sqSize + Math.sign(integerInput);

    a.setPurse(newPurse);
    a.setSqSize(nsq);
    b.textContent = a.purse;
    c.textContent = a.sqSize;
}


// Display captain spend buttons

const captain1_Spend = document.getElementById("cp1_Spend");
captain1_Spend.onclick = function () {
    buyPlayer(captain1, captain1_Purse, captain1_SqSize)
}

const captain2_Spend = document.getElementById("cp2_Spend");
captain2_Spend.onclick = function () {
    buyPlayer(captain2, captain2_Purse, captain2_SqSize)
}

const captain3_Spend = document.getElementById("cp3_Spend");
captain3_Spend.onclick = function () {
    buyPlayer(captain3, captain3_Purse, captain3_SqSize)
}

const captain4_Spend = document.getElementById("cp4_Spend");
captain4_Spend.onclick = function () {
    buyPlayer(captain4, captain4_Purse, captain4_SqSize)
}

const captain5_Spend = document.getElementById("cp5_Spend");
captain5_Spend.onclick = function () {
    buyPlayer(captain5, captain5_Purse, captain5_SqSize)
}

const captain6_Spend = document.getElementById("cp6_Spend");
captain6_Spend.onclick = function () {
    buyPlayer(captain6, captain6_Purse, captain6_SqSize)
};

const captain7_Spend = document.getElementById("cp7_Spend");
captain7_Spend.onclick = function () {
    buyPlayer(captain7, captain7_Purse, captain7_SqSize)
}

const captain8_Spend = document.getElementById("cp8_Spend");
captain8_Spend.onclick = function () {
    buyPlayer(captain8, captain8_Purse, captain8_SqSize)
};



// Randomize button which appears when one of them is clicked.
const randomize = document.getElementById("randomizer");

document.getElementById("keepers").addEventListener('click', function () {
    addList("keepers", keeperList)
});

document.getElementById("defense").addEventListener('click', function () {
    addList("defense", defenderList)
});

document.getElementById("forwards").addEventListener('click', function () {
    addList("forwards", forwardList)
});

document.getElementById("midfielders").addEventListener('click', function () {
    addList("midfielders", midfielderList)
});

const stopBid = document.querySelector("#stopbid");

// const startBid = document.querySelector("#startbid");

function addList(a, b) {
    document.getElementById("playerDisp").style.display = "none";
    document.getElementById("adminAl").style.display = "none";
    document.getElementById("defDis").style.display = "block";
    randomize.style.display = "block";


    let list = document.getElementById("defList");
    list.innerHTML = ""; // Clear the list before adding new items
    document.getElementById("defList").style.display = "block";

    for (let i = 0; i < (b.length); ++i) {
        let li = document.createElement('li');
        li.innerText = b[i].name;
        list.appendChild(li);
    }

    randomize.onclick = function () {
        randomizingDef(b)
        document.getElementById(a).disabled = true;
    }
    // Passes the rest of the function to randomizing.
}

var playerArr2 = [];

function randomizingDef(arrw) {

    playerArr2 = shuffleArray(arrw);
    document.getElementById("defList").style.display = "none";
    document.getElementById("randef").style.display = "block";

    document.getElementById("playerDisp").style.display = "block";
    randomize.style.display = "none";

    // document.getElementById("startbid").disabled = true;
    document.getElementById("stopbid").disabled = true;
    document.getElementById("stopbid").style.visibility = "hidden";

    document.getElementById("adminops").style.display = "inline-block";
    document.getElementById("startauc").style.visibility = "visible";
    document.getElementById("purseTable").style.display = "block";

    displayPlayer(playerArr2[0]);
    playerArr2 = playerArr2.slice(1);

    const startAuc = document.querySelector("#startauc");
    startAuc.onclick = startAuction;

}


function displayPlayer(playa) {
    const playerName = document.getElementById("playerName");
    playerName.innerHTML = " " + (playa).name;
    const playerBatch = document.getElementById("playerBatch");
    playerBatch.innerHTML = " " + (playa).batch;
}


function startAuction() {
    // Awaiting implementation 

    document.getElementById("startauc").style.visibility = "hidden";
    document.getElementById("stopbid").style.visibility = "visible";
    // document.getElementById("startbid").disabled = false;

    //startBid.onclick = startBidding;

    // function startBidding() {

    //     document.getElementById("bidalert").style.display = "block";
    //     document.getElementById("stopbid").disabled = false;
    //     stopBid.onclick = stopBidding;
    // }

    document.getElementById("bidalert").style.display = "block";
    document.getElementById("stopbid").disabled = false;
    stopBid.onclick = stopBidding;
    

    function stopBidding() {
        if (playerArr2.length !== 0) {
            // document.getElementById("stopbid").disabled = true;
            // document.getElementById("bidalert").style.display = "none";
            displayPlayer(playerArr2[0]);
            playerArr2 = playerArr2.slice(1);
        } else {
            document.getElementById("bidalert").style.display = "none";
            document.getElementById("adminops").style.display = "none";
            document.getElementById("defDis").style.display = "none";
            document.getElementById("adminAl").style.display = "block";
            document.getElementById("adminAl").innerHTML = "All players sold! <br> Pick another category";
            document.getElementById("defList").replaceChildren();
        }
    }
}
