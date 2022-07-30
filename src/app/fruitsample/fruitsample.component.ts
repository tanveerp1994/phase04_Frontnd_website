import { Component, OnInit } from '@angular/core';
import {Mykitchen1} from "./fruitsample";
import { fruitsampleservice } from './fruitsample.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-fruitsample',
  templateUrl: './fruitsample.component.html',
  styleUrls: ['./fruitsample.component.css']
})
export class FruitsampleComponent implements OnInit {
  
  constructor(private fsservice:fruitsampleservice,private route:Router ) { }

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
    this.utensils=this.fsservice.getItems1();
    this.searchedItems=this.utensils; 
  }
  utensils: Mykitchen1[]=[];
  addtocart1()
  {
    alert("You need to Login!")
    this.route.navigate(['/login'])
  }
  
}

