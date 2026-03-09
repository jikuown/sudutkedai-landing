// src/data/menu.ts
// Single source of truth untuk semua data menu
// Edit di sini → otomatis update di seluruh halaman

export interface MenuItem {
  name: string;
  sub?: string;
  price: string;
  tag?: 'andalan' | 'new' | 'hits';
}

export interface DrinkItem {
  name: string;
  type: string;
  price: string;
}

// =====================
// SUDUT KEDAI — TEMATIK
// =====================

export const kopi: DrinkItem[] = [
  { name: "Kopi Beneran", type: "Signature", price: "Rp 27.000" },
  { name: "Mexico Coffee", type: "Coffee", price: "Rp 27.000" },
  { name: "Caramel Machiato", type: "Coffee", price: "Rp 28.000" },
  { name: "Coffee Latte", type: "Coffee", price: "Rp 26.000" },
  { name: "Cappucino", type: "Coffee", price: "Rp 27.000" },
  { name: "Moccacino", type: "Coffee", price: "Rp 27.000" },
  { name: "Brown Sugar Latte", type: "Coffee", price: "Rp 27.000" },
  { name: "Caramel Coffee", type: "Coffee", price: "Rp 27.000" },
  { name: "Vanilla Coffee", type: "Coffee", price: "Rp 27.000" },
  { name: "Salt N Caramel Coffee", type: "Coffee", price: "Rp 29.000" },
  { name: "Avocado Coffee", type: "Coffee", price: "Rp 27.000" },
  { name: "Black Coffee", type: "Coffee", price: "Rp 18.000" },
];

export const nonKopi: DrinkItem[] = [
  { name: "Avocado Chocolate", type: "Non-Coffee", price: "Rp 27.000" },
  { name: "Lychee Tea", type: "Non-Coffee", price: "Rp 27.000" },
  { name: "Creamy Matcha", type: "Non-Coffee", price: "Rp 26.000" },
  { name: "Lemon Squash", type: "Non-Coffee", price: "Rp 26.000" },
  { name: "Dark Chocolate", type: "Non-Coffee", price: "Rp 27.000" },
  { name: "Red Velvet", type: "Non-Coffee", price: "Rp 26.000" },
  { name: "Cookies N Cream", type: "Non-Coffee", price: "Rp 26.000" },
  { name: "Fruit Shake Mangga", type: "Non-Coffee", price: "Rp 24.000" },
  { name: "Fruit Shake Naga", type: "Non-Coffee", price: "Rp 24.000" },
  { name: "Teh Tarik", type: "Non-Coffee", price: "Rp 23.000" },
  { name: "Lemon Tea", type: "Non-Coffee", price: "Rp 23.000" },
];

export const makananTematik: MenuItem[] = [
  { name: "Nasi Goreng Original", sub: "Tematik Sudut Kedai", price: "Rp 29.000", tag: "hits" },
  { name: "Nasi Goreng Teri", sub: "Tematik Sudut Kedai", price: "Rp 30.000" },
  { name: "Nasi Goreng Gila", sub: "Tematik Sudut Kedai", price: "Rp 31.000", tag: "andalan" },
  { name: "Nasi Gila", sub: "Tematik Sudut Kedai", price: "Rp 31.000" },
  { name: "Spagheti Bolognese", sub: "Western Fusion", price: "Rp 29.000" },
  { name: "Spagheti Spicy", sub: "Western Fusion", price: "Rp 29.000" },
  { name: "Indomie Rebus Ngegas", sub: "Level pedas tersedia", price: "Rp 29.000", tag: "hits" },
  { name: "Indomie Goreng Sambal Matah", sub: "Bali-style sambal", price: "Rp 27.000" },
  { name: "Mie Goreng Jawa", sub: "Resep Jawa Klasik", price: "Rp 29.000" },
  { name: "Cuanki", sub: "Bandung Street Style", price: "Rp 29.000" },
  { name: "Mix Platter", sub: "Berbagi bareng", price: "Rp 31.000", tag: "andalan" },
];

// ============================
// WAROENG SOEROBOYO — CULTURAL
// ============================

