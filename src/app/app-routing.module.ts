import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPorterosComponent } from './Views/form-porteros/form-porteros.component';
import { ListPorterosComponent } from './Views/list-porteros/list-porteros.component';
import { DetailPorteroComponent } from './Views/detail-portero/detail-portero.component';

const routes: Routes = [
  { path: '', component: ListPorterosComponent },
  { path: 'CrearPortero', component: FormPorterosComponent },
  { path: 'EditarPortero/:id', component: FormPorterosComponent },
  { path: 'DetallePortero/:id', component: DetailPorteroComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
