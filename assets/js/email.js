function sendMail(event) {
            event.preventDefault();

            let params = {
                form_name: document.getElementById("name").value,
                form_email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };

            fetch("http://emailjs-sage.vercel.app/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            })
            .then(response => response.text())
            .then(result => {
                if (result === 'Email Sent!') {
                    Swal.fire({
                        title: 'Email Sent!',
                        text: 'Your email has been sent successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    document.getElementById("contactForm").reset();
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
