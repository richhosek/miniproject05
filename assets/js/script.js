const projectNameInput = $("#project-name");
const projectTypeSelect = $("#project-type");
const hourlyRateInput = $("#hourly-rate");
const dueDateInput = $("#due-date");

// Add a new project to the list when we click on the Submit button
$("#submit-button").on("click", function(event) {
    console.log("Submit Project")
    event.preventDefault();
    const daysLeft = moment(dueDateInput.val()).dayOfYear() - moment().dayOfYear();
    const hourlyRate = hourlyRateInput.val();
    displayProject(
        projectNameInput.val(), 
        projectTypeSelect.val(),
        hourlyRate,
        dueDateInput.val(),
        daysLeft,
        daysLeft * 8 * hourlyRate
    );
    projectNameInput.val("");
    projectTypeSelect.val("");
    hourlyRateInput.val("");
    dueDateInput.val("")
});

// Creates a new project row in the table
function displayProject(name, type, rate, date, daysLeft, earnings) {
    $("#project-list")
    .append($("<tr>")
        .append(
            $("<td>").text(name),
            $("<td>").text(type),
            $("<td>").text(rate),
            $("<td>").text(date),
            $("<td>").text(daysLeft),
            $("<td>").text(earnings),
            $("<td>").append($("<button>").addClass("btn btn-danger delete").html("<i class='bi bi-trash'></i> Delete"))
        )
    );
}

// Deletes a row in the table when you click on its delete button
$("#project-list").on("click", ".delete", function(event){
    $(event.target).parent().parent().remove();
})