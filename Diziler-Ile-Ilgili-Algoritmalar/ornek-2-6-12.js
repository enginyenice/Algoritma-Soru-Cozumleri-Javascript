/**
 * Istenilen bir deger verilinceye kadar girilen sayilari diziye yukleyerek aritmatik ortalamasini hesaplama
 */


let standard_input = process.stdin;
standard_input.setEncoding('utf-8');

let dizi = [];
console.log("Diziye eleman giriniz (0 cikis)");

standard_input.on('data', function(data) {
    let toplam = 0
    if (data == 0) {
        dizi.forEach(sayi => {
            toplam += sayi
        });
        console.log("Aritmatik Ortalama: ", toplam / dizi.length)
        process.exit();

    } else {

        dizi.push(parseInt(data))
    }
});