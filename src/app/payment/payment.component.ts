import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public id!:number;
  constructor(private router:Router,private route:ActivatedRoute) { }
    ngOnInit() {
      
      this.id=this.getRandomIntInclusive(1000,9999);
    }
     getRandomIntInclusive(min:number, max:number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); 
    }
    backToHome(){
      this.router.navigate(['/productList'])
    }
}
