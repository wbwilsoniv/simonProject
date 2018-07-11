# simonProject
Remake of Milton Brother's classic 1978 game
**Notes**
Game not functioning properly. Only level 1 works. Color is flashing instead of displaying once for comp logic.

**Project Title**
Simon

**Motivation**
I played Simon at my grandparents house growing up. It is way better than "Bop-it", but not better than "Bop-it Extreme".

**Build status**
Level 1 of game logic functions with a display bug. The single color to be matched is flashing instead of blinking. Level 2 does not properly display the compArray

**Code Style**
AirBnb JS
Google - CSS

**Screenshots**

**Tech/framework**
JavaScript

**Features**
User selected colors display and play sound correctly. Works as a functioning piano soundboard with the colors corresponding with the notes as listed below:
*red* - a note
*yellow* - c note
*blue* - f note
*green* - e note

**Code Example**
Random integer is generated between 0 and 3, which is used as the index for an array of the 4 colors. The color is then pushed to compArray and displayed to the user. User then repeats pattern shown.

Compare function with set timeout of 5 seconds. Compare function is then called to compare userArray & compArray. If arrays match, score is increased, game loop repeats (print color to array, get user input, compare arrays) until score reaches 15 or userArray !== compArray.

**API Reference**

**Credits**
