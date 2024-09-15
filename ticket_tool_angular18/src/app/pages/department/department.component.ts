import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe,FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {

masterser=inject(MasterService);
deptList:any []=[];
newDeptObj:any={
"deptId": 0,
  "deptName": "",
  "createdDate": ""
}



  ngOnInit(): void {
    this.getAllDepartment();
  }

  getAllDepartment(){
    debugger
    this.masterser.getAllDepartment().subscribe((res:any)=>{
       this.deptList=res.data;
    })
  }


  saveDeprt(){
    debugger
    this.masterser.createNewDepartment(this.newDeptObj).subscribe((res:any)=>{
if(res.result){
  alert("depart careted");
  this.getAllDepartment();
}
else{
  alert(res.message);
}
    })
  }




onEdit(data :any){
  this.newDeptObj=data;
}


UpdateDeprt(){
  debugger
  this.masterser.updateDepartment(this.newDeptObj).subscribe((res:any)=>{
if(res.result){
alert("depart updated");
this.getAllDepartment();
}
else{
alert(res.message);
}
  })
}


onDelete(id :number){
  const isDeleted=confirm("Are you want to delete");
  if(isDeleted){
    this.masterser.deleteDepartment(id).subscribe((res:any)=>{
      if(res.result){
      alert("deleted departement");
      this.getAllDepartment();
      }
      else{
      alert(res.message);
      }
        })
  }
}

}
