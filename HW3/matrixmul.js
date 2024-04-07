function matrixMul(a,b)
{
    var c=[]
    for(let i=0; i<a.length; i++)
    {
        c[i]=[0,0]
        for(let j=0; j<a[0].length; j++)
        {
            for(let k=0; k<a.length; k++)
            {
                c[i][j]+=a[i][k]*b[k][j]
            }
        }
    }
    return c
}
var a=[[1,2],
       [3,4]]
var b=[[1,2],
       [3,4]]
console.log(matrixMul(a,b))