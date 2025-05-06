var message = "And: not only that one but that one & \n . . . that one & that too . . .";
var index = 0;
var lastMillis = 0;
var stamp = "& that one";


function setup() {
	var canvas2 = createCanvas(900, 600);
    canvas2.position(windowWidth/5, windowHeight/6);
    textAlign(CENTER);
	textSize(36);
    background('#3D3684');
}

function draw() {
    fill('#faebd7');
    textFont('Inknut Antiqua');

	text(message, 0, height/3, width, height);

}

function mousePressed() {
    text(stamp, mouseX, mouseY);
  }



