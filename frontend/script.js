document.addEventListener('DOMContentLoaded', () => {
    // ---------- PROFILE CARD ----------
    const statusIndicator = document.querySelector('[data-test-id="status-indicator"]');
    if (statusIndicator) {
        const statuses = [
            { text: 'Online', color: '#22c55e' },
            { text: 'Away', color: '#facc15' },
            { text: 'Do Not Disturb', color: '#ef4444' },
            { text: 'Offline', color: '#9ca3af' },
        ];
        statusIndicator.addEventListener('click', () => {
            const random = statuses[Math.floor(Math.random() * statuses.length)];
            statusIndicator.style.backgroundColor = random.color;
            statusIndicator.setAttribute('title', random.text);
        });
    }

    // ---------- CONTACT FORM ----------
    const form = document.getElementById('contactForm');
    if (form) {
        const successMsg = document.querySelector('[data-test-id="test-contact-success"]');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;

            const name = form.name;
            const email = form.email;
            const subject = form.subject;
            const message = form.message;

            const showError = (input, msg) => {
                const err = document.getElementById(`error-${input.name}`);
                err.textContent = msg;
                valid = false;
            };

            const clearError = (input) => {
                document.getElementById(`error-${input.name}`).textContent = '';
            };

            // name
            if (!name.value.trim()) showError(name, 'Name is required');
            else clearError(name);

            // email
            const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if (!email.value.trim()) showError(email, 'Email is required');
            else if (!emailPattern.test(email.value)) showError(email, 'Invalid email');
            else clearError(email);

            // subject
            if (!subject.value.trim()) showError(subject, 'Subject is required');
            else clearError(subject);

            // message
            if (!message.value.trim()) showError(message, 'Message is required');
            else if (message.value.trim().length < 10) showError(message, 'At least 10 characters');
            else clearError(message);

            if (valid) {
                successMsg.hidden = false;
                form.reset();
                setTimeout(() => (successMsg.hidden = true), 4000);
            } else {
                successMsg.hidden = true;
            }
        });
    }
});
