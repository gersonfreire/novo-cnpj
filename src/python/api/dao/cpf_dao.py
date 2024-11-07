import sys,os

# adiciona o path da pasta onde está o modulo de validação
sys.path.append('../../') 

from dv import DigitoVerificador
import sys

class CPFDao:
    @staticmethod
    def validar_cpf(cpf):
        # Remove caracteres não numéricos
        cpf = ''.join(filter(str.isdigit, cpf))

        if len(cpf) != 11:
            return False

        # Calcula o primeiro dígito verificador
        dv1 = DigitoVerificador(cpf[:9], tipo='cpf')
        primeiro_digito = dv1.calcula()

        if primeiro_digito != int(cpf[9]):
            return False

        # Calcula o segundo dígito verificador
        dv2 = DigitoVerificador(cpf[:10], tipo='cpf')
        segundo_digito = dv2.calcula()

        return segundo_digito == int(cpf[10])

    @staticmethod
    def gerar_cpf():
        # Implement CPF generation logic here
        pass