import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStartSchieberComponent } from './dialog-start-schieber.component';

describe('DialogStartSchieberComponent', () => {
  let component: DialogStartSchieberComponent;
  let fixture: ComponentFixture<DialogStartSchieberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogStartSchieberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStartSchieberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
