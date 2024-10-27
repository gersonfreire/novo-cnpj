# Novo CNPJ Brasil

## Sobre

Para facilitar a vida dos dev's brasileiros, resolvi concentrar tudo aqui, obtido do site original onde está a notícia:

[CNPJ vai mudar em 2026 e Serpro libera códigos para ajudar na transição • Brasil • Tecnoblog](https://tecnoblog.net/noticias/cnpj-vai-mudar-em-2026-e-serpro-libera-codigos-para-ajudar-na-transicao/)

Também existe um esforço bacana de criar uma API que já está funcional, de outro colega, cujos créditos eu cito abaixo também, mas disponibilizei como "fork" no link abaixo:

[gersonfreire/API-ValidadorCPF: API Publica para validar, gerar e futuramente consultar CPFs e CNPJs](https://github.com/gersonfreire/API-ValidadorCPF)

Créditos do repositório original: [theofurtado05 (Theo Furtado Mauricio)](https://github.com/theofurtado05), obrigado Theo!

## Usando

Na pasta "src" tem uma subpasta para cada linguagem, em cada pasta existe um README específico para cada linguagem, escolha a sua, apenas clone e divirta-se.

## Versão em C# implementada (não existe no SERPRO)

### Arquivos

- `validador.cs` -> classe com os métodos para cálculo do DV e validação de CNPJ alfanumérico

### Compilando o código para teste

**No Windows:**

```sh
csc [validador.cs](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cgerso%5C%5Csource%5C%5Crepos%5C%5Cgersonfreire%5C%5Cnovo-cnpj%5C%5Csrc%5C%5Cdotnet%5C%5Cvalidador.cs%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fgerso%2Fsource%2Frepos%2Fgersonfreire%2Fnovo-cnpj%2Fsrc%2Fdotnet%2Fvalidador.cs%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fgerso%2Fsource%2Frepos%2Fgersonfreire%2Fnovo-cnpj%2Fsrc%2Fdotnet%2Fvalidador.cs%22%2C%22scheme%22%3A%22file%22%7D%7D) dv.cs
```
