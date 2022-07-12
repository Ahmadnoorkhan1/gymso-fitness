import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor() { }

  transitionText: boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.transitionText = true
    }, 800);

    document.onscroll ? setTimeout(() => {
      this.transitionText = !this.transitionText
    }, 300) : ''
  }

}
