import os
from flask import Flask, jsonify
from controllers.cpf_controller import CPFController
from controllers.cnpj_controller import CNPJController
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

@app.route('/validarCpf/<cpf>', methods=['GET'])
def validar_cpf(cpf):
    response = CPFController.validar_cpf(cpf)
    return jsonify(response)

@app.route('/gerarCpf', methods=['GET'])
def gerar_cpf():
    response = CPFController.gerar_cpf()
    return jsonify(response)

@app.route('/validarCnpj/<cnpj>', methods=['GET'])
def validar_cnpj(cnpj):
    response = CNPJController.validar_cnpj(cnpj)
    return jsonify(response)

@app.route('/gerarCnpj', methods=['GET'])
def gerar_cnpj():
    response = CNPJController.gerar_cnpj()
    return jsonify(response)

if __name__ == '__main__':
    ssl_key_path = os.getenv('SSL_KEY_PATH')
    ssl_cert_path = os.getenv('SSL_CERT_PATH')
    
    # Check if SSL certificate files exist
    if ssl_key_path and ssl_cert_path and os.path.exists(ssl_key_path) and os.path.exists(ssl_cert_path):
        app.run(host='0.0.0.0', port=9002, debug=True, ssl_context=(ssl_cert_path, ssl_key_path))
    else:
        app.run(host='0.0.0.0', port=9002, debug=True)

# http://127.0.0.1:9002/validarCpf/12345678909