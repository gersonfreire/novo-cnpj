# Versão em Python

## Executando o gerador de dígito verificador

### Exemplo de execução do gerador de dígito verificador

`serpro@serpro:~/cnpj-alfanumerico/python$ python3 -dv cnpj.py 12.ABC.345/01DE`

Teremos como resposta o dígito verificador: **35**

## Rodando código fonte no VS Code

Para quem usa *VS Code*, está incluído na pasta padrão *.vscode* um arquivo *launch.json*, cuja configuração "*Python CNPJ console*" chamará o script `src\python\cnpj.py` passando os parâmetros "-V" (validação) e um CNPJ de teste.

Basta abrir o projeto no *VS Code* e, no íconde de debug, escolher, ao lado de "*Run and Debug*", a configuração "*Python CNPJ console*"

## Executando o validador do CNPJ

### Exemplo com CNPJ válido

`serpro@serpro:~/cnpj-alfanumerico/python$ python3 -v cnpj.py 12.BC3.450/1DE-35`

O programa irá responder **True**

### Exemplo com CNPJ inválido

`serpro@serpro:~/cnpj-alfanumerico/python$ python3 -v cnpj.py 12.BC3.450/1DE-36`

O programa irá responder **False**
