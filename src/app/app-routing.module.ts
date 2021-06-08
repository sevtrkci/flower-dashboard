import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowerComponent } from './components/flower/flower.component';
import { FlowerAddComponent } from './components/flower-add/flower-add.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {path:"",component:FlowerComponent},
  {path:"flowers",component:FlowerComponent},
  {path:"flowers-add",component:FlowerAddComponent},
  {path:"admin", component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


