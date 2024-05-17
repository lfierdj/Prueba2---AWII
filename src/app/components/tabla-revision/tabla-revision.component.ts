import { Component, inject } from '@angular/core';
import { VehiculosService } from '../../services/vehiculos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-revision',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla-revision.component.html',
  styleUrl: './tabla-revision.component.css'
})
export class TablaRevisionComponent {
  servicio = inject(VehiculosService)
  
  vehiculos : any;

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.vehiculos = p
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
  
}

