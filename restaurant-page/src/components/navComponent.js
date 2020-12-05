const navComponent = () => {
    const component = document.createElement('nav');
    component.classList.add('nav');
    component.innerHTML = `
        <ul class="nav-bar center">
            <li class="nav-item"><a href="#" data-url="/" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#" data-url="/menu" class="nav-link">Menu</a></li>
            <li class="nav-item"><a href="#" data-url="/contact" class="nav-link">Contact</a></li>
        </ul>
    `

    return component
}

export default navComponent;