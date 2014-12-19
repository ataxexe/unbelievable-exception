---
layout: post
title:  "Automatizando seu Mac com o Keyboard Maestro"
category: Latrina Digital
author: Ataxexe
tags:
- mac
- automação
- keyboard maestro
- apple script
- shell script
---

Como um maníaco por automação, já era de se esperar que um dos meus aplicativos preferidos para o Mac seja o [Keyboard Maestro][]. Não que o Automator seja ruim, mas o Keyboard Maestro é animal!

No Keyboard Maestro, você define macros e pode dividí-las em grupos, que podem ser ativados em determinadas condições ou aplicativos. O interessante é que as macros podem ser ativadas de diversas formas, sendo que a mais notável é a combinação de teclas (*hot key*). Essa combinação permite incluir funcionalidades extras em quaisquer aplicativos e o fato dele permitir a execução de *shell scripts* e *apple scripts* só deixa a coisa ainda mais divertida.

## Melhorando o Finder

Tomaremos como exemplo o aplicativo Finder. Algumas lacunas podem ser preenchidas facilmente com *hot keys* e um pouco de *scripts*. Exemplo: criar um novo arquivo. Tudo bem que podemos abrir um aplicativo de edição, escrever um monte de baboseiras e gravar num arquivo, mas algumas pessoas (assim como eu) preferem ter a possiblidade de criar o arquivo em branco e o Keyboard Maestro permite isso. Criaremos, então, um grupo de macros ativo somente na aplicação Finder.

Dentro desse grupo, podemos criar a seguinte macro:

**Trigger**: *hot key* a escolha (eu usei CMD+Option+Control+N)

**Actions**:

#. **Prompt** com variável para escolher o nome do arquivo (*Filename*, por exemplo).
#. **AppleScript** para obter a pasta atual do Finder e criar o arquivo com o nome escolhido. O *script* para isso é:

~~~applescript
tell application "Finder" to set currentDir to (target of front Finder window) as text
do shell script "cd " & (quoted form of POSIX path of currentDir) & "; touch $KMVAR_Filename"
~~~

O pulo do gato está justamente no `$KMVAR_Filename`. O Keyboard Maestro permite o acesso às variáveis no ambiente *shell* usando a notação **KMVAR_** + *nome da variável*. Feito isso, basta ir no Finder e testar a nova funcionalidade incluída.

Podemos aproveitar essa macro e criar uma para, além de criar o arquivo, inserir o conteúdo da *clipboard* nele. A macro é semelhante a anterior, com a diferença no *AppleScript* necessário:

~~~
tell application "Finder" to set currentDir to (target of front Finder window) as text
do shell script "cd " & (quoted form of POSIX path of currentDir) & "; pbpaste > $KMVAR_Filename"
~~~

Note o comando `pbpaste`, ele cospe o conteúdo da *clipboard*, junte-o ao `> $KMVAR_Filename` e você terá esse conteúdo gravado no arquivo escolhido.

Outra macro que gosto de fazer é a de abrir arquivos em determinados editores. Para isso, basta usar a *action* **Open the Finder Selection** e escolher o programa desejado.

## Mudando o layout do teclado

Eu demorei um pouco pra me acostumar à digitação no Mac, o teclado no layout internacional ajuda, mas alguns recursos como a acentuação acabam quebrando funcionalidades de alguns editores de texto com o SublimeText e aplicativos de terminal como o iTerm. Isso é resolvido facilmente mudando-se o *layout* do teclado ao abrir o SublimeText (ou outro aplicativo similar) mas isso é um saco pra fazer manualmente. O Keyboard Maestro consegue fazer isso automaticamente, bastando apenas definir duas macros simples.

A primeira macro é para mudar o layout para o **U.S.**, que permite a utilização do Sublime & CIA. Essa macro deve ser ativada junto com as aplicações desejadas. A macro contém apenas o seguinte *AppleScript*:

~~~
set theInputSource to "U.S."
tell application "System Events" to tell process "SystemUIServer"
	click (menu bar item 1 of menu bar 1 whose description is "text input")
	click menu item theInputSource of menu 1 of result
end tell
~~~

A segunda macro deve ser ativada ao sair das aplicações que constam na primeira macro e é composta do seguinte *AppleScript*:

~~~
set theInputSource to "U.S. International - PC"
tell application "System Events" to tell process "SystemUIServer"
	click (menu bar item 1 of menu bar 1 whose description is "text input")
	click menu item theInputSource of menu 1 of result
end tell
~~~

Com isso não é mais necessário ficar alterando os layouts na mão.

## Bloquear o computador

Por algum motivo maluco, não é possível bloquear o Mac OS, uma solução para isso é criar uma macro que ative a proteção de tela ao pressionar um conjunto de teclas e configurar a proteção de tela para exigir senha ao sair.

## Corrigir aplicações bugadas

Eu gosto muito do SafeInCloud e o uso para gerenciar minhas senhas. O problema é que ele tem um bug meio louco que não permite que o sistema feche-o ao desligar o computador. Para solucionar isso, criei uma macro para que, ao pressionar CMD+Q (o atalho padrão para encerrar os aplicativos), execute o seguinte *shell script*:

~~~
killall SafeInCloud
~~~

Claro que essa macro ficou em um grupo separado ativo somente na aplicação SafeInCloud

---

Como já deu pra perceber, o Keyboard Maestro pode não só incluir funcionalidades extras e corrigir problemas em aplicativos como criar automações preciosas pra agilizar as coisas. Eu tenho algumas cartas na manga pra usar com ele e provavelmente elas devem ser mostradas por aqui em futuros posts.

[keyboard maestro]: http://www.keyboardmaestro.com