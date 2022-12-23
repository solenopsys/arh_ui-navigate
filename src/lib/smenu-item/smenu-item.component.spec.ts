import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SMenuItemComponent} from './smenu-item.component';

describe('SMenuItemComponent', () => {
  let component: SMenuItemComponent;
  let fixture: ComponentFixture<SMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
