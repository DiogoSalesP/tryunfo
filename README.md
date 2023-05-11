# :construction: PROJETO em construção ! :construction:
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
## 1. Crie o formulário que será usado para adicionar cartas ao baralho
Crie um formulário que será utilizado para criar as cartas do seu baralho.

  * Crie um componente chamado `Form` dentro da pasta `src/components`.

  * Renderize o componente `Form` dentro do componente principal `App`. 

  * <details><summary>Crie os seguintes itens dentro do component <code>Form</code>:</summary>
  
    :bulb: **Dica:** Você pode criar um componente de input. Lembre-se de sempre ter uma label associada para cada input.

    - um campo do tipo `text` que contenha o atributo `data-testid="name-input"`. Este campo será usado para inserir o nome da carta.

    - um campo do tipo `textarea` que contenha o atributo `data-testid="description-input"`. Este campo será usado para inserir a descrição da carta.

    - um campo do tipo `number` que contenha o atributo `data-testid="attr1-input"`. Este campo será usado para inserir o primeiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

    - um campo do tipo `number` que contenha o atributo `data-testid="attr2-input"`. Este campo será usado para inserir o segundo atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

    - um campo do tipo `number` que contenha o atributo `data-testid="attr3-input"`. Este campo será usado para inserir o terceiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

    - um campo do tipo `text` que contenha o atributo `data-testid="image-input"`. Este campo será usado para inserir o caminho para imagem da carta.

    - um campo do tipo `select` que contenha o atributo `data-testid="rare-input"`. Este campo será usado para inserir a raridade da carta e deverá ter as `options`: `normal`, `raro` e `muito raro` (é importante que as opções estejam nessa ordem).

    - um campo do tipo `checkbox` que contenha o atributo `data-testid="trunfo-input"`. Este campo será usado para inserir se a carta é o Super Trunfo.
    
    - um `button`que contenha o atributo  `data-testid="save-button"` e que tenha o texto "Salvar".
  </details>

  <details><summary><strong>Imagem exemplo:</strong></summary>

  ![requisito-1](images/requisito-1.png)

  </details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Será validado se existe um input texto que possui o `data-testid="name-input"`.
  
  - Será validado se existe um input textarea que possui o `data-testid="description-input"`.
  
  - Será validado se existe um input number que possui o `data-testid="attr1-input"`.
  
  - Será validado se existe um input number que possui o `data-testid="attr2-input"`.
  
  - Será validado se existe um input number que possui o `data-testid="attr3-input"`.
  
  - Será validado se existe um input texto que possui o `data-testid="image-input"`.

  - Será validado se existe um input select que possui o `data-testid="rare-input"` com as `options`: `normal`, `raro` e `muito raro`, nesta ordem.

  - Será validado se existe um input checkbox que possui o `data-testid="trunfo-input"`.

  - Será validado se existe um botão que possui o `data-testid="save-button"`.
</details>

---

## 2. Adicione as props necessárias ao componente de formulário 

  * <details><summary>O componente <code>Form</code> deverá receber as seguintes props:</summary>
  
    - `cardName`, uma string;
    - `cardDescription`, uma string;
    - `cardAttr1`, uma string;
    - `cardAttr2`, uma string;
    - `cardAttr3`, uma string;
    - `cardImage`, uma string;
    - `cardRare`, uma string;
    - `cardTrunfo`, um boolean;
    - `hasTrunfo`, um boolean;
    - `isSaveButtonDisabled`, um boolean;
    - `onInputChange`, uma callback;
    - `onSaveButtonClick`, uma callback;
  </details>


  * <details><summary>As props do componente <code>Form</code> deverão ser utilizadas conforme o indicado abaixo:</summary>

    * Campo `name-input`: a propriedade `value` deve receber o valor da prop `cardName` e a prop `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `description-input`: a propriedade `value` deve receber o valor da prop `cardDescription` e a prop `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `attr1-input`: a propriedade `value` deve receber o valor da prop `cardAttr1` e a prop `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `attr2-input`: a propriedade `value` deve receber o valor da prop `cardAttr2` e a prop `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `attr3-input`: a propriedade `value` deve receber o valor da prop `cardAttr3` e a prop `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `image-input`: a propriedade `value` deve receber o valor da prop `cardImage` e a prop `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `rare-input`: a propriedade `value` deve receber o valor da prop `cardRare` e a prop `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `trunfo-input`: a propriedade `checked` deve receber o valor da prop `cardTrunfo` e a prop `onChange` deve receber o valor da prop `onInputChange`.

    * Botão `save-button`: a propriedade `disabled` deve receber o valor da prop `isSaveButtonDisabled` e a prop `onClick` deve receber o valor da prop `onSaveButtonClick`.

    **:bulb: Obs:** por enquanto a prop `hasTrunfo` ainda não foi utilizada, mas não se preocupe, pois ela será usada em breve.
  </details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Será validado se o campo de nome recebe o valor da prop `cardName` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo de descrição recebe o valor da prop `cardDescription` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo do atributo 1 recebe o valor da prop `cardAttr1` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo do atributo 2 recebe o valor da prop `cardAttr2` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo do atributo 3 recebe o valor da prop `cardAttr3` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo de imagem recebe o valor da prop `cardImage` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo de raridade recebe o valor da prop `cardRare` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo de Super Trufo recebe o valor da prop `cardTrunfo` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o botão de salvar é habilitado se o valor da prop `isSaveButtonDisabled` for `false`.

  - Será validado se o botão de salvar é desabilitado se o valor da prop `isSaveButtonDisabled` for `true`.

  - Será validado se a callback `onSaveButtonClick` é chamada quando o botão é clicado. 
</details>

---

## 3. Crie e renderize o componente Card com as props necessárias

  * <details><summary>Crie um componente com o nome <code>Card</code> na pasta <code>src/components</code> e renderize-o  no componente principal <code>App</code>. O componente <code>Card</code> deve receber as seguintes props: </summary>
  
    - `cardName`, uma string;
    - `cardDescription`, uma string;
    - `cardAttr1`, uma string;
    - `cardAttr2`, uma string;
    - `cardAttr3`, uma string;
    - `cardImage`, uma string;
    - `cardRare`, uma string;
    - `cardTrunfo`, um boolean;
  </details>

  * <details><summary>Renderize o componente <code>Card</code> dentro do componente principal <code>App</code>:</summary>

    * Exiba o valor da prop `cardName`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="name-card"`.

    * Exiba a imagem usando a tag HTML `img`, com o atributo `src` que tenha o valor da prop `cardImage` e o atributo `alt` com o valor da prop `cardName`. Essa imagem também deve ter o atributo `data-testid="image-card"`

    * Exiba o valor da prop `cardDescription`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="description-card"`.
    
    * Exiba o valor da prop `cardAttr1`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr1-card"`.

    * Exiba o valor da prop `cardAttr2`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr2-card"`
    * Exiba o valor da prop `cardAttr3`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr3-card"`.

    * Exiba o valor da prop `cardRare`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="rare-card"`.

    * Exiba o texto `Super Trunfo` somente quando o valor da prop `cardTrunfo` for `true`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="trunfo-card"`.

    **Dica: Você pode utilizar renderização condicional para renderizar ou não o texto do super trunfo.**
  </details>

