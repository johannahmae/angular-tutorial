import { Component, OnInit } from '@angular/core';
import {AlertSuccessComponent, ClosedEvent} from '../alert-success/alert-success.component';

interface Blob {
  id: number;
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-assignment-incrementing-log',
  templateUrl: './assignment-incrementing-log.component.html',
  styleUrls: ['./assignment-incrementing-log.component.css']
})
export class AssignmentIncrementingLogComponent implements OnInit {

  count = 1;
  content: string;
  blobs: Array<Blob> = [];

  message: string;

  async onSubmit(appAlert: AlertSuccessComponent) {
    this.blobs.push({
      content: this.content,
      id: this.count++,
      timestamp: new Date()
    });
    this.message = `added ${this.content}`;
    this.content = '';
    await appAlert.show(10000);
  }

  onAppAlertClosed(e: ClosedEvent) {
    console.log(e);
  }

  constructor() {
    this.blobs = [];
    this.message = '';
  }

  ngOnInit() {
  }

}
