import { Component, OnInit } from '@angular/core';
import { Homework } from '../models/Homework';

@Component({
  selector: 'app-teacher-space',
  templateUrl: './teacher-space.component.html',
  styleUrls: ['./teacher-space.component.css']
})
export class TeacherSpaceComponent implements OnInit {

  constructor() { }

  blender_image_src = "/assets/images/blender.png";
  unity_image_src = "/assets/images/csharp_unity.jpg";

  UnityComment?: string;

  myBlenderExamples: Homework[] = [new Homework("b1","blender","2022-12-12","link down 1")];

  myUnityExamples: Homework[] = [new Homework("u1","unity","2022-10-12","link down 6")];

  getallUnity() {

  }

  ngOnInit(): void {
  }
}
