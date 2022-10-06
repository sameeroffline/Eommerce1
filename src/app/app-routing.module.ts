import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelperComponent } from './helper/helper.component';
import { OrdersComponent } from './orders/orders.component';
 

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'orders',component:OrdersComponent},
  {path:'helper',component:HelperComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
