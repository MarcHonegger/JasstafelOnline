import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPunkteComponent } from './dialog-punkte.component';

describe('DialogPunkteComponent', () => {
  let component: DialogPunkteComponent;
  let fixture: ComponentFixture<DialogPunkteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPunkteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPunkteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
