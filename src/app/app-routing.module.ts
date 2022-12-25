import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleDetailsComponent } from './home/vehicle-details/vehicle-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,data: { title: 'Home'},
  children: [
    { path: '', redirectTo: 'home',pathMatch: 'full' },
    { path: 'vehicleDetails', component: VehicleDetailsComponent, data: { title: 'Vehicle Details'} },
   ]},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
