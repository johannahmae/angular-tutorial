import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('contentType') contentType: ElementRef;
  blobs: Array<Blob> = [];

  message: string;

  async onSubmit(appAlert: AlertSuccessComponent) {
    // accessing value of dom using @ViewChild. do not change value. bad practice.
    console.log(this.contentType.nativeElement.value);

    this.blobs.push({
      content: this.content,
      id: this.count++,
      timestamp: new Date()
    });
    this.message = `added ${this.content}`;
    this.content = '';
    await appAlert.show(1000);
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
