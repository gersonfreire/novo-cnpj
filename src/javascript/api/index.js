const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');

// Determine the .env file path
const envFilePath = process.argv[2] || '.env';

// Check if the .env file exists
if (fs.existsSync(envFilePath)) {
    // Load environment variables from the .env file
    dotenv.config({ path: envFilePath });
}

const ControllerCPF = require('./src/controllers/ControllerCPF.js');
const ControllerCNPJ = require('./src/controllers/ControllerCNPJ.js');

const PORT = process.env.PORT || 9002;

let server;
let protocol;

if (process.env.SSL_KEY_PATH && process.env.SSL_CERT_PATH &&
    fs.existsSync(process.env.SSL_KEY_PATH) && fs.existsSync(process.env.SSL_CERT_PATH)) {
    // SSL Certificate
    const privateKey = fs.readFileSync(process.env.SSL_KEY_PATH, 'utf8');
    const certificate = fs.readFileSync(process.env.SSL_CERT_PATH, 'utf8');
    const credentials = { key: privateKey, cert: certificate };

    server = https.createServer(credentials, app);
    protocol = 'https';
} else {
    server = http.createServer(app);
    protocol = 'http';
}

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/validarCpf/:cpf', async (req, res) => {
    const { cpf } = req.params;
    const response = await ControllerCPF.ValidarCPF(cpf);
    res.json(response);
});

app.get('/gerarCpf', async (req, res) => {
    const response = await ControllerCPF.GerarCPF();
    res.json(response);
});

app.get('/validarCnpj/:cnpj', async (req, res) => {
    const { cnpj } = req.params;
    const response = await ControllerCNPJ.ValidarCNPJ(cnpj);
    res.json(response);
});

app.get('/gerarCnpj', async (req, res) => {
    const response = await ControllerCNPJ.GerarCNPJ();
    res.json(response);
});

server.listen(PORT, () => {
    console.log(`Server is running on ${protocol}://localhost:${PORT}/validarCpf/19379041721`);
});
