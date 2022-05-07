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
      name: "Testikäyttäjä",
      title: "Suosittelen",
      body: "Ihan hieno paikka",
      email: "testi@testi.com",
    },
  ];

  for (var i = 0; i < comment.length; i++) {
    render(comment[i]);
  }

  $("#lisaaKommentti").click(function () {
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

// if (document.getElementById("sahkopostiCheckbox").checked) {
//   comment.push(addObj);
//   render(addObj);
//   $("#name").val("");
//   $("#title").val("");
//   $("#bodyText").val("");
//   $("#sahkoposti").val("");
// } else {
//   comment.push(addObj);
//   render(addObj);
//   $("#name").val("");
//   $("#title").val("");
//   $("#bodyText").val("");
// }
