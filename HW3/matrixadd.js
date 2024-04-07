function matrixAdd(a,b)
{
    var c=[]
    for(let i=0; i<a.length; i++)
    {
        c[i]=[]
        for(let j=0; j<a[i].length;j++)
        {
            c[i][j]=a[i][j]+b[i][j]
        }
    }
    return c
}
var a=[[1,2],
       [3,4]]
var b=[[1,2],
       [3,4]]
console.log(matrixAdd(a,b))