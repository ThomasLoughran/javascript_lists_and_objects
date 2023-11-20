/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

for (i = 0; i < unitedKingdom.length; i++){
  if (unitedKingdom[i].name === "England"){
      unitedKingdom[i].touristAttractions = ["Warwick castle"];
      break;
  }
}

// console.log(unitedKingdom[1]);

// england = null;

// console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

for (i = 0; i < unitedKingdom.length; i++){
  if (unitedKingdom[i].name === "Wales"){
      unitedKingdom[i].capital = ["Cardiff"];
      break;
  }
}

// console.log(unitedKingdom[2]);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */
northernIrelandKeys = null;
for (i = 0; i < unitedKingdom.length; i++){
  if (unitedKingdom[i].name === "Northern Ireland"){
      northernIrelandKeys = Object.keys(unitedKingdom[i]);
      break;
  }
}


// console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */


function comparePopulation(a, b){
  if (a.population < b.population){
    return -1;
  } else if (a.population > b.population){
    return 1;
  }
  return 0;
}

unitedKingdom.sort(comparePopulation);

console.log(unitedKingdom);

scotlandIndex = null;
for (i = 0; i < unitedKingdom.length; i++){
  if (unitedKingdom[i].name === "Scotland"){
      scotlandIndex = i;
      break;
  }
}

if (scotlandIndex === 0){
  console.log("Scotland has the smallest population");
} else if (scotlandIndex === unitedKingdom.length - 1){
  console.log("Scotland has the largest population");
} else {
  console.log("Scotland's population is somewhere in the middle");
}


