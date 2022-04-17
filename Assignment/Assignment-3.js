function tip(bill){
    if(bill>=50 && bill<=300){
        return bill * 0.15;
    }
     else{
         return bill * 0.10;
     }
     
}
 let bill =275;
 let cal = tip(bill);
 console.log(cal);
 let total= cal + bill;
  console.log(total);
  console.log(`The bill was Rs. ${bill}, the tip was Rs. ${cal} and the total is Rs. ${total}`)
