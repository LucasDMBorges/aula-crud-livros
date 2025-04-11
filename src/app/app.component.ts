import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BookModule } from './modules/books/book.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, BookModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aula-crud-livros';
}
