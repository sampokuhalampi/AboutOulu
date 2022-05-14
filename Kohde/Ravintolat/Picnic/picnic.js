let imageIndex = 1;
showImage(imageIndex);

//Changes the image
function changeImage(n) {
  showImage((imageIndex += n));
}

//Shows the current image
function currentImage(n) {
  showImage((imageIndex = n));
}

//Shows the image according to the parameter n
function showImage(n) {
  let i;
  let images = document.getElementsByClassName("img");
  let dots = document.getElementsByClassName("dot");
  if (n > images.length) {
    imageIndex = 1;
  }
  if (n < 1) {
    imageIndex = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  images[imageIndex - 1].style.display = "block";
  dots[imageIndex - 1].className += " active";
}

document.getElementById("emailCheckbox").onchange = function () {
  document.getElementById("email").disabled = !this.checked;
};

//Creates html-string that is rendered to the page
function render(data) {
  console.log("arvosana: " + arvosana);
  var arvosana = checkRadiobutton();

  if (data.email == undefined && arvosana == undefined) {
    console.log("email undefined");

    var html =
      "<div class='comment'><div>" +
      "<div class='nameComment'>" +
      data.name +
      "</div>" +
      "</div>" +
      "<div class='titleComment'>" +
      data.title +
      "</div>" +
      "<br>" +
      "<div class='commentComment'>" +
      data.body +
      "</div>" +
      "</div></div>";
  }
  if (data.email != undefined && arvosana != undefined) {
    console.log("email accepted");

    var html =
      "<div class='comment'><div>" +
      "<div class='nameComment'>" +
      data.name +
      "</div>" +
      "</div>" +
      "<div class='titleComment'>" +
      data.title +
      "</div>" +
      "<br>" +
      "<div class='commentComment'>" +
      data.body +
      "</div>" +
      "<br>" +
      "<div class='emailComment'>" +
      data.email +
      "</div>" +
      "<br>" +
      "<div class='arvosanaKommentti'>" +
      "Arvosana: " +
      checkRadiobutton() +
      "</div>" +
      "</div></div>";
  }
  if (data.email == undefined && arvosana != undefined) {
    console.log("email undefined");

    var html =
      "<div class='comment'><div>" +
      "<div class='nameComment'>" +
      data.name +
      "</div>" +
      "</div>" +
      "<div class='titleComment'>" +
      data.title +
      "</div>" +
      "<br>" +
      "<div class='commentComment'>" +
      data.body +
      "</div>" +
      "<br>" +
      "<div class='arvosanaKommentti'>" +
      "Arvosana: " +
      checkRadiobutton() +
      "</div>" +
      "</div></div>";
  }
  if (data.email != undefined && arvosana == undefined) {
    console.log("email accepted");

    var html =
      "<div class='comment'><div>" +
      "<div class='nameComment'>" +
      data.name +
      "</div>" +
      "</div>" +
      "<div class='titleComment'>" +
      data.title +
      "</div>" +
      "<br>" +
      "<div class='commentComment'>" +
      data.body +
      "</div>" +
      "<br>" +
      "<div class='emailComment'>" +
      data.email +
      "</div>" +
      "</div></div>";
  }

  $("#container").append(html);
}

//Adds the comment to the comment section
$(document).ready(function () {
  var comment = [
    {
      name: "Antte",
      title: "Suosittelen",
      body: "Picnic on loistava paikka nopeaa lounasta varten. Viihtyisät tilat ja asiakaspalvelu on erittäin miellyttävää!",
      email: "malli.mallikas@testi.com",
    },
  ];

  for (var i = 0; i < comment.length; i++) {
    render(comment[i]);
  }

  $("#addComment").click(function () {
    console.log("julkaise");

    const cb = document.querySelector("#emailCheckbox");
    const emailField = document.querySelector("#email");

    if (cb.checked == true && emailField.length != 0) {
      console.log("checkbox checked (addComment)");
      var addObj = {
        name: $("#name").val(),
        title: $("#title").val(),
        body: $("#bodyText").val(),
        email: $("#email").val(),
      };

      render(addObj);
      $("#name").val("");
      $("#title").val("");
      $("#bodyText").val("");
      $("#email").val("");
    } else {
      console.log("checkbox unchecked (addComment)");
      var addObj = {
        name: $("#name").val(),
        title: $("#title").val(),
        body: $("#bodyText").val(),
      };

      render(addObj);
      $("#name").val("");
      $("#title").val("");
      $("#bodyText").val("");
    }
  });
});

function goBack() {
  history.back();
}

//Checks which radiobutton is selected
function checkRadiobutton() {
  if (document.getElementById("t1").checked == true) {
    console.log("1");
    return 1;
  }
  if (document.getElementById("t2").checked == true) {
    console.log("2");
    return 2;
  }
  if (document.getElementById("t3").checked == true) {
    console.log("3");
    return 3;
  }
  if (document.getElementById("t4").checked == true) {
    console.log("4");
    return 4;
  }
  if (document.getElementById("t5").checked == true) {
    console.log("5");
    return 5;
  }
}

function returnToMain() {
  location.href = "/Main Screen/index.html";
}
