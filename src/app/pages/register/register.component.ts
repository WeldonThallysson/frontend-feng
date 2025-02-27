import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { register } from '../../services/Auth/Register/login';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

  ]
})

export class RegisterComponent {
  name: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private snackBar: MatSnackBar ) {}

  login = async () => {
    try {
      await register({
        name: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password });


      this.router.navigate(['/login']);

      this.snackBar.open("Cadastro realizado com sucesso", "Fechar", {
        duration: 3000,
        horizontalPosition:"center",
        verticalPosition: "top",
        panelClass: ['success-snackbar'],
      })



    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  }

  goToLogin = () => {
    this.router.navigate(['/login']);
  }
}
