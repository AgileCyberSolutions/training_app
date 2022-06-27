function add() {
    let a = document.getElementById("noA").value;
    let b = document.getElementById("noB").value;
    document.getElementById("result").innerText = 'Sum is ' + (a + b);
}