
# SolarSystemGenerator

## Recent Changes

- Expanded all sector tabs (S.00 to S.09) to include detailed planet information: planetary element, subtype, creature type, dominant intelligent lifeforms, tech era, government adjective/type (with descriptions), and government objective (category, name, description).
- Unified the HTML structure for all sectors so each displays the same set of fields and supports dynamic population from JSON data.
- Refactored JavaScript logic (`SolarSystemGen.js`) so all sectors use the same randomization and data population functions, including support for new JSON files: `dominantIntLife.json`, `techEra.json`, `GovAdj.json`, `GovObj.json`, and `GovTypes.json`.
- Improved UI styling in `SolarSystemGen.css` for clarity and color-coding of celestial types, with circular tab buttons and enhanced hover effects.
- The "Reroll All" button now triggers randomization for all sectors, updating all fields with new data.
- Added support for closing individual sector tabs and switching between them interactively.

## File Overview

- **SolarSystemGen.html**: Main HTML file. Contains the tab layout for sectors 00-09, with each sector displaying detailed planet, star, asteroid, wreckage, station, and empty space information. All planet tabs now include fields for element, subtype, creature type, dominant intelligent lifeforms, tech era, government adjective/type/descriptions, and government objective.
- **SolarSystemGen.js**: JavaScript logic for randomizing and populating sector data. Handles tab switching, rerolling, and dynamic updates for all fields using data from multiple JSON files.
- **SolarSystemGen.css**: Styles for the tab layout, buttons, and content sections. Includes color-coding for celestial types and interactive effects for UI elements.
- **SolarSystem_JSONs/**: Directory containing all referenced JSON data files, including planet types, star types, asteroid belt types, dominant intelligent lifeforms, government adjectives, government objectives, government types, and tech eras.

## How It Works

1. The app displays 10 sectors as tabs. Each sector can show randomized data for planets, stars, asteroids, wreckage, stations, or empty space.
2. For planets, all relevant fields (element, subtype, creature type, intelligent life, tech era, government details) are populated from their respective JSON files.
3. The "Reroll All" button randomizes and updates all sectors at once.
4. Users can close individual sector tabs or switch between them using the tab buttons.
5. All styling and layout are handled in the CSS file for a modern, color-coded UI.

## Summary

SolarSystemGenerator is a web app for generating and displaying randomized celestial sector data, with rich support for planetary details, government structures, and intelligent life. All logic and UI are unified and extensible for future enhancements.
