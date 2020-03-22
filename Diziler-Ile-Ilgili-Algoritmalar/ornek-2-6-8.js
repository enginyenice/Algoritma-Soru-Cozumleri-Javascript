/**
 * 10 elemanli bir diziyi kucukten buyuge dogru sıralama
 */

let dizi = [2, -16, 1, -9, 2, 7, -1, 66, 4, 2]
let i = 0
for (i; i < dizi.length; i++) {
    for (let k = i + 1; k < dizi.length; k++) {
        if (dizi[i] < dizi[k]) {
            let tempSayi = dizi[k]
            dizi[k] = dizi[i]
            dizi[i] = tempSayi
        }
    }
}
console.log(dizi.toString())