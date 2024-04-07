function vectorAdd(a,b)
{
    var x=[]
    for(let i=0; i<a.length; i++)
    {
        x[i]=a[i]+b[i]
    }
    return x
}
var a=[2,1]
var b=[2,2]
console.log(vectorAdd(a,b))