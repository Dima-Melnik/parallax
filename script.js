let display = document.querySelector('.main__content-score');
let button = document.querySelector('.main__content-btn');
let reload = document.querySelector('.reset__score');

button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
    case '+1':
        display.innerText = parseInt(display.innerText) + 1;
        break;
    case 'clear':
    default:
        if(display.innerHTML === '0' && e.target.innerText !== '.'){
            display.innerText = e.targer.innerText;
        } else {
            display.innerText += e.target.innerText;
        }
    };    
});

reload.addEventListener('click', (e) => {
    display.innerText = '0';
});