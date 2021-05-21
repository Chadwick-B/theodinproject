export function toggleComponent(onToggle, unit = 'f') {
  if (typeof onToggle !== 'function') return;
  if (typeof unit !== 'string') return;
  if (unit !== 'f' && unit !== 'c') return;

  // Create fragment to return
  const fragment = document.createDocumentFragment();

  // Create toggle switch elements
  const container = document.createElement('div');
  const label = document.createElement('label');
  const toggler = document.createElement('input');
  const dot = document.createElement('span');

  label.classList.add('toggle-switch');
  toggler.classList.add('toggle-toggler');
  dot.classList.add('toggle-slider');

  toggler.type = 'checkbox';
  if (unit === 'c') toggler.checked = true;
  toggler.addEventListener('click', () => onToggle());

  function getChecked() {
    return toggler.checked;
  }

  label.appendChild(toggler);
  label.appendChild(dot);
  container.appendChild(label);
  fragment.appendChild(container);

  return {
    component: fragment,
    getChecked,
  };
}
