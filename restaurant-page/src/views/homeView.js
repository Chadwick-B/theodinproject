const homeView = () => {
    const view = document.createElement('div');
    view.classList.add('content', 'home-content', 'center');
    view.innerHTML = `
        <h1 class="big">Club Chadwick</h1>
        <p class="big">
            not a real burger place
        </p>
    `

    return view;
}

export default homeView;