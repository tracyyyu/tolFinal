// script.js
var modal = document.getElementById("floatingWindow");
var btn = document.getElementById("openBtn");
var btn2 = document.getElementById("onboarding");
var modal2 = document.getElementById("onboardingWindow");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];


btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// function next() {
//   content2.style.display = 'block';
//   content1.style.display = 'none';
// }

let currentIndex = 0;
const contents = document.querySelectorAll('.content');

function next() {
    contents[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % contents.length; // Loop back to the first item
    contents[currentIndex].style.display = 'block';
}




function displayInput() {
  // Get the user input from the textarea
  var userInput1 = document.getElementById("userInput1").value;
  var displayArea1 = document.getElementById("displayArea1");
  displayArea1.textContent = userInput1;

  var userInput2 = document.getElementById("userInput2").value;
  var displayArea2 = document.getElementById("displayArea2");
  displayArea2.textContent = userInput2;

  var userInput3 = document.getElementById("userInput3").value;
  var displayArea3 = document.getElementById("displayArea3");
  displayArea3.textContent = userInput3;

  var userInput4 = document.getElementById("userInput4").value;
  var displayArea4 = document.getElementById("displayArea4");
  displayArea4.textContent = userInput4;

  var userInput5 = document.getElementById("userInput5").value;
  var displayArea5 = document.getElementById("displayArea5");
  displayArea5.textContent = userInput5;

}

function exportToPDF() {
  // Get the text to export from the textarea
  var textToExport = document.getElementById("userInput1").value;

  // Create a new jsPDF instance
  var doc = new jsPDF();

  // Add text to the PDF document
  doc.text(textToExport, 10, 10);

  // Save the PDF document
  doc.save("exported_text.pdf");
}


// btn.onclick = function() {
//   // Get the user input from the textarea
//   // Display the user input somewhere else on the website
//   displayArea.textContent = userInput;
// }