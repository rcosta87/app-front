import { Categoria } from './../../categorias/categoria/categoria.model';
import { Component, OnInit, Input} from '@angular/core';
import { Livro } from "./book.model";

import { CategoriasService } from './../../categorias/categorias.service';


@Component({
  selector: 'mt-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  @Input() livro: Livro;
  categoria: Categoria

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.categoriaService.categoriaByID(this.livro.categoriaId)
      .subscribe(categoria => this.categoria = categoria)
  }


}
