/**
 * N Elemanli bir sayi dizisinin girisini yapan algoritma
 */

let standard_input = process.stdin;
standard_input.setEncoding('utf-8');

let kacElemanli = 0
let sayiArray = []
standard_input.on('data', function(data) {
    if (kacElemanli == 0) {
        kacElemanli = data
    } else {
        if (sayiArray.length != kacElemanli) {
            sayiArray.push(data)
        } else {
            sayiArray.forEach(sayi => {
                console.log("->", sayi)
            });
            process.exit();
        }

    }
});


standard_input.on('data', function(data) {
    if (sayiArray.lenght != data) {

    } else {
        process.exit();
    }

});