
// Source script for the SFL-Bidding application 

// Player class defintiion


class Captain {
    constructor(capname, price,sqSize) {
        this.capname = capname; 
        this.price = price 
        this.sqSize = sqSize;
    }

    getprice(){
        return this.price;
    }  

    getSqSize(){
        return this.sqSize;
    }

    setPrice(k){
        this.price = k;
    }

    setSqSize(m){
        this.sqSize = m;
    }
}

class Player {

    constructor(name, year, position) {
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

var nankiCap = new Captain("Adwaiy", 200,0);
var chandaCap = new Captain("Mudit", 200,0);
var muskaanCap = new Captain("Santosh", 200,0);
var mishkaCap = new Captain("Shaurya", 200,0);
var punyaCap = new Captain("Tejas", 200,0); 


const mishkaPriceEl = document.getElementById("mishkaPrice");
mishkaPriceEl.textContent = mishkaCap.getprice();

const muskaanPriceEl = document.getElementById("muskaanPrice");
muskaanPriceEl.textContent = muskaanCap.getprice();

const nankiPriceEl = document.getElementById("nankiPrice"); 
nankiPriceEl.textContent = nankiCap.getprice(); 

const nss1 = document.getElementById("nss");
nss1.textContent = nankiCap.getSqSize();

const chandaPriceEl = document.getElementById("chandaPrice");
chandaPriceEl.textContent = chandaCap.getprice();

const vss1 = document.getElementById("vss"); 
vss1.textContent = chandaCap.getSqSize();

const punyaPriceEl = document.getElementById("punyaPrice");
punyaPriceEl.textContent = punyaCap.getprice();

const puss1 = document.getElementById("puss"); 
puss1.textContent = punyaCap.getSqSize();

const miss1 = document.getElementById("miss"); 
miss1.textContent = muskaanCap.getSqSize(); 

const arss1 = document.getElementById("arss"); 
arss1.textContent = mishkaCap.getSqSize(); 

const chandaSpending = document.getElementById("chandaspend"); 
chandaSpending.onclick = function() { changePrice(chandaCap, chandaPriceEl, vss1) }

const nankiSpending = document.getElementById("nankispend"); 
nankiSpending.onclick = function() {changePrice(nankiCap, nankiPriceEl, nss1)}

const muskaanSpending = document.getElementById("muskaanspend"); 
muskaanSpending.onclick = function() {changePrice(muskaanCap, muskaanPriceEl, miss1)}; 

const mishkaSpending = document.getElementById("mishkaspend");
mishkaSpending.onclick = function() {changePrice(mishkaCap, mishkaPriceEl, arss1)};

const punyaSpending = document.getElementById("punyaspend");
punyaSpending.onclick = function () {
    changePrice(punyaCap, punyaPriceEl, puss1)
};



function changePrice(a, b, c) {
    var userInput = prompt("Crores spent: ");

    // Parse the input to an integer
    var integerInput = parseInt(userInput, 10);

    if (isNaN(integerInput)) {
        integerInput = 0;}

    var newPrice = a.getprice() - integerInput;

    var nsq = a.getSqSize() + Math.sign(integerInput);

    a.setPrice(newPrice);
    a.setSqSize(nsq);
    b.textContent = a.getprice();
    c.textContent = a.getSqSize();
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
new Player("Yash Debnath", "SIAS 21-24", "Forward"),
new Player("Tannmay Kakkar", "SIAS 23-27", "Forward"),
new Player("Aparajith Kaushik", "SIAS 21-24", "Forward"),
new Player("Sanath Vasudevan Kadalayil", "SIAS 23-27", "Forward"),
new Player("Savir Nath Bhaduri", "SIAS 22-25", "Forward"),
new Player("Viraat Sinh", "SIAS 23-27", "Forward"),
new Player("Rohan Kalia", "SIAS 23-27", "Forward"),
new Player("Ganesh khadse ", "SIAS 23-27", "Forward"),
new Player("Raghav Govindarajan", "SIAS 23-27", "Forward"),
new Player("Aadit", "SIAS 23-27", "Forward"),
new Player("Arnav bhutani ", "SIAS 22-25", "Forward"),
new Player("Aditya Akash Trigunayat ", "SIAS 23-27", "Forward"),
new Player("Hemant", "SIAS 21-24", "Forward"),
new Player("Zouman Hashim (Shaanzal)", "SIAS 22-25", "Forward"),
new Player("Vignesh Girish Nair", "GSB BBA 23-26", "Forward"),
new Player("Anoop Yadav", "SIAS 21-24", "Forward"),
new Player("Nathan Upputuru", "SIAS 22-25", "Forward")

];

var midFieldArr = [
new Player("Manan Malik", "SIAS 23-27", "Midfielder"),
new Player("Aarnav Subbaramu", "SIAS 22-25", "Midfielder"),
new Player("Tanav", "SIAS 22-25", "Midfielder"),
new Player("Ayaan Bedi", "SIAS 21-24", "Midfielder"),
new Player("Granville Austin", "SIAS 22-25", "Midfielder"),
new Player("Neel Kadambi ", "GSB BBA 23-26", "Midfielder"),
new Player("Shivansh Anand", "SIAS 23-27", "Midfielder"),
new Player("Aman Shah", "SIAS 21-24", "Midfielder"),
new Player("Prakash John Mathew ", "SIAS 22-25", "Midfielder"),
new Player("Baalateja Kataru", "SIAS PG 23-24", "Midfielder"),
new Player("Prithvi Padathara ", "SIAS 21-24", "Midfielder")
];


var gkArr = [
new Player("yashh", "SIAS 21-24", "Goalkeeper"),
new Player("Sagar Garg ", "SIAS 22-25", "Goalkeeper"),
new Player("Eeshaan Ray", "SIAS 22-25", "Goalkeeper"),
new Player("Satyajit Mohan", "SIAS 23-27", "Goalkeeper"),
new Player("Adeeb Rahman", "SIAS 23-27", "Goalkeeper"),
new Player("Arnav V G", "SIAS 23-27", "Goalkeeper"),
new Player("Yazad Bhacka", "SIAS 22-25", "Goalkeeper"),
new Player("Akshat Mathur", "SIAS 22-25", "Goalkeeper")

];

var notSureArr = [
new Player("Rayyan Ali Khan", "SIAS 23-27", "Not sure"),
new Player("Anish Kumar", "SIAS 21-24", "Not sure"),
new Player("Tushar Agrawal", "SIAS 23-27", "Not sure"),
new Player("D.SAI SRIKAR", "SIAS 23-27", "Not sure"),
new Player("Sarim Shaikh ", "SIAS 23-27", "Not sure"),
new Player("Aditya Swami ", "SIAS 22-25", "Not sure"),
new Player("Jonath Kumar ", "SIAS 23-27", "Not sure"),
new Player("Vishesh Agarwal ", "SIAS 21-24", "Not sure"),
new Player("Pranav Jain", "SIAS 21-24", "Not sure"),
new Player("Arunachalam", "SIAS 21-24", "Not sure")
];

var playerArr2 = [];


// Randomize button which appears when one of them is clicked.
const randomize = document.getElementById("randomizer");

// Defenders button 
const defbutt = document.getElementById("defense").addEventListener('click', function() { defenseList("defense", defenderArr)});

const forbutt = document.getElementById("forwards").addEventListener('click', function(){ defenseList("forwards",forwardArr)});

const midbutt = document.getElementById("midfielders").addEventListener('click', function () { defenseList("midfielders", midFieldArr)});

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
            document.getElementById("adminAl").innerHTML = "All players sold! <br> Pick another category";
            document.getElementById("defList").replaceChildren();
        }
    }
}
