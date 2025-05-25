import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquibackgroundComponent } from './liquibackground.component';

describe('LiquibackgroundComponent', () => {
  let component: LiquibackgroundComponent;
  let fixture: ComponentFixture<LiquibackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiquibackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiquibackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
