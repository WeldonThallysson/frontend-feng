import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { login } from '../../services/Auth/Login/login';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private snackBar: MatSnackBar ) {}

  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (token) {
      this.router.navigate(['/home']);
    }
  }

  login = async () => {
    try {
      const response = await login({ email: this.email, password: this.password });


      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('id', String(response.data.id))

      this.router.navigate(['/home']);

      this.snackBar.open("Bem vindo!", "Fechar", {
        duration: 3000,
        horizontalPosition:"center",
        verticalPosition: "top",

        panelClass: ['success-snackbar']
      })



    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  }

  goToCadastro = () => {
    this.router.navigate(['/register']);
  }
}
