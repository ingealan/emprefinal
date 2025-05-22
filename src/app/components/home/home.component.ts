import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FootergComponent } from '../footerg/footerg.component';
@Component({
  selector: 'app-home',
  imports: [FootergComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  irA(perfil: string) {
    switch (perfil) {
      case 'abogado':
        this.router.navigate(['/abogado']); // Redirige a la página del abogado
        break;
      case 'medico':
        this.router.navigate(['/medico']); // Redirige a la página del médico
        break;
      case 'arquitecto':
        this.router.navigate(['/arquitecto']); // Redirige a la página del arquitecto
        break;
      default:
        console.log('Perfil no encontrado');
    }
  }
}
