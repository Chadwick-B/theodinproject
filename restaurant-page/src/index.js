import navComponent from './components/navComponent.js';
import routes from './router.js';

window.onload = () => {
    const root = document.getElementById('root');
    const nav = navComponent();

    const links = nav.querySelectorAll('a');
    for (const link of links) {
        link.addEventListener('click', () => renderView(link.getAttribute('data-url')), false);
    }

    const renderView = (pathname) => {
        const content = routes[pathname];
        root.innerHTML = '';
        root.appendChild(nav);
        root.appendChild(content);
    }
    renderView('/');
}