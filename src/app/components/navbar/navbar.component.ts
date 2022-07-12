import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbarShow: boolean = false;

  showNav() {
    this.navbarShow = !this.navbarShow
    console.log(this.navbarShow)
  }

}
