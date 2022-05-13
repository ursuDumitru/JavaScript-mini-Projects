const buttonStart = document.querySelector('[data-start]');
const entryPage = document.querySelector('.first-page');
const pgButtons = document.querySelectorAll('[data-answer]');
const barLoaded = document.querySelector('[data-bar]');
const resultScore = document.querySelector('[data-resultss]');
const fullWidth = document.querySelector('[data-bar1]');
const h1Text = document.querySelector('[data-h1]');

const pgOne = document.querySelector('.pg-one');
const pgTwo = document.querySelector('.pg-two');
const pgThree = document.querySelector('.pg-three');
const pgFour = document.querySelector('.pg-four');
const pgFive = document.querySelector('.pg-five');
const pgSix = document.querySelector('.pg-six');
const pgSeven = document.querySelector('.pg-seven');
const pgEight = document.querySelector('.pg-eight');
const pgNine = document.querySelector('.pg-nine');
const pgTen = document.querySelector('.pg-ten');
const lastPage = document.querySelector('.last-page');

let widthC = 0;
let percents = 0;

const pgArray = [pgOne, pgTwo, pgThree, pgFour, pgFive, pgSix, pgSeven, pgEight, pgNine, pgTen, lastPage];


buttonStart.addEventListener('click', e => {
    entryPage.classList.add('not-show');
    pgOne.classList.remove('not-show');
})

pgButtons.forEach(pgButton => pgButton.addEventListener('click', b => {
    if(pgButton.dataset.answer === 'correct') {
        // hide the current page
        pgButton.parentElement.classList.add('not-show');

        // add the bar width
        widthC = widthC + 47.52;
        barLoaded.style.width = widthC.toString() + 'px';
        percents = parseFloat(widthC) / 475.2 * 100;

        // show the next page
        for(let i = 0; i < pgArray.length; i++) {
            if(pgButton.parentElement.classList === pgArray[i].classList) {
                pgArray[i + 1].classList.remove('not-show');
            }  
    }

    } else if(pgButton.dataset.answer === 'wrong') {
        // wrong pop up
        // window.alert('Ai gresit !');
        //hide the current page
        pgButton.parentElement.classList.add('not-show');
        // show the next page
        for(let i = 0; i < pgArray.length; i++) {
            if(pgButton.parentElement.classList === pgArray[i].classList) {
            pgArray[i + 1].classList.remove('not-show');
            }
        }    
    }   
    if(widthC < 200 || widthC === 0) {
        resultScore.innerText = `You know almost nothing about me`;
    } else if(widthC > 200 && widthC < 300) {
        resultScore.innerText = "You know SOME things about me";
    } else if(widthC > 300 && widthC < 450) {
        resultScore.innerText = "You must be a friend of mine";
    } else if(widthC > 450) {
        resultScore.innerText = "You know me perfectly";
    }
    h1Text.innerText = ` Results : ${parseInt(percents)}%`;
}))