import { Component, inject } from '@angular/core';
import { UsuariosComponent } from '../../pages/usuarios/usuarios.component';
import { UsuariosService } from '../../services/usuarios.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-usuario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla-usuario.component.html',
  styleUrl: './tabla-usuario.component.css'
})
export class TablaUsuarioComponent {
  servicio = inject(UsuariosService)

  users : any;

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.users = p
    )

    )

  }

  eliminar(id:any){
    this.servicio.deletePersonalID(id).subscribe()
    window.location.reload()
    
  }
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
  Preciomin = 0
  Preciomax = 500

}
