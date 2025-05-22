import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { FootergComponent } from "../footerg/footerg.component";
import { Router, RouterModule } from '@angular/router';  // Importar Router para la navegación

@Component({
  selector: 'app-medico',
  imports: [FooterComponent, ContactoComponent, FootergComponent, RouterModule],
  templateUrl: './medico.component.html',
  styleUrl: './medico.component.css'
})
export class MedicoComponent {
  navigateTo(section: string): void {
    // Actualiza el hash de la URL
    window.location.hash = section;
  }
}
