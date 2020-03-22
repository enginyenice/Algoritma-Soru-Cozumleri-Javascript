/**
 * (Sayi sıkıstırma ornegi) Tutulan bir sayiyi kucuk , buyuk bilgileri verilerek bulmak
 * */

let standard_input = process.stdin;
standard_input.setEncoding('utf-8');

let tutulanSayi = Number(10);
console.log("Sayi Giriniz");

standard_input.on('data', function (girilenSayi) {
    if(girilenSayi == tutulanSayi){
        console.log("Sayiyi buldunuz");
        process.exit();
    }else if(girilenSayi > tutulanSayi)
    {
        console.log("Sayi girdiginiz sayidan kucuk")
    }else
    {
        console.log("Sayi girdiginiz sayidan buyuk")
    }
});

