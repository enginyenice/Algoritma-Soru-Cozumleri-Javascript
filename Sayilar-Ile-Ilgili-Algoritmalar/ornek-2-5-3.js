/**
 * 3 tam sayidan en buyugunu bulan algoritma
 */


let sayi1 = 5,
    sayi2 = 7,
    sayi3 = 6;

(sayi1 > sayi2 && sayi1 > sayi3) ? console.log(sayi1): (sayi2 > sayi3) ? console.log(sayi2) : console.log(sayi3)

// Üstteki if - else if - else kullanımının uzun hali
/*
if (sayi1 > sayi2 && sayi1 > sayi3) {
    console.log(sayi1)
} else if ((sayi2 > sayi3)) {
    console.log(sayi2)
} else {
    console.log(sayi3)
}
*/