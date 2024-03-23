import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-steps-create',
  standalone: true,
  imports: [RouterLink,
    RouterModule],
  templateUrl: './steps-create.component.html',
  styleUrl: './steps-create.component.css'
})
export class StepsCreateComponent {

}
