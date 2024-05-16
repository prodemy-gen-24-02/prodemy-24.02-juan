const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let biografi = {
    name: "Paulie Aronson",
    country: "America",
    deck: "Bystial Dragon Link",
    tournament: "Yu-Gi-Oh! World Championship 2023",
    tournamentLocation: "Tokyo, Japan",
    standing: "champion"
};

// let multiBiografi = [
//     {
//         name: "Paulie Aronson",
//         country: "America",
//         deck: "Bystial Dragon Link",
//         tournament: "Yu-Gi-Oh! World Championship 2023",
//         tournamentLocation: "Tokyo, Japan",
//         standing: "champion"
//     },
//     {
//         name: "Mateo Renteria",
//         country: "Peru",
//         deck: "Tenyi Swordsoul",
//         tournament: "Yu-Gi-Oh! World Championship 2023",
//         tournamentLocation: "Tokyo, Japan",
//         standing: "runner-up"
//     },
//     {
//         name: "Kouki Kosaka",
//         country: "Japan",
//         deck: "Salamangreat",
//         tournament: "Yu-Gi-Oh! World Championship 2019",
//         tournamentLocation: "Berlin, Germany",
//         standing: "champion"
//     },
//     {
//         name: "Chia Ching Wang",
//         country: "Republic of China", //commonly now as Taiwan
//         deck: "Salamangreat",
//         tournament: "Yu-Gi-Oh! World Championship 2019",
//         tournamentLocation: "Berlin, Germany",
//         standing: "runner-up"
//     }
// ]

// Function to update a specific property of the biografi object
function updateBiografi(propertyName, newValue) {
    if (biografi.hasOwnProperty(propertyName)) {
        biografi[propertyName] = newValue;
        console.log(`Updated ${propertyName} to: ${newValue}`);
    } else {
        console.log(`Property '${propertyName}' does not exist in biografi object.`);
    }
}
console.log('Biografi awal', biografi);

// Prompt user for input and update biografi object
rl.question('Masukan nama property yang ingin diubah: ', (propertyName) => {
    rl.question(`Masukan value yang ingin diubah '${propertyName}': `, (newValue) => {
        updateBiografi(propertyName, newValue);

        // Close the readline interface
        rl.close();

        // Display the updated biografi object
        console.log('Updated biografi object:', biografi);
    });
});
