import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-child-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-category.component.html',
  styleUrl: './child-category.component.css'
})
export class ChildCategoryComponent implements OnInit{

  masterService=inject(MasterService);
 childList:any []=[];
parentCategoryList: any []= [];

  newObj:any={
    "childCategoryId": 0,
    "categoryName": "",
    "parentCategoryId": 0,
  }
ngOnInit(): void {
  this.getPartentCategory();
  this.getChildCategoryData();
}
  
  
getPartentCategory(){
  debugger;
  this.masterService.getAllParentCategory().subscribe((res:any)=>{
this.parentCategoryList=res.data;
  });
}

getChildCategoryData(){
  this.masterService.getAllChildCategory().subscribe((res:any)=>{
this.childList=res.data;
  })
}

saveChild(){
  this.masterService.createChildCategory(this.newObj).subscribe((res:any)=>{
    if(res.result){
alert("CHild Category Saved");
this.getChildCategoryData();
    }else{
      alert(res.message);
    }
  })
}

onEdit(data:any){
  this.newObj=data;
}


updateChildCategory(){
  this.masterService.updateChildCategory(this.newObj).subscribe((res:any)=>{
    if(res.result){
      alert("CHild Category udpated");
      this.getChildCategoryData();
          }else{
            alert(res.message);
          }
       
  });
}

onDelete(id : number){
  const isDeleted=confirm("Are You want to delete");
  if(isDeleted){
    this.masterService.deleteChildCategory(id).subscribe((res:any)=>{
alert("Deleted Successfully");
this.getChildCategoryData();
    })
  }
}

}
