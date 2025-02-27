import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { getAllOrders } from '../../services/Orders/getAllOrders'; // Importando o serviço
import { IResponseGetAllOrders } from '../../interfaces/services/Orders/interface.getall.orders';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';  // Importando MatProgressSpinnerModule
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { deleteOrder } from '../../services/Orders/deleteOrder';

export interface Pedido {
  id: string;
  nome: string;
  usuario: string;
  valor: number;
  data: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule

  ]
})

export class HomeComponent {
  pedidos: any[] = [];
  filtroDataInicio: string | null = null;
  filtroDataFim: string | null = null;
  filtroNomeOuValor: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  applyFilters() {
    const startDate = this.filtroDataInicio?.split('T');
    const endDate = this.filtroDataFim?.split('T');

    const startDateFormated = startDate ? `${startDate[0]} ${startDate[1]}` : null;
    const endDateFormated = endDate ? `${endDate[0]} ${endDate[1]}` : null;

    const isNumeric = !isNaN(Number(this.filtroNomeOuValor)) && this.filtroNomeOuValor.trim() !== '';

    const filterValue = isNumeric ? Number(this.filtroNomeOuValor) : null;
    const filterClientName = isNumeric ? null : this.filtroNomeOuValor;

    this.isLoading = true;


    getAllOrders({
      startDate: startDateFormated,
      endDate: endDateFormated,
      value: filterValue,
      clientName: filterClientName
    }).then(response => {
      this.pedidos = response.data.map((pedido) => ({
        id: pedido.id,
        nome: pedido.itens.map((item: any) => item.nome).join(', '),
        usuario: pedido.cliente.nome,
        valor: pedido.itens.reduce((acc: number, item: any) => acc + parseFloat(item.valor_unitario), 0),
        data: pedido.data
      }));
      this.isLoading = false;
    }).catch(error => {
      console.error('Erro ao carregar pedidos', error);
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.applyFilters();
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  cancelarPedido(pedidoId: number) {
    deleteOrder({ id: Number(pedidoId) }).then(() => {
      this.applyFilters();
      this.isLoading = false;
    }).catch(error => {
      console.error('Erro ao carregar pedidos', error);
      this.isLoading = false;
    });
  }
}
