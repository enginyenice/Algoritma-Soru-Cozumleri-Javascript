/**
 * Arka arkaya girilen rastgele 10 sayının ortalaması ile bu sayılardan en büyük ve en kucuk olanının ortalamasını bularak elde edilen
 * bu iki ortalamaın farkını alan algoritma
 */
let standard_input = process.stdin;
standard_input.setEncoding('utf-8');

let EnKucuk, EnBuyuk, Ortalama, girilenSayiAdeti;
EnKucuk = 0;
EnBuyuk = 0;
Toplam = 0;
girilenSayiAdeti = 0;

function  OrtalamaHesapla(toplam,adet)
{
    console.log("Adet: ",adet,"Toplam: ",toplam,"Ortalama: ", toplam/adet)
    return toplam / adet
}

standard_input.on('data', function (girilenSayi) {

    if(girilenSayiAdeti == 10)
    {
        let genelOrtalama = OrtalamaHesapla(Toplam,girilenSayiAdeti)
        let minMaxOrtalama = OrtalamaHesapla(EnBuyuk + EnKucuk,2)
        console.log("Ortalamaların Farkları: ",genelOrtalama - minMaxOrtalama)
        process.exit();
    }
    else
    {
        if(girilenSayiAdeti == 0)
        {
            EnKucuk = parseInt(girilenSayi)
            EnBuyuk = parseInt(girilenSayi)
        }
        if(EnKucuk > parseInt(girilenSayi))
            EnKucuk = parseInt(girilenSayi)
        if(EnBuyuk < parseInt(girilenSayi))
            EnBuyuk = parseInt(girilenSayi)


    }

    Toplam += parseInt(girilenSayi)
    girilenSayiAdeti = girilenSayiAdeti + 1



});


