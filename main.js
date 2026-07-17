const apiKey = "YOUR_API_KEY";

function getWeather(){
    let city = document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather").innerHTML =
        `${data.name}: ${data.main.temp}°C`;
    })
    .catch(() => {
        document.getElementById("weather").innerHTML =
        "City not found!";
    });
}
