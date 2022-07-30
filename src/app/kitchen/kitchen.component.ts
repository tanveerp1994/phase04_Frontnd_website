import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import {Mykitchen} from "./kitchen";
import { kitchenservice } from './kitchen.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  kitchen:Mykitchen[]=[]; 
  _searchterm:string;
  searchedItems:Mykitchen[]=[];
    get searchterm():string{
       
        return this._searchterm;
        }

  set searchterm(value:string){
    
    this._searchterm=value;
    this.searchedItems=this.searchterm?this.searchkitchen(this.searchterm):this.kitchen;
   

  }
 
  
searchkitchen(searchby:string):Mykitchen[]{
        searchby=searchby.toLocaleLowerCase();
        return this.kitchen.filter((movie:Mykitchen)=>movie.vegetablename.toLocaleLowerCase().indexOf(searchby)!==-1);
    }


  

  
  constructor(private route:Router,private aroute:ActivatedRoute ,private kitservice:kitchenservice) { }
  
  ngOnInit(): void {
    
    this.kitchen=this.kitservice.getItems();
    this.searchedItems=this.kitchen;
  }

   
  
    
}

