import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private baseUR:string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(public api: HttpClient) { }

  public getProductDetails(){
    return this.api.get(this.baseUR);
  }
}
