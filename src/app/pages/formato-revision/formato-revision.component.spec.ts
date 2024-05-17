import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoRevisionComponent } from './formato-revision.component';

describe('FormatoRevisionComponent', () => {
  let component: FormatoRevisionComponent;
  let fixture: ComponentFixture<FormatoRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatoRevisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormatoRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
