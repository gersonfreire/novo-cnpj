# API de Validação e Geração de CPF e CNPJ

Esta API oferece endpoints para validar e gerar números de CPF e CNPJ com base nas regras de validação estabelecidas. As regras de validação utilizadas nesta API seguem os cálculos descritos em [Regra de Validação para CPF e CNPJ](https://souforce.cloud/regra-de-validacao-para-cpf-e-cnpj-no-salesforce/).

## Endpoints Disponíveis

[URL base da API publicada](https://apivalida.monitor.eco.br:9002/ "URL Base")

## Uso

1. Crie a estrutura do projeto conforme descrito.
2. Copie o código fornecido nos respectivos arquivos.
3. Instale as dependências usando `pip install -r requirements.txt`.
4. Execute o aplicativo Flask usando `python app.py`.
5. Execute os testes usando `pytest`.

Isso deve fornecer uma API Python funcional semelhante ao projeto original.

### Validar CPF

**Endpoint:** `/validarcpf/:cpf`

**Descrição:** Este endpoint permite a validação de um número de CPF fornecido como parâmetro. Ele retorna uma resposta indicando se o CPF é válido ou não, com base nas regras de validação estabelecidas.

**Requisição:**

- **Método:** GET
- **Parâmetros:**
  - `cpf` (string) - O número de CPF a ser validado.

**Exemplo de Requisição:**

`GET /validarcpf/12345678909`

**Resposta:**

```json
{
  "valid": true,
  "message": "O CPF é válido."
}
```

### Gerar CPF

**Endpoint:** `/gerarcpf`

**Descrição:** Este endpoint permite a geração de um novo número de CPF válido de forma aleatória. O CPF gerado é retornado como resposta.

**Requisição:**

- **Método:** GET

**Exemplo de Requisição:**
`GET /gerarCpf`

**Resposta:**

```json
{
    "cpf": "123.456.789-09",
    "cpf_formatado": "12345678909"
}
```

### Validar CNPJ

**Endpoint:** `/validarcnpj/:cnpj`

**Descrição:** Este endpoint permite a validação de um número de CNPJ fornecido como parâmetro. Ele retorna uma resposta indicando se o CNPJ é válido ou não, com base nas regras de validação estabelecidas.

**Requisição:**

- **Método:** GET
- **Parâmetros:**
  - `cnpj` (string) - O número de CNPJ a ser validado.

**Exemplo de Requisição:**

`GET /validarcnpj/12345678000101`

**Resposta:**

```json
{
  "valid": true,
  "message": "O CNPJ é válido."
}
```

### Gerar CNPJ

**Endpoint:** `/gerarcnpj`

**Descrição:** Este endpoint permite a geração de um novo número de CNPJ válido de forma aleatória. O CNPJ gerado é retornado como resposta.

**Requisição:**

- **Método:** GET

**Exemplo de Requisição:**
`GET /gerarcnpj`

**Resposta:**

```json
{
    "cnpj": "12.345.678/0001-01",
    "cnpj_formatado": "12345678000101"
}
```


## Considerações Finais

Esta API oferece a validação e geração de CPF e CNPJ com base nas regras de validação estabelecidas, tornando-a uma ferramenta útil para diversas aplicações. Certifique-se de utilizar os endpoints corretamente de acordo com suas necessidades.

Para obter mais informações sobre as regras de validação utilizadas nesta API, consulte [Regra de Validação para CPF e CNPJ](https://souforce.cloud/regra-de-validacao-para-cpf-e-cnpj-no-salesforce/).

Aproveite os recursos desta API e integre-a em seus projetos para facilitar a validação e geração de CPF e CNPJ.
