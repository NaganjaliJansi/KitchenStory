import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Array<Product> = [];
  public errorMessage:string="";
  public filteredData!: any[];
  public searchText:string="";
  public id!:number;
  constructor(private service:ProductService,private route:ActivatedRoute,private router:Router) { 
  
  }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
    this.service.getProducts().subscribe((data: Product[])=>{
      this.products=data;
      this.filteredData=data;
      console.log(this.products)
    },()=>{
      this.errorMessage="No Products Found!!"
    })
  }
  performFilter(filterBy: string): Product[] {
    if(filterBy == ""){
      this.filteredData = this.products;
        return this.filteredData;
    }
    if (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        this.filteredData = this.products.filter((product: Product) =>
        product.productName.toLocaleLowerCase().includes(filterBy.toLowerCase()));
        return this.filteredData;
    } else {
      this.filteredData = this.products;
        return this.filteredData;
    }
}
buyNow(id:any){
  this.router.navigate(["/buy/",id])
}

}
  