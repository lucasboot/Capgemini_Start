import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "Celular XL", descricao: "Muito bom", esgotado: false },
    {id: 2, nome: "Celular XXL", esgotado: false },
    {id: 3, nome: "Celular aaXL", esgotado: true }
  ]
}
