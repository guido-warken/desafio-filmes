import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-accessible-feedback',
  templateUrl: './accessible-feedback.component.html',
})

export class AccessibleFeedbackComponent implements OnInit {

  constructor(public messageService : MessageService) { }

  ngOnInit(): void {
  }

}
