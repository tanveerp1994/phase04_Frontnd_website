import{Injectable} from '@angular/core';
@Injectable({
    providedIn:'root'
})
export class CartService {
    items = [];
    items1=[];
  
    addToCart(product) {
      this.items.push(product);
    }
  
    getItems() {
      return this.items;
    }
    addToCart1(product) {
      this.items1.push(product);
      console.log(product);
    }
  
    getItems1() {
      return this.items1;
    }
    
    clearCart() {
      this.items = [];
      return this.items;
    }
    clearCart1() {
      this.items1 = [];
      return this.items1;
    }
  
    
}
