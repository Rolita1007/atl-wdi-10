window.onload = function() {
<<<<<<< HEAD
	//button one

	// 1. get access to button one
	
	var button = document.getElementById("buttonOne");
	
	// 2. user will click on button 1
	
	button.addEventListener("click", function() {
	
	// 3. once this happens, show an alert that says "you have cliked button one"
		alert("you have clicked button one");

	});



	//button two

	//1. get access to button two

	var buttonTwo = document.getElementById("buttonTwo");


	//2. user will click on button 2

	buttonTwo.addEventListener("click", function() {

	//3. create <p>
		var par1 = document.createElement("p");
		//add a text node to that <p>
		par1.innerHTML = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback). nction (as a callback).";	 
	
		//append that <p> to the document.body
		document.getElementById("information").appendChild(par1);
	
	});


	//button 3
	var buttonThree = document.getElementById("buttonThree");
	buttonThree.addEventListener("click", function() {
		var par2 = document.getElementsByTagName('p')[0];
		document.getElementById("information").removeChild(par2);

	});
}



=======
}
>>>>>>> 3828c59c51713f41b82d21225c444b6debe2784a
