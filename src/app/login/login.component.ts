import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
loginForm=new FormGroup({
  firstName: new FormControl(''),
    lastName: new FormControl(''),
    password:new FormControl('')
})


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit():void{
    console.log(this.loginForm.value)
    window.localStorage.setItem('login', JSON.stringify(this.loginForm.value))
  }
  logOutClick():void{
    window.localStorage.clear();
  }
}
