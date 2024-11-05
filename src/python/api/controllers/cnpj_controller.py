from dao.cnpj_dao import CNPJDao

import sys,os

# adicione o caminho da pasta raiz do script ao path do python
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))
from dv import DigitoVerificador
import sys
import os

class CNPJController:
    @staticmethod
    def validar_cnpj(cnpj):
        try:
            response = CNPJDao.validar_cnpj(cnpj)
            return {
                "valid": response,
                "message": 'O CNPJ é valido' if response else 'O CNPJ é invalido'
            }
        except Exception as e:
            raise e

    @staticmethod
    def gerar_cnpj():
        try:
            response = CNPJDao.gerar_cnpj()
            cnpj = response['cnpj']
            dv1 = DigitoVerificador(cnpj[:12])
            dv1char = '{}'.format(dv1.calcula())

            dv2 = DigitoVerificador(cnpj[:12] + dv1char)
            dv2char = '{}'.format(dv2.calcula())

            dv = f"{dv1char}{dv2char}"
            response['cnpj'] = cnpj + dv
            response['cnpj_formatado'] = f"{cnpj[:2]}.{cnpj[2:5]}.{cnpj[5:8]}/{cnpj[8:12]}-{dv}"
            return response
        except Exception as e:
            raise e