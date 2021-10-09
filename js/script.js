
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER()
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function start2(){
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER()
  // Appel de la fonction fetchTodayForecast
  
  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      for(let i=0; i<4; i++){
        // On récupère l'information principal
        let main = data.list[i].weather[0].main;
        let description = data.list[i].weather[0].description;
        let temp = data.list[i].temp.day;
        let icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        // Modifier le DOM
        document.getElementsByClassName('card-title')[i].innerHTML = main;
        document.getElementsByClassName('1')[i].innerHTML = description;
        document.getElementsByClassName('2')[i].innerHTML = icon;
        document.getElementsByClassName('3')[i].innerHTML = `${temp}°C`;
      } 
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function reload(){
  const apiWeather = new API_WEATHER(document.getElementById("city-input").value)
  
  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`; 
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function reload_2(){
  const apiWeather = new API_WEATHER(document.getElementById('city-input').value);
  
  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      for(let i=0; i<4; i++){
        // On récupère l'information principal
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        // Modifier le DOM
        document.getElementsByClassName('card-title')[i].innerHTML = main;
        document.getElementsByClassName('1')[i].innerHTML = description;
        document.getElementsByClassName('2')[i].innerHTML = icon;
        document.getElementsByClassName('3')[i].innerHTML = `${temp}°C`;
      }
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

