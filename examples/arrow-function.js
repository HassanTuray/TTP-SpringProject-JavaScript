/*
    Message is passed in as an argument
    The logic between the squiggly brackets is executed and can refernce the arguments
*/

let array = [1, 2, 3, 4];

const add1 = (num) => {
    return num + 1;
}

let newArray = array.map(add1);