import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'skills'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private http: HttpClient) {}
  SkillList: string[] = ['Angular', 'DotNet', 'Python'];

  starData(value: any, element: any) {
    console.log('selected value', value);
    console.log('selected element', element);
    element.skills = value;
  }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  ngOnInit() {}
}
// getData() {
//   const url = 'https://mocki.io/v1/6aaced4b-01dc-4c5b-a401-4e58a10ee8c7';
//   this.http.get(url).subscribe((res) => {
//     this.SkillList = res;
//     console.log(this.SkillList);
//   });
// }
