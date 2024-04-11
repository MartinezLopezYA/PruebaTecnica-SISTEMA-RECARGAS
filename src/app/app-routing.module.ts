import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/auth/login/login.component';
import { RecargaComponent } from './containers/recargas/recarga/recarga.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'recarga', component: RecargaComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
