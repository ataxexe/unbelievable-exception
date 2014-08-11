---
layout: post
title:  "Algumas ideias para usar e abusar do Tasker"
category: AndroiDoctor
images: /assets/images/tasker-ideias
tags:
  - android
  - root
  - tasker
  - secure settings
  - xposed
  - gravity box
  - customização
---

Já faz algum tempo que eu ando mexendo no excelente [Tasker][] e hoje pretendo compartilhar algumas ideias, mas, antes de começarmos, tenha em mente que seu robozinho precisa estar [rooteado][post-root].

## Conexão automática com o Bluetooth do carro

Essa dica é pra quem usa o **Motorola Assist** (atualmente, os felizes proprietários de um Moto X), um recurso que identifica se você está em um veículo em movimento. Esse recurso, apesar de muito interessante, não é flexível a ponto de dispararmos alguma tarefa assim que o dispositivo reconhecer que estamos em movimento. Isso é facilmente resolvido utilizando o Tasker para criar um perfil ativado por um evento de notificação para o aplicativo **Assist**. Como esse aplicativo detecta mais algumas coisas, deixe o campo **Title** com o texto "Driving". A tarefa é bem simples de configurar, bastando apenas usar o [Secure Settings][] para conectar com o dispositivo bluetooth do carro.

![Configuração do perfil]({{ page.images }}/assist-profile.png)

![Configuração do evento]({{ page.images }}/event-config.png)

![Tarefa]({{ page.images }}/assist-task.png)

Perceba que eu coloquei uma restrição no perfil para ser ativado somente quando um determinado dispositivo bluetooth não estiver conectado. Esse dispositivo é o meu fone de ouvido e eu coloquei essa restrição porque, quando eu estou no ônibus e o perfil é ativado, ele faz o meu *player* de música parar. Aproveitando o gancho, seria interessante, também, ativar o aplicativo de GPS do aparelho, o problema é que esse perfil detecta movimento em veículo, sendo que ele pode não ser o seu. A solução mais simples é criar um outro perfil no Tasker atrelado a uma conexão bluetooth com o dispositivo do seu carro.

## Modo expandido por aplicativo

Um dos melhores módulos do [Xposed][], o [GravityBox][], foi atualizado recentemente e adicionou a funcionalidade de expor algumas modificações pelo sistema de atalhos do Android. Com isso, podemos nos beneficiar do modo expandido em conjunto com o [Secure Settings][]. Basta criar um perfil com os aplicativos que deseja utilizar no modo expandido e vincular a uma tarefa com a configuração **Execute Shortcut** do Secure Settings mapeada para o atalho *Toggle expanded desktop* do GravityBox.

O modo expandido esconde a barra de notificações e a barra de navegação (a que fica embaixo mostrando as teclas virtuais) é uma excelente opção para quem tem dispositivos com teclas virtuais e tela modesta, ou seja, perfeito para o Moto X. Em conjunto com o modo expandido, você pode configurar o GravityBox para ativar os *"Pie Controls"* quando o modo expandido estiver ativo. Eu costumo colocar os jogos e os leitores de conteúdo (notícias, navegador, etc.) para utilizar o modo expandido.

![Desktop expandido e Pie Controls]({{ page.images }}/expanded-desktop.png)

Ah! E não se esqueça de colocar como tarefa de saída a mesma tarefa de entrada, assim o modo expandido será desligado quando sair do aplicativo.

## Alarme contra tentativa de desbloqueio

Se algum pentelho tiver a mania de tentar desbloquear seu Android, você pode criar um perfil com o evento **Failed Login Atempts** do [Secure Settings][] e vincular a uma tarefa que pode, inclusive, tirar uma foto do rosto do zé ruela, obter a localização do dispositivo, enviar um email com essas informações para você e, de quebra, disparar um alarme ou mensagem de voz pelo TTS.

A foto pode ser tirada com a tarefa nativa **Take Photo**, ela irá gravar a foto na pasta `DCIM/tasker` com o nome que você escolher (pode até ter sequência no nome). A ideia é que o nome da foto seja sempre o mesmo (pra facilitar as coisas e não encher o celular com porcaria desnecessária) e a foto seja batida com a câmera frontal e no modo silencioso (*"Discreet"*, nas configurações da tarefa). Para obter a localização, certifique-se de que o GPS está ligado ou o ligue usando o [Secure Settings][]. Para enviar o email, ative o 3g e utilize o aplicativo [Email Me Pro][]. Eu, pessoalmente, apenas solto alguns "gentis" alarmes de voz a partir da terceira tentativa, como vocês podem ver abaixo:

{% youtube RhjYs49bAO4 %}

## Desabilitar a segurança em locais seguros

Eu uso um PIN para desbloquear meu Android, e não acho nada prático ter que ficar digitando aquele bando de número quando estou em casa, então, fiz um perfil que desativa o PIN em determinadas situações. Isso é bem simples de fazer e somente requer o uso de duas tarefas usando a ação **Password/Pin** do [Secure Settings][]. O perfil pode ser configurado de qualquer forma. Eu utilizo as redes wi-fi dos lugares que considero seguros. Caso o PIN não seja habilitado quando o aparelho for desligado em um local seguro e ligado em um local inseguro, coloque um perfil com o evento **Device Boot** para habilitar a segurança.

> Existe um aplicativo muito bom que já faz isso, o [SkipLock][]. O problema é que o desenvolvedor, filho dum que ronca e fuça, reescreveu o aplicativo inteiro, porém o lançou como um novo aplicativo (antes ele era o [Unlock With WiFi][]), sacaneando todos os compradores antigos. O desenvolvedor do [Tasker][] fez uma reescrita fenomenal no aplicativo, mas não teve a diarréia mental de lançar como um aplicativo diferente. Por causa dessa atitude lamentável do Ben Hirashima, eu não compro nem uma unha quebrada dele.

## Atendimento automático de chamadas quando conectado a um dispositivo bluetooth

Essa é bem interessante: é possível atender automaticamente as chamadas quando se está com um dispositivo bluetooth conectado com a junção de dois estados na definição do perfil. Para isso, basta agrupar o estado **Bluetooth Connected** (e colocar o nome do dispositivo em questão) com o estado **Call** configurado para **Incoming** e ligar em uma tarefa com duas ações:

#. Wait (coloque um tempo de 5 segundos, mais ou menos)
#. Take Call

O tempo de espera é interessante para que você possa rejeitar a chamada antes que o sistema a atenda pra você. Outro ponto legal é que pode-se configurar o campo **Number** do estado para somente os contatos favoritos.

![Configuração do estado de ligação]({{ page.images }}/call-incoming.png)

[tasker]: <{% play_store net.dinglisch.android.taskerm %}>
[secure settings]: <{% play_store com.intangibleobject.securesettings.plugin %}>
[gravitybox]: <http://repo.xposed.info/module/com.ceco.gm2.gravitybox>
[xposed]: <http://forum.xda-developers.com/showthread.php?t=1574401>
[email me pro]: <{% play_store com.caramellabs.emailmepro %}>
[skiplock]: <{% play_store com.benhirashima.skiplock %}>
[unlock with wifi]: <{% play_store com.benhirashima.unlockwithwifi %}>

[post-root]: <{% post root %}>
[post-xposed]: <{% post xposed %}>
