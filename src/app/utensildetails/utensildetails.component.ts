import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { CartService } from 'src/cart.service';
import{utensilsservice} from '../utensils/utensils.service';
import { Mykitchen1} from "../utensils/utensils";
@Component({
  selector: 'app-utensildetails',
  templateUrl: './utensildetails.component.html',
  styleUrls: ['./utensildetails.component.css']
})
export class UtensildetailsComponent implements OnInit {
kitchen1items:Mykitchen1;

pgtitle:string="Item detail page";
constructor(private route:Router,private aroute:ActivatedRoute,private cartService:CartService,private utservice:utensilsservice)
{

}

  ngOnInit(): void {
    let id= +this.aroute.snapshot.paramMap.get('id');
        this.pgtitle+=`:${id}`;
        this.kitchen1items=this.utservice.getItem1(id);
    
        
    }
    
    goback()
    {
        this.route.navigate(['/utensils']);
    }

    addToCart1(product)
    {
        this.cartService.addToCart1(product);
        this.kitchen1items.fruittotal+=this.kitchen1items.fruitquantity*this.kitchen1items.fruitcost;
        window.alert('added item');
    }
  increment1()
  {
    this.kitchen1items.fruitquantity+=1;
    
  }
  decrement1()
  {
    this.kitchen1items.fruitquantity-=1;
  }

}

