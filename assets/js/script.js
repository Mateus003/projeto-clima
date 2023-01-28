document.querySelector('.busca').addEventListener('submit', async(event)=>{
    event.preventDefault();
    let input = document.querySelector('#searchInput').value;
    if (input != ''){
        showWarning('Carregando...');
        let url = `https://api.openweathermap.org/data/2.5/weather?q={${encodeURI(input)}}&appid={8a5507d00c0b41d4198aa8f7c5528a12&units=metric&lang=pt-br}`;
        let results = await fetch(url)
        let json = await results.json()

        console.log(json)
    }else{
        showWarning('Por favor, digite algo.')
    }
    
})

function showWarning(msg,){
    document.querySelector('.aviso').innerHTML = msg;
}