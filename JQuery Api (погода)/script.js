//https://api.openweathermap.org/data/2.5/forecast/&appid={API key}
//2a5e17dce8914cc1122f1e89e7fd69af

//https://api.openweathermap.org/data/2.5/forecast?q=Baku&appid=2a5e17dce8914cc1122f1e89e7fd69af

let url = 'https://api.openweathermap.org/data/2.5/forecast';
let key = '2a5e17dce8914cc1122f1e89e7fd69af';

$('#myForm').submit(async function(){
   event.preventDefault();
   let cityName = $("#cityName").val();   
   $("#myForm").trigger("reset");
   
   console.log(cityName);

   let data = await $.get(`${url}?q=${cityName}&appid=${key}&units=metric`);
   console.log(data)
   console.log(new Date)

   if (data) {
    $('h3').text(data.city.name);
    $('#nightTemp').text('night: ☪ ' + Math.ceil(data.list[0].main.temp) + ' ℃');
    $('#dayTemp').text('day: ✴ ' + Math.ceil(data.list[5].main.temp) + ' ℃');
    
    $('#humidty').text('Humidity : ' + data.list[0].main.humidity);
    $('strong').text(`Date : ${data.list[0].dt_txt.split(' ')[0]}`);
    $('#speed').text('Speed : ' + data.list[0].wind.speed + ' km/h');
    $('#description').text(data.list[0].weather[0].description);
    $('img').attr('src',`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);

     let weekDate = []; // 7 разных дат
     
    for (let i = 1; i < 7; i++) { 
           let followingDay = new Date(Date.now() + (86400000 *i));
           console.log(followingDay.toISOString().slice(0,10));
           weekDate.push(followingDay.toISOString().slice(0,10));
    }
    
    let dayArr = [];
    let nightArr = [];
    let count = 1;
    for (const item of data.list) {
       // console.log(item.dt_txt.slice(0,10));
       
       if (weekDate.includes(item.dt_txt.slice(0,10))&&item.dt_txt.slice(11,19)=="00:00:00") {
    
        console.log(item.dt_txt.slice(11,19));
        count++;
        nightArr.push(item);
       }
    }
    for (const item of data.list) {
      // console.log(item.dt_txt.slice(0,10));
      
      if (weekDate.includes(item.dt_txt.slice(0,10))&&item.dt_txt.slice(11,19)=="15:00:00") {
   
       console.log(item.dt_txt.slice(11,19));
       count++;
       dayArr.push(item);
      }
   }
    console.log(count);
    $('.body').text(' ')
    for (const night of nightArr) {
        $('.body').append(`
        <div class="card">
  <img src="http://openweathermap.org/img/wn/${night.weather[0].icon}.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${night.dt_txt.slice(0,10)}</h5>
    <h6 class="card-text">${night.weather[0].main}  :  ${night.weather[0].description}</h6>
    <p class="card-text">night: ☪ ${Math.ceil(night.main.temp)} ℃ </p>     
  </div>  
</div>`);
    }
    $('p:first').append(`<br> day: ✴ ${Math.ceil(dayArr[0].main.temp)} ℃`)
    $('p:eq(1)').append(`<br> day: ✴ ${Math.ceil(dayArr[1].main.temp)} ℃`)
    $('p:eq(2)').append(`<br> day: ✴ ${Math.ceil(dayArr[2].main.temp)} ℃`)
    $('p:eq(3)').append(`<br> day: ✴ ${Math.ceil(dayArr[3].main.temp)} ℃`)
    $('p:last').append(`<br> day: ✴ ${Math.ceil(dayArr[4].main.temp)} ℃`)    
  }  
});
