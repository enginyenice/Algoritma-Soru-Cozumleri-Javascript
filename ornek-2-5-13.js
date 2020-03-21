/**
 *  10 ile 100 arasindaki tamsayilardan asal olanlarin bulunmasi
 * */

function asalMi(sayi)
{
    for(let i = 2; i< parseInt(sayi / 2); i++){
        if(sayi / i - parseInt(sayi / i) === 0)
            return false
    }
    return true
}
for(let i = 10; i< 100; i++)
    (asalMi(i) === true) ? console.log("Asal Sayi: ", i) : "";
