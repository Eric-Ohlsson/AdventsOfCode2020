
function main(){

}

function controlMyValues(){
  var textToChoppUp = document.getElementById("valuesToCalculate").value;
  var passwordSequence = textToChoppUp.split("\n");
  var minTimes = [];
  var maxTimes = [];
  var letters = [];
  var passWords = [];

  for (var i = 0; i < passwordSequence.length; i++){
    var choppedUpSequence = passwordSequence[i].split(":");
    passWords.push(choppedUpSequence[1]);
    var passwordValidationsChoppedUp = choppedUpSequence[0].split(" ")
    letters.push(passwordValidationsChoppedUp[1]);
    var passwordNoValidationChoppedUp = passwordValidationsChoppedUp[0].split("-")
    minTimes.push(parseInt(passwordNoValidationChoppedUp[0]));
    maxTimes.push(parseInt(passwordNoValidationChoppedUp[1]));
  }
  findMyValues(minTimes, maxTimes, letters, passWords);
}

function findMyValues(minTimes, maxTimes, letters, passWords){
  var validPasswords = 0;
  var invalidPasswords = 0;

  for(var i = 0; i < passWords.length; i++){
    var characters = passWords[i].split("");
    //var amountOfChars = 0;
    //for(var x = 0; x < characters.length; x++){
      if(characters[minTimes[i]] == letters[i] || characters[maxTimes[i]] == letters[i]){
        if(characters[minTimes[i]] != characters[maxTimes[i]]){
          validPasswords++;
        }else{
          invalidPasswords++;
        }
      }else{
        invalidPasswords++;
      }
    //}
    /*if(amountOfChars >= minTimes[i] && amountOfChars <= maxTimes[i]){
      validPasswords++;
    }else{
      invalidPasswords++;
    }*/
  }
  calculateMyValues(validPasswords, invalidPasswords);
}

function calculateMyValues(validPasswords, invalidPasswords){
  var displayResponse = document.getElementsByClassName("response");
  displayResponse[0].innerHTML = "VALID";
  displayResponse[1].innerHTML = validPasswords;
  displayResponse[2].innerHTML = "INVALID";
  displayResponse[3].innerHTML = invalidPasswords;
  displayResponse[4].innerHTML = validPasswords;
}


window.onload = main();
