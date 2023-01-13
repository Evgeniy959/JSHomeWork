let canva=document.getElementById("canva");
let holst = canva.getContext("2d");
let btn= document.getElementById("btn");

let x=0, y=0,x1,y1;
let l=5;
let acsiom ="F-F-F-F";
//let acsiom ="-F";
//let rule ="FF-F-F-F-FF";
//let rule ="FF-F--F-F";
//let rule ="FF-F+F-F-FF";
//let rule ="FF-F-F-F-F-F+F";
//let rule ="F+F-F-F+F";
let rule ="F+FF-FF-F-F+F+FF-F-F+F+FF+FF-F";
//let n=4;
//let n=2;
let n=1;
let angle=0;
let ang=90;
let result =acsiom;

function getResult()
{
    result =acsiom;
    for (let i=0; i<n;i++)
    {
        result = result.replace(/F/g, rule);
        //alert(result);
    }
}

document.onkeydown= function(e)
{
   if (e.key=='a' && n>0)
    n--;
   if (e.key=='d' && n<7 )
    n++;
    getResult();
console.log(n);
    Draw();
}
function RotateLine(ang)
{
    angle+=ang;
    x1 = Math.cos( Math.PI/180.0*angle)*l+x;
    y1 = Math.sin( Math.PI/180.0*angle)*l+y;
}

btn.onclick =  Draw;
function DrawLine ()
{
    holst.strokeStyle="red";
    holst.beginPath();
    holst.moveTo(x,y);
    holst.lineTo(x1,y1);
    holst.closePath();
    holst.stroke();
    x=x1;
    y=y1;
}
 function Draw ()
{
    holst.fillStyle="white";
    holst.fillRect(0,0,900,900);
    x=0;
    y=0;
    angle=0;
    getResult();
    for (let i=0; i<result.length;i++)
    {
        
        if (result[i]=='F')
        {
            RotateLine(0);
            DrawLine();
        }
        if (result[i]=='f')
        {
            RotateLine(0);
            x=x1;
            y=y1;
        }
        if (result[i]=='-')
        {
            RotateLine(ang);
            DrawLine();
        }
        if (result[i]=='+')
        {
            RotateLine(270);
            DrawLine();
        }
        
    }
}