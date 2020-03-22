/*
 * İstenilen kadar elemandan olusan bir sayi dizisinde negatif ve pozitif elemanların sayısını bulan algoritma
 */

let standard_input = process.stdin;
standard_input.setEncoding('utf-8');

let dizi = [];
console.log("Diziye eleman giriniz (0 cikis)");

standard_input.on('data', function(data) {

    if (data == 0) {
        pozitifNegatifBul(dizi)
        process.exit();
    } else {

        dizi.push(parseInt(data))
    }

});

function pozitifNegatifBul(dizi = []) {
    let pozitifSayi = 0
    let negatifSayi = 0
    dizi.forEach(sayi => {
        (sayi < 0) ? negatifSayi += 1: pozitifSayi += 1
    });
    console.log("Negatif Sayi Adeti : ", negatifSayi)
    console.log("Pozitif Sayi Adeti : ", pozitifSayi)
}