function sendMail() {
    const form_name = document.getElementById("name").value;
    const form_email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const params = {
        form_name,
        form_email,
        message,
    };

    fetch("https://emailjs-sage.vercel.app/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
    .then(response => {
        if (!response.ok) {
            Swal.fire({
                        title: 'Error!',
                        text: 'Failed to send email. Please try again later.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
        }
        return response.json();
    })
    .then(data => {
        console.log("Email sent:", data);
        Swal.fire({
                        title: 'Email Sent!',
                        text: 'Your email has been sent successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
        // Optionally show a success message or clear the form
    })
    .catch(error => {
        console.error("Error sending email:", error);
        Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred while sending email. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    });
}
