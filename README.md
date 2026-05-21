# Supermarket Online - Dokumentasi Codingan

Ini adalah penjelasan detail dari proyek web supermarket sederhana yang menggunakan HTML, CSS, dan JavaScript.

---

## Struktur File
- `index.html` → Halaman utama yang menampilkan produk dan keranjang.
- `style.css` → Styling tampilan: header, grid produk, tombol, dan hover effect.
- `script.js` → Logika interaktif: menampilkan produk, menambah ke keranjang, dan update jumlah item.
- `images/` → Folder yang berisi semua gambar produk.
- `readme.md` → Dokumentasi dan instruksi.

---

## Penjelasan `script.js`

### 1. Array Produk
```javascript
const products = [
    {id:1,name:"Beras Sedap Wangi",price:50000,img:"images/beras.png"},
    ...
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
showProducts();
