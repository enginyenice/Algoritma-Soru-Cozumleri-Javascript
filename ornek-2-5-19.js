/**
 * Ondalikli kismi 3 haneli girilen pozitif bir rasyonel sayinin tam kismi ile ondalikli kisminin tamsayi 
 * degerlerinin farki pozitif ise bu degerlerin farki pozitif ise bu degerin bir tamkare sayi olup olmadigini 
 * arastiriniz
 */

let sayi = 423.323

let TamKisim = parseInt(sayi)
let ondalikKisim = sayi - TamKisim
ondalikKisim = ondalikKisim * 1000
let aralarindakiFark = parseInt(Math.round(TamKisim - ondalikKisim))


if (aralarindakiFark > 0) {
    if (Math.pow(aralarindakiFark, 0.5) - parseInt(Math.pow(aralarindakiFark, 0.5)) == 0)
        console.log("Tamkare: ", aralarindakiFark)
    else
        console.log("Tamkare degil: ", aralarindakiFark)

} else {
    console.log("Farkları pozitif değildir. : ", TamKisim - ondalikKisim)
}