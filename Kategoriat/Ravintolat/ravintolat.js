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

  if (priceRange == 1) {
    if (selected.length != 0) {
      for (var i = 0; i < selected.length; i++) {
        if (
          selected[i] != "diverse" &&
          selected[i] != "comfy" &&
          selected[i] != "snack" &&
          selected[i] != "everyone" &&
          selected[i] != "vegetarian"
        ) {
          document.getElementById(selected[i]).style.display = "";
        }
      }
    } else {
      var pr1Destinations = ["group", "disabled", "comfy"];
      for (var i = 0; i < pr1Destinations.length; i++) {
        document.getElementById(pr1Destinations[i]).style.display = "";
      }
    }
  }

  if (priceRange == 2) {
    if (selected.length != 0) {
      for (var i = 0; i < selected.length; i++) {
        if (selected[i] != "diverse" && selected[i] != "comfy") {
          document.getElementById(selected[i]).style.display = "";
        }
      }
    } else {
      var pr2Destinations = [
        "group",
        "disabled",
        "snack",
        "everyone",
        "vegetarian",
      ];

      for (var i = 0; i < pr2Destinations.length; i++) {
        document.getElementById(pr2Destinations[i]).style.display = "";
      }
    }
  }

  if (priceRange == 3) {
    if (selected.length != 0) {
      for (var i = 0; i < selected.length; i++) {
        document.getElementById(selected[i]).style.display = "";
      }
    } else {
      var pr3Destinations = [
        "group",
        "disabled",
        "diverse",
        "comfy",
        "snack",
        "everyone",
        "comfy",
        "vegetarian",
      ];

      for (var i = 0; i < pr3Destinations.length; i++) {
        document.getElementById(pr3Destinations[i]).style.display = "";
      }
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
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("tekstikentta");
  filter = input.value.toUpperCase();
  ul = document.getElementById("listaKohteista");
  li = ul.getElementsByTagName("li");

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
  search();
}
