
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
  new Player("Aatmesh Govind","SIAS 20-23","Tier A"  ),
  new Player("Anish Kumar","SIAS 21-24","Tier A"  ),
  new Player("Aditya Swami","SIAS 22-25","Tier A"  ),
  new Player("Savir Nath Bhaduri","SIAS 22-25","Tier A"  ),
  new Player("Pranav Vale","SIAS 21-24","Tier A"  ),
  new Player("Shivansh Anand","SIAS 23-27","Tier A"  ),
  new Player("Adeeb Rahman","SIAS 23-27","Tier A"  )

];

var forwardArr = [
  new Player("Akhilesh Viswanathan","SIAS 23-27","Tier B"  ),
  new Player("Ishaan Kurian","SIAS 23-27","Tier B"  ),
  new Player("Manan Malik","SIAS 23-27","Tier B"  ),
  new Player("Ayaan Bedi","SIAS 21-24","Tier B"  ),
  new Player("Agnij P","SIAS 21-24","Tier B"  ),
  new Player("Suryansh Tripathi","SIAS 23-27","Tier B"  ),
  new Player("Aryan Grang","SIAS 23-27","Tier B"  ),
  new Player("Aarhaan Shah","SIAS 23-27","Tier B"  ),
  new Player("Ansh Bhargava","SIAS 22-25","Tier B"  ),
  new Player("Tejas Narayan","SIAS 22-25","Tier B"  ),
  new Player("Kartikeya Tanav Vedantam","SIAS 22-25","Tier B"  ),
  new Player("Pranav Jain","SIAS 21-24","Tier B"  ),
  new Player("Raghav Kathane","SIAS 23-27","Tier B"  ),
  new Player("Sabby Solagar","SIAS 23-27","Tier B"  ),
  new Player("Aman Shah","SIAS 21-24","Tier B"  )

];

var midFieldArr = [
  new Player("Tarangg Kakkar","SIAS 23-27","Tier C"  ),
  new Player("Sandeep Chezhian A","SIAS 20-23","Tier C"  ),
  new Player("Satya","SIAS 23-27","Tier C"  ),
  new Player("Dev Thomas","SIAS 22-25","Tier C"  ),
  new Player("Hriday Shankar","SIAS 23-27","Tier C"  ),
  new Player("Pranav Ramamoorthi","SIAS 21-24","Tier C"  ),
  new Player("Arjun Viswanathan","SIAS 23-27","Tier C"  ),
  new Player("Ayushman Kautilya Vardhan","SIAS 23-27","Tier C"  ),
  new Player("Vishnu Peri","SIAS 23-27","Tier C"  ),
  new Player("Vidur Ramasubramanian","SIAS 22-25","Tier C"  ),
  new Player("Aadit Jain","SIAS 23-27","Tier C"  ),
  new Player("Vir Mohan","SIAS 22-25","Tier C"  ),
  new Player("Arnav Bajoria","SIAS 23-27","Tier C"  ),
  new Player("Tannmay Kakkar","SIAS 23-27","Tier C"  )
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
