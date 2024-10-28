from dao.cnpj_dao import CNPJDao

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
            return response
        except Exception as e:
            raise e