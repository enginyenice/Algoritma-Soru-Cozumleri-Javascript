/**
 * Küçükten büyüğe doğru sıralı bir şekilde yazilmis bir sayi dizisinde istenilen bir sayiyi yarılama yontemi ile bulma
 */
let dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let aranan = 7
let baslangic = 0
let son = dizi.length
let orta = parseInt(Math.ceil(baslangic + son) / 2)
yarilamaYontemiIleBul(dizi, aranan, baslangic, orta, son)

function yarilamaYontemiIleBul(dizi = [], aranan, baslangic, orta, son) {
    console.log(`Aranan Sayi: ${aranan}\nBaslangic Indisi: ${baslangic}\nOrtanca Indis: ${orta}\nSon Indis: ${son}\nDizinin Ortanca Elemaninin Degeri: ${dizi[orta]}`)
    console.log("-----------------------------------")
    if (aranan == dizi[orta]) {
        console.log("Sayi Bulundu. Indis: ", orta)
        return 0;
    }
    if ((baslangic == orta && baslangic == son && dizi[orta] != aranan) ||
        (baslangic == orta && baslangic + 1 == son && aranan != dizi[orta])) {
        console.log("Sayi Dizide Yok")
        return 0;
    }



    if (aranan > dizi[orta]) {
        baslangic = orta
        console.log("Aranan Buyuk")
    } else {
        son = orta
        console.log("Aranan Kucuk")
    }
    orta = parseInt(Math.ceil(baslangic + son) / 2)

    yarilamaYontemiIleBul(dizi, aranan, baslangic, orta, son)


}