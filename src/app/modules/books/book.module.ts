import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { MatCardModule } from '@angular/material/card';
import { BookFormComponent } from './book-form/book-form.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [BookComponent, BooksListComponent, BookFormComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MatInputModule,
    MatSelectModule,
  ],
})
export class BookModule {}
