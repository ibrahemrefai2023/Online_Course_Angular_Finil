import { Component } from '@angular/core';
import { CourseibrahemService } from '../../../../Service/courseibrahem.service';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from '../all-courses/all-courses.component';


@Component({
  selector: 'app-add-group',
  standalone: true,
  imports: [RouterModule,AllCoursesComponent,CommonModule,RouterLink],
  providers:[CourseibrahemService],
  templateUrl: './add-group.component.html',
  styleUrl: './add-group.component.css'
})
export class AddGroupComponent {
  groups:any;
  constructor(private courseservice:CourseibrahemService){};
  
  ngOnInit(): void {

    // this.courseservice.getAllGroups().subscribe({
    //   next:(data)=>{this.groups=data},
    //     error:(err)=>{}
    // });
    
  }
  
  showDashBoard:boolean=false;
  
  showAddGroup(){
    this.showDashBoard=true;
  }
  
  hideAddGroup(){
    this.showDashBoard=false;
  }
}
