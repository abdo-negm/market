import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ContentComponent } from './components/content/content.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ItemComponent,
    ContentComponent,
    
    
  ],
  imports: [
    CommonModule,SharedModule,RouterModule
  ],exports:[AllProductsComponent]
})
export class ProductsModule { }
