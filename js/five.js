var message = "You can't think in";
var textDraw = "time & space";

function setup() {
	var canvas2 = createCanvas(1200, 600);
    canvas2.position(windowWidth/8, windowHeight/6);
	textSize(48);
	background('#3D3684');
}

function draw() {
    fill('#faebd7');
    textFont('Inknut Antiqua');

	text(message, 400, 300, width, height);

	textSize(16);
	text(textDraw, mouseX, mouseY);
}



