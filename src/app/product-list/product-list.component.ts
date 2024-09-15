import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  image: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    { name: 'Laptop', image: '../assests/laptop.png', price: 60000, category: 'electronics' },
    { name: 'T-Shirt', image: 'tshirt.png', price: 19, category: 'clothing' },
    { name: 'Headphones', image: 'headphones.png', price: 199, category: 'electronics' },
    { name: 'Jeans', image: 'jeans.png', price: 49, category: 'clothing' },
    { name: 'Mobile Phones','image': '', price: 10000, category: 'electronics'},
    { name: 'Trousers', image: '', price: 1500, category: 'clothing'},
    { name: 'Shoes', image: '', price: 3500, category: 'shoes'},
    { name: 'Sandals', image: '', price: 999, category: 'shoes'},
    { name: 'Pants', image: '', price: 1500, category : 'clothing'},
    { name: 'Shirts', image: '', price: 999, category: 'clothing'},
    { name: 'Sneakers', image: '', price: 499, category: 'shoes'}
  ];

  filteredProducts: Product[] = this.products;

  constructor() { }

  ngOnInit(): void { }




filterByPrice(priceRange: string) {
  if (!priceRange) {
    this.filteredProducts = this.products;
    return;
  }

  const [min, max] = priceRange.split('-').map(Number);
  this.filteredProducts = this.products.filter(product =>
    product.price >= min && product.price <= max
  );
}

sortProducts(order: string) {
  this.filteredProducts.sort((a, b) =>
    order === 'asc' ? a.price - b.price : b.price - a.price
  );
}

filterByCategory(category: string) {
  this.filteredProducts = category.length ? this.products.filter(p => p.category === category) : this.products;
}

sortByPrice(order: string) {
  this.filteredProducts = this.filteredProducts.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
}

}
