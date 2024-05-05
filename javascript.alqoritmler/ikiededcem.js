/* 4CU TAPŞIRIQ

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

 return ededlerinIndeksi //yaratdiqimiz arraya indeksleri yerlewdirenden sonra onlari bize qaytarsin

 }


 //ve sonda kodu yoxlayiriq:
  let verilenEdedler = [2,5,7,3,1,8];
  let netice = 6;
  console.log(indeksleriTap(verilenEdedler,netice))

  //output olaraq bize [1,4] qaytarir,cunki indeksi bir olan(5) ve indeksi dord olan(1) ededlerin cemi 6ya beraberdir.
 


