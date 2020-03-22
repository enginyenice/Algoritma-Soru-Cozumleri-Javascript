/**
 * 4 basamakli bir sayinin yuzler basamagindaki rakam cift ise bu sayinin kubunun bir tam kare olup olmadığını bulunuz.
 */
let sayi = 1264
sayi -= parseInt((sayi / 1000)) * 1000;
//234
let yuzlerBasamagi = parseInt(sayi / 100);
if (yuzlerBasamagi % 2 == 0) {
    let sayininKubu = Math.pow(yuzlerBasamagi, 3)
    let tamKareMi = Math.pow(sayininKubu, 0.5)
    console.log((tamKareMi - parseInt(tamKareMi) == 0) ? "Tam kare" : "Tam kare degil")
} else {
    console.log("Yuzler basamagi cift degildir")
}