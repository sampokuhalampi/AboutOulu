document.getElementById("sahkopostiCheckbox").onchange = function () {
    document.getElementById("sahkoposti").disabled = !this.checked;
};

function render(data) {
    var html =
        "<div class='kommentti'><div>" +
        "<div class='nimiKommentti'>" +
        data.name +
        "</div>" +
        "</div>" +
        "<div class='otsikkoKommentti'>" +
        data.title +
        "</div>" +
        "<br>" +
        "<div class='kommenttiKommentti'>" +
        data.body +
        "</div>" +
        "<br>" +
        "<div class='sahkopostiKommentti'>" +
        data.email +
        "</div>" +
        "</div></div>";

    $("#container").append(html);
}

$(document).ready(function () {
    var comment = [
        {
            name: "Antte",
            title: "Suosittelen",
            body: "Viihdyimme perheeni kanssa hotellissa 4 yötä. Aamiainen sekä asiakaspalvelu olivat loistavia. Voin hyvällä mielin suositella hotellia kaikille!",
            email: "antte.heatta@gmail.com",
        },
    ];

    for (var i = 0; i < comment.length; i++) {
        render(comment[i]);
    }

    $("#addComment").click(function () {
        var addObj = {
            name: $("#name").val(),
            title: $("#title").val(),
            body: $("#bodyText").val(),
            email: $("#sahkoposti").val(),
        };

        //comment.push(addObj);
        render(addObj);
        $("#name").val("");
        $("#title").val("");
        $("#bodyText").val("");
        $("#sahkoposti").val("");
    });
});

function takaisin() {
    location.href = "/Main Screen/main.html";
}

button.onClick = takaisin()({});