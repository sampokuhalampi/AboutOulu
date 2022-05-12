function returnToMain() {
  location.href = "/Main Screen/main.html";
}

//button.onClick = takaisin()({});

function search() {
  console.log("hae painettu");
  // document.getElementById("").style.display = "none";
  // document.getElementById("").style.display = "none";
  // document.getElementById("").style.display = "none";
  var selected = checkSelected();

  var priceRange = checkPriceRange();

  console.log("hinta: " + priceRange);
}

function checkSelected() {
  var chosen = [];

  if (document.getElementById("romanticCB").checked == true) {
    console.log("romanttinen valittu");
    chosen.push("romantic");
  }
  if (document.getElementById("fastfoodCB").checked == true) {
    console.log("pikaruoka valittu");
    chosen.push("fastfood");
  }
  if (document.getElementById("childrenCB").checked == true) {
    console.log("lapset valittu");
    chosen.push("children");
  }
  if (document.getElementById("reservationCB").checked == true) {
    console.log("varaus valittu");
    chosen.push("reservation");
  }
  if (document.getElementById("lunchCB").checked == true) {
    console.log("lounas valittu");
    chosen.push("lunch");
  }
  if (document.getElementById("breakfastCB").checked == true) {
    console.log("romanttinen valittu");
    chosen.push("breakfast");
  }
  if (document.getElementById("dinnerCB").checked == true) {
    console.log("päivällinen valittu");
    chosen.push("dinner");
  }
  if (document.getElementById("chineseCB").checked == true) {
    console.log("kiinalainen valittu");
    chosen.push("chinese");
  }
  if (document.getElementById("burgerCB").checked == true) {
    console.log("hampurilainen valittu");
    chosen.push("burger");
  }
  if (document.getElementById("veganCB").checked == true) {
    console.log("vegaaninen valittu");
    chosen.push("vegan");
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
