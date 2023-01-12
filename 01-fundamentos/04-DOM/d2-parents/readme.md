# 🚀 Exercícios - aprofunde seu conhecimento

### 🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

Imagine que você trabalha em uma agência de viagens e a sua liderança informou que você será a pessoa responsável por dar início a nova página inicial (landing page) da empresa.

Seu objetivo nesse novo desafio é criar tags HTML usando a manipulação do DOM com JavaScript. Para isso, utilize a estrutura inicial abaixo:

>Observação 🔎: Deixamos um estilo inicial definido na estrutura abaixo para que você possa visualizar se os elementos na página foram criados. Ao final do exercício, fique a vontade para usar a sua criatividade e mudar o texto e os estilos da página.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício</title>
    <style>
      `section` {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>
```

Para criar a página inicial da agência de viagens, você deve utilizar apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.

Para dar início a página, você deve criar algumas tags:

1. Adicione a tag `h1` com o texto `TrybeTrip - Agência de Viagens` como filho da tag body;
2. Adicione a tag `main` com a classe `main-content` como filho da tag `body`;
2. Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no passo 2;
3. Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;
4. Adicione a tag `section` com a classe `left-content` como filho da tag `main` criada no passo 2;
5. Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no passo 2;
6. Adicione uma imagem com src configurado para o valor `https://picsum.photos/200` e classe `small-image`. Esse elemento deve ser filho do `section` criado no passo 5;
7. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do `section` criado no passo 6;
8. Adicione 3 tags `h3`, todas sendo filhas do `main` criado no passo 2.

Após criar as tags anteriores, você mostrou para a sua liderança como estava a estrutura inicial da página. Sua liderança então pediu para que você fizesse algumas alterações:

10. Adicione a classe `title` na tag `h1` criada;
10. Adicione a classe `description` nas 3 tags `h3` criadas;
11. Remova a `section` criada no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
12. Centralize a `section` criada no passo 6 (aquele que possui a classe `right-content`).

**De olho na dica 👀::** Para centralizar a `section`, basta configurar o `margin-right`: auto da `section`;

14. Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
14. Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
