/**
 * 10 elemanli bir sayi dizisinin ortalamasi ile her bir elemanın farkının bir diziye yuklenerek bu dizideki negatif elemanlarin
 * ortalamasini bulan algoritma
 */

let dizi = [1, 2, 3, 4, 5, 6, 7, 8, -9, -10]
let ortalama = 0
let yeniDizi = []
ortalamaHesapla()

function ortalamaHesapla() {
    let toplam = 0
    dizi.forEach(sayi => {
        toplam += sayi
    });
    ortalama = toplam / dizi.length
    yeniDiziOlustur()
}

function yeniDiziOlustur() {
    dizi.forEach(sayi => {
        yeniDizi.push(sayi - ortalama)
    });
    dizidekiNegatifleriBul()
}

function dizidekiNegatifleriBul() {
    let negatif = 0
    yeniDizi.forEach(sayi => {
        if (sayi < 0) {
            negatif += 1
        }
    });
    console.log(yeniDizi.toString())
    console.log("Toplam negatif sayi: ", negatif)
}