import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-username',
  templateUrl: './assignment-username.component.html',
  styleUrls: ['./assignment-username.component.css']
})
export class AssignmentUsernameComponent implements OnInit {

  username = '';
  paragraph = '';

  onUserNameChange(event: Event) {
    this.getParagraph();
    this.username = '';
  }

  allowSave() {
    return this.username.length > 0;
  }

  getParagraph() {
    this.paragraph = `some paragraph for ${this.username}.`;
  }

  constructor() { }

  ngOnInit() {
  }

}
