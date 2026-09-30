// =========================
// AL NAZAR ABAYA SETTINGS
// =========================

// Put your WhatsApp number here WITHOUT +, spaces or dashes.
// Example Pakistan: 923001234567
const WHATSAPP_NUMBER = "923001234567";

const products = [
  {
    name: "DMC Stone Abaya",
    price: "PKR 8,500",
    image: "images/product1.svg",
    description: "Elegant stone detailing for a luxury finish."
  },
  {
    name: "Front Embroidery Abaya",
    price: "PKR 7,500",
    image: "images/product2.svg",
    description: "Refined front embroidery with a graceful silhouette."
  },
  {
    name: "TikTok Fabric Abaya",
    price: "PKR 6,500",
    image: "images/product3.svg",
    description: "A smooth, elegant fabric for everyday styling."
  }
];

const productBox = document.getElementById("products");

products.forEach((p) => {
  const card = document.createElement("article");
  card.className = "product";
  const message = encodeURIComponent(`Assalam o Alaikum, I want to order the ${p.name}. Please send me available sizes and details.`);
  card.innerHTML = `
    <div class="product-img" style="background-image:url('${p.image}')"></div>
    <div class="product-info">
      <h3>${p.name}</h3>
      <div class="price">${p.price}</div>
      <p style="color:#888;font-size:12px;margin-bottom:15px">${p.description}</p>
      <a class="order" href="https://wa.me/${WHATSAPP_NUMBER}?text=${message}" target="_blank" rel="noopener">Order on WhatsApp →</a>
    </div>`;
  productBox.appendChild(card);
});

const wa = document.getElementById("whatsappButton");
wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Assalam o Alaikum, I would like to know more about your abayas.")}`;

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("open");
});
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => {
  document.querySelector(".header").classList.remove("open");
}));
