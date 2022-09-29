import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrls: ['./my-space.component.css']
})
export class MySpaceComponent implements OnInit {
  blender_image_src = "/assets/images/blender.png";
  unity_image_src = "/assets/images/csharp_unity.jpg";

  addwork(form: NgForm) {
    const homeworkInfos =
    {
      'homeworkName': form.value.name,
      'homeworkDate': form.value.date,
      'homeworkLink': form.value.link
    }
    console.log(homeworkInfos.homeworkName);
    console.log(homeworkInfos.homeworkDate);
    console.log(homeworkInfos.homeworkLink);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
