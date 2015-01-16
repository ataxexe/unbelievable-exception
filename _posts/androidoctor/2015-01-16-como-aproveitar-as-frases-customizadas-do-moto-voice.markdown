---
layout: post
title:  "Como aproveitar as frases customizadas do Moto Voice"
category: AndroiDoctor
author: Ataxexe
images: /assets/images/moto-voice
tags:
- tasker
- moto x
- moto voice
- chapolin colorado
- customização
---

Esses dias eu estava brincando com o reconhecimento de vox do Moto X 2014 e fiquei pensando em uma frase bacana pra usar. A versão mais nova do Moto Voice permite customizar a frase, ou seja, em vez do chato "Ok, Moto X", podemos usar algo mais interessante e, utilizando o [Tasker][], a coisa pode ficar ainda mais legal.

## Como assim?

O Tasker pode interceptar a entrada e saída em um aplicativo em primeiro plano^[Digo entrada e saída pois o Android não fecha os aplicativos, por isso a memória RAM cheia não é necessariamente um problema (e é por isso que [não devemos usar Task Killers]({% post task-killer %})).] e executar qualquer coisa.

## Tá, mas e qual é a utilidade disso

Bom, eu estava pensando em alguma frase legal enquanto assistia um dos meus programas favoritos: Chapolin Colorado...

## Hummmm...suspeitei desde o princípio

Não contavam com minha astúcia!

A princípio eu tive a ideia de usar a tão famosa frase "Oh! E agora quem poderá me defender?", mas ela é muito grande e o "defender" não combina muito com a ideia do Moto Voice. Por causa disso, troquei o "defender" por "ajudar" (que não deixa de ser uma frase usada na série) e registrei apenas a frase "Quem poderá me ajudar?". Faltava agora interceptar o Moto Voice.

Ao registrar um perfil no Tasker, podemos usar um aplicativo como condição, mas o Moto Voice não está lá inicialmente. Basta socar o dedinho na opção **All** e ele aparecerá.

![Não me perguntem o porquê de dois "Moto"]({{ page.images }}/app.png)

Para cadastrar a tarefa, basta usar uma notificação de som e escolher o desejado.

![Eeeeeeeeuuu!!!!!]({{ page.images }}/task.png)

Caso queira um som para quando o Moto Voice terminar de escutar seu comando, utilize uma tarefa de saída da mesma maneira que a de entrada.

![Meu perfil ficou assim]({{ page.images }}/profile.png)

O resultado da minha customização você pode conferir no vídeo abaixo:

{% youtube 5AHjwa1AcAQ %}

## E onde você pegou os sons do Chapolin?

Bom, eu tinha um vídeo aqui, converti em mp3 e cortei as partes direto no celular usando o [Ringtone Maker][], ele é bem legal e vale a pena o download.

Ah! E não deixe de ver mais ideias para [usar e abusar do Tasker]({% post tasker-ideias %})! Sigam-me os bons!

[tasker]: <{% play_store net.dinglisch.android.taskerm %}>
[ringtone maker]: <{% play_store com.herman.ringtone %}>
