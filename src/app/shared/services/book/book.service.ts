import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private httpClient = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  public getLivros(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/livros`);
  }
}
