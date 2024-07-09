const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone');
const subject = document.getElementById('subject');
const msg = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br>
                         Email: ${email.value}<br>
                         Phone Number: ${'+91' + phoneNumber.value}<br>
                         Subject: ${subject.value}<br>
                         Message: ${msg.value}`;
    Email.send({
        SecureToken: '0df287df-f148-4a82-a20d-6575f275a120',
        To: '20981a05b1@raghuenggcollege.in',
        From: 'dpool000333@gmail.com',
        Subject: subject.value,
        Body: bodyMessage,
    }).then((message) => {
        if (message == 'OK') {
            notify('message sent successfully!', 'green');
            Swal.fire({
                title: 'Success',
                text: 'Message sent successfully!',
                icon: 'success',
            });
        }
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
});

// function resetCursor(txtElement) {
//     if (txtElement.setSelectionRange) {
//         txtElement.focus();
//         txtElement.setSelectionRange(0, 0);
//     } else if (txtElement.createTextRange) {
//         var range = txtElement.createTextRange();
//         range.moveStart('character', 0);
//         range.select();
//     }
// }
