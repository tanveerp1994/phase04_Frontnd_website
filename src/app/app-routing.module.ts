import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AppComponent}from './app.component';
import { HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {KitchenComponent}from './kitchen/kitchen.component';
import { UtensilsComponent}from './utensils/utensils.component';
import { RegisterComponent}from './register/register.component';
import {LoginComponent} from './login/login.component';
import{AboutComponent} from './about/about.component';
import{AdminComponent} from './admin/admin.component';
import { AdfruitsComponent } from './adfruits/adfruits.component';
import{AdvegComponent}from './adveg/adveg.component';
import{KitchendetailComponent} from './kitchendetail/kitchendetail.component';
import{CartComponent}from './cart/cart.component';
import{UtensildetailsComponent} from './utensildetails/utensildetails.component';
import{OrderComponent}from './order/order.component';
import{AdditemsComponent}from './additems/additems.component';
import{VegsampleComponent}from './vegsample/vegsample.component';
import { ChangepswdComponent } from './changepswd/changepswd.component';
import{FruitsampleComponent}from './fruitsample/fruitsample.component';
import{AboutsampleComponent} from './aboutsample/aboutsample.component';
import{ContactsampleComponent}from './contactsample/contactsample.component';
import{BuyComponent} from './buy/buy.component';
import{Buy1Component}from './buy1/buy1.component';
import{Additems1Component}from './additems1/additems1.component';
import{PaymentComponent} from './payment/payment.component';

const routes: Routes = [ 
  
    {path:'home',component:HomeComponent},
    {path:'pay',component:PaymentComponent},
    {path:'additem1',component:Additems1Component},
    {path:'buy/:id',component:BuyComponent},
    {path:'buy1/:id',component:Buy1Component},
    {path:'aboutsample',component:AboutsampleComponent},
    {path:'contactsample',component:ContactsampleComponent},
    {path:'change',component:ChangepswdComponent},
    {path:'vegsample',component:VegsampleComponent},
    {path:'fruitsample',component:FruitsampleComponent},
    {path:'contact',component:ContactComponent},
    {path:'kitchen',component:KitchenComponent},
    {path:'register',component:RegisterComponent},
    {path:'utensils',component:UtensilsComponent},
    {path:'login',component:LoginComponent},
    {path:'about',component:AboutComponent},
    {path:'admin',component:AdminComponent},
    {path:'adfruit',component:AdfruitsComponent},
    {path:'cart',component:CartComponent},
    {path:'order',component:OrderComponent},
    {path:'adveg',component:AdvegComponent},
    {path:'additem',component:AdditemsComponent},
    { path: "kitchen/:id", component:KitchendetailComponent },
    { path: "utensils/:id", component:UtensildetailsComponent },
    {path:'',component:HomeComponent},
    {path:'**',component:HomeComponent}
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

