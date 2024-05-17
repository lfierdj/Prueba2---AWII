import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRevisionComponent } from './tabla-revision.component';

describe('TablaRevisionComponent', () => {
  let component: TablaRevisionComponent;
  let fixture: ComponentFixture<TablaRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaRevisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
