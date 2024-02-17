function appendShopProduct(target, element) {
  target.innerHTML = "";
  let amount = 0;
  for (item of element) {
    let sFull = Math.floor(item.Score[0] / item.Score[1])
      ? Math.floor(item.Score[0] / item.Score[1])
      : 0;
    let sHalf = Math.round(item.Score[0] / item.Score[1] - sFull)
      ? Math.round(item.Score[0] / item.Score[1] - sFull)
      : 0;
    let sAll = sFull + sHalf;

    target.innerHTML += `
    <a productID="${item.ID}" href="productInfo.html" class="productCard"
      onclick="localStorage.setItem('productInfo',this.getAttribute('productID'))">
      <input type="checkbox" id="${item.ID}" hidden>
      <label for="${
        item.ID
      }" class="favBtn"><i class="ri-heart-fill"></i></label>
      <div class="imgBox">
        <div class="saleText">-${item.Sale}%</div>
        <img src="img/product_image/${item.ID}-1.png">
      </div>
      <div class="productDetail">
          <p class="productName">${item.Name}</p>
          <p class="productPrice">
            ฿${(item.Price - (item.Price * item.Sale) / 100).toFixed(2)}
          </p>
          <p class="productSale">
            <span>
              ฿${item.Price.toFixed(2)}</span><span>(-${item.Sale}%)
            </span>
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
    amount++;
  }
  document.querySelector("#itemAmount").innerHTML = amount;
  if (element.length) {
    document.querySelector("#noneItem").style.display = "none";
  } else {
    document.querySelector("#noneItem").style.display = "flex";
  }
}

function appendSearchShopProduct(value = "") {
  let shopInfo = Stores.filter((e) => {
    return e.Name === localStorage.getItem("shopTitle");
  })[0];

  let sFull = Math.floor(shopInfo.Score[0] / shopInfo.Score[1])
    ? Math.floor(shopInfo.Score[0] / shopInfo.Score[1])
    : 0;
  let sHalf = Math.round(shopInfo.Score[0] / shopInfo.Score[1] - sFull)
    ? Math.round(shopInfo.Score[0] / shopInfo.Score[1] - sFull)
    : 0;
  let sAll = sFull + sHalf;

  document.querySelector("#shopInfo").innerHTML = `
    <a href="chat.html" class="chatBtn"><i class="ri-message-2-fill"></i></a>
    <input type="checkbox" id="${shopInfo.ID}" hidden>
    <label for="${
      shopInfo.ID
    }" class="favBtn"><i class="ri-heart-fill"></i></label>
    <div class="imgBox"><img src="img/store_image/${shopInfo.ID}.png"></div>
    <div class="shopInfoDetail">
        <p class="shopInfoName">${shopInfo.Name}</p>
        <p class="shopInfoDescription">${shopInfo.Description}</p>
        <div class="shopInfoStar">
          ${'<i class="ri-star-s-fill"></i>'.repeat(sFull)}
          ${'<i class="ri-star-half-s-line"></i>'.repeat(sHalf)}
          ${'<i class="ri-star-s-line"></i>'.repeat(5 - sAll)}
          <span class="shopVoteAmount">(${abbreviateNumber(
            shopInfo.Score[1]
          )})</span>
        </div>
    </div>
  `;
  appendShopProduct(
    document.querySelector("#itemGrid"),
    Stores.filter((e) => {
      return e.Name === localStorage.getItem("shopTitle");
    })[0].Product.filter((e) => {
      let defCondition = true;
      return value.length
        ? defCondition && e.Name.toLowerCase().includes(value.toLowerCase())
        : defCondition;
    })
  );
}

// Title Name
document.title += ` - ${localStorage.getItem("shopTitle")}`;

// append Shop
appendSearchShopProduct();
