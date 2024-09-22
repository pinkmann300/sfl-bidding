// Source script for the SFL-Bidding application

// Player class defintiion


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

class Player {

    constructor(name, batch, position) {
        this.name = name;
        this.batch = batch;
        this.position = position;
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

var captain1 = new Captain("Mudit", 100, 0);
var captain2 = new Captain("Santosh", 100, 0);
var captain3 = new Captain("Shaurya", 98, 1);
var captain4 = new Captain("Tanmay", 100, 0);
var captain5 = new Captain("Sriram", 84, 2);
var captain6 = new Captain("Arnav", 100, 0);


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

function changePurse(a, b, c) {
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

const captain1_Spend = document.getElementById("cp1_Spend");
captain1_Spend.onclick = function () {
    changePurse(captain1, captain1_Purse, captain1_SqSize)
}

const captain2_Spend = document.getElementById("cp2_Spend");
captain2_Spend.onclick = function () {
    changePurse(captain2, captain2_Purse, captain2_SqSize)
}

const captain3_Spend = document.getElementById("cp3_Spend");
captain3_Spend.onclick = function () {
    changePurse(captain3, captain3_Purse, captain3_SqSize)
}

const captain4_Spend = document.getElementById("cp4_Spend");
captain4_Spend.onclick = function () {
    changePurse(captain4, captain4_Purse, captain4_SqSize)
}

const captain5_Spend = document.getElementById("cp5_Spend");
captain5_Spend.onclick = function () {
    changePurse(captain5, captain5_Purse, captain5_SqSize)
}

const captain6_Spend = document.getElementById("cp6_Spend");
captain6_Spend.onclick = function () {
    changePurse(captain6, captain6_Purse, captain6_SqSize)
};


// Hardcoded - sample player list.
const defenderList = [
    new Player("Sparsh Makharia", "Batsman"),
    new Player("Ishaan Agarwal", "Batsman"),
    new Player("Varun Raiji", "Batsman"),
    new Player("Arul Shankar", "Batsman"),
    new Player("Ganesh", "Batsman"),
    new Player("Ram Murari", "Batsman"),
    new Player("Aashil Patel", "Batsman"),
    new Player("Manan Malik", "Batsman"),
    new Player("Sparsh Makharia", "Batsman"),

    new Player("Arjun Baratan", "Batsman"),

    new Player("Tejas Narayan", "Batsman")
];

const forwardList = [
    new Player("Manav Sharma", "Fast Bowler"),
    new Player("Manav Sharma", "Fast Bowler"),
    new Player("Divij Doshi", "Fast Bowler"),
    new Player("Tushar Agrawal", "Fast Bowler"),
    new Player("Rohan Jacob", "Fast Bowler")

];

const midfielderList = [
    new Player("Sanath Kadalayil", "Wicket-Keeper"),
    new Player("Sabesan Solagar", "Wicket-Keeper"),
    new Player("Sanath Kadalayil", "Wicket-Keeper")

];

const keeperList =
    [
        new Player("Vedant Kollare", "All Rounder"),
        new Player("Sidhant dhere ", "All Rounder"),
        new Player("Sarim Shaikh ", "All Rounder"),
        new Player("Shivansh Anand", "All Rounder"),
        new Player("Vibhav Kapoor", "All Rounder"),
        new Player("Aditya Akash Trigunayat ", "All Rounder"),
        new Player("Raghav Govindarajan", "All Rounder"),
        new Player("Prakash John Mathew", "All Rounder"),
        new Player("Prithvi Singh", "All Rounder"),
        new Player("Adi Agarwal", "All Rounder"),
        new Player("Vedant Jhawar", "All Rounder"),
        new Player("Hemant Megavath", "All Rounder"),
        new Player("Pranav Jain", "All Rounder"),
        new Player("Ansh Bhargava", "All Rounder"),
        new Player("Mudit Kohli", "All Rounder"),
        new Player("Yaadhi", "All Rounder"),
        new Player("Dushyant Agarwal", "All Rounder"),
        new Player("Dhruv Sachin Lele ", "All Rounder"),
        new Player("Viraat Sinh ", "All Rounder"),
        new Player("Vignesh Girish Nair", "All Rounder"),
        new Player("Meet Tosaniwal ", "All Rounder"),
        new Player("Tarangg Kakkar", "All Rounder"),
        new Player("Anish Kumar", "All Rounder"),
        new Player("Pranav Vale", "All Rounder"),
        new Player("Yash Jhawar", "All Rounder")
    ];


// Randomize button which appears when one of them is clicked.
const randomize = document.getElementById("randomizer");

document.getElementById("keepers").addEventListener('click', function () {
    defenseList("keepers", keeperList)
});

document.getElementById("defense").addEventListener('click', function () {
    defenseList("defense", defenderList)
});

document.getElementById("forwards").addEventListener('click', function () {
    defenseList("forwards", forwardList)
});

document.getElementById("midfielders").addEventListener('click', function () {
    defenseList("midfielders", midfielderList)
});

const stopBid = document.querySelector("#stopbid");

const startBid = document.querySelector("#startbid");

function defenseList(a, b) {
    document.getElementById("playerDisp").style.display = "none";
    document.getElementById(a).disabled = true;
    document.getElementById("adminAl").style.display = "none";
    document.getElementById("defDis").style.display = "block";
    randomize.style.display = "block";

    let list = document.getElementById("defList");
    document.getElementById("defList").style.display = "block";


    for (let i = 0; i < (b.length); ++i) {
        let li = document.createElement('li');
        li.innerText = b[i].name;
        list.appendChild(li);
    }

    randomize.onclick = function () {
        randomizingDef(b)
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

    document.getElementById("startbid").disabled = true;
    document.getElementById("stopbid").disabled = true;

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
    document.getElementById("startbid").disabled = false;

    startBid.onclick = startBidding;

    function startBidding() {

        document.getElementById("bidalert").style.display = "block";
        document.getElementById("stopbid").disabled = false;
        stopBid.onclick = stopBidding;
    }

    function stopBidding() {
        if (playerArr2.length !== 0) {
            document.getElementById("stopbid").disabled = true;
            document.getElementById("bidalert").style.display = "none";
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
