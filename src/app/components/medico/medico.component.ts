import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { FootergComponent } from "../footerg/footerg.component";

@Component({
  selector: 'app-medico',
  imports: [FooterComponent, ContactoComponent, FootergComponent],
  templateUrl: './medico.component.html',
  styleUrl: './medico.component.css'
})
export class MedicoComponent {

}
