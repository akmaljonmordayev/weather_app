let container = document.querySelector(".container");
let input = document.querySelector(".search-box input");
let search = document.querySelector(".search-box button");
let error404 = document.querySelector(".not-found");
let weatherDetails = document.querySelector(".weather-details");
let weatherBox = document.querySelector(".weather-box");


search.addEventListener("click", () => {    
  if (input.value === "") {
    return;
  }
  const APIKey = "5f1077f561d87b1be334b15838fc01b4";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${APIKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === "404") {
        container.style.height = "400px";
        weatherBox.classList.remove("active");
        weatherDetails.classList.remove("active");
        error404.classList.add("active");
        return;
      }
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".temperature");
      const description = document.querySelector(".description");
      const humidity = document.querySelector(".main-info");
      const wind = document.querySelector(".wind span");









      container.style.height = "555px";
      weatherBox.classList.add("active");
      container.classList.add("active");
      weatherDetails.classList.add("active");
      error404.classList.remove("active");






      switch (data.weather[0].main) {
        case "Rain":
          image.src = "./rain.png";
          break;
        case "Clouds":
          image.src = "./cloud.png";
          break;
        case "Snow":
          image.src = "./snow.png";
          break;
        case "Clear":
          image.src = "./sun.png";
          break;
        case "Mist":
          image.src = "./mist.png";
          break;
        case "Haze":
          image.src = "./mist.png";
          break;
        default:
            image.src = "./cloud.png";
          break;
      }

      description.innerHTML = `${data.weather[0].description}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;
        temperature.innerHTML = `${parseInt(data.wind.gust)}<span>°C</span>`;
        console.log(data);
        
    });
});



