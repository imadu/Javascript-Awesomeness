'use strict'

/*create a close button for each of the items*/

var listItems = document.getElementsByTagName("LI");

for (let i = 0; i < listItems.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	listItems[i].appendChild(span);
}

//click the close button to hide the content
var close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}


var list =document.querySelector('ul');
list.addEventListener('click', function(ev){
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

//create a new todo
// Create a new list item when clicking on the "Add" button
function addNewElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("newInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  document.getElementById("newInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  li.className = "list-group-item";
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 