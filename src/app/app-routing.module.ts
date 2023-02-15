import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:"productList",component:ProductListComponent},
  {path:"buy/:id",component:BuyProductComponent},
  {path:"payment",component:PaymentComponent},
  {path:"login",component:LoginComponent},
  {path:"**",redirectTo:"productList",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
