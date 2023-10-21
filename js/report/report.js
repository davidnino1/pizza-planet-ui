
fetch(`http://127.0.0.1:5000/report`)
    .then(response => response.json())
    .then(report => {
        let template = createRowTemplate(report);
        $("#report").append(template);
    })
    .then(
        () => {
            $("#report-body").find("p").each(function () {
                if ($(this).text() == " - orders") {
                    $(this).hide();
                }
            })
        }
    );

/**
 * Find the template tag and populate it with the data
 * @param report
 */
function createRowTemplate(report) {
    let template = $("#report-template")[0].innerHTML;
    return Mustache.render(template, report);
}
