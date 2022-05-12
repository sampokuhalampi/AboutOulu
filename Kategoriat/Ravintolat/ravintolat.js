function returnToMain() {
  location.href = "/Main Screen/main.html";
}

//button.onClick = takaisin()({});

function search() {
  console.log("hae painettu");
  var allDestinations = [
    "snack",
    "vegetarian",
    "everyone",
    "comfy",
    "disabled",
    "group",
    "diverse",
  ];

  for (var i = 0; i < allDestinations.length; i++) {
    document.getElementById(allDestinations[i]).style.display = "none";
  }

  var selected = checkSelected();

  var priceRange = checkPriceRange();

  console.log("hinta: " + priceRange);

  var imgDestination = document.querySelectorAll("img");
  // console.log(pr1Destination);
  // console.log(pr1Destination.getElementById("disabled"));

  if (selected.length != 0) {
    if (priceRange == 1) {
      for (var i = 0; i < selected.length; i++) {
        if (pr1.classList.contains(selected[i])) {
          document.getElementById(selected[i]).style.display = "";
        }
      }
    }

    if (priceRange == 2) {
      for (var i = 0; i < selected.length; i++) {
        if (selected[i] != "comfy" && selected[i] != "diverse") {
          document.getElementById(selected[i]).style.display = "";
        }
      }
    }
    if (priceRange == 3) {
      for (var i = 0; i < selected.length; i++) {
        document.getElementById(selected[i]).style.display = "";
      }
    }
  } else {
    for (var i = 0; i < allDestinations.length; i++) {
      document.getElementById(allDestinations[i]).style.display = "";
    }
  }
}

function checkSelected() {
  var chosen = [];

  if (document.getElementById("snackCB").checked == true) {
    console.log("pientä purtavaa valittu");
    chosen.push("snack");
  }
  if (document.getElementById("vegetarianCB").checked == true) {
    console.log("kasvisruoka valittu");
    chosen.push("vegetarian");
  }
  if (document.getElementById("everyoneCB").checked == true) {
    console.log("kaikenikäisille valittu");
    chosen.push("everyone");
  }
  if (document.getElementById("comfyCB").checked == true) {
    console.log("viihtyisä valittu");
    chosen.push("comfy");
  }
  if (document.getElementById("disabledCB").checked == true) {
    console.log("liikuntarajoitteisille valittu");
    chosen.push("disabled");
  }
  if (document.getElementById("groupCB").checked == true) {
    console.log("ryhmille valittu");
    chosen.push("group");
  }
  if (document.getElementById("diverseCB").checked == true) {
    console.log("monipuolinen valittu");
    chosen.push("diverse");
  }

  return chosen;
}

function checkPriceRange() {
  return document.getElementById("priceSlider").value;
}

function textSearch() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("tekstikentta");
  filter = input.value.toUpperCase();
  ul = document.getElementById("listaKohteista");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function clearCB() {
  console.log("haku cleared");

  var allDestinations = [
    "snackCB",
    "vegetarianCB",
    "everyoneCB",
    "comfyCB",
    "disabledCB",
    "groupCB",
    "diverseCB",
  ];

  for (var i = 0; i < allDestinations.length; i++) {
    document.getElementById(allDestinations[i]).checked = false;
  }
}
