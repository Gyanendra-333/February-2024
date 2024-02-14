function fact(n) {

    // Base Or start condition 
    if (n == 0) {
        return 1; // return 5 4 3 2 1
    }
    // Recusive call
    return n * fact(n - 1); // return 5*4*3*2*1 => 120
}
let data = 5;
console.log(fact(data));