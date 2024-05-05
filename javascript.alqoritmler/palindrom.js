/* /* 7ci tapşırıq. Merge sort alqoritmi.
Merge sort birlewdire birlewdire duzmek menasini verir.Bu aLqoritm divide and conquer prinsipi ile iwleyir.Tebii ki sohbet sortlawmadan gedirse,bu alqoritm bizden parametr olaraq sortlanmamiw ededler arrayi alacaq(reqemler).
Merge sort effektiv ve suretli alqoritmlerden biri sayilir ve emsali O(n*log(n)),cunki bu massiv evvel nece defe bolunurse sonra yeniden o bolunduyu qeder birlewir.Demek ilk once verilmiw arrayi 2ye bole bole kicik podmassivlere bolur.Sonra hemin kicik podmassivlerin ededlerini muqayise eliyib,yaddawda yaraddiqimiz bow arraya(let result=[])kicik olani yerlewdiririk.
hemin*/


function mergeSort(qariwiqrededler){
    if(qariwiqrededler.length<=1) {
        return qariwiqrededler //eger arrayda yalniz bir eded varsa o arrayi qaytarsin
    }
    const ortasi= Math.floor(qariwiqrededler.length/2) //her defe massivi iki iki boluruk ,ve eger ikiye tam bolunmurse awaqi yuvarsin
     const solteref= qariwiqrededler.slice(0,ortasi) //massivi slice metodu ile sol ve sag terefe ayiririq
     const sagteref= qariwiqrededler.slice(ortasi) //massivin ortasindan axirina kimi
      
     return merge(mergeSort(solteref),mergeSort(sagteref))//ilk yazdigimiz funskiya(mergeSort)bolmek ucun yazilmiwdi.merge funskiyasi muqaise edecek ve arraylari yeniden birlewdirecek

}

function merge(solteref,sagteref){
    let sortlanmiwededler=[] //yaddawda sortlanmiw ededlercun bir bow massiv yaradiriq,axirda neticeni icine yazdirmaq ucun
    let solIndex=0 //her iki terefde ilk ededlerden bawlayaraq muqaise edecek,yeni 0 indeksden
    let sagIndex=0
     while(solIndex<solteref.length && sagIndex<sagteref.length)  {
        if(solteref[solIndex]<sagteref[sagIndex]){
            sortlanmiwededler.push(solteref[solIndex]); //kicik olan ededi yaddawda saxladigimz arraya elave edirik
            solIndex++;//kecsin diger indekse


        }
        else{
            sortlanmiwededler.push(sagteref[sagIndex]);//kicik ededi arraya elave eledi
            sagIndex++; //artiq kecsin o biri indeksi yoxlamaga
        }
     }
     //while operatoru solIndeksleri ve sagIndeksleri bir bir evvelden axira kmi oxuyub yoxlayaacaq ve muqaise edecek,ve onlar eyni anda hereket etmelidir.

     return sortlanmiwededler.concat(solteref.slice(solIndex)).concat(sagteref.slice(sagIndex));
     //ve en sonda sol ve sag terefden siralanmiw elementleri birlewdirib duzgunluyune emin olur

}


console.log(mergeSort([45,11,12,76,23,56,10,12]))




/* 7ci tapwiriq.Merge sort alqoritmi.
Merge sort birlewdire birlewdire duzmek menasini verir.Bu aLqoritm divide and conquer prinsipi ile iwleyir.Tebii ki sohbet sortlawmadan gedirse,bu alqoritm bizden parametr olaraq sortlanmamiw ededler arrayi alacaq(reqemler).
Merge sort effektiv ve suretli alqoritmlerden biri sayilir ve emsali O(n*log(n)),cunki bu massiv evvel nece defe bolunurse sonra yeniden o bolunduyu qeder birlewir.Demek ilk once verilmiw arrayi 2ye bole bole kicik podmassivlere bolur.Sonra hemin kicik podmassivlerin ededlerini muqayise eliyib,yaddawda yaraddiqimiz bow arraya(let result=[])kicik olani yerlewdiririk.
hemin*/


function mergeSort(qariwiqrededler){
    if(qariwiqrededler.length<=1) {
        return qariwiqrededler //eger arrayda yalniz bir eded varsa o arrayi qaytarsin
    }
    const ortasi= Math.floor(qariwiqrededler.length/2) //her defe massivi iki iki boluruk ,ve eger ikiye tam bolunmurse awaqi yuvarsin
     const solteref= qariwiqrededler.slice(0,ortasi) //massivi slice metodu ile sol ve sag terefe ayiririq
     const sagteref= qariwiqrededler.slice(ortasi) //massivin ortasindan axirina kimi
      
     return merge(mergeSort(solteref),mergeSort(sagteref))//ilk yazdigimiz funskiya(mergeSort)bolmek ucun yazilmiwdi.merge funskiyasi muqaise edecek ve arraylari yeniden birlewdirecek

}

