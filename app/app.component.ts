import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface GridElement {
  name: string;
  gender: string;
  skills: string;
}
const ELEMENT_DATA: GridElement[] = [
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
  constructor(private http: HttpClient) {}
  SkillList: string[] = ['Angular', 'DotNet', 'Python'];

  starData(value: any, element: any) {
    console.log('selected value', value);
    console.log('selected element', element);
    element.skills = value;
  }
  // getData() {
  //   const url = 'https://mocki.io/v1/6aaced4b-01dc-4c5b-a401-4e58a10ee8c7';
  //   this.http.get(url).subscribe((res) => {
  //     this.SkillList = res;
  //     console.log(this.SkillList);
  //   });
  // }
}
