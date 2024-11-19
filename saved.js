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

function displaySavedRating() {
    const savedRating = localStorage.getItem('userRating');
    const ratingMessage = document.getElementById('ratingMessage');
    
    if (savedRating) {
        ratingMessage.innerHTML = `You have given a rating: ${savedRating} stars.`;
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= parseInt(savedRating)) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    }
}

const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        localStorage.setItem('userRating', rating);
        displaySavedRating();
    });
});



function showReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.style.display = 'block'; 
}



function submitReview() {
    const reviewText = document.getElementById('reviewText').value;
    const rating = localStorage.getItem('userRating');
    const reviewMessage = document.getElementById('reviewMessage');
    
    if (reviewText.trim() === '') {
        alert('Please write a review.');
        return;
    }
    
    if (!rating) {
        alert('Please rate it.');
        return;
    }

    const reviewElement = document.createElement('div');
    reviewElement.classList.add('user-review');
    reviewElement.innerHTML = `
        <p><strong>Your Feedback:</strong> ${reviewText}</p>
        <p><strong>Your Rate:</strong> ${rating} stars</p>
    `;
    
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.appendChild(reviewElement);
    
    document.getElementById('reviewText').value = '';
    document.getElementById('reviewMessage').style.display = 'none';
    document.getElementById('reviewForm').style.display = 'none';
}



function displayReviewForm() {
    const reviewMessage = document.getElementById('reviewMessage');
    reviewMessage.style.display = 'block'; 
    showReviewForm();
}



const submitButton = document.getElementById('submitReviewButton');
submitButton.addEventListener('click', submitReview);

window.addEventListener('DOMContentLoaded', () => {
    displaySavedRating();
});

