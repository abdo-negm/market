import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  products:any[]=[];
  categories:[]=[];
  loader:boolean = false;
  cart:any[]=[]
  constructor(private service:ProductsService){

  }
  ngOnInit():void{
    this.getproducts()
    this.getCategories()
  }
getproducts(){
  this.loader=true
  this.service.getAllProducts().subscribe((res:any)=>{
    this.products=res
    this.loader=false
  }, error=>{
    alert("error")
    this.loader=false

  })

}
getCategories(){
  this.loader=true

  this.service.getAllCategories().subscribe((res:any)=>{
    this.categories=res
    this.loader=false

  }, error=>{
    alert("error")
  })
}
filterCategory(event:any){
  let value = event.target.value;
  if(value=="All"){
    this.getproducts()
  }else{
    this.getProductCategory(value)

  }
}
getProductCategory(keyword:string){
  this.loader=true

  this.service.getProductByCategories(keyword).subscribe((res:any)=>{
    this.products=res
    this.loader=false

  }, error=>{
    alert("error")
  })
}
addToCart(event:any){
  if("cart" in localStorage){
    this.cart=JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cart.find(item=>item.item.id == event.item.id)
    if(exist){
      alert("product is already in ypur cart ")
    }else{ this.cart.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cart))}
    

  }else{
    this.cart.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cart))
  }
}
}
