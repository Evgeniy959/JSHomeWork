NewGame();
let boxes;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function NewGame()
{
    boxCounter = parseInt(prompt('Введите количество Блоков: '));
    time = parseInt(prompt('Введите количество минут игры: '))*60;
    let container = document.querySelector('.container');
    for (let i = 0; i < boxCounter; i++) {
        let element = document.createElement('div');
        element.innerText = i+1;
        element.className = "box";
        element.style.left = random(0, window.innerWidth-100) + "px";
        element.style.top = random(0, window.innerHeight-100) + "px";
        element.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
        container.appendChild(element);
    }
    CountTime(time);
}

setInterval(() => {
    boxes = document.querySelectorAll('.box');    
    for (const box of boxes) 
    {
        let  position = random(1,5);
        switch (position) {
            case 1:
                box.style.top=`${random(0,window.innerHeight-100)}px`;
                break;
            case 2:
                box.style.left=`${random(0,window.innerWidth-100)}px`;
                break;
            case 3:
                box.style.right=`${random(0,window.innerWidth-100)}px`;
                break;
            case 4:
                box.style.bottom=`${random(0,window.innerHeight-100)}px`;
                break;
            case 5:
                box.style.top=`${random(0,window.innerHeight-100)}px`;
                box.style.left=`${random(0,window.innerWidth-100)}px`;
                break;            
            default:
                break;
        }                      
    }
}, 400);
document.querySelector('.container').addEventListener('click', function() {
    if (event.target.className == 'box') 
    {        
        event.target.remove();
        boxCounter--;
        if(boxCounter == 0)
        {                        
            alert('Поздравляем вы победили!');
            let game = confirm('Продолжить?');            
            if(game)            
                NewGame();
            else
            {
                alert('До свидания!');        
                clearInterval(timeId);
            } 
        }        
    }
})
let timeId=setInterval(() => {
    time--;
    CountTime(time);
    if (time <= 0) {
        clearInterval(setInterval);
        for (const box of boxes)
        box.remove();
        alert('Вы проиграли!');
        let game = confirm('Продолжить?');
        if(game)
            NewGame();
        else
        {
            alert('До свидания!');        
            clearInterval(timeId);
        } 
    }
}, 1000);
function CountTime(time)
{
    document.getElementById('timer').innerHTML = `Таймер: ${Math.floor(time/60)} минут 
    ${Math.round((time/60 - Math.floor(time/60))*60)} секунд`;
}


