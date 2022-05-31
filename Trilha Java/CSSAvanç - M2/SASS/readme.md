#### Sass
- Extensão CSS
- Pré-processador, tipo o LESS
- Permite o uso de variáveis, funções, cálculos e hierarquia
- Gem do Ruby, escrita em Ruby
- O arquivo é compilado e depois é utilizado como um arquivo css normal
- Identado

- Mixin
  @mixin fundoP($color){
      back...: sad
  }
  chamada:
  .tipo{
      @include fundoP($cor);
  }

- Import
@use 'base'
@import 'base' --> desuso

- Condicionais
@if(){}
@else{}

- Tirar aspas de string
#{$cor}

- Repetição
$cor: red;
@for $i from 1 through 3 {
    $nome: 'tipo' + $i;
    #{$nome}{
        background-color: lighten($cor, $i*5%);
    }
}