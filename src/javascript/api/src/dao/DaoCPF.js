class DaoCPF {

    async ValidarCPF(cpf) {
        // Remova todos os caracteres que não sejam dígitos
        cpf = cpf.replace(/\D/g, '');
        console.log(`CPF após remover caracteres não numéricos: ${cpf}`);

        // Verifique se o CPF possui 11 dígitos
        if (cpf.length !== 11) {
            console.log('CPF não possui 11 dígitos');
            return false;
        }

        // Verifique se todos os dígitos são iguais (caso contrário, o CPF é inválido)
        const digitosIguais = cpf.split('').every(d => d === cpf[0]);
        if (digitosIguais) {
            console.log('Todos os dígitos do CPF são iguais');
            return false;
        }

        // Calcule os dígitos verificadores
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let primeiroDigito = (soma * 10) % 11;
        if (primeiroDigito === 10 || primeiroDigito === 11) {
            primeiroDigito = 0;
        }
        console.log(`Primeiro dígito verificador calculado: ${primeiroDigito}`);

        if (primeiroDigito !== parseInt(cpf.charAt(9))) {
            console.log('Primeiro dígito verificador não confere');
            return false;
        }

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        let segundoDigito = (soma * 10) % 11;
        if (segundoDigito === 10 || segundoDigito === 11) {
            segundoDigito = 0;
        }
        console.log(`Segundo dígito verificador calculado: ${segundoDigito}`);

        if (segundoDigito !== parseInt(cpf.charAt(10))) {
            console.log('Segundo dígito verificador não confere');
            return false;
        }

        return true;
    }

    async GerarCPF () {
        // Gere 9 dígitos aleatórios para os primeiros 9 dígitos do CPF
        const cpfParcial = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');

        // Calcule o primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpfParcial.charAt(i)) * (10 - i);
        }
        const primeiroDigito = (soma * 10) % 11;

        // Calcule o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpfParcial.charAt(i)) * (11 - i);
        }
        soma += primeiroDigito * 2;
        const segundoDigito = (soma * 10) % 11;

        // Monte o CPF completo
        const cpfCompleto = cpfParcial + primeiroDigito + segundoDigito;
        const cpfFormatado = cpfCompleto.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

        return {
            "cpf": cpfCompleto,
            "cpf_formatado": cpfFormatado
        }
    }
}

module.exports = DaoCPF;