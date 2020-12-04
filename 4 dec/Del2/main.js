
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
    var passportInfo = [];
    for( var x = 0; x < allPassports[i].length; x++){
      var passportInfoChopped = allPassports[i][x].split(":")
      passportInfo.push(passportInfoChopped[0]);
      passportInfoValues.push(passportInfoChopped[1]);
    }

    for(var z = 0; z < requiredValuesWithException.length; z++){
      if(!passportInfo.includes(requiredValuesWithException[z])){
        valid = false;
      }
    }
    if(valid != false){
      valid = validatePassInfo(passportInfo, passportInfoValues, requiredValuesWithException);
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

function validatePassInfo(passportInfo, passportInfoValues, requiredValuesWithException){
  var controlStringNum = /^[0-9]+$/;
  for(var i = 0; i < passportInfo.length; i++){
    switch(passportInfo[i]) {
      //byr - four digits; at least 1920 and at most 2002.
      case requiredValuesWithException[0]:
        if(passportInfoValues[i].length != 4){
          return false;
        }else if(parseInt(passportInfoValues[i]) < 1920 || parseInt(passportInfoValues[i]) > 2002){
          return false;
        }else if(!passportInfoValues[i].match(controlStringNum)){
          return false;
        }
        break;
      //iyr - four digits; at least 2010 and at most 2020.
      case requiredValuesWithException[1]:
        if(passportInfoValues[i].length != 4){
          return false;
        }else if(parseInt(passportInfoValues[i]) < 2010 || parseInt(passportInfoValues[i]) > 2020){
          return false;
        }else if(!passportInfoValues[i].match(controlStringNum)){
          return false;
        }
        break;
      //eyr - four digits; at least 2020 and at most 2030.
      case requiredValuesWithException[2]:
        if(passportInfoValues[i].length != 4){
          return false;
        }else if(parseInt(passportInfoValues[i]) < 2020 || parseInt(passportInfoValues[i]) > 2030){
          return false;
        }else if(!passportInfoValues[i].match(controlStringNum)){
          return false;
        }
        break;
      //hgt (Height) - a number followed by either cm or in:
      //If cm, the number must be at least 150 and at most 193.
      //If in, the number must be at least 59 and at most 76.
      case requiredValuesWithException[3]:
        var measurement = passportInfoValues[i][passportInfoValues[i].length - 2] + passportInfoValues[i][passportInfoValues[i].length - 1];
        if(measurement == "cm"){
          var centimeters = passportInfoValues[i].slice(0, passportInfoValues[i].length - 1);
          if(parseInt(centimeters) < 150 || parseInt(centimeters) > 193){
            return false;
          }
        }else if(measurement == "in"){
          var inches = passportInfoValues[i].slice(0, passportInfoValues[i].length - 1);
          if(parseInt(inches) < 59 || parseInt(inches) > 76){
            return false;
          }
        }else{
          return false;
        }
        break;
      //hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
      case requiredValuesWithException[4]:
      var controlStringContent = /^[0-9a-zA-Z]+$/;
      var hairColor = passportInfoValues[i].slice(1, passportInfoValues[i].length - 1);
          if(passportInfoValues[i][0] != "#" || passportInfoValues[i].length != 7){
            return false;
          }else if(!hairColor.match(controlStringContent)){
            return false;
          }
        break;
        //ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
      case requiredValuesWithException[5]:
        var eclVariation = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
        if(!eclVariation.includes(passportInfoValues[i])){
          return false;
        }
        break;
      //pid (Passport ID) - a nine-digit number, including leading zeroes
      case requiredValuesWithException[6]:
        if(passportInfoValues[i].length != 9){
          return false;
        }else if(!passportInfoValues[i].match(controlStringNum)){
          return false;
        }
      break;
      default:
    }
  }
  return true;
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
