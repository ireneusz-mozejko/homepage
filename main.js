const firstName = "Irek";
const age = 35;

console.log(`Elo Elo 3 - 5 - 0! Jestem ${firstName} i mam ${age} lat.`);

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Elo Elo 3 - 5 - 0! Jestem ${firstName} i mam ${age} lat.`;



function calculate(myNumber){
    console.log(`Dostałem ${myNumber}`);
    return `wynik ${myNumber*7}`;
}

const myReturn = calculate(age);

console.log(myReturn);

function createContent(querySelectorContent, content){
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;

}
createContent('.week-summary__description--js','Nawet uzupelniłem treść!');



const greet = (age, firstName) => {
    console.log(
        `Witaj w świecie frontendu, nazywma się ${firstName} i mam ${age} lata.`
    )
}

greet(35, 'Irek');


console.table([1,2,3,4,5]);

const deathStar = {
    fire: (target) => {
        console.log(`${target} destroyed`);
    },
    diameter: 12000,
    isOperating: true,
    title: 'Death Star',
    levels: 357,
    population: 11000,
    commander: {
        name: 'Darth Vader',
        age: 44,
    }
}

console.dir(deathStar);
console.log(deathStar);
console.dir(deathStar.commander);
console.log(deathStar.commander);

deathStar.fire('R2D2');

const button = document.querySelector('.action--js');
console.log(button);

button.addEventListener('click',() => {
    const heading= document.querySelector(".main__heading--js");
    heading.innerHTML = 'Witaj drogi odwiedzajacy, jestem IMO!';
    heading.classList.toggle('klasa-z-js');
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})


const flour = 1000;
let hydration = 60;
let water = 1000 / hydration;
let salt = water / 50;

console.log(flour + water + salt);

