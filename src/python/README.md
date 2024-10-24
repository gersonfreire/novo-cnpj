# Versão em Python

## Executando o gerador de dígito verificador

### Exemplo de execução do gerador de dígito verificador

`serpro@serpro:~/cnpj-alfanumerico/python$ python3 -dv cnpj.py 12.ABC.345/01DE`

Teremos como resposta o dígito verificador: **35**

## Executando o validador do CNPJ


### Exemplo com CNPJ válido

`serpro@serpro:~/cnpj-alfanumerico/python$ python3 -v cnpj.py 12.BC3.450/1DE-35`

O programa irá responder **True**

### Exemplo com CNPJ inválido

`serpro@serpro:~/cnpj-alfanumerico/python$ python3 -v cnpj.py 12.BC3.450/1DE-36`

O programa irá responder **False**