# SolarSystemGenerator


`attempt09` has changed tab names from London, Paris, and Tokyo to the more generic *sectors*, which range from *00-09*. 
The json file being referenced was changed from  `planetTypes06.json` to `planetTypes.json`, and the tabs were adjusted to accomadate the additional information.
Each tab now has a section for the "Element", "SubType", and "Creature Type".
The tabs were reshaped from rectangles into circles, and the *Reroll All* button now changes shape when hovered over.

# AI GENERATED SUMMARY
# HTML Tab Layout with Reroll Button

## Overview

This HTML file creates a tab-based layout, with each tab representing a sector. It also includes a "Reroll All" button that triggers an action (presumably rerolling content across the tabs). The file is styled using an external CSS file (`attempt09.css`) and has a JavaScript file (`attempt09.js`) for handling tab behavior and the reroll function.

The HTML contains buttons to switch between different sector views. The content is hidden and revealed based on which tab is active. The tabs include closing buttons (×) to hide the tab content. The layout was expanded to include 10 sectors, making it more versatile.

## Changes Introduced

### 1. **Tab Expansion**
   - Initially, the file had 4 tabs (Sector 00, Sector 01, Sector 02, and Sector 03).
   - The layout has been expanded to include 10 sectors (`Sector 00` to `Sector 09`).
   - Each tab has its own section (`div`) that contains a unique sector heading and placeholder text ("Filler").

### 2. **Reroll Button**
   - The "Reroll All" button triggers the `rerollAll()` function, although the function implementation is not shown in this file.
   - The button is styled with some padding and placed above the sector tabs.

### 3. **CSS and Styling**
   - The button has a class `button button1` that will be styled in the external CSS file to give it a more polished look.
   - The CSS is responsible for the layout of the tabs, their colors, positioning, and general styling.
   - A `hover` effect was added to the button for interactivity.
   - Added transition effects for a smooth hover interaction.
   - Box-shadow and color changes are applied when hovering and pressing the "Reroll All" button.

## How the Tab System Works

- The tab system works by using the `openTab(event, sectorId)` JavaScript function, which controls which tab is shown based on the button clicked. This function is located in the external JavaScript file (`attempt09.js`).
- Each tab's content is contained within a `div` element with a unique ID matching the sector (e.g., `S.00`, `S.01`, etc.).
- Clicking on a tab button will open the corresponding tab content and hide others.
- The close button (`×`) in each tab allows you to hide that specific tab's content without switching to another.

### Sample Tab Structure:

```html
<div id="S.00" class="tabcontent">
    <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
    <h3>Sector 00</h3>
    <p>Filler</p>
</div>
```

## Usage

1. **Reroll Functionality**: The `rerollAll()` function will need to be defined in the `attempt09.js` file for the button to work.
2. **Tab Interaction**: The tabs are designed to be interactive, allowing the user to navigate between different sections of the page easily.
3. **Styling**: All styling is handled in the external CSS file, with hover and click effects for the buttons.

### Future Enhancements

- Adding more dynamic functionality to the `rerollAll()` button.
- Introducing more complex content for each sector.
- Adding animations when switching between tabs.


**_______________________________________________________________________**
# _______________________________________________________________________


## Project Overview

This project is a basic web application that dynamically displays information from JSON files in multiple sectors (tabs) and allows for randomization of elements per sector. Each sector can be rerolled to display new random data pulled from a JSON file.

### What Changed in This Version

1. **Sector-Based Layout (Replacing Cities)**  
   - The HTML and JavaScript code has been updated to refer to "sectors" instead of "cities" (e.g., London, Paris, Tokyo).
   - Each sector is dynamically populated with random elements from the provided JSON file.
   - Ten sectors have been implemented with unique tab buttons and corresponding tab content.

2. **Dynamic Element Generation**  
   - The `generateElement()` function now accepts a `sectorName` parameter to determine which sector's content should be updated.
   - The function dynamically updates the `span` element inside each sector with randomly selected data from the JSON.

3. **Refactoring Button Handling**  
   - The `handleButtonClick()` function has been refactored to handle buttons for all ten sectors, replacing the hardcoded city logic.
   - Each button now correctly triggers the `generateElement()` function with its respective sector name (e.g., "S.00", "S.01", etc.).

4. **Dynamic Tab Switching**  
   - The `openTab()` function now dynamically handles the display of tab content for the sectors. This allows the user to switch between different sectors by clicking on the respective tab buttons.
   - Each tab shows and hides content based on the selected sector.

5. **Updated HTML Structure**  
   - Each sector now has a unique section in the HTML file, with IDs corresponding to sector names (e.g., `id="S.00"`, `id="S.01"`).
   - Buttons inside each sector trigger the randomization of content.

6. **ID Naming Convention**  
   - The naming convention for element IDs has been standardized to `random-element-S.[SectorNumber]` for ease of dynamic updates in JavaScript.

### How to Use

1. **Sectors**  
   - The application is divided into ten sectors (S.00, S.01, etc.). Each sector has its own tab button that allows the user to switch between different content areas.

2. **Randomization**  
   - Inside each sector, a button allows the user to generate random content from a JSON file. The data is fetched from a file containing information like planet types and planet subtypes.

3. **Rerolling**  
   - The "Reroll All" button generates random data for all sectors simultaneously by calling the `generateElement()` function for each sector.

4. **Close Tabs**  
   - Each sector tab has an 'x' button in the top right corner to close the current tab view.

### File Overview

- **index.html**: Contains the structure of the webpage, including the sector tabs and buttons. This file is updated to refer to sectors instead of cities.
- **attempt09.js**: Contains the JavaScript logic, including the randomization functions and tab-switching functionality.
- **attempt09.css**: Contains the styles for the sector tabs, buttons, and overall layout.


# Summary of Changes:
1. Separate fields for planetType and planetSubType in the new version.
2. All creatureType entries are displayed in the new version, instead of a single random one.
3. Simpler structure and more flexibility in layout in the new version, especially for formatting.
