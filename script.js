//Initialising
var a=0,b=0,c;
var coef=[a,b,c];
var sums=operate(coef);

//Set input values to zero
 function setcoef()
 {
     a=0;b=0,c=0;
     coef=[a,b,c];
     calculate(coef);
 }

//function to perform four operations
function operate(coef)
{
    var a=Number(coef[0]);
    var b=Number(coef[1]);
    var c=String(coef[2]);
    if(c=="+")
    {
    var s=a+b;
    var su=[s];
    return su;
    }
    else if(c=="-")
    {
        var d=a-b;
        var du=[d];
        return du;
    }
    else if(c=="/")
    {
        var di=a/b;
        var di=[di];
        return di;
    }
    else if(c=="*")
    {
        var m=Number(a*b);
        var m=[m];
        return m;
    }
}

//display values and result
function calculate(coef)
{
    document.getElementById("coef").innerHTML=coef;
    sums=operate(coef);
    document.getElementById("ans").innerHTML=sums;
}

//function to define array
function array(a,b,c)
{
    var ar=[a,b,c];
    return ar;
}