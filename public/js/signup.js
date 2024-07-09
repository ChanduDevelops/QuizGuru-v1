var signupForm = document.querySelector('form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = document.getElementById('usrnm').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pswd').value;

    var userAlreadyExist = true;

    if (username === '' || email === '' || password === '') {
        notify('Must enter all fields', 'orange');
    } else {
        if (password.length < 8) {
            notify('Password length must be more than 8 characters');
            return;
        }
        let currentUrl = 'http://127.0.0.1:2020/users/signup';
        fetch(currentUrl, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 409) {
                    Swal.fire({
                        title: 'User already exists!',
                        icon: 'info',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Go to Login page',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = '/users/login.html';
                        }
                    });
                } else {
                    throw new Error('Something went wrong! Please try again');
                }
            })
            .then((data) => {
                if (data?.redirect) {
                    Swal.fire({
                        title: 'Successfully registered!',
                        icon: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Go to Login page',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = data.redirect;
                        }
                    });
                } else if (!userAlreadyExist) {
                    throw new Error('Something went wrong!');
                }
            })
            .catch((err) => {
                notify(err, 'red');
            });
    }
});
