import clouds from '../assets/clouds.jpg';
import rain from '../assets/rain.jpg';
import clear from '../assets/clear.jpg';

export function bgComponent(status) {
  switch (status) {
    case 'Clouds':
      return `url(${clouds})`;
    case 'Rain':
      return `url(${rain})`;
    case 'Clear':
      return `url(${clear})`;
  }
}
