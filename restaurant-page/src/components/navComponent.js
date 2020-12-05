const navComponent = () => {
    const component = document.createElement('nav');
    component.classList.add('nav');
    component.innerHTML = `
        <ul class="nav-bar center">
            <li class="nav-item"><a href="#" data-url="/" class="nav-link nav-link-active">Home</a></li>
            <li class="nav-item"><a href="#" data-url="/menu" class="nav-link">Menu</a></li>
            <li class="nav-item"><a href="#" data-url="/contact" class="nav-link">Contact</a></li>
        </ul>
    `

    component.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.tagName === 'A') {
            const links = component.querySelectorAll('a');
            for (const link of links) {
                link.classList.remove('nav-link-active');
            }
            e.target.classList.add('nav-link-active');
        }
    }, false);

    return component
}

export default navComponent;