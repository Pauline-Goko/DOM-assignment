// Change document background color to silver
document.body.style.backgroundColor = "silver";

// Change the font color for h1 title tag to green
var title = document.getElementById("title");
title.style.color = "green";

// Change the font case for h3 title tags to uppercase
var h3Tags = document.getElementsByTagName("h3");
for (var i = 0; i < h3Tags.length; i++) {
  h3Tags[i].style.textTransform = "uppercase";
}

// Add one more fruit to the fruits list
var fruList = document.getElementById("fruList");
var newFruit = document.createElement("li");
newFruit.appendChild(document.createTextNode("Apples"));
fruList.appendChild(newFruit);

// Add one more vegetable to the vegetables list
var vegList = document.getElementById("vegList");
var newVegetable = document.createElement("li");
newVegetable.appendChild(document.createTextNode("Carrots"));
vegList.appendChild(newVegetable);
