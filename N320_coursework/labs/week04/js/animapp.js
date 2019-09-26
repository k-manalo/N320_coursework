var placement = document.querySelector("#placement");
var boxTemplate = document.querySelector("#boxTemplate");

var i = 0;

var r = ["a", "b"];
var c = ["1", "2", "3"];

let titlediv = document.createElement("div");
titlediv.innerHTML = "Title";
titlediv.classList.add("title");
titlediv.style.animationDelay = i * 0.1 + "s";

titlediv.addEventListener("mouseover", onTitleOver);
titlediv.addEventListener("mouseout", onTitleOut);
titlediv.addEventListener("click", onTitleClick);
placement.appendChild(titlediv);

let newBanner = document.createElement("div");
newBanner.classList.add("banner");
newBanner.style.animationDelay = i * 0.1 + "s";

newBanner.addEventListener("mouseover", onBannerOver);
newBanner.addEventListener("mouseout", onBannerOut);
newBanner.addEventListener("click", onBannerClick);
placement.appendChild(newBanner);

r.forEach(row => {
  c.forEach(col => {
    let newBox = document.createElement("div");

    newBox.classList.add("box");
    newBox.style.animationDelay = i * 0.1 + "s";

    newBox.addEventListener("mouseover", onBoxOver);
    newBox.addEventListener("mouseout", onBoxOut);
    newBox.addEventListener("click", onBoxClick);

    placement.appendChild(newBox);
    i++;
  });
});

function onBoxOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOver");
  event.target.classList.remove("boxOut");
}
function onBoxOut(event) {
  event.target.classList.add("boxOut");
  event.target.classList.remove("boxOver");
}
function onBoxClick(event) {
  event.target.classList.add("boxClick");
  event.target.classList.remove("boxOver");
  event.target.classList.remove("boxOut");
}
function onBannerOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("bannerOver");
  event.target.classList.remove("bannerOut");
}
function onBannerOut(event) {
  event.target.classList.add("bannerOut");
  event.target.classList.remove("bannerOver");
}
function onBannerClick(event) {
  event.target.classList.add("bannerClick");
}
function onTitleOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("titleOver");
  event.target.classList.remove("titleOut");
}
function onTitleOut(event) {
  event.target.classList.add("titleOut");
  event.target.classList.remove("titleOver");
}
function onTitleClick(event) {
  event.target.classList.add("titleClick");
}
