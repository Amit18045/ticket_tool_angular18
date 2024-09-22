import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  masterSrc = inject(MasterService);
  departList: any[] = [];
  roleList: any[] = [];
  empList: any[] = [];
  isNewView: boolean = false;

  newEmployeeObj: any = {

    employeeId: 0,
    employeeName: "",
    contactNo: "",
    emailId: "",
    deptId: 0,
    password: "",
    gender: "",
    role: ""
  }

  ngOnInit(): void {
    this.getAllDepart();
    this.getAllRole();
    this.getAllEmployee();
  }

  getAllDepart() {
    this.masterSrc.getAllDepartment().subscribe((res: any) => {
      this.departList = res.data;
    })
  }


  getAllRole() {
    this.masterSrc.getAllRoles().subscribe((res: any) => {
      this.roleList = res.data;
    });
  }

  getAllEmployee() {
    this.masterSrc.getAllEmployee().subscribe((res: any) => {
      this.empList = res.data;
    })
  }


  saveEmp() {
    debugger;
    this.masterSrc.CreateEmployee(this.newEmployeeObj).subscribe((res: any) => {
      if (res.result) {
        alert("New Employee Created");
        this.getAllEmployee();
      }
      else {
        alert(res.message);
      }
    });
  }

  onEdit(data: any) {
    this.newEmployeeObj = data;
  }


  updateEmployee() {
    this.masterSrc.updateEmployee(this.newEmployeeObj).subscribe((res: any) => {
      if (res.result) {
        alert("New Employee Created");
        this.getAllEmployee();
      }
      else {
        alert(res.message);
      }
    });
  }

  deleteEmployee(id: number) {
    const isDeleted = confirm("Are you want to delete this");
    if (isDeleted) {
      this.masterSrc.deleteEmployee(id).subscribe((res: any) => {
        if (res.result) {
          alert("deleted employee");
          this.getAllEmployee();
        }
        else {
          alert(res.message);
        }
      });
    }

  }

}
