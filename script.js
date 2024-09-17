document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) {
        console.error('Carousel element not found');
        return;
    }

    const items = carousel.querySelectorAll('.carousel-item');
    if (items.length === 0) {
        console.error('No carousel items found');
        return;
    }

    const controls = carousel.querySelector('.carousel-controls');
    if (!controls) {
        console.error('Carousel controls not found');
        return;
    }

    const prevBtn = controls.querySelector('.prev');
    const nextBtn = controls.querySelector('.next');

    if (!prevBtn || !nextBtn) {
        console.error('Previous or Next button not found');
        return;
    }

    let currentIndex = 0;

    function showItem(index) {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    nextBtn.addEventListener('click', nextItem);
    prevBtn.addEventListener('click', prevItem);

    // Optionnel : changement automatique toutes les 5 secondes
    setInterval(nextItem, 5000);

    // Assurez-vous qu'un élément est actif au démarrage
    if (!carousel.querySelector('.carousel-item.active')) {
        items[0].classList.add('active');
    }
});