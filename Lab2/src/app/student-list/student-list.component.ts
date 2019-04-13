import { Component, OnInit } from '@angular/core';
import {Student} from './student'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
student:Student[];
  constructor() {
this.student = [
new Student("ზაური","Berdzenishvili",201705227),
new Student("ზვიადი","Berdzenishvili",301705227),
new Student("ზურაბი","Berdzenishvili",601705227)];


   }

  ngOnInit() {
  }
}
