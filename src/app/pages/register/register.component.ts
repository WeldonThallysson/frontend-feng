import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { register } from '../../services/Auth/Register/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner  } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinner

  ]
})

export class RegisterComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  isLoading: boolean = false;


  constructor(private router: Router, private snackBar: MatSnackBar ) {}

  register = async () => {
    this.isLoading = true
    try {
      await register({
        name: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password });
        this.isLoading = false

      this.router.navigate(['/login']);

      this.snackBar.open("Cadastro realizado com sucesso", "Fechar", {
        duration: 3000,
        horizontalPosition:"center",
        verticalPosition: "top",
        panelClass: ['success-snackbar'],
      })

    } catch (error: any) {
      this.isLoading = false
      this.snackBar.open(error.message, "Fechar", {
        duration: 3000,
        horizontalPosition:"center",
        verticalPosition: "top",
        panelClass: ['success-snackbar'],
      })
      console.error('Erro ao cadastrar usuário', error);
    }
  }

  goToLogin = () => {
    this.router.navigate(['/login']);
  }
}
