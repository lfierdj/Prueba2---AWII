import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  //servicio = inject(LoginService);
  cerrar(){
    localStorage.removeItem('currentUser')
    //localStorage.setItem("token",'false')
    localStorage.removeItem('token')
    window.location.href='login'
  }

}
