function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");


    console.log(response.data);


 cityElement.innerHTML = response.data.city;
 descriptionElement.innerHTML = response.data.condition.description
 humidityElement.innerHTML = `${response.data.temperature.humidity}%;
temperatureElement.innerHTML = Math.round(temperature);
}


function searchCity(city) {
let apiKey = "3c00030c6541t3abb3aocab358160fcf";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(refreshWeather);
}





function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");


  

    
searchCity(searchInput.value);


}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Kericho");