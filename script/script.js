console.log("Script loaded!");
var form1 = document.getElementById("form");
let list = ["Lista de usarios:"];
var counter = 1;

function obtenerDatos() {
	var name = document.getElementById("name").value;	
	var lastName = document.getElementById("input-lastName").value;
	var birth = document.getElementById("input-birth").value;
	var person = name + "," + lastName + ","+ birth;
	list.push(person);
	console.log(list);
	window.localStorage.setItem("persona " + counter, list[list.length -1]);
	document.getElementById("form").reset();
	counter++;
}


form1.addEventListener("submit", function(event) {
	event.preventDefault();
	const data = Object.fromEntries(new FormData(event.target).entries());
	console.log(event);
	console.log("submit");
	console.log(data);
	var name = document.getElementById("name").value;
	var lastName = document.getElementById("input-lastName").value;
	document.getElementById("getName").value = name;
	document.getElementById("getLastName").value = lastName;
});

function changeColor(elemId){
	var elem = document.getElementById(elemId);
	elem.style.borderColor = "gray";
}

