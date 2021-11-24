console.log("Script loaded!");
var form1 = document.getElementById("form-1");


function obtenerDatos() {
	
	var lastName = document.getElementById("input-lastName").value;
	var number = document.getElementById("input-number").value;
	var direction = document.getElementById("input-direction").value;
	var birth = document.getElementById("input-birth").value;
	var est = document.getElementById("input-est").value;

	var r =[lastName, number, direction, birth,est];
	return r;
}

form1.addEventListener("submit", function(event) {
	event.preventDefault();

	const data = Object.fromEntries(new FormData(event.target).entries());
	console.log(event);
	console.log("submit");
	console.log(data);
	var name = document.getElementById("name").value;
	var lastName = document.getElementById("input-lastName").value;
	const block = document.getElementById('response_div')
	block.innerHTML = name; 
});

