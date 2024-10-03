const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer'); // Importa o multer
require('dotenv').config();
const path = require('path');
// const fs = require('fs'); // Importa o módulo fs para remover o pdf da pasta uploads

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Define o diretório onde os arquivos serão salvos
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Usar o nome original do arquivo
    }
});

const upload = multer({ storage }); // Inicializa o multer com a configuração de armazenamento

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

app.post('/send-email', upload.single('pdf'), async (req, res) => {
    const { to, subject, text } = JSON.parse(req.body.emailData); // Pega os dados do email
    const pdfFilePath = path.join(__dirname, 'uploads', req.file.filename); // Caminho do PDF

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
        attachments: [
            {
                filename: 'Tripwix-HomeForm-' +
                    new Date().toLocaleDateString('pt-PT') +
                    ' - ' +
                    new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }).replace(':', '.') +
                    '.pdf', // Altera o nome do arquivo
                path: pdfFilePath // Anexa o PDF
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);

        // Envia a resposta ao cliente
        res.status(200).send('Email enviado com sucesso!');

        /*        // Remover o arquivo após o envio (opcional)
                fs.unlink(pdfFilePath, (err) => {
                    if (err) {
                        console.error('Erro ao remover o arquivo:', err);
                        return; // Não envie outra resposta
                    }
                    console.log('Arquivo removido com sucesso:', pdfFilePath);
                });
        */
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao enviar o email.');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
