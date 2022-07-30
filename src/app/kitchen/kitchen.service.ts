
import { Injectable } from "@angular/core";

import { Mykitchen } from "./kitchen"
@Injectable({
    providedIn:'root'
})
  export class kitchenservice
  {
private Items: Mykitchen[]=[
  
    
  {
    "vegetableid":1,
    "vegetablename":"Spinach Cucumber",
    "vegetablecost":50,
    "vegetableimg":"./assets/vegetables/v5.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":2,
    "vegetablename":"Bitter-guard",
    "vegetablecost":40,
    "vegetableimg":"./assets/vegetables/v6.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
    

  },
  {
    "vegetableid": 3,
    "vegetablename":"Cabbage",
    "vegetablecost":40,
    "vegetableimg":"./assets/vegetables/v2.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":4,
    "vegetablename":"Carrot",
    "vegetablecost":40,
    "vegetableimg":"./assets/vegetables/v3.jpg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":5,
    "vegetablename":"Potato",
    "vegetablecost":20,
    "vegetableimg":"./assets/vegetables/v4.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":6,
    "vegetablename":"Cucumber",
    "vegetablecost":30,
    "vegetableimg":"./assets/vegetables/v7.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":7,
    "vegetablename":"Pumpkin",
    "vegetablecost":50,
    "vegetableimg":"./assets/vegetables/v8.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":8,
    "vegetablename":"Tomato",
    "vegetablecost":20,
    "vegetableimg":"./assets/vegetables/v1.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  
      {
        "vegetableid":9,
        "vegetablename":"Cauli-flower",
        "vegetablecost":40,
        "vegetableimg":"./assets/vegetables/v9.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":10,
        "vegetablename":"Beet-root",
        "vegetablecost": 50,
        "vegetableimg":"./assets/vegetables/v10.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":11,
        "vegetablename":"Radish",
        "vegetablecost":40,
        "vegetableimg":"./assets/vegetables/v11.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":12,
        "vegetablename":"Drum-stick",
        "vegetablecost":80,
        "vegetableimg":"./assets/vegetables/v13.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":13,
        "vegetablename":"Green chilli",
        "vegetablecost":30,
        "vegetableimg":"./assets/vegetables/v14.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0

      },
      {
        "vegetableid":14,
        "vegetablename":"Lady's finger",
        "vegetablecost":50,
        "vegetableimg":"./assets/vegetables/v15.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":15,
        "vegetablename":"Red chilli",
        "vegetablecost":200,
        "vegetableimg":"./assets/vegetables/v16.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":16,
        "vegetablename":"Peas",
        "vegetablecost":60,
        "vegetableimg":"./assets/vegetables/v17.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":17,
        "vegetablename":"Amranthus",
        "vegetablecost":60,
        "vegetableimg":"./assets/vegetables/v18.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":18,
        "vegetablename":"Corn",
        "vegetablecost":60,
        "vegetableimg":"./assets/vegetables/v19.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":19,
        "vegetablename":"Bringal",
        "vegetablecost":50,
        "vegetableimg":"./assets/vegetables/v20.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":20,
        "vegetablename":"Sweet potato",
        "vegetablecost":40,
        "vegetableimg":"./assets/vegetables/v21.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      },
      {
        "vegetableid":21,
        "vegetablename":"Onions",
        "vegetablecost":30,
        "vegetableimg":"./assets/vegetables/v22.jpeg",
        "vegetablequantity":0,
        "vegetabletotal":0
      }
    ]
      getItems(): Mykitchen[]{
        return this.Items;

      }
      getItem(id:number):Mykitchen{
        const item=this.getItems().find(item=>item.vegetableid===id);
        return item;
      }
        
          

  }
  
  

   
    
   