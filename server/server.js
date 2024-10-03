const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

console.log(process.env.EMAIL_USER)
console.log(process.env.EMAIL_PASS)


app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // seu email
            pass: process.env.EMAIL_PASS,  // sua senha
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email enviado com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao enviar o email.');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
