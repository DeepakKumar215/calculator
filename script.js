var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var parentDisplay = document.querySelector('.display-content');

var dis = parentDisplay.getBoundingClientRect();
console.log(dis);


for(var i=0; i<buttons.length; i++){
		buttons[i].addEventListener("click" , function(e){
		var value = this.getAttribute('data-value');
		parentDisplay.x1 = display.offsetLeft;
		parentDisplay.x2 = display.offsetRight;

		if(value == '='){
			display.innerText = eval(display.textContent);

		}else if (value == 'AC') {
			display.innerText ="";

		}else if(value == 'back'){
			display.innerText= display.innerText.slice(0, -1);

		}else{
			display.innerText += value;
		}

});
}