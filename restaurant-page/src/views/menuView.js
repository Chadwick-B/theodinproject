import MenuItem from '../factories/MenuItemFactory.js';

const menuView = () => {
    const view = document.createElement('div');
    view.classList.add('content', 'menu-content');

    const menuItems = [
        MenuItem('Burger', 'the classic', '29.99', 'burger.jpg'),
        MenuItem('Taco', 'do not look at the price please just buy it', '349.95', 'taco.jpg'),
        MenuItem('Bottled Water', 'nothing in life is free buddy', '3.99', 'bottled-water.jpg'),
    ];

    for (const item of menuItems) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item', 'text-area');

        const name = item.getName();
        const imageSRC = item.getImageSRC();
        const description = item.getDescription();
        const price = item.getPrice();

        itemDiv.innerHTML = `
            <img src="${imageSRC}" alt="${name}" class="menu-item-img">
            <div class="menu-item-text">
                <h4 class="big">
                    ${name}
                    <div class="menu-item-price">${price}</div>
                </h4>
                <span class="big">${description}</span>
            </div>
        `;
        view.appendChild(itemDiv);
    }

    return view;
}

export default menuView;