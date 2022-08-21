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
