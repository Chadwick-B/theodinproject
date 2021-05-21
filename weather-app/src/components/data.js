function toFahrenheit(kelvin, decimalDigits = 2) {
  return ((kelvin - 273.15) * (9 / 5) + 32).toFixed(decimalDigits);
}

function toCelsius(kelvin, decimalDigits = 2) {
  return (kelvin - 273.15).toFixed(decimalDigits);
}

function flexItem(text, unit = null) {
  const container = document.createElement('div');
  const head = document.createElement('p');
  const display = document.createElement('div');

  container.classList.add('flex-item');
  head.classList.add('data-header', 'center', 'text-shadow');
  display.classList.add('font-medium', 'center', 'text-shadow');
  if (unit !== null) display.classList.add(unit);

  head.textContent = text;

  container.appendChild(head);
  container.appendChild(display);

  return {
    container,
    display,
  };
}

/**
 * @param {number} temp In Kelvin
 * @param {number} feelsLike In Kelvin
 * @param {number} humidity Percentage
 * @param {number} windSpeed In k/m
 * @param {string} unit 'f' or 'c'
 * @returns {Object} Fragment and functions
 */
export function dataComponent(
  temp,
  feelsLike,
  humidity,
  windSpeed,
  unit = 'f'
) {
  if (typeof temp !== 'number') return;
  if (typeof feelsLike !== 'number') return;
  if (typeof unit !== 'string') return;
  if (unit !== 'f' && unit !== 'c') return;

  // Fragment to eventually return
  const fragment = document.createDocumentFragment();

  // Create component elements
  const tempItem = flexItem('Temp', unit);
  const feelsLikeItem = flexItem('Feels Like', unit);
  const humidityItem = flexItem('Humidity');
  const windItem = flexItem('Wind');

  // Set display texts
  if (unit === 'f') {
    tempItem.display.textContent = toFahrenheit(temp);
    feelsLikeItem.display.textContent = toFahrenheit(feelsLike);
  } else {
    tempItem.display.textContent = toCelsius(temp);
    feelsLikeItem.display.textContent = toCelsius(feelsLike);
  }

  humidityItem.display.textContent = `${humidity}%`;
  windItem.display.textContent = `${windSpeed} k/m`;

  // Public function to
  function toggleUnit() {
    const unit = sessionStorage.getItem('unit');
    if (unit === 'f') {
      tempItem.display.textContent = toCelsius(temp);
      tempItem.display.classList.replace('f', 'c');

      feelsLikeItem.display.textContent = toCelsius(feelsLike);
      feelsLikeItem.display.classList.replace('f', 'c');

      sessionStorage.setItem('unit', 'c');
    } else if (unit === 'c') {
      tempItem.display.textContent = toFahrenheit(temp);
      tempItem.display.classList.replace('c', 'f');

      feelsLikeItem.display.textContent = toFahrenheit(feelsLike);
      feelsLikeItem.display.classList.replace('c', 'f');

      sessionStorage.setItem('unit', 'f');
    }
  }

  // Append all elements to fragment
  fragment.appendChild(tempItem.container);
  fragment.appendChild(feelsLikeItem.container);
  fragment.appendChild(humidityItem.container);
  fragment.appendChild(windItem.container);

  return {
    component: fragment,
    toggleUnit,
  };
}
