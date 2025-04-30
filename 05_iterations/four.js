const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    console.log(`Key: ${key}, Value: ${myObject[key]}`);

    // Alternative way to access the value
    // console.log(key);
    // console.log(myObject[key]);
    

    // Output:
    // Key: js, Value: JavaScript
    // Key: cpp, Value: C++
    // Key: rb, Value: Ruby
    // Key: swift, Value: Swift by Apple
    // Note: The order of keys is not guaranteed in JavaScript objects.
    // To ensure a specific order, consider using an array of objects or a Map.
}