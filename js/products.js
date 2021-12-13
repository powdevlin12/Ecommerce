let products = [
  {
    name: "JBL E55BT KEY BLACK",
    image1: "./images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png",
    image2: "./images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL JR 310BT",
    image1: "./images/JBL_JR 310BT_Product Image_Detail_Skyblue.png",
    image2: "./images/JBL_JR 310BT_Product Image_Hero_Skyblue.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL TUNE 750BTNC",
    image1:
      "./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png",
    image2: "./images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL Horizon",
    image1: "./images/JBLHorizon_001_dvHAMaster.png",
    image2: "./images/JBLHorizon_BLK_002_dvHAMaster.webp",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL Tune 220TWS",
    image1: "./images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png",
    image2: "./images/JBL_TUNE220TWS_ProductImage_Pink_Back.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "UA Project Rock",
    image1:
      "./images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png",
    image2:
      "./images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL Endurance SPRINT",
    image1:
      "./images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp",
    image2: "./images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp",
    old_price: "400",
    curr_price: "300",
  },
];
const productList = document.getElementById("products");
const renderListProduct = (products) => {
  let prod = ``;
  products.forEach((e) => {
    prod = `
        <div class="col-4 col-md-6 col-sm-12">
        <div class="product-card">
          <div class="product-card-img">
            <img
              src="${e.image1}"
              alt=""
            />
            <img
              src="${e.image2}"
              alt=""
            />  
          </div>
          <div class="product-card-info">
            <div class="product-btn">
              <button class="btn-flat btn-hover btn-cart-shop">
              <a href="./product-detail.html">shop now</a>
              </button>
              <button class="btn-flat btn-hover btn-cart-add">
                <i class="bx bxs-cart-add"></i>
              </button>
              <button class="btn-flat btn-hover btn-cart-heart">
                <i class="bx bxs-heart"></i>
              </button>
            </div>
            <div class="product-card-name">${e.name}</div>
            <div class="product-card-price">
              <span><del>$${e.old_price}</del></span>
              <span class="curr-proce">$${e.curr_price}</span>
            </div>
          </div>
        </div>
        </div>
        `;
    productList.insertAdjacentHTML("beforeend", prod);
  });
};
renderListProduct(products);
renderListProduct(products);
let option = document.getElementsByClassName("option")[0];
let filter = document.getElementsByClassName("filter")[0];
let close = document.getElementsByClassName("close")[0];
console.log(filter);
filter.addEventListener("click", () => {
  option.classList.add("active");
});
close.addEventListener("click", () => {
  option.classList.remove("active");
});
