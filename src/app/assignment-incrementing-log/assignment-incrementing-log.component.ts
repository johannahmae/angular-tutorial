import { Component, OnInit } from '@angular/core';

interface Blob {
  id: number;
  content: string;
  timestamp: Date;
}

interface Blobs {
  [index: number]: Blob;
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

  onSubmit() {
    this.blobs.push({
      content: this.content,
      id: this.count++,
      timestamp: new Date()
    });
    this.content = '';
  }

  constructor() {
    this.blobs = [];
  }

  ngOnInit() {
  }

}
