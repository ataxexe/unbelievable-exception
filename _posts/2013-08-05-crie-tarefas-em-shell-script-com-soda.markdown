---
layout: post
title:  Crie tarefas em Shell Script com SODA
category: Shell Script
tags: shell linux soda
---

Quem gosta de terminal acaba se rendendo aos Shell Scripts quando precisa de algumas tarefas
pontuais. Eu, particularmente, tinha uma porrada deles para diversas funções... e eles acabaram
virando uma zona em pouco tempo. A desordem foi tanta que eu comecei a pensar em uma forma de
organizar os scripts e, de quebra, ainda ter uma base para coisas úteis e comuns a eles. O resultado
foi um projeto chamado [SODA][] e um pouco mais de diversão no terminal do meu Linux.

## Instalação

Basta clonar o [repositório][soda] no github ou [baixar][soda_download] o conteúdo dele. Coloque o
executável `soda` no seu **PATH** e uma variável chamada **SODA_HOME** apontando para o diretório do
SODA e pronto!

## Como criar as tarefas

Como o intuito do SODA é criar tarefas globais, a organização se dará de forma... *global*! Basta
criar a pasta `~/.soda/scripts/common` e enfiar lá dentro seus Shell Scripts. Cada função
extenalizada será passível de ser chamada pela linha de comando. Para externalizar uma função, basta
usar a função *task*:

{% highlight sh %}
task faz-qualquer-coisa
faz_qualquer_coisa() {
  echo "Fiz qualquer coisa"
}
{% endhighlight %}

Com isso, você pode executá-la com o comando `soda faz-qualquer-coisa`. Perceba que o nome da função
está com *underlines* e o nome passado ao *task* está com hífens. O SODA converte, por padrão, os
*underlines* para hífens para tornar mais fácil a digitação (o hífen usa um toque no teclado,
enquanto o *underline* usa dois). Você pode, no entanto, registrar a função com seu nome normal, se
preferir.

## Namespaces

Para auxiliar na organização, o SODA trabalha com um conceito de namespaces bem simplificado. No
diretório `~/.soda/scripts`, qualquer diretório diretamente abaixo dele é tratado como um
*namespace* e somente é carregado para executar a tarefa que o pertence. Isso evita alguns problemas
de nomenclatura nas funções. Para chamar uma tarefa de um *namespace* diferente de **common** (
*namespace* padrão que **sempre** será carregado), use um **"."**.

    $ soda namespace.task

## Parâmetros

### Parâmetros de Tarefas

Qualquer tarefa pode receber parâmetros e é somente necessário passá-los pela linha de comando.

{% highlight sh %}
task imprimir-parametro
imprimir_parametro() {
  echo "$1"
}
{% endhighlight %}

    $ soda imprimir-parametro PARAMETRO
    PARAMETRO

### Parâmetros Globais

Os parâmetros globais, por convenção, devem ser passados com o prefixo **"--"** em qualquer parte da
linha de comando, eles são processados ao início e seus valores serão colocados na variável com o
nome do parâmetro em **CAIXA ALTA** e substituindo os *underlines* por hífens. Para interceptar uma
definição de parâmetro, utilize a função *parameter*.

{% highlight sh %}
# não é necessário utilizar o prefixo para definir o parâmetro
parameter version && {
  echo "0.1.2.3-beta04_build201302034913"
  exit 0
}

# os parâmetros podem receber valores com "=" (utilize "[]" para valores opcionais)
parameter max "MAXIMO" "Define o maximo ..."
# ...
echo $MAX

# também podem ter valor padrão
parameter min "MINIMO" 0 "Define o minimo ..."
# ...
echo $MIN
{% endhighlight %}

    $ soda --version
    $ soda --max ...
    $ soda --min=1 ...

## Bash Completion

Como não poderia faltar em um bom programa de terminal, o SODA suporta *bash completion* para os
nomes das tarefas e parâmetros. Para criar uma função customizada para sua tarefa, crie-a com o nome
*TAREFA_bash_completion*.

{% highlight sh %}
tarefa_bash_completion() {
  # indica que o primeiro parâmetro foi inserido
  if [[ -f "$1" ]]; then
    # mostra sugestões para o segundo parâmetro
    echo "html pdf docx odt"
  else
    # retornar diferente de zero mostra as sugestões padrão (arquivos e diretórios)
    exit 1
  fi
}
{% endhighlight %}

Para ativar as sugestões, utilize o comando `source $SODA_HOME/soda-bash-completion`. Você pode
adicioná-lo ao seu *.bash_profile* também!

O intuito deste post não é documentar o projeto (mal tenho tempo pra documentá-lo no github). Se
quiser aprender mais, não deixe de ver a [página][soda] do projeto e os [exemplos][soda_examples].

[soda]: <https://github.com/ataxexe/soda>
[soda_download]: <https://github.com/ataxexe/soda/archive/master.zip>
[soda_examples]: <https://github.com/ataxexe/soda/tree/master/examples>
