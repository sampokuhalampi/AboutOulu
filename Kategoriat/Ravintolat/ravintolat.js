function returnToMain() {
  location.href = "/Main Screen/main.html";
}

//button.onClick = takaisin()({});

function search() {
  console.log("hae painettu");
  //document.getElementById("sryhma").style.display = "none";
  // document.getElementById("sryhma2").style.display = "none";
  // document.getElementById("lunch").style.display = "none";
  // document.getElementById("snack").style.display = "none";
  document.querySelectorAll(".pr1").style.display = "none";
  document.querySelectorAll(".pr2").style.display = "none";
  document.querySelectorAll(".pr3").style.display = "none";

  var selected = checkSelected();

  var priceRange = checkPriceRange();

  console.log("hinta: " + priceRange);
}

function checkSelected() {
  var chosen = [];

  if (document.getElementById("lunchCB").checked == true) {
    console.log("lounas valittu");
    chosen.push("lunch");
  }
  if (document.getElementById("snackCB").checked == true) {
    console.log("pientä purtavaa valittu");
    chosen.push("snack");
  }
  if (document.getElementById("sryhmaCB").checked == true) {
    console.log("s-ryhmä valittu");
    chosen.push("sryhma");
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
