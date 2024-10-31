class DaoCNPJ {
    async ValidarCNPJ (cnpj){
        // Remove caracteres especiais e espaços em branco
        cnpj = cnpj.replace(/[^\d]+/g, '');

        // Verifica se o CNPJ tem 14 dígitos
        if (cnpj.length !== 14) {
            return false;
        }

        // Calcula o primeiro dígito verificador
        let soma = 0;
        let peso = 2;
        for (let i = 11; i >= 0; i--) {
            soma += parseInt(cnpj.charAt(i)) * peso;
            peso = peso === 9 ? 2 : peso + 1;
        }

        let digito1 = 11 - (soma % 11);
        if (digito1 >= 10) {
            digito1 = 0;
        }

        // Calcula o segundo dígito verificador
        soma = 0;
        peso = 2;
        for (let i = 12; i >= 0; i--) {
            soma += parseInt(cnpj.charAt(i)) * peso;
            peso = peso === 9 ? 2 : peso + 1;
        }

        let digito2 = 11 - (soma % 11);
        if (digito2 >= 10) {
            digito2 = 0;
        }

        // Verifica se os dígitos calculados coincidem com os dígitos do CNPJ
        if (parseInt(cnpj.charAt(12)) === digito1 && parseInt(cnpj.charAt(13)) === digito2) {
            return true;
        }

        return false;
    }

    async GerarCNPJ () {
       // Gera os 8 primeiros dígitos aleatórios
        let cnpj = '';
        for (let i = 0; i < 8; i++) {
            cnpj += Math.floor(Math.random() * 10);
        }

        // Preenche os zeros do meio
        cnpj += "0001";

        // Calcula o primeiro dígito verificador
        let soma = 0;
        let peso = 5;
        for (let i = 0; i < 12; i++) {
            soma += parseInt(cnpj.charAt(i)) * peso;
            peso = peso === 2 ? 9 : peso - 1;
        }

        let digito1 = 11 - (soma % 11);
        if (digito1 >= 10) {
            digito1 = 0;
        }

        cnpj += digito1.toString();

        // Calcula o segundo dígito verificador
        soma = 0;
        peso = 6;
        for (let i = 0; i < 13; i++) {
            soma += parseInt(cnpj.charAt(i)) * peso;
            peso = peso === 2 ? 9 : peso - 1;
        }

        let digito2 = 11 - (soma % 11);
        if (digito2 >= 10) {
            digito2 = 0;
        }

        cnpj += digito2.toString();

        const cnpjFormatado = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");

        
        return {
            "cnpj": cnpj,
            "cnpj_formatado": cnpjFormatado
        };
    }
}

module.exports = new DaoCNPJ();