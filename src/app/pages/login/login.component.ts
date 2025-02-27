import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importando FormsModule
import { MatButtonModule } from '@angular/material/button';  // Importando Material Button
import { MatCardModule } from '@angular/material/card';  // Importando Material Card
import { MatFormFieldModule } from '@angular/material/form-field';  // Importando Material FormField
import { MatInputModule } from '@angular/material/input';  // Importando Material Input
import { login } from '../../services/Auth/Login/login';   // Importando o AuthService
import { MatSnackBar } from '@angular/material/snack-bar';  // Importando o MatSnackBarModule

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,  // Adicionando FormsModule
    MatButtonModule,  // Adicionando MatButtonModule
    MatCardModule,  // Adicionando MatCardModule
    MatFormFieldModule,  // Adicionando MatFormFieldModule
    MatInputModule,  // Adicionando MatInputModule,

  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private snackBar: MatSnackBar ) {}

  ngOnInit(): void {
    const token = localStorage.getItem("token")
    // Verifica se o usuário já está autenticado
    if (token) {
      // Redireciona para a home se estiver autenticado
      this.router.navigate(['/home']);
    }
  }

  // Função de login que chama o serviço de autenticação
  login = async () => {
    try {
      // Chamando a função de login do serviço e passando os parâmetros
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
      // Aqui você pode exibir uma mensagem de erro para o usuário
    }
  }

  // Função para navegar para a tela de cadastro
  goToCadastro = () => {
    this.router.navigate(['/register']);
  }
}
