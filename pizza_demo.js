function getReceipt() {
	text1 = "<h3>You Ordered:</h3>";
  text2 = "<h3>Subtotal:</h3>";
	var runningTotal = 0;
	var sizeTotal = [];
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
    text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
    text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
    text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
    text2 = text2+sizeTotal+"<br>";
	}
	runningTotal = sizeTotal;
  getCrust(runningTotal,text1,text2);

};

//CRUST

          function getCrust(runningTotal,text1,text2) {
          var runningTotal = runningTotal;
          var crustTotal = [];
          var crustArray = document.getElementsByClassName("crust");
          for (var j = 0; j < crustArray.length; j++) {
          if (crustArray[j].checked) {
          var selectedCrust = crustArray[j].value;
            text1 = text1+selectedCrust +"<br>";
            }

          }
          if (selectedCrust === "Plain Crust") {
            crustTotal = 0;
            text2 = text2+crustTotal+"<br>";
          } else if (selectedCrust === "Garlic Butter Crust") {
            crustTotal = 0;
            text2 = text2+crustTotal+"<br>";
          } else if (selectedCrust === "Cheese Stuffed Crust") {
            crustTotal = 3;
            text2 = text2+crustTotal+"<br>";
          } else if (selectedCrust === "House Special Crust") {
            crustTotal = 0;
            text2 = text2+crustTotal+"<br>";
            }
          runningTotal = (runningTotal + crustTotal);
          getSauce(runningTotal,text1,text2);
      };

            //Sauce

          function getSauce(runningTotal,text1,text2) {
          	var sauceArray = document.getElementsByClassName("sauce");
          	for (var j = 0; j < sauceArray.length; j++) {
          		if (sauceArray[j].checked) {
          			selectedSauce = sauceArray[j].value;
          			text1 = text1 + selectedSauce +"<br>";
          		}
          	}
          	text2 = text2 + 0 + "<br>";
          	getCheese(runningTotal,text1,text2)
          };

      //CHEESE

  function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var l = 0; l < cheeseArray.length; l++) {
		if (cheeseArray[l].checked) {
			selectedCheese = cheeseArray[l].value;
		}
	 if (selectedCheese === "Extra Cheese")
			cheeseTotal = 3;
	}
  text1 = text1+selectedCheese+"<br>";
  text2 = text2+cheeseTotal+"<br>";
  runningTotal = (runningTotal + cheeseTotal);
	getVeggies(runningTotal,text1,text2);

};

 // VEGGIES
 function getVeggies(runningTotal,text1,text2) {
   var veggiesTotal = 0;
   var selectedVeggies = [];
   var veggiesArray = document.getElementsByClassName("veggies");
   for (var j = 0; j < veggiesArray.length; j++) {
     if (veggiesArray[j].checked) {
       selectedVeggies.push(veggiesArray[j].value);
     }

   }
   var veggiesCount = selectedVeggies.length;
   if (veggiesCount > 1) {
     veggiesTotal = (veggiesCount - 1);
   } else {
     veggiesTotal = 0;
   }
   runningTotal = (runningTotal + veggiesTotal);
   for (var j = 0; j < selectedVeggies.length; j++) {
     text1 = text1+selectedVeggies[j]+"<br>";
     if (veggiesCount <= 1) {
       text2 = text2 + 0 + "<br>";
       veggiesCount = veggiesCount - 1;
     } else if (veggiesCount == 2) {
       text2 = text2 + 1 + "<br>";
       veggiesCount = veggiesCount - 1;
     } else {
       text2 = text2 + 1 + "<br>";
       veggiesCount = veggiesCount - 1;
     }
  }

   getMeat(runningTotal,text1,text2);
};

// MEATS

function getMeat(runningTotal,text1,text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var m = 0; m < meatArray.length; m++) {
		if (meatArray[m].checked) {
			selectedMeat.push(meatArray[m].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var m = 0; m < selectedMeat.length; m++) {
			text1 = text1+selectedMeat[m]+"<br>";
			if (meatCount <= 1) {
				text2 = text2 + 0 +"<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			}
  }
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
  document.getElementById("totalPrice1").innerHTML = "</h3>Total: <strong>$"+runningTotal+" "+"</strong></h3>";
};
  function clearAll() {
  document.getElementById("frmMenu").reset();
  document.getElementById("cart").style.opacity=0
};
