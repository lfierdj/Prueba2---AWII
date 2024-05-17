import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RevisionComponent } from './pages/revision/revision.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { Error404Component } from './pages/error404/error404.component';
import { FormatoRevisionComponent } from './pages/formato-revision/formato-revision.component';
import { EditarRevisionComponent } from './pages/editar-revision/editar-revision.component';
import { Error403Component } from './pages/error403/error403.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'revision',component:RevisionComponent, canActivate: [authGuard], data: { role: 'mecanico'}},
    {path:'usuarios',component: UsuariosComponent,canActivate: [authGuard], data: { role: 'admin'}},
    {path:'fRevision',component:FormatoRevisionComponent, canActivate: [authGuard], data: { role: 'mecanico'}},
    {path: 'editar-revision/:idRevision', component: EditarRevisionComponent, canActivate: [authGuard], data: { role: 'mecanico'}},
    {path: 'noauth', component: Error403Component},
    { path: 'editar-user/:idUser', component: EditarUsuariosComponent, canActivate: [authGuard], data: { role: 'admin'}},
    
    {path:'**',component: Error404Component},

];
