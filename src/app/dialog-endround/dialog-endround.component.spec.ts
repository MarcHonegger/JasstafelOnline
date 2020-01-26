import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEndRoundComponent } from './dialog-endround.component';

describe('DialogEndRoundComponent', () => {
  let component: DialogEndRoundComponent;
  let fixture: ComponentFixture<DialogEndRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEndRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEndRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
