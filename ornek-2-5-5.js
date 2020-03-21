/**
 * 1 ile 100 arasindaki tam sayilardan tek ve cift olanlarin ayrı ayrı toplamını bulan algoritma
 */

let tek = 0,
    cift = 0
for (let i = 1; i < 100; i++) {
    if (i % 2 == 0)
        cift += i
    else
        tek += i
}
console.log("Tek Sayilar:", tek, "\nCift Sayilar: ", cift)