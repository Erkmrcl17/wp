function sumPrime(n){
    var total=0
    for(let i=2; i<n; i++)
    {
        var x=true
        for(let j=2;j<i;j++)
        {
            if(i%j==0)
            {
                x=false
                break
            }
        }
        if(x)
        {
            total+=i
        }
    }
    console.log(total)
}
sumPrime(6)