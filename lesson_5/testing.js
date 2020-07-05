
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];


let arr3 = arr.map(subarray => {
    return subarray.slice().sort((a, b) => {
        if (typeof subarray[0] === 'number') {
            return b - a;
        } 
        
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });

    });
    
    console.log(arr);
    console.log(arr3);