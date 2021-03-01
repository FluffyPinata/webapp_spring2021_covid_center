function factorize(n) {
	var factors = [];
	for (var i = 0; i <= n; i++) {
		if (n % i == 0) {
			factors.push(i);
		}
	}	
	return factors;
}

function findUnique(str) {
	var uniqueStr = "";
	for (var i = 0; i <= str.length; i++) {
		if (uniqueStr.indexOf(str.charAt(i)) == -1) {
			uniqueStr += str[i];
		}
	}
	return uniqueStr;
}

function doOperation(x, y, operator) {
	return operator(x, y);
}

function multiply(x, y) {
	return x * y;
}

function power(x, y) {
	return Math.pow(x, y);
}

function updateCountryView() {
	var ddCountry = document.getElementById("ddCountry");
	var divCountry = document.getElementById("divCountry");

	if (ddCountry.value == "Yes") {
		divCountry.classList.remove("invisible");
	} else {
		divCountry.classList.add("invisible");
	}
}

function validateForm() {

	var DoB = document.querySelector("#txtDOB");
	var divDoBError = document.querySelector("#divDoBError");
	var formIsValid = true;
	if (DoB.value == "") {
		divDoBError.classList.remove("invisible");
		divDoBError.innerHTML = "The Date of Birth cannot be empty.";
		DoB.classList.add("hasError");
		formIsValid = false;
	} else {
		var DoBDate = new Date(DoB.value);
		var todayDate = new Date();
		if (DoBDate >= todayDate) {
			divDoBError.classList.remove("invisible");
			divDoBError.innerHTML = "The Date of Birth must be before today's date.";
			DoB.classList.add("hasError");
			formIsValid = false;
		} else {
			divDoBError.classList.add("invisible");
			divDoBError.innerHTML = "";
			DoB.classList.remove("hasError");
			formIsValid = true;
		}
	}

	var ddCountry = document.querySelector("#ddCountry");

	return formIsValid;
}