//supress the submit button default action using event.preventDefault()

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("the form will not submit")
});

//input tasks
//let task = document.getElementById("text")

//delete function to remove tasks
//document.getElementsByClassName("new-task-description")


//A priority value selected from a dropdown that is used 
//to determine the color of the text in the list
//eg red for igh priority, yellow for medium, green for low

//addition, display tasks in ascending or descending order based on priority

//ability to edit tasks















