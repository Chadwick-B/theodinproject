const contactView = () => {
    const view = document.createElement('div');
    view.classList.add('content', 'contact-content', 'text-area', 'center');
    view.innerHTML = `
        <h4 class="subtitle">Contact Us</h4>
        <p>
            +234(111)453-123843283<br>
            clubchadwick@placethatdoesntexist<br>
            56756 fake address st.
        </p>
    `
    return view;
}

export default contactView;