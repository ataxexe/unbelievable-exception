---
layout: post
title:  "Guia de Sobrevivência para o Galaxy Note 10.1 2014"
category: AndroiDoctor
author: Ataxexe
tags:
  - android
  - samsung
  - tablet
  - galaxy note
  - root
images: /assets/images/note-2014
---

Já faz algum tempo que eu comprei, com muito receio, o Galaxy Note 10.1 2014 (ainda não engoli as mortes dos meus **dois** Galaxy Note II). Apesar de saber que é mais fácil eu acender uma vela na Fenda do Biquíni do que gostar de alguma coisa que a Samsung faça, aprendi a conviver com esse rapazinho e, neste post, vou mostrar a vocês como tirar um bom proveito desse cacareco tecnológico com caneta embutida.

## Ai ai... Já vi que precisa fazer root, né?

Exatamente! Alguns truques só podem ser feitos com o aparelho [rooteado][post-root], sendo que boa parte deles são descendentes das artimanhas que usei para dar liberdade ao meu finado [Galaxy Note II][post-galaxy-note-ii].

Neste post em questão, o root é necessário para os apps de gestos, backup e o Xposed. Como o resto são dicas de aplicativos úteis, preferi dar atenção aos que não precisam de root.

## Então o primeiro passo é rootear o aparelho?

Não! Eu vou colocar primeiro algumas dicas antes do root que são úteis para todos os casos:

### Atualize o sistema

A Samsung aparou muitas arestas no visual do KitKat. Eu até arrisco dizer que não é prejudicial à saúde, mas ainda não se compara ao Android puro.

Se você já tem uma versão rooteada antiga e quer fazer a atualização, baixe a imagem pelo [SamMobile][download-kitkat] (lembre-se de verificar o modelo, esse link é para o **3G**) e enfie no Tablet com o [Odin][odin] (um *factory reset* antes é uma boa também).

### Troque a merda do Launcher

Eu ainda não consegui me convencer a usar o Launcher da Samsung, então, a primeira coisa sensata a se fazer é trocar essa porcaria. Eu recomendo o [Nova Launcher][app-nova-launcher] e a leitura [deste post][post-launchers] onde eu trato melhor sobre o assunto.

### Desative algumas preferências chatas

Eu costumo desativar as seguintes preferências nas configurações do aparelho:

- Tudo o que estiver em **Controles de movimento**

Francamente isso não serve pra merda nenhuma! Talvez você ache legal os itens em **Movimentos**, mas os de movimentos com a palma da mão são tristes. O Tablet é tão grande que passar a mão pela tela toda só pra tirar um *screenshot* é perda de tempo (vou mostrar mais adiante como fazer isso de forma muito mais simples). A tela inteligente não vou nem comentar... prefiro beber água de salsicha em lata.

- Desativar detecção da caneta

É interessante desativar essa opção pra economizar bateria.

- Desativar ação ao retirar a caneta

A ação automática parece legal no início, mas, conforme você vai usando o Tablet, percebe que fica mais irritante do que uma propaganda eleitoral na churrascaria.

- Permitir a instalação de fontes desconhecidas

Bem útil se você vai usar o [Xposed][post-xposed] pra dar mais vida ao seu Tablet.

### Ative a Depuração de USB

Antigamente era mais fácil ativar depuração de USB porque o *Modo de Desenvolvedor* já aparecia nas configurações do aparelho. Agora a coisa mudou um pouco, mas ainda é mais fácil do que levar enrabada do governo:

#. Entre nas configurações do dispositivo
#. Entre na aba "Geral"
#. Vá no item **Sobre o dispositivo**
#. Pressione freneticamente o item **Número de compilação** até aparecer uma mensagem dizendo que o modo foi habilitado
#. Vá no novo item que se abriu (**Opções do desenvolvedor**)
#. Habilite o item **Depuração de USB**

Agora sim podemos rootear o safado!

## Pelo menos vai dizer como rootear?

Isso tudo está bem explicado [nesta *thread* do XDA](<{% xda_thread 2540191 %}>). Eu testei em ambas as versões Jelly Bean e KitKat e funcionou tranquilamente para a versão **3G**. Se o seu tablet é de uma versão diferente (LTE ou WiFi), dê uma procurada no [XDA][xda-note-2014] ou no [Google](<{% google galaxy+note+10.1+2014+root %}>).

