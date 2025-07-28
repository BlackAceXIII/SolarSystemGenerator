let data;
const celestialBody = [
        "Planet",
        "Star",
        "Asteroid Belt",
        "Mysterious Wreckage",
        "Space Station",
        "Empty Space"
];

const sectorData = {
  "S.00": { pType: "" },
  "S.01": { pType: "" },
  "S.02": { pType: "" },
  "S.03": { pType: "" },
  "S.04": { pType: "" },
  "S.05": { pType: "" },
  "S.06": { pType: "" },
  "S.07": { pType: "" },
  "S.08": { pType: "" },
  "S.09": { pType: "" }
};

async function fetchData() {
  // Fetch planet types (for "Planet")
  const planetResponse = await fetch('./SolarSystem_JSONs/planetTypes.json');
  const planetTypes = await planetResponse.json();

  // Fetch star types (for "Star")
  const starResponse = await fetch('./SolarSystem_JSONs/starTypes.json');
  const starTypes = await starResponse.json();

  // Fetch asteroid belt types (for "Asteroid Belt")
  const asteroidResponse = await fetch('./SolarSystem_JSONs/asteroidBeltTypes.json');
  const asteroidBeltTypes = await asteroidResponse.json();

  // Fetch mysterious wreckage types (for "Mysterious Wreckage")
  const wreckageResponse = await fetch('./SolarSystem_JSONs/wreckageTypes.json');
  const wreckageTypes = await wreckageResponse.json();

  // Fetch space station types (for "Space Station")
  const stationResponse = await fetch('./SolarSystem_JSONs/spaceStationTypes.json');
  const spaceStationTypes = await stationResponse.json();

  // Store all data in a single object for easy access
  data = {
    planetTypes,
    starTypes,
    asteroidBeltTypes,
    wreckageTypes,
    spaceStationTypes
  };
  return data;
}
const sectorTypeToIdPrefix = {
  "Planet": "planet",
  "Star": "star",
  "Asteroid Belt": "asteroid",
  "Mysterious Wreckage": "wreckage",
  "Space Station": "station",
  "Empty Space": "empty"
};

function openSector(evt, sectorName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectorName).style.display = "block";
  evt.currentTarget.className += " active";
}

function rerollAll() {
  for (let i = 0; i <= 9; i++) {
    generateSector(`S.0${i}`);
  }
  return;
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    handleButtonClick(this.id);
  });
})
// This function handles the button clicks and calls generatePlanet with the correct sector name
// It uses a regular expression to match the button ID and extract the sector name
function handleButtonClick(id) {
  const match = id.match(/^generate-button-(S\.\d{2})$/);
  if (match) {
    generateSector(match[1]);
  }
}

function generateSector(sectorName) {
  //Hides all sector info elements before generating a new one
  document.getElementById(`planet-info-${sectorName}`).style.display = "none";
  document.getElementById(`star-info-${sectorName}`).style.display = "none";
  document.getElementById(`asteroid-info-${sectorName}`).style.display = "none";
  document.getElementById(`wreckage-info-${sectorName}`).style.display = "none";
  document.getElementById(`station-info-${sectorName}`).style.display = "none";
  document.getElementById(`empty-info-${sectorName}`).style.display = "none";

  let sectorRNG = Math.floor(Math.random() * celestialBody.length);
  let sectorType = celestialBody[sectorRNG];
  console.log(`Generated sector ${sectorName}: ${sectorType}`);
  // Use the mapping to get the correct prefix
  const idPrefix = sectorTypeToIdPrefix[sectorType];
  if (idPrefix) {
    document.getElementById(`${idPrefix}-info-${sectorName}`).style.display = "block";
  }
  // Display the sector type in the relevant element
  document.getElementById(`sector-type-${sectorName}`).innerText = sectorType;
  sectorData[sectorName].pType = sectorType; // Store the sector type in the sectorData object
  
  switch (sectorType) {
    case "Planet":
      document.getElementById(`planet-info-${sectorName}`).style.display = "block";
      generatePlanet(sectorName, data.planetTypes);
      break;
    case "Star":
      document.getElementById(`star-info-${sectorName}`).style.display = "block";
      generateStar(sectorName, data.starTypes);
      break;
    case "Asteroid Belt":
      document.getElementById(`asteroid-info-${sectorName}`).style.display = "block";
      generateAsteroidBelt(sectorName, data.asteroidBeltTypes);
      break;
    case "Mysterious Wreckage":
      document.getElementById(`wreckage-info-${sectorName}`).style.display = "block";
      generateWreckage(sectorName, data.wreckageTypes);
      break;
    case "Space Station":
      document.getElementById(`station-info-${sectorName}`).style.display = "block";
      generateSpaceStation(sectorName, data.stationTypes);
      break;
    case "Empty Space":
      document.getElementById(`empty-info-${sectorName}`).style.display = "block";
      generateEmptySpace(sectorName);
      break;
    default:
      // fallback if needed
      break;
  }
}

function generatePlanet(sectorName, planetTypes) {
  let randomElement = Math.floor(Math.random() * data.planetTypes.length);
  let elementType = Math.floor(Math.random() * data.planetTypes[randomElement].planetSubType.length);

  // Display the result in the relevant sector element
  document.getElementById(`random-element-${sectorName}`).innerText = data.planetTypes[randomElement].type + ' (' + randomElement + ')';
  
  // Display the result in the relevant sector subtype
  document.getElementById(`random-subtype-${sectorName}`).innerText = data.planetTypes[randomElement].planetSubType[elementType];

  let creatureType = data.planetTypes[randomElement].creatureType.join('\n\n'); //A simpler way to do it but less formatting options 
  // Display the result in the relevant sector creatures
  document.getElementById(`random-creature-${sectorName}`).innerText = creatureType;
}

function generateStar(sectorName, starTypes) {
  let randomStar = Math.floor(Math.random() * data.starTypes.starType.length);
  document.getElementById(`random-star-type-${sectorName}`).innerText = data.starTypes.starType[randomStar];
}

function generateAsteroidBelt(sectorName, asteroidBeltTypes) {
  let randomBelt = Math.floor(Math.random() * data.asteroidBeltTypes.AsteroidBeltComposition.length);
  document.getElementById(`random-asteroid-composition-${sectorName}`).innerText = data.asteroidBeltTypes.AsteroidBeltComposition[randomBelt];
}

function generateWreckage(sectorName, wreckageTypes) {
  let randomWreckage = Math.floor(Math.random() * data.wreckageTypes.mysteryWreck.length);
  document.getElementById(`random-wreckage-type-${sectorName}`).innerText = data.wreckageTypes.mysteryWreck[randomWreckage];
}

function generateSpaceStation(sectorName, spaceStationTypes) {
  let randomStation = Math.floor(Math.random() * data.spaceStationTypes.stationRole.length);
  let stationRole = data.spaceStationTypes.stationRole[randomStation];
  let randomStationCondition = Math.floor(Math.random() * data.spaceStationTypes.condition.length);
  let stationCondition = data.spaceStationTypes.condition[randomStationCondition];
  document.getElementById(`random-station-role-${sectorName}`).innerText = stationRole;
  document.getElementById(`random-station-condition-${sectorName}`).innerText = stationCondition;
}

function generateEmptySpace(sectorName) {
  // Display a message indicating that this sector is empty
  document.getElementById(`random-empty-notes-${sectorName}`).innerText = "Nothing of interest detected in this sector.";
}

fetchData();

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
