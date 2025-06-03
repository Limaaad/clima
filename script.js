// Variáveis e seleção de elementos
const apiKey = "645fcb87f1d948c281a028fb48a3aaa2";
const apiCountryURL ="https://flagcdn.com/16x12";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

//Funções

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    console.log(city);
});
