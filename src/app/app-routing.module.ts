import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AuthComponent } from './auth/components/auth/auth.component';


const routes: Routes = [
{path:"products", component:AllProductsComponent},
{path:"carts",component:CartComponent},
{path: "details/:id", component:ProductsDetailsComponent},
{path:"auth",component:AuthComponent},

{path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
