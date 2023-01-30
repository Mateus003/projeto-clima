document.querySelector('.busca').addEventListener('submit', async(event)=>{
    event.preventDefault();
    let input = document.querySelector('#searchInput').value;
    if (input != ''){
        clearInfo();
        showWarning('Carregando...');
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=8a5507d00c0b41d4198aa8f7c5528a12&units=metric&lang=pt-br`;
        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200){
           showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
           }
            );
        }else{
            clearInfo();
            showWarning('Esta localização não foi encontrada');
            
        }
    }else{
        clearInfo();
        showWarning('Por favor, digite um nome de uma cidade');
        
    }
    
})

function showInfo(json){
    showWarning('');
    document.querySelector('.resultado').style.display = 'block';
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;

    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}<span>km/h</span>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`  ;
    
    document.querySelector('.temp img').src = `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`;
    document.querySelector('.busca').addEventListener('submit', async(event)=>{
        event.preventDefault();
        let input = document.querySelector('#searchInput').value;
        if (input != ''){
            clearInfo();
            showWarning('Carregando...');
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=8a5507d00c0b41d4198aa8f7c5528a12&units=metric&lang=pt-br`;
            let results = await fetch(url);
            let json = await results.json();
    
            if(json.cod === 200){
               showInfo({
                    name: json.name,
                    country: json.sys.country,
                    temp: json.main.temp,
                    tempIcon: json.weather[0].icon,
                    windSpeed: json.wind.speed,
                    windAngle: json.wind.deg
               }
                );
            }else{
                clearInfo()
                showWarning('Esta localização não foi encontrada');
            }
        }else{
            clearInfo()
            showWarning('Por favor, digite um nome de uma cidade');   
        }
    });
    
function showInfo(json){
    showWarning('');
    document.querySelector('.resultado').style.display = 'block';
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}<span>km/h</span>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;

    let icons = document.querySelector('.temp img').src = `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`;
    if(icons =='http://openweathermap.org/img/wn/01d@2x.png'){
        clearAndAddBackgroundImage("clear-sky-day");

    }
    else if(icons === 'http://openweathermap.org/img/wn/02d@2x.png'){ 
        clearAndAddBackgroundImage("few-clouds-day");

    }
    else if(icons === 'http://openweathermap.org/img/wn/02n@2x.png'){
        clearAndAddBackgroundImage("few-clouds-night");
    }

    else if(icons === 'http://openweathermap.org/img/wn/03d@2x.png'){
        clearAndAddBackgroundImage("scattered-clouds-day");

    }
    else if(icons === 'http://openweathermap.org/img/wn/04d@2x.png'){
        clearAndAddBackgroundImage("broken-clouds-day");
    }
    else if(icons === 'http://openweathermap.org/img/wn/09d@2x.png'){
        clearAndAddBackgroundImage("shower-rain-day");

    }
    else if(icons ==='http://openweathermap.org/img/wn/11d@2x.png' || icons ==='http://openweathermap.org/img/wn/11n@2x.png'){
        clearAndAddBackgroundImage("thunderstorm");

    }
    else if(icons === 'http://openweathermap.org/img/wn/13d@2x.png' || icons ==='http://openweathermap.org/img/wn/13n@2x.png'){
        clearAndAddBackgroundImage("snow");

    }
    else if(icons === 'http://openweathermap.org/img/wn/50d@2x.png' || icons ==='http://openweathermap.org/img/wn/50n@2x.png'){
        clearAndAddBackgroundImage("mist");
    }
        
}
    
    
function clearInfo(){
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}

function showWarning(msg,){
    document.querySelector('.aviso').innerHTML = msg;
}
}

function clearAndAddBackgroundImage(image){
    let body = document.querySelector("body");
    let classesToRemove = [
        "few-clouds-night",
        "scattered-clouds-day",
        "broken-clouds-day",
        "shower-rain-day",
        "thunderstorm",
        "snow",
        "mist",
        "few-clouds-day",
        "shower-rain-day",
        "shower-rain-night"
    ];

    if (!body.classList.contains(image)) {
        body.classList.remove(...classesToRemove);
        body.classList.add(image);
    }
}
    
function clearInfo(){
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}

function showWarning(msg,){
    document.querySelector('.aviso').innerHTML = msg;
}