const express = require('express');
const nodemailer = require('nodemailer');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

console.log('Hello World, server');

const app = express();
const port = 3000; // You can change the port as needed

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.post('/assets/js/', (req, res) => {
    const { name, email, classType } = req.body;

    // Log the data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Class Type:', classType);

    // Perform actions based on classType
    if (classType === 'vino') {
        // 1. Add names and email to a CSV file
        writeToCsv({ name, email });

        // 2. Send email for 'vino'
        sendEmail({ name, email, classType });
    }

    // Respond to the client
    res.send('Registration successful!');
});

function writeToCsv(data) {
    const csvWriter = createCsvWriter({
        path: './data/vino.csv',
        header: [
            { id: 'name', title: 'Name' },
            { id: 'email', title: 'Email' },
        ],
        append: true,
    });

    csvWriter.writeRecords([data])
        .then(() => console.log('CSV file updated with:', data))
        .catch((error) => console.error('Error writing to CSV:', error));
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
