---
layout: post
title:  "Desativando temporariamente o bloqueio do seu robozinho"
category: AndroiDoctor
author: Ataxexe
tags:
- root
- android
- bloqueio
---

Colocar uma senha de bloqueio no celular é uma boa ideia. O bloqueio é interessante e muita gente o faz por um motivo bem simples: impedir pentelhos de plantão de fuçar no seu brinquedinho (além, é claro, de adicionar uma camada de segurança).

Eu confesso que não usava o bloqueio por um motivo bem mais simples ainda: ele não fazia sentido algum quando eu estava em casa. Felizmente, o [Tasker]({% post tasker-ideias %}) me permitiu criar alguns perfis pra automatizar isso. O problema foi que, conforme as condições foram ficando maiores, os perfis foram ficando mais chatos de configurar. Eu percebi, então, que muitos deles estavam ligados a somente duas coisas: dispositivos bluetooth e redes wifi.

## Blá! O Android já faz isso com o bluetooth!

Sim, mas tem um pequeno porém: você precisa desbloquear o celular antes que ele permaneça desbloqueado. Parece estupidez em nível de discurso presidencial, mas tem um motivo interessante nisso tudo: alguém poderia roubar seu dispositivo bluetooth e seu celular... já imaginou a felicidade da criatura quando o celular for destravado automaticamente?

## E por quê você faz questão de destravar automaticamente?

Preguiça. /o\\

## Ai ai... E quanto ao wifi?

Essa é a funcionalidade que eu queria. Assim posso configurar o desbloqueio apenas quando estiver em casa ou na casa dos meus pais. Apesar do Lollipop fazer isso pelo GPS, eu acho mais simples utilizar a rede wifi pra isso (e economiza bateria também).

## Lá vem o root... lá lá lá...

Ahá! Dessa vez não (embora algumas coisinhas a mais precisem do root). Depois de brincar com alguns apps na lojinha, achei um que vale a pena. Como o real tá valendo uns 2 dólares o quilo, não sei se o preço vai ficar atraente, mas aqui vai: o app em questão é o excelente [Delayed Lock]({% play_store de.j4velin.delayedlock2.trial %}), que custa ~~40 reais~~ 3 dólares ("O preço de uma mesa na minha época" - como diria o velho do Trato Feito).

## E o que tem de melhor nele?

Além de ele ampliar a funcionalidade de desativar o bloqueio do Android, ele ainda tem plugin pro Tasker, ou seja, o que você não puder fazer no Delayed Lock, provavelmente vai poder fazer usando ele e o Tasker.

## E ele tem a função "preguiçoso", né?

Exatamente! \\o/

## E ele precisa de root por quê?

Se você tiver habilitado a encriptação do seu robozinho, irá precisar do root pra destravar o bloqueio, já que a encriptação implica em não poder desligar o bloqueio. Claro que, por não precisar do root, ele deve ser incluído na lista de administradores do aparelho, o que requer um cuidado extra na hora de desinstalá-lo.

Por isso, não se esqueça de ler atentamente a descrição do app. Ele não funciona em todos os dispositivos e, por conta de alguns ~~insetos no pirulito~~ bugs no Lollipop, ele também não funciona direito nessa versão do Android.

## E o Tasker?!? Onde ele entra?

Bom, você pode, por exemplo, criar um perfil no Tasker que, ao conectar na wifi da sua casa, não só desative o bloqueio como também mude o aparelho por completo (toque, papel de parede). Também pode utilizar eventos do calendário, SMS recebido, criar um controle de acesso para seus filhos...

## Cumé qui é?!?!?!?! Repete aí!

Você pode incluir perfis do Tasker junto com configurações no Delayed Lock para desligar a tela de bloqueio em determinadas situações para que seus pupilos possam usar o aparelho. Um SMS com uma palavra-chave pode ativar o Delayed Lock por um determinado período de tempo e horários pré-definidos são muito fáceis de serem programados (no período do recreio, por exemplo). Basta usar a criatividade!