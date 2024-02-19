// document.getElementById("btn").addEventListener("click", function () {
//   console.log("boss");
// });

function clickFunction(event) {
  console.log(event.target.parentNode.childNodes[1].innerText);
}
