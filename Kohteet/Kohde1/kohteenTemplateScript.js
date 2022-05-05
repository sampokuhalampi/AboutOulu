function render(data) {
  var html =
    "<div class='commentBox'><div class='leftPanelImg'></div><div class='rightPanel'><span>" +
    data.name +
    "</div><p>" +
    data.body +
    "</p></div><div class='clear'></div></div>";

  $("#container").append(html);
}

$(document).ready(function () {
  var comment = [{ name: "Testikäyttäjä", body: "Ihan hieno paikka" }];

  for (var i = 0; i < comment.length; i++) {
    render(comment[i]);
  }

  $("#addComment").click(function () {
    var addObj = {
      name: $("#name").val(),
      body: $("#bodyText").val(),
    };

    comment.push(addObj);
    render(addObj);
    $("#name").val("");
    $("#bodyText").val("");
  });
});

function takaisin() {
  location.href = "/Main Screen/main.html";
}

button.onClick = takaisin()({});
