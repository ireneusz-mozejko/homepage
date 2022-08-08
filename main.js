const firstName = "Irek";
const age = 35;

console.log(`Elo Elo 3 - 5 - 0! Jestem ${firstName} i mam ${age} lat.`);

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Elo Elo 3 - 5 - 0! Jestem ${firstName} i mam ${age} lat.`;

const emptyParagraph = document.querySelector('.week-summary__description--js');

emptyParagraph.innerHTML = 'Nawet uzupelniłem treść'
