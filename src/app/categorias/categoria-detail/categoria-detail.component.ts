import { Categoria } from './../categoria/categoria.model';
import { ActivatedRoute } from '@angular/router';

import { Livro } from './../../books/book/book.model';
import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './../categorias.service';


@Component({
  selector: 'mt-categoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: ['./categoria-detail.component.css']
})
export class CategoriaDetailComponent implements OnInit {

  livros: Livro[]
  categoria: Categoria


  constructor(private categoriasService: CategoriasService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoriasService
      .categoriaByID(this.route.snapshot.params["id"])
      .subscribe(categoria => (this.categoria = categoria));

    this.categoriasService.booksOfCategory(this.route.snapshot.params["id"])
      .subscribe(livros => this.livros = livros)

  }

}
