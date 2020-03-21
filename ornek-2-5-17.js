/**
 * Ondalikli kısmı iki haneli girilen pozitif bir rasyonel sayinin tam kısmındaki sayı degerlerinin bir tam kare olup
 * olmadıgını arastır
 */
let sayi = 17.123

let tamKisim = parseInt(sayi)
console.log((Math.pow(tamKisim, 0.5) == parseInt(Math.pow(tamKisim, 0.5))) ? "Tam kare" : "Tam kare degil")