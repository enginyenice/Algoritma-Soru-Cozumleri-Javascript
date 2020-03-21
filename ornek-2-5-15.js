/*
* Verilen 4 haneli bir tamsayinin yuzler hanesideki sayi degerinin 3 ile bolumundan elde edilen kalanın aynı sayının birler hanesindeki
* deger ile farkını bulan algoritma
* */

let Orjsayi = parseInt(1234);
let sayi = Orjsayi;

sayi -= parseInt((sayi / 1000)) * 1000;
//234
let yuzlerBasamagi = parseInt(sayi / 100);
sayi -= parseInt((sayi / 100))*100;
let birlerBasamagi = sayi - parseInt((sayi / 10))*10;
console.log(`${Orjsayi} sayisinin yuzler basamagi ${yuzlerBasamagi} birler basamagi ${birlerBasamagi}`);
console.log("Fark:" ,(yuzlerBasamagi % 3) - birlerBasamagi);





