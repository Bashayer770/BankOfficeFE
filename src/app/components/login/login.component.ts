import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log(res);
        this.auth.setToken(res.token);
        console.log(1);
        this.router.navigate(['/home']);
        console.log(2);
      },
      error: () => {
        this.error = 'Invalid username or password';
      },
    });
  }
}
