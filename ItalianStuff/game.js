var awnser;
var currentQuestion;
var questions = [
	["Tuscany is located in ______ Italy.", "central"],
	["What is Tuscany's alternative name?", "toscana"],
	["What is the capital of Tuscany?", "florence"],
	["test", "ok"]
];

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function gameFinish() {
	document.getElementById("questiontext").innerHTML = "You Finished!";
	document.getElementById("subtext").remove();
	document.getElementById("inputarea").remove();
	document.getElementById("checkbutton").remove();
}
function random_content(){
	var rt=Math.floor(Math.random()*questions.length)
	currentQuestion = questions[0];
	questions.shift();
	awnser = currentQuestion[1];
	console.log(currentQuestion);
	document.getElementById("questiontext").innerHTML = currentQuestion[0];
}

function startup(){
	shuffle(questions);
	random_content();
}

function reset(){
	
	document.getElementById("subtext").innerHTML = "...";
	document.getElementById("inputarea").value = "";
	
}

function checkAwnser(){
	if (document.getElementById("inputarea").value.toUpperCase() == awnser.toUpperCase()) {
		document.getElementById("subtext").innerHTML = "correct!";
		if (Array.isArray(questions) && questions.length) {
			setTimeout(random_content, 600);
			setTimeout(reset, 600);
		} else {
			setTimeout(gameFinish, 600);
		}
		
	} else {
		document.getElementById("subtext").innerHTML = document.getElementById("inputarea").value + " is incorrect!";
	}
}

