# Sol LeWitt – Wall Drawing 273

_American artist Sol LeWitt created an art piece represented through a set of instructions. This art piece consists of random elements and therefor allows for infinite renditions._

## Goals
Create an online demonstration of this art piece.
Use and improve knowledge in HTML, CSS, JavaScript, PHP or .NET, SQL, Data Modeling, and Development practices.

## Milestones
- Create a graphically clean demonstration of the LeWitt Wall Drawing
-	Create a canvas to allow a user to create their own LeWitt Wall Drawing
-	Create a database for users to store their created drawings
![LeWitt Wall Drawing 273](https://github.com/robosheep95/Sol-LeWitt-Wall-Drawing/blob/master/walldrawing01.jpg "LeWitt Wall Drawing 273")
# System Design
## Instructional System
1. Welcome Screen
2. Prompt to go to Instructional, Sandbox, or Login/Signup
    - If Instructional, Continue
    - If Sandbox, Go To Drawing System
    - If Login, Go to Account System
3. Play Demo
    1. Show little history of the painting and the artist
        - Have Skip History option
    2. Show how the art is made
        - Have Skip Demo Option
4. Go to step 2

## Drawing System
1. Ask for size of grid. Greater than 5x5 and must be odd
2. Ask what wall they want to start on
3. Show avalable primary points based on wall selected in correct color. Wait for selection
4. Show avlable secondary points. Wait for selection
5. Remove points and draw line
6. Go to step 3
- Selecting the menu will inturrept the system and reset it to stem 3

## Account System
### Signup
1. Ask for new username (valadate if proper and unique)
2. Ask for new password (valadate for strong password and double check)
3. Accept Privacy Policy.
4. Log In user
### Login
1. Ask for username and password
2. Valadate
3. If valid move user to account page (else go to step 1)
4. Allow user to view projects, create new projects or edit projects
