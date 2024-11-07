### Validador de CNPJ em ADVPL (Totvs/Protheus)

Este projeto oferece um validador de CNPJ escrito em ADVPL para o ambiente Totvs/Protheus. Ele permite validar números de CNPJ com base nas regras de validação estabelecidas.

## Estrutura do Projeto

```
src/
 ├── advpl/  
 ├── 	ValidaCNPJ.prw 
 └── 	README.md 

```

### Pré-requisitos

- Ambiente de desenvolvimento Totvs/Protheus configurado
- Extensão do ADVPL para Visual Studio Code

## Configuração do Ambiente

1. **Clone o repositório**:

   ```sh
   git clone https://github.com/seu-usuario/novo-cnpj.git
   cd novo-cnpj/src/advpl
   ```
2. **Configuração do ambiente Totvs/Protheus** :

* Certifique-se de que o ambiente de desenvolvimento Totvs/Protheus está configurado corretamente.
* Abra o projeto no Visual Studio Code.

## Executando o Validador

1. **Compilar o código** : No terminal integrado do VS Code, execute:

   ```
   advpl compile -p -s -o ValidaCNPJ.prw
   ```
2. **Executar o programa** : No ambiente Totvs/Protheus, execute o programa `ValidaCNPJ`.

## Estrutura do Código

### `ValidaCNPJ.prw`

Este arquivo contém a lógica para validar CNPJ. Ele solicita ao usuário que insira um CNPJ e valida se é válido ou não.

#### Funções Principais

* **ValidaCNPJ** : Função principal que solicita o CNPJ ao usuário e valida se é válido ou não.
* **RemoveNonNumeric** : Função para remover caracteres não numéricos.
* **CalculateDigit** : Função para calcular o dígito verificador.
* **IsValidCNPJ** : Função para validar o CNPJ.

## Exemplo de Uso

### Validar CNPJ

Para validar um CNPJ, execute o programa `ValidaCNPJ` no ambiente Totvs/Protheus e insira o CNPJ quando solicitado.

## Considerações Finais

Este projeto oferece uma implementação em ADVPL para validação de CNPJ com base nas regras de validação estabelecidas. Certifique-se de utilizar os comandos corretamente de acordo com suas necessidades.

Para obter mais informações sobre as regras de validação utilizadas neste projeto, consulte [Regra de Validação para CPF e CNPJ](vscode-file://vscode-app/c:/Program%20Files/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).

Aproveite os recursos deste projeto e integre-o em seus sistemas para facilitar a validação de CNPJ.

### Instruções

1. **Salvar o Código:**
   * Salve o código em um arquivo chamado `ValidaCNPJ.prw`.
2. **Compilar e Executar:**
   * Compile e execute o programa no ambiente de desenvolvimento ADVPL.

Este código implementa a validação de CNPJ em ADVPL, solicitando ao usuário que insira o número na tela e retornando o resultado da validação.
