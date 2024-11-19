const loadFactButton = document.getElementById('loadFact');
const factArea = document.getElementById('factArea');

loadFactButton.addEventListener('click', async () => {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    const data = await response.json();
    factArea.textContent = data.text;
});