export const makananKultural: MenuItem[] = [
  { name: "Nasi Ayam Bakar Kecombrang", sub: "Signature Waroeng", price: "Rp 34.500", tag: "andalan" },
  { name: "Nasi Rawon", sub: "Sup daging hitam Jawa Timur", price: "Rp 39.500", tag: "hits" },
  { name: "Soto Ayam Kampung Soeroboyo", sub: "Kuah bening khas Surabaya", price: "Rp 34.500", tag: "andalan" },
  { name: "Lontong Cap Gomeh", sub: "Hidangan spesial perayaan", price: "Rp 39.500" },
  { name: "Penyetan Iwak Pe", sub: "Ikan pe goreng + sambal", price: "Rp 33.500" },
  { name: "Nasi Jangan Lodeh", sub: "Sayur lodeh khas Jawa", price: "Rp 33.500" },
  { name: "Lontong Balap", sub: "Street food legendaris Surabaya", price: "Rp 33.500", tag: "hits" },
  { name: "Nasi Goreng Kampung", sub: "Resep kampung autentik", price: "Rp 33.000" },
  { name: "Tahu Tek-Tek", sub: "Tahu + lontong + petis", price: "Rp 32.500" },
  { name: "Rujak Cingur", sub: "Kuliner ikonik Surabaya", price: "Rp 33.500", tag: "andalan" },
  { name: "Ayam Tepung Sambal Ijo", sub: "Crispy + sambal ijo pedas", price: "Rp 34.500" },
  { name: "Mie Goreng Kampung", sub: "Mie goreng resep lawas", price: "Rp 33.000" },
  { name: "Gado Gado", sub: "Sayuran segar + bumbu kacang", price: "Rp 33.500" },
  { name: "Ketan Sambal", sub: "Camilan tradisional", price: "Rp 23.500" },
];

export const minumanTradi: DrinkItem[] = [
  { name: "Es Dawet", type: "Tradisional", price: "Rp 18.000" },
  { name: "Es Asem Jawa", type: "Tradisional", price: "Rp 23.000" },
  { name: "Jahe Tubruk", type: "Herbal", price: "Rp 22.000" },
  { name: "Teh Jasmine Sereh", type: "Herbal", price: "Rp 18.000" },
  { name: "Jamu Kunyit Asam", type: "Jamu", price: "Rp 7.000" },
  { name: "Jamu Beras Kencur", type: "Jamu", price: "Rp 7.000" },
  { name: "Jus Buah", type: "Segar", price: "Rp 21.000" },
  { name: "Es Jeruk", type: "Segar", price: "Rp 21.000" },
  { name: "Es Teh Manis", type: "Segar", price: "Rp 16.000" },
];

// =================
// CAMILAN & DESSERT
// =================

export const gorengan: MenuItem[] = [
  { name: "Tempe Mendoan", sub: "Tempe tepung tipis khas Jawa", price: "Rp 19.000", tag: "hits" },
  { name: "Tahu Petis", sub: "Tahu + petis udang", price: "Rp 17.000" },
  { name: "Bakwan Jagung", sub: "Crispy corn fritter", price: "Rp 16.000" },
  { name: "Singkong Nagih", sub: "Keju + topping", price: "Rp 17.000", tag: "andalan" },
  { name: "Tahu Nagih", sub: "Tahu goreng khas kedai", price: "Rp 22.000" },
  { name: "Onion Ring", sub: "Crispy bawang", price: "Rp 26.000" },
  { name: "Dimsum", sub: "Pilihan dim sum", price: "Rp 25.000" },
  { name: "Rujak Cireng", sub: "Cireng + bumbu rujak", price: "Rp 23.000" },
  { name: "Risol Rhogut", sub: "Risoles kreatif khas kedai", price: "Rp 22.000" },
];

export const dessert: MenuItem[] = [
  { name: "Roti Bakar Keju Coklat", sub: "Pilihan: Keju / Coklat / Strawberry", price: "Rp 22.000", tag: "hits" },
  { name: "Roti Bakar Tiramisu Oreo", sub: "Topping premium", price: "Rp 25.000", tag: "new" },
  { name: "Pisang Bakar Coklat Keju", sub: "Klasik yang tak tergantikan", price: "Rp 23.000" },
  { name: "Pisang Bakar Brown Sugar", sub: "Manis karamel", price: "Rp 23.000" },
  { name: "Pisang Goreng Keju", sub: "Golden & melty", price: "Rp 23.000" },
  { name: "Marmer Cake Slice", sub: "Kue per slice", price: "Rp 18.000" },
  { name: "Molen Salju", sub: "Molen gula halus", price: "Rp 21.000" },
  { name: "Kue Talam Ketan", sub: "Kue tradisional", price: "Rp 6.000" },
  { name: "Gethuk", sub: "Singkong manis tradisional", price: "Rp 6.000" },
];
