// Create a webpage with a 16x16 grid of square divs

//Create a webpage === create in HTML
/*DONE*/

//\\  Create a container and assign it === create in HTML/do with javascript
const container = document.querySelector(".container");
const div = document.querySelector("div");
/*DONE*/

//Create a 16x16 grid of square divs = 
function createGrid() {
    let gridPara = 16 * 16;
    for (i = 0; i < gridPara; i++) {
        createDiv();
    }
}
createGrid();
/*DONE*/

//\\  add square divs to webpage === do with javascript
function createDiv () {
    const div = document.createElement('div');
    div.classList.add("grid");
    container.appendChild(div);
}
/*DONE*/

//\\  style them in a 16x16 grid === style them with css
/*DONE*/

//Set up a "hover" effect so that the grid divs change 
//color when your mouse passes over them, 
//leaving a trail through your grid like a pen would.
//\\  color change grid divs when "hovered" === do with javascript
div.addEventListener('hover', () => {
    console.log('Log');
});
//\\  leave a trail through changed grid divs === do with javascript

//Add a button to the top of the screen that will send the user
//a popup asking for the number of squares per side for the new grid
//once entered the existing grid should be removed and a new grid created
//in the same total space as before, so that it's a new sketch pad.