function sendMail() {
    // Prevent form submission
    event.preventDefault();

    // Collect form data
    let params = {
        form_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send form data using fetch API with POST method
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            service_id: "service_6xr92m9",
            template_id: "template_ln57ul9",
            user_id: "zRgsu0evgpJlnN2RR",
            template_params: params
        })
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                title: 'Email Sent!',
                text: 'Your email has been sent successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            document.getElementById("contactForm").reset();  // Reset form after successful submission
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to send email. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    })
    .catch(error => {
        console.error("Error:", error);
        Swal.fire({
            title: 'Error!',
            text: 'An error occurred while sending email. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    });
}
