function returnToMain() {
  location.href = "/Main Screen/main.html";
}

function search() {
  console.log("hae painettu");
  var allDestinations = ["scandic", "scandic2", "sryhma", "radisson"];

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
      for (var i = 0; i < selected.length; i++) {
        if (selected[i] != "radisson") {
          document.getElementById(selected[i]).style.display = "";
        }
      }
    } else {
      document.getElementById("scandic").style.display = "";
      document.getElementById("sryhma").style.display = "";
    }
  }
  if (priceRange == 3) {
    if (selected.length != 0) {
      for (var i = 0; i < selected.length; i++) {
        document.getElementById(selected[i]).style.display = "";
      }
    } else {
      document.getElementById("scandic").style.display = "";
      document.getElementById("sryhma").style.display = "";
      document.getElementById("radisson").style.display = "";
      document.getElementById("scandic2").style.display = "";
    }
  }
}

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

function checkPriceRange() {
  return document.getElementById("priceSlider").value;
}

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

function clearCB() {
  console.log("haku cleared");

  var allDestinations = ["scandicCB", "sryhmaCB", "radissonCB", "laplandCB"];

  for (var i = 0; i < allDestinations.length; i++) {
    document.getElementById(allDestinations[i]).checked = false;
  }
  search();
}
