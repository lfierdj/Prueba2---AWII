import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-formato-revision',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formato-revision.component.html',
  styleUrl: './formato-revision.component.css'
})
export class FormatoRevisionComponent {
  id:any
  placa:any
  descripcion:any


  ordenes:any
  route = inject(Router)
  ruta = inject(ActivatedRoute)
  servicio = inject(VehiculosService)
  guardar( datos:any ){
    console.log(datos);
    this.servicio.postPersonal(datos.value).subscribe()
    this.route.navigateByUrl("revision")

  }
  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.ordenes = p
    )

    )

  }
}
