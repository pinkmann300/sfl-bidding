
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
        this.position = position;
        this.prize = 0;
    }

    getName() {
        return this.name;
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

var chandaCap = new Captain("Mudit", 100,0);
var muskaanCap = new Captain("Santosh", 98,1);
var mishkaCap = new Captain("Shaurya", 100,0);
var punyaCap = new Captain("Tanmay", 100,0); 
var sriramCap = new Captain("Sriram", 84,2);
var arnavCap = new Captain("Arnav", 100,0);


const mishkaPriceEl = document.getElementById("mishkaPrice");
mishkaPriceEl.textContent = mishkaCap.getprice();

const muskaanPriceEl = document.getElementById("muskaanPrice");
muskaanPriceEl.textContent = muskaanCap.getprice();

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

const sriPriceEl = document.getElementById("sriPrice"); 
sriPriceEl.textContent = sriramCap.getprice();

const suss1 = document.getElementById("suss"); 
suss1.textContent = sriramCap.getSqSize();

const arnavPriceEl = document.getElementById("arnavPrice");
arnavPriceEl.textContent = arnavCap.getprice();

const ass1 = document.getElementById("ass"); 
ass1.textContent = arnavCap.getSqSize();

const chandaSpending = document.getElementById("chandaspend"); 
chandaSpending.onclick = function() { changePrice(chandaCap, chandaPriceEl, vss1) }

const muskaanSpending = document.getElementById("muskaanspend"); 
muskaanSpending.onclick = function() {changePrice(muskaanCap, muskaanPriceEl, miss1)}; 

const mishkaSpending = document.getElementById("mishkaspend");
mishkaSpending.onclick = function() {changePrice(mishkaCap, mishkaPriceEl, arss1)};

const punyaSpending = document.getElementById("punyaspend");
punyaSpending.onclick = function () {
    changePrice(punyaCap, punyaPriceEl, puss1)
};

const sriramSpending = document.getElementById("sriramspend");
sriramSpending.onclick = function () {
    changePrice(sriramCap, sriPriceEl, suss)
};

const arnavSpending = document.getElementById("arnavspend");
arnavSpending.onclick = function () {
    changePrice(arnavCap, arnavPriceEl, ass)
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
var batArr = [
   new Player ("Sparsh Makharia","Batsman"  ),
  new Player ("Ishaan Agarwal","Batsman"  ),
  new Player ("Varun Raiji","Batsman"  ),
  new Player ("Arul Shankar ","Batsman"  ),
  new Player ("Ganesh","Batsman"  ),
  new Player ("Ram Murari ","Batsman"  ),
  new Player ("Aashil Patel","Batsman"  ),
  new Player ("Manan Malik","Batsman"  ),
  new Player ("Sparsh Makharia","Batsman"  ),

  new Player ("Arjun Baratan","Batsman"  ),

  new Player ("Tejas Narayan","Batsman"  )
];

var fbArr = [
 new Player("Manav Sharma ","Fast Bowler"  ),
  new Player("Manav Sharma","Fast Bowler"  ),
  new Player("Divij Doshi","Fast Bowler"  ),
  new Player("Tushar Agrawal","Fast Bowler"  ),
  new Player("Rohan Jacob","Fast Bowler"  )

];

var wkArr = [
 new Player ("Sanath Kadalayil","Wicket-Keeper" ),
  new Player ("Sabesan Solagar","Wicket-Keeper"  ),
  new Player ("Sanath Kadalayil","Wicket-Keeper"  )

];

var arArr = 
[
      new Player ("Vedant Kollare","All Rounder"  ),
  new Player ("Sidhant dhere ","All Rounder"  ),
  new Player ("Sarim Shaikh ","All Rounder"  ),
  new Player ("Shivansh Anand","All Rounder"  ),
  new Player ("Vibhav Kapoor","All Rounder"  ),
  new Player ("Aditya Akash Trigunayat ","All Rounder"  ),
  new Player ("Raghav Govindarajan","All Rounder"  ),
  new Player ("Prakash John Mathew","All Rounder"  ),
  new Player ("Prithvi Singh","All Rounder"  ),
  new Player ("Adi Agarwal","All Rounder"  ),
  new Player ("Vedant Jhawar","All Rounder"  ),
  new Player ("Hemant Megavath","All Rounder"  ),
  new Player ("Pranav Jain","All Rounder"  ),
  new Player ("Ansh Bhargava","All Rounder"  ),
  new Player ("Mudit Kohli","All Rounder"  ),
  new Player ("Yaadhi","All Rounder"  ),
  new Player ("Dushyant Agarwal","All Rounder"  ),
  new Player ("Dhruv Sachin Lele ","All Rounder"  ),
  new Player ("Viraat Sinh ","All Rounder"  ),
  new Player ("Vignesh Girish Nair","All Rounder"  ),
  new Player ("Meet Tosaniwal ","All Rounder"  ),
  new Player ("Tarangg Kakkar","All Rounder"  ),
  new Player ("Anish Kumar","All Rounder"  ),
  new Player ("Pranav Vale","All Rounder"  ),
  new Player ("Yash Jhawar","All Rounder"  )
]; 

var sbArr = [
      new Player("Yazad Bhacka","Spin Bowler"  ),
  new Player("Siddharth Nagarajan","Spin Bowler"  ),
  new Player("Sai Srikar Dayana","Spin Bowler"  ),
  new Player("Ayaan Bedi","Spin Bowler"  )
];


var nsArr = [
      new Player("Rohit Sriram","Not Sure"  ),
  new Player("Abhay Vasishta V ","Not Sure"  ),
  new Player("Pranav Ramamoorthi","Not Sure"  ),
  new Player("Raghav Kathane","Not Sure"  ),
  new Player("Sunny Bind ","Not Sure"  ),
  new Player("Dheer Panjwani ","Not Sure"  ),
  new Player("Arunachalam","Not Sure"  ),
  new Player("Vatsalya Betala","Not Sure"  ),
  new Player("Baalateja Kataru","Not Sure"  ),
  new Player("Nathan Upputuru","Not Sure"  ),
  new Player("Tanav Vedantam ","Not Sure"  ),
  new Player("Aatmesh Govind ","Not Sure"  ),
  new Player("Punya Chowksey ","Not Sure"  ),
  new Player("Akhilesh V","Not Sure"  )
];


var playerArr2 = [];


// Randomize button which appears when one of them is clicked.
const randomize = document.getElementById("randomizer");

// Defenders button 
const defbutt = document.getElementById("defense").addEventListener('click', function() { defenseList("defense", batArr)});

const forbutt = document.getElementById("forwards").addEventListener('click', function(){ defenseList("forwards",fbArr)});

const midbutt = document.getElementById("midfielders").addEventListener('click', function () { defenseList("midfielders", wkArr)});


const arbutt = document.getElementById("ar").addEventListener('click', function () { defenseList("ar", arArr)});
const sbbutt = document.getElementById("sb").addEventListener('click', function () { defenseList("sb", sbArr)});
const nsbutt = document.getElementById("nots").addEventListener('click', function () { defenseList("nots", nsArr)});
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
    player.innerHTML = displayInfo;      
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
