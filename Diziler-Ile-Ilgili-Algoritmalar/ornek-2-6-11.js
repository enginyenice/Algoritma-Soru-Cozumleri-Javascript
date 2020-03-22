/**
 * 10 elemanli bir dizide 3 ile tam bolunen sayilari baska bir diziye eklemek
 */

let dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let uceTamBolunenler = []

dizi.forEach(sayi => {
    (sayi % 3 == 0) ? uceTamBolunenler.push(sayi): null
});
console.log("Uce tam bolunenler: ", uceTamBolunenler.toString())