// body
document.body.style.cssText =
  "\
  margin: 0;\
  font-family: Arial, Helvetica, sans-serif;\
  display: flex;\
  flex-direction: column;\
  justify-content: space-between;\
  min-height: 100vh;\
  ";

// Header
let header = document.createElement("header");
header.className = "website-head";

header.style.cssText =
  "\
  padding: 15px;\
  background-color: #fff;\
  display: flex;\
  justify-content: space-between;\
  align-items: center;\
";

document.body.appendChild(header);

// Header - Logo
let logoDiv = document.createElement("div");
logoDiv.className = "logo";

logoDiv.style.cssText =
  "\
  color: #23A96E;\
  font-weight: bolder;\
  font-size: 20px;\
";

logoDiv.append("Product");

header.prepend(logoDiv);

// Header - ul menu
let ul = document.createElement("ul");
ul.className = "menu";

let menuText = ["Home", "About", "Services", "Contact"];

for (let i = 0; i < menuText.length; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");

  a.style.cssText =
    "\
    display: block;\
    color: #9e9999;\
    font-size: 14px;\
    text-decoration: none;\
  ";

  a.href = "#";
  a.append(menuText[i]);
  li.append(a);
  ul.append(li);
}

ul.style.cssText =
  "\
  list-style: none;\
  margin: 0;\
  display: flex;\
  gap: 15px;\
";

header.append(ul);

// Start Main Content
let mainDiv = document.createElement("div");

mainDiv.style.cssText =
  "\
  padding: 15px;\
  background-color: #ECECEC;\
  flex: 1\
";

// Input Field
let myInput = document.createElement("input");
myInput.placeholder = "Number of products";

myInput.style.cssText =
  "\
  margin-bottom: 20px;\
  border: 1px solid #ddd;\
  padding: 5px;\
  width: 30%;\
  outline: none;\
  text-indent: 10px;\
  color: rgb(0 0 0 / 70%);\
";

myInput.onfocus = function () {
  myInput.style.border = "1px solid #23a96e";
};

myInput.onblur = function () {
  myInput.style.border = "none";
};

mainDiv.prepend(myInput);

// Creation of the button
let createButton = document.createElement("button");
createButton.append("Create");

createButton.style.cssText =
  "\
  border: 1px solid #ddd;\
  background-color: white;\
  padding: 5px 10px;\
  margin-left: 7px;\
  cursor: pointer;\
";

mainDiv.append(createButton);

document.body.append(mainDiv);

// Start Product - Content
let contentDiv = document.createElement("div");
contentDiv.setAttribute("class", "content");

contentDiv.style.cssText =
  "\
  display: grid;\
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\
  gap: 20px;\
";

mainDiv.append(contentDiv);

// create operation time span
let timeSpan = document.createElement("span");
timeSpan.style.cssText = "\
  display: inline-block;\
  margin-left: 20px;\
  font-size: 14px;\
  color: #151515;\
";
contentDiv.before(timeSpan);

let i = 0, start, end;
createButton.onclick = function () {
  if (myInput.value !== "") {
    start = new Date(); // start of the creation operation

    if (i !== 0) {
      // remove products container
      contentDiv.remove();

      // Create new container
      contentDiv = document.createElement("div");
      contentDiv.setAttribute("class", "content");

      contentDiv.style.cssText =
        "\
        display: grid;\
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\
        gap: 20px;\
      ";

      mainDiv.append(contentDiv);
    }

    for (i = 0; i < parseInt(myInput.value); i++) {
      // product div
      let productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.append("Product");

      productDiv.style.cssText =
        "\
        text-align: center;\
        background-color: #fff;\
        padding: 20px 0;\
        color: rgb(0 0 0 / 50%);\
        font-size: 13px;\
      ";

      contentDiv.append(productDiv);

      // Span
      let span = document.createElement("span");
      let spanText = document.createTextNode(`${i + 1}`);

      span.style.cssText =
        "\
        display: block;\
        font-size: 20px;\
        margin-bottom: 5px;\
        color: #000;\
      ";

      span.append(spanText);
      productDiv.prepend(span);
    }

    end = new Date(); // end of the creation operation

    // update timeSpan contents
    timeSpan.innerHTML = `Operation time: ${end - start}ms`;
  }
};

// Footer
let footer = document.createElement("footer");
footer.append("Copyright \u00A9 2022. All rights reserved");

footer.style.cssText =
  "\
  padding: 20px;\
  color: white;\
  font-size: 19px;\
  text-align: center;\
  background-color: #23A96E;\
  ";

document.body.appendChild(footer);