function merge(solteref,sagteref){
    let sortlanmiwededler=[] //yaddawda sortlanmiw ededlercun bir bow massiv yaradiriq,axirda neticeni icine yazdirmaq ucun
    let solIndex=0 //her iki terefde ilk ededlerden bawlayaraq muqaise edecek,yeni 0 indeksden
    let sagIndex=0
     while(solIndex<solteref.length && sagIndex<sagteref.length)  {
        if(solteref[solIndex]<sagteref[sagIndex]){
            sortlanmiwededler.push(solteref[solIndex]); //kicik olan ededi yaddawda saxladigimz arraya elave edirik
            solIndex++;//kecsin diger indekse


        }
        else{
            sortlanmiwededler.push(sagteref[sagIndex]);//kicik ededi arraya elave eledi
            sagIndex++; //artiq kecsin o biri indeksi yoxlamaga
        }
     }
     //while operatoru solIndeksleri ve sagIndeksleri bir bir evvelden axira kmi oxuyub yoxlayaacaq ve muqaise edecek,ve onlar eyni anda hereket etmelidir.

     return sortlanmiwededler.concat(solteref.slice(solIndex)).concat(sagteref.slice(sagIndex));
     //ve en sonda sol ve sag terefden siralanmiw elementleri birlewdirib duzgunluyune emin olur

}


console.log(mergeSort([45,11,12,76,23,56,10,12]))




/* 7ci tapwiriq.Merge sort alqoritmi.
Merge sort birlewdire birlewdire duzmek menasini verir.Bu aLqoritm divide and conquer prinsipi ile iwleyir.Tebii ki sohbet sortlawmadan gedirse,bu alqoritm bizden parametr olaraq sortlanmamiw ededler arrayi alacaq(reqemler).
Merge sort effektiv ve suretli alqoritmlerden biri sayilir ve emsali O(n*log(n)),cunki bu massiv evvel nece defe bolunurse sonra yeniden o bolunduyu qeder birlewir.Demek ilk once verilmiw arrayi 2ye bole bole kicik podmassivlere bolur.Sonra hemin kicik podmassivlerin ededlerini muqayise eliyib,yaddawda yaraddiqimiz bow arraya(let result=[])kicik olani yerlewdiririk.
hemin*/


function mergeSort(qariwiqrededler){
    if(qariwiqrededler.length<=1) {
        return qariwiqrededler //eger arrayda yalniz bir eded varsa o arrayi qaytarsin
    }
    const ortasi= Math.floor(qariwiqrededler.length/2) //her defe massivi iki iki boluruk ,ve eger ikiye tam bolunmurse awaqi yuvarsin
     const solteref= qariwiqrededler.slice(0,ortasi) //massivi slice metodu ile sol ve sag terefe ayiririq
     const sagteref= qariwiqrededler.slice(ortasi) //massivin ortasindan axirina kimi
      
     return merge(mergeSort(solteref),mergeSort(sagteref))//ilk yazdigimiz funskiya(mergeSort)bolmek ucun yazilmiwdi.merge funskiyasi muqaise edecek ve arraylari yeniden birlewdirecek

}

function merge(solteref,sagteref){
    let sortlanmiwededler=[] //yaddawda sortlanmiw ededlercun bir bow massiv yaradiriq,axirda neticeni icine yazdirmaq ucun
    let solIndex=0 //her iki terefde ilk ededlerden bawlayaraq muqaise edecek,yeni 0 indeksden
    let sagIndex=0
     while(solIndex<solteref.length && sagIndex<sagteref.length)  {
        if(solteref[solIndex]<sagteref[sagIndex]){
            sortlanmiwededler.push(solteref[solIndex]); //kicik olan ededi yaddawda saxladigimz arraya elave edirik
            solIndex++;//kecsin diger indekse


        }
        else{
            sortlanmiwededler.push(sagteref[sagIndex]);//kicik ededi arraya elave eledi
            sagIndex++; //artiq kecsin o biri indeksi yoxlamaga
        }
     }
     //while operatoru solIndeksleri ve sagIndeksleri bir bir evvelden axira kmi oxuyub yoxlayaacaq ve muqaise edecek,ve onlar eyni anda hereket etmelidir.

     return sortlanmiwededler.concat(solteref.slice(solIndex)).concat(sagteref.slice(sagIndex));
     //ve en sonda sol ve sag terefden siralanmiw elementleri birlewdirib duzgunluyune emin olur

}


console.log(mergeSort([45,11,12,76,23,56,10,12]))


/*
Ilk önce funksiya yaradmaliyiq ve ona ad qoymaliyiq.Bu funksiya bizden şert aldiği üçün parametrli funksiya olacaq,möhterizede parametri qeyd elemeliyik.Bize her hansi bir söz verilir (string)ve palindrom olub olmadığını yoxlamaqcün, o sözü ilk önce split (built-in metodu) ile herflere bölürük.Sonra herflerin yerini tersine deyişmek ucun reverse metodundan istifade edirik.Ve sonda yeniden tersine cevrilmiş herfleri birleşdirmek ücün join metodundan istifade edirik.Funksiya bize boolean qaytarmalıdı,ya true ve yaxud false.Eger verdiyimz söz onun tersine variantina beraberdise,true;eks halda false.Yalniz iki şertimiz olduğu ücün şert operatorundan istifade edirik: if ve elseden.
*/

function palindromdurMu (str) {
    const tersineSoz = str.split("").reverse().join("") //split-herflere bölürük,reverse-herfleri ceviririk,join-cevrilmiş herfleri birleşdiririk
    if(str===tersineSoz){
        return "Bu soz palindromdur"
    } //eger sertimiz odenirse, 'bu söz palindromdur' yazisi yazilsin
    else {
        return "Bu soz palindrom deyil"
    } //eks halda 'palindrom deyil' yazilsin

}


/* yazdigimiz kodun duzgun işlemesini yoxlamaq ucun hansisa string yazib funksiyani cagiririq ve neticesini ekrana yazdiririq */
console.log(palindromdurMu("madam"))
console.log(palindromdurMu("programmer"))

