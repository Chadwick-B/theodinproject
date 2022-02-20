import './index.css';
import './style.css';
import './reset.css';

const ValidationModule = (() => {
  const passwordField = document.getElementById('pw');
  const confirmField = document.getElementById('confirm');
  const errClass = 'Error';

  const addError = () => {
    passwordField.classList.add(errClass);
    confirmField.classList.add(errClass);
  };

  const removeError = () => {
    passwordField.classList.remove(errClass);
    confirmField.classList.remove(errClass);
  };

  const matchValues = (e) => {
    if (e.target.matches('#pw') && confirmField.value === '') {
      if (passwordField.value === confirmField.value) removeError();
      return;
    }

    passwordField.value !== confirmField.value ? addError() : removeError();
  };

  passwordField.addEventListener('input', matchValues);
  confirmField.addEventListener('input', matchValues);
})();
