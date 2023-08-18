// Wraps all code that interacts with the DOM so it isn't run 
// until the browser has finished rendering whole HTML
$(document).ready(function(){




// Display the current date in the header
var now = dayjs();
$("#currentDay").text(now.format('dddd, MMMM D, YYYY'));


var saveBtn = $(".saveBtn"); // selecting all saveBtn(s)
// Add a click event listener to save buttons
saveBtn.on("click", function () {
    // for the button being clicked selecting immed parent with time-block class and value id
    var timeEl = $(this).parent(".time-block").attr("id");

    console.log("Saved", timeEl);
    // Selecting sibling elem with class description, retrieves entered users content
    var description = $(this).siblings(".description").val();

    console.log("Description:", description);
    });
});
// How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
