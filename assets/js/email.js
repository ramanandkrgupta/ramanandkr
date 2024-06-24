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
            throw new Error("Network response was not ok: " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("Email sent:", data);
        Swal.fire({
            title: 'Success!',
            text: 'Email sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    })
    .catch(error => {
        console.error("Error sending email:", error);
        Swal.fire({
            title: 'Error!',
            text: 'An error occurred while sending the email. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    });
}