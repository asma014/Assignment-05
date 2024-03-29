// function buyTicket() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // console.log(homeSection.classList);
// }
//-------from banner to ticket section------
function buyTicket() {
  const ticketSection = document.getElementById("ticket-counter");
  ticketSection.scrollIntoView({ behavior: "smooth" });
}
//------------------------------------------------------------------
const seatNumbers = document.getElementsByClassName("btn w-24");
for (const seatNumber of seatNumbers) {
  seatNumber.addEventListener("click", function (event) {
    const eachSeatNumber = event.target.innerText;
    const classType = "Economy";
    const eachSeatPrice =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .childNodes[5].childNodes[7].childNodes[3].childNodes[0].innerText;

    const seatClassPriceContainer = document.getElementById(
      "seat-class-price-container"
    );

   






   const budget = getValue("budget");
   document.getElementById("budget").innerText = budget - parseInt(eachSeatPrice);

   const cartCount = getValue("seat-count");
   document.getElementById("seat-count").innerText = cartCount + 1;

   const leftCount = getValue("seat-left");
   document.getElementById("seat-left").innerText = leftCount - 1;










    const div = document.createElement("div");
    div.classList.add("booking-details");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = eachSeatNumber;
    p2.innerText = classType;
    p3.innerText = eachSeatPrice;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    seatClassPriceContainer.appendChild(div);
    updateTotalCost(eachSeatPrice);
    updateGrandTotal();
  });
}

function updateGrandTotal(status) {
  const totalCost = getValue("total-cost");
  if (status == undefined) {
    document.getElementById("grand-total").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("coupon-code").value;

    if (couponCode == "NEW15" || couponCode == "Couple 20") {
      const discount1 = totalCost * 0.15;
      // console.log(discount1);
      document.getElementById("grand-total").innerText = totalCost - discount1;
    } else {
      alert("Invalid Code");
    }
  }
}

function updateTotalCost(eachSeatPrice) {
  const totalCost = getValue("total-cost");
  const sum = totalCost + parseInt(eachSeatPrice);
  document.getElementById("total-cost").innerText = sum;
}

// --------------get Parameter value-----------
function getValue(id) {
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}

// const seatLeft = getValue("seat-left");
// const seatCount = getValue("seat-count");
// const fare = getValue("550");

//------------------------------------------------
