import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

routeLink=inject(Router);


  logOFF(){
    localStorage.removeItem("ticketUser");
    this.routeLink.navigateByUrl("login");
  }
}