## Tá! Fiz o root, qual é o próximo passo?

A primeira coisa que eu faço após o root é alterar a densidade da tela pra dar mais espaço. A densidade e o tamanho dos componentes visuais são grandezas diretamente proporcionais, ou seja, diminuir a densidade diminuirá o tamanho dos componentes. Existem aplicativos que permitem alterar essas propriedades (o [Build Prop Editor][app-build-prop] é um exemplo bem funcional), mas eu gosto de alterar na mão mesmo. Altere a propriedade `ro.sf.lcd_density` no arquivo `/system/build.prop` para 240 e veja a grande diferença:

![Com densidade padrão]({{ page.images }}/320-dpi.jpg)

![Com densidade modificada]({{ page.images }}/240-dpi.jpg)

## Sei lá... parece ruim de ler as coisas

Nesse caso é só tentar ajustar o valor da densidade para ver qual fica melhor. Aumentar o tamanho das fontes também ajuda um bocado.

## E cadê a barra de status?

Bem lembrado! Eu arranquei ela com um módulo do [Xposed][post-xposed]. No meu caso eu acabei escrevendo o módulo pra mim (ainda não abri o código porque falta uns ajustes), mas o [AppSettings][xposed-appsettings] faz um excelente trabalho! Eu só escrevi o módulo pra mim porque acabei percebendo que eu queria a barra de status escondida sempre (e o AppSettings não tem ainda uma opção global - pelo menos eu não achei). Existe até o módulo [Immerse Me][xposed-immerseme] que faz somente esse trabalho, mas, eu estou com um problema com os apps de terminal e é exatamente por isso que estou dando uma fuçada no Xposed pra resolver isso.

## Legal, mas eu notei que alguns aplicativos só abrem na orientação retrato

Infelizmente é uma merda que alguns aplicativos trazem. Bloquear a rotação do dispositivo é uma péssima prática. Pra me livrar dessas tranqueiras, eu escrevi um módulo pro Xposed também (ainda não liberei), mas você pode conseguir o mesmo efeito com outros módulos do Xposed ou com o AppSettings também.

## Visual, visual, visual, não tem nada mais legal não?

Calma, vamos chegar lá. De posse de um sistema rooteado e com um Launcher lindão, o próximo passo é dar um toque de [comunicação não-verbal][post-gestos]. Não vou repetir o post aqui, então, abra seu coração (e a carteira) e instale o excelente [GMD Gesture Control][app-gesture-control]! Como estamos tratando de um tablet anabolizado com a **S Pen**, separe uns trocados para adquirir o fantástico [GMD SPen Control][app-spen-control].

## Credo! Dois app para controle de gestos!

É interessante usar os dois porque nem sempre estaremos usando a **S Pen**. Caso você esteja em dúvidas, compre somente o **GMD SPen Control** porque ele realmente faz a diferença no dispositivo.

A primeira coisa a ser feita com o **SPen Control** é desativar os gestos da Samsung para não termos conflitos, é a primeira opção da tela principal de configuração (em inglês: *overtake SPen gestures*). Não se preocupe se não souber quais gestos utilizar, durante o post as coisas vão ficando mais claras (e bem legais também).

## Ai ai, você matou a barra de status e botou gestos, mas cadê as notificações?

Bom ponto! Independente ou não da barra de status, um bom sistema de notificações é muito interessante e o [NotifierPro][app-notifier-pro] faz um excelente trabalho com notificações bonitas e úteis.

Outro truque interessante é usar os apps de gesto para "puxar" a barra de notificações. Ambos os apps suportam isso e o resultado é muito bom. Além disso, fazer o movimento de puxar a barra de notificações bem no canto superior faz a barra de status aparecer (ela sobe novamente).

## Interessante... e a função de colocar dois aplicativos na tela?

Pra ser sincero eu a utilizo muito pouco. Acho válida, mas poucos aplicativos se beneficiam dela. Podemos marretar os aplicativos que não são compatíveis com o módulo do Xposed [Wanan Xposed][xposed-wanan] que, além de alguns ajustes interessantes, pode forçar a barra e colocar qualquer aplicativo para compartilhar a tela. Só tenha em mente que nem todos vão ser compatíveis. Para isso existe uma boa combinação de aplicativos.

## Ai ai... mais dinheiro... e qual é essa combinação?

