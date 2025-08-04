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

  // Fetch technology era data
  const techEraResponse = await fetch('./SolarSystem_JSONs/techEra.json');
  const techEra = await techEraResponse.json();

  // Fetch dominant intelligent life data
  const dominantIntLifeResponse = await fetch('./SolarSystem_JSONs/dominantIntLife.json');
  const dominantIntLife = await dominantIntLifeResponse.json();

  // Fetch government adjectives data
  const govAdjResponse = await fetch('./SolarSystem_JSONs/GovAdj.json');
  const govAdj = await govAdjResponse.json();

  // Fetch government objectives data
  const govObjResponse = await fetch('./SolarSystem_JSONs/GovObj.json');
  const govObj = await govObjResponse.json();

  // Fetch government types data
  const govTypesResponse = await fetch('./SolarSystem_JSONs/GovTypes.json');
  const govTypes = await govTypesResponse.json();

  // Store all data in a single object for easy access
  data = {
    planetTypes,
    starTypes,
    asteroidBeltTypes,
    wreckageTypes,
    spaceStationTypes,
    techEra,
    dominantIntLife,
    govAdj,
    govObj,
    govTypes
  };
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
    try {
      generateSector(`S.0${i}`);
    } catch (e) {
      console.error(`Error in sector S.0${i}:`, e);
    }
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

  // Display the sector type in the relevant element
  document.getElementById(`sector-type-${sectorName}`).innerText = sectorType;
  sectorData[sectorName].pType = sectorType; // Store the sector type in the sectorData object
  
  switch (sectorType) {
    case "Planet":
      document.getElementById(`planet-info-${sectorName}`).style.display = "block";
      generatePlanet(sectorName);
      break;
    case "Star":
      document.getElementById(`star-info-${sectorName}`).style.display = "block";
      generateStar(sectorName);
      break;
    case "Asteroid Belt":
      document.getElementById(`asteroid-info-${sectorName}`).style.display = "block";
      generateAsteroidBelt(sectorName);
      break;
    case "Mysterious Wreckage":
      document.getElementById(`wreckage-info-${sectorName}`).style.display = "block";
      generateWreckage(sectorName);
      break;
    case "Space Station":
      document.getElementById(`station-info-${sectorName}`).style.display = "block";
      generateSpaceStation(sectorName);
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

function generatePlanet(sectorName) {
  let randomElement = Math.floor(Math.random() * data.planetTypes.planetTypes.length);
  let elementType = Math.floor(Math.random() * data.planetTypes.planetTypes[randomElement].planetSubType.length);

  // Display the result in the relevant sector element
  let planetType = data.planetTypes.planetTypes[randomElement];
  document.getElementById(`random-element-${sectorName}`).innerText = `${planetType.type} (${randomElement})`;
  document.getElementById(`random-element-desc-${sectorName}`).innerText = planetType.description;

  // Display the result in the relevant sector subtype
  let subtype = planetType.planetSubType[elementType];
  document.getElementById(`random-subtype-${sectorName}`).innerText = subtype.name;
  document.getElementById(`random-subtype-desc-${sectorName}`).innerText = subtype.description;

  let creatureType = planetType.creatureType.join('\n\n'); //A simpler way to do it but less formatting options
  // Display the result in the relevant sector creatures
  document.getElementById(`random-creature-${sectorName}`).innerText = creatureType;

  // --- Dominant Intelligent Lifeforms ---
  let randomIntType = Math.floor(Math.random() * data.dominantIntLife.intLife.length);
  let intTypeObj = data.dominantIntLife.intLife[randomIntType];
  let randomIntLifeform = Math.floor(Math.random() * intTypeObj.intLifeform.length);
  let intLifeType = intTypeObj.intLifeType;
  let intLifeform = intTypeObj.intLifeform[randomIntLifeform];
  document.getElementById(`dominant-int-life-${sectorName}`).innerText = `${intLifeType}: ${intLifeform}`;

  // --- Tech Era ---
  let randomTechEra = Math.floor(Math.random() * data.techEra.TechLevel.length);
  let techEra = data.techEra.TechLevel[randomTechEra];
  document.getElementById(`tech-era-${sectorName}`).innerText = techEra;

  // --- Dominant Government Adjective ---
  // Flatten all adjective arrays
  let govAdjArrays = Object.values(data.govAdj.GovernmentAdjectives);
  let allGovAdjs = govAdjArrays.flat();
  let randomGovAdj = Math.floor(Math.random() * allGovAdjs.length);
  let govAdjObj = allGovAdjs[randomGovAdj];
  document.getElementById(`gov-adj-${sectorName}`).innerText = govAdjObj.adjective;
  document.getElementById(`gov-adj-desc-${sectorName}`).innerText = `${govAdjObj.adjective}: ${govAdjObj.description}`;

  // --- Dominant Government Type ---
  let govTypesArr = data.govTypes.GovernmentTypes;
  let randomGovType = Math.floor(Math.random() * govTypesArr.length);
  let govTypeObj = govTypesArr[randomGovType];
  document.getElementById(`gov-type-${sectorName}`).innerText = govTypeObj.name;
  document.getElementById(`gov-type-desc-${sectorName}`).innerText = `${govTypeObj.name}: ${govTypeObj.description}`;

  // --- Government Objective ---
  let govObjCategories = Object.keys(data.govObj.FactionalObjectives);
  let randomObjCatIdx = Math.floor(Math.random() * govObjCategories.length);
  let objCatName = govObjCategories[randomObjCatIdx];
  let objCatArr = data.govObj.FactionalObjectives[objCatName];
  let randomObjIdx = Math.floor(Math.random() * objCatArr.length);
  let obj = objCatArr[randomObjIdx];
  document.getElementById(`gov-obj-category-${sectorName}`).innerText = `Category: ${objCatName}`;
  document.getElementById(`gov-obj-name-${sectorName}`).innerText = `Objective: ${obj.name}`;
  document.getElementById(`gov-obj-desc-${sectorName}`).innerText = `Description: ${obj.description}`;
}

function generateStar(sectorName) {
  let randomStar = Math.floor(Math.random() * data.starTypes.starType.length);
  let starType = data.starTypes.starType[randomStar];
  document.getElementById(`random-star-type-${sectorName}`).innerText = starType;
}

function generateAsteroidBelt(sectorName) {
  let randomBelt = Math.floor(Math.random() * data.asteroidBeltTypes.AsteroidBeltComposition.length);
  let asteroidBeltComposition = data.asteroidBeltTypes.AsteroidBeltComposition[randomBelt];
  document.getElementById(`random-asteroid-composition-${sectorName}`).innerText = asteroidBeltComposition;
}

function generateWreckage(sectorName) {
  let randomWreckage = Math.floor(Math.random() * data.wreckageTypes.mysteryWreck.length);
  let mysteryWreck = data.wreckageTypes.mysteryWreck[randomWreckage];
  document.getElementById(`random-wreckage-type-${sectorName}`).innerText = mysteryWreck;
}

function generateSpaceStation(sectorName) {
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
