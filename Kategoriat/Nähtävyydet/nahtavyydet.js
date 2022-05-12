function returnToMain() {
  location.href = "/Main Screen/main.html";
}

//button.onClick = takaisin()({});

function search() {
  console.log("haku painettu");
  var allDestinations = ["everyone", "tourist", "center", "disabled"];
  for (var i = 0; i < allDestinations.length; i++) {
    document.getElementById(allDestinations[i]).style.display = "none";
  }

  var selected = checkSelected();

  if (selected.length != 0) {
    for (var j = 0; j < selected.length; j++) {
      document.getElementById(selected[j]).style.display = "";
    }
  } else {
    for (var k = 0; k < allDestinations.length; k++) {
      document.getElementById(allDestinations[k]).style.display = "";
    }
  }
}

function checkSelected() {
  var chosen = [];

  if (document.getElementById("centerCB").checked == true) {
    console.log("keskusta valittu");
    chosen.push("center");
  }
  if (document.getElementById("touristCB").checked == true) {
    console.log("turisti valittu");
    chosen.push("tourist");
  }
  if (document.getElementById("everyoneCB").checked == true) {
    console.log("kaikenikäisille valittu");
    chosen.push("everyone");
  }
  if (document.getElementById("disabledCB").checked == true) {
    console.log("liikuntarajoitteiset valittu");
    chosen.push("disabled");
  }

  return chosen;
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
  document.getElementById("centerCB").checked = false;
  document.getElementById("touristCB").checked = false;
  document.getElementById("everyoneCB").checked = false;
  document.getElementById("disabledCB").checked = false;
}
