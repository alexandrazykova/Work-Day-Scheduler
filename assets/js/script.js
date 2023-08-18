// Wraps all code to finish rendering HTML before running
$(document).ready(function () {

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

    function updateHourBlocks() {
        const currentHour = dayjs().hour();
        // loops all the time-block elements to apply selected class
        $(".time-block").each(function () {
            const blockHour = parseInt($(this).attr("id").split("-")[1]);
            const timeBlockElement = $(this);

            if (blockHour < currentHour) {
                timeBlockElement.removeClass("present future").addClass("past");
            } else if (blockHour === currentHour) {
                timeBlockElement.removeClass("past future").addClass("present");
            } else {
                timeBlockElement.removeClass("past present").addClass("future");
            }
        });
    }

    // Initial call to set the initial time block colors
    updateHourBlocks();

    // Update time block colors every minute
    setInterval(updateHourBlocks, 60000);

});