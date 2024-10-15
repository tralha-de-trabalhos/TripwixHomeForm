const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer'); // Importa o multer
require('dotenv').config();
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do multer para salvar o ficheiro em memória
const storage = multer.memoryStorage(); // Usar armazenamento em memória
const upload = multer({ storage }); // Inicializa o multer com a configuração de armazenamento em memória

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/send-email', upload.single('pdf'), async (req, res) => {
    try {
        // Verifica se há ficheiro anexado
        if (!req.file) {
            return res.status(400).send('Nenhum arquivo foi carregado.');
        }

        const { to, subject, text } = JSON.parse(req.body.emailData);

        console.log("E-mail data:", { to, subject, text });
        console.log("Arquivo PDF carregado com sucesso:", req.file.originalname);

        // Configuração do Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
            attachments: [
                {
                    filename: 'Tripwix-HomeForm-' +
                        new Date().toLocaleDateString('pt-PT') + ' - ' +
                        new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }).replace(':', '.') + '.pdf',
                    content: req.file.buffer, // O ficheiro em buffer, sem salvar no disco
                    contentType: req.file.mimetype // Tipo MIME do ficheiro
                },
            ],
        };

        // Envia o e-mail
        await transporter.sendMail(mailOptions);
        console.log('E-mail enviado com sucesso');

        // Responde com sucesso
        res.status(200).send('Email enviado com sucesso!');

    } catch (error) {
        console.error("Erro ao enviar o e-mail:", error);
        res.status(500).send('Erro ao enviar o email.');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
