import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user: { name: string } | null = null;

  login() {
    // Simula login con JWT (en app real vendría de Azure AD o API)
    const token = btoa(JSON.stringify({ name: 'Anthony' }));
    localStorage.setItem('jwt', token);
    this.user = { name: 'Anthony' };
  }

  logout() {
    localStorage.removeItem('jwt');
    this.user = null;
  }

  ngOnInit() {
    const token = localStorage.getItem('jwt');
    if (token) {
      try {
        const payload = atob(token);
        this.user = JSON.parse(payload);
      } catch {
        this.user = null;
      }
    }
  }
}

