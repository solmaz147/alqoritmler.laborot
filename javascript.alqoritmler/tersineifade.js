/* 5 TAPŞIRIQ
Verilmiw sozu tersden yazdiran proqram kodunu yazmaq ucun  javascriptin built-in metodlarindan istifade ede bilerik.Ilk once parametrli funksiya yaradiriq.Parametr olaraq bizden her hansisa bir soz alacaq.O sozu ilk once split metodu ile ayri ayri herflere boluruk.Herflerin yerini tersine deyiwdirmek ucun reverse metodundan istifade edirik.Sonda parcalanmiw herfleri yeniden birlewdirmeliyik,bunun icin join metodundan istifade edirik.Neticede bir setrlik kod yaziriq,funksiyanin aldigi parametre bu 3 metodu elave etmekle.*/


function tersdenYaz(soz) {
    return soz.split("").reverse().join("")
    } //sozu herflere bolduk,duzuluwunu cevirdik,ver birlewdirdik
    
    console.log(tersdenYaz("salam"))

    //output 'malas' oldu.demek her weyi duz yazmisiq.
    
    
    
    
    