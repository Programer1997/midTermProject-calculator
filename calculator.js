


function GEB(){

//var name= document.getElementById('name');
var age= document.getElementById('age').value;
var weight = document.getElementById('weight').value;
var height= document.getElementById('height').value;
var activityLevel = document.getElementById('activity').value;
var gender = document.getElementById('gender').value;

var result =0;
 

    if (gender=="man"){
        result = (66.5 +(13.75*weight)+ (5*height)-(6.78*age))*activityLevel;

    }else if (gender=="women"){
        result = (665 +(9.6*weight)+ (1.85*height)-(4.68*age))*activityLevel;
    }else {
		alert("Selecciona tu género.");
		return;
	}

    var resultadoDiv = document.getElementById("resultFinal");
   
	resultadoDiv.innerHTML = "<p>Tu GEB es: <strong>" + result.toFixed(2) + " calorías</strong><br> It means that you need consume that number if you want keep your weight</p>";

    

}



