import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { Autor } from '../../../shared/models/book.model';
import { AuthorService } from '../../../shared/services/author/author.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
  standalone: false,
})
export class BookFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private $author = inject(AuthorService);

  public bookForm = this.fb.group({
    id: [null],
    titulo: ['', Validators.required],
    editora: [''],
    preco: [0],
    paginas: [0],
    autor: [''],
  });

  public autorOptions: Autor[] = [];

  ngOnInit(): void {
    this.getAuthorOptions();
  }

  private getAuthorOptions() {
    this.$author.getAthor().subscribe({
      next: (res) => {
        console.log(
          '🚀 ~ BookFormComponent ~ this.$author.getAthor ~ res:',
          res
        );
        this.autorOptions = res;
      },
    });
  }

  public handleAuthor(event: any) {
    console.log('🚀 ~ BookFormComponent ~ handleAuthor ~ event:', event);
    const value = this.bookForm.getRawValue();
    console.log('🚀 ~ BookFormComponent ~ handleAuthor ~ value:', value);
  }
}
