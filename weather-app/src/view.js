import './css/view.css';
import { bgComponent } from './components/bg.js';
import { dataComponent } from './components/data.js';
import { toggleComponent } from './components/toggle.js';

function unpackData(json) {
  return {
    city: json.name,
    status: json.weather[0].main,
    description: json.weather[0].description,
    temperature: json.main.temp,
    feelsLike: json.main.feels_like,
    humidity: json.main.humidity,
    windSpeed: json.wind.speed,
  };
}

export function View(json) {
  if (json.cod === '404') {
    return null;
  }

  const data = unpackData(json);

  // Grab settings from storage
  const unitDisplay = sessionStorage.getItem('unit') || 'f';
  sessionStorage.setItem('unit', unitDisplay);

  function render() {
    // Create fragment to render at the end
    const fragment = document.createDocumentFragment();

    // Create/search necessary elements
    const nav = document.querySelector('.nav-bar');
    const display = document.getElementById('display');
    const container = document.createElement('div');
    const cityName = document.createElement('p');
    const description = document.createElement('p');

    container.classList.add('flex-container');
    cityName.classList.add('city', 'text-shadow');
    description.classList.add('description', 'data-header', 'text-shadow');

    cityName.textContent = data.city;
    description.textContent = data.description;

    // Create components
    document.body.style.backgroundImage = bgComponent(data.status);
    const temps = dataComponent(
      data.temperature,
      data.feelsLike,
      data.humidity,
      data.windSpeed,
      unitDisplay
    );
    const toggleTemps = toggleComponent(temps.toggleUnit, unitDisplay);

    // Append all components/elements to the fragment
    container.appendChild(temps.component);
    fragment.appendChild(cityName);
    fragment.appendChild(description);
    fragment.appendChild(container);

    // DOM re-draws
    nav.appendChild(toggleTemps.component);
    display.appendChild(fragment);
  }

  return { render };
}
