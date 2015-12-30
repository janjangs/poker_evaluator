"use strict()";
var card = ["2", "3", "4", "5", "6", "7", "8", "9", "B", "E", "F", "K", "L"];
function cellCard(cards){
"use strict";
  var cardsList = [];
  cards = String(cards);
  cards = cards.toUpperCase();
  cards = cards.replace("10", "B").replace("A", "L").replace("J", "E").replace("Q", "F");
  cardsList = cards.split(" ");
  cardsList = cardsList.sort();
  if(cardsList.length < 5){
    return "value incomplete";
  }else if(checkValid(cardsList)){
    return "Cards invalid";
  }else{
    return spellCard(cardsList);
  }
  //return cardsList.toString();
}
function checkValid(cardList){
"use strict";
  for(var i = 0; i < cardList.length; i++) {
    for(var j = i + 1; j < cardList.length; j++){
      if(cardList[i] === cardList[j]){
       return true;
      }
    }
  }
  return false;
}

function spellCard(cardList){
"use strict";
  var same = samePoint(cardList);
  if(same === 0){
    if(royal(cardList) && straight(cardList) && flush(cardList)){
        return "royal straight flush";
    }else if(straight(cardList) && flush(cardList)){
        return "straight flush";
    }else if(straight(cardList)){
      return "straight ";
    }else if(flush(cardList)){
      return "flush ";
    }else{
      return "bast card is " + maxPoint(cardList).replace("L", "A").replace("B", "10").replace("E", "J").replace("F", "Q");
    }
  }else if(same < 3){
    return same + " Pair";
  }else if(same < 5){
    return same + " of a kind";
  }
  //console.log(same);
}
function maxPoint(cardList){
"use strict";
  var cardsMax = cardList[cardList.length - 1];
  return cardsMax;
}
function straight(cardList){
"use strict";
  for(var i = cardList.length - 1; i > 0; i--){
    var numCard1 = card.indexOf(cardList[i].substr(0, 1));
    var numCard2 = card.indexOf(cardList[i - 1].substr(0, 1));
      if(numCard1 - numCard2 !== 1){
        return false;
      }
  }
  return true;
}
function royal(cardList){
"use strict";
  if(card.indexOf(cardList[cardList.length - 1].substr(0, 1)) !== 12 ){
      return false;
  }
  return true;
}
function flush(cardList){
"use strict";
  for(var i = cardList.length - 1; i > 0; i--){
    var numCard1 = cardList[i].substr(1, 2);
    var numCard2 = cardList[i - 1].substr(1, 2);
      if(numCard1 !== numCard2){
        return false;
      }
  }
  return true;
}
function samePoint(cardList){
"use strict";
  var point = 0;
  for(var i = 0; i < cardList.length ; i++) {
    for(var j = i + 1; j < cardList.length - 1 ; j++) {
      var numCard1 = cardList[i].substr(0, 1);
      //var numCard2 = cardList[i+1].substr(0, 1);
      var numCard2 = cardList[j].substr(0, 1);
      if(numCard1 === numCard2){
       point++;
       //break;
      }
    }
  }
// console.log("point : " + point);
return point;
}
// console.log(cellCard("AD"));
// console.log(cellCard("AD 3S 3S 4S 5S"));
// console.log(cellCard("2S 3S 5S 4S 2D"));
// console.log(cellCard("2S 3S 3D 4S 2D"));
// console.log(cellCard("AD 3D 3S 3C 5S"));
// console.log(cellCard("10D JD KS QC AS"));
// console.log(cellCard("10D 9D 8S 7C 6S"));
// console.log(cellCard("JD 9D 8S 7C 6S"));
// console.log(cellCard("10D 9D 8D 7D 6D"));
// console.log(cellCard("As 9D 8D 7D 6D"));
// console.log(cellCard("AD KD QD JD 10D"));
// console.log(cellCard("2D KD QD JD 10D"));
// console.log(cellCard("AD QD KD 10D JD"));
