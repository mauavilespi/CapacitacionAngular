import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevatablaComponent } from './nuevatabla.component';

describe('NuevatablaComponent', () => {
  let component: NuevatablaComponent;
  let fixture: ComponentFixture<NuevatablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevatablaComponent]
    });
    fixture = TestBed.createComponent(NuevatablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
