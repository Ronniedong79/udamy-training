import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  enableBtn = false;
  userName: string = '';

  constructor() { 
   
  }

  ngOnInit(): void {
    // if (this.testName.length === 0) {
    //   this.enableBtn = false;
    // }
  }
  checkField() {
    if (this.userName.length === 0) {
      this.enableBtn = false;
    } else {
      this.enableBtn = true;
    }

  }

  onRemoveName() {
    this.userName = '';
    this.enableBtn = false;
  }


}