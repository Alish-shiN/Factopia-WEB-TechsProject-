document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.categories .btn');
    const articles = document.querySelectorAll('.article');
    
    // Load saved filter from local storage
    const savedFilter = localStorage.getItem('selectedCategory') || 'All in Categories';
    applyFilter(savedFilter);

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent.trim();
            applyFilter(category);
            
            // Save filter to local storage
            localStorage.setItem('selectedCategory', category);
        });
    });

    function applyFilter(category) {
        categoryLinks.forEach(link => {
            if (link.textContent.trim() === category) {
                link.classList.remove('btn-light');
                link.classList.add('btn-primary');
            } else {
                link.classList.remove('btn-primary');
                link.classList.add('btn-light');
            }
        });

        articles.forEach(article => {
            const articleCategory = article.querySelector('p').textContent.trim();
            if (category === 'All in Categories' || articleCategory === category) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });
    }
});