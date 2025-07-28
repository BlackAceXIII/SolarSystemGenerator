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
});
/*
function handleButtonClick(id) {
  switch (id) {
    case 'generate-button-S.00':
      generatePlanet("S.00", data.planetTypes);
      break;
    case 'generate-button-S.01':
      generatePlanet("S.01", data.planetTypes);
      break;
    case 'generate-button-S.02':
      generatePlanet("S.02", data.planetTypes);
      break;
    case 'generate-button-S.03':
      generatePlanet("S.03", data.planetTypes);
      break;
    case 'generate-button-S.04':
      generatePlanet("S.04", data.planetTypes);
      break;
    case 'generate-button-S.05':
      generatePlanet("S.05", data.planetTypes);
      break;
    case 'generate-button-S.06':
      generatePlanet("S.06", data.planetTypes);
      break;
    case 'generate-button-S.07':
      generatePlanet("S.07", data.planetTypes);
      break;
    case 'generate-button-S.08':
      generatePlanet("S.08", data.planetTypes);
      break;
    case 'generate-button-S.09':
      generatePlanet("S.09", data.planetTypes);
      break;
  }
}
*/
// This function handles the button clicks and calls generatePlanet with the correct sector name
// It uses a regular expression to match the button ID and extract the sector name
function handleButtonClick(id) {
  const match = id.match(/^generate-button-(S\.\d{2})$/);
  if (match) {
    generateSector(match[1]);
  }
}
function generateSector(sectorName) {
  let sectorRNG = Math.floor(Math.random() * celestialBody.length);
  let sectorType = celestialBody[sectorRNG];
  console.log(`Generated sector ${sectorName}: ${sectorType}`);
  switch (sectorType) {
    case "Planet":
      generatePlanet(sectorName, data.planetTypes);
      break;
    case "Star":
      generateStar(sectorName);
      break;
    case "Asteroid Belt":
      generateAsteroidBelt(sectorName);
      break;
    case "Mysterious Wreckage":
      generateWreckage(sectorName);
      break;
    case "Space Station":
      generateSpaceStation(sectorName);
      break;
    case "Empty Space":
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

fetchData();

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
