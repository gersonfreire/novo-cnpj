# Novo CNPJ Brasil

## Sobre

Para facilitar a vida dos dev's brasileiros, resolvi concentrar tudo aqui

Também publiquei um artigo em [Novo CNPJ: dev, prepare-se para trabalhar · telegram · TabNews](https://www.tabnews.com.br/telegram/novo-cnpj-dev-prepare-se-para-trabalhar)

Mas o site original, onde está a notícia é o que segue abaixo:

[CNPJ vai mudar em 2026 e Serpro libera códigos para ajudar na transição • Brasil • Tecnoblog](https://tecnoblog.net/noticias/cnpj-vai-mudar-em-2026-e-serpro-libera-codigos-para-ajudar-na-transicao/)

Também existe um esforço bacana de criar uma API que já está funcional, de outro colega, cujos créditos eu cito abaixo também, que disponibilizei como "fork" no link abaixo:

[Código fonte da API Publicada para validar, gerar e futuramente consultar CPFs e CNPJs](https://github.com/gersonfreire/API-ValidadorCPF)

Créditos do repositório original: [theofurtado05 (Theo Furtado Mauricio)](https://github.com/theofurtado05), obrigado Theo!

## Endpoints Disponíveis

[URL base da API publicada](https://apivalida.monitor.eco.br:9002/ "URL Base")

## Usando

Na pasta "src" tem uma subpasta para cada linguagem, em cada subpasta existe um README específico para cada linguagem, escolha a sua, apenas clone e divirta-se.

## Versão em C# implementada (não existe no SERPRO)

#### Arquivos

- `validador.cs` -> classe com os métodos para cálculo do DV e validação de CNPJ alfanumérico

---

### Versão em C++ implementada (ausente no SERPRO)

#### Pasta e arquivos

src\c++ansi\cnpj.cpp

Veja o arquivo src\c++ansi\readme.md para maiores detalhes
