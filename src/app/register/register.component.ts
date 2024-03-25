import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JwtService } from '../../Service/jwt.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,
    HttpClientModule,FormsModule ,CommonModule],
  providers: [JwtService],
  templateUrl:'./register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
registrationForm: FormGroup;

constructor(private fb: FormBuilder, private registrationService: JwtService,private router:Router) {
  this.registrationForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email,Validators.pattern(/^\w+@gmail\.com$/)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    confirmPassword: ['', Validators.required],
    role: ['', Validators.required]
  });
}

onSubmit() {
  if (this.registrationForm.valid) {
    this.registrationService.register(this.registrationForm.value).subscribe(
      response => {
        if (response.statusText === 'OK') {
          alert("Success Registration");
          console.log('Success Registration', response);
          this.router.navigate(['/login']);
        } else {
          console.error('Registration failed', response);
        }
        
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
}
 


  // myform: FormGroup;
  // constructor(private fb: FormBuilder, private yourService: JwtService) {
  //   this.myform = this.fb.group({
  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required],
  //     role: ['', Validators.required]
  //   });
  // }

  // addNewUser() {
  //   if (this.myform.valid) {
      
  //     this.yourService.submitForm(this.myform.value)
  //       .subscribe((response: any) => {
  //         console.log(response);
  //         console.log("success")
  //       }, (error: any) => { // Change 'any' to the expected type
  //         console.error(error);
  //       });
  //   }
  // }
  
  // myform = new FormGroup({

  //   name: new FormControl("", [Validators.required,
  //   Validators.pattern(/^[A-Za-z]+(?:[ \-'][A-Za-z]+)*$/)]),

  //   username: new FormControl("", [
  //     Validators.required,
  //     Validators.pattern('^[a-zA-Z0-9._-]{3,20}$')]),

  //   email: new FormControl("", [Validators.required,
  //   Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),

  //   phone: new FormControl("", [
  //     Validators.required,
  //     Validators.pattern(/^\+(?:[0-9] ?){6,14}[0-9]$/)]),

  //   password: new FormControl("", [
  //     Validators.required,
  //     Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d!@#$%^&*()-_=+{};:,<.>?[\\]\\\\/]{8,20}$')]),
  // }

  // )

  // get namevalied() {
  //   return this.myform.controls["name"].valid;
  // }

  // get username() {
  //   return this.myform.controls["username"].valid;
  // }

  // get email() {
  //   return this.myform.controls["email"].valid;
  // }

  // get password() {
  //   return this.myform.controls["password"].valid;
  // }

  // get phone() {
  //   return this.myform.controls["phone"].valid;
  // }

  // addnewuser() {
  //   if (this.myform.valid) {
      
  //     let newuser = {
  //       userName: this.myform.controls.username.value as string,
  //       password: this.myform.controls.password.value as string,
  //       confirmPassword: this.myform.controls.password.value as string,
  //       email: this.myform.controls.email.value as string,
  //       role: this.myform.controls.name.value as string

  //     };
  //     this.data.AddNewUser(newuser).subscribe();
  //     this.router.navigate(['/']);
  //   }
  // }
  
