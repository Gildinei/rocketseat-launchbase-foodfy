const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');
const closeModal = document.querySelector('.close-modal');

for (let recipe of recipes) {
    recipe.addEventListener('click', function () {
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = recipe.querySelector('img').src;
        modalOverlay.querySelector('img').alt = recipe.querySelector('img').alt;
        modalOverlay.querySelector('h3').textContent = recipe.querySelector('h3').textContent;
        modalOverlay.querySelector('strong').textContent = recipe.querySelector('strong').textContent;
    });
};

closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('active');    
});