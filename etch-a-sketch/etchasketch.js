const grid = document.getElementById('grid');
let color = document.getElementById('sketchcolor');
let mode = document.getElementById('sketchmode');
let size = 20;
const modes = {
    NORMAL: 'normal',
    GRAYSCALE: 'grayscale',
    RAINBOW: 'rainbow',
};

createGrid(size);
mode.addEventListener("change", reset);

function resize() {
    size = prompt("Enter a grid size ranging from 1-100");
    if (size > 100) { size = 100; }
    if (size < 1) { size = 1; }
    reset();
}

function reset() {
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }
    createGrid(size);
}

function createGrid(gridSize) {
    const width = grid.clientWidth / gridSize;
    for (let i=0; i<Math.pow(gridSize, 2); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flex = "1 1 " + (width - 2) + "px"
        square.addEventListener("mouseover", e => { colorShift(e); });
        grid.appendChild(square);
    }
}

function colorShift(e) {
    switch (mode.value) {
        case modes.NORMAL:
            e.target.style.backgroundColor = color.value;
            break;
        case modes.GRAYSCALE:
            const str = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
            e.target.style.backgroundColor = darkenRGB(str, 0.1);
            break;
        case modes.RAINBOW:
            e.target.style.backgroundColor = `rgb(
                ${randomColorValue()},
                ${randomColorValue()},
                ${randomColorValue()}
            )`;
            break;
    }
}

function darkenRGB(rgbStr, amount) {
    let rgb = rgbStr.replace(/[^0-9 ]/g, "").split(' ');
    const darkenAmount = Math.floor(255 * amount);

    for (let i=0; i<rgb.length; i++) {
        rgb[i] = parseInt(rgb[i] - darkenAmount);
    }
    return `rgb(
        ${rgb[0]},
        ${rgb[1]},
        ${rgb[2]}
    )`;
}

function randomColorValue() {
    return Math.floor(Math.random() * 255);
}