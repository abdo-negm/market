import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
@Input() data:any={}
@Output() item=new EventEmitter()
addButton:boolean=false
amount:number=0
add(){
this.item.emit({item:this.data,quantity:this.amount})
}
}
