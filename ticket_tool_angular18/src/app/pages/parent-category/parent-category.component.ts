import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parent-category.component.html',
  styleUrl: './parent-category.component.css'
})
export class ParentCategoryComponent implements OnInit {
  masterser=inject(MasterService);
gridList:any []=[];
departList: any []= [];

  newObj:any={
    "categoryId": 0,
    "categoryName": "",
    "deptId": 0,
   
  }
  
  
  
    ngOnInit(): void {
      this.getGridData();
      this.getDepartData();
    }
  

getDepartData(){
  this.masterser.getAllDepartment().subscribe((res:any)=>{
    this.departList=res.data;
  })
}

    getGridData(){
      debugger
      this.masterser.getAllParentCategory().subscribe((res:any)=>{
         this.gridList=res.data;
      })
    }
  
  
    save(){
      debugger
      this.masterser.createParentCategory(this.newObj).subscribe((res:any)=>{
  if(res.result){
    alert("parent category careted");
    this.getGridData();
  }
  else{
    alert(res.message);
  }
      })
    }
  
  
  
  
  onEdit(data :any){
    this.newObj=data;
  }
  
  
  Update(){
    debugger
    this.masterser.updateParentCategory(this.newObj).subscribe((res:any)=>{
  if(res.result){
  alert("parent category updated");
  this.getGridData();
  }
  else{
  alert(res.message);
  }
    })
  }
  
  
  onDelete(id :number){
    const isDeleted=confirm("Are you want to delete");
    if(isDeleted){
      this.masterser.deleteParentCategory(id).subscribe((res:any)=>{
        if(res.result){
        alert("deleted parent Category");
        this.getGridData();
        }
        else{
        alert(res.message);
        }
          })
    }
  }
}
