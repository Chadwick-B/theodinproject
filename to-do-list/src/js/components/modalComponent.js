/** @param {Element} parent */
const modalComponent = (parent) => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal');
  modalContainer.innerHTML = `
        <div class="modal">
            <div class="modal-content">
                <span class="x-btn">&times;</span>
            </div>
        </div>
    `;

  modalContainer
    .querySelector('.x-btn')
    .addEventListener('click', () => modalContainer.remove(), false);

  parent.appendChild(modalContainer);
  return modalContainer;
};

export default modalComponent;
