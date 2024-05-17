import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../services/vehiculos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-revision',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-revision.component.html',
  styleUrl: './editar-revision.component.css'
})
export class EditarRevisionComponent {
  id:any
  placa:any
  descripcion:any
 
  

vehiculos:any

servicio = inject(VehiculosService)
route = inject(Router)
ruta = inject(ActivatedRoute)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()
    this.route.navigateByUrl("fRevision")
  }
  ngOnInit(){
    this.ruta.params.subscribe( p =>{
     this.id= p['idRevision']
 
     this.servicio.getPersonalUnico(this.id).subscribe( e =>{
       this.vehiculos= e
     })
 
 
    })
   }
}
