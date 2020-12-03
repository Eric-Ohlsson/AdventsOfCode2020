
function main(){

}

function controlMyValues(){
  var textToChoppUp = document.getElementById("valuesToCalculate").value;
  var choppedUpString = textToChoppUp.split("\n");
  findMyValues(choppedUpString);
}

function findMyValues(choppedUpString){
  var valueNo1 = "";
  var valueNo2 = "";
  var valueNo3 = "";

  for(var i = 0; i < choppedUpString.length; i++){
    valueNo1 = choppedUpString[i];
    for(var x = 0; x < choppedUpString.length; x++){
      valueNo2 = choppedUpString[x];
      for(var z = 0; z < choppedUpString.length; z++){
        valueNo3 = choppedUpString[z];
        if(parseInt(valueNo1) + parseInt(valueNo2) + parseInt(valueNo3) == 2020){
          calculateMyValues(valueNo1, valueNo2, valueNo3);
          break;
        }
      }
      if(parseInt(valueNo1) + parseInt(valueNo2) + parseInt(valueNo3) == 2020){
        break;
      }
    }
    if(parseInt(valueNo1) + parseInt(valueNo2) + parseInt(valueNo3) == 2020){
      break;
    }
  }
}

function calculateMyValues(valueNo1, valueNo2, valueNo3){
  var displayResponse = document.getElementsByClassName("response");
  displayResponse[0].innerHTML = valueNo1;
  displayResponse[1].innerHTML = valueNo2;
  displayResponse[2].innerHTML = valueNo3;
  displayResponse[3].innerHTML = parseInt(valueNo1) + parseInt(valueNo2) + parseInt(valueNo3);
  displayResponse[4].innerHTML = parseInt(valueNo1) * parseInt(valueNo2) * parseInt(valueNo3);
}


window.onload = main();
