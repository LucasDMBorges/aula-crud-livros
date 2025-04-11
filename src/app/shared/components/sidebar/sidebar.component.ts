import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private $router = inject(Router)
  public routes = [
    {
      title: 'Dashboard',
      path: '/dashboard'
    },
    {
      title: 'Livros',
      path: '/books'
    },
  ]

  public redirect(route: string): void {
    this.$router.navigate([route]);
  }

}
