# Validador de CNPJ e CPF em linguagem Ruby

Este projeto é um validador de CNPJ e CPF escrito em Ruby. Ele solicita ao usuário que insira um CNPJ ou CPF na console e retorna se o número é válido ou inválido.

## Como Usar

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/seu-usuario/validador-cnpj-cpf.git
   cd validador-cnpj-cpf
   ```
2. **Execute o script:**

   ```sh
   ruby validador.rb
   ```
3. **Digite o CNPJ ou CPF para validação:**

   O script solicitará que você insira um CNPJ ou CPF. Digite o número e pressione `Enter`.
4. **Veja o resultado:**

   O script retornará se o CNPJ ou CPF é válido ou inválido.

## Estrutura do Código

- **remove_non_numeric:** Remove caracteres não numéricos de uma string.
- **calculate_digit:** Calcula o dígito verificador com base nos números e pesos fornecidos.
- **validar_cnpj:** Valida um CNPJ.
- **validar_cpf:** Valida um CPF.
- **main:** Função principal que interage com o usuário e chama as funções de validação.

## Exemplo de Uso

```sh
Digite o CNPJ ou CPF para validação:
12345678909
CPF válido.
```

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
