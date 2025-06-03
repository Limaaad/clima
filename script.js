// Variáveis e seleção de elementos
const apiKey = "645fcb87f1d948c281a028fb48a3aaa2";
const apiCountryURL ="https://flagcdn.com/16x12";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity");
const windElement = document.querySelector("#wind");

//Funções
const showWeatherData = (city) => {
    console.log(city);
};

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    console.log(city);
});
