const DaoCNPJ = require('../dao/DaoCNPJ');

class ControllerCNPJ {
    async ValidarCNPJ (cnpj){
        try{
            const response = await DaoCNPJ.ValidarCNPJ(cnpj)
            return {
                "valid": response,
                "message": response ? 'O CNPJ é valido.' : 'O CNPJ é invalido.',
            }
        } catch (err) {
            throw err;
        }
    }

    async GerarCNPJ (){
        try{
            const response = await DaoCNPJ.GerarCNPJ()
            return response
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new ControllerCNPJ()