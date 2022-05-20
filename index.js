var	tom_1 = new Audio("sounds/tom-1.mp3");
var	tom_2 = new Audio("sounds/tom-2.mp3");
var	tom_3 = new Audio("sounds/tom-3.mp3");
var	tom_4 = new Audio("sounds/tom-4.mp3");
var	snare = new Audio("sounds/snare.mp3");
var	kick_bass = new Audio("sounds/kick-bass.mp3");
var	crash = new Audio("sounds/crash.mp3");

//button press
for (let index = 0; index < document.querySelectorAll(".drum").length; index++)
{
	document.querySelectorAll(".drum")[index].addEventListener("click", function()
	{
		var btnInnerHtml = this.textContent;
		hundleClick(btnInnerHtml);
		keyAnimation(btnInnerHtml);
	});
}
//key press
document.addEventListener("keypress", function(event){
	var btnInnerHtml = this.textContent;
	hundleClick(event.key);
	keyAnimation(event.key);
});

//make sounds
function hundleClick(key){
	switch (key)
	{
		case "w":
			tom_1.play();
			break;
		case "a":
			tom_2.play();
			break;
		case "s":
			tom_3.play();
			break;
		case "d":
			tom_4.play();
			break;
		case "j":
			snare.play();
			break;
		case "k":
			kick_bass.play();
			break;
		case "l":
			crash.play();
			break;
		default:
			break;
	}
}

function keyAnimation(currentKey)
{
	var activeButton = document.querySelector("."+currentKey);
	activeButton.classList.add("pressed");

	setTimeout(function() {
	activeButton.classList.remove("pressed");
	}, 100);
}








/*
document.querySelector("h1").innerHTML = "GOOD_BYE"; //<strong>HELLO</strong>
document.querySelector("h1").textContent = "GOOD_BYE"; //HELLO
document.getElementsByTagName("li")[1].style.color = "purple";
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a"); // select a inside the li
document.querySelector("li.className");
document.querySelector("#title a");

document.querySelectorAll("body ul li a")[0].style.color = "red";//this
document.querySelector("body ul li a").style.color = "red";//same as this
document.getElementsByClassName("btn")[0].style.backgroundColor = "yellow";

document.querySelector("a").getAttribute("href");//src, type, ...
document.querySelector("a").setAttribute("href", "https://www.bing.com");

// add class remove (on / off)
document.querySelector("h1").classList.add("huge"); //add and applique
document.querySelector("h1").classList.remove("huge"); //remove the applic
document.querySelector("h1").classList.toggle("huge"); // if exist remove if not add
*/