Agora os aplicativos de gestos vão fazer mais sentido. Existe um outro aplicativo genial que permite colocar *widgets* flutuando na tela: é o [Popup Widget][app-popup-widget]. Alguns apps de email e calendário possuem excelentes *widgets* que seriam bem úteis se configurados para aparecerem na tela quando necessários. O Popup Widget também permite customizar as animações de abertura, permitindo efeitos legais quando combinados com o GMD Gesture Control:

- Deslizar quatro dedos para a direita abre o popup do GMail aparecendo pela esquerda da tela
- Deslizar quatro dedos para a esquerda abre o popup do Hangouts aparecendo pela direita

Para o SPen Control, poderia ser algo assim:

- Dar um toque e depois arrastar para a direita abre o popup do GMail aparecendo pela esquerda
- Dar um toque e depois arrastar para a esquerda abre o popup do Hangouts aparecendo pela direita

E por aí vai... a grande sacada é incluir widgets úteis como de tarefas, calendário e qualquer outra coisa que você ache interessante estar a um passo de um gesto, seja ele com a caneta ou com as mãos.

## Mas a caneta só pra gestos... sei não ein..

É verdade! A caneta é a cereja no bolo desse Tablet e deve ser bem aproveitada. Como você já deve prever, eu não sou um grande fã dos aplicalixos da Samsung e, antes de prosseguirmos, sugiro a você que remova todas as porcarias que vieram instaladas nele. O [Titanium Backup][app-titanium-backup] dá conta do recado (e nem precisa ser a vesão paga) e, de quebra, te dá a possibilidade de fazer backups do aparelho. Falando nisso, sempre [faça backup dos seus aplicativos][post-backup].

## Mas o Titanium nem faz backup pro cartão de memória

Isso é uma dura verdade. Mas não é uma limitação do Titanium Backup. Com o Android KitKat, o Google trocou um pouco as permissões e os aplicativos com acesso ao *storage* não conseguem mais acessar o cartão SD. Isso pode ser resolvido de duas formas:

- Baixar o módulo [KitKat SD Card Full Access][xposed-sdcard]
- Alterar o arquivo `/system/etc/permissions/platform.xml` para que as permissões `WRITE_EXTERNAL_STORAGE` e `WRITE_MEDIA_STORAGE` fiquem assim:

~~~xml
<permission name="android.permission.WRITE_EXTERNAL_STORAGE" >
    <group gid="sdcard_r" />
    <group gid="sdcard_rw" />
    <group gid="media_rw" />
</permission>
<permission name="android.permission.WRITE_MEDIA_STORAGE" >
    <group gid="sdcard_rw" />
    <group gid="media_rw" />
</permission>
~~~

Eu acabei indo pela segunda opção, escolha a que achar mais conveniente.

## Tá... a caneta! A caneeeeeta!

Bom, vamos começar no que eu creio ser o melhor app pra notas disponível até hoje: o [LectureNotes][app-lecture-notes]. Junte ele com os plugins de gravação de áudio e importar PDF e a coisa fica séria. Ele é sempre meu convidado de honra em qualquer reunião.

Além do LectureNotes, outro que me chamou a atenção foi o [Note Anytime][app-note-anytime]. Criar apresentações nele é bem simples e a usabilidade me chamou muito a atenção. Para algo mais interessante ainda, considere o plugin [LectureVideos][app-lecture-videos]. Com ele é possível gravar *screencasts* bem legais.

## Legal! Mas escrever só com a caneta não é tão produtivo.

Concordo plenamente! Mesmo o teclado padrão da Samsung tendo um bom reconhecimento de grafia, digitar em um teclado ainda é mais produtivo e nada mais produtivo do que um bom teclado Bluetooth. Depois de brincar com alguns em uma loja (ainda bem que o vendedor foi muito gente boa), acabei escolhendo o [Wedge Mobile Keyboard][microsoft-wedge]. Se você não quiser gastar tanto em um teclado, pode se aventurar com um teclado wireless.

## Ué, mas e o receptor?

Existe um [adaptador][adaptador-micro-usb] que facilita um bocado a vida. Ele converte a entrada Micro USB em uma entrada USB. Com isso você pode plugar pendrives, mouses, teclados e até adaptadores de rede pra conexões via cabo! As versões genéricas custam bem menos e não deixam a desejar em ponto algum. O único problema é não poder carregar a bateria enquanto utiliza os dispositivos, por isso optei pelo teclado bluetooth.

