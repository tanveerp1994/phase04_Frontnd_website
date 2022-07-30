import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { CartService } from 'src/cart.service';
import{kitchenservice} from '../kitchen/kitchen.service';
import { Mykitchen} from "../kitchen/kitchen";
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

kitchenitems:Mykitchen;
cartTotal:number=0;
pgtitle:string="Item detail page";
length:number=0;
constructor(private route:Router,private aroute:ActivatedRoute,private cartService:CartService,private kitservice:kitchenservice)
{

}

  ngOnInit(): void {
    let id= +this.aroute.snapshot.paramMap.get('id');
        this.pgtitle+=`:${id}`;
        this.kitchenitems=this.kitservice.getItem(id);
          
    }
    
    goback()
    {
        this.route.navigate(['/kitchen']);
    }
  }
