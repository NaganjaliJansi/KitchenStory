
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  public productId!:number;
  public selectedProduct!:any;
  public quantity:number=1;
  public Amount!:number;
  public popup = false;
  public paymentForm!:FormGroup;
  ccNumberField: any;
  constructor(private route:ActivatedRoute,private fb:FormBuilder, private service:ProductService,private router:Router) { }
  paymentHandler:any = null;
  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.productId = data.id;
      this.service.getProductById(this.productId).subscribe((data)=>{
      this.selectedProduct = data[this.productId-1];
      console.log(this.selectedProduct);
      this.Amount = this.selectedProduct.price * this.quantity;
      })
    });
    this.paymentForm = this.fb.group({
      emailId: [' ',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      cardNumber: [' ', [Validators.required, Validators.pattern('^[ 0-9]*$'), Validators.maxLength(16)]]
    })
  }
  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  decreaseValue(){
    if(this.quantity>0){
      this.quantity--;
      this.Amount = this.selectedProduct.price * this.quantity;
    }
    else{
      this.quantity=0;
      this.Amount = this.selectedProduct.price * this.quantity;
    }
  } 
  increaseValue(){
    this.quantity++;
    this.Amount = this.selectedProduct.price * this.quantity;
  }
  payNow(){
    this.router.navigate(["/payment"]);
  }
}
