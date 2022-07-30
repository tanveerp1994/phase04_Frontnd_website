import{NgModule}from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { UtensilsComponent } from './utensils/utensils.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { AdfruitsComponent } from './adfruits/adfruits.component';
import { AdvegComponent } from './adveg/adveg.component';
import { KitchendetailComponent } from './kitchendetail/kitchendetail.component';
import { UtensildetailsComponent } from './utensildetails/utensildetails.component';
import { OrderComponent } from './order/order.component';
import { AdditemsComponent } from './additems/additems.component';
import { VegsampleComponent } from './vegsample/vegsample.component';
import { ChangepswdComponent } from './changepswd/changepswd.component';
import { FruitsampleComponent } from './fruitsample/fruitsample.component';
import { AboutsampleComponent } from './aboutsample/aboutsample.component';
import { ContactsampleComponent } from './contactsample/contactsample.component';
import { BuyComponent } from './buy/buy.component';
import { Buy1Component } from './buy1/buy1.component';
import { Additems1Component } from './additems1/additems1.component';
import { PaymentComponent } from './payment/payment.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    KitchenComponent,
    UtensilsComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    AdminComponent,
    CartComponent,
    AdfruitsComponent,
    AdvegComponent,
    KitchendetailComponent,
    UtensildetailsComponent,
    OrderComponent,
    AdditemsComponent,
    VegsampleComponent,
    ChangepswdComponent,
    FruitsampleComponent,
    AboutsampleComponent,
    ContactsampleComponent,
    BuyComponent,
    Buy1Component,
    Additems1Component,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
