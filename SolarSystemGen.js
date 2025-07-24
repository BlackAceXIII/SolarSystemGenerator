let data;

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
  const response = await fetch('./SolarSystem_JSONs/planetTypes.json'); //delayed fetch
  console.log(response);
  data = await response.json(); //This stores the info from the JSON so the generate function can use it and the button can reference it.
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
    generateElement(`S.0${i}`, data.planetTypes);
  }
  return;
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    handleButtonClick(this.id);
  });
});

function handleButtonClick(id) {
  switch (id) {
    case 'generate-button-S.00':
      generateElement("S.00", data.planetTypes);
      break;
    case 'generate-button-S.01':
      generateElement("S.01", data.planetTypes);
      break;
    case 'generate-button-S.02':
      generateElement("S.02", data.planetTypes);
      break;
    case 'generate-button-S.03':
      generateElement("S.03", data.planetTypes);
      break;
    case 'generate-button-S.04':
      generateElement("S.04", data.planetTypes);
      break;
    case 'generate-button-S.05':
      generateElement("S.05", data.planetTypes);
      break;
    case 'generate-button-S.06':
      generateElement("S.06", data.planetTypes);
      break;
    case 'generate-button-S.07':
      generateElement("S.07", data.planetTypes);
      break;
    case 'generate-button-S.08':
      generateElement("S.08", data.planetTypes);
      break;
    case 'generate-button-S.09':
      generateElement("S.09", data.planetTypes);
      break;
  }
}

function generateElement(sectorName, planetTypes) {
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
