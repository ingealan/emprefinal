import { Routes } from '@angular/router';
import { AbogadoComponent } from './components/abogado/abogado.component';
import { HomeComponent } from './components/home/home.component';
import { MedicoComponent } from './components/medico/medico.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { FootergComponent } from './components/footerg/footerg.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redireccionar al home
    { path: 'home', component: HomeComponent },  // Página de inicio
    { path: 'abogado', component: AbogadoComponent },  // Página del abogado
    { path: 'medico', component: MedicoComponent },  // Página del médico
    { path: 'contacto', component: ContactoComponent },  // Página de contacto
    {path: 'footer', component: FooterComponent},  // Página del pie de página
    { path: 'footerg', component: FootergComponent },  // Página del pie de página (versión g)
];
