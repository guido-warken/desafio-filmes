import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add messages to its list', () => {
    service.add('msg1');
    service.add('msg2');
    service.add('msg3');
    expect(service.messages.length).toEqual(3);
    expect(service.messages[0]).toEqual('msg1');
    expect(service.messages[1]).toEqual('msg2');
    expect(service.messages[2]).toEqual('msg3');
  });

  it('Should remove all messages from its list', () => {
    service.add('msg1');
    service.add('msg2');
    service.add('msg3');
expect(service.messages).toBeTruthy();
service.clear();
expect(service.messages.length).toEqual(0);
  });
});
