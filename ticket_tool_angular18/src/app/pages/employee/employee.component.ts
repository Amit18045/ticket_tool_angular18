import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
masterSrc=inject(MasterService);
departList:any []=[];
roleList: any []=[];



newEmployeeObj :any={
  
  employeeId: 0,
  employeeName: "string",
  contactNo: "string",
  emailId: "string",
  deptId: 0,
  password: "string",
  gender: "string",
  role: "string"
}

ngOnInit(): void {
  this.getAllDepart();
  this.getAllRole();
}

getAllDepart(){
  this.masterSrc.getAllDepartment().subscribe((res:any)=>{
    this.departList=res.data;
  })
}


getAllRole(){
  this.masterSrc.getAllRoles().subscribe((res:any)=>{
this.roleList=res.data;
  });
}


}
