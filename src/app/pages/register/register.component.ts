import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importando FormsModule
import { MatButtonModule } from '@angular/material/button';  // Importando Material Button
import { MatCardModule } from '@angular/material/card';  // Importando Material Card
import { MatFormFieldModule } from '@angular/material/form-field';  // Importando Material FormField
import { MatInputModule } from '@angular/material/input';  // Importando Material Input
import { register } from '../../services/Auth/Register/login';    // Importando o AuthService
import { MatSnackBar } from '@angular/material/snack-bar';  // Importando o MatSnackBarModule

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    FormsModule,  // Adicionando FormsModule
    MatButtonModule,  // Adicionando MatButtonModule
    MatCardModule,  // Adicionando MatCardModule
    MatFormFieldModule,  // Adicionando MatFormFieldModule
    MatInputModule,  // Adicionando MatInputModule,

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
      // Chamando a função de login do serviço e passando os parâmetros
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
        panelClass: ['success-snackbar'],  // Classe CSS personalizada (para estilo)
      })



    } catch (error) {
      console.error('Erro ao fazer login', error);
      // Aqui você pode exibir uma mensagem de erro para o usuário
    }
  }

  // Função para navegar para a tela de cadastro
  goToLogin = () => {
    this.router.navigate(['/login']);
  }
}
