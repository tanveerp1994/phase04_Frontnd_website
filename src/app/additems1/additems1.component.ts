import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
//import {Router} from '@angular/Router';
import {Item1} from './additems1';
import { Mykitchen1} from "../utensils/utensils";
import{utensilsservice} from '../utensils/utensils.service';
@Component({
  selector: 'app-additems1',
  templateUrl: './additems1.component.html',
  styleUrls: ['./additems1.component.css']
})
export class Additems1Component implements OnInit {
fruitid:number;
fruitname:string;
fruitcost:number;
fruitimg:string;
fruitquantity:number;
fruittotal:number;

items:Mykitchen1[]=[];
item=new Item1();
  constructor(private itemservice:utensilsservice) { }

  ngOnInit(): void {
    this.items=this.itemservice.getItems1();
  }
  //save(userForm:)
onItemAdd(userForm:NgForm)
{
  let a={
    fruitid:+this.item.fruitid,
    fruitname:this.item.fruitname,
    fruitcost:+this.item.fruitcost,
    fruitimg:this.item.fruitimg,
    fruitquantity:+this.item.fruitquantity,
    fruittotal:+this.item.fruittotal
  }
  this.items.push(a);
  console.log(a);
  alert("Item added");
  //this.route.navigate(['./adfruit']);
}
}
