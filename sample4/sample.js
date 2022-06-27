let initialValue = 1;
let finalValue = 10;

while (initialValue <= finalValue) {
    if (initialValue = finalValue) {
        console.log("Final value printed");
    } else {
        // This condition is not getting executed why?
        console.log("Current value " + initialValue);
    }
    initialValue++;
}