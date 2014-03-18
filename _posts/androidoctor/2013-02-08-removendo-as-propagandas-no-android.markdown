---
layout: post
title:  "Removendo as propagandas no Android"
category: AndroiDoctor
id: propagandas
tags:
  - android
  - root
  - propagandas
  - xposed
images: /assets/images/adaway
---

Todos sabemos que as propagandas são uma interessante fonte de renda para os desenvolvedores. É
comum vermos aplicativos de graça com propagandas para rentabilizar o esforço. O grande problema é
que elas estão ficando muito intrusivas, sem contar que fazem o aplicativo consumir um pouco mais de
bateria, a franquia do seu 3G e um pedaço da tela (que pode fazer muita diferença para os Androids
de telas menores). A solução pra isso é remover as propagandas.

## E como removemos as propagandas?

É bem simples. No seu celular, existe um arquivo que fica em **/etc/hosts** que atua como um
resolvedor de endereços. Quando o aplicativo vai exibir uma propaganda que está hospedada no
**banners.vivilatina.com**, ele precisa resolver esse nome em um endereço de IP. Se ele conseguir
resolver pelo arquivo **hosts**, não irá procurar um serviço externo pra resolver o endereço. Vale
lembrar que o arquivo está em uma área somente leitura, ou seja, você vai precisar
[rootear seu celular][post-root] pra modificá-lo.

## Então você quer dizer que é só eu fazer uma maracutaia nesse arquivo?

Exatamente! O arquivo **hosts** funciona como uma tabela, ou seja, bastaria você mapear o nome
**banners.vivilatina.com** para um local fictício, eliminando as propagandas hospedadas nele.
Ficaria algo mais ou menos assim:

    127.0.0.1 banners.vivilatina.com

Isso fará o Android procurar a propaganda no próprio celular (para quem não sabe, o endereço IP
*127.0.0.1* é usado para se referir ao próprio dispositivo). Obviamente não terá propaganda alguma
hospedada no dispositivo e nada vai aparecer para te incomodar.

## Tá, mas existem milhares de sites que hospedam as propagandas, vou ter que mapear todos na mão?

Não! Existe um aplicativo que faz o trabalho sujo pra você: o excelente [AdAway][]^[Recentemente, o
Google arrancou o AdAway e similares da sua mercearia digital (fato meio óbvio, já que esses apps
removem a maior fonte de renda do gigante das buscas).]! Ele cuida de tudo: baixa uma lista com os
mapeamentos e os insere no arquivo **hosts**.

Vá correndo baixar ele! Você verá uma tela bem simples quando abrí-lo:

![]({{ page.images }}/adaway.png)

Meta o dedão no botão que destaquei em vermelho e não será mais pentelhado por propagandas
intrusivas. Infelizmente as propagandas normais também não irão aparecer. É chato remover uma fonte
de renda de desenvolvedores competentes, mas, como algumas propagandas podem fazer você querer
inventar a voadora por email, é uma boa solução.

**UPDATE**: Para os felizes usuários do [Xposed][post-xposed], o módulo [MinMinGuard][] também cumpre (e muito bem, por sinal) o papel de bloquear as propagandas. Ele utiliza outra forma pra isso (e se baseia no conceito de *proxy* do Xposed) e consegue até remover os espaços destinados a propagandas nos aplicativos.

[MinMinGuard]: <http://repo.xposed.info/module/tw.fatminmin.xposed.minminguard>
[post-xposed]: <{% post xposed %}>
[post-root]: <{% post root %}>
[adaway]: <https://f-droid.org/repository/browse/?fdid=org.adaway>
