document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input');
    const passwordButton = document.getElementById('password-button');
    const correctPassword = 'soft';
    function unlockWebsite() {
        document.body.classList.remove('locked');
        document.querySelector('.password-screen').style.display = 'none';
        // Start animations and timers once unlocked
        startTimers(); 
    }

    passwordButton.addEventListener('click', () => {
        if (passwordInput.value === correctPassword) {
            unlockWebsite();
        } else {
            alert('Wrong password. Try something meaningful! 😉');
        }
    });

    // Also allow pressing Enter to submit
    passwordInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            passwordButton.click();
        }
    });
});

function startTimers() {
    // Add any code you want to run after unlocking here
    console.log('Website unlocked! You can start your special animations or timers.');
}
