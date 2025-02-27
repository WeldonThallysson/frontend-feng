import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HeaderService } from '../components/header/header.component';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const headerService = inject(HeaderService);

  if (token) {
    headerService.setHeaderVisibility(true);
    return true;
  } else {
    headerService.setHeaderVisibility(false);
    router.navigate(['/login']);
    return false;
  }
};





