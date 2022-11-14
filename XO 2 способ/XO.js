let buttons = document.getElementsByClassName("btn");
let label1 =document.getElementById("label1");
let newGame = document.getElementById("newGame");
let crossMove =true;
let area =[];
let count=0;

newGame.onclick= function()
{
    crossMove =true;
    area =[];
    count=0;
    label1.innerHTML="";
    for (let i=0; i<buttons.length;i++)
    buttons[i].innerHTML="&nbsp";
}

for (let i=0; i<buttons.length;i++)
{
    buttons[i].onclick = function()
    {
         if (area[i]!='X' &&area[i]!='O')
        {
            count++;
            if (crossMove)
            {
                buttons[i].style.color="red";
                area[i]='X';
            }
            else
            {
                buttons[i].style.color="blue";
                area[i]='O';
            }
            
            buttons[i].innerHTML=area[i];
      
            if (checkWinner())
            {
                if (crossMove)
                {
                    label1.innerHTML="Выиграли крестики";
                    label1.style.color= "red";
                }
                else
                {
                    label1.innerHTML="Выиграли нолики";
                    label1.style.color= "blue";
                }
            }   else if (count>=9)
            {
                label1.innerHTML="Ничья";
                label1.style.color= "green";
            }       
            crossMove=!crossMove;
        }
    }
}

function checkWinner()
{
    if (area[0]==area[1]&&area[1]==area[2] && area[0]!=undefined) return true;
    if (area[3]==area[4]&&area[4]==area[5] && area[3]!=undefined) return true;
    if (area[6]==area[7]&&area[7]==area[8] && area[6]!=undefined) return true;

    if (area[0]==area[3]&&area[3]==area[6] && area[0]!=undefined) return true;
    if (area[1]==area[4]&&area[4]==area[7] && area[1]!=undefined) return true;
    if (area[2]==area[5]&&area[5]==area[8] && area[2]!=undefined) return true;

    if (area[0]==area[4]&&area[4]==area[8] && area[0]!=undefined) return true;
    if (area[2]==area[4]&&area[4]==area[6] && area[2]!=undefined) return true;

    return false;
}