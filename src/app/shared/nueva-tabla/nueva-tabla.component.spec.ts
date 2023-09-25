import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTablaComponent } from './nueva-tabla.component';

describe('NuevaTablaComponent', () => {
  let component: NuevaTablaComponent;
  let fixture: ComponentFixture<NuevaTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaTablaComponent]
    });
    fixture = TestBed.createComponent(NuevaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
