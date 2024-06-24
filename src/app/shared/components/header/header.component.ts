import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(){

}
header_var=false
@HostListener("document:scroll")
scrollFunction(){
if(document.body.scrollTop>5||document.documentElement.scrollTop>5){
  this.header_var=true
}else{
  this.header_var=false
}
}

}
