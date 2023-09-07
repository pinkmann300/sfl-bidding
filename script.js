
// Source script for the SFL-Bidding application 

var dict = {"Dushyant" : "dushyagg",
            "Pranav Vale" : "pravale", 
            "admin" : "sagarb1" };


class Player{
    constructor(name, year, playerDes, position){
        this.name = name; 
        this.year = year; 
        this.playerDes = playerDes; 
        this.position = position; 
        this.prize = 0; 
    }

    getName(){
        return this.name;
    }

}
            
let playerArr = [new Player("Punya","2020-2025","Hi, Im Punya","Defender"), new Player("Sagar","2020-2023", "Hi,Im sagar","Defender"), new Player("Aatmesh","2023-2024","Im aatmesh","Defender")];

function login(){
    console.log('Logging in!')
}

const defbutt = document.querySelector("#defense");
defbutt.onclick = defenseList; 

const forbutt = document.querySelector("#forwards"); 
forbutt.onclick = forwardsList; 

const midbutt = document.querySelector("#midfielders"); 
midbutt.onclick = midList; 

const gkbutt = document.querySelector("#goalkeepers"); 
gkbutt.onclick = goalist;

function defenseList(){
    console.log("Defenders has been clicked!"); 

    defbutt.disabled = true;
    document.getElementById("adminAl").style.display = "none"; 
    document.getElementById("defDis").style.display="block";
    let list = document.getElementById("defList");

    for (i = 0; i < playerArr.length; ++i) {
        var li = document.createElement('li');
        li.innerText = playerArr[i].getName();
        list.appendChild(li);
    }   
}

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

