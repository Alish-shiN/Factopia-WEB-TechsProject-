

document.addEventListener("DOMContentLoaded", function () {


    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = this.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('selected');
            }
            document.getElementById('ratingMessage').innerText = `You rated it ${rating} stars!`;
        });
    });

    
});