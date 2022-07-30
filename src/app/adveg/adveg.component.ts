import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Mykitchen } from '../kitchen/kitchen';
import{kitchenservice}from '../kitchen/kitchen.service';

@Component({
  selector: 'app-adveg',
  templateUrl: './adveg.component.html',
  styleUrls: ['./adveg.component.css']
})
export class AdvegComponent implements OnInit {

  imgWidth="100";
  imgHeight="100";
  imgRadius="20";
  vtbl1:Mykitchen[]=[];

  constructor(private route:Router,private aroute:ActivatedRoute,private kitservice:kitchenservice){}

  ngOnInit(): void {
    this.vtbl1=this.kitservice.getItems();
    
      }
      deleteItem(name:string)
      {
        const index=this.vtbl1.findIndex(
          item=>item.vegetablename===name
        )
        if(index>=0){
          this.vtbl1.splice(index,1);
        }
      }
    
    onDelete(name:string)
    {
      if(window.confirm("delete"))
      {
        this.deleteItem(name);
        this.route.navigate(['/adveg']);
      }
    }

}

