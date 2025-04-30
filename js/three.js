var message = 'You can see patterns unfolding';
var index = 0;
var lastMillis = 0;


function setup() {
	var canvas2 = createCanvas(900, 400);
    canvas2.position(windowWidth/5, windowHeight/3);
    textAlign(CENTER);
	textSize(48);
}

function draw() {
    background('#3D3684');

    fill('#faebd7');
    textFont('Inknut Antiqua');

	text(message.substring(0, index), 0, height/3, width, height);
	
	
	if (millis() > lastMillis + 200) {
		index = index + 1;
		//ONE WORD AT A TIME
		// while(message.charAt(index) != ' ' &&
		// 		 index < message.length){
		// 	index = index + 1;
		// }
		lastMillis = millis();
	}

}



