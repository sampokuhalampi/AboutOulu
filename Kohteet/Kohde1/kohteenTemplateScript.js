let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.getElementById("sahkopostiCheckbox").onchange = function () {
  document.getElementById("sahkoposti").disabled = !this.checked;
};

function render(data) {
  console.log("arvosana: " + arvosana);
  var arvosana = tarkistaRadiobutton();

  if (data.email == undefined && arvosana == undefined) {
    console.log("email undefined");

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
      "</div></div>";
  }
  if (data.email != undefined && arvosana != undefined) {
    console.log("email accepted");

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
      "<br>" +
      "<div class='arvosanaKommentti'>" +
      "Arvosana: " +
      tarkistaRadiobutton() +
      "</div>" +
      "</div></div>";
  }
  if (data.email == undefined && arvosana != undefined) {
    console.log("email undefined");

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
      "<div class='arvosanaKommentti'>" +
      "Arvosana: " +
      tarkistaRadiobutton() +
      "</div>" +
      "</div></div>";
  }
  if (data.email != undefined && arvosana == undefined) {
    console.log("email accepted");

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
  }

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
    console.log("julkaise");
    tarkistaRadiobutton();

    const cb = document.querySelector("#sahkopostiCheckbox");

    if (cb.checked == true) {
      console.log("checkbox checked (addComment)");
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
    } else {
      console.log("checkbox unchecked (addComment)");
      var addObj = {
        name: $("#name").val(),
        title: $("#title").val(),
        body: $("#bodyText").val(),
      };

      //comment.push(addObj);
      render(addObj);
      $("#name").val("");
      $("#title").val("");
      $("#bodyText").val("");
    }
  });
});

function takaisin() {
  location.href = "/Main Screen/main.html";
}

//button.onClick = takaisin()({});

function tarkistaRadiobutton() {
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
