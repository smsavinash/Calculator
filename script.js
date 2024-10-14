const screen = document.getElementById('screen');
let currentInput = '';
let previousInput = '';
let operator = null;

document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;
        const action = e.target.dataset.action;

        if (action === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = null;
            screen.value = '';
        } else if (action === 'backspace') {
            currentInput = currentInput.slice(0, -1);
            screen.value = currentInput;
        } else if (action === 'calculate') {
            if (operator) {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                screen.value = currentInput;
                operator = null;
                previousInput = '';
            }
        } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            operator = {
                add: '+',
                subtract: '-',
                multiply: '*',
                divide: '/'
            }[action];
            previousInput = currentInput;
            currentInput = '';
        } else if (action === 'decimal') {
            if (!currentInput.includes('.')) {
                currentInput += '.';
            }
            screen.value = currentInput;
        } else {
            currentInput += value;
            screen.value = currentInput;
        }
    });
});
