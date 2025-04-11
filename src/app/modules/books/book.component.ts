import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  standalone: false
})
export class BookComponent implements OnInit {
  private $book = inject(BookService);

  ngOnInit(): void {
    this.getLivros()
  }

  private getLivros() {
    this.$book.getLivros().subscribe({
      next: (res) => {
        console.log("🚀 ~ BookComponent ~ this.$book.getLivros ~ res:", res)
      },
      error: (error) => {
        console.log("🚀 ~ BookComponent ~ this.$book.getLivros ~ error:", error)
      }
    })
  }

}
