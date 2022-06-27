function eatSweets(no) {
    // create a object from previous object
    let sweetsTaken = sweets;
    //set total of remainingSweets to no
    sweetsTaken.total = no;

    if (sweets.total >= no) {
        // subtract 
        sweets.total -= sweetsTaken.total;
        console.log('You ate ' + no + ' sweets');
        console.log('Remainng sweets ' + sweets.total);
    } else {
        console.log('no sweets left')
    }

}