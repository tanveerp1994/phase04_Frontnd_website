import { Component, OnInit } from '@angular/core';
import {Mykitchen1} from "./utensils";
import { utensilsservice } from './utensils.service';


@Component({
  selector: 'app-utensils',
  templateUrl: './utensils.component.html',
  styleUrls: ['./utensils.component.css']
})
export class UtensilsComponent implements OnInit {

  constructor(private utilservice:utensilsservice) { }

  _searchterm:string;

  searchedItems:Mykitchen1[]=[];
    get searchterm():string{
       
        return this._searchterm;
        }

  set searchterm(value:string){
    
    this._searchterm=value;
    this.searchedItems=this.searchterm?this.searchkitchen(this.searchterm):this.utensils;
   

  }
 
  
searchkitchen(searchby:string):Mykitchen1[]{
        searchby=searchby.toLocaleLowerCase();
        return this.utensils.filter((movie:Mykitchen1)=>movie.fruitname.toLocaleLowerCase().indexOf(searchby)!==-1);
    }


  ngOnInit(): void {
    this.utensils=this.utilservice.getItems1();
    this.searchedItems=this.utensils; 
  }
  utensils: Mykitchen1[]=[];

}
