import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleFeedbackComponent } from './accessible-feedback.component';

describe('AccessibleFeedbackComponent', () => {
  let component: AccessibleFeedbackComponent;
  let fixture: ComponentFixture<AccessibleFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccessibleFeedbackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibleFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the messages for screen reader', () => {
    component.messageService.add('msg1');
    fixture.detectChanges();
const messagesRootElement : HTMLElement = fixture.nativeElement;
expect(messagesRootElement.childElementCount).toEqual(1);
  });

  it('When there are no messages, should not render the component at dom', () => {
    fixture.detectChanges();
const messagesRootElement : HTMLElement = fixture.nativeElement;
expect(messagesRootElement.childElementCount).toEqual(0);
  });
});
