
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
        const response = await fetch('./msfl2024_players.csv'); // path to your CSV file
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

var defenderList = [];

var forwardList = [];

var midfielderList = [];

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
    defenderList = validPlayers.filter(player => player.position.trim() === "Defender");
    midfielderList = validPlayers.filter(player => player.position.trim() === "Midfielder");
    forwardList = validPlayers.filter(player => player.position.trim() === "Forward");
    keeperList = validPlayers.filter(player => player.position.trim() === "Goalkeeper");

    // Debugging: Check if positions are correctly identified
    console.log("Defenders:", defenderList);
    console.log("Midfielders:", midfielderList);
    console.log("Forwards:", forwardList);
    console.log("Goalkeepers:", keeperList);
}

// Call this function after playerList is populated
loadCSV().then(() => {
    categorizePlayers();
});


export {
    defenderList,
    forwardList,
    midfielderList,
    keeperList
}