<details><summary>Imagem Exemplo:</summary>

  ![requisito-3](images/requisito-3.png)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />
  
  - Será validado se o componente `data-testid="name-card"` é exibido e possui o valor da prop `cardName`.
  - Será validado se o componente `data-testid="image-card"` é exibido e possui o atributo `src` com o valor da prop `cardImage` e o atributo alt com o valor da prop `cardName`.
  - Será validado se o componente `data-testid="description-card"` é exibido e possui o valor da prop `cardDescription`.
  - Será validado se o componente `data-testid="attr1-card"` é exibido e possui o valor da prop `cardAttr1`.
  - Será validado se o componente `data-testid="attr2-card"` é exibido e possui o valor da prop `cardAttr2`.
  - Será validado se o componente `data-testid="attr3-card"` é exibido e possui o valor da prop `cardAttr3`.
  - Será validado se o componente `data-testid="rare-card"` é exibido e possui o valor da prop `cardRare`.
  - Será validado se o componente `data-testid="trunfo-card"` é exibido quando a prop `cardTrunfo` tiver o valor `true`.
  - Será validado se o componente `data-testid="trunfo-card"` **não** é exibido quando a prop `cardTrunfo` tiver o valor `false`.
</details>

---

## 4. Crie o preview da carta que está sendo criada pelo formulário

Até o momento você criou dois componentes que recebem `props`, agora está na hora de criar o estado dos componentes.
Os componentes `Form` e `Card` irão compartilhar o mesmo estado para exibir as mesmas informações (isso já te dá uma dica de onde o estado deve estar, não é mesmo?).
Quando alguma informação é digitada em algum campo do formulário, o componente `Card` deve exibir a mesma informação em tempo real, criando um preview da carta antes de ela ser salva no baralho (a funcionalidade de salvar será feita nos próximos requisitos). 

Você deverá usar a prop `onInputChange` para passar uma callback para lidar com os eventos de `onChange` dos inputs do formulário. Não se esqueça que os valores dos inputs (que também são passados por props) também devem ser salvos em um estado.

**:bulb: Dica:** o mesmo estado usado para controlar os inputs do formulário podem ser passados para o componente `Card`.

<details><summary><strong>Informações técnicas:</strong></summary>

  * Ao digitar algo no campo com o `data-testid="name-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="name-card"`.
  
  * Ao digitar algo no campo com o `data-testid="description-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="description-card"`.

  * Ao digitar algo no campo com o `data-testid="image-input"` do formulário, o mesmo valor deverá ser passado para o componente `Card`, e ser usado no atributo `src` do elemento com o `data-testid="image-card"`.

  * Ao digitar algo no campo com o `data-testid="attr1-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr1-card"`.

  * Ao digitar algo no campo com o `data-testid="attr2-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr2-card"`.

  * Ao digitar algo no campo com o `data-testid="attr3-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr3-card"`.

  * Ao selecionar algum valor no `select` com o `data-testid="rare-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="rare-card"`.

  * Quando o campo do tipo `checkbox` que possui o `data-testid="trunfo-input"` estiver `checked`, deverá ser renderizado no componente `Card` o texto `Super Trunfo` dentro do elemento com o `data-testid="trunfo-card"`.

  **:bulb: Dica:** para campos que precisem de um valor padrão (como o campo de raridade, por exemplo) você pode iniciar o estado já com esse valor.

  ![requisito-4](images/requisito-4.png)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Será validado se é renderizado no preview da carta o valor digitado no input Nome do formulário.
  - Será validado se é renderizado no preview da carta o valor digitado no input Descrição do formulário.
  - Será validado se é renderizado no preview da carta o valor digitado no input referente ao atributo 1 no formulário.
  - Será validado se é renderizado no preview da carta o valor digitado no input referente ao atributo 2 no formulário.
  - Será validado se é renderizado no preview da carta o valor digitado no input referente ao atributo 3 no formulário.
  - Será validado se é renderizado no preview da carta o `data-testid="trunfo-card"` se o checkbox Super Trunfo for selecionado.
</details>
