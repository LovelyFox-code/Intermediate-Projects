function convertToRoman(num) {
    let numbers = [ 1,4,5,9,10,40,50,90,100,400,500,900,1000 ];
    let romanNumb =  ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let result = '';
    let i = numbers.length;
   while(i >= 0){
      if(num / numbers[i] > 0){
        result += romanNumb[i].repeat(Math.floor(num / numbers[i]));
        num = num % numbers[i];
      }
      
    i--;
   }
     return result;
   }
   
  console.log(convertToRoman(2));
               
