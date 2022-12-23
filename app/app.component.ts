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

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'gender', 'skills'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  SkillList: string[] = ['Angular', 'DotNet', 'Python'];

  starData(value: any, element: any) {
    console.log('selected value', value);
    console.log('selected element', element);
    element.skills = value;
  }
}
