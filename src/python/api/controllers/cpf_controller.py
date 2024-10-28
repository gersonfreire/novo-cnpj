from dao.cpf_dao import CPFDao

class CPFController:
    @staticmethod
    def validar_cpf(cpf):
        try:
            response = CPFDao.validar_cpf(cpf)
            return {
                "valid": response,
                "message": 'O CPF é valido' if response else 'O CPF é invalido'
            }
        except Exception as e:
            raise e

    @staticmethod
    def gerar_cpf():
        try:
            response = CPFDao.gerar_cpf()
            return response
        except Exception as e:
            raise e
        
# http://127.0.0.1:9002/validarcpf/12345678909        