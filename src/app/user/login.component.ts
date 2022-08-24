import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import {Router} from "@angular/router"

@Component({
selector:'login',
templateUrl:'./login.component.html',
styles:[   `
em{float:right;color:#E05C65; padding-left:10}
`]
})
export class LoginComponent{
    username:any
    password:any
    mouseoverLogin:boolean=true;
  
  
    constructor(private authService:AuthService, private router:Router) {
  
    }
  
    login(formValues:any) {
      console.log(formValues.userName + ' ' + formValues.password)
      this.authService.loginUser(formValues.userName, formValues.password)
      this.router.navigate(['/events'])
    }
  
    cancel() {
      this.router.navigate(['/events'])
    }
}