import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name1 = 'Mary Yim'
  name2 = 'Catherina'
  image1 = '../../../../assets/images/gym-instructor.jpg'
  image2 = '../../../assets/images/Yoga-Instructor.jpeg'
  job1 = 'Yoga Instructor'
  job2 = 'Gym Instructor'
}
