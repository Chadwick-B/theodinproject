const MenuItem = (name, description, price, imgSRC) => {
    const getName = () => { return name };
    const getDescription = () => { return description };
    const getPrice = () => { return `$${price}` };
    const getImageSRC = () => { return imgSRC; };
    return { getName, getDescription, getPrice, getImageSRC};
};

export default MenuItem;