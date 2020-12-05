import homeView from './views/homeView.js';
import menuView from './views/menuView.js';
import contactView from './views/contactView.js';

const routes = {
    '/' : homeView(),
    '/menu' : menuView(),
    '/contact' : contactView()
};

export default routes;