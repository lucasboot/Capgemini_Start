import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {
  nome="Lucas";
  dataNascimento="1999-01-04";
  url="/assets/lucas.webp";
  mostrarDataNascimento(){
    alert(`A data de nascimento do Lucas é: ${this.dataNascimento}`);
  }
  }


