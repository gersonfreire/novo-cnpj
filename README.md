# Novo CNPJ Brasil

## Sobre

Para facilitar a vida dos dev's brasileiros, resolvi concentrar tudo aqui

Também publiquei um artigo em [Novo CNPJ: dev, prepare-se para trabalhar · telegram · TabNews](https://www.tabnews.com.br/telegram/novo-cnpj-dev-prepare-se-para-trabalhar)

Mas o site original, onde está a notícia é o que segue abaixo:

[CNPJ vai mudar em 2026 e Serpro libera códigos para ajudar na transição • Brasil • Tecnoblog](https://tecnoblog.net/noticias/cnpj-vai-mudar-em-2026-e-serpro-libera-codigos-para-ajudar-na-transicao/)

## Usando

*Na pasta "src" existem subpastas para cada linguagem que já foi previamente implementada pelo SERPRO, em cada subpasta existe um README específico para cada linguagem, escolha a sua, apenas clone e divirta-se.*

**Recomendamos usar o VS Code e abrir a pasta inteira nele, pois as orientações de execução para cada linguagem, nos READMEs respectivos, serão voltadas para essa ferramenta.**

### **Implementações originais do SERPRO:**

* ***[TypeScript](src/typescript/)***
* ***[JavaScript](src/javascript/)***
* ***[Java](src/java/)***
* ***[Python](src/python/)***
  * *[Aplicação console](https://github.com/gersonfreire/novo-cnpj/tree/main/src/python)*
  * *[API REST](https://github.com/gersonfreire/novo-cnpj/tree/main/src/python/api)*
  * *[Bot Telegram](https://github.com/gersonfreire/novo-cnpj/tree/main/src/python/bot)*

---

### Linguagens não implementadas pelo SERPRO

***Como o objetivo aqui é facilitar a vida de todos os dev´s brasileiros, resolvi implementar em diversas linguagens e testar cada um do códigos fontes em seus respectivos ambientes típicos de execução, ou seja, montar um ambiente para cada uma das linguagens em que foi implementado e testar o executável, inclusive com correções e melhorias evolutivas, para garantir a confiabilidade e segurança do código fonte. Se você encontrar algum problema, não hesite em abrir um issue no Github do projeto.***

***Inclusive, pretendemos disponibilizar esses ambientes em containers para os senhores. Também disponibilizamos uma API e um chatbot que implementam os mesmos algoritmos, para os mais "hardcores".***

***As versões nas linguagens não implementadas oringalmente pelo SERPRO, que também podem ser encontradas nas sub-pastas da pasta "SRC", com respectivos READMEs, são as seguintes:***

* ***[C# (dotnet)]()***
* ***[C++](src/c++ansi/)***
* ***[COBOL](src/cobol/)***
* ***[Ruby](src/ruby/)***
* ***[ADVPL (Totvs/Protheus)](src/advpl/)***

---

### API de Validação e Geração de CPF e CNPJ

Na ***[pasta API NodeJs](src/javascript/api)*** existe uma API escrita em NodeJs, que oferece endpoints para validar e gerar números de CPF e CNPJ com base nas regras de validação estabelecidas. As regras de validação utilizadas nesta API seguem os cálculos descritos em [Regra de Validação para CPF e CNPJ](https://souforce.cloud/regra-de-validacao-para-cpf-e-cnpj-no-salesforce/).

Agradeço ao [theofurtado05](https://github.com/theofurtado05), autor do repositório original desta API. Somente a publicação de deploy original [URL original](https://api-validador-cpf.vercel.app/) não está mais ativa. Caso você queira usar a API publicada, segue a URL base da publicação nova, funcionando, sem restrição:

[URL da API publicada e ativa](https://apivalida.bigvps.com.br:9090/validarCpf/19379041721)

Créditos do repositório original: [theofurtado05 (Theo Furtado Mauricio)](https://github.com/theofurtado05), obrigado Theo!

[SDK para o Portal SOA WebServices](https://github.com/gersonfreire/soawebservices)

---

### Bot do Telegram, publicado, que valida CPF usando o código fonte da pasta `src\python\bot:`

[Clique aqui para acessar o bot
](https://t.me/OpenGovBot)

---

### Sugestões

Para sugerir alguma melhoria ou nova funcionalidade, por favor, abra um novo issue em : [Issues · gersonfreire/novo-cnpj](https://github.com/gersonfreire/novo-cnpj/issues)

Ou entre em um dos grupos de discussão: [grupo telegram](https://t.me/novo_cnpj) ou [o Canal no WhatsApp](https://whatsapp.com/channel/0029VaulV6cE50UZTgjqX40Z)

```

```

---
