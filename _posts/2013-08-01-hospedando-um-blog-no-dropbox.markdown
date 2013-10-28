---
layout: post
title:  Hospedando um blog no Dropbox
category: Dicas
tags:
  - dropbox
  - jekyll
author: Ataxexe
---

Hospedar um blog hoje é mais fácil do que apanhar do Chuck Norris, qualquer um pode se cadastrar
em sites como o Blogspot ou o Wordpress e começar a escrever. O processo geralmente é o mesmo e é
chato pra quem não gosta do editor de texto do blog e prefere uma abordagem mais desktop da coisa.
Uma solução legal que encontrei foi hospedar o blog direto na minha pasta pública do Dropbox,
podendo, assim, usar o editor que me der na telha.

Agora vem a questão: se o Dropbox apenas serve conteúdo estático, como poderemos colocar algo
*supostamente* dinâmico nele?

A resposta é simples: **não tem como!!** Pra fazer o blog funcionar pelo Dropbox, é preciso <del>uma
gambiarra</del> que ele seja estático, ou seja, os posts devem ser convertidos em *html* e colocados
no Dropbox (assumindo, claro, que você não queira fazer tudo na mão). É aí que entram dois camaradas:

* [Markdown][]
* [Jekyll][]

O Markdown é uma linguagem de marcação muito simples e fácil de ser lida e compreendida. Com ela
poderemos escrever os posts de forma simples e depois converter para *html*. É aqui que o jekyll
entra.

O jekyll, basicamente, é uma engine que transforma seus posts em *markdown* para o formato *html*.
Além da facilidade de editar os posts de uma forma muito mais *geek*, o processo é muito rápido e
divertido.

Agora vem os contras:

* Como o conteúdo é estático, nada de formulários ou enquetes ou qualquer outra coisa do tipo
  dentro do blog (mas nada o impede de criar fora e referenciar pelo blog)
* A url para acessar o blog fica meio comprida e nada prática (encurtadores de url são muito úteis
  aqui)

Tendo isso tudo em mente, você só precisará baixar o jekyll, dar uma olhada em como ele funciona e
se atentar para o pulo do gato abaixo.

Quando você cria um blog novo no jekyll com o comando `jekyll new meu-blog-do-cacete`, uma estrutura
padrão e você pode ver que o arquivo *_layouts/default.html* tem um trecho parecido com isto:

~~~html
<!-- syntax highlighting CSS -->
<link rel="stylesheet" href="/css/syntax.css">

<!-- Custom CSS -->
<link rel="stylesheet" href="/css/main.css">
~~~

Caso você hospede o blog no dropbox, você terá um link imenso até chegar à raiz do blog, então, vai
precisar editar essa parte. Você pode martelar diretamente o caminho, ficando mais ou menos assim:

~~~html
<!-- syntax highlighting CSS -->
<link rel="stylesheet" href="https://dl.dropboxusercontent.com/u/SEU_ID/blog/css/syntax.css">

<!-- Custom CSS -->
<link rel="stylesheet" href="https://dl.dropboxusercontent.com/u/SEU_ID/blog/css/main.css">
~~~

O problema é se você quiser mudar a url ou até mesmo testar localmente (já já mostro como fazer),
a solução mais bonita é colocar o caminho do blog no arquivo `_config.yml` e mudar o *html* para
algo {% comment %} mais ou menos {% endcomment %} assim:

~~~html
{% raw %}
<!-- syntax highlighting CSS -->
<link rel="stylesheet" href="{{ site.url }}/css/syntax.css">

<!-- Custom CSS -->
<link rel="stylesheet" href="{{ site.url }}/css/main.css">
{% endraw %}
~~~

E no seu arquivo de configuração, coloque o seguinte trecho:

~~~yaml
url: https://dl.dropboxusercontent.com/u/SEU_ID/CAMINHO_DO_BLOG
~~~

Para saber como encontrar a url, basta colocar alguma coisa na sua pasta pública do Dropbox e pegar
o link, você verá que ele é composto das seguintes partes:

    https://dl.dropboxusercontent.com/u/SEU_ID/CAMINHO-DO-ARQUIVO-NA-PASTA-PUBLIC

Com isso fica fácil. No meu caso, por exemplo, meu *id* é **16755042** e coloquei o blog na pasta
*Public/blog/unbelievable-exception*, então, minha url ficará assim:

    https://dl.dropboxusercontent.com/u/16755042/blog/unbelievable-exception

Agora vem a última parte: o jekyll precisa gerar o blog na pasta pública do Dropbox. O padrão dele é
gerar na pasta *_site*, que não é o que queremos, logo, vamos mapear a pasta no arquivo de
configuração `_config.yml`:

~~~yaml
url: https://dl.dropboxusercontent.com/u/2345678/CAMINHO_DO_BLOG
destination: SUA_PASTA_DO_DROPBOX/Public/CAMINHO_DO_BLOG
~~~

Note que o caminho do blog deve ser o mesmo nas chaves **url** e **destination**. Com isso tudo
feito, basta rodar o comando `jekyll build`, aguardar o upload e pronto! Seu blog estará no Dropbox.

Para testar localmente, você só precisa remover a chave **destination** e trocar a chave **url**
por *http://localhost:4000*. Trocar isso a todo instante será uma verdadeira bagunça, então, sugiro
que você tenha um arquivo de configuração local (algo do tipo `_config_local.yml`) com essas
configurações e, para testar o blog localmente, rode o comando
`jekyll serve --config _config.yml,_config_local.yml`.

Ah! Não se esqueça de adicionar o */index.html* nos links da página inicial.

~~~html
{% raw %}
<h1 class="title"><a href="{{ site.url }}/index.html">{{ site.name }}</a></h1>
{% endraw %}
~~~

[markdown]: <http://daringfireball.net/projects/markdown/syntax>
[jekyll]:   <http://jekyllrb.com>
