var message = 'See: If you get far enough in \n You can see . . . \n';
var index = 0;
var lastMillis = 0;
var drawText = 'karma';
var wid = windowWidth;
var hei = windowHeight;

function setup() {
	var canvas2 = createCanvas(600, 600);
    canvas2.position(windowWidth/3, windowHeight/4);
    textAlign(CENTER);
	textSize(40);
}

function draw() {
    background('#3D3684');

    fill('#faebd7');

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

function drawing() {
    function setup() {
        createCanvas(wid, hei);
        background('#3D3684');
    }
    
    function draw() {
        text(drawText, mouseX, mouseY);
    }
}

