import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface ClosedEvent {
  timestamp: Date;
  duration: number;
  totalDuration: number;
}

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.css']
})
export class AlertSuccessComponent implements OnInit {
  initialShow: Date;
  lastShow: Date;
  visible: boolean;
  @Output() closed: EventEmitter<ClosedEvent> = new EventEmitter();

  constructor() {
    this.visible = false;
  }

  async show(timeout = 5000) {
    console.log(this);
    this.lastShow = new Date();
    if (!this.visible) {
      this.initialShow = this.lastShow;
      this.visible = true;
      while ((new Date).valueOf() - this.lastShow.valueOf() < timeout) {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 100);
        });
      }
      this.visible = false;
      this.closed.emit({
        timestamp: new Date(),
        duration: (new Date).valueOf() - this.lastShow.valueOf(),
        totalDuration: (new Date).valueOf() - this.initialShow.valueOf(),
      });
    }
  }

  ngOnInit() {
  }

}
