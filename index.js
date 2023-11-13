/*function nFactorielle(n){
    debugger;
    if(n === 1  || n === 0) return 1

    if( n < 0 ) return "error"

    return n * nFactorielle( n - 1 );
}

console.log(nFactorielle(7));
*/


let n = 7;

function factorial(n) {

    let fac = 1;

    if( n === 0)
    return 1;

    for(let i = 2 ; i <= n; i++)
    
    fac = fac * i ;

    return fac ;
}

console.log(factorial(n))
