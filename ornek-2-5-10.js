/***
 * 1 ile 100 arasindaki tamsayilardan 2 katının 1 fazlası 5 ile tam bölünen kaç sayı olduğunu bulan algoritma
 * @type {number}
 */
let kacAdetSayiVar = 0
for(let i = 1; i<100;i++)
{
    let hesaplanan  = ((i * 2) + 1 ) / 5
    let Tam = parseInt(hesaplanan)
    if(Tam - hesaplanan == 0)
        kacAdetSayiVar += 1
}
console.log(kacAdetSayiVar)
