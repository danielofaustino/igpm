
// Cleave.js Input Numeral - positive only

var cleave = new Cleave('.rent', {
  numeral: true,
  numeralPositiveOnly: true
});

// function to igpm

let calculateIgpm = (x) =>{
  // get the value of input with id "aluguel"
  let rent = document.getElementById("rent").value

  // replace "," to " " 
  let rentString = rent.replace(",","")

  // Convert string to float
  let rentFloat = parseFloat(rentString)

  // Igpm rent Calculation - 2020  
  let calculation = rentFloat*1.13

  // toFixed() - to keep only two decimals
  calculation = calculation.toFixed(2)

  // Insert an text on h3 element called calculoIG with igpm calculation

  document.getElementById("calculationIG").innerHTML = ` O valor reajustado do seu aluguel é de: R$ ${calculation}`


}