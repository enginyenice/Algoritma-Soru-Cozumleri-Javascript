/**
 * Girilen sayilar arasindan aranan sayiya en yakın olan sayiyi bulan algoritma
 * Nasil Calistirilir:
 * node ornek-2-5-9.js 3 4 5 6 7 8 9 12 21 (Eklenmesini istediginiz sayilari yan yana yaziniz...)
 * @type {number}
 */

let arananSayi = 21
let enYakinSayi= 99999999999
for(let i = 0;i< process.argv.length;i++)
{
    if(Math.abs(enYakinSayi-process.argv[i]) < enYakinSayi)
        enYakinSayi = process.argv[i]
}
console.log(`${arananSayi} sayisina en yakin sayi ${enYakinSayi}`)
