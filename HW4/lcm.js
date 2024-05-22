function gcd(a, b) 
{
    let  d = 2, e = 1;

    if(a == 1 || b == 1)e = 1;
    else if(a >= d && b >= d)
    {
        while(a >= d && b >= d)
        {
            while(a % d == 0 && b % d ==0)
            {
                e = e * d;
                a /= d;
                b /= d;
            }
            d++;
        }
    }
    return e;
}

function lcm(a,b)
{
    return (a * b) / gcd(a, b);
}

console.log(lcm(12,18));