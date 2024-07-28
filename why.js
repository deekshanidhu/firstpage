
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('Name').value;
        const email = document.getElementById('Email').value;
        const message = document.getElementById('Message').value;

        if (name && email && message) {
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.style.color = 'green';
            form.reset();
        } else {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
        }
    });
});
