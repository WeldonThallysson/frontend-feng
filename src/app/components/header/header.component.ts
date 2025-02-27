import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private showHeaderSubject = new BehaviorSubject<boolean>(false);
  showHeader$ = this.showHeaderSubject.asObservable();

  setHeaderVisibility(isVisible: boolean): void {
    this.showHeaderSubject.next(isVisible);
  }
}

@Component({
  imports:[
    MatIconModule
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private headerService: HeaderService) {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id')
    this.headerService.setHeaderVisibility(false);
    this.router.navigate(['/login']);
  }
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}

