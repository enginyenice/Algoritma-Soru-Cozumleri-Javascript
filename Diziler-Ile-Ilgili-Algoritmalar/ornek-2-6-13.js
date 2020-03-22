/**
 * Diziyi kucukten buyuge veya buyukten kucuge siralama algoritmasi
 */
let dizi = [10, 8, 3, 6, 5, 4, 7, 2, 9, 1]

function kucuktenBuyuge(dizi = []) {
    for (let i = 0; i < dizi.length; i++)
        for (let k = i + 1; k < dizi.length; k++) {
            if (dizi[i] > dizi[k]) {
                let temp = dizi[k]
                dizi[k] = dizi[i]
                dizi[i] = temp
            }
        }
    console.log("Kucukten buyuge: ", dizi.toString())
}

function buyuktenKucuge(dizi = []) {
    for (let i = 0; i < dizi.length; i++)
        for (let k = i + 1; k < dizi.length; k++) {
            if (dizi[i] < dizi[k]) {
                let temp = dizi[k]
                dizi[k] = dizi[i]
                dizi[i] = temp
            }
        }
    console.log("Buyukten kucuge: ", dizi.toString())
}
kucuktenBuyuge(dizi)
buyuktenKucuge(dizi)