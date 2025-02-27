import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, HeaderService } from './components/header/header.component';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule,
    MatIconModule,


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showHeader: boolean = false;

  title = 'frontend-feng';

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.showHeader$.subscribe((isVisible) => {
      this.showHeader = isVisible;
    });
  }

}
