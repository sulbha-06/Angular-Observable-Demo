import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverComponentComponent } from './receiver-component.component';

describe('ReceiverComponentComponent', () => {
  let component: ReceiverComponentComponent;
  let fixture: ComponentFixture<ReceiverComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiverComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
