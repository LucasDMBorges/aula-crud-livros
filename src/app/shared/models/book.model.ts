export interface Autor {
  _id: string;
  nome: string;
  idade?: number;
}

export interface Book {
  id: string;
  titulo: string;
  editora?: string;
  preco?: number;
  paginas?: number;
  autor: Autor;
}
