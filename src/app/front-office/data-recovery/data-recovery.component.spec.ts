import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataRecoveryComponent } from './data-recovery.component';

describe('DataRecoveryComponent', () => {
  let component: DataRecoveryComponent;
  let fixture: ComponentFixture<DataRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataRecoveryComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(DataRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
