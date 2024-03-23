import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseibrahemService } from '../../../../../Service/courseibrahem.service';


@Component({
  selector: 'app-std-exam-enroll',
  standalone: true,
  imports: [
    RouterLink,
    HttpClientModule
  ],
  providers:[
    CourseibrahemService
  ],
  templateUrl: './std-exam-enroll.component.html',
  styleUrl: './std-exam-enroll.component.css'
})
export class StdExamEnrollComponent {
  exam:any
constructor(private myservice:CourseibrahemService){}
ngOnInit():void
{
  this.myservice.getExams().subscribe({
    next:(data)=>this.exam=data
  })
}
}
