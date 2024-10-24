from math import ceil 
import sys

class DigitoVerificador:

 def __init__(self, _input):
 	self._cnpj = _input.upper()
 	self._pesos = list()
 	self.digito = 0
 
 def calculaAscii(self, _caracter):
  return ord(_caracter) - 48

 def calcula_soma(self):
 	_tamanho_range = len(self._cnpj)
 	_num_range = ceil(_tamanho_range / 8)
 	for i in range(_num_range):
 		self._pesos.extend(range(2,10))
 	self._pesos = self._pesos[0:_tamanho_range]
 	self._pesos.reverse()
 	sum_of_products = sum(a*b for a, b in zip(map(self.calculaAscii, self._cnpj), self._pesos))
 	return sum_of_products

 
 def calcula(self):
 
  mod_sum = self.calcula_soma() % 11
  
  if(mod_sum < 2):
  	return 0
  else:
  	return 11 - mod_sum

  return sum_of_products

if __name__ == "__main__":
	cnpj = sys.argv[1]
	dv = DigitoVerificador(cnpj)
	print(dv.calcula())

