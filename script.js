const thankyoucard = document.createElement("div");
const completedimage = document.createElement("div");
const selection = document.createElement("div");
const thankyou = document.createElement("div");
const appreciate = document.createElement("div");

function submitCard() {
  const card = document.querySelector(".card");
  card.remove();

  completedimage.innerHTML = "<img src='illustration-thank-you.svg'>";
  thankyou.innerHTML = "<h1> Thank you! </h1>";
  appreciate.innerHTML =
    "<p> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>";

  selection.style.backgroundColor = "#262f38";
  selection.style.borderRadius = "20px";
  selection.style.fontSize = "15px";
  selection.style.color = "#d87026";
  selection.style.fontWeight = "200";
  selection.style.marginTop = "12px";
  selection.style.paddingLeft = "14px";
  selection.style.paddingRight = "14px";
  selection.style.width = "170px";
  selection.style.height = "40px";
  selection.style.textAlign = "center";
  selection.style.display = "flex";
  selection.style.justifyContent = "center";
  selection.style.alignItems = "center";

  thankyou.style.fontWeight = "400";
  thankyou.style.fontWeight = "10px";
  thankyou.style.marginBottom = "-25px";

  appreciate.style.textAlign = "center";
  appreciate.style.color = "#969fad";
  appreciate.style.lineHeight = "25px";
  appreciate.style.width = "97%";

  thankyoucard.style.backgroundColor = "#1d262f";
  thankyoucard.style.borderRadius = "30px";
  thankyoucard.style.height = "350px";
  thankyoucard.style.width = "355px";
  thankyoucard.style.padding = "30px";
  thankyoucard.style.display = "flex";
  thankyoucard.style.flexDirection = "column";
  thankyoucard.style.justifyContent = "space-between";
  thankyoucard.style.alignItems = "center";
  thankyoucard.style.fontFamily = "Manrope";

  document.body.appendChild(thankyoucard);
  thankyoucard.appendChild(completedimage);
  thankyoucard.appendChild(selection);
  thankyoucard.appendChild(thankyou);
  thankyoucard.appendChild(appreciate);
}

function buttonClick1() {
  const rating1 = document.querySelector(".rating1");
  rating1.style.backgroundColor = "#fc730e";
  selection.innerHTML = "<p> You selected 1 out of 5 </p>";

  const rating2 = document.querySelector(".rating2");
  rating2.removeEventListener("click", buttonClick2);

  const rating3 = document.querySelector(".rating3");
  rating3.removeEventListener("click", buttonClick3);

  const rating4 = document.querySelector(".rating4");
  rating4.removeEventListener("click", buttonClick4);

  const rating5 = document.querySelector(".rating5");
  rating5.removeEventListener("click", buttonClick5);
}

function buttonClick2() {
  const rating2 = document.querySelector(".rating2");
  rating2.style.backgroundColor = "#fc730e";
  selection.innerHTML = "<p> You selected 2 out of 5 </p>";

  const rating1 = document.querySelector(".rating1");
  rating1.removeEventListener("click", buttonClick1);

  const rating3 = document.querySelector(".rating3");
  rating3.removeEventListener("click", buttonClick3);

  const rating4 = document.querySelector(".rating4");
  rating4.removeEventListener("click", buttonClick4);

  const rating5 = document.querySelector(".rating5");
  rating5.removeEventListener("click", buttonClick5);
}

function buttonClick3() {
  const rating3 = document.querySelector(".rating3");
  rating3.style.backgroundColor = "#fc730e";
  selection.innerHTML = "<p> You selected 3 out of 5 </p>";

  const rating1 = document.querySelector(".rating1");
  rating1.removeEventListener("click", buttonClick1);

  const rating2 = document.querySelector(".rating2");
  rating2.removeEventListener("click", buttonClick2);

  const rating4 = document.querySelector(".rating4");
  rating4.removeEventListener("click", buttonClick4);

  const rating5 = document.querySelector(".rating5");
  rating5.removeEventListener("click", buttonClick5);
}

function buttonClick4() {
  const rating4 = document.querySelector(".rating4");
  rating4.style.backgroundColor = "#fc730e";
  selection.innerHTML = "<p> You selected 4 out of 5 </p>";

  const rating1 = document.querySelector(".rating1");
  rating1.removeEventListener("click", buttonClick1);

  const rating2 = document.querySelector(".rating2");
  rating2.removeEventListener("click", buttonClick2);

  const rating3 = document.querySelector(".rating3");
  rating3.removeEventListener("click", buttonClick3);

  const rating5 = document.querySelector(".rating5");
  rating5.removeEventListener("click", buttonClick5);
}

function buttonClick5() {
  const rating5 = document.querySelector(".rating5");
  rating5.style.backgroundColor = "#fc730e";
  selection.innerHTML = "<p> You selected 5 out of 5 </p>";

  const rating2 = document.querySelector(".rating2");
  rating2.removeEventListener("click", buttonClick2);

  const rating3 = document.querySelector(".rating3");
  rating3.removeEventListener("click", buttonClick3);

  const rating4 = document.querySelector(".rating4");
  rating4.removeEventListener("click", buttonClick4);
}

document.addEventListener("DOMContentLoaded", () => {
  const rating1 = document.querySelector(".rating1");
  const rating2 = document.querySelector(".rating2");
  const rating3 = document.querySelector(".rating3");
  const rating4 = document.querySelector(".rating4");
  const rating5 = document.querySelector(".rating5");

  rating1.addEventListener("click", buttonClick1);
  rating2.addEventListener("click", buttonClick2);
  rating3.addEventListener("click", buttonClick3);
  rating4.addEventListener("click", buttonClick4);
  rating5.addEventListener("click", buttonClick5);

  const sumbitbutton = document.querySelector(".submitbutton");
  sumbitbutton.addEventListener("click", submitCard);
});
