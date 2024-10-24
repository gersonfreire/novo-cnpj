# Versão em TypeScript

## Arquivos

cnpj.ts -> classe com os métodos para cálculo do DV e validação de CNPJ alfanumérico

calculo.ts -> programa para cálculo de DV de CNPJ (sem DV) passados como parâmetros

validacao.ts -> programa para validação de CNPJ passados como parâmetros

test.ts -> programa para verificação de integridade da classe CNPJ

## Exemplo de excução do teste de cálculo de DV
`npx ts-node calculo.ts 12ABC34501DE 1345C3A50001 R55231B30007 90.021.382/0001 90.024.778/0001 90.025.108/0001 90.025.255/0001 90.024.420/0001`

**Saída esperada:**
```
[1] CNPJ: [12ABC34501DE] DV: [35]
[2] CNPJ: [1345C3A50001] DV: [06]
[3] CNPJ: [R55231B30007] DV: [57]
[4] CNPJ: [90.021.382/0001] DV: [22]
[5] CNPJ: [90.024.778/0001] DV: [23]
[6] CNPJ: [90.025.108/0001] DV: [21]
[7] CNPJ: [90.025.255/0001] DV: [00]
[8] CNPJ: [90.024.420/0001] DV: [09]
```

## Exemplo de excução do teste para validação do CNPJ
`npx ts-node validacao.ts 12ABC34501DE35 1345C3A5000106 R55231B3000700 1345c3A5000106 90.021.382/0001-22 90.024.778/000123 90.025.108/000101 90.025.255/0001 90.024.420/0001A`

**Saída esperada:**
```
[1] O CNPJ [12ABC34501DE35] é válido.
[2] O CNPJ [1345C3A5000106] é válido.
[3] O CNPJ [R55231B3000700] não é válido.
[4] O CNPJ [1345c3A5000106] não é válido.
[5] O CNPJ [90.021.382/0001-22] é válido.
[6] O CNPJ [90.024.778/000123] é válido.
[7] O CNPJ [90.025.108/000101] não é válido.
[8] O CNPJ [90.025.255/0001] não é válido.
[9] O CNPJ [90.024.420/0001A] não é válido.
```

## Exemplo de execução dos testes unitários
`npx ts-node test.ts `

**Saída esperada:**
```
All tests passed successfully!
```