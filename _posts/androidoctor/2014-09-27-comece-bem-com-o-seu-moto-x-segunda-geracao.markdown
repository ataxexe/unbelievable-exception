---
layout: post
title:  "Comece bem com o seu Moto X Segunda Geração"
category: AndroiDoctor
author: Ataxexe
tags:
  - android
  - moto x
  - root
  - dicas
---

Há poucos dias meu Moto X Segunda Geração chegou. Eu estava muito empolgado pois [adorei o primeiro Moto X]({% post moto-x %}). Tirando o fato de ele ter vindo com um rastreador de carga de presente, tudo estava em ordem. Eu pensei muito se iria rootear o danado pois queria ter a sensação de como é usar um Android sem root, já que eu sempre faço isso logo de cara. Pois bem, não foi desta vez.

Pelo menos isso me rendeu umas boas dicas que pretendo compartilhar com vocês neste post.

# Ai ai, já vi que a primeira coisa a fazer é rootear, certo?

Ahá! Errado! A primeria coisa a fazer é desbloquear o bootloader.

## E o que raios é esse bootloader?

Repetindo o que eu disse no [post sobre root]({% post root %}):

> Seu smartphone é como um HD, possui algumas partições que guardam informações diferentes para o sistema funcionar. Pense no bootloader como sendo um ponto de segurança para que não seja possível modificar as partições vitais do sistema. Com o bootloader travado, apenas alterações assinadas digitalmente e verificadas podem ser instaladas no aparelho.

Com o bootloader destravado fica mais fácil rootear o aparelho pois não é preciso usar brechas no sistema para injetar pacotes de instalação. Para destravar o bootloader, basta ir ao [site da Motorola][unlock-bootloader] e seguir os passos descritos lá. Vale lembrar que é importante ter as ferramentas do Android instaladas no seu computador (juntamente com os drivers), mais precisamente o `fastboot`, já que o processo é feito com esse comando.

Ah! É importante lembrar que o bootloader do Moto X antigo pode ser destravado por lá também. Apenas lembre-se que destravar o bootloader apaga permanentemente todas as informações do seu aparelho, então, faça um backup antes.

## Então depois eu posso rootear, né?

Ainda não. Quando você destrava o bootloader, uma mensagem idiota aparece te pentelhando sobre ter destravado o bootloader, você consegue se livrar dela socando a logo original (por ironia do destino, isso é muito simples, já que o bootloader está destravado). Para reverter a situação, basta seguir o processo indicado [neste post do XDA][flash-logo].

## Já pode rootear agora, tio?

Agora sim! E o processo é bem simples. Basta inserir um novo recovery (já que o de fábrica não permite alterações que não sejam do fabricante) e enfiar o pacote do root goela abaixo do Moto X. O processo é bem simples e você pode vê-lo [neste post do XDA][root-moto-x].

Um detalhe importante: eu não recomendo substituir o recovery do Moto X pelo ClockworkMod porque ele tá mais instável que piriguete de TPM no shopping com cartão de crédito estourado! Apenas o execute com o comando `fastboot boot cwm.img` e insira o pacote do SuperSU.

## Tem algo menos complicado?

Tem, [neste post do XDA][root-moto-x-2], mas eu não testei no meu porque quando o *jcase* postou eu já tinha rooteado meu Moto X. Se quiser fazer do jeito dele, vá no link e preste bastante atenção nas instruções pra não fazer merda (não é pra instalar a imagem em hipótese alguma, só "bootar").

## Bacana, e agora?

Agora vem uma parte interessante pra quem não gosta muito do tamanho dos componentes visuais do Moto X: podemos alterar a densidade da tela do Moto X editando o bom e velho `/system/build.prop`, procure por `ro.sf.lcd_density` e altere o valor de 480 para algo de sua preferência (recomendo 360 ou 320, abaixo disso é mazoquismo). Não se esqueça de reiniciar o danado.

## Tá, mas e as notificações do Moto X? Não vão ficar zuadas com a densidade alterada?

Mais do que o horário eleitoral! E é aí que entra o nosso héroi [Xposed]({% post xposed %}). Instale o AppSettings e altere a densidade do aplicativo **Moto Display** para os 480 originais e pronto! As notificações não ficarão mais cagadas!

Ah! Altere o aplicativo da Câmera também para o valor original pois ela dá pau e nem abre se tiver com a densidade modificada.

## E agora?

Bom, agora é o bom e velho procedimento padrão:

- Arranque a merda do BR Apps (pelo Titanium Backup é bem simples)
- [Remova as propagandas]({% post propagandas %})
- [Restaure seus backups]({% post backup %})
- [Customize a bagaça]({% post customizacao %})

[unlock-bootloader]: https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-b
[flash-logo]: http://forum.xda-developers.com/moto-x-2014/development/warning-message-unlocked-bootloader-t2871478
[root-moto-x]: http://forum.xda-developers.com/moto-x-2014/general/root-cwm-test-8-flashable-supersu-t2887452
[root-moto-x-2]: http://forum.xda-developers.com/moto-x-2014/development/pure-edition-superboot-style-root-motox-t2889264