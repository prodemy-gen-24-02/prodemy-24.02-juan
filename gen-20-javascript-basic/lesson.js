function hitungLuasKotak(sisi) {
    let kotak = Math.pow(sisi, 2);
    return kotak;
}

function hitungLuasSegitiga(alas, tinggi) {
    let segitiga = 0.5 * alas * tinggi;
    return segitiga;
}

function hitungLuasPersegiPanjang(panjang, lebar) {
    let persegiPanjang = panjang * lebar;
    return persegiPanjang;
}

function hitungLuasLingkaran(r) {
    let pi = Math.PI; //mendapatkan nilai pi dari Math.PI
    let lingkaran = pi * Math.pow(r, 2); //Math.pow untuk menghitung r^2
    return lingkaran;
}

function hitungLuasTrapesium(a, b, tinggi) {
    let trapesium = (a + b) / 2 * tinggi;
    return trapesium;
}

let sisiAtas = 6;
let sisiBawah = 9;
let tinggi = 7;
// Memanggil fungsi hitungLuasTrapesium dan menyimpan hasilnya
let luasTrapesium = hitungLuasTrapesium(sisiAtas, sisiBawah, tinggi);
// Menampilkan hasil
console.log(`Luas trapesium dengan sisi atas ${sisiAtas}, sisi bawah ${sisiBawah}, dan tinggi ${tinggi} adalah: ${luasTrapesium}`);

let jarijari = 3;
//Memanggil fungsi
let luasLingkaran = hitungLuasLingkaran(jarijari);
//Menampilkan hasil
console.log(`Luas lingkaran dengan r= ${jarijari}, adalah: ${luasLingkaran.toFixed(3)}`);

let ppanjang = 5;
let llebar = 7;
//Memanggil fungsi
let luasPersegiPanjang = hitungLuasPersegiPanjang(ppanjang, llebar);
//Menampilkan fungsi
console.log(`Luas panjang persegi p= ${ppanjang}, l= ${llebar}, luas: ${luasPersegiPanjang}`);

let alas = 2;
let height = 7;

let luasSegitiga = hitungLuasSegitiga(alas, height);

console.log(`Luas segitiga dengan alas= ${alas}, tinggi= ${height}, adalah: ${luasSegitiga}`);

let sisi = 7;

let luasKotak = hitungLuasKotak(sisi);

console.log(`Luas kotak dengan sisi= ${sisi} adalah: ${luasKotak}`);
