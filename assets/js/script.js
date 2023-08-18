// Wraps all code that interacts with the DOM so it isn't run 
// until the browser has finished rendering whole HTML
$(document).ready();

var saveBtnEl = $(".saveBtn");
// How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?


// Display the current date in the header
var now = dayjs();
$("#currentDay").text(now.format('dddd, MMMM D, YYYY'));

// Add a click event listener to save buttons
saveBtnEl.on("click", function () {
});
