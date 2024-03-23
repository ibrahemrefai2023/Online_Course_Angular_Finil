import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule
  ],
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {

}
