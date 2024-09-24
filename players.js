
class Player {

    constructor(name, batch, position) {
        this.name = name;
        this.batch = batch;
        this.position = position;
    }
}

// Declare an array to store the players
let playerList = [];

// Fetch the CSV file and parse it
async function loadCSV() {
    try {
        const response = await fetch('./kcl2024_players.csv'); // path to your CSV file
        const csvText = await response.text(); // read it as text
        const dataArray = csvToArray(csvText);

        // Map each row to a Player instance and store in playerList
        playerList = dataArray.map(row => new Player(row[0], row[1], row[2]));

        console.log(playerList); // This will output the array containing Player instances
    } catch (error) {
        console.error('Error loading CSV file:', error);
    }
}

// Convert CSV text to array
function csvToArray(csvData, delimiter = ',') {
    const rows = csvData.split('\n').map(row => row.trim());
    const dataArray = rows.map(row => row.split(delimiter).map(cell => cell.trim()));

    // Remove the header row (assuming first row is header)
    dataArray.shift();

    // Remove empty rows if any
    return dataArray.filter(row => row.length > 1);
}


// Hardcoded - sample player list.

var bowlerList = [];

var batsmanList = [];

var allrounderList = [];

var keeperList = [];


function categorizePlayers() {
    // Debugging: Check the structure of playerList
    console.log("Player List:", playerList);

    // Filter out any undefined or invalid players
    const validPlayers = playerList.filter(player => {
        if (player && player.position) {
            return true;
        } else {
            console.error("Invalid Player Entry: ", player);
            return false;
        }
    });

    // Now categorize the valid players by position
    bowlerList = validPlayers.filter(player => player.position.trim() === "Bowler");
    allrounderList = validPlayers.filter(player => player.position.trim() === "All- Rounder");
    batsmanList = validPlayers.filter(player => player.position.trim() === "Batsman");
    keeperList = validPlayers.filter(player => player.position.trim() === "Wicket- Keeper");

    // Debugging: Check if positions are correctly identified
    console.log("Bowlers:", bowlerList);
    console.log("All- Rounders:", allrounderList);
    console.log("Batsmen:", batsmanList);
    console.log("Wicket- Keepers:", keeperList);
}

// Call this function after playerList is populated
loadCSV().then(() => {
    categorizePlayers();
});


export {
    bowlerList,
    batsmanList,
    allrounderList,
    keeperList
}