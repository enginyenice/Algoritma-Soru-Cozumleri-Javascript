/**
 * 10 elemanli bir sayi dizinde negatif ve pozitif sayilarin ayrı ayrı ortalamasini bulan algoritma
 */
let dizi = [2, -16, 1, -9, 2, 7, -1, 66, 4, 2]
let negatifToplam, pozitifToplam, negatifSayi, pozitifSayi, negatifOrtalama, pozitifOrtalama
negatifSayi = 0
negatifToplam = 0
pozitifSayi = 0
pozitifToplam = 0
negatifOrtalama = 0
pozitifOrtalama = 0

dizi.forEach(sayi => {
    if (sayi < 0) {
        negatifSayi += 1
        negatifToplam += sayi
    } else {
        pozitifSayi += 1
        pozitifToplam += sayi
    }
});
negatifOrtalama = negatifToplam / negatifSayi
pozitifOrtalama = pozitifToplam / pozitifSayi
console.log("Negatif Sayilarin ortalamasi: ", negatifOrtalama)
console.log("Pozitif Sayilarin ortalamasi: ", pozitifOrtalama)