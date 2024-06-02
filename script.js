document.addEventListener('DOMContentLoaded', function() {
    const adminOption = document.getElementById('adminOption');
    const guestOption = document.getElementById('guestOption');
    const loginContainer = document.getElementById('loginContainer');
    const returnButton = document.getElementById('returnButton');

    if (adminOption && guestOption && loginContainer) {
        adminOption.addEventListener('click', function() {
            loginContainer.style.display = 'block';
            document.querySelector('.role-selection').style.display = 'none';
            returnButton.style.display = 'block';
        });

        guestOption.addEventListener('click', function() {
            window.location.href = 'https://elluiis.github.io/IMPRESIONES/';
        });

        returnButton.addEventListener('click', function() {
            loginContainer.style.display = 'none';
            document.querySelector('.role-selection').style.display = 'block';
            returnButton.style.display = 'none';
        });

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'luis' && password === '123') {
                window.location.href = 'https://github.com/';
            } else {
                alert('Credenciales incorrectas. Inténtalo de nuevo.');
            }
        });
    } else {
        console.error('No se pudieron encontrar los elementos necesarios.');
    }
});
