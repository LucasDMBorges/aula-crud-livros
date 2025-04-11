import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../../../shared/services/book/book.service';
import { Book } from '../../../shared/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss',
  standalone: false,
})
export class BooksListComponent implements OnInit {
  private $book = inject(BookService);
  private router = inject(Router);

  public bookList: Book[] = [];

  ngOnInit(): void {
    this.getLivros();
  }

  private getLivros() {
    this.$book.getLivros().subscribe({
      next: (res) => {
        this.bookList = res;
        console.log('🚀 ~ BookComponent ~ this.$book.getLivros ~ res:', res);
      },
      error: (error) => {
        console.log(
          '🚀 ~ BookComponent ~ this.$book.getLivros ~ error:',
          error
        );
      },
    });
  }

  public redirectToCreataBook() {
    this.router.navigate(['/books/form']);
  }
}
