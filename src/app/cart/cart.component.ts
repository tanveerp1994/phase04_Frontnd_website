import { Component, OnInit,SimpleChanges} from '@angular/core';
import{CartService} from 'src/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items=this.cartService.getItems();
items1=this.cartService.getItems1();
cartTotal:number=0;
cartTotal1:number=0;
  constructor(private cartService :CartService) { }

  ngOnInit(): void {
    this.fun();
    this.fun1();
    
  }
  fun()
  {
    this.cartTotal1=0;
    for(let index=0;index<this.items.length;index++)
    {
      this.cartTotal1+= this.items[index].vegetabletotal;
      
    }
    
   
  }
  fun1()

  {
    this.cartTotal=0;
    for(let index=0;index<this.items1.length;index++)
    {
      this.cartTotal+= this.items1[index].fruittotal;
      
    }
  }
increment(id:number)
{
  const item=this.items.find(item=>item.vegetableid===id);
  item.vegetablequantity+=1;
  item.vegetabletotal=item.vegetablecost*item.vegetablequantity;
  this.fun();
}
increment1(id:number)
{
  const item=this.items1.find(item=>item.fruitid===id);
  item.fruitquantity+=1;
  item.fruittotal=item.fruitcost*item.fruitquantity;
  this.fun1();
}

decrement(id:number)
{
  const item=this.items.find(item=>item.vegetableid===id);
  item.vegetablequantity-=1;
  item.vegetabletotal=item.vegetablecost*item.vegetablequantity;
   this.fun(); 
}
decrement1(id:number)
{
  const item=this.items1.find(item=>item.fruitid===id);
  item.fruitquantity-=1;
  item.fruittotal=item.fruitcost*item.fruitquantity;
   this.fun1(); 
}
onDelete(name:string)
{
  const index=this.items.findIndex(
    item=>item.vegetablename===name
  )
  if(index>=0)
  {
    this.items.splice(index,1);
  }
  this.fun();
}
onDelete1(name:string)
{
  const index=this.items1.findIndex(
    item=>item.fruitname===name
  )
  if(index>=0)
  {
    this.items1.splice(index,1);
  }
  this.fun1();
}

clearCart()
{
  
  
  this.cartTotal=0;
 
  this.items=this.cartService.clearCart();
  
  
}
 clearCart1()
{
  this.cartTotal1=0;
 this.items1=this.cartService.clearCart1();
}
}




