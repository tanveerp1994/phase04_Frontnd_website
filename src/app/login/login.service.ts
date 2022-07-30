import { Login } from './login';
import {Injectable}  from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoginService
{
    public users:Login[]=[
        {
            email:"prasana@gmail.com",
            password:"prasu1234"
        },
        {
            email:"mounika@gmail.com",
            password:"mouni1234"
        },
        {
            email:"rakesh@gmail.com",
            password:"rakesh1234"
        }
    ];
    getUsers():Login[]
    {
        return this.users;
    }
    
}