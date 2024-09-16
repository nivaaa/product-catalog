import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of products', () => {
    component.products = [
      { name: 'Laptop', image: 'image1.jpg', price: 10, category: 'electronics' },
      { name: 'Jeans', image: 'image2.jpg', price: 20, category: 'clothing' },
    ];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const productItems = compiled.querySelectorAll('.product-item');
    expect(productItems.length).toBe(2);
    expect(productItems[0].querySelector('h3')?.textContent).toContain('Laptop');
    expect(productItems[1].querySelector('h3')?.textContent).toContain('Jeans');
  });

  it('should display a message when no products are available', () => {
    component.filteredProducts = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const message = compiled.querySelector('p')?.textContent;
    expect(message).toContain('No products match your criteria.');
  });
});
