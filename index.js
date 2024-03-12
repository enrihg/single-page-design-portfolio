const leftButton = document.querySelector('.button-left');
const rightButton = document.querySelector('.button-right');
const scrollContainer = document.querySelector('.scroll-container');

leftButton.addEventListener('click', () => {   
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft-= scrollContainer.scrollWidth/5;
})

rightButton.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft+= scrollContainer.scrollWidth/5;
})