import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Mykitchen1 } from '../utensils/utensils';
import{utensilsservice}from '../utensils/utensils.service';
@Component({
  selector: 'app-adfruits',
  templateUrl: './adfruits.component.html',
  styleUrls: ['./adfruits.component.css']
})
export class AdfruitsComponent implements OnInit {

  imgWidth="100";
  imgHeight="100";
  imgRadius="20";
  vtbl:Mykitchen1[]=[];

  constructor(private route:Router,private aroute:ActivatedRoute,private utservice:utensilsservice){}

  ngOnInit(): void {
    this.vtbl=this.utservice.getItems1();
    
      }
      deleteItem(name:string)
      {
        const index=this.vtbl.findIndex(
          item=>item.fruitname===name
        )
        if(index>=0){
          this.vtbl.splice(index,1);
        }
      }
    
    onDelete(name:string)
    {
      if(window.confirm("delete"))
      {
        this.deleteItem(name);
        this.route.navigate(['/adfruit']);
      }
    }

}

