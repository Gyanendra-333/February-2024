function fact(n) {

    // Base Or start condition 
    if (n == 0) {
        return 1;
    }
    // Recusive call
    return n * fact(n - 1);
}
let data = 5;
console.log(fact(data));