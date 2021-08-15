//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/

var clickCount = 0;

var motivateButton = document.getElementById("motivateButton");

motivateButton.addEventListener('click', sendMotivation);

function sendMotivation() {
  clickCount += 1;

  // check if the button is clicked once
  if (clickCount == 1) {
    sendMotivation1();
  } 
  // check if the button is clicked twice
  else if (clickCount == 2) {
    sendMotivation2();
  }
  // check if the button is clicked more than twice
  else {
    sendMotivation3();
    resetClickCount();
  }
}

function sendMotivation1() {
  alert('You go girl!');
}

function sendMotivation2() {
  alert('You is smart');
}

function sendMotivation3() {
  alert('You is important');
}

function resetClickCount() {

}