import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-cards',
  templateUrl: './class-cards.component.html',
  styleUrls: ['./class-cards.component.css']
})
export class ClassCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('classes') class = ''
  @Input('image') img = ''

  @Input('trainer') trainer = ''
  @Input('price') price = ''

}
