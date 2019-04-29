import { Component } from '@angular/core';
import { Employee } from './interfaces/employee.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Simple Crud';

  employeeArray: Employee[] = [
    {id: 1, name: 'Ryan', country: 'USA'},
    {id: 2, name: 'Gonzalo', country: 'USA'},
    {id: 3, name: 'Angelica', country: 'USA'},
    {id: 4, name: 'Max', country: 'USA'}
  ]
  selectedEmployee: Employee = new Employee();
}

addOrEdit() {
  this.selectedEmployee.id = this.employeeArray
}