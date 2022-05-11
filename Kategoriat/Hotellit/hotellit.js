function returnToMainPage() {
  location.href = "/Main Screen/main.html";
}

function search() {
  console.log("hae painettu");

  var selected = checkSelected();

  if (selected.length != 0) {
    // for (var x = 0; x < items.length; x++) {
    //   document.getElementsByClassName("wifi")[x].style.display = "";
    //   document.getElementsByClassName("children")[x].style.display = "";
    //   document.getElementsByClassName("adult")[x].style.display = "";
    // }

    document.getElementById("wifi").style.display = "none";
    document.getElementById("breakfast").style.display = "none";
    document.getElementById("children").style.display = "none";
    var list = document.getElementById("listOfDestinations");
    for (var i = 0; i < selected.length; i++) {
      for (var j = 0; j < list.length; j++) {
        document.getElementById(selected[i]).style.display = "";
      }
    }
  } else {
    document.getElementById("wifi").style.display = "";
    document.getElementById("breakfast").style.display = "";
    document.getElementById("children").style.display = "";
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

//   if (document.getElementById("aikuisetCB").checked == true) {
//     console.log("aikuiset");
//     document.getElementById("scandic").style.display = "none";
//   }
//   if (document.getElementById("aikuisetCB").checked == false) {
//     console.log("aikuiset");
//     document.getElementById("scandic").style.display = "";
//   }

//   if (document.getElementById("nettiCB").checked == true) {
//     console.log("netti");
//     document.getElementById("").style.display = "none";
//   }
//   if (document.getElementById("nettiCB").checked == false) {
//     console.log("netti");
//     document.getElementById("").style.display = "";
//   }

//   if (document.getElementById("lapsetCB").checked == true) {
//     console.log("lapset");
//     document.getElementById("").style.display = "none";
//   }
//   if (document.getElementById("lapsetCB").checked == false) {
//     console.log("lapset");
//     document.getElementById("").style.display = "";
//   }

//   if (document.getElementById("peruutusCB").checked == true) {
//     console.log("aikuiset");
//     document.getElementById("").style.display = "none";
//   }
//   if (document.getElementById("peruutusCB").checked == false) {
//     console.log("aikuiset");
//     document.getElementById("").style.display = "";
//   }

//   if (document.getElementById("aikuisetCB").checked == true) {
//     console.log("aikuiset");
//     document.getElementById("").style.display = "none";
//   }
//   if (document.getElementById("aikuisetCB").checked == false) {
//     console.log("aikuiset");
//     document.getElementById("").style.display = "";
//   }

//   if (document.getElementById("aikuisetCB").checked == true) {
//     console.log("aikuiset");
//     document.getElementById("").style.display = "none";
//   }
//   if (document.getElementById("aikuisetCB").checked == false) {
//     console.log("aikuiset");
//     document.getElementById("").style.display = "";
//   }

// const napit = document.querySelectorAll('.btn');
// const hotellit = document.querySelectorAll('.hotellit h2');

// for (i = 0; i < napit.length; i++) {

//     napit[i].addEventListener('click', (e) => {
//         e.preventDefault()

//         const filter = e.target.dataset.filter;
//         console.log(filter);

//         storeProducts.forEach((product)=> {
//             if (filter === 'all'){
//                 product.style.display = 'block'
//             } else {
//                 if (product.classList.contains(filter)){
//                     product.style.display = 'block'
//                 } else {
//                     product.style.display = 'none'
//                 }
//             }
//         });
//     });
// };

// const haku = document.getElementById("haku");
// const hotellientTiedot = document.querySelectorAll(".hotellienTiedot");

// search.addEventListener("keyup", filterProducts);

// function filterProducts(e) {
//     const text = e.target.value.toLowerCase();
//     // console.log(productName[0]);
//     hotellientTiedot.forEach(function(product) {
//         const item = product.firstChild.textContent;
//         if (item.toLowerCase().indexOf(text) != -1) {
//             product.parentElement.parentElement.style.display = "block"
//         } else {
//             product.parentElement.parentElement.style.display = "none"
//         }
//     })
// }

// for (var i = 0; i < selected.length; i++) {
//   console.log("Selection " + [i] + " " + selected[i]);

//   for (var j = 0; j < items.length; j++) {
//     console.log("items");
//     console.log(items[j]);
//   }
// }
