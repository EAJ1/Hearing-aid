// Contact stays unavailable until a verified recipient is configured in index.html.
const form = document.querySelector('#contact-form');
if (form) {
    const recipient = form.dataset.contactEmail.trim();
    const status = document.querySelector('#contact-status');
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
        form.querySelector('fieldset').disabled = false;
        status.textContent = 'This form opens your email app with a draft. Review and send it there.';
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!form.reportValidity()) return;
            const values = new FormData(form);
            const subject = `Website inquiry from ${values.get('name')}`;
            const body = `Name: ${values.get('name')}\nEmail: ${values.get('email')}\n\n${values.get('message')}`;
            window.location.href = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            status.textContent = 'Email draft requested. If your email app did not open, contact us at ' + recipient + '. Your message has not been sent by this website.';
        });
    } else {
        form.addEventListener('submit', (event) => event.preventDefault());
    }
}
