import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter change event when selecting a category', () => {
    spyOn(component.filterChange, 'emit');
    const select = fixture.nativeElement.querySelector('select');
    select.value = select.options[1].value; // selecting "electronics"
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.filterChange.emit).toHaveBeenCalledWith('electronics');
  });
});
