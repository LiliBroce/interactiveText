var message = "Because your thoughts are still in \n time & space & \n you can't get out of time through them";
var index = 0;
var lastMillis = 0;


function setup() {
	var canvas2 = createCanvas(900, 600);
    canvas2.position(windowWidth/5, windowHeight/6);
    textAlign(CENTER);
	textSize(26);
}

function draw() {
    background('#3D3684');

    fill('#faebd7');
    textFont('Inknut Antiqua');

	text(message, mouseX-=1, mouseY+=1, width, height);

}



