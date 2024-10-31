const DaoCPF = require('../dao/DaoCPF');

class ControllerCPF {
    constructor() {
        this.daoCPF = new DaoCPF();
    }

    async ValidarCPF(cpf) {
        try {
            const response = await this.daoCPF.ValidarCPF(cpf);
            return {
                "valid": response,
                "message": response ? 'O CPF é valido' : 'O CPF é invalido'
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async GerarCPF() {
        try {
            const response = await this.daoCPF.GerarCPF();
            return response;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new ControllerCPF();