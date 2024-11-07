import re
import sys
from dv import DigitoVerificador

class CPF:

    def __init__(self, _input_cpf):
        try:
            _cpf_valido = self.__valida_formato(_input_cpf)
            if _cpf_valido:
                self.cpf = self.__remove_pontuacao(_input_cpf)
            else:
                raise Exception("CPF não está no padrão aaa.aaa.aaa-aa (Para validação) ou aaa.aaa.aaa (Para geração do DV)")
        except Exception as _e:
            print(_e)
            sys.exit(0)

    def __remove_digitos_cpf(self):
        if len(self.cpf) == 11:
            self.cpf_sem_dv = self.cpf[0:-2]
        elif len(self.cpf) == 9:
            self.cpf_sem_dv = self.cpf
        else:
            raise Exception("CPF com tamanho inválido!")

    def __remove_pontuacao(self, _input):
        return ''.join(x for x in _input if x not in "./-")

    def valida(self):
        self.__remove_digitos_cpf()
        _dv = self.gera_dv()

        return "%s%s" % (self.cpf_sem_dv, _dv) == self.cpf

    def gera_dv(self):
        self.__remove_digitos_cpf()
        dv1 = DigitoVerificador(self.cpf_sem_dv, tipo='cpf')
        dv1char = '{}'.format(dv1.calcula())

        dv2 = DigitoVerificador(self.cpf_sem_dv + dv1char, tipo='cpf')
        dv2char = '{}'.format(dv2.calcula())

        return "%s%s" % (dv1char, dv2char)

    def __valida_formato(self, _cpf):
        return re.match(r'(^([A-Z]|\d){3}\.([A-Z]|\d){3}\.([A-Z]|\d){3}\-([A-Z]|\d){2}$)', _cpf)

if __name__ == "__main__":

    try:
        if len(sys.argv) < 2:
            raise Exception("Formato inválido do CPF.")
        _exec = sys.argv[1].upper()
        _input = sys.argv[2]

        cpf = CPF(_input)
        if _exec == '-V':
            print(cpf.valida())
        elif _exec == '-DV':
            print(cpf.gera_dv())
        else:
            raise Exception("Opção inválida passada, as válidas são: -v para validar, -dv para gerar digito validador.")
        sys.exit()
    except Exception as _e:
        print(_e)
        sys.exit(0)
