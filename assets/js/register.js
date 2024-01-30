document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the "Registrar" button
    document.querySelector('.registrarTaller').addEventListener('click', function (event) {
        event.preventDefault();

        // Call your custom function or perform actions here
        handleRegistrarButtonClick();
    });
});

// Define your custom function to handle the button click
function handleRegistrarButtonClick() {
    let classElement = document.querySelector('.registrarTaller');
    let classes = classElement.classList;
    let classArray = Array.from(classes);

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    console.log('Name:', name);
    console.log('Email:', email);

    if (classArray.includes('vino')) {
        // Prepare the data to send to the server
        const data = {
            name: name,
            email: email,
            classType: 'vino'
        };

        // Send a POST request to the server
        fetch('http://localhost:3000/assets/js/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.text())
        .then(responseText => console.log(responseText))
        .catch(error => console.error('Error:', error));
    }
}
