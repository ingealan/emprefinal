import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importar RouterModule aquí
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Importar Router para la navegación
import { FootergComponent } from '../footerg/footerg.component';

@Component({
  selector: 'app-abogado',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FootergComponent], // Asegúrate de incluir RouterModule en los imports
  templateUrl: './abogado.component.html',
  styleUrls: ['./abogado.component.css']
})
export class AbogadoComponent {
  // Habilidades del abogado
  skills: string[] = [
    'Derecho Civil',
    'Contratos',
    'Resolución de conflictos',
    'Arbitraje',
    'Asesoría legal empresarial'
  ];

  // Casos recientes
  cases = [
    {
      title: 'Negociación contractual - Empresa XYZ',
      description: 'Asesoría y negociación de contrato comercial entre dos grandes empresas...',
      result: 'Contrato exitosamente firmado sin litigios.'
    },
    {
      title: 'Litigio por incumplimiento de contrato',
      description: 'Representación legal en disputa por arrendamiento...',
      result: 'Resolución favorable tras acuerdo extrajudicial.'
    },
    {
      title: 'Caso de arbitraje comercial',
      description: 'Gestión integral de proceso arbitral...',
      result: 'Arbitraje concluido con resultado positivo.'
    }
  ];

  selectedCase: number | null = null;

  // Función para alternar los casos desplegables
  toggleCase(index: number): void {
    this.selectedCase = this.selectedCase === index ? null : index;
  }

  // Función para el formulario de contacto
  enviarFormulario(): void {
    alert('¡Gracias por tu mensaje! Te responderemos a la brevedad.');
  }

  // Función para la navegación interna
  navigateTo(section: string): void {
    window.location.hash = section; // Navega a la sección especificada en el navbar
  }

  // Método para ir a la página de inicio
  navigateHome(): void {
    this.router.navigate(['/home']);  // Navegar a la ruta /home
  }

  constructor(private router: Router) {}
}
