import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  class1 = 'Yoga'
  class2 = 'Areobic'
  class3 = 'Cardio'

  img1 = '../../../assets/images/yoga-class.jpg'
  img2 = '../../../assets/images/aerobic-class.jpg'
  img3 = '../../../assets/images/cardio-class.jpg'

  trainer1 = 'Mary'
  trainer2 = 'Cathe'

  price1 = '54'
  price2 = '68'
  price3 = '77'


}
