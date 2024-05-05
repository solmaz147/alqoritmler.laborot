/* 6 TAPŞIRIQ.
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


