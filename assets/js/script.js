const projectNameInput = $("#project-name");
const projectTypeSelect = $("#project-type");
const hourlyRateInput = $("#hourly-rate");
const dueDateInput = $("#due-date");

$("#submit-button").on("click", function(event) {
    console.log("Submit Project")
    event.preventDefault();
    const daysLeft = moment(dueDateInput.val()).dayOfYear() - moment().dayOfYear();
    displayProject(
        projectNameInput.val(), 
        projectTypeSelect.val(),
        hourlyRateInput.val(),
        dueDateInput.val(),
        daysLeft,
        daysLeft * 8 * hourlyRateInput.val()
    );
    projectNameInput.val("");
    projectTypeSelect.val("");
    hourlyRateInput.val("");
    dueDateInput.val("")
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
            $("<td>").text(earnings),
            $("<td>").append($("<button>").addClass("btn btn-danger delete").text("Delete"))
        )
    );
}

$("#project-list").on("click", ".delete", function(event){
    $(event.target).parent().parent().remove();
})