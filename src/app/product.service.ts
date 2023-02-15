import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any = [];
 
  constructor(private http:HttpClient) {
    this.products = this.http.get<any>("http://localhost:3000/products");
   }
   getProducts(){
    return this.http.get<any>("http://localhost:3000/products");
   }
   getProductById(Passedid: number){
    return this.http.get<any>("http://localhost:3000/products",{params:{id:Passedid}})
   }
   getUsers(){
    return this.http.get<any>("http://localhost:3000/users");
   }
}
