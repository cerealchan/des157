// [5 fileExtension
console.log ("this is script.js comment");

var ghx, ghy, elx, ely, erx, ery, d; //groundhogX and Y, eyeleftX and Y, eyeright X and Y, diameter

function setup() {
  // capture the createCAnvas to a variable
  var myCanvas = createCanvas (800, 250);
  background(255);

  myCanvas.parent("mySketch");

  background(0);
}

function draw() {
  if (mouseIsPressed){
    fill(0);
  } else {
    fill(50);
  }
  // add statements Here
  rect (mouseX, mouseY, 30, 75, 58, 20, 86, 75);

}
