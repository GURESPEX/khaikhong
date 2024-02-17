function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 1000) {
    var suffixes = ["", "K", "M", "B", "T"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = "";
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      );
      var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}

function appendProductSlider(title, description, target, element) {
  target.innerHTML = "";
  let productCard = "";
  for (item of element) {
    let sFull = Math.floor(item.Score[0] / item.Score[1])
      ? Math.floor(item.Score[0] / item.Score[1])
      : 0;
    let sHalf = Math.round(item.Score[0] / item.Score[1] - sFull)
      ? Math.round(item.Score[0] / item.Score[1] - sFull)
      : 0;
    let sAll = sFull + sHalf;

    productCard += `
    <a productID="${
      item.ID
    }" href="productInfo.html" class="swiper-slide productCard2"
        onclick="localStorage.setItem('productInfo',this.getAttribute('productID'))">
        <input type="checkbox" id="${item.ID}" hidden>
        <label for="${item.ID}" class="favBtn">
            <i class="ri-heart-fill"></i>
        </label>
        <div class="imgBox">
            ${item.Sale ? `<div class="saleText">-${item.Sale}%</div>` : ""}
            <img src="img/product_image/${item.ID}-1.png">
        </div>
        <div class="productDetail">
            <p class="productName">${item.Name}</p>
            <p class="productPrice">
                ฿${(item.Price - (item.Price * item.Sale) / 100).toFixed(2)}
            </p>
            <p class="productSale">
                ${
                  item.Sale
                    ? `<span>
                ฿${item.Price.toFixed(2)}
                </span>
                <span>
                (-${item.Sale}%)
                </span>`
                    : ""
                }
            </p>
            <div class="productStar">
                ${'<i class="ri-star-s-fill"></i>'.repeat(sFull)}
                ${'<i class="ri-star-half-s-line"></i>'.repeat(sHalf)}
                ${'<i class="ri-star-s-line"></i>'.repeat(5 - sAll)}
                <span class="productVoteAmount">(${abbreviateNumber(
                  item.Score[1]
                )})</span>
            </div>
        </div>
    </a>
    `;
  }
  target.innerHTML = `
        <div class="productSliderTitle">
          ${title ? `<h1>${title}</h1>` : title}
          ${description ? `<p>${description}</p>` : description}
        </div>
        <div class="productSliderWrapper">
            <div class="swiper swiperProductSlider">
                <div class="swiper-wrapper">
                    ${productCard}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    `;
}

// Validation
function validation() {
  localStorage.setItem(
    "userOnline",
    JSON.stringify(
      user.filter(
        (e) =>
          e.Email === localStorage.getItem("email") &&
          e.Password === localStorage.getItem("password")
      )
    )
  );

  if (JSON.parse(localStorage.getItem("userOnline"))[0]) {
    window.location.href = "index.html";
  } else {
    document.querySelector("#errorAlert").style.display = "flex";
    document.querySelector("#errorAlert").childNodes[2].innerHTML =
      "อีเมลหรือรหัสผ่านไม่ถูกต้อง";
    if (!localStorage.getItem("email") && !localStorage.getItem("password")) {
      document.querySelector("#errorAlert").childNodes[2].innerHTML =
        "กรอกอีเมลและรหัสผ่านของคุณ";
    } else if (!localStorage.getItem("email")) {
      document.querySelector("#errorAlert").childNodes[2].innerHTML =
        "กรอกอีเมลของคุณ";
    } else if (!localStorage.getItem("password")) {
      document.querySelector("#errorAlert").childNodes[2].innerHTML =
        "กรอกรหัสผ่านของคุณ";
    }
  }
}

// All Product
let allProduct = Stores.reduce((product, store) => {
  product.push(...store.Product);
  return [...product];
}, []);

// User Online
if (JSON.parse(localStorage.getItem("userOnline"))[0]) {
  let userOnline = JSON.parse(localStorage.getItem("userOnline"))[0];
  document.querySelector("a[href='register.html']").style.display = "none";
  document.querySelector("a[href='login.html']").style.display = "none";
  document.querySelector(
    "nav:nth-of-type(1) .wrapper>a:nth-of-type(4)"
  ).style.display = "flex";

  // Navigation Menu Value Amount
  for (e of document.querySelectorAll(".minImage")) {
    e.childNodes[3].src = `img/user_image/${userOnline.ID}.jpg`;
    e.childNodes[1].childNodes[1].innerHTML = 0;
    e.childNodes[1].childNodes[3].innerHTML = 0;

    document.querySelector(
      ".userOnline"
    ).childNodes[1].innerHTML = `${userOnline.Credit.toFixed(
      2
    )}฿<i class="ri-wallet-3-fill"></i>`;
    document.querySelector(
      ".userOnline"
    ).childNodes[5].innerHTML = `${userOnline.Username}<img src="img/user_image/${userOnline.ID}.jpg" width="24" height="24">`;
    document.querySelector(".userOnline").childNodes[9].childNodes;

    e.childNodes[1].childNodes[1].innerHTML = `${userOnline.Credit.toFixed(
      2
    )}฿`;
    e.childNodes[1].childNodes[3].innerHTML = `${userOnline.Username}<i class="ri-user-3-fill"></i>`;
  }

  document.querySelectorAll(
    ".profileBox"
  )[0].childNodes[11].childNodes[2].innerHTML = userOnline.Cart.length;
  document.querySelectorAll(
    ".profileBox"
  )[0].childNodes[13].childNodes[2].innerHTML = userOnline.Favorite.length;
  document.querySelectorAll(
    ".profileBox"
  )[0].childNodes[15].childNodes[2].innerHTML = Stores.length;

  document.querySelectorAll(
    ".profileMenu"
  )[0].childNodes[7].childNodes[2].innerHTML = userOnline.Cart.length;
  document.querySelectorAll(
    ".profileMenu"
  )[0].childNodes[9].childNodes[2].innerHTML = userOnline.Favorite.length;
  document.querySelectorAll(
    ".profileMenu"
  )[0].childNodes[11].childNodes[2].innerHTML = Stores.length;

  document.querySelector(
    ".profileImgBox"
  ).childNodes[1].src = `img/user_image/${userOnline.ID}.jpg`;
  document.querySelector(
    ".profileImgBox"
  ).childNodes[3].innerHTML = `<i class="ri-checkbox-circle-fill"></i>${userOnline.Username}`;
} else {
  for (e of document.querySelectorAll("nav .wrapper")) {
    e.style.paddingRight = "16px";
  }
  for (e of document.querySelectorAll(".profileBox>a")) {
    e.style.display = "none";
  }
  for (e of document.querySelectorAll(".profileBox>hr")) {
    e.style.display = "none";
  }
  document.querySelector(".userOnline").style.display = "none";
}

// Navigation Hight
window.addEventListener("resize", () => {
  document.querySelector(".sideMenu .closeBox").style.paddingTop = `calc(${
    document.querySelector("nav:nth-of-type(1) .wrapper").clientHeight
  }px + 8px)`;
});

// Shop Product Amount Navigation
for (e of document.querySelectorAll("#shopMenu")) {
  for (s of Stores) {
    if (s.Name === e.childNodes[0].textContent.trim()) {
      e.childNodes[1].textContent = s.Product.length;
    }
  }
}

console.log(localStorage);
