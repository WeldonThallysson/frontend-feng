import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { materialProviders } from './app/shared/material.module';   // Importação do materialProviders
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app/constants/configs/interceptorhttp';


bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true // Permite que vários interceptores sejam usados
    },
    provideRouter(routes),
    materialProviders,
    importProvidersFrom(FormsModule)
  ]
}).catch(err => console.error(err));
