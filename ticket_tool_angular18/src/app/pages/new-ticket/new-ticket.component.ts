import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit {
  masterSrv = inject(MasterService);
  deptList: any[] = [];
  partList: any[] = [];
  ChildLits: any[] = [];
  filterCategory: any[] = [];
  selectParentCategory: string = '';


  newTicketobj: any =
    {
      "employeeId": 0,
      "severity": "",
      "childCategoryId": 0,
      "deptId": 0,
      "requestDetails": ""
    }


  ngOnInit(): void {
    const IloggedUser=localStorage.getItem("ticketUser");
    if(IloggedUser !=null){
      const userData=JSON.parse(IloggedUser);
      this.newTicketobj.employeeId=userData.employeeId;
    }
    this.getAllDept();
    this.getPartentCategory();
    this.getChildCategory();
  }

  onTicketCreate() {
    debugger
    this.masterSrv.createTicket(this.newTicketobj).subscribe((res: any) => {
      if (res.result) {
        alert("Ticket Created");
      } else {
        alert(res.message);
      }
    })
  }
  onCategoryChange() {
    this.filterCategory = this.ChildLits.filter(x => x.parentCategoryName == this.selectParentCategory)
  }

  getAllDept() {
    this.masterSrv.getAllDepartment().subscribe((res: any) => {
      this.deptList = res.data;
    })
  }

  getPartentCategory() {
    this.masterSrv.getAllParentCategory().subscribe((res: any) => {
      this.partList = res.data;
    })
  }

  getChildCategory() {
    this.masterSrv.getAllChildCategory().subscribe((res: any) => {
      this.ChildLits = res.data;
    })
  }

}
