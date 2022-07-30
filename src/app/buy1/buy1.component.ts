import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { CartService } from 'src/cart.service';
import{utensilsservice} from '../utensils/utensils.service';
import { Mykitchen1} from "../utensils/utensils";
@Component({
  selector: 'app-buy1',
  templateUrl: './buy1.component.html',
  styleUrls: ['./buy1.component.css']
})
export class Buy1Component implements OnInit {
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

    
  

}

