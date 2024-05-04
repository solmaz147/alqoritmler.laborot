/* 1TAPSIRIQ.
Ilk once funksiya yaradmaliyiq ve ona ad qoymaliyiq.Bu funksiya bizden wert aldiqi ucun parametrli funksiya olacaq,mohterizede parametri qeyd elemeliyik.Bize her hansi bir soz verilir (string)ve palindrom olub olmadigini yoxlamaqcun, o sozu ilk once split (built-in metodu) ile herflere boluruk.Sonra herflerin yerini tersine deyiwmek ucun reverse metodundan istifade edirik.Ve sonda yeniden tersine cevrilmiw herfleri birlewdirmek ucun join metodundan istifade edirik.Funksiya bize boolean qaytarmalidi,ya true ve yaxud false.Eger verdiyimz soz onun tersine variantina beraberdise,true;eks halda false.Yalniz iki wertimiz oldugu ucun wert operatorundan istifade edirik: if ve elseden.
*/

function palindromdurMu (str) {
    const tersineSoz = str.split("").reverse().join("") //split-herflere boluruk,reverse-herfleri ceviririk,join-cevrilmiw herfleri birlewdiririk
    if(str===tersineSoz){
        return "Bu soz palindromdur"
    }
    else {
        return "Bu soz palindrom deyil"
    }

}


/* yazdigimiz kodun duzgun iwlemesini yoxlamaq ucun hansisa string yazib funksiyani cagiririq ve neticesini ekrana yazdiririq */
console.log(palindromdurMu("madam"))
console.log(palindromdurMu("programmer"))






/* 2TAPWIRIQ.
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


 




/* 3TAPWIRIQ
  Binary search axtariw alqoritmini yazmaq ucun ilk once funskiya yaradib ona iki parametr vermeliyik.Cunki bu funskiya bizden bir array alacaq parametr olaraq(array),ve bu arrayin icinde axtardigimiz elementi tapmalidi.Axtardigimiz elementide parametr kimi qeyd edirik(target).Binary searchin mentiqi ona esaslanir ki,arraydaki elementleri bir bir gezmekdense,onu iki yere bolub axtardigimiz elementin hansi terefde oldugunu mueyyen edib ,orada axtariwi davam etmek,diger hisseni ise gormezden gelmek.Bununla hem vaxta qenaet edib iwi asanlawdirmaq mumkundu.
Arrayi iki yere bolmek ucun onun uzunluqunu 2ye boluruk.Ortancil indeksi tapmaq ucun 0 indeksi ile sonuncu indeksin (array.length-1) cemini 2ye boluruk.
Ve eger axtardigimiz element ortadadisa, proqram onun indeksini qaytaracaq(if(array[arrayinOrtasi] === target) {
return arrayinOrtasi}
).
.Eger axtardigimiz element ortadan sonradisa (else if( array[arrayinOrtasi] < target ){ 
arrayinBawlangici = arrayinOrtasi+1
}) onda ortadan qabaqki hisseni gormezden gelirik. Eger axtardigimiz element (target) ortadan qabaqdadiirsa,ortadan sonraki hisseni gormezden gelmeliyik (else{
arrayinSonu = arrayinOrtasi-1
}
)   Ve sonda axtardigimiz elemet arrayda yoxdursa, "tapilmadi" sozu yazilacaq.*/





function binarAxtariw (array, target) {
let arrayinBawlangici = 0; /*arrayin ilk indeksi*/
let arrayinSonu= array.length-1; /*arrayin sonuncu indeksi*/
while(arrayinBawlangici<=arrayinSonu) {
let arrayinOrtasi = Math.floor((arrayinBawlangici + arrayinSonu)/2) ; /* arrayi iki beraber hisseye bolduk ve ortadaki indeksi tapdiq*/
if(array[arrayinOrtasi] === target) {
return arrayinOrtasi} /* yeni axtardigimiz reqem ortadaki indeksdedise hemin indeksi qaytaracaq*/
else if( target>array[arrayinOrtasi] ){ 
arrayinBawlangici = arrayinOrtasi+1
}
else if(target<array[arrayinOrtasi]) {
arrayinSonu = arrayinOrtasi-1
}
 else{ return "tapilmadi" } 
 /*eger axtardigimiz elemet arrayda tapilmasa "tapilmadi" ifadesi yazilacaq */


}}
 

//kodu yoxlamaqcun bir array ve target verib funskiyamizi iwledirik//
let array = [2,5,8,9,23,25] ;
let target = 23

console.log(binarAxtariw(array,target))


/*binary search alqoritminin time complexity emsali o(log(n)) dir.Bu alqoritm effektliyi ve sureti ile taninir.Cunki uzun massivlerde ve cox informasiyalar olanda axtardiqimiz elementi bir bir gezmekdense her defe yari yariya bolub vaxta qenaet elemek mumkundur,ve axtardigimiz elementi suretli wekilde tapmaq mumkundur*/


