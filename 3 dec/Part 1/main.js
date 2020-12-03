
function main(){

}

function controlMyValues(){
  var mapToChoppUp = document.getElementById("valuesToCalculate").value;
  var choppedUpMap = mapToChoppUp.split("\n");

  findMyValues(choppedUpMap);
}

function findMyValues(choppedUpMap){
  var clearSpaces = 1;
  var treesEncountered = 0;
  var currentPatternNums = choppedUpMap[0].split("");
  var finishedPosition = 3;

  for(var i = 1; i < choppedUpMap.length; i ++){
    var currentPattern = choppedUpMap[i].split("");
    //var finishedPosition = prevEncounters;
    if(currentPattern[finishedPosition] == "#"){
      treesEncountered++;
    }else{
      clearSpaces++;
    }
    finishedPosition += 3;
    if(finishedPosition >= currentPattern.length){
      var prevEncounters = finishedPosition;
      finishedPosition = finishedPosition - currentPattern.length;
    }
  }
  calculateMyValues(choppedUpMap, clearSpaces, treesEncountered);
}

function calculateMyValues(choppedUpMap, clearSpaces, treesEncountered){
  var displayResponse = document.getElementsByClassName("response");
  displayResponse[0].innerHTML = choppedUpMap.length;
  displayResponse[1].innerHTML = clearSpaces;
  displayResponse[2].innerHTML = treesEncountered;
  displayResponse[3].innerHTML = "DONE";
  displayResponse[4].innerHTML = "CRASH";
}


window.onload = main();
