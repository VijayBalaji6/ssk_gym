import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersComponentComponent } from './trainers-component.component';

describe('TrainersComponentComponent', () => {
  let component: TrainersComponentComponent;
  let fixture: ComponentFixture<TrainersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainersComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
