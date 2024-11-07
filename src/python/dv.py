from math import ceil 
import sys

class DigitoVerificador:

    def __init__(self, _input, tipo='cnpj'):
        self._input = _input.upper()
        self._pesos = list()
        self.digito = 0
        self.tipo = tipo

    def calculaAscii(self, _caracter):
        return ord(_caracter) - 48

    def calcula_soma(self):
        _tamanho_range = len(self._input)
        if self.tipo == 'cnpj':
            _num_range = ceil(_tamanho_range / 8)
            for i in range(_num_range):
                self._pesos.extend(range(2, 10))
        elif self.tipo == 'cpf':
            if _tamanho_range == 9:
                self._pesos = list(range(10, 1, -1))
            elif _tamanho_range == 10:
                self._pesos = list(range(11, 1, -1))
        self._pesos = self._pesos[0:_tamanho_range]
        self._pesos.reverse()
        sum_of_products = sum(a * b for a, b in zip(map(self.calculaAscii, self._input), self._pesos))
        return sum_of_products

    def calcula(self):
        mod_sum = self.calcula_soma() % 11
        if mod_sum < 2:
            return 0
        else:
            return 11 - mod_sum

if __name__ == "__main__":
    _input = sys.argv[2]
    tipo = sys.argv[3] if len(sys.argv) > 3 else 'cnpj'
    dv = DigitoVerificador(_input, tipo)
    print(dv.calcula())
