const products = [
    { id: 1, name: "Adidas Stan Smith", brand: "Adidas", color: "Blue", size: "Large", price: 10 },
    { id: 2, name: "Nike Air Max", brand: "Nike", color: "Black", size: "Medium", price: 45 },
    { id: 3, name: "Puma Classic", brand: "Puma", color: "White", size: "Small", price: 25 },
    { id: 4, name: "Adidas Superstar", brand: "Adidas", color: "Blue", size: "Medium", price: 60 },
    { id: 5, name: "Nike Runner", brand: "Nike", color: "Blue", size: "Large", price: 15 },
    { id: 6, name: "Puma Suede", brand: "Puma", color: "Black", size: "Large", price: 30 }
];

const productContainer = document.getElementById('productContainer');
const brandFilter = document.getElementById('brandFilter');
const colorFilter = document.getElementById('colorFilter');
const sizeFilter = document.getElementById('sizeFilter');
const priceFilter = document.getElementById('priceFilter');
const searchBtn = document.getElementById('searchBtn');

function displayProducts(productsList) {

    if (productsList.length === 0) {
        productContainer.innerHTML = `<div class="col-12 text-center my-5"><h4 class="text-muted">No Products Found!</h4></div>`;
        return;
    }

    let cardsHtml = "";

    productsList.forEach(function (product) {
        cardsHtml += `
      <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem; border: 2px solid black;">
          <div class="p-2 text-center bg-light font-weight-bold" style="height: 150px; line-height: 150px; border-bottom: 2px solid black;">
            <strong>IMAGE</strong>
          </div>
          <div class="container card-body">
            <h5 class="card-title text-truncate">${product.name}</h5>
          </div>
          <div class="container card-body d-flex justify-content-around gap-1 pt-0">
            <p class="card-text m-0 flex-fill small">${product.size}</p>
            <p class="card-text m-0 flex-fill small">${product.color}</p>
            <p class="card-text m-0 flex-fill small">$${product.price}.00</p>
          </div>
        </div>
      </div>
    `;
    });

    productContainer.innerHTML = cardsHtml;
}

function filterProducts() {
    const selectedBrand = brandFilter.value;
    const selectedColor = colorFilter.value;
    const selectedSize = sizeFilter.value;
    const selectedPrice = priceFilter.value;

    const filteredResult = products.filter(function (product) {

        const brandMatch = selectedBrand === "" || product.brand === selectedBrand;
        const colorMatch = selectedColor === "" || product.color === selectedColor;
        const sizeMatch = selectedSize === "" || product.size === selectedSize;

        let priceMatch = false;
        if (selectedPrice === "") {
            priceMatch = true;
        } else {
            if (product.price <= Number(selectedPrice)) {
                priceMatch = true;
            }
        }

        if (brandMatch && colorMatch && sizeMatch && priceMatch) {
            return true;
        } else {
            return false;
        }
    });

    displayProducts(filteredResult);
}

searchBtn.addEventListener('click', filterProducts);

displayProducts(products);