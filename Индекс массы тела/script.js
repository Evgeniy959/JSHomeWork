let label1=document.getElementById("label1");
//let label2=document.getElementById("label2");
//let label4=document.getElementById("label4");
let weight=document.getElementById("weight");
let height=document.getElementById("height");
let button=document.getElementById("button1");
console.log("Запустился");
button.onclick=function()
{
    let w=weight.value;
    let h=height.value;
    let index = w*10000/(h**2);
    label4.innerHTML=index.toFixed(1);
    if(index<=16)
    label5.innerHTML="- Выраженный дефицит массы тела";
    if(index>16 && index<18.5)
    label5.innerHTML="- Недостаточная (дефицит) масса тела";
    if(index>18.5 && index<25)
    label5.innerHTML="- Норма";
    if(index>25 && index<30)
    label5.innerHTML="- Избыточная масса тела (предожирение)";
    if(index>30 && index<35)
    label5.innerHTML="- Ожирение первой степени";
    if(index>35 && index<40)
    label5.innerHTML="- Ожирение второй степени";
    if(index>=40)
    label5.innerHTML="- Ожирение третьей степени (морбидное)";
}
label1.innerHTML="Вес,кг:";
label2.innerHTML="Рост,см:";
//button.value="Рассчитать"
label1.style.fontSize="18px";
label2.style.fontSize="18px";
weight.style.fontSize="16px";
height.style.fontSize="16px";
weight.style.margin="8px";
button.style.fontSize="15px";