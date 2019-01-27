import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria/categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  cats: Categoria[];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categoriasService.consumeCategorias()
      .subscribe(cats => this.cats = cats)
  }

}
