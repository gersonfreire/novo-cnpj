import sys,os

current_dir = os.path.dirname(os.path.abspath(__file__))

# adiciona o path da pasta raiz do projeto
sys.path.append(current_dir + "/../../")

# from dv import DigitoVerificador
from cpf import *
import sys

class CPFDao:
    @staticmethod
    def validar_cpf(cpf):
        # Remove caracteres não numéricos
        cpf = ''.join(filter(str.isdigit, cpf))

        if len(cpf) != 11:
            return False
        
        tipo = 'cpf'
        # dv = DigitoVerificador(cpf[:9], tipo)
        dv = CPF(cpf)
        
        # dv_calculado = dv.calcula()
        dv_calculado = dv.valida()
        
        return dv_calculado == int(cpf[9:11])

        # Calcula o primeiro dígito verificador
        # dv1 = DigitoVerificador(cpf[:9], tipo='cpf')
        # primeiro_digito = dv1.calcula()

        # if primeiro_digito != int(cpf[9]):
        #     return False

        # # Calcula o segundo dígito verificador
        # dv2 = DigitoVerificador(cpf[:10], tipo='cpf')
        # segundo_digito = dv2.calcula()

        # return segundo_digito == int(cpf[10])

    @staticmethod
    def gerar_cpf():
        # Implement CPF generation logic here
        pass