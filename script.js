
// Source script for the SFL-Bidding application 

// Player class defintiion


class Captain {
    constructor(capname, price) {
        this.capname = capname; 
        this.price = price 
    }

    getprice(){
        return this.price;
    }  

    setPrice(k){
        this.price = k;
    }
}

class Player {

    constructor(name, year, playerDes, position) {
        this.name = name;
        this.year = year;
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

// Hardcode - captains list 

var nankiCap = new Captain("Nanki Puri", 150);
var chandaCap = new Captain("Chanda Kumari", 150);
var muskaanCap = new Captain("Muskaan Singh", 150);
var mishkaCap = new Captain("Mishka Katyayan", 150);
var punyaCap = new Captain("Punya Chowksey", 150); 
var adiCap = new Captain("Adi Agarwal", 150);
var aryaCap = new Captain("Arya Dutta", 150); 
var govindCap = new Captain("Govind", 150); 


const mishkaPriceEl = document.getElementById("mishkaPrice");
mishkaPriceEl.textContent = mishkaCap.getprice();

const muskaanPriceEl = document.getElementById("muskaanPrice");
muskaanPriceEl.textContent = muskaanCap.getprice();

const nankiPriceEl = document.getElementById("nankiPrice"); 
nankiPriceEl.textContent = nankiCap.getprice(); 

const chandaPriceEl = document.getElementById("chandaPrice");
chandaPriceEl.textContent = chandaCap.getprice();

const punyaPriceEl = document.getElementById("punyaPrice");
punyaPriceEl.textContent = punyaCap.getprice();

const adiPriceEl = document.getElementById("adiPrice");
adiPriceEl.textContent = adiCap.getprice();

const aryaPriceEl = document.getElementById("aryaPrice");
aryaPriceEl.textContent = aryaCap.getprice();

const govindPriceEl = document.getElementById("govindPrice");
govindPriceEl.textContent = govindCap.getprice();



const chandaSpending = document.getElementById("chandaspend"); 
chandaSpending.onclick = function() { changePrice(chandaCap, chandaPriceEl) }

const nankiSpending = document.getElementById("nankispend"); 
nankiSpending.onclick = function() {changePrice(nankiCap, nankiPriceEl)}

const muskaanSpending = document.getElementById("muskaanspend"); 
muskaanSpending.onclick = function() {changePrice(muskaanCap, muskaanPriceEl)}; 

const mishkaSpending = document.getElementById("mishkaspend");
mishkaSpending.onclick = function() {changePrice(mishkaCap, mishkaPriceEl)};

const punyaSpending = document.getElementById("punyaspend");
punyaSpending.onclick = function () {
    changePrice(punyaCap, punyaPriceEl)
};

const adiSpending = document.getElementById("adispend");
adiSpending.onclick = function () {
    changePrice(adiCap, adiPriceEl)
};

const aryaSpending = document.getElementById("aryaspend");
aryaSpending.onclick = function () {
    changePrice(aryaCap, aryaPriceEl)
};

const govindSpending = document.getElementById("govindspend");
govindSpending.onclick = function () {
    changePrice(govindCap, govindPriceEl)
};



function changePrice(a, b) {
    var userInput = prompt("Crores spent: ");

    // Parse the input to an integer
    var integerInput = parseInt(userInput, 10);

    if (isNaN(integerInput)) {
        integerInput = 0;}

    var newPrice = a.getprice() - integerInput;
    a.setPrice(newPrice);
    b.textContent = a.getprice();
}

// Hardcoded - sample player list.
var defenderArr = [
new Player("Sagar Bhargava", "SIAS PG 23-24", "Defender"),
new Player("Shambo Mukherjee", "SIAS 23-27", "Defender"),
new Player("Pranav Harikrishnan", "SIAS 22-25", "Defender"),
new Player("Anirudh reddy", "SIAS 23-27", "Defender"),
new Player("Divij Doshi", "SIAS 21-24", "Defender"),
new Player("Rohan John Jacob", "SIAS 23-27", "Defender"),
new Player("Tarangg Kakkar ", "SIAS 23-27", "Defender"),
new Player("Aarhaan Shah", "SIAS 23-27", "Defender"),
new Player("Kunsh Khanna", "SIAS 21-24", "Defender"),
new Player("Vir Mohan ", "SIAS 22-25", "Defender"),
new Player("Varun Raiji", "SIAS 22-25", "Defender"),
new Player("Aditya Shivakumar", "SIAS 23-27", "Defender"),
new Player("Akhilesh Viswanathan", "SIAS 23-27", "Defender"),
new Player("Monu Rathore", "SIAS 22-25", "Defender"),
new Player("Navneet ", "SIAS 23-27", "Defender"),
new Player("Vihaan Shah", "SIAS 21-24", "Defender"),
new Player("Aaryan Garg", "SIAS PG 23-24", "Defender"),
new Player("R Vishal Krishnan", "SIAS 23-27", "Defender"),
new Player("Joseph Antony George", "SIAS 23-27", "Defender"),
new Player("Arjun Baratan", "SIAS 22-25", "Defender"),
new Player("Pranav Ramamoorthi", "SIAS 21-24", "Defender"),
new Player("Aryaan Jeppu", "SIAS 22-25", "Defender"),
new Player("Meghnad Dadgupta", "SIAS 21-24", "Defender"),
new Player("Arnav Goel", "SIAS 23-27", "Defender"),
new Player("Pranav Rawal ", "SIAS 22-25", "Defender"),
new Player("Abhay Vasishta V ", "SIAS 21-24", "Defender"),
new Player("Vedant Oswal ", "SIAS 21-24", "Defender"),
new Player("Aryaan Nanda", "SIAS 21-24", "Defender"),
new Player("Alan", "SIAS 22-25", "Defender"),
new Player("Santosh Kandhan", "SIAS 20-23", "Defender")
];

var forwardArr = [
    new Player("Satvika Singh", "SIAS 22-25", "Forward"),
    new Player("Isha Raghav ", "SIAS 22-25", "Forward"),
    new Player("Seema ", "SIAS PG 23-24", "Forward"),
    new Player("Uditi Krishna", "SIAS 21-24", "Forward")
];

var midFieldArr = [
    new Player("Ananya Sethi", "SIAS 21-24", "Midfielder"),
    new Player("sumedha  ", "SIAS 22-25", "Midfielder"),
    new Player("Manisha ", "SIAS 23-27", "Midfielder"),
    new Player("Priyanka Acharya ", "SIAS 21-24", "Midfielder"),
    new Player("Aarna Chugh", "SIAS 21-24", "Midfielder"),
    new Player("Suhaava Kooner", "SIAS 21-24", "Midfielder")
];

var gkArr = [
    new Player("Neha Dileep", "SIAS 22-25", "Goalkeeper"),
    new Player("Laranya Sunil kodkani ", "SIAS 23-27", "Goalkeeper"),
    new Player("Emel  sarbatwalla", "SIAS 23-27", "Goalkeeper"),
    new Player("sneham", "SIAS 21-24", "Goalkeeper"),
    new Player("Denuka Venkataraman ", "SIAS 23-27", "Goalkeeper"),
    new Player("Aakansha ", "SIAS 22-25", "Goalkeeper"),
    new Player("Shrawani Deshmukh ", "SIAS 22-25", "Goalkeeper")
];

var notSureArr = [
    new Player("Ananya Gudaloor ", "SIAS 21-24", "Not sure"),
    new Player("verainya priyankar ", "SIAS 22-25", "Not sure"),
    new Player("Ahanya Appaiah", "SIAS 21-24", "Not sure"),
    new Player("Inayat Beri ", "SIAS 21-24", "Not sure"),
    new Player("Muskan Aneja", "SIAS 22-25", "Not sure")
];

var playerArr2 = [];


// Randomize button which appears when one of them is clicked.
const randomize = document.getElementById("randomizer");

// Defenders button 
const defbutt = document.getElementById("defense").addEventListener('click', function() { defenseList("defense", defenderArr)});

const forbutt = document.getElementById("forwards").addEventListener('click', function(){ defenseList("forwards",forwardArr)});

const midbutt = document.getElementById("midfielders").addEventListener('click', function () { defenseList("midfielders", midFieldArr)});

const notsurebutt = document.getElementById("notsure").addEventListener('click', function () { defenseList("notsure", notSureArr)});

const gkbutt = document.getElementById("goalkeepers").addEventListener('click', function () { defenseList("goalkeepers", gkArr)})

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
    document.getElementById("purseTable").style.display = "block";

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



