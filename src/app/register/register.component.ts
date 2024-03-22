import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../Service/Account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [AccountService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private data: AccountService, private router: Router) { }

  myform = new FormGroup({

    name: new FormControl("", [Validators.required,
    Validators.pattern(/^[A-Za-z]+(?:[ \-'][A-Za-z]+)*$/)]),

    username: new FormControl("", [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._-]{3,20}$')]),

    email: new FormControl("", [Validators.required,
    Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),

    phone: new FormControl("", [
      Validators.required,
      Validators.pattern(/^\+(?:[0-9] ?){6,14}[0-9]$/)]),

    password: new FormControl("", [
      Validators.required,
      Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d!@#$%^&*()-_=+{};:,<.>?[\\]\\\\/]{8,20}$')]),
  }

  )


  get namevalied() {
    return this.myform.controls["name"].valid;
  }

  get username() {
    return this.myform.controls["username"].valid;
  }

  get email() {
    return this.myform.controls["email"].valid;
  }

  get password() {
    return this.myform.controls["password"].valid;
  }

  get phone() {
    return this.myform.controls["phone"].valid;
  }

  addnewuser() {
    if (this.myform.valid) {
      
      let newuser = {
        userName: this.myform.controls.username.value as string,
        password: this.myform.controls.password.value as string,
        confirmPassword: this.myform.controls.password.value as string,
        email: this.myform.controls.email.value as string,
        role: this.myform.controls.name.value as string

      };
      this.data.AddNewUser(newuser).subscribe();
      this.router.navigate(['/']);
    }
  }
}
