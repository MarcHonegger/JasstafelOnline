import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWeisenComponent } from './dialog-weisen.component';

describe('DialogWeisenComponent', () => {
  let component: DialogWeisenComponent;
  let fixture: ComponentFixture<DialogWeisenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWeisenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWeisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
