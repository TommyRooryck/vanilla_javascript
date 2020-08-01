const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image: './img/drink.jpg',
        text: "Ik heb dorst"
    },
    {
        image: './img/food.jpg',
        text: "Ik heb honger"
    },
    {
        image: './img/tired.jpg',
        text: "Ik ben moe"
    },
    {
        image: './img/hurt.jpg',
        text: "Ik heb pijn"
    },
    {
        image: './img/happy.jpg',
        text: "Ik ben blij"
    },
    {
        image: './img/angry.jpg',
        text: "Ik ben boos"
    },
    {
        image: './img/sad.jpg',
        text: "Ik ben triest"
    },
    {
        image: './img/scared.jpg',
        text: "Ik ben bang"
    },
    {
        image: './img/outside.jpg',
        text: 'Ik wil naar buiten'
    },
    {
        image: './img/home.jpg',
        text: 'Ik wil naar huis'
    },
    {
        image: './img/school.jpg',
        text: 'Ik wil naar school'
    },
    {
        image: './img/grandma.jpg',
        text: 'Ik wil naar oma en opa'
    }
];

data.forEach(createBox);

// Create Speech Boxes
function createBox(item) {
    const box = document.createElement('div');

    const { image, text } = item;

    box.classList.add('box');
    box.innerHTML = `
    <img src="${image}" alt="${text}" /> 
    <p class="info">${text}</p>
    `;

    main.appendChild(box);
}