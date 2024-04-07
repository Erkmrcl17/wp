function isPrime(n){
    let x=true
    for(let i=2; i<n; i++)
    {
        if(n%i==0)
        {
            x=false
            break
        }
    }
    if(x)
    {
        console.log("it's prime")
    }
    else
    {
        console.log("itsn't prime")
    }
}
isPrime(4)
isPrime(7)