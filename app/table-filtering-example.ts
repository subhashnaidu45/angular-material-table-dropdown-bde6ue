import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  gender: string;
  skills: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Chiranjeevi',
    gender: 'Male',
    skills: '',
  },
  { name: 'Nagarjuna', gender: 'Male', skills: '' },
  { name: 'Venkatesh', gender: 'Male', skills: '' },
  { name: 'Bala Krishna', gender: 'Male', skills: '' },
  { name: 'Sri devi', gender: 'Female', skills: '' },
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample {
  displayedColumns: string[] = ['name', 'gender', 'skills'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  toppingList: string[] = ['Angular', 'DotNet', 'Python'];

  starData(value: any, element: any) {
    console.log('selected value', value);
    console.log('selected element', element);
    element.skills = value;
  }
}
