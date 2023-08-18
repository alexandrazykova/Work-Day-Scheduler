// Wraps all code to finish rendering HTML before running
$(document).ready(function(){

// Display the current date in the header
var now = dayjs();
$("#currentDay").text(now.format('dddd, MMMM D, YYYY'));

// selecting all saveBtn(s)
var saveBtn = $(".saveBtn"); 

// Loop through selected time block elements
$(".time-block").each(function () {
    var timeBlockEl = $(this).attr("id");
    var savedDescription = localStorage.getItem(timeBlockEl);
    
    // Displays saved description value in the textarea
    if (savedDescription !== null) {
      $(this).find(".description").val(savedDescription);
    }
});

// Add a click event listener to save buttons
saveBtn.on("click", function () {
    // for the button being clicked selecting immed parent with time-block class and value id
    var timeEl = $(this).parent(".time-block").attr("id");
    console.log("Saved", timeEl);

    // Selecting sibling elem with class description, retrieves entered users content
    var description = $(this).siblings(".description").val();
    console.log("Description:", description);

    localStorage.setItem(timeEl, description);

    });

   



});