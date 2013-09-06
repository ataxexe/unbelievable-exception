---
layout: post
title:  Cuidado com a Herança!
category: Orientação a Objetos
belongs_to: Paradigmas
tags: orientação a objetos, herança, interfaces, composição
images: assets/images/heranca-composicao
---

Muitos autores dizem para evitarmos a herança e usarmos composição sempre que possível. Muitos não
entendem o porquê. Ou por falta de conhecimento de boas práticas ou por as conhecerem tão bem que
fica difícil entender como algo aparentemente tão óbvio possa ser motivo de discórdia.

Neste post tentarei mostrar qual é a herança perigosa e o porquê de ser preferível usar a composição
em vez dela.

## Entendendo o cenário

Juquinha está escrevendo uma API de listas e logo começa o trabalho usando o recurso que mais gosta
da orientação a objetos: a herança. Juquinha logo cria uma classe
`Lista` para representar uma lista de objetos e já vê, de cara, duas especializações possíveis
dela: uma lista que utiliza um array e uma lista Ligada. A herança permitiu reaproveitar o código
bastando herdar a classe `Lista`. Pronto! Uma maravilha! Juquinha é o cara!

![]({{ site.url }}/{{ page.images }}/listas-heranca-1.png)

## Primeiro upgrade

Tudo está uma maravilha e a API de listas é o assunto do momento. Surge, agora, a necessidade de
listas sincronizadas para compartilhá-las com várias *threads*. Juquinha nem hesita e já senta o
dedo na herança. O resultado fica lindo e o código foi praticamente reaproveitado!

![]({{ site.url }}/{{ page.images }}/listas-heranca-2.png)

Novamente o sucesso da API é ecoado em todos os corredores, só se fala no design maravilhoso e...
antes que Juquinha tirasse uma folga, veio a necessidade de listas duplamente Ligadas. Juquinha
logo toma uma dose de energético com cafeína e arrebenta com a versão 3.0 da API:

![]({{ site.url }}/{{ page.images }}/listas-heranca-3.png)

Juquinha foi promovido e sua API foi utilizada em quase todos os sistemas da empresa. Algum tempo
depois, foi solicitado ao Juquinha que incluísse na API alguma funcionalidade para permitir Listas
imutáveis, pois acharam melhor a ideia de usar objetos mutáveis em vez de métodos sincronizados.
Juquinha passa um pouco mais de tempo para implementar desta vez, mas libera a versão:

![]({{ site.url }}/{{ page.images }}/listas-heranca-bagunca.png)

Pronto! A cagada está feita!

## Tem alguma coisa cheirando mal aqui

Agora volte um pouco e dê mais uma olhada nas figuras acima. Perceba que a quantidade de classes
aumenta consideravelmente por causa de uma mera adição de funcionalidade. Seria isso um indício de
que herança não presta? Não! Isso é um indício de que ela foi usada pelo pior motivo possível:
**reaproveitamento de código**.

## O que raios é a herança

A herança é uma forma de uma classe se acoplar a outra de modo que a primeira herde atributos e
comportamentos da segunda. A herança define, então, um relacionamento do tipo **É-UM** entre as
classes. A API do Juquinha parece estar certa, pois uma `ListaLigadaSincronizada` **É-UMA**
`ListaLigada`. Será que é mesmo?

## O problema está na maldita seta

Perceba que, embora pareça que uma `ListaLigadaSincronizada` seja uma `ListaLigada`, uma outra
relação possível seria que uma `ListaLigadaSincronizada` **É-UMA** `Lista`. Isso significa que a
herança deveria ser com a classe `Lista` e não com `ListaLigada`.

Tudo bem! O Juquinha não sabia que poderia fazer daquele jeito. Depois que deram uma bronca nele
porque a API estava ficando muito confusa, Juquinha resolveu estudar um pouco mais e a refatorou.

![Versão com dupla ligação]({{ site.url }}/{{ page.images }}/listas-composicao.png)

Note aqui que, além de `Lista` ser agora uma interface, não temos mais a classe
`ListaLigadaSincronizada` e, sim, uma `ListaSincronizada`. Isso faz muito mais sentido porque a
responsabilidade da `ListaSincronizada` é simplesmente de ser sincronizada. Uma
`ListaLigadaSincronizada` tem responsabilidades demais. Fazendo dessa forma, Juquinha exterminou
aquela colônia de classes e criou um modelo muito mais simples.

## A composição

Até agora parece que não se trocou a herança. De fato, a herança ainda está lá, mas, perceba que as
especializações sincronizada e imutável de lista não possuem, de fato, uma implementação de lista
pois a implementação em si é passada pelos construtores. É aí que está a composição: uma
`ListaImutavel` é composta de outra `Lista` que detém, de fato, a implementação concreta de como
uma lista deve ser, deixando a `ListaImutavel` com a implementação de como a imutabilidade deve ser.

