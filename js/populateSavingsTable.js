function populateSavingsTable(){
  var salary = document.getElementById('salary').value;
  var mode = document.getElementById('mode').value;
  var startPercentageSavings = .01;
  if(mode == "medium"){
    startPercentageSavings = .05;
  }
  else if (mode == "hard") {
    startPercentageSavings = .09;
  }

  var tableBody = document.getElementById('savings-content')
  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.lastChild);
  }

  var months = new Array("January", "February", "March",
                         "April", "May", "June",
                         "July", "August", "September",
                         "October", "November", "December");
  var totalSavings = 0;
  for(var i=0; i < 12; i++){
    console.log("hello");
    var tr = document.createElement('TR');
    var month = months[i];
    var percentageToSave = (startPercentageSavings + (i/100)).toFixed(2);
    var savings = (salary * percentageToSave).toFixed(2);
    totalSavings += parseFloat(savings);
    var savingsRow = new Array(month, percentageToSave, savings)
    for (j = 0; j < 3; j++) {
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(savingsRow[j]));
        tr.appendChild(td);
        //td.appendChild(document.createTextNode(percentageToSave));
        //td.appendChild(document.createTextNode(savings));
    }
    tableBody.appendChild(tr);
  }

  var savingsLabel = document.getElementById("savingsLabel")
  while (savingsLabel.hasChildNodes()) {
    savingsLabel.removeChild(savingsLabel.lastChild);
  }
  console.log(totalSavings);
  savingsLabel.appendChild(document.createTextNode(totalSavings.toLocaleString()))


}
