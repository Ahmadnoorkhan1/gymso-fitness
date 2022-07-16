import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  transitionText: boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.transitionText = true
    }, 800);
    // console.log(window.screenY)

  }


}
