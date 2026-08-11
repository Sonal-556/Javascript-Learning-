let numbers = [20, 25, 15, 16, 40];
let smallest = numbers[0];

for (let i =1; i <numbers.length; i++){
    if (numbers[i] < smallest){
        smallest = numbers[i];
    }
} 
console.log("Smallest Number is = ", smallest);
