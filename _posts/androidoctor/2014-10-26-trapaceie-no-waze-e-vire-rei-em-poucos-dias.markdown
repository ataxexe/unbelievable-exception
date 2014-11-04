---
layout: post
title:  "Trapaceie no Waze e vire rei em poucos dias"
category: AndroiDoctor
author: Ataxexe
tags:
  - android
  - gps
  - waze
  - root
  - dicas
images: /assets/images/waze
alerts:
  - danger
  - root_required
---

Uma vez um colega de trabalho estava se gabando de ser "espadinha" no Waze (na vida real eu nāo faço ideia). Eu acabei baixando o Waze pra dar uma olhada em como funcionava e tudo o mais. Em menos de uma semana eu passei ele na pontuação e, de quebra, fiquei em quinto lugar no ranking semanal do Brasil! E o melhor de tudo: eu nem sequer usei o Waze em trânsito!

## Ué! E como você conseguiu isso?

A resposta está na forma como o Waze calcula a pontuação: ele o faz baseado no tanto que você percorre enquanto está com o aplicativo aberto (claro que tem os pontos por reportar coisas no caminho, mas o básico é isso mesmo).

## Então como você fez pra burlar a pontuação?

Na verdade eu não burlei a pontuação do Waze, eu burlei o GPS do sistema. Fiz parecer que estava em movimento quando, na verdade, estava sentado na minha cadeira ~~tentando dominar o mundo~~ trabalhando.

## E como faz isso?

A ideia é mapear uma rota e constantemente alterar a localização do dispositivo para simular essa rota. Como esse processo é um saco e sempre existe um maluco que já pensou em fazer alguma coisa dessas, eu acabei baixando o [Location Spoofer Pro][], ele não é muito bem feito, mas serviu pra brincar um pouco.

O aplicativo permite alterar a localização usando o modo de desenvolvimento do Android, o problema é que usando esse modo o Waze não computava os pontos (pelo menos pra mim não deu certo), a solução foi mover o aplicativo para o local onde ficam os aplicativos de sistema (na pasta `/system/app`, mas sugiro usar o [Titanium Backup][] pra fazer isso).

O mais legal é colocar uma velocidade muito alta e passar em locais engarrafados. Dependendo de como o Waze coletou as informações e do seu score, o trecho pode até ser considerado normal. O contrário também: você pode andar em ritmo de marcha fúnebre que o Waze pode considerar o trecho engarrafado.

Eu perdi as contas de quantas vezes atravessei a Transamazônica, quantos animais na pista reportei nas estradas e quantos trechos engarrafados percorri a mais de 200 Km/h!

![E nem levei multa!]({{ page.images }}/alta-velocidade.png)

![Ajudando meus coleguinhas do outro lado do Brasil!]({{ page.images }}/reportando.png)

![Depois de um tempo brincando, a recompensa!]({{ page.images }}/score.png)

Agora eu já posso brincar de causar o caos no trânsito sem sair de casa!

---

[UPDATE] Eu recebi um feedback de um pessoal dizendo que as contas tinham sido bloqueadas depois de fazerem esses procedimentos. Eu não sei ao certo o que pode ter acontecido, já que eu não uso o Waze há um certo tempo. Talvez seja interessante colocar viagens de ida e volta que partam da sua localização atual e tenham a duração real da viagem para evitar o bloqueio.

A minha conta ainda está ativa e com os 40 mil pontos, mas eu fiz essa brincadeira antes do Google adquirir o Waze, então, pode ser que eles começaram a rastrear esse procedimento.

[location spoofer pro]: <{% play_store org.ajeje.locationspooferpro %}>
[titanium backup]: <{% play_store com.keramidas.TitaniumBackup %}>