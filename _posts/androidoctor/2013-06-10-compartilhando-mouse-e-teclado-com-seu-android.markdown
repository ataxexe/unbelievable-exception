---
layout: post
title:  "Compartilhando mouse e teclado com seu Android"
category: AndroiDoctor
tags:
  - android
  - root
  - share km
  - compartilhamento
---

Era um dia normal no trabalho. Eu queria me comunicar com minha amada esposa enquanto fazia minhas tarefas diárias. Como o Google Hangouts é bloqueado por aqui, eu alternava diversas vezes entre o computador e o celular para mandar as mensagens. Como eu queria evitar a fadiga, vasculhei a Play Store em uma busca frenética por um programa que permitisse compartilhar o teclado e o mouse do meu computador no celular. Acabei encontrando o maravilhoso [Share KM][] e não poderia deixar de compartilhar.

## Precisa de root?

Não! Este é um dos aplicativos geniais que não precisam de acesso root. O motivo é relativamente simples: existe uma interface de depuração no Android chamada [ADB][] (Android Debug Bridge). Com ela, um computador pode se comunicar com o dispositivo Android (ou um emulador de dispositivo - útil para quem desenvolve aplicativos) e é por meio dela que o computador irá compartilhar o mouse e o teclado. Por causa disso, é necessário que você tenha os drivers do seu dispositivo instalados no computador, além de ativar a depuração no seu aparelho (quando você abrir o programa ele irá te aconselhar a fazer isso e mostrará um botão que o levará à tela de configuração).

## Tá! E no computador?

No computador você irá instalar um programa que irá fazer o compartilhamento. O programa pode ser baixado direto pelo [site][download] e é menor do que os virus que te mandam por email disfarçados de "fotinhas do face". Após aberto, o programa irá esperar uma comunicação via ADB e iniciará o compartilhamento automaticamente. Você pode configurar a área do monitor que gostaria que fosse usada de fronteira entre as duas telas e algumas outras coisinhas, só atente ao fato de que você deve rodar o programa *ShareKM(USB)* pois os outros dois se utilizam de outras formas de compartilhamento, a saber: Bluetooth e WiFi.

## Então vou usar o Bluetooth! Odeio cabos!

Eu também! No meu caso não daria muito certo usar o Bluetooth porque eu deixo a tela ligada o tempo todo e, por causa disso, minha bateria vai embora mais rápido do que o meu salário. Usar o cabo me dá a vantagem de manter o dispositivo carregando. Se você não tem a intenção de deixar a tela ligada, pode usar o Bluetooth ou a WiFi para o compartilhamento. O único porém é que esses modos necessitam de um aparelho [rooteado][post-root].

## Tudo bem... algumas ideias de uso?

Eu, por exemplo, o uso para:

- Bate papo
- Editor de imagem
- Navegar na internet
- Aplicativo de banco
- Terminal

Além disso, usar CTRL+C e CTRL+V entre os dispositivos funciona perfeitamente. Você pode copiar um texto ou até mesmo um link do seu Android e colar no computador (o contrário também vale). Alternar entre os aplicativos com ALT+Tab também funciona muito bem.

## E tem algum ponto negativo ou você vai ficar só babando ovo pelo post inteiro?

Infelizmente ele tem alguns probleminhas. Os acentos não funcionam e os mapeamentos do teclado só servem para ações pré-definidas (seria legal apertar F12 e abrir o terminal, por exemplo). Como o aplicativo está em fase experimental eu acho esses pontos irrelevantes. O que pega mesmo é a limitação ao Windows.

Por enquanto é um aplicativo genial e promissor. Se você é usuário do Windows, sinta-se privilegiado por poder brincar com o ShareKM.

[Share Km]: <https://play.google.com/store/apps/details?id=com.liveov.skm>
[download]: <https://sites.google.com/site/droidskm/download>
[ADB]: <http://developer.android.com/tools/help/adb.html>
[post-root]: <{% link_to_post root %}>
