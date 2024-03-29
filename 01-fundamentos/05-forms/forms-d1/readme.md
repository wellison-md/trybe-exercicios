# :gear: Exercícios - Criando um formulário para concorrer a uma viagem

Imagine que você está surfando na internet. Você agora é uma pessoa desenvolvedora, cansada após finalmente terminar seus estudos e pensando nas suas maravilhosas e merecidas férias. Então você se depara com um anúncio do concurso TrybeTrip, que premia com uma viagem totalmente paga e com várias opções de destino. Como você imagina que seria a página para concorrer a essa viagem? Concorda que seria uma espécie de formulário?

O exercício hoje será desenvolver uma página web com o formulário da TrybeTrip. Desenvolva-o em um arquivo chamado `form.html`. A estruturação de sua página deverá ficar semelhante à imagem abaixo.


**Formato do Formulário TrybeTrip.**

![](./assets/Formato%20do%20Formul%C3%A1rio%20TrybeTrip.png)

A imagem acima foi criada no Excalidraw. Vale a pena dar uma olhada.

**De olho nas dicas 👀:**

Crie o costume de adicionar IDs a elementos únicos e classes a elementos com comportamentos similares, pois isso facilitará muito sua vida como pessoa desenvolvedora; Procure saber mais sobre as Tags `<label>` e `<fieldset>`.

O formulário deverá permitir que a pessoa usuária insira os seguintes campos:

Campo | Especificação |
:--- | :--- |
Nome completo | Limitado entre 10 e 40 caracteres. |
E-mail | Limitado entre 10 e 50 caracteres. |
Destino prefereido | 4 opções: Cidade, Campo, Praia, Montanhas. |
Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip? | Limite de 500 caracteres. |
 Qual a melhor data para realizar sua viagem? | |
Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe? | Sim / Não |
Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros. | Sim / Não |

    

Esses serão os principais campos utilizados nos próximos exercícios.

- [x] **1.** Crie um botão para enviar as informações preenchidas.

- [x] **2.** Agora vamos utilizar um pouco de javascript. Para isso, crie o arquivo `script.js` e o referencie no HTML.

:dart: **Dica:** Coloque a tag `<script>` no final do seu body.

- [x] **3.** Interrompa o comportamento padrão do botão submit utilizando o método `preventDefault()`.

- [x] **4.** Crie um botão que limpe as informações contidas nos campos.

## Bônus

- [x] **5.** A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

- [x] **6.** Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: `‘Dados Inválidos’`. Caso contrário, a mensagem `‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’` deverá aparecer na tela.
