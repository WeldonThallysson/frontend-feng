import { Component, OnInit } from '@angular/core';
import { getAllProduct } from '../../services/Products/getAllProduct'; // Importe o serviço
import { IResponseItensProduct } from '../../interfaces/services/Products/interface.getall.product';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { RegisterOrder } from '../../services/Orders/registerOrder';
import { getDetailsClients } from '../../services/Clients/getDetailsClients';
import { MatSnackBar } from '@angular/material/snack-bar';  // Importando o MatSnackBarModule


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [
    CommonModule, // Necessário para diretivas como ngIf, ngFor
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule
  ] // Corrigi de styleUrl para styleUrls
})
export class ProductsComponent implements OnInit {
  produtos: IResponseItensProduct[] = [];
  isLoading: boolean = true;
  clientId: number = Number(localStorage.getItem("id"));

  constructor(private router: Router, private snackBar: MatSnackBar ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  // Função para buscar os produtos
  carregarProdutos(): void {
    getAllProduct().then(response => {
      this.produtos = response.data;
      this.isLoading = false;
    }).catch(error => {
      console.error('Erro ao carregar os produtos', error);
      this.isLoading = false;
    });
  }

  fazerPedido(produto: IResponseItensProduct): void {
    if (this.clientId === 0) {
      console.error('ID do cliente não encontrado!');
      return;
    }

    const orderData = {
      client_id: this.clientId,
      itens_id: [produto.id]
    };

    RegisterOrder(orderData).then(response => {
      this.snackBar.open("Pedido realizado com sucesso", "Fechar", {
        duration: 3000,
        horizontalPosition:"center",
        verticalPosition: "top",
        panelClass: ['success-snackbar']
      })

      this.router.navigate(['/home'])

    }).catch(error => {
      console.error('Erro ao realizar o pedido', error);
    });
  }
}
