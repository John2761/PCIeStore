function sendEmail(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera convencional

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_ze4i3bp";
    const templateID = "template_htaaa4m"; // Reemplaza template_id con el ID de tu plantilla en EmailJS

    emailjs.send(serviceID, templateID, params)
        .then(response => {
            alert("Correo enviado exitosamente!");
            document.getElementById("contact-form").reset(); // Resetea el formulario después de enviar
        })
        .catch(error => {
            alert("Ocurrió un error al enviar el correo. Por favor, inténtalo de nuevo.");
            console.log("FAILED...", error);
        });
}