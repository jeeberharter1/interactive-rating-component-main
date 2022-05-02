const mainContainer = document.getElementById('container');
const submitContainer = document.getElementById('submitted-container');
const ratingChoice = document.getElementById('rating-choice');
const submitBtn = document.getElementById('submit-btn');
const ratings = document.getElementsByClassName('rating-btn');

let currentRating = '';

for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        currentRating = ratings[i].innerHTML;
    })
}

submitBtn.addEventListener('click', () => {
    if (currentRating !== '') {
        mainContainer.style.display = "none";
        submitContainer.style.display = "flex";
        ratingChoice.innerHTML = currentRating;
    }
})