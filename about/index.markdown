---
layout: page
title: Sobre
---

## Quem sou eu

Sou o **Marcelo Guimarães**, mais conhecido por **Ataxexe**. Sou um maluco rabugento que gosta de programar e tenta escrever alguma coisa útil neste blog.

Apesar de ter entrado bem tarde no mundo da programação (comecei com 20 anos, bem tarde se comparado a outros malucos como eu), sempre fui encantado por computadores (jogava demais no MSX do meu avô) e meu brinquedo preferido era uma calculadora. Minha relação com a programação se deu quando eu resolvi largar o curso de Filosofia pra estudar programação, um maluco igual a mim ficou sabendo e me convidou pra estudar na empresa dele. Desde então o mundo não foi mais o mesmo (tanto pra ele como pra mim).

O interessante de ter aprendido a programar em uma empresa recheada de gente louca por programação foi que eu pude aprender as coisas orientadas ao mundo real. E, como foram poucas as vezes em que me enfiei no meio da criação de um sistema (praticamente só trabalhei mantendo legado), tive um prato cheio pra aprender a resolver problemas oriundos de falta de perspectiva de médio e longo prazo (os contraexemplos parecem funcionar melhor do que os exemplos).

Aprendi muita coisa, também, em fóruns de discussão (apesar de, infelizmente, não serem mais os mesmos - essa geração Y está ficando muito esquisita, mas isso é assunto pra depois) e lendo sobre coisas que eu não tinha vontade alguma de usar, mas precisava saber como funcionavam.

Eu acredito que, se soubermos como as coisas funcionam, saberemos como usá-las. Por isso criei este blog e espero que aproveitem!

## Como funciona o blog

Este blog é estático, ou seja, nada de servidores de aplicação ou banco de dados, é tudo gerado pra ser um conjunto de páginas estáticas. Pra isso, utilizei o excelente [Jekyll][]. Ele cumpre bem o que promete e tem uma comunidade muito ativa por ser o cara por trás do [GitHub Pages][github-pages].

Confesso que nunca fui muito chegado em programar pra web (apesar de adorar Javascript e venerar o [jQuery][]). Por isso comecei a estudar um pouco de CSS e a relembrar o que já tinha aprendido de Javascript. A escolha do jQuery foi meio óbvia pra mim. Pra parte do CSS, acabei ficando com o [Bootstrap][], o tema [Cyborg][] do [Bootswatch][] e [Less][] (futuramente pretendo mudar pra [Sass][]). Estou aprendendo a gostar de web.

Essa galerinha me deu uma boa base pra montar um blog bem responsivo. Como sou um grande fã de dispositivos móveis (o meu primeiro blog foi o AndroiDoctor, que foi migrado pra cá porque eu não tenho saco pra usar o WordPress).

Um dos desafios em manter um blog é a organização e pra isso o Jekyll é bem flexível (até demais, pois faltam coisas básicas como geração de páginas de categorias e, por conseguinte, paginação e *feed* delas). Para isso eu criei geradores customizados e, sempre que precisava de alguma coisa (contadores de posts, por exemplo), foi só criar um plugin. Além da documentação, temos vários outros sites feitos no Jekyll cujos fontes estão liberados no GitHub, então, era só dar uma olhada pra entender como tudo funcionava e poderia ser aplicado no meu caso.

A parte de busca foi a mais legal de implementar. Como tudo é estático, eu tinha duas alternativas:

#. Redirecionar a busca pra algum motor como o Google.
#. Implementar um mecanismo em Javascript.

Claro que optei pela segunda e, pra não reinventar a roda, utilizei a biblioteca [Lunr][], que é muito simples de usar e relativamente rápida. A dificuldade era de montar o que deveria ser indexado. Indexar os títulos, a categoria e as *tags* de cada post daria uma busca muito simples e colocar o conteúdo geral dos posts levaria a um índice muito pesado pra se colocar no lado do cliente. Optei por utilizar uma pequena parte do post e mandar o Jekyll gerar um [JSON][json-indices] com os índices e montá-lo somente quando o campo de pesquisa é selecionado (por isso ele fica inativo por algum tempo, esse é o tempo necessário pra montar o índice - que varia de dispositivo para dispositivo).

Na parte dos comentários não deu pra fazer muita coisa diferente. Como não posso arquivar nada aqui, acabei utilizando o [Intense Debate][intense-debate] para os comentários. Os botões de compartilhamento foram fruto da minha preguiça (gerei-os no [ShareThis][]).

Para escrever os posts, eu utilizo um repositório secundário no Git que, ao receber um *commit*, trata logo de construir o blog e jogá-lo no meu servidor (aluguei um no [DigitalOcean][] e recomendo). Depois da bagunça, ele mesmo manda o *commit* pro [repositório][repo] central no GitHub. Tentem imaginar uma estrutura dessas usando alguma porcaria como o SVN[^csv]. Tem como, mas não é simples e prático assim.

Isso significa que o blog é OpenSource e pode servir como ajuda pra quem quiser aprender um pouco mais sobre como montar um blog estático com o Jekyll. Aproveitando a plataforma do GitHub, se você tiver sugestões de posts, pode mandá-las [aqui][issues]. Se tiver alguma melhoria, sinta-se à vontade para clonar o repositório e enviar um *pull request*.

[^csv]: CVS não, ele é ruim demais pra ser considerado uma mera porcaria.

Para os downloads, eu usei um outro domínio que aponta pra minha pasta pública no Dropbox, assim não fico versionando arquivos no blog. Quanto aos vídeos, vão ficar no [canal][youtube] do blog (se eu tiver saco pra gravá-los). Claro que não podia faltar um [Google Analytics][analytics] no meio da brincadeira!

[analytics]: <http://www.google.com/analytics/>
[bootstrap]: <http://getbootstrap.com>
[bootswatch]: <http://bootswatch.com>
[cyborg]: <http://bootswatch.com/cyborg>
[digitalocean]: <http://www.digitalocean.com>
[github-pages]: <http://pages.github.com>
[intense-debate]: <http://intensedebate.com>
[issues]: <https://github.com/ataxexe/unbelievable-exception/issues>
[jekyll]: <http://jekyllrb.com>
[json-indices]: </search.json>
[lunr]: <http://lunrjs.com>
[repo]: <https://github.com/ataxexe/unbelievable-exception>
[sass]: <http://sass-lang.com>
[sharethis]: <http://www.sharethis.com>
[youtube]: <http://www.youtube.com/user/unbelievablexception>
