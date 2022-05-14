//Returns the user to the main page
function returnToMain() {
  location.href = "/index.html";
}

//Search funtion shows destinations that match the search parameters
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
    var pr1Selected = [];
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
          pr1Selected[i] = selected[i];
        }
      }
      filteringShow(pr1Selected);
    } else {
      var pr1Destinations = ["group", "disabled"];
      filteringShow(pr1Destinations);
      for (var i = 0; i < pr1Destinations.length; i++) {
        document.getElementById(pr1Destinations[i]).style.display = "";
      }
    }
  }

  if (priceRange == 2) {
    var pr2Selected = [];
    if (selected.length != 0) {
      for (var i = 0; i < selected.length; i++) {
        if (selected[i] != "diverse" && selected[i] != "comfy") {
          document.getElementById(selected[i]).style.display = "";
          pr2Selected[i] = selected[i];
        }
      }
      filteringShow(pr2Selected);
    } else {
      var pr2Destinations = [
        "group",
        "disabled",
        "snack",
        "everyone",
        "vegetarian",
      ];
      filteringShow(pr2Destinations);

      for (var i = 0; i < pr2Destinations.length; i++) {
        document.getElementById(pr2Destinations[i]).style.display = "";
      }
    }
  }

  if (priceRange == 3) {
    var pr3Selected = [];
    if (selected.length != 0) {
      for (var i = 0; i < selected.length; i++) {
        document.getElementById(selected[i]).style.display = "";
        pr3Selected[i] = selected[i];
      }
      filteringShow(pr3Selected);
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
      filteringShow(pr3Destinations);

      for (var i = 0; i < pr3Destinations.length; i++) {
        document.getElementById(pr3Destinations[i]).style.display = "";
      }
    }
  }
}

//Checks selected checkboxes and adds their set values to an array, which is returned
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

//Checks the value of the price slider and returns its value
function checkPriceRange() {
  return document.getElementById("priceSlider").value;
}

//Searches destionation by text and show destinations that match the searched text
function textSearch(filter) {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchBox");
  filter = input.value.toUpperCase();
  ul = document.getElementById("listOfDestinations");
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

//Shows destinations that are present in the filter-parameter
function filteringShow(filter) {
  ul = document.getElementById("listOfDestinations");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    li[i].style.display = "none";
  }

  console.log(filter);
  if (filter.includes("group") == true) {
    console.log("filtering ryhmille");
    li[0].style.display = "";
  }
  if (filter.includes("snack") == true) {
    console.log("filtering pientä purtavaa");
    li[1].style.display = "";
  }
  if (filter.includes("disabled") == true) {
    console.log("filtering liikuntarajoitteisille");
    li[2].style.display = "";
  }
  if (filter.includes("diverse") == true) {
    console.log("filtering monipuolinen");
    li[3].style.display = "";
  }
  if (filter.includes("everyone") == true) {
    console.log("filtering kaikenikäisille");
    li[4].style.display = "";
  }
  if (filter.includes("vegetarian") == true) {
    console.log("filtering kasvisruoka");
    li[5].style.display = "";
  }
  if (filter.includes("comfy") == true) {
    console.log("filtering viihtyisä");
    li[6].style.display = "";
  }
}

//Unchecks the checkboxes and performs a search on the current price range without checkboxes
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
