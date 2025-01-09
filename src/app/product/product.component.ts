import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  

  products :any[] =[];
  
  constructor(private service:ProductService,private http:HttpClient) {
    
  }
  ngOnInit(): void {
    this.service.getProducts()
    .subscribe(
      (response: any) => { 
       this.products = response.products; }); 
    }

  }



