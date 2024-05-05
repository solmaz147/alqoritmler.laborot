/* 2 TAPŞIRIQ.
 Built-in metodundan istifade etmeden verilmiw ifadeni tersine yazan proqramm kodu yazmaqcun yeniden bir funksiya yaradiriq,bu funksiya bizden parametr olaraq ifade alacaq*/


function cevrilmiwString (ifade) {
    let cevrliwmiwIfade = "" /* cevrilmiw ifade ucun yaddawda yer ayiririq */
    for (i=ifade.length-1; i>=0 ; i-- ) //'i=ifade.length-1' yeni ifadenin son hefinden bawlayaraq azala azala 0nci indekse qeder herfleri secir//
     {
        cevrliwmiwIfade+=ifade[i]
    } /*cevrliwmiw ifadeye verdiyiz ifadenin tersine duzulmuw herflerini elave edirik*/
    return cevrliwmiwIfade //ve cevrilmiw ifadeni bize qaytarir//

}

/* kodumuzu consola yazib duzgun caliwmasini yoxlayiriq */
console.log(cevrilmiwString("heyat"))