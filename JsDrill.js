// Max and Min using while loop

const numbers = [1, 2, 3, 4, 5, 6];

function max(numbers) {
    let i = 0;
    let biggest = numbers[0];
    while (i < numbers.length) {
        if (numbers[i] > biggest) {
            biggest = numbers[i];
        }
        i++;
    }
    return biggest;
}

function min(numbers) {
    let i = 0;
    let smallest = numbers[0];
    while (i < numbers.length) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
        i++;
    }
    return smallest;
}

console.log(max(numbers));
console.log(min(numbers));

// For Each to compute average

const numbers2 = [1,2,3,4,5,100];

function average (numbers2) {
let sum = 0;
numbers2.forEach(element => {
    sum += element;
});
return sum / numbers2.length;
}
console.log(average(numbers2));



