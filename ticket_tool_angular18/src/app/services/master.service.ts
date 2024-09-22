import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = "https://freeapi.miniprojectideas.com/api/TicketsNew/";
  //  http=inject(HttpClient);
  constructor(private http: HttpClient) { }

  login(obj: any) {
    return this.http.post(this.apiUrl + "login", obj);
  }



  getAllRoles() {
    return this.http.get(`${this.apiUrl}GetAllRoles`);
  }

  getAllDepartment() {
    debugger;
    //return this.http.get(this.apiUrl + "GetDepartments");
    return this.http.get(`${this.apiUrl}GetDepartments`);
  }

  createNewDepartment(obj: any) {
    return this.http.post(`${this.apiUrl}CreateDepartment`, obj);
  }

  updateDepartment(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateDepartment`, obj);
  }

  deleteDepartment(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteDepartment?id=${id}`);
  }

  getAllParentCategory() {
    return this.http.get(`${this.apiUrl}GetParentCategory`);
  }

  createParentCategory(obj: any) {
    return this.http.post(`${this.apiUrl}CreateParentCategory`, obj);
  }

  updateParentCategory(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateParentCategory`, obj);
  }

  deleteParentCategory(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteParentCategory?id=${id}`);
  }

  getAllChildCategory() {
    return this.http.get(`${this.apiUrl}GetChildCategory`);
  }

  createChildCategory(obj: any) {
    return this.http.post(`${this.apiUrl}CreateChildCategory`, obj);
  }

  updateChildCategory(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateChildCategory`, obj);
  }

  deleteChildCategory(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteChildCategory?id=${id}`);
  }


  getAllEmployee() {
    return this.http.get(`${this.apiUrl}GetEmployees`);
  }

  CreateEmployee(obj: any) {
    debugger
    return this.http.post(`${this.apiUrl}CreateEmployee`, obj);
  }

  updateEmployee(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateEmployee`, obj);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteEmployee?id=${id}`);
  }


  createTicket(obj: any) {
    return this.http.post(`${this.apiUrl}CreateNewTicket`, obj)
  }

  getTicketsCretedByLoggedEmp(id: number) {
    return this.http.get(`${this.apiUrl}GetTicketsCreatedByEmpId?empId=${id}`);
  }


  getTicketAssignedToEmp(id: number) {
    return this.http.get(`${this.apiUrl}GetAssignedTicketsByEmpId?empId=${id}`);
  }

  getStartTicket(ticketId: number) {
    return this.http.post(`${this.apiUrl}startTicket?id=${ticketId}`,{});
  }
  getCloseTicket(ticketId: number) {
    return this.http.post(`${this.apiUrl}closeTicket?id=${ticketId}`,{});
  }
}
