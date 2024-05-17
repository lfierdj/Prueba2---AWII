import { Component } from '@angular/core';
import { TablaUsuarioComponent } from '../../components/tabla-usuario/tabla-usuario.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaUsuarioComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

}
