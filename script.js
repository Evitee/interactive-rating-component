const numbersButtons = document.querySelectorAll('.num');
const submitButton = document.querySelector('.b');
const thankYouCard = document.querySelector('.thank-you');
const ratingCard = document.querySelector('.background');
const result = document.querySelector('.result');



let ratingSelected = 0;


function clear () {
    numbersButtons.forEach(button => {
       button.style.backgroundColor = "var(--very-dark-blue)"
       button.style.color = "var(--medium-grey)"
    })
}


numbersButtons.forEach(button => {
    button.addEventListener('click', e => {
        clear();
        button.style.backgroundColor = "var(--orange)";
        button.style.color = "white";
        ratingSelected = button.innerText;
    })
})




submitButton.addEventListener('click', () => {
    const tag = document.createElement('p');
    let text = document.createTextNode(`You selected ${ratingSelected} out of 5`);
    tag.appendChild(text);
    
        if(ratingSelected != 0){
        ratingCard.style.display = "none";
        thankYouCard.style.display = "flex";
        result.appendChild(tag);
        }
    return;
})