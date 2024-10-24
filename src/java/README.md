# Versão em Java

## Arquivos
CNPJValidator.java -> classe que valida o CNPJ e calcula o DV

TesterCalculo.java -> classe para testar o cálculo do DV

TesterValidacao -> classe para testar a validação do CNPJ

## Compilando o código para teste
**No Windows:**

`javac .\*.java`

**No Linux:**

`javac ./*.java`

## Exemplo de excução do teste de cálculo de DV
### Opção 1: sem informar parâmetros, são executados testes predefinidos
`java TesterCalculo`

**Saída esperada:**
```
 ** Calculando de DV de CNPJ Alfanumerico **
Nenhum CNPJ informado

Executando testes predefinidos:
1   CNPJ:12ABC34501DE    DV calculado: 35  DV esperado: 35
2   CNPJ:1345C3A50001    DV calculado: 06  DV esperado: 06
3   CNPJ:R55231B30007    DV calculado: 57  DV esperado: 57
4   CNPJ:90.021.382/0001    DV calculado: 22  DV esperado: 22
5   CNPJ:90.024.778/0001    DV calculado: 23  DV esperado: 23
6   CNPJ:90.025.108/0001    DV calculado: 21  DV esperado: 21
7   CNPJ:90.025.255/0001    DV calculado: 00  DV esperado: 00
8   CNPJ:90.024.420/0001    DV calculado: 09  DV esperado: 09
```

### Opção 2: informar lista de cnpjs para cálculo
`java TesterCalculo "R5.523.1B3/0007" "12ABC34501DE"`

**Saída esperada:**
```
** Calculando de DV de CNPJ Alfanumerico **
Calculando DV de  2 CNPJ(s).
1   CNPJ:R5.523.1B3/0007    DV: 57
2   CNPJ:12ABC34501DE    DV: 35
```

## Exemplo de excução do teste para validação do CNPJ
### Opção 1: sem informar parâmetros, são executados testes predefinidos
`java TesterValidacao`

**Saída esperada:**
```
 ** Validando CNPJ Alfanumerico **

Nenhum CNPJ informado

Executando testes predefinidos:
1   CNPJ:12ABC34501DE35    valido? true  resultado esperado: true
2   CNPJ:1345C3A5000106    valido? true  resultado esperado: true
3   CNPJ:R55231B3000700    valido? false  resultado esperado: false
4   CNPJ:1345c3A5000106    valido? false  resultado esperado: false
5   CNPJ:90.021.382/0001-22    valido? true  resultado esperado: true
6   CNPJ:90.024.778/000123    valido? true  resultado esperado: true
7   CNPJ:90.025.108/000101    valido? false  resultado esperado: false
8   CNPJ:90.025.255/0001    valido? false  resultado esperado: false
9   CNPJ:90.024.420/0001A2    valido? false  resultado esperado: false
```

### Opção 2: informar lista de cnpjs para validação
`java TesterValidacao "12ABC34501DE35" "R55231B3000700" "R55231B3000757" "90.024.420/0001A2"`

**Saída esperada:**
```
 ** Validando CNPJ Alfanumerico **

Validando  4 CNPJ(s).
1   CNPJ:12ABC34501DE35    valido? true
2   CNPJ:R55231B3000700    valido? false
3   CNPJ:R55231B3000757    valido? true
4   CNPJ:90.024.420/0001A2    valido? false
```