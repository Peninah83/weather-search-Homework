function searchCity(city) {
let apiKey = "3c00030c6541t3abb3aocab358160fcf";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&key={key}`;
console.log(apiURL);
}





function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
let cityElement = document.querySelector("#city");
cityElement.innerHTML = searchInput.value;
searchCity(searchInput.value);



}




let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);