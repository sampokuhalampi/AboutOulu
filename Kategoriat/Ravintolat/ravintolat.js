function takaisin() {
  location.href = "/Main Screen/main.html";
}

//button.onClick = takaisin()({});

function search() {}

function checkSelected() {
  var chosen = [];

  if (document.getElementById("adultCB").checked == true) {
    console.log("aikuiset valittu");
    chosen.push("adult");
  }
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
