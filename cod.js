var numG = 6;
var colors = randomColor(numG); 
var rightColor = gerarNumero();
var rightColorDisplay = document.querySelector("h1 span");
var divs = document.querySelectorAll(".square");
var messageRightColor = document.querySelector("div span");
var playAgain = document.getElementById("playAgain");
var h1 = document.querySelector("h1");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numG = 3;
	colors = randomColor(numG);
	rightColor = gerarNumero();
	rightColorDisplay.textContent = rightColor;

	for(var i=0; i<divs.length; i++){
		if(colors[i]){
			divs[i].style.backgroundColor = colors[i];
		}else{
			divs[i].style.display = "none";
		}
		
	}
});

hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numG = 6;
	colors = randomColor(numG);
	rightColor = gerarNumero();
	rightColorDisplay.textContent = rightColor;

	for(var i=0; i<divs.length; i++){
		divs[i].style.backgroundColor = colors[i];
		divs[i].style.display = "block";

		
	}
})

playAgain.addEventListener("click",function(){
	colors = randomColor(numG);
	rightColor = gerarNumero();
	rightColorDisplay.textContent = rightColor; 

	for(var i=0; i<divs.length; i++){
		divs[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
})

rightColorDisplay.textContent = rightColor;

for(var i = 0; i < divs.length; i++){
	divs[i].style.backgroundColor = colors[i];

	divs[i].addEventListener("click", function(){
		var pickedColor = this.style.backgroundColor;
		if(this.style.backgroundColor === rightColor){
			messageRightColor.textContent = "Correct!";
			acertou(pickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageRightColor.textContent = "Try again";
		}
	})

};

function acertou(color){
	for(var i=0; i<divs.length; i++){
		divs[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
		playAgain.textContent = "Play again?";
	}
}
function gerarNumero(){
	var gerado = Math.floor(Math.random() * colors.length);
	return colors[gerado];
}
function randomColor(num){
	var array = [];
	for(var i=0; i<num; i++){
		array.push(generateColor());
	}
	return array;
}

function generateColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}