## Mas o conector é na parte de baixo!

Cagada suprema!!! Acho que foi uma das piores decisões da Samsung nesse aparelho. Epic Fail!!!

Foi justamente por isso que eu acabei liberando a rotação em todas as direções. Dessa forma, posso colocá-lo de cabeça pra baixo e usar o conector pela parte de cima.

## Mas e se estiver com a capinha?

Bom, a capinha de couro que vale uma jaqueta de couro vai atrapalhar um pouquinho (apesar de cara, ela é muito boa, mas isso não a torna uma compra indispensável). O mais engraçado é que eu comprei uma "genérica" e, quando fui colocar no meu aparelho, percebi que ela ficou ao contrário. Resultado: ela me força a inverter o tablet, forçando-o a ficar na posição mais favorável para plugar alguma coisa na entrada Micro USB.

Na pior das hipóteses, arrume um suporte. Pode sair bem mais barato e alguns teclados (inclusive o Wedge) possuem um *case* dobrável que vira um suporte.

## Nossa! Dá pra piorar mais a situação?

Claro que dá pra piorar (acho que esse deveria até ser o novo bordão da Samsung): se você usar o idioma do sistema diferente do idioma do teclado, terá problemas para usá-lo. Mais ainda: a merda do teclado da Samsung fica forçando você a trocar o teclado para ele toda vez que detecta o teclado bluetooth. Isso é uma merda pra quem, como eu e mais alguns milhões de terráqueos, utiliza o belo [SwiftKey][app-swiftkey]. Pensando nisso, um maluco criou um app muito útil para quem passa por essas presepadas da Samsung: o versátil [External Keyboard Helper Pro][app-keyboard-helper]. Com ele, é possível definir *layouts* de teclado diferentes do idioma do aparelho, definir teclas de atalho e até um *delay* para que, quando o teclado for trocado para o da Samsung, seja trocado novamente para o teclado do app.

## Que saco isso! E tem como partir pra ignorância?

Falou a minha língua! O Titanium Backup tem a opção de "congelar" aplicativos. Basta congelar o teclado da Samsung e pronto! Apenas tenha em mente que, dessa forma, o teclado da Samsung nem vai aparecer no sistema (pra mim já foi tarde mesmo...).

## Que saco! Aí eu perco o reconhecimento de escrita!

E é aí que surge um salvador: o [MyScript Stylus][app-myscript-stylus]. Ele tem um reconhecimento de escrita muito bom e ainda tem alguns recursos de usabilidade interessantes. Faz um bom tempo que ele está em *beta*, mas é perfeitamente funcional (ao contrário da merda do [MyScript Notes Mobile][app-myscript-notes], passe longe desse monstro).

Se quiser usar algo mais profissional (ou for igual a mim e odiar o péssimo trabalho do pessoal do MyScript e não querer usar nada deles depois de pagar mais de 20 reais por um aplicativo pior do que o Notepad que vem no Windows) pode tentar o excelente [Mazec3][app-mazec]. Apesar de custar um pouco a mais para nós (o app só vem com o dicionário inglês, o português é comprado à parte) ele vale o investimento. Até agora nenhum aplicativo de reconhecimento de escrita conseguiu desvendar minha caligrafia tão bem como o Mazec3. 

## E para escrever textos? Esses apps de notas não parecem ter esse foco.

E realmente não tem. Para textos eu recomendo dois apps: o [LightPaper Pro][app-lightpaper] e o [JotterPad][app-jotterpad]. Ambos são apps extremamentes funcionais e permitem a edição de textos em formato [Markdown][markdown], a diferença básica entre eles é que o LightPaper tem um pouco mais de recursos de edição e o JotterPad tem uma interface muito elegante (apesar de gratuito, o JotterPad libera mais funções em uma versão *inn-app purchase*, da qual eu não sou muito fã pois não há reembolso nessa modalidade).

## Mas eu queria escrever documentos Word

Eu gosto muito do [OfficeSuite Pro][app-officesuite], nunca testei o que já vem no aparelho (faz tempo que tenho esse app) e para as minhas necessidades ele atende muito bem. Dá pra forçar a instalação do [Microsoft Office Mobile][app-msoffice] pegando o `apk` dele instalado em um celular e instalando na mão, mas o resultado é uma merda se você não desativar o bloqueio da rotação no [AppSettings][xposed-appsettings], fora que ele só abre arquivos do OneDrive, ou seja, não serve pra merda nenhuma.

