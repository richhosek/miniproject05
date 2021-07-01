const projectNameInput = $("#project-name");
const projectTypeSelect = $("#project-type");
const hourlyRateInput = $("#hourly-rate");
const dueDate = $("#due-date");

$("#submit-button").on("click", function(event) {
    console.log("Submit Project")
    event.preventDefault();
    const daysLeft = moment(dueDate.val()).dayOfYear() - moment().dayOfYear();
    displayProject(
        projectNameInput.val(), 
        projectTypeSelect.val(),
        hourlyRateInput.val(),
        dueDate.val(),
        daysLeft,
        daysLeft * 8 * hourlyRateInput.val()
    )
});

function displayProject(name, type, rate, date, daysLeft, earnings) {
    $("#project-list")
    .append($("<tr>")
        .append(
            $("<td>").text(name),
            $("<td>").text(type),
            $("<td>").text(rate),
            $("<td>").text(date),
            $("<td>").text(daysLeft),
            $("<td>").text(earnings)
        )
    );
}