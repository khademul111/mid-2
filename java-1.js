function process () {

    var employ = document.getElementById('nameBox').value ;
    var age = document.getElementById('ageBox').value ;
    var monthsalary = document.getElementById('month-salary').value ;
    
    var yearlysalary = (monthsalary * 12); 
    var bonus1 = (monthsalary * .20);
    var bonus2 = (monthsalary * .30);
    var bonus3 = (monthsalary * .40);
    var bonus4 = (monthsalary * .10);
    

    if (30 > age > 25 && yearlysalary >= 100000) {
        p2.innerText = employ + " your bonus is = " + bonus1;
    }
    else if ( 35 > age > 30 && yearlysalary >= 200000) {
        p3.innerText = employ + " your bonus is = " + bonus2;
    }
    
    else if (age > 35 && yearlysalary >=300000){
        p3.innerText = employ + " your bonus is = " + bonus3;
    }

    else {
        p4.innerText = employ + " your bonus is = " + bonus4;
    }






    p1.innerText = `${employ} your yearly salary is : ${yearlysalary}` ; 

    document.getElementById('nameBox').value = '' ; 
    document.getElementById('ageBox').value = '' ; 
    document.getElementById('month-salary').value = '' ; 
    if( total >= 90){
        p5.innerText ="thank you";
    }

}