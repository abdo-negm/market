import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {


  ngOnInit():void{
const localData = localStorage.getItem('auth')
if(localData != null){
this.auth= JSON.parse(localData)
}
  }
auth:any[]=[]
signUp:any={
  userName:"",
  phone:"",
  email:"",
  password:""
}
login:any={
  email:"",
  password:""
}
onSignUp(){
  this.auth.push(this.signUp)
  localStorage.setItem("auth",JSON.stringify(this.auth))
 this.signUp ={
    userName:"",
    phone:"",
    email:"",
    password:""
  }
}
onLogin(){

  const isUserExist = this.auth.find(m=>m.userName == this.login.userName && m.password == this.login.password)
if(isUserExist != undefined){
  alert("Seccess")
}else{
  alert("Wrong")
}

}
}
