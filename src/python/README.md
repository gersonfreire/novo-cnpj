# Versão em Python (console)

## Sobre

Esta é a versão original do SERPRO implementada em Python para linha de comando (console)

Além desta, disponibilizamos, nas sub-pastas filhas, novas implementações de uma [API REST](https://github.com/gersonfreire/novo-cnpj/tree/main/src/python/api) e um [Bot Telegram](https://github.com/gersonfreire/novo-cnpj/tree/main/src/python/bot).

## Executando o gerador de dígito verificador

### Exemplo de execução do gerador de dígito verificador

`serpro@serpro:~/cnpj-alfanumerico/python$ python cnpj.py -dv 12.ABC.345/01DE`

Teremos como resposta o dígito verificador: **35**

## Rodando código fonte no VS Code

Para quem usa *VS Code*, está incluído na pasta padrão *.vscode* um arquivo *launch.json*, cuja configuração "*Python CNPJ console*" chamará o script `src\python\cnpj.py` passando os parâmetros "-V" (validação) e um CNPJ de teste.

Basta abrir o projeto no *VS Code* e, no íconde de debug, escolher, ao lado de "*Run and Debug*", a configuração "*Python CNPJ console*"

## Executando o validador do CNPJ

### Exemplo com CNPJ válido

`serpro@serpro:~/cnpj-alfanumerico/python$ python cnpj.py -v 12.BC3.450/01DE-35`

O programa irá responder **True**

### Exemplo com CNPJ inválido

`serpro@serpro:~/cnpj-alfanumerico/python$ python cnpj.py -v 12.BC3.450/01DE-36`

O programa irá responder **False**

### Validação CPF usando cpf.py

```
from cpf import CPF

cpf = "123.456.789-09"
cpf_obj = CPF(cpf)
is_valid = cpf_obj.valida()
print(f"O CPF {cpf} é {'válido' if is_valid else 'inválido'}.")
```

### Validação de CPF - Exemplo de uso usando dv.py

```
from cpf_dao import CPFDao

cpf = "12345678909"
is_valid = CPFDao.validar_cpf(cpf)
print(f"O CPF {cpf} é {'válido' if is_valid else 'inválido'}.")
```
