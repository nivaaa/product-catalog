import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';

interface Product {
  name: string;
  image: string;
  price: number;
  category: string;
}

interface ProductList {
  userId: string;
  id: number;
  title: string;
  completed: string;
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

  filteredProducts: ProductList[] = [];
  masterFilteredProducts: ProductList[] = [];

  constructor(public productListService: ProductListService) { }

  ngOnInit(): void {
    this.productListService.getProductDetails().subscribe((res: any)=> {
      this.masterFilteredProducts = structuredClone(res);
      this.filteredProducts = res
    })
  }

filterByCategory(title: string) {
  this.filteredProducts = title.length ? this.masterFilteredProducts.filter((p:ProductList) => p.title === title) : this.masterFilteredProducts;
}

sortByPrice(order: string) {
  this.filteredProducts = this.filteredProducts.sort((a, b) => order === 'asc' ? a.id - b.id : b.id - a.id);
}

}
