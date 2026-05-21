const products = [
    {id:1,name:"Beras Sedap Wangi",price:50000,img:"images/beras.png"},
    {id:2,name:"Roti Gandum Sari Roti",price:12000,img:"images/roti.jpg"},
    {id:3,name:"Susu Ultra Milk Biru",price:7000,img:"images/susu1.jpg"},
    {id:4,name:"Susu Ultra Milk Stroberi",price:7000,img:"images/susu2.jpg"},
    {id:5,name:"Susu Ultra Milk Coklat",price:7000,img:"images/susu3.jpg"},
    {id:6,name:"Minyak Goreng Bimoli",price:30000,img:"images/minyak.jpg"}
];

const cart = [];

function showProducts(){
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product=>{
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp ${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function addToCart(id){
    const product = products.find(p=>p.id===id);
    cart.push(product);
    document.getElementById('cart-count').textContent = cart.length;
    alert(`${product.name} ditambahkan ke keranjang!`);
}

showProducts();
