import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
//import {Router} from '@angular/Router';
import {Item} from './additems';
import { Mykitchen } from "../kitchen/kitchen";
import{kitchenservice} from '../kitchen/kitchen.service';
@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
vegetableid:number;
vegetablename:string;
vegetablecost:number;
vegetableimg:string;
vegetablequantity:number;
vegetabletotal:number;

items:Mykitchen[]=[];
item=new Item();
  constructor(private itemservice:kitchenservice) { }

  ngOnInit(): void {
    this.items=this.itemservice.getItems();
  }
  //save(userForm:)
onItemAdd(userForm:NgForm)
{
  let a={
    vegetableid:+this.item.vegetableid,
    vegetablename:this.item.vegetablename,
    vegetablecost:+this.item.vegetablecost,
    vegetableimg:this.item.vegetableimg,
    vegetablequantity:+this.item.vegetablequantity,
    vegetabletotal:+this.item.vegetabletotal
  }
  this.items.push(a);
  console.log(a);
  alert("Item added");
  //this.route.navigate(['./adveg']);
}
}
