// for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
        // console.log('7 thala for reason');
        
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i +'*' + j + ' = ' + i*j);
        
    }
}
let myArray = ["flash", 'batman', 'superman']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}
// console.log(myArray);

// break and continue 
// for (let index = 1; index < 21; index++) {
//     if (index == 7) {
//         console.log(`Detected 7`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }

for (let index = 1; index < 21; index++) {
    if (index == 7) {
        console.log(`Detected 7`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}

