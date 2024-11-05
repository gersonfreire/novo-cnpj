# Validador de CNPJ em C#

Este projeto oferece um validador de CNPJ escrito em C# utilizando .NET. Ele permite validar e gerar números de CNPJ com base nas regras de validação estabelecidas.

## Estrutura do Projeto

src/
├── dotnet/
│   ├── dv.cs
│   ├── validador.cs
│   ├── .gitignore
│   └──

README.md

└── ...

## Pré-requisitos

- .NET SDK instalado (versão 5.0 ou superior)
- Visual Studio Code instalado
- Extensão do C# para Visual Studio Code

## Configuração do Ambiente

1. **Clone o repositório**:

   ```sh
   git clone https://github.com/seu-usuario/novo-cnpj.git
   cd novo-cnpj/src/dotnet
   ```
2. **Restaurar as dependências**:

   ```sh
   dotnet restore
   ```

## Executando o Validador

1. **Compilar o projeto**:
   No terminal integrado do VS Code, execute:

   ```sh
   dotnet build
   ```
2. **Executar o projeto**:
   No terminal integrado do VS Code, execute:

   ```sh
   dotnet run --project validador.cs -- -V "12.345.678/0001-95"
   ```

## Testes

1. **Executando os testes**:
   No terminal integrado do VS Code, execute:
   ```sh
   dotnet test
   ```

## Debugging no VS Code

1. **Configuração de Debug**:
   O VS Code já está configurado para debugging. Abra o arquivo `.vscode/launch.json` para verificar as configurações.
2. **Inicie o Debug**:
   Pressione `F5` ou vá para a aba de Run and Debug e clique em "Start Debugging".

## Estrutura do Código

### `dv.cs`

Este arquivo contém a classe `DigitoVerificador` que é responsável por calcular os dígitos verificadores do CNPJ.

### `validador.cs`

Este arquivo contém a classe `CNPJ` que é responsável por validar e gerar CNPJs.

## Exemplo de Uso

### Validar CNPJ

Para validar um CNPJ, execute o seguinte comando:

```sh
dotnet run --project validador.cs -- -V "12.345.678/0001-95"
```

### Gerar Dígito Verificador

Para gerar o dígito verificador de um CNPJ, execute o seguinte comando:

```sh
dotnet run --project validador.cs -- -DV "12.345.678/0001"
```

## Considerações Finais

Este projeto oferece uma implementação em C# para validação e geração de CNPJ com base nas regras de validação estabelecidas. Certifique-se de utilizar os comandos corretamente de acordo com suas necessidades.

Para obter mais informações sobre as regras de validação utilizadas neste projeto, consulte [Regra de Validação para CPF e CNPJ](https://souforce.cloud/regra-de-validacao-para-cpf-e-cnpj-no-salesforce/).

Aproveite os recursos deste projeto e integre-o em seus sistemas para facilitar a validação e geração de CNPJ.
