import { Categoria } from './categoria.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria: Categoria

  constructor() { }

  ngOnInit() {

  }

}
