import { Component } from '@angular/core';
import { InstructorComponent } from '../Component/instructors/instructors.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [InstructorComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
