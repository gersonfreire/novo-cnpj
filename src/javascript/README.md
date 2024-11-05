# API de Validação e Geração de CPF e CNPJ

Esta API oferece endpoints para validar e gerar números de CPF e CNPJ com base nas regras de validação estabelecidas. As regras de validação utilizadas nesta API seguem os cálculos descritos em [Regra de Validação para CPF e CNPJ](https://souforce.cloud/regra-de-validacao-para-cpf-e-cnpj-no-salesforce/).

## Pré-requisitos

* Node.js instalado (versão 14 ou superior)
* Visual Studio Code instalado
* Extensão do Node.js para Visual Studio Code

## Configuração do Ambiente

1. **Clone o repositório**:
   ```sh
   git clone https://github.com/seu-usuario/novo-cnpj.git
   cd novo-cnpj/src/javascript/api
   ```

2. **Instale as dependências**:

   ```sh
   npm install
   ```
3. **Configuração do arquivo `.env`**:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   PORT=9002
   SSL_KEY_PATH=path/to/ssl/key
   SSL_CERT_PATH=path/to/ssl/cert
   ```

## Executando a API

1. **Inicie o servidor**:
   No terminal integrado do VS Code, execute:

   ```sh
   npm start
   ```
2. **Acesse a API**:
   A API estará disponível em `http://localhost:9002`.

## Testes

1. **Executando os testes**:
   No terminal integrado do VS Code, execute:
   ```sh
   npm test
   ```

## Debugging no VS Code

1. **Configuração de Debug**:
   O VS Code já está configurado para debugging. Abra o arquivo `.vscode/launch.json` para verificar as configurações.
2. **Inicie o Debug**:
   Pressione `F5` ou vá para a aba de Run and Debug e clique em "Start Debugging".

## Endpoints Disponíveis

### Validar CPF

**Endpoint:** `/validarCpf/:cpf`

**Descrição:** Este endpoint permite a validação de um número de CPF fornecido como parâmetro. Ele retorna uma resposta indicando se o CPF é válido ou não, com base nas regras de validação estabelecidas.

**Requisição:**

- **Método:** GET
- **Parâmetros:**
  - `cpf` (string) - O número de CPF a ser validado.

**Exemplo de Requisição:**

```sh
GET /validarCpf/12345678909
```

**Resposta:**

```json
{
  "valid": true,
  "message": "O CPF é válido."
}
```

### Gerar CPF

**Endpoint:** `/gerarCpf`

**Descrição:** Este endpoint permite a geração de um novo número de CPF válido de forma aleatória. O CPF gerado é retornado como resposta.

**Requisição:**

- **Método:** GET

**Exemplo de Requisição:**

```sh
GET /gerarCpf
```

**Resposta:**

```json
{
  "cpf": "123.456.789-09",
  "cpf_formatado": "12345678909"
}
```

### Validar CNPJ

**Endpoint:** `/validarCnpj/:cnpj`

**Descrição:** Este endpoint permite a validação de um número de CNPJ fornecido como parâmetro. Ele retorna uma resposta indicando se o CNPJ é válido ou não, com base nas regras de validação estabelecidas.

**Requisição:**

- **Método:** GET
- **Parâmetros:**
  - `cnpj` (string) - O número de CNPJ a ser validado.

**Exemplo de Requisição:**

```sh
GET /validarCnpj/12345678000101
```

**Resposta:**

```json
{
  "valid": true,
  "message": "O CNPJ é válido."
}
```

### Gerar CNPJ

**Endpoint:** `/gerarCnpj`

**Descrição:** Este endpoint permite a geração de um novo número de CNPJ válido de forma aleatória. O CNPJ gerado é retornado como resposta.

**Requisição:**

- **Método:** GET

**Exemplo de Requisição:**

```sh
GET /gerarCnpj
```

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
