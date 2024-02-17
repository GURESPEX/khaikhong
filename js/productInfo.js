function formReview(value) {
  if (value === "open") {
    document.querySelector(".reviewForm").style.display = "flex";
  } else {
    document.querySelector(".reviewForm").style.display = "none";
  }
}

document.querySelector(".reviewForm").addEventListener("mouseover", () => {
  console.log(555);
});

function productInputAmount(type) {
  if (
    type === "+" &&
    document.querySelector("#productInputAmount").value < 100
  ) {
    document.querySelector("#productInputAmount").value =
      parseInt(document.querySelector("#productInputAmount").value) + 1;
  } else if (
    type === "-" &&
    document.querySelector("#productInputAmount").value > 1
  ) {
    document.querySelector("#productInputAmount").value =
      parseInt(document.querySelector("#productInputAmount").value) - 1;
  }
}

function appendProductInfo(value = "") {
  let productInfo = allProduct.filter((e) => {
    return e.ID === localStorage.getItem("productInfo");
  })[0];

  let shopInfo = Stores.filter((e) => {
    return e.Product.filter((se) => {
      return se.ID === productInfo.ID;
    })[0];
  })[0];

  let pFull = Math.floor(productInfo.Score[0] / productInfo.Score[1])
    ? Math.floor(productInfo.Score[0] / productInfo.Score[1])
    : 0;
  let pHalf = Math.round(productInfo.Score[0] / productInfo.Score[1] - pFull)
    ? Math.round(productInfo.Score[0] / productInfo.Score[1] - pFull)
    : 0;
  let pAll = pFull + pHalf;

  let sFull = Math.floor(shopInfo.Score[0] / shopInfo.Score[1])
    ? Math.floor(shopInfo.Score[0] / shopInfo.Score[1])
    : 0;
  let sHalf = Math.round(shopInfo.Score[0] / shopInfo.Score[1] - sFull)
    ? Math.round(shopInfo.Score[0] / shopInfo.Score[1] - sFull)
    : 0;
  let sAll = sFull + sHalf;

  document.querySelector("#productInfo").innerHTML = `
    <section class="productInfoBox">
        <div class="productCol">
            <div class="imgBox">
                <div class="swiper swiperProduct">
                    <div class="swiper-wrapper">
                        <img class="swiper-slide" src="img/product_image/${
                          productInfo.ID
                        }-1.png">
                        <img class="swiper-slide" src="img/product_image/${
                          productInfo.ID
                        }-2.png">
                        <img class="swiper-slide" src="img/product_image/${
                          productInfo.ID
                        }-3.png">
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
            <div class="imgBoxTemp">
                <div class="swiper swiperProductTemp">
                    <div class="swiper-wrapper">
                        <img class="swiper-slide" src="img/product_image/${
                          productInfo.ID
                        }-1.png">
                        <img class="swiper-slide" src="img/product_image/${
                          productInfo.ID
                        }-2.png">
                        <img class="swiper-slide" src="img/product_image/${
                          productInfo.ID
                        }-3.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="productInfoDetail">
            <p class="productInfoName">${productInfo.Name}</p>
            <p class="productInfoPrice">
            ฿${(
              productInfo.Price -
              (productInfo.Price * productInfo.Sale) / 100
            ).toFixed(2)}
            </p>
            <p class="productInfoSale">
              ${
                productInfo.Sale
                  ? `<span>
                ฿${productInfo.Price.toFixed(2)}
                </span>
                <span>
                (-${productInfo.Sale}%)
                </span>`
                  : ""
              }
            </p>
            <div class="productInfoStar">
              ${'<i class="ri-star-s-fill"></i>'.repeat(pFull)}
              ${'<i class="ri-star-half-s-line"></i>'.repeat(pHalf)}
              ${'<i class="ri-star-s-line"></i>'.repeat(5 - pAll)}
              <span class="productVoteAmount">(${abbreviateNumber(
                productInfo.Score[1]
              )})</span>
                <input type="checkbox" id="${productInfo.ID}" hidden>
                <label for="${
                  productInfo.ID
                }" class="favBtn"><i class="ri-heart-fill"></i></label>
            </div>
            <hr class="hrH">
            <div class="shopBoxDetail">
                <a class="img" href="shopInfo.html" onclick="localStorage.setItem('shopTitle','${
                  shopInfo.Name
                }')">
                    <img src="img/store_image/${
                      shopInfo.ID
                    }.png" width="48" height="48">
                </a>
                <div class="shopBoxDetailV">
                    <p class="shopBoxDetailName">${shopInfo.Name}</p>
                    <div class="productInfoStar">
                        ${'<i class="ri-star-s-fill"></i>'.repeat(sFull)}
                        ${'<i class="ri-star-half-s-line"></i>'.repeat(sHalf)}
                        ${'<i class="ri-star-s-line"></i>'.repeat(5 - sAll)}
                        <span class="productVoteAmount">(${abbreviateNumber(
                          shopInfo.Score[1]
                        )})</span>
                    </div>
                </div>
                <a href="chat.html" class="primaryBtn"><i class="ri-message-2-fill"></i></a>
            </div>
            <div class="productInfoForm">
                <div class="desTitle">ระบุจำนวนสินค้าที่ท่านต้องการ (1-100)</div>
                <form class="box">
                    <a href="#" class="iconBtn" onclick="productInputAmount(this.innerHTML)">-</a>
                    <input id="productInputAmount" type="number" min="0" max="100" value="1" placeholder="0">
                    <a href="#" class="iconBtn" onclick="productInputAmount(this.innerHTML)">+</a>
                </form>
                <section class="box">
                    <a href="#" class="primaryBtn">ซื้อเลย</a>
                    <a href="#" class="secondaryBtn" onclick="this.innerHTML = 'ใส่ตะกร้าแล้ว'">ใส่ตะกร้า</a>
                </section>
            </div>
            <div class="productInfoDescription">
                <div class="productInfoDescriptionTitle">
                    <i class="ri-file-text-line"></i>ข้อมูลสินค้า
                </div>
                <p>${productInfo.Description}</p>
            </div>
            <div class="productInfoReview">
                <div class="productInfoReviewDescriptionTitle">
                <i class="ri-file-text-line"></i>รีวิวสินค้า
                </div>
                <button class="secondaryBtn" onclick="formReview('open')"><i class="ri-pencil-fill"></i>เขียนรีวิว</button>
                <div class="productInfoReviewItem">
                    ${`
                    <div class="itemReview">
                        <div class="itemReviewProfile">
                            <img src="img/user_image/${user[2].ID}.jpg" width="52" height="52">
                            <p>${user[2].Username}</p>
                        </div>
                        <div class="itemReviewDetail">
                            : สุดจัดเลยพี่! เอาไปเลย 800 ดาว
                        </div>
                    </div>
                `.repeat(10)}
                </div>
            </div>
        </div>
    </section>
    `;
}

// Title Name
document.title += ` - ${
  allProduct.filter((e) => e.ID === localStorage.getItem("productInfo"))[0].Name
}`;

appendProductInfo();

appendProductSlider(
  "สินค้าแนะนำ",
  "",
  document.querySelector("#productSlider"),
  allProduct.filter((e) => {
    return true;
  })
);