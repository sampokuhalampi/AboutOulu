function takaisin() {
  location.href = "/Main Screen/main.html";
}

//button.onClick = takaisin()({});

function search() {}

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
