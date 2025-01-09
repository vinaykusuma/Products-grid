import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl : any = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

 getProducts() : Observable<any>
 {
     return this.http.get<any>(`${this.baseurl}/products`);
    
 }



}
