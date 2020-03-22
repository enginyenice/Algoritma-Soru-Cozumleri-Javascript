/**
 * 10 elemanli bir dizide negatif ve pozitif elemanlari ayrı ayrı ortalamasinin mutlak degerinin toplaminin
 * en yakin tamkare sayiya uzakligini bulan algoritma
 */

let dizi = [1, 2, 3, 4, 5, 6, 7, 8, -9, -10]
let pozitifAdet = 0
let negatifAdet = 0
let pozitifToplam = 0
let negatifToplam = 0
let pozitifOrtalama = 0
let negatifOrtalama = 0
let fark = 0
let enYakinTamKareSayi = 0
ortalamaBul()

function ortalamaBul() {
    dizi.forEach(sayi => {
        if (sayi < 0) {
            negatifToplam += sayi
            negatifAdet += 1
        } else {
            pozitifToplam += sayi
            pozitifAdet += 1
        }
    });
    negatifOrtalama = (negatifToplam * -1) / negatifAdet
    pozitifOrtalama = pozitifToplam / pozitifAdet
    fark = Math.abs(negatifOrtalama - pozitifOrtalama)
    console.log(negatifOrtalama, pozitifOrtalama)
    enYakinTamKareSayiBul(fark)
}

function enYakinTamKareSayiBul(fark) {
    for (let i = 2; i < parseInt(fark); i++)
        if (Math.abs(fark - enYakinTamKareSayi) > Math.abs(fark - i * i))
            enYakinTamKareSayi = i * i

    console.log("Fark: ", fark)
    console.log("En Yakin Tam Kare Sayi: ", Math.sqrt(enYakinTamKareSayi))
}