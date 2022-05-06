function render(data) {
  var html =
    "<div class='kommenttiBoksi'><div class='leftPanelImg'></div><div class='rightPanel'><span>" +
    data.name +
    "</div><p>" +
    data.title +
    "</div><p>" +
    data.body +
    "</p></div><div class='clear'></div></div>";

  $("#container").append(html);
}

$(document).ready(function () {
  var comment = [
    { name: "Testikäyttäjä", title: "Suosittelen", body: "Ihan hieno paikka" },
  ];

  for (var i = 0; i < comment.length; i++) {
    render(comment[i]);
  }

  $("#addComment").click(function () {
    var addObj = {
      name: $("#name").val(),
      title: $("#title").val(),
      body: $("#bodyText").val(),
    };

    comment.push(addObj);
    render(addObj);
    $("#name").val("");
    $("#title").val("");
    $("#bodyText").val("");
  });
});

function takaisin() {
  location.href = "/Main Screen/main.html";
}

button.onClick = takaisin()({});
