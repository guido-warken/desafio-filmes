import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibleFeedbackComponent } from './accessible-feedback/accessible-feedback.component';



@NgModule({
  declarations: [AccessibleFeedbackComponent],
  imports: [
    CommonModule
  ],
  exports: [AccessibleFeedbackComponent]
})
export class MessagesModule { }
