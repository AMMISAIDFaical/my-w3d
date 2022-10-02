import { IHomework } from './../models/IHomework';
import { HomeworkService } from './../services/homework.service';
import { Component, OnInit } from '@angular/core';
import { Homework } from '../models/Homework';

@Component({
  selector: 'app-teacher-space',
  templateUrl: './teacher-space.component.html',
  styleUrls: ['./teacher-space.component.css']
})
export class TeacherSpaceComponent implements OnInit {


  constructor(private _homeworkService: HomeworkService) { }

  blender_image_src = "/assets/images/blender.png";
  unity_image_src = "/assets/images/csharp_unity.jpg";
  myBlenderExamples: IHomework[] = [];
  myUnityExamples: IHomework[] = [];

  getallBlender() {
    this._homeworkService.getAllBlenderHomework().subscribe(
      homeworks => {
        this.myBlenderExamples = homeworks;
      }
    );
  }

  getallUnity() {
    this._homeworkService.getAllUnityHomework().subscribe(
      homeworks => {
        this.myUnityExamples = homeworks;
      }
    );
  }

  ngOnInit(): void {
    this.getallBlender();
    this.getallUnity();
  }
}
