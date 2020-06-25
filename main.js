myArr = [3, 23, 36, 45, 28]

// forEach() executes a provided function once for each array element; doesn't return; good for saving to database or logging out
function myForEach() {
    for(i = 0; i < myArr.length; i++){
        // console.log(myArr[i]);
    }
}

// map() creates a new array populated with the results of calling a provided function on every element in the calling array; preferable when changing or altering data
function myMap() {
    let newArr = [];
    for(i = 0; i < myArr.length; i++){
        newArr.push(myArr[i]);
    } 
    return newArr;
    
}

// includes() determines whether an array includes a certain value among its entries, returning true or false
function myIncludes() {
    for(i = 0; i < myArr.length; i++){
        if (myArr[i] === 11) {
            return true
        } else {
            return false
        };
    }
}

// some() tests whether at least one element in the array passes the test implemented by the provided function; returns true or false
function mySome() {
    
}

// every()
function myEvery() {
    
}

// find()
function myFind() {
    
} 

// indexOf()
function myIndexOf() {
    
} 

// lastIndexOf()
function myLastIndexOf() {
    
} 

// join()
function myJoin() {
    
}

// concat()
function myConcat() {
    
}

// reduce()
function myReduce() {
    
}

// reverse()
function myReverse() {
    
}