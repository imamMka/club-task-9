let toggleSearch = document.querySelector('#toggleSearch');
let inputContainer = document.querySelector('.input-container');

toggleSearch.addEventListener('click', handleToggle);
function handleToggle() {
    inputContainer.classList.toggle('active');
}