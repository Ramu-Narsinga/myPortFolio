import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  aboutMe = "this is about me";
  whatIAmPassionateAbout = "these are my interests";
  howIGoAboutCoding = "this is how I go about coding";
  dynamicContent = "";

  aboutMeClick() {
    this.dynamicContent = this.aboutMe;
  }

  passionateAboutClick() {
    this.dynamicContent = this.whatIAmPassionateAbout;
  }

  goAboutCoding() {
    this.dynamicContent = this.howIGoAboutCoding;
  }

  constructor() { }

  ngOnInit() {
  }

}
