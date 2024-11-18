// DOM selection

// getElementById() -> element
// document.getElemntById()
const judul = document.getElementById("judul");
judul.style.color = "blue";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "JavaScript";

// // getElementsByTagName() -> HTMLcollection
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightBlue";
//   p[3].style.backgroundColor = "whitesmoke";
// }
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "55px";

// getElementsByClassName() -> HTMLcollection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Teks ini diubah dari JavaScript";

// querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";
const li2 = document.querySelector("section#b ul li:nth-child(2");
li2.style.backgroundColor = "#ccc";

// querySelectorAll() -> nodelist
const p5 = document.querySelectorAll("p");
// jika satu background yang diwarnai
// p5[1].style.backgroundColor = "orange";
// jika ingin semua background yang diwarnai
for (let i = 0; i < p5.length; i++) {
  p5[i].style.backgroundColor = "orange";
}
