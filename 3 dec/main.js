
function main(){

}

function controlMyValues(){
  var mapToChoppUp = document.getElementById("valuesToCalculate").value;
  var choppedUpMap = mapToChoppUp.split("\n");

  findMyValues(choppedUpMap);
}

function findMyValues(choppedUpMap){
  var clearSpaces = 1;
  var treesEncounteredPattern1 = 0;
  var treesEncounteredPattern2 = 0;
  var treesEncounteredPattern3 = 0;
  var treesEncounteredPattern4 = 0;
  var treesEncounteredPattern5 = 0;

  var currentPatternNums = choppedUpMap[0].split("");
  var finishedPosition1 = 1;
  var finishedPosition2 = 3;
  var finishedPosition3 = 5;
  var finishedPosition4 = 7;

  for(var i = 1; i < choppedUpMap.length; i ++){
    var currentPattern = choppedUpMap[i].split("");
    if(currentPattern[finishedPosition1] == "#"){
      treesEncounteredPattern1++;
    }
    if(currentPattern[finishedPosition2] == "#"){
      treesEncounteredPattern2++;
    }
    if(currentPattern[finishedPosition3] == "#"){
      treesEncounteredPattern3++;
    }
    if(currentPattern[finishedPosition4] == "#"){
      treesEncounteredPattern4++;
    }
    finishedPosition1 += 1;
    finishedPosition2 += 3;
    finishedPosition3 += 5;
    finishedPosition4 += 7;
    if(finishedPosition1 >= currentPattern.length){
      var prevEncounters = finishedPosition1;
      finishedPosition1 = finishedPosition1 - currentPattern.length;
    }
    if(finishedPosition2 >= currentPattern.length){
      var prevEncounters = finishedPosition2;
      finishedPosition2 = finishedPosition2 - currentPattern.length;
    }
    if(finishedPosition3 >= currentPattern.length){
      var prevEncounters = finishedPosition3;
      finishedPosition3 = finishedPosition3 - currentPattern.length;
    }
    if(finishedPosition4 >= currentPattern.length){
      var prevEncounters = finishedPosition4;
      finishedPosition4 = finishedPosition4 - currentPattern.length;
    }
  }
  finishedPosition1 = 1;
  for(var i = 2; i < choppedUpMap.length; i += 2){
    var currentPattern = choppedUpMap[i].split("");
    if(currentPattern[finishedPosition1] == "#"){
      treesEncounteredPattern5++;
    }

    finishedPosition1 += 1;
    if(finishedPosition1 >= currentPattern.length){
      var prevEncounters = finishedPosition1;
      finishedPosition1 = finishedPosition1 - currentPattern.length;
    }
  }
  calculateMyValues(treesEncounteredPattern1, treesEncounteredPattern2, treesEncounteredPattern3, treesEncounteredPattern4, treesEncounteredPattern5);
}

function calculateMyValues(treesEncounteredPattern1, treesEncounteredPattern2, treesEncounteredPattern3, treesEncounteredPattern4, treesEncounteredPattern5){
  var displayResponse = document.getElementsByClassName("response");
  displayResponse[0].innerHTML = treesEncounteredPattern1;
  displayResponse[1].innerHTML = treesEncounteredPattern2;
  displayResponse[2].innerHTML = treesEncounteredPattern3;
  displayResponse[3].innerHTML = treesEncounteredPattern4;
  displayResponse[4].innerHTML = treesEncounteredPattern5;
  displayResponse[5].innerHTML = treesEncounteredPattern1 * treesEncounteredPattern2 * treesEncounteredPattern3 * treesEncounteredPattern4 * treesEncounteredPattern5;
}


window.onload = main();
