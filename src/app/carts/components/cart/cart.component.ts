import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private service:CartService){}
  cart:any[] = []
  total:any=0
  success:boolean=false
  ngOnInit():void{
    this.getCardProduct()

  }
  getCardProduct(){
    if("cart" in localStorage){
      this.cart=JSON.parse(localStorage.getItem("cart")!)
  }
  this.getTotal()

} 
minAmount(index:number){
  this.cart[index].quantity--
  this.getTotal()
  localStorage.setItem("cart",JSON.stringify(this.cart))

}
detectChange(){
  this.getTotal()
  
  localStorage.setItem("cart",JSON.stringify(this.cart))

}
deleteProduct(index:number){
this.cart.splice(index,1)
this.getTotal()

localStorage.setItem("cart",JSON.stringify(this.cart))

}
plusAmount(index:number){
  this.cart[index].quantity++
  this.getTotal()
  localStorage.setItem("cart",JSON.stringify(this.cart))

}




getTotal(){
  this.total = 0
  for(let x in this.cart){
    this.total +=this.cart[x].item.price*this.cart[x].quantity+5
  }
   
}


addCart(){
let product = this.cart.map(item=>{
return {productId:item.item.id,quantity:item.quantity}
}) 
 let Model={
    userId:5,
    date: new Date(),
    products:product
  }
this.service.creatNewCart(Model).subscribe(res=>{
this.success=true
})
  
}

}
