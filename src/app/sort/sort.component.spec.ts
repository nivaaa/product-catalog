import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortComponent } from './sort.component';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit sort change event when sorting is selected', () => {
    spyOn(component.sortChange, 'emit');
    const select = fixture.nativeElement.querySelector('select');
    select.value = select.options[1].value; // selecting "desc"
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.sortChange.emit).toHaveBeenCalledWith('desc');
  });
});
