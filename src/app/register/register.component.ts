import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { kitchenservice } from '../kitchen/kitchen.service';
import { Register } from './register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(
    public kitchenserv:kitchenservice
  )
  {}
  ngOnInit(): void {
  }

  register = new Register();
  save(registerForm: NgForm){
    alert("You are successfully Regsitered");
    console.log(registerForm);
    console.log(JSON.stringify(registerForm.value));
  }

}
