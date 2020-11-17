import container from './containerModule.js';

const display = (() => {
    const setCellText = (text, position) => {
        const cells = container.get().querySelectorAll('td');
        if (position < 0 || position >= cells.length) {
            return;
        }

        cells[position].textContent = text;
    }

    const setResult = (result) => {
        const resultContainer = document.getElementById('result');
        resultContainer.style.display = 'block'

        const txtDisplay = document.createElement('h2');
        txtDisplay.textContent = result;
        resultContainer.appendChild(txtDisplay);

        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Reset';
        resetBtn.classList.add('btn');
        resetBtn.addEventListener('click', () => location.reload(), false);
        resultContainer.appendChild(resetBtn);
    }
    return { setCellText, setResult };
})();

export default display;