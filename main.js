//Link to infopage
function infoNappi() {
  location.href = "/Info-sivu/infoPage.html";
}

//Link to restaurants
function ravintolat() {
  location.href = "/Kategoriat/Ravintolat/ravintolat.html";
}

//Link to attractions
function nahtavyydet() {
  location.href = "/Kategoriat/Nähtävyydet/nahtavyydet.html";
}

//Link to hotels
function hotellit() {
  location.href = "/Kategoriat/Hotellit/hotellit.html";
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
