import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';  // Importar Router para la navegación
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-arquitectura',
  imports: [ FooterComponent, FormsModule, ContactoComponent, RouterModule, CommonModule],
  templateUrl: './arquitectura.component.html',
  styleUrl: './arquitectura.component.css'
})
export class ArquitecturaComponent {
navigateTo(section: string): void {
    window.location.hash = section;
}
}