## Você falou do teclado... e o mouse? Vale a pena?

É um pouco complicado isso. Como a caneta é muito útil eu acabo fazendo dela um mouse meia boca, mas, se você tiver dinheiro sobrando, é legal usar o mouse caso deixe a tela mais inclinada.

O complicado de usar um mouse é que nem o Android nem os aplicativos suportam o uso de um mouse como.. dã... um mouse. Parece idiota essa afirmação, mas o dispositivo foi feito para ser usado com as mãos e todo o design foi pensado nisso. O botão direito, por exemplo, é mapeado para o **voltar** e não para o **menu**. E isso faz todo o sentido por causa das diretrizes do Android (o menu acabou virando um painel deslizante), mas não deixa de ser estranho porque deixamos de interagir com o dispositivo pela tela para interagir pelo mouse. É um item que ajuda um bocado em situações pontuais (como navegar em alguns sites e escrever textos), mas não faz tanta diferença quanto um teclado.

### Então eu devo escolher um teclado em vez de um mouse?

Exatamente! Se os dois estiverem dentro do seu orçamento, é uma boa dupla. Caso contrário, adquira o teclado sem pensar duas vezes!

Só por curiosidade: este post foi criado no meu computador e editado no meu tablet usando o teclado bluetooth. Foi uma ótima aquisição!

[xda-note-2014]: <http://forum.xda-developers.com/galaxy-note-10-2014>
[kies]: <http://www.samsung.com/br/kies>
[download-kitkat]: <http://www.sammobile.com/firmwares/3/?download=31598>
[odin]: <http://odindownload.com>
[microsoft-wedge]: <http://www.microsoft.com/hardware/en-us/p/wedge-mobile-keyboard>
[adaptador-micro-usb]: <http://www.samsung.com/us/mobile/cell-phones-accessories/ET-R205UBEGSTA>
[markdown]: <http://daringfireball.net/projects/markdown>

[post-root]: <{% post root %}>
[post-xposed]: <{% post xposed %}>
[post-galaxy-note-ii]: <{% post galaxy-note-ii %}>
[post-gestos]: <{% post app-gestos %}>
[post-backup]: <{% post backup %}>
[post-launchers]: <{% post launchers %}>

[xposed-appsettings]: <{% xposed_module de.robv.android.xposed.mods.appsettings %}>
[xposed-wanan]: <{% xposed_module ma.wanam.xposed %}>
[xposed-sdcard]: <{% xposed_module kz.virtex.android.sdcardfix %}>
[xposed-immerseme]: <{% xposed_module com.mohammadag.immerseme %}>

[app-nova-launcher]: <{% play_store com.teslacoilsw.launcher %}>
[app-build-prop]: <{% play_store com.jrummy.apps.build.prop.editor %}>
[app-gesture-control]: <{% play_store com.goodmooddroid.gesturecontrol %}>
[app-spen-control]: <{% play_store com.gmd.spencontrol %}>
[app-notifier-pro]: <{% play_store com.nlucas.notificationtoaster %}>
[app-popup-widget]: <{% play_store com.ss.popupWidget %}>
[app-lecture-notes]: <{% play_store com.acadoid.lecturenotes %}>
[app-note-anytime]: <{% play_store com.metamoji.noteanytime2 %}>
[app-lecture-videos]: <{% play_store com.acadoid.lecturevideos %}>
[app-swiftkey]: <{% play_store com.touchtype.swiftkey %}>
[app-keyboard-helper]: <{% play_store com.apedroid.hwkeyboardhelper %}>
[app-myscript-stylus]: <{% play_store com.visionobjects.stylusmobile.v3_2_store %}>
[app-mazec]: <{% play_store com.metamoji.mazecen %}>
[app-lightpaper]: <{% play_store com.clockworkengine.android.LightPaper %}>
[app-jotterpad]: <{% play_store com.jotterpad.x %}>
[app-officesuite]: <{% play_store com.mobisystems.editor.office_registered %}>
[app-msoffice]: <{% play_store com.microsoft.office.officehub %}>
[app-titanium-backup]: <{% play_store com.keramidas.TitaniumBackup %}>
[app-myscript-notes]: <{% play_store com.visionobjects.notesmobile %}>
