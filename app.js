const ratingBtns = [...document.querySelectorAll('.rating-selection >*')]
const result = document.querySelector('.rating-result')
const ratingThankYou = document.querySelector('.thank-you')
const submitBtn = document.querySelector('.submit-btn')
const closeBtn = document.querySelector('.close-btn')

ratingBtns.forEach(ratingBtn => {
    ratingBtn.addEventListener('click', () => {
        removeActive(ratingBtns)
        ratingBtn.classList.add('active')
    })
})

function removeActive(selection) {
    selection.forEach(item => {
        item.classList.remove('active')
    })
}

submitBtn.addEventListener('click', () => {
    ratingThankYou.classList.add('show-rating')
    const element = document.querySelector('.active') 
    result.textContent = `You selected ${element.dataset.id} out of 5`
})
closeBtn.addEventListener('click', () => {
    ratingThankYou.classList.remove('show-rating')
    removeActive(ratingBtns)
})