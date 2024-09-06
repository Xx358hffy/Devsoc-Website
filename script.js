// Store the initial positions of the draggable elements
var initialPositions = {};

// Initialize draggable elements and save their original positions
dragElement(document.getElementById("intro_back"));
dragElement(document.getElementById("intro2"));
dragElement(document.getElementById("image1"));
dragElement(document.getElementById("nunuGif"));
dragElement(document.getElementById("Hobbies"));
dragElement(document.getElementById("image2"));

// Save the original positions of elements
function saveOriginalPositions(element) {
    initialPositions[element.id] = {
        top: element.offsetTop,
        left: element.offsetLeft
    };
}

saveOriginalPositions(document.getElementById("intro_back"));
saveOriginalPositions(document.getElementById("intro2"));
saveOriginalPositions(document.getElementById("image1"));
saveOriginalPositions(document.getElementById("nunuGif"));
saveOriginalPositions(document.getElementById("Hobbies"));
saveOriginalPositions(document.getElementById("image2"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  // Set mousedown event to make element draggable
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    // Get the mouse cursor position at startup
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Call function on mouse move
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    // Calculate new cursor position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Set the element's new position
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // Stop moving when mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Function to restore the positions of the draggable elements
function restorePositions() {
  for (var id in initialPositions) {
    var element = document.getElementById(id);
    var pos = initialPositions[id];
    element.style.top = pos.top + "px";
    element.style.left = pos.left + "px";
  }
}