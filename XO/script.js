let container = document.querySelector('.container');
    for (let i = 0; i < 9; i++) {
        let element = document.createElement('button');
        element.className = "btn";
        element.innerHTML = "&nbsp";
        container.appendChild(element);
        if(i==2||i==5)
        container.appendChild(document.createElement('br'));       
    }    
let nextMove =true;
let count=0;
newGame.onclick= function()
{
    nextMove =true;
    count=0;
    label1.innerHTML="";
    let btns =document.querySelectorAll('.btn');
    for (const btn of btns) 
    {
        btn.innerHTML = "&nbsp"; 
    }       
}

document.querySelector('.container').addEventListener('click', function() {
    if (event.target.className == 'btn') 
    {
        if (event.target.innerHTML!='X' &&event.target.innerHTML!='O')
        {
            count++;
            if (nextMove)
            {
                event.target.innerHTML='X';
                event.target.style.color="red";
            }
            else
            {
                event.target.innerHTML='O';
                event.target.style.color="blue";
            }
            if (checkWinner())
            {
                if (nextMove)
                {
                    label1.innerHTML="Выиграли крестики";
                    label1.style.color= "red";
                }
                else
                {
                    label1.innerHTML="Выиграли нолики";
                    label1.style.color= "blue";
                }
            }
            else if (count>=9)
            {
                label1.innerHTML="Ничья";
                label1.style.color= "green";
            }       
        }                       
    }
    nextMove=!nextMove;
function checkWinner()
{
    let area = document.querySelectorAll('.btn');
    for (let i = 0; i < area.length; i++) 
    {
        if ((area[0].innerHTML==area[1].innerHTML&&area[1].innerHTML==area[2].innerHTML&&(area[0].innerHTML=='X'||area[0].innerHTML=='O'))
        ||(area[3].innerHTML==area[4].innerHTML&&area[4].innerHTML==area[5].innerHTML&&(area[3].innerHTML=='X'||area[3].innerHTML=='O'))
        ||(area[6].innerHTML==area[7].innerHTML&&area[7].innerHTML==area[8].innerHTML&&(area[6].innerHTML=='X'||area[6].innerHTML=='O'))
        ||(area[0].innerHTML==area[3].innerHTML&&area[3].innerHTML==area[6].innerHTML &&(area[0].innerHTML=='X'||area[0].innerHTML=='O'))
        ||(area[1].innerHTML==area[4].innerHTML&&area[4].innerHTML==area[7].innerHTML &&(area[1].innerHTML=='X'||area[1].innerHTML=='O'))
        ||(area[2].innerHTML==area[5].innerHTML&&area[5].innerHTML==area[8].innerHTML &&(area[2].innerHTML=='X'||area[2].innerHTML=='O'))
        ||(area[0].innerHTML==area[4].innerHTML&&area[4].innerHTML==area[8].innerHTML &&(area[0].innerHTML=='X'||area[0].innerHTML=='O'))
        ||(area[2].innerHTML==area[4].innerHTML&&area[4].innerHTML==area[6].innerHTML &&(area[2].innerHTML=='X'||area[2].innerHTML=='O'))) return true;        
        else return false;       
    }    
}
})



