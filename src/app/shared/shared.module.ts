import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import{FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    
  ],
  imports: [
    CommonModule,RouterModule,HttpClientModule,BrowserModule,FormsModule,
  ],exports:[
    HeaderComponent,FooterComponent,SpinnerComponent,SelectComponent,FormsModule,
  ]
})
export class SharedModule { }
