import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {
  mode: string = 'My Tickts';
  ticketList: any[] = [];
  masterSrv = inject(MasterService);
  loggedUserEmpId: any;

  ngOnInit(): void {
    const IloggedUser = localStorage.getItem("ticketUser");
    if (IloggedUser != null) {
      const userData = JSON.parse(IloggedUser);
      this.loggedUserEmpId = userData.employeeId;
    }
    this.changeMode(this.mode);
  }

  changeMode(tab: string) {
    debugger;
    this.mode = tab;
    if (this.mode == 'My Tickts') {
      this.masterSrv.getTicketsCretedByLoggedEmp(this.loggedUserEmpId).subscribe((res: any) => {
        if (res.result) {
          this.ticketList = res.data;
        } else {
          alert(res.message);
        }
      })
    } else {
      this.masterSrv.getTicketAssignedToEmp(this.loggedUserEmpId).subscribe((res: any) => {
        this.ticketList = res.data;
      })
    }
  }
  changeStatus(state: string, ticketId: number) {
    debugger
    if (state == 'start') {
      this.masterSrv.getStartTicket(ticketId).subscribe((res: any) => {
        if (res.result) {
          alert("Ticket Status change");
          this.changeMode(this.mode);
        }
        else {
          alert(res.message);
        }
      })
    } else {
      this.masterSrv.getCloseTicket(ticketId).subscribe((res: any) => {
        if (res.result) {
          alert("Ticket closed");
          this.changeMode(this.mode);
        }
        else {
          alert(res.message);
        }
      })
    }
  }
}
