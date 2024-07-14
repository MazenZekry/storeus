
    const productData = {
        "name": "Jam Printed Round Neck Knitted Top for Boys - Multicolour",
    "price": 27,
    "color": "Bright and playful colors",
    "material": "100% Cotton",
    "productURL":"https://storeus.com/jam-printed-round-neck-knitted-top-multicolour-for-boys-4",
    "image": "https://media.storeus.com/images/product/1715325514663dca407139e.jpg"
};

    document.getElementById("product-name").textContent = productData.name;
    document.getElementById("product-price").textContent = productData.price+ " AED" ;
    document.getElementById("product-color").textContent = productData.color;
    document.getElementById("product-material").textContent = productData.material;
    document.getElementById("product-image").src = productData.image;
    document.getElementById("product-url").href = productData.productURL;

