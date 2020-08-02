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

    box.addEventListener('click', ()=>{
        setTextMessage(text);
        speakText();

        // Add active effect
        box.classList.add('active');
        setTimeout(()=> box.classList.remove('active'), 800);
    })

    main.appendChild(box);
}

// Init speech
const message =  new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices()
{
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option');

        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;

        voicesSelect.appendChild(option);
    })
}

// Set text
function setTextMessage(text)
{
    message.text = text;
}

// Speak text
function speakText()
{
    speechSynthesis.speak(message);
}

// Set voice
function setVoice(e)
{
    message.voice = voices.find(voice => voice.name === e.target.value);
}

// Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Toggle text box
toggleBtn.addEventListener('click', () =>
    document.getElementById('text-box').classList.toggle('show')
);

// Close button
closeBtn.addEventListener('click', () =>
    document.getElementById('text-box').classList.remove('show')
);

// Change voice
voicesSelect.addEventListener('change', setVoice);

// Read text button
readBtn.addEventListener('click', ()=>{
    setTextMessage(textarea.value);
    speakText();
})

getVoices();