import { Categoria } from './../../categorias/categoria/categoria.model';
export interface Livro {
  id: string;
  name: string;
  rating: number;
  imagePath: string;
  about?: string;
  price: number;
  categoriaId?: string,
  autorId: string,
  autorName: string,
  numeroPaginas: number,
  editora: string,
  anoEdicao: string,
  categoriaName: string
}
