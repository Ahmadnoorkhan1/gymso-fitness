import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-cards',
  templateUrl: './instructor-cards.component.html',
  styleUrls: ['./instructor-cards.component.css']
})
export class InstructorCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('name') name = '';
  @Input('image') img = '';
  @Input('job') job = '';



}
