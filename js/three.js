var message = 'You can see patterns unfolding';
var messagetop = "of which this life is only a part, part of a mosaic of which this life is only a part, part of a mosaic";
var messagebottom = "of which this life is only a part, part of a mosaic of which this life is only a part, part of a mosaic";
var index = 0;
var lastMillis = 0;


function setup() {
	var canvas2 = createCanvas(1300, 600);
    canvas2.position(windowWidth/10, windowHeight/6);
    textAlign(CENTER);
	textSize(48);
}

function draw() {
    background('#3D3684');

    fill('#faebd7');
    textFont('Inknut Antiqua');

	text(message.substring(0, index), 0, height/2, width, height);

	
	
	if (millis() > lastMillis + 200) {
		index = index + 1;
		//ONE WORD AT A TIME
		// while(message.charAt(index) != ' ' &&
		// 		 index < message.length){
		// 	index = index + 1;
		// }
		lastMillis = millis();
	}

    text(messagetop, mouseY, 25, width, height);
	text(messagebottom, mouseY-height, 500, width, height);


   

}



