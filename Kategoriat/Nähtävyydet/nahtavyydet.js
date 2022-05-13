function returnToMain() {
  location.href = "/Main Screen/main.html";
}

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
    filteringShow(selected);
  } else {
    for (var k = 0; k < allDestinations.length; k++) {
      document.getElementById(allDestinations[k]).style.display = "";
      filteringShowAll();
    }
  }
}

function checkSelected() {
  var chosen = [];

  if (document.getElementById("everyoneCB").checked == true) {
    console.log("kaikenikäisille valittu");
    chosen.push("everyone");
  }
  if (document.getElementById("touristCB").checked == true) {
    console.log("turisti valittu");
    chosen.push("tourist");
  }
  if (document.getElementById("centerCB").checked == true) {
    console.log("keskusta valittu");
    chosen.push("center");
  }
  if (document.getElementById("disabledCB").checked == true) {
    console.log("liikuntarajoitteiset valittu");
    chosen.push("disabled");
  }

  return chosen;
}

function textSearch() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchBox");
  console.log(input);
  filter = input.value.toUpperCase();
  console.log("f: " + filter);

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

function filteringShow(filter) {
  ul = document.getElementById("listOfDestinations");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    li[i].style.display = "none";
  }
  console.log(filter);
  if (filter.includes("everyone") == true) {
    console.log("filtering kaikenikäisille");
    li[0].style.display = "";
  }
  if (filter.includes("tourist") == true) {
    console.log("filtering turisti");
    li[1].style.display = "";
  }
  if (filter.includes("center") == true) {
    console.log("filtering keskusta");
    li[2].style.display = "";
  }
  if (filter.includes("disabled") == true) {
    console.log("filtering liikuntarajoitteiset");
    li[3].style.display = "";
  }
}

function filteringShowAll() {
  var ul, li, a, i;
  ul = document.getElementById("listOfDestinations");
  li = ul.getElementsByTagName("li");
  // Loop through list and hide all that don't match
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    li[i].style.display = "";
  }
}

function clearCB() {
  console.log("haku cleared");
  var allDestinations = ["everyoneCB", "touristCB", "centerCB", "disabledCB"];
  for (var i = 0; i < allDestinations.length; i++) {
    document.getElementById(allDestinations[i]).checked = false;
  }
  search();
}