/* 4CU TAPWIRIQ

Bu tapsiriqa esasen ededler olan array vermeliyik,ve hansisa bir netice ededi.Yeni yazdiqimiz funksiya bizden iki parametr alacaq.Eger arrayin icinde hansisa iki ededin cemi neticemizde qeyd etdiyimiz edede beraber olacaqsa,hemen ededlerin yerlewdiyi indeksi bize qaytaracaq.Bu alqoritmde 0nci indeksden bawlayaraq(i=0; i<verilenEdedler.length-1; i++) ededleri bir bir ozunden sonra gelen (j=i+1; j<verilenEdedler.length;j++) ededlerle toplama prosesi olacaq, ve bu proses bir nece dovr olacaq,yeni bir merheleli proses olmadigi ucun ic ice fordan istifade etmeliyik.Arraydaki sonuncu edede geldikde artiq o evvelki merhelelerde butun ededlerle toplanib deye (i<verilenEdedler.length-1) o artiq dovr elemir. Arraydaki ededleri ozunden sonraki edednen toplayiriq,cunki ozu ile toplaya bilmerik,ve ozunden qabaqki ededlernen toplama ise artiq onceki merhelelerde baw verir.Mehz buna gore (j=i+1) yaziriq. */
function indeksleriTap (verilenEdedler, netice) //iki parametri olan funksiya yaradiriq.
 { 
    let ededlerinIndeksi=[];//axirda indekslerin yerlewmesi ucun yaddawda array yaradiriq
    for(i=0; i<verilenEdedler.length-1; i++){
    for(j=i+1; j<verilenEdedler.length;j++){
        if(verilenEdedler[i]+verilenEdedler[j]===netice)//eger hansisa iki ededin cemi neticede qeyd etdiyimiz edede beraber olacaqsa
        ededlerinIndeksi.push([i,j]); //yaddawda saxladigimiz arraya indeksleri yerlewdiririk
        
    }

 }

 return ededlerinIndeksi

 }
  let verilenEdedler = [2,5,7,3,1,8];
  let netice = 6;
  console.log(indeksleriTap(verilenEdedler,netice))
 







/* 5 TAPWIRIQ
Verilmiw sozu tersden yazdiran proqram kodunu yazmaq ucun  javascriptin built-in metodlarindan istifade ede bilerik.Ilk once parametrli funksiya yaradiriq.Parametr olaraq bizden her hansisa bir soz alacaq.O sozu ilk once split metodu ile ayri ayri herflere boluruk.Herflerin yerini tersine deyiwdirmek ucun reverse metodundan istifade edirik.Sonda parcalanmiw herfleri yeniden birlewdirmeliyik,bunun icin join metodundan istifade edirik.Neticede bir setrlik kod yaziriq,funksiyanin aldigi parametre bu 3 metodu elave etmekle.*/


function tersdenYaz(soz) {
return soz.split("").reverse().join("")
} 

console.log(tersdenYaz("salam"))








/* 6 TAPWIRIQ.
Bubble Sort alqoritmi. Bu alqoritmin adi "Bubble=KOPUK" sozunden emele gelib cunki verilmiw arrayi kicikden boyuye sortlawdiranda her merhelede,boyuk ededi yuxariya,yeni arrayin sonuna yerlewir.Bubble sort alqoritmi bizden parametr olaraq tipi number olan array alacaq.Arrayin ilk indeksinden bawlayaraq diger indeksleri ile iki iki yoxlayacq, indeksi ve ondan sonra gelen indeksi yoxlayib,boyuk olani axira dogru suruwdurur.Bu alqoritmde iki dovr operatoru caliwacaq(forun icinde for)cunki bu proses bir defe yox ,arrayin uzunluqundan asili olaraq defelerle iwe duwecek. Bu alqoritmin emsali quadratic olacaq O(nX2), cunki ic ice iki fordan istifade olunur*/


function bubbleSort(ededler) {
    const len = ededler.length  
    /*ilk for-umuz yazdigimiz kodun nece defe iwe duweceyini hesablayir,yeni nece merhele kecdiyini */
    for(let i=0; i<len; i++) {
        for(let j=0; j<len-1;/* her merhelede en boyuk eded artiq yerini tapir ve arrayin sonuna yerlewir*/ j++) {
           /*soldaki indeks sagdakinden boyukdurse yerlerini deyis*/
            if(ededler[j]>ededler[j+1]){
                
                //swap metodundan istifade edirik//
                let temp=ededler[j] //yaddawda kicik ededcun yer ayirirq ve adini temp qoyuruq
                ededler[j]=ededler[j+1] //boyuk ededi saga suruwdururuk
                ededler[j+1]=temp //kicik ededi yaddawda ayirdigimiz yere atiriq

            }
 } }
return ededler //sonda bize artiq sortlanmiw ededler massivini qaytaracaq//
}

//buble sort alqoritmini duzgun caliwdiqini yoxlayiriq://
console.log(bubbleSort([3,5,2,7]))
console.log(bubbleSort([38,85,12,55,23]))





/*7 TAPWIRIQ
Merge sort.Merge sozu birlewdirmek menasini verir,yeni  mergeSort birlewdirib sortlamaq demekdir.Eslinde bu alqoritmde ilk once her hansisa bir arrayi mumkun qeder ikilere bolur,ve ededleri iki iki yoxlayib sortlawdirir. Ve  hisse hisse sortlawmadan sonra yeniden birlewme prosesi gedir.
*/




