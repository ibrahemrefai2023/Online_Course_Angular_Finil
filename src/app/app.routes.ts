import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { InstructorComponent } from './Instructor/instructor/instructor.component';
import { StudentComponent } from './Student/student/student.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:"",redirectTo:"Home",pathMatch:"full"},
    {path:"Home",component:HomeComponent},
    {path:"Login",component:LoginComponent},
    {path:"Register",component:RegisterComponent},
    {path:"Instructor",component:InstructorComponent},
    {path:"Student",component:StudentComponent},
    {path:"**",component:ErrorComponent}

];