É justamente essa herança que deve ser evitada em favor da composição: a herança para **adicionar
comportamento**. Nesse caso, a `ListaImutavel` irá apenas adicionar o comportamento da imutabilidade
a uma implementação de `Lista`, delegando tudo aquilo o que não for relacionado à imutabilidade à
instância de `Lista` passada pelo construtor. Exemplo:

{% highlight java %}
public class ListaTemperamental implements Lista {

  private final Lista lista;
  
  public ListaTemperamental(Lista lista) {
    this.lista = lista;
  }
  
  public void adicionar(Object objeto) {
    if(System.currentTimeMillis() % 2 == 0) {
      throw new Exception("Estou de TPM, não vou adicionar elemento nenhum!");
    } else {
      lista.adicionar(objeto); //delegação para quem realmente vai fazer o trabalho sujo
    }
  }

}
{% endhighlight %}

Para quem sentiu uma certa familiaridade com esse código, esse é o padrão de projeto **Decorator**.

## Nem tudo são flores

Ok! Agora Juquinha já sabe de uma boa prática e irá usar composição sempre que quiser inserir um
comportamento extra em uma classe. O problema é que estamos recheados de péssimos exemplos, sendo um
deles a própria classe `Properties` do Java. Essa classe herda a classe `Hashtable`, que possui
métodos para incluir objetos como chave. Conseguiu sentir o problema? Isso significa que você pode
fazer algo assim:

{% highlight java %}

Properties props = new Properties();
props.put("chave", new HashMap()); // isso não pode, segundo a documentação da classe
props.setProperty("chave-com-valor-correto", "valor"); // deveria ser assim
props.get(new ArrayList()); // isso também não pode
props.get("chave"); // isso aqui também não
props.getProperty("chave"); // deveria ser assim, mas o retorno disso será null neste caso

Map mapa = new HashMap();
mapa.put(10, false);
mapa.put(new Object(), 42);
props.putAll(mapa); // Uhuuuuuuuuuu, merda no ventilador!! Corre pra debaixo da mesa!!

{% endhighlight %}

Fica bem claro a cagada que foi feita quando olhamos o código fonte da classe `Properties`:

{% highlight java %}
public class Properties extends Hashtable<Object,Object> {
  // mais um monte de esterco aqui
}
{% endhighlight %}

Como isso poderia ser evitado? Simples! Com uma composição:

{% highlight java %}
public class Properties {
  private Hashtable table;
  // bla bla bla
}
{% endhighlight %}

Dessa forma, os métodos de `Hashtable` não ficariam expostos e métodos que recebem `Hashtable` não
poderiam receber `Properties`. O núcleo da catinga era justamente o `extends Hashtable`. Com isso, o
contrato ficou definido na documentação, onde é explicado que não se pode chamar alguns métodos e...
espera um pouco... a documentação definindo o quê se pode ou não fazer! Agora é merda de elefante na
turbina do avião!

## Violação de princípios

Essa implementação da API viola o [princípio de substituição de Liskov][liskov].
Esse princípio diz que, se **S** é um subtipo de **T**, então pode-se substituir **T** por **S** sem
acarretar mudanças. Isso não ocorre com `Properties`.

Além de tudo o que vimos até agora, a herança tem alguns pontos fracos que precisam ser
cuidadosamente analisados:

- Aumenta o acoplamento entre as classes
- Pode quebrar o encapsulamento

Aqui a coisa fede bastante, ao se acoplar a uma implementação, passamos a depender dela. Isso pode
gerar alguns probleminhas, como pode ser visto na implementação de um `HttpServlet`:

{% highlight java %}
public class MeuIngenuoServlet extends HttpServlet {

  public void init(ServletConfig config) {
    // código lindo de inicialização aqui
    // não chamei o método da superclasse
  }
 
  public void doGet(HttpServletRequest request, HttpServletResponse response) {
    getServletConfig().getInitParameter("parametro"); // fudeu!!! NullPointerException
  }

}
{% endhighlight %}

Esse *servlet* será o maior produtor de `NullPointerException` de um sistema. Isso porque o método
init da classe `HttpServlet` **precisa** ser chamado para guardar o objeto `ServletConfig`. Isso
implica que o nosso ingênuo servlet deveria saber como foi implementada a classe `HttpServlet`,
uma clara quebra de encapsulamento e, de brinde, uma solda industrial entre as classes.

Agora você já sabe: **evite a herança, favoreça a composição**. Existem técnicas para se trabalhar
com herança e Joshua Bloch as explica no livro *Effective Java* como *Design for Inheritance*.

[liskov]: <http://pt.wikipedia.org/wiki/Princ%C3%ADpio_da_substitui%C3%A7%C3%A3o_de_Liskov>
