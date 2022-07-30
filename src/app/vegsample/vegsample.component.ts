import { Component, OnInit } from '@angular/core';
import {Mykitchen} from "./vegsample";
import {ActivatedRoute, Router} from "@angular/router";
import { vegsampleservice } from './vegsample.service';
@Component({
  selector: 'app-vegsample',
  templateUrl: './vegsample.component.html',
  styleUrls: ['./vegsample.component.css']
})
export class VegsampleComponent implements OnInit {

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


  

  
  constructor(private route:Router,private aroute:ActivatedRoute ,private kitservice:vegsampleservice) { }
  
  ngOnInit(): void {
    
    this.kitchen=this.kitservice.getItems();
    this.searchedItems=this.kitchen;
  }
  addtocart()
  {
    alert("you need to Login !!");
    this.route.navigate(['/login']);
  }

   
  
    
}


