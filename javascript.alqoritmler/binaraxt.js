/* 3TAPŞIRIQ
  Binary search axtariş alqoritmini yazmaq ücün ilk önce funskiya yaradib ona iki parametr vermeliyik.Çünkü bu funskiya bizden bir array alacaq parametr olaraq(array),ve bu arrayin içinde axtardigimiz elementi tapmalidi.Axtardigimiz elementide parametr kimi qeyd edirik(target).Binary searchin mentiqi ona esaslanir ki,arraydaki elementleri bir bir gezmekdense,onu iki yere bölüb axtardigimiz elementin hansi terefde oldugunu mueyyen edib ,orada axtarişi davam etmek,diger hisseni ise gormezden gelmek.Bununla hem vaxta qenaet edib işi asanlawdirmaq mümkündü.
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
    /*binary search alqoritminin time complexity emsali o(log(n)) dir.Bu alqoritm effektliyi ve sureti ile taninir.Çünkü uzun massivlerde ve cox informasiyalar olanda axtardiqimiz elementi bir bir gezmekdense her defe yari yariya bölüb vaxta qenaet elemek mumkundur,ve axtardigimiz elementi suretli wekilde tapmaq mumkundur*/
    