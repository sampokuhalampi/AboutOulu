function goBack() {
  history.back();
}

function search() {
  console.log("hae painettu");
  document.getElementById("wifi").style.display = "none";
  document.getElementById("breakfast").style.display = "none";
  document.getElementById("children").style.display = "none";
  document.getElementById("scandic").style.display = "none";
  var selected = checkSelected();

  var priceRange = checkPriceRange();

  console.log("hinta: " + priceRange);

  for (var i = 0; i < selected.length; i++) {
    document.getElementById(selected[i]).style.display = "";
  }
}

function checkSelected() {
  var chosen = [];

  if (document.getElementById("adultCB").checked == true) {
    console.log("aikuiset valittu");
    chosen.push("adult");
  }
  if (document.getElementById("wifiCB").checked == true) {
    console.log("netti valittu");
    chosen.push("wifi");
  }
  if (document.getElementById("childrenCB").checked == true) {
    console.log("lapset valittu");
    chosen.push("children");
  }
  if (document.getElementById("cancelCB").checked == true) {
    console.log("cancel valittu");
    chosen.push("cancel");
  }
  if (document.getElementById("paymentCB").checked == true) {
    console.log("maksu valittu");
    chosen.push("payment");
  }
  if (document.getElementById("breakfastCB").checked == true) {
    console.log("aamupala valittu");
    chosen.push("breakfast");
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
