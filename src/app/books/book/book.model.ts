export interface Book {
  id: string;
  name: string;
  rating: number;
  imagePath: string;
  about?: string;
  price: number;
  categoriaId?: string,
  autorId?: string,
  numeroPaginas: number,
  editora: string,
  anoEdicao: string,
  categoriaName: string
  autorName?:string
}
