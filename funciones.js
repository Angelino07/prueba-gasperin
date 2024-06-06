document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('VAMOS PITUFINA <3 TE AMO CABRONAAA.');
        });
    });
});