import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  contentStatus = true;
  contentDetails = [];

  constructor() { }

  ngOnInit(): void {
  }


  onSwitch() {
    if (this.contentStatus == true) {
      this.contentStatus = false;
      } else {
      this.contentStatus = true;
    }
  }
  
  onPlusMore() {
    this.contentDetails.push(this.contentDetails.length + 1);
  }

  // getColor() {
  //   return this.contentDetails.length >= 5 ? "blue" : "none";
  // }

}
