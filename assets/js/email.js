function sendMail() {
    let params = {
      
        template_params: {
            form_name: document.getElementById("name").value,
            form_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
    };

    fetch("http://emailjs-sage.vercel.app/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Add any additional headers as needed
        },
        body: JSON.stringify(params)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log("Email sent:", data);
        // Optionally show a success message or redirect after successful submission
    })
    .catch(error => {
        console.error("Error sending email:", error);
        // Handle errors, display an error message to the user, etc.
    });
}
