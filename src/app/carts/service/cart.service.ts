import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private  http:HttpClient) { }
  creatNewCart(model:any){
    return this.http.post("https://fakestoreapi.com/carts",model)
  }
}
