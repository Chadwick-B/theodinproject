import './css/reset.css';
import './css/style.css';
import './css/nav.css';
import { View } from './view.js';

async function queryWeatherData(query, coords = false) {
  try {
    // Key only exposed in frontend for practicing purposes
    const key = 'e7aa7a6609b8b2795100d597605b657f';
    let dataURL = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`;
    if (coords) {
      dataURL = `http://api.openweathermap.org/data/2.5/weather?lat=${query.latitude}&lon=${query.longitude}&appid=${key}`;
    }

    // Query data, convert to JSON
    const data = await fetch(dataURL, { mode: 'cors' });
    const dataJSON = await data.json();

    // Remove loading spinner
    document.getElementById('spinner').remove();

    // Render based on result
    const view = View(dataJSON);
    if (view) {
      view.render();
    } else {
      const errorContainer = document.createElement('div');

      errorContainer.style.display = 'flex';
      errorContainer.style.justifyContent = 'center';
      errorContainer.textContent = dataJSON.message;

      document.body.appendChild(errorContainer);
    }
  } catch (err) {
    console.error(err);
  }
}

window.onload = () => {
  // Query based on search parameters, else query from geolocation
  const url = new URL(window.location.href);
  if (url.searchParams.has('q') && url.searchParams.get('q').trim() !== '') {
    const query = url.searchParams.get('q');
    queryWeatherData(query);
  } else {
    navigator.geolocation.getCurrentPosition((pos) => {
      queryWeatherData(pos.coords, true);
    });
  }

  // Redirect to homepage
  const logo = document.querySelector('path');
  logo.onclick = function () {
    document.location.href = '/';
  };
};
