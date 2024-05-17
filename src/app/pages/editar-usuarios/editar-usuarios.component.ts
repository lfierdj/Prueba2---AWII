import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-usuarios.component.html',
  styleUrl: './editar-usuarios.component.css'
})
export class EditarUsuariosComponent {
  id:any
  email:any
  password:any
  role:any

  users:any
  servicio = inject(UsuariosService)
  route = inject(Router)
  ruta = inject(ActivatedRoute)

    editar(datos:any){
      this.servicio.putNosotros(datos.value).subscribe()
      this.route.navigateByUrl("usuarios")
    }
    ngOnInit(){
      this.ruta.params.subscribe(p =>{
        this.id= p['idUser']

        this.servicio.getPersonalUnico(this.id).subscribe(e =>{
          this.users=e
        })
      })
    }

}
