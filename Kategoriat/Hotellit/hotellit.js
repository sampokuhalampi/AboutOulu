//Returns the user to the main page
function returnToMain() {
  location.href = "/index.html";
}

//Search funtion shows destinations that match the search parameters
function search() {
  console.log("hae painettu");
  var allDestinations = ["scandic", "sryhma", "radisson"];

  for (var i = 0; i < allDestinations.length; i++) {
    document.getElementById(allDestinations[i]).style.display = "none";
  }

  var selected = checkSelected();

  var priceRange = checkPriceRange();

  console.log("hinta: " + priceRange);

  if (priceRange == 1) {
    //No hotels at price range 1
  }
  if (priceRange == 2) {
    if (selected.length != 0) {
      var pr2Selected = [];
      for (var i = 0; i < selected.length; i++) {
        if (selected[i] != "radisson") {
          document.getElementById(selected[i]).style.display = "";
          pr2Selected[i] = selected[i];
        }
      }
      filteringShow(pr2Selected);
    } else {
      var pr2Destinations = ["scandic", "sryhma"];
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
      var pr3Destinations = ["scandic", "sryhma", "radisson"];
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

  if (document.getElementById("sryhmaCB").checked == true) {
    console.log("s-ryhmä valittu");
    chosen.push("sryhma");
  }
  if (document.getElementById("scandicCB").checked == true) {
    console.log("scandic valittu");
    chosen.push("scandic");
  }
  if (document.getElementById("radissonCB").checked == true) {
    console.log("radisson valittu");
    chosen.push("radisson");
  }
  if (document.getElementById("laplandCB").checked == true) {
    console.log("lapland valittu");
    chosen.push("lapland");
  }

  return chosen;
}

//Checks the value of the price slider and returns its value
function checkPriceRange() {
  return document.getElementById("priceSlider").value;
}

//Searches destionation by text and show destinations that match the searched text
function textSearch() {
  var input, uppercase, ul, li, a, i, text;
  input = document.getElementById("searchBox");
  uppercase = input.value.toUpperCase();
  ul = document.getElementById("listOfDestinations");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    text = a.textContent || a.innerText;
    if (text.toUpperCase().indexOf(uppercase) > -1) {
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
  if (filter.includes("scandic") == true) {
    console.log("filtering scandic");
    li[0].style.display = "";
  }
  if (filter.includes("sryhma") == true) {
    console.log("filtering S-ryhmä");
    li[1].style.display = "";
  }
  if (filter.includes("radisson") == true) {
    console.log("filtering liikuntarajoitteisille");
    li[2].style.display = "";
  }
  if (filter.includes("lapland") == true) {
    console.log("filtering lapland");
    li[3].style.display = "";
  }
}

//Unchecks the checkboxes and performs a search on the current price range without checkboxes
function clearCB() {
  console.log("haku cleared");

  var allDestinations = ["scandicCB", "sryhmaCB", "radissonCB", "laplandCB"];

  for (var i = 0; i < allDestinations.length; i++) {
    document.getElementById(allDestinations[i]).checked = false;
  }
  search();
}
