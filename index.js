function myEach(collection, callback) {
    let arr = [];
    if (collection.length) {
        arr = [...collection]
    } else {
        arr = Object.values(collection);
    }
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    let arr = [];
    if (collection.length) {
        arr = [...collection]
    } else {
        arr = Object.values(collection);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
}

function myReduce(collection, callback, acc) {
    let value = 0;
    let arr = [];
    if (collection.length) {
        arr = [...collection]
    } else {
        arr = Object.values(collection);
    }
    if (acc) {
        value += acc;
    } else {
        value += arr.shift();
    }
    for (let i = 0; i < arr.length; i++) {
        value = callback(value, arr[i], collection)
    }
    return value;
}

function myFind(collection, predicate) {
    let arr = []
    if (collection.length) {
        arr = [...collection]
    } else {
        arr = Object.values(collection);
    }
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            return arr[i]
        }
    }
}

function myFilter(collection, predicate) {
    let arr = []
    let arr1 = []
    if (collection.length) {
        arr = [...collection]
    } else {
        arr = Object.values(collection);
    }
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            arr1.push(arr[i])
        }
    }
    return arr1
}

function mySize(collection) {
    let arr = [];
    if (collection.length) {
        return collection.length
    } else {
        return Object.values(collection).length
    }
}

function myFirst(array, n = 1) {
    let arr = [];
    if (n === 1) {
        return array[0]
    } else {
        for (let i = 0; i < n; i++) {
            arr.push(array[i])
        }
        return arr
    }
}

function myLast(array, n = 1) {
    let arr = [];
    if (n === 1) {
        return array[array.length - 1]
    } else {
        for (let i = 0; i < n; i++) {
            arr.push(array[array.length - n + i]);
        }
        return arr
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}