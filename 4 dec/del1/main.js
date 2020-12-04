
function main(){

}

function controlMyValues(){
  var strToChoppUp = document.getElementById("valuesToCalculate").value;
  var choppedUpStr = strToChoppUp.split("\n");

  findMyValues(choppedUpStr);
}

function findMyValues(choppedUpStr){
  var totPassports = 0;
  var invalidPassports = 0;
  var validPassports = 0;
  var allPassports = [];
  var passport = [];
  var filteredPassportsArray = [];

  for (var i = 0; i < choppedUpStr.length; i++){
    if(choppedUpStr[i] != ""){
      passport += ","
      passport += choppedUpStr[i].split(" ");
      var passportArray = passport.split(",");
      filteredPassportsArray = passportArray.filter(function (val) {
        return val != "";
      });
      if( i == choppedUpStr.length - 1){
        allPassports.push(filteredPassportsArray);
      }
    }else{
      allPassports.push(filteredPassportsArray);
      passport = [];
    }
  }
  for(var i = 0; i < allPassports.length; i++){
    var requiredValuesWithException = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    var valid = true;
    var passportInfoValues = [];
    for( var x = 0; x < allPassports[i].length; x++){
      var passportInfo = allPassports[i][x].split(":")
      passportInfoValues.push(passportInfo[0]);
    }

    for(var z = 0; z < requiredValuesWithException.length; z++){
      if(!passportInfoValues.includes(requiredValuesWithException[z])){
        valid = false;
      }
    }
    if(valid == true){
      validPassports++;
      totPassports++;
    }else{
      invalidPassports++;
      totPassports++;
    }
  }
  displayValues(totPassports, invalidPassports, validPassports);
}

function displayValues(totPassports, invalidPassports, validPassports){
  var displayResponse = document.getElementsByClassName("response");
  displayResponse[0].innerHTML = totPassports;
  displayResponse[1].innerHTML = validPassports;
  displayResponse[2].innerHTML = invalidPassports;
  displayResponse[3].innerHTML = "DONE";
  displayResponse[4].innerHTML = validPassports;
}


window.onload = main();
