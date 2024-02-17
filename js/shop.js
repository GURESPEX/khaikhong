function appendShop(target, element) {
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
        <a shopID="${item.ID}" href="shopInfo.html" class="shopCard"
            onclick="localStorage.setItem('shopTitle','${item.Name}')">
            <input type="checkbox" id="${item.ID}" hidden>
            <label for="${
              item.ID
            }" class="favBtn"><i class="ri-heart-fill"></i></label>
            <div class="imgBox">
                <img src="img/store_image/${item.ID}.png">
            </div>
            <div class="shopDetail">
                <p class="shopName">${item.Name}</p>
                <p class="shopDescription">${item.Description}</p>
                <div class="shopStar">
                    ${'<i class="ri-star-s-fill"></i>'.repeat(sFull)}
                    ${'<i class="ri-star-half-s-line"></i>'.repeat(sHalf)}
                    ${'<i class="ri-star-s-line"></i>'.repeat(5 - sAll)}
                    <span class="shopVoteAmount">(${abbreviateNumber(
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

function appendSearchShop(value = "") {
  appendShop(
    document.querySelector("#itemGrid"),
    Stores.filter((e) => {
      let defCondition = true;
      return value.length
        ? defCondition && e.Name.toLowerCase().includes(value.toLowerCase())
        : defCondition;
    })
  );
}

// append Shop
appendSearchShop();
