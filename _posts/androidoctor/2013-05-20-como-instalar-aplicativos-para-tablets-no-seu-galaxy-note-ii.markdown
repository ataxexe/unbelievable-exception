---
layout: post
title:  "Como instalar aplicativos para Tablets no seu Galaxy Note II"
category: AndroiDoctor
images: /assets/images/note-ii-tablet
tags:
  - android
  - galaxy note ii
  - tablets
  - root
alerts:
  - danger
  - root_required
---

Outro dia me perguntaram em uma entrevista de emprego qual foi o elogio mais legal que já recebi. Respondi que foi quando me disseram "Você é doido!". O quê isso tem a haver com este post? Quase nada, mas você vai me achar doido também depois de lê-lo.

Não é novidade que o Galaxy Note 2 não tenha sexo definido, mas você pode forçar a barra e fazer com que ele seja reconhecido como um Tablet, podendo, então, instalar quaisquer aplicativos otimizados para telas maiores.

## Você é doido!

Caramba! E ainda chegamos ao final do post! O fato é que alguns aplicativos possuem uma interface melhorada para dispositivos com telas maiores, e, como o Note 2 possui uma tela grande a ponto de ser possível socar uma interface *tabletiana*, podemos dar uma cara nova pra ele fazendo-o se passar por um tablet.

Vale lembrar que, como a maluquice envolve diminuir bastante o tamanho dos componentes visuais, isso não é recomendado para quem tem braços curtos demais pra ler o jornal.

## Precisa de root, né?

Exato! E precisa de um conhecimento um pouco mais avançado pra alterar um arquivo no celular. A menos que você instale a excelente [SlimBean][]. Assumindo que você instalou a SlimBean, pode apenas ir no menu "Interface" dentro do menu de sistema e seguir as instruções:

![Não tem como errar. Para interagir com o passo-a-passo, você pode colocar seu dedinho gorduroso nos itens que ele te ajuda nos procedimentos.]({{ page.images }}/settings-landscape.png)

## E o que isso vai fazer?

Isso irá modificar a densidade da tela do Android. A densidade e o tamanho dos componentes visuais são grandezas diretamente proporcionais, ou seja, diminuir a densidade diminuirá o tamanho dos componentes (exatamente o que precisamos). O truque aqui é reduzir o valor para 200 ou 190, se você quiser um visual mais próximo ainda do de um Tablet (já tentei pra menos, mas ficou uma merda), e fazer a Play Store pensar que seu dispositivo é um Tablet. A verificação da compatibilidade de alguns aplicativos usa a densidade da tela (como o Photoshop Touch, por exemplo), com isso você deixa o dispositivo compatível com esses aplicativos.

> Uma pausa para um momento de cólera rabugenta... qual era o motivo da Samsung ao colocar a densidade padrão do Galaxy Note 2 como 320?!? Isso não é smartphone pra quem faz Coquetel Letrão!! Quem precisar de letras maiores pode mudar as configurações de acessibilidade do aparelho e ver os letreiros na tela normalmente. A SlimBeam vem com ótimos 241 e não deixar a desejar em nada no aspecto visual com esse valor.

Ao reduzirmos o valor para 200, alguns aplicativos que não eram compatíveis com o Galaxy Note 2 (como o Photoshop Touch) agora podem ser instalados sem problemas:

![Esta é a versão para tablets.]({{ page.images }}/play-photoshop.png)

![E esta, para celulares.]({{ page.images }}/play-photoshop-phone.png)

Note que a versão para celulares não está mais disponível, apenas a de tablets, mas isso não é um ponto negativo pois temos a opção de um aplicativo otimizado para telas maiores. Outros aplicativos como o Sketch Mobile não apresentam essa característica, ou seja, você pode ter os dois convivendo em harmonia no seu brinquedinho.

## E se eu não tiver a SlimBean? Como fico?

Você pode tentar alguma alternativa na Play Store. Pesquise por "lcd density" e dê extrema atenção aos comentários dos aplicativos pra não pegar algum duvidoso. Como eu não usei nenhum deles, não vou recomendar nenhum. Se você usou e gostou de algum, compartilhe nos comentários deste post.

Caso queira fazer a mudança manualmente, pode utilizar o [Build Prop Editor][] para mudar o valor da variável **ro.sf.lcd_density**. Apenas evite mudar outras variáveis dele (especialmente se você não tem a menor ideia do que elas significam). Se quiser mudar na mão o valor, altere o arquivo **/system/build.prop** do seu aparelho. Como o **/system** não pode ser modificado, esse é o motivo do procedimento só ser possível com root (todos os procedimentos acabam alterando esse arquivo).

[slimbean]: <http://www.slimroms.net>
[build prop editor]: <{% play_store com.jrummy.apps.build.prop.editor